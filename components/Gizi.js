import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

// Import function 
import { validateInputGizi } from '../modules/ValidateInputGizi';
import { compareFuzzyBerat } from '../modules/CompareFuzzyBerat';
import { hitungLinearBerat } from '../modules/HitungLinearBerat';
import { compareFuzzyUmur } from '../modules/CompareFuzzyUmur';
import { hitungLinearUmur } from '../modules/HitungLinearUmur';
import { compareStatusGizi } from '../modules/CompareStatusGizi';
import { compareBatasStatusGizi } from '../modules/CompareBatasStatusGizi';
import { hitungDefuzzy } from '../modules/HitungDefuzzy';
import { compareYangDihitung } from '../modules/CompareYangDihitung';

export default class Gizi extends React.Component {
  static navigationOptions = {
    title: 'Cek Status Gizi',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#F16A53',
    },
  };
  constructor(props) {
    super(props);
    this.state = { 
      giziUmur: null,
      giziBerat: null,
      giziLaki: false,
      giziPerempuan: false,
      giziHitung: 0,
      giziHasil: '',
      giziWarning: '',

      himpunanFuzzy1: '',
      batasBawah1: null,
      titikTengah1: null,
      batasAtas1: null,
      bentukKurva1: '',

      himpunanFuzzy2: '',
      batasBawah2: null,
      titikTengah2: null,
      batasAtas2: null,
      bentukKurva2: '',

    };
    this.hitungGizi = this.hitungGizi.bind(this);
    this.hitungMin = this.hitungMin.bind(this);
    this.hitungScoreKurva = this.hitungScoreKurva.bind(this);
    this.hitungPersentase = this.hitungPersentase.bind(this);
    this.fixPersen = this.fixPersen.bind(this);
  };

  // Clearing data
  clearingData = () => {
    this.setState({
      giziHitung: 0,
      giziHasil: '',
      giziWarning: '',
    });
  }

  // Hitung Min status gizi
  hitungMin = (berat, umur) => {
    var mins = [];
    var statusGizi;
    var minKecil;
    var kurva;

    for (let i = 0; i < berat.length; i++) {
      for (let j = 0; j < umur.length; j++) {
        statusGizi = compareStatusGizi(berat[i], umur[j]);

        // Compare score terkecil
        if (berat[i].score <= umur[j].score) {
          minKecil = berat[i].score;
        } else if (berat[i].score > umur[j].score) {
          minKecil = umur[j].score;
        } else {
          minKecil = berat[i].score;
        }

        // Compare bentuk kurva
        if (statusGizi === 'Buruk') {
          kurva = 'Turun';
        } else if (statusGizi === 'Kurang') {
          kurva = 'Turun';
        } else if (statusGizi === 'Normal') {
          kurva = 'Turun';
        } else if (statusGizi === 'Gemuk') {
          kurva = 'Naik';
        } else if (statusGizi === 'Obesitas') {
          kurva = 'Naik';
        }

        // set data min
        mins.push({
          fase: umur[j].fase,
          himpunan: berat[i].himpunan,
          status: statusGizi,
          score: minKecil,
          kurva: kurva
        });
      }
    }
    return mins;
  }

  // Hitung alpha min
  hitungAlpha = (data) => {
    var hasil = 0;

    for (let i=0; i < data.length; i++) {
      hasil = hasil + data[i].score;
    }
    return hasil;
  }

  // Hitung kurva dg score
  hitungScoreKurva = (data) => {
    var hasilHitung = [];
    var scoreKurva;
    var hasilBatas;
    var hasilScore;

    for (let i=0; i < data.length; i++) {
      hasilBatas = compareBatasStatusGizi(data[i]);
      if (data[i].kurva === 'Naik') {
        scoreKurva = hasilBatas.batasBawah + (data[i].score * (hasilBatas.titikTengah - hasilBatas.batasBawah));
        hasilScore = data[i].score * scoreKurva;

        data[i].scoreKurva = scoreKurva;
        data[i].hasilScore = hasilScore;
      } else if (data[i].kurva === 'Turun') {
        scoreKurva = hasilBatas.titikTengah - (data[i].score * (hasilBatas.titikTengah - hasilBatas.batasBawah));
        hasilScore = data[i].score * scoreKurva;

        data[i].scoreKurva = scoreKurva;
        data[i].hasilScore = hasilScore;
      }
      hasilHitung.push(data[i])
    }
    return hasilHitung;
  }

  // Hitung Persentase
  hitungPersentase = (status, n) => {
    var hasil = [];
    var stat = {};
    var dataStat;
    var hitung;

    for (let i = 0; i < status.length; i++) {
      stat.status = status[i];
      dataStat = compareBatasStatusGizi(stat);

      if (status[i] === 'Buruk' || status[i] === 'Kurang' || status[i] === 'Normal') {
        hitung = (dataStat.titikTengah - n) / (dataStat.titikTengah - dataStat.batasBawah) * 100;
      } else if (status[i] === 'Gemuk' || status[i] === 'Obesitas') {
        hitung = (n - dataStat.batasBawah) / (dataStat.titikTengah - dataStat.batasBawah) * 100;
      }
      hasil.push({
        status: status[i],
        persen: hitung
      });
    }
    return hasil;
  }

  comparePersen = (angka, data) => {
    var hasil;

    for (let i = 0; i < data.length; i++) {
      if (angka == data[i].persen) {
        hasil = data[i];
      }
    }
    return hasil;
  }

  // fix persen
  fixPersen = (data) => {
    var hasil;
    array = [];

    for (let i = 0; i < data.length; i++) {
      array.push(data[i].persen)
    }
    var largest = Math.max.apply(Math, array);
    hasil = this.comparePersen(largest, data);
    return hasil;
  }

  // Perhitngan gizi
  hitungGizi = () => {
    this.clearingData();

    var valid = validateInputGizi(this.state.giziUmur, this.state.giziBerat, this.state.giziLaki, this.state.giziPerempuan);
    var Umur = this.state.giziUmur;
    var Berat = this.state.giziBerat;
    var Laki = this.state.giziLaki;
    var Perempuan = this.state.giziPerempuan;

    if (valid == false) {
      this.setState({giziWarning: 'Input tidak valid'});
    } else {
      if (Berat <= 30 && Umur <= 60) {

        var hasilFuzzyBerat = compareFuzzyBerat(Laki, Perempuan, Berat);
        var hasilLinearBerat = hitungLinearBerat(hasilFuzzyBerat, Berat);

        var hasilFuzzyUmur = compareFuzzyUmur(Umur, Berat);
        var hasilLinearUmur = hitungLinearUmur(hasilFuzzyUmur, Umur);

        var hasilStatusGizi = this.hitungMin(hasilLinearBerat, hasilLinearUmur);

        var hasilAlpha = this.hitungAlpha(hasilStatusGizi);

        var hasilScoreKurva = this.hitungScoreKurva(hasilStatusGizi);

        var hasilDeFuzzy = hitungDefuzzy(hasilScoreKurva);

        var n = hasilDeFuzzy / hasilAlpha;

        var statusYangDihitung = compareYangDihitung(n);

        var hasilPresentase = this.hitungPersentase(statusYangDihitung, n);

        var hasilAkhir = this.fixPersen(hasilPresentase);

        this.setState({
          giziHitung: Math.round(hasilAkhir.persen),
          giziHasil: hasilAkhir.status
        });

      } else {
        this.setState({giziWarning: 'Berat atau umur diluar batas perhitungan'});
      }
    }

  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <TextInput
              style={{height: 30, width: 200, color: '#4D4D4D', marginRight: 5, borderColor: '#7E8080', borderBottomWidth: 1}}
              keyboardType='numeric'
              onChangeText={(giziUmur) => this.setState({giziUmur})}
              value={this.state.giziUmur}
              placeholder='Umur'
              placeholderTextColor='#7E8080'
            />
            <Text style={{flex: 1, textAlign:'center', color: '#4D4D4D', marginTop: 5}}>Bulan</Text>
          </View>
          <View style={styles.rowText}>
            <TextInput
              style={{height: 30, width: 200, color: '#4D4D4D', marginRight: 5, borderColor: '#7E8080', borderBottomWidth: 1}}
              keyboardType='numeric'
              onChangeText={(giziBerat) => this.setState({giziBerat})}
              value={this.state.giziBerat}
              placeholder='Berat Badan'
              placeholderTextColor='#7E8080'
            />
            <Text style={{flex: 1, textAlign:'center', color: '#4D4D4D', marginTop: 5}}>Kg</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{paddingTop: 15, color: '#4D4D4D'}}>Jenis Kelamin</Text>
          </View>
          <View style={{ marginTop: 20, flexDirection: 'row'}}>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='#F16A53'
                uncheckedColor='#7E8080'
                checked={this.state.giziLaki}
                onPress={() => this.setState({giziLaki: !this.state.giziLaki, giziPerempuan: this.state.giziLaki})}
              />
              <Text style={{marginTop: 15, color: '#4D4D4D'}}> Laki-laki</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='#F16A53'
                uncheckedColor='#7E8080'
                checked={this.state.giziPerempuan}
                onPress={() => this.setState({giziPerempuan: !this.state.giziPerempuan, giziLaki: this.state.giziPerempuan})}
              />
              <Text style={{marginTop: 15, color: '#4D4D4D'}}> Perempuan</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <View style={{width: 100}}>
              <Button
                style={{width: 100}}
                title="Cek"
                color='#F16A53'
                onPress={this.hitungGizi}
              />
            </View>
          </View>

        </View>
        <View style={{alignSelf: 'stretch', backgroundColor: '#1A1A1A', marginTop: 50, height: 160, paddingTop: 50, paddingBottom: 50}}>
          <Text style={{textAlign: 'center', color: '#F16A53', fontSize: 10}}>{this.state.giziWarning}</Text>
          <Text style={{textAlign: 'center', color: '#FFFFFF'}}>Hasil</Text>
          <Text style={{textAlign: 'center', color: '#F16A53', fontSize: 18}}>Gizi {this.state.giziHasil}: {this.state.giziHitung}%</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  container: {
    width: 280,
    textAlign: 'center',
    margin: 'auto'
  },
  rowText: {
    marginTop: 25,
    flexDirection: 'row',
  }
});

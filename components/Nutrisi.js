import React from 'react';
import { StyleSheet, Text, View, Button, Picker, TextInput } from 'react-native';

import { validateInputNutrisi } from '../modules/ValidateInputNutrisi';
import { tabelKriteriaNutrisi } from '../modules/TabelKriteriaNutrisi';
import { hitungTotalKriteria } from '../modules/HitungTotalKriteria';
import { akarKuadrat } from '../modules/AkarKuadrat';
import { matriksTernormalisasi } from '../modules/MatriksTernormalisasi';
import { compareNutrisiSeimbang } from '../modules/CompareNutrisiSeimbang';
import { hitungBobot } from '../modules/HitungBobot';
import { ideal } from '../modules/Ideal';
import { convertMatriks } from '../modules/ConvertMatriks';
import { hitungJarak } from '../modules/HitungJarak';
import { hitungPrefensi } from '../modules/HitungPrefensi';
import { menentukanMenu } from '../modules/MenentukanMenu';

export default class Nutrisi extends React.Component {
  static navigationOptions = {
    title: 'Cek Nutrisi',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#F16A53',
    },
  };
  constructor(props) {
    super(props);
    this.state = { 
      nutrisiUmur: null,
      nutrisiGizi: null,
      nutrisiKalori: null,
      nutrisiPrefensi: '-',

      nutrisiEnergi: '-',
      nutrisiProtein: '-',
      nutrisiLemak: '-',
      nutrisiKarbohidrat: '-',
      nutrisiVitamin: '-',
      nutrisiMenu: '-',
      nutrisiWarning: '',
    };
    this.hitungNutrisi = this.hitungNutrisi.bind(this);
  };

  clearingData = () => {
    this.setState({
      nutrisiEnergi: '-',
      nutrisiProtein: '-',
      nutrisiLemak: '-',
      nutrisiKarbohidrat: '-',
      nutrisiVitamin: '-',
      nutrisiMenu: '-',
      nutrisiWarning: '',
    });
  }

  hitungNutrisi = () => {
    this.clearingData();

    var Umur = this.state.nutrisiUmur;
    var Kalori = this.state.nutrisiKalori;
    var Gizi = this.state.nutrisiGizi;
    var totalKriteria;
    var hasilAkarKuadrat;
    var tabelTernormalisasi;
    var nutrisiSeimbang;
    var hasilBobot;
    var keputusanTernormalisasi;
    var hasilIdealPositif;
    var hasilIdealNegatif;
    var hasilConvert;
    var hasilJarakPositif;
    var hasilJarakNegatif;
    var hasilPrefensi;
    var prefensiTerbesar;

    var valid = validateInputNutrisi(Umur, Kalori);

    if (valid == false) {
      this.setState({ nutrisiWarning: 'Umur atau Kalori yang anda masukan tidak valid.' });
    } else {
      if (Umur <= 61 && Kalori <= 3000) {
        totalKriteria = hitungTotalKriteria(tabelKriteriaNutrisi);
        hasilAkarKuadrat = akarKuadrat(totalKriteria);

        tabelTernormalisasi = matriksTernormalisasi(tabelKriteriaNutrisi, hasilAkarKuadrat, "Bagi");

        nutrisiSeimbang = compareNutrisiSeimbang(Umur);

        hasilBobot = hitungBobot(Umur, Gizi, Kalori, nutrisiSeimbang);

        keputusanTernormalisasi = matriksTernormalisasi(tabelTernormalisasi, hasilBobot, "Kali")

        hasilIdealPositif = ideal(keputusanTernormalisasi, 'Positif');
        hasilIdealNegatif = ideal(keputusanTernormalisasi, 'Negatif');

        hasilConvert = convertMatriks(keputusanTernormalisasi);

        hasilJarakPositif = hitungJarak(hasilConvert, hasilIdealPositif);
        hasilJarakNegatif = hitungJarak(hasilConvert, hasilIdealNegatif);

        hasilPrefensi = hitungPrefensi(hasilJarakPositif, hasilJarakNegatif);

        prefensiTerbesar = Math.max.apply(Math, hasilPrefensi)

        this.setState({
          nutrisiEnergi: hasilBobot[0],
          nutrisiProtein: hasilBobot[1],
          nutrisiLemak: hasilBobot[2],
          nutrisiKarbohidrat: hasilBobot[3],
          nutrisiVitamin: hasilBobot[4],
          nutrisiMenu: menentukanMenu(hasilPrefensi),
          nutrisiPrefensi: prefensiTerbesar.toFixed(3)
        });

      } else {
        this.setState({nutrisiWarning: 'Umur atau Kalori yang anda masukan tidak valid'});
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
              onChangeText={(nutrisiUmur) => this.setState({nutrisiUmur})}
              value={this.state.nutrisiUmur}
              placeholder='Umur'
              placeholderTextColor='#7E8080'
            />
            <Text style={{flex: 1, textAlign:'center', color: '#4D4D4D', marginTop: 5}}>Bulan</Text>
          </View>
          <Text style={{color: '#4D4D4D', marginTop: 30}}>Status Gizi:</Text>
          <View style={{borderColor: '#7E8080', borderBottomWidth: 1}}>
            <Picker
              selectedValue={this.state.nutrisiGizi}
              style={{height: 50, width: 250, color: '#4D4D4D'}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({nutrisiGizi: itemValue})
              }>
              <Picker.Item label="Buruk" value="Buruk" />
              <Picker.Item label="Kurang" value="Kurang" />
              <Picker.Item label="Normal" value="Normal" />
              <Picker.Item label="Gemuk" value="Gemuk" />
              <Picker.Item label="Obesitas" value="Obesitas" />
            </Picker>
          </View>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <TextInput
              style={{height: 30, width: 200, color: '#4D4D4D', marginRight: 5, borderColor: '#7E8080', borderBottomWidth: 1}}
              keyboardType='numeric'
              onChangeText={(nutrisiKalori) => this.setState({nutrisiKalori})}
              value={this.state.nutrisiKalori}
              placeholder='Kalori'
              placeholderTextColor='#7E8080'
            />
            <Text style={{flex: 1, textAlign:'center', color: '#4D4D4D', marginTop: 5}}>Kkal</Text>
          </View>
          <View style={{marginTop: 30, alignItems: 'center'}}>
          <View style={{width: 100}}>
            <Button
              style={{width: 100}}
              title="Cek"
              color='#F16A53'
              onPress={this.hitungNutrisi}
            />
          </View>
          </View>
        </View>
        <View style={{alignSelf: 'stretch', backgroundColor: '#1A1A1A', marginTop: 30, height: 200, paddingTop: 20, paddingBottom: 30}}>
          <Text style={{textAlign: 'center', color: '#F16A53', fontSize: 10, marginTop: 0}}>{this.state.nutrisiWarning}</Text>
          <Text style={{textAlign: 'center', color: '#F16A53'}}>Bobot Nutrisi</Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize: 10, marginTop: 0}}>Energi: {this.state.nutrisiEnergi}</Text>
                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize: 10, marginTop: 0}}>Protein: {this.state.nutrisiProtein}</Text>
                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize: 10, marginTop: 0}}>Lemak: {this.state.nutrisiLemak}</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize: 10, marginTop: 0}}>Karbohidrat: {this.state.nutrisiKarbohidrat}</Text>
                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize: 10, marginTop: 0}}>Vitamin: {this.state.nutrisiVitamin}</Text>
              </View>
            </View>
          </View> 
          <Text style={{textAlign: 'center', color: '#F16A53', fontSize: 14}}>Berdasarkan nilai prefensi: {this.state.nutrisiPrefensi}</Text>
          <Text style={{textAlign: 'center', color: '#F16A53', fontSize: 14}}>Direkomendasikan mengkonsumsi:</Text>
          <Text style={{textAlign: 'center', color: '#FFFFFF', fontSize: 18}}>{this.state.nutrisiMenu}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    width: 280,
    textAlign: 'center',
    margin: 'auto'
  }
});


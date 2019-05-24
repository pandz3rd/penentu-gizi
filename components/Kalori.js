import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class Kalori extends React.Component {
  static navigationOptions = {
    title: 'Cek Kebutuhan Kalori',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#F16A53',
    },
  };
  constructor(props) {
    super(props);
    this.state = { 
      kaloriUmur: null,
      kaloriBerat: null,
      kaloriLaki: false,
      kaloriPerempuan: false,
      kaloriHitung: 0,
      kaloriHasil: '',
      kaloriWarning: '',
    };
    this.hitungKalori = this.hitungKalori.bind(this);
  };

  clearingData = () => {
    this.setState({
      kaloriHitung: 0,
      kaloriHasil: '',
      kaloriWarning: '',
    });
  }

  validateInputKalori = () => {
    var validate;
    var Umur = this.state.kaloriUmur;
    var Berat = this.state.kaloriBerat;

    // Validate input
    if (Berat <= 0 || Berat == null || Umur == null || Umur <= 0) {
      validate = false;
      return validate;
    } else {
      validate = true;
      return validate;
    }
  }

  hitungKalori = () => {
    this.clearingData();

    var Umur = this.state.kaloriUmur;
    var Berat = this.state.kaloriBerat;
    var Laki = this.state.kaloriLaki;
    var Perempuan = this.state.kaloriPerempuan;
    var Hitung = this.state.kaloriHitung;

    var valid = this.validateInputKalori();

    if (valid == false) {
      this.setState({ kaloriWarning: 'Berat atau Umur yang anda masukan tidak valid.' });
    } else {
      // Umur 0 - 3
      if (Umur >= 0 && Umur <= 3) {
        // Laki
        if (Laki == true) {
          this.setState({ kaloriHitung: 60.9 * Berat - 54 });
          console.log('Laki: ', Hitung)
        }
        // perempuan
        else if (Perempuan == true) {
          this.setState({kaloriHitung: 61 * Berat - 51});
          console.log('Perempuan: ', Hitung)
        } else {
          this.setState({ kaloriWarning: 'Jenis kelamin tidak jelas.' });
          console.log('Gender tidak jelas')
        }
      }
      // Umur 4 - 10
      else if (Umur >= 4 && Umur <= 10) {
        // Laki
        if (Laki == true) {
          this.setState({ kaloriHitung: 22.7 * Berat + 495 });
          console.log('Laki: ', Hitung)
        }
        // Perempuan
        else if (Perempuan == true) {
          this.setState({ kaloriHitung: 22.5 * Berat + 499 });
          console.log('Perempuan: ', Hitung)
        } else {
          this.setState({ kaloriWarning: 'Jenis kelamin tidak jelas.' });
          console.log('Gender tidak jelas')
        }
      }
      // Umur 11 - 18
      else if (Umur >= 11 && Umur <= 18) {
        // Laki
        if (Laki == true) {
          this.setState({ kaloriHitung: 17.5 * Berat + 651 });
          console.log('Laki: ', Hitung)
        }
        // Perempuan
        else if (Perempuan == true) {
          this.setState({ kaloriHitung: 12.2 * Berat + 746 });
          console.log('Perempuan: ', Hitung)
        } else {
          this.setState({ kaloriWarning: 'Jenis kelamin tidak jelas.' });
          console.log('Gender tidak jelas')
        }
      }
      // Umur 19 - 30
      else if (Umur >= 19 && Umur <= 30) {
        // Laki
        if (Laki == true) {
          this.setState({ kaloriHitung: 15.3 * Berat + 679 });
          console.log('Laki: ', Hitung)
        }
        // Perempuan
        else if (Perempuan == true) {
          this.setState({ kaloriHitung: 14.7 * Berat + 496 });
          console.log('Perempuan: ', Hitung)
        } else {
          this.setState({ kaloriWarning: 'Jenis kelamin tidak jelas.' });
          console.log('Gender tidak jelas')
        }
      }
      // Umur 31 - 60
      else if (Umur >= 31 && Umur <= 60) {
        // Laki
        if (Laki == true) {
          this.setState({ kaloriHitung: 11.6 * Berat + 879 });
          console.log('Laki: ', Hitung)
        }
        // Perempuan
        else if (Perempuan == true) {
          this.setState({ kaloriHitung: 8.7 * Berat + 829 });
          console.log('Perempuan: ', Hitung)
        } else {
          this.setState({ kaloriWarning: 'Jenis kelamin tidak jelas.' });
          console.log('Gender tidak jelas')
        }
      }
      // Umur 61 keatas
      else if (Umur >= 61) {
        // Laki
        if (Laki == true) {
          this.setState({ kaloriHitung: 13.5 * Berat + 487 });
          console.log('Laki: ', Hitung)
        }
        // Perempuan
        else if (Perempuan == true) {
          this.setState({ kaloriHitung: 10.5 * Berat + 596 });
          console.log('Perempuan: ', Hitung)
        } else {
          this.setState({ kaloriWarning: 'Jenis kelamin tidak jelas.' });
          console.log('Gender tidak jelas')
        }
      }
      else {
        this.setState({ kaloriWarning: 'Masukan umur dengan jelas.' });
        console.log('Umur tidak jelas')
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
              onChangeText={(kaloriUmur) => this.setState({kaloriUmur})}
              value={this.state.kaloriUmur}
              placeholder='Umur'
              placeholderTextColor='#7E8080'
            />
            <Text style={{flex: 1, textAlign:'center', color: '#4D4D4D', marginTop: 5}}>Bulan</Text>
          </View>
          <View style={styles.rowText}>
            <TextInput
              style={{height: 30, width: 200, color: '#4D4D4D', marginRight: 5, borderColor: '#7E8080', borderBottomWidth: 1}}
              keyboardType='numeric'
              onChangeText={(kaloriBerat) => this.setState({kaloriBerat})}
              value={this.state.kaloriBerat}
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
                checked={this.state.kaloriLaki}
                onPress={() => this.setState({kaloriLaki: !this.state.kaloriLaki, kaloriPerempuan: this.state.kaloriLaki})}
              />
              <Text style={{marginTop: 15, color: '#4D4D4D'}}> Laki-laki</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='#F16A53'
                uncheckedColor='#7E8080'
                checked={this.state.kaloriPerempuan}
                onPress={() => this.setState({kaloriPerempuan: !this.state.kaloriPerempuan, kaloriLaki: this.state.kaloriPerempuan})}
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
                onPress={this.hitungKalori}
              />
            </View>
          </View>
        </View>

        <View style={{alignSelf: 'stretch', backgroundColor: '#1A1A1A', marginTop: 50, height: 160, paddingTop: 50, paddingBottom: 50}}>
          <Text style={{textAlign: 'center', color: '#F16A53', fontSize: 10}}>{this.state.kaloriWarning}</Text>
          <Text style={{textAlign: 'center', color: '#FFFFFF'}}>Hasil</Text>
          <Text style={{textAlign: 'center', color: '#F16A53', fontSize: 18}}>{this.state.kaloriHitung} Kkal / Hari</Text>
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
  },
  rowText: {
    marginTop: 25,
    flexDirection: 'row',
  }
});

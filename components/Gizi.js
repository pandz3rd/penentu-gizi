import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements'

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
    this.compareFuzzyUmur = this.compareFuzzyUmur.bind(this);
    this.compareFuzzyBerat = this.compareFuzzyBerat.bind(this);
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

  // Filter input data
  validateInputGizi = () => {
    var validate;
    var Umur = this.state.giziUmur;
    var Berat = this.state.giziBerat;

    // Validate input
    if (Berat <= 0 || Berat == null || Umur == null || Umur <= 0) {
      validate = false;
      return validate;
    } else {
      validate = true;
      return validate;
    }
  }

  // Tabel fuzzy berdasar berat
  compareFuzzyBerat = () => {
    var Laki = this.state.giziLaki;
    var Perempuan = this.state.giziPerempuan;
    var Berat = this.state.giziBerat;

    var fuzzy1 = {};
    var fuzzy2 = {};
    var fuzzy3 = {};
    var fuzzy4 = {};

    var hasilFuzzy = [];

    if (Laki == true) {
      if (Berat >= 2 && Berat < 5) {
        fuzzy1.himpunan = 'Sangat Kurus';
        fuzzy1.batasBawah = 2;
        fuzzy1.titikTengah = 4;
        fuzzy1.batasAtas = null;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Kurus';
        fuzzy2.batasBawah = 2;
        fuzzy2.titikTengah = 6;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat >= 5 && Berat < 6) {
        fuzzy1.himpunan = 'Kurus';
        fuzzy1.batasBawah = 2;
        fuzzy1.titikTengah = 6;
        fuzzy1.batasAtas = null;
        fuzzy1.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1];
        return hasilFuzzy;

      } else if (Berat == 6) {
        fuzzy1.himpunan = 'Kurus';
        fuzzy1.batasBawah = 2;
        fuzzy1.titikTengah = 6;
        fuzzy1.batasAtas = null;
        fuzzy1.bentukKurva = 'Naik';

        fuzzy2.himpunan = 'Kurus';
        fuzzy2.batasBawah = null;
        fuzzy2.titikTengah = 6;
        fuzzy2.batasAtas = 10;
        fuzzy2.bentukKurva = 'Turun';

        fuzzy3.himpunan = 'Normal 1';
        fuzzy3.batasBawah = 6;
        fuzzy3.titikTengah = 10;
        fuzzy3.batasAtas = null;
        fuzzy3.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3];
        return hasilFuzzy;

      } else if (Berat > 6 && Berat < 10) {
        fuzzy1.himpunan = 'Kurus';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 6;
        fuzzy1.batasAtas = 10;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 1';
        fuzzy2.batasBawah = 6;
        fuzzy2.titikTengah = 10;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 10) {
        fuzzy1.himpunan = 'Kurus';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 6;
        fuzzy1.batasAtas = 10;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 1';
        fuzzy2.batasBawah = 6;
        fuzzy2.titikTengah = 10;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        fuzzy3.himpunan = 'Normal 1';
        fuzzy3.batasBawah = null;
        fuzzy3.titikTengah = 10;
        fuzzy3.batasAtas = 14;
        fuzzy3.bentukKurva = 'Turun';

        fuzzy4.himpunan = 'Normal 2';
        fuzzy4.batasBawah = 10;
        fuzzy4.titikTengah = 14;
        fuzzy4.batasAtas = null;
        fuzzy4.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3];
        return hasilFuzzy;

      } else if (Berat > 10 && Berat < 14) {
        fuzzy1.himpunan = 'Normal 1';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 10;
        fuzzy1.batasAtas = 14;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 2';
        fuzzy2.batasBawah = 10;
        fuzzy2.titikTengah = 14;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 14) {
        fuzzy1.himpunan = 'Normal 1';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 10;
        fuzzy1.batasAtas = 14;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 2';
        fuzzy2.batasBawah = 10;
        fuzzy2.titikTengah = 14;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        fuzzy3.himpunan = 'Normal 2';
        fuzzy3.batasBawah = null;
        fuzzy3.titikTengah = 14;
        fuzzy3.batasAtas = 18;
        fuzzy3.bentukKurva = 'Turun';

        fuzzy4.himpunan = 'Normal 3';
        fuzzy4.batasBawah = 14;
        fuzzy4.titikTengah = 18;
        fuzzy4.batasAtas = null;
        fuzzy4.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3, fuzzy4];
        return hasilFuzzy;

      } else if (Berat > 14 && Berat < 18) {
        fuzzy1.himpunan = 'Normal 2';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 14;
        fuzzy1.batasAtas = 18;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 3';
        fuzzy2.batasBawah = 14;
        fuzzy2.titikTengah = 18;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 18) {
        fuzzy1.himpunan = 'Normal 2';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 14;
        fuzzy1.batasAtas = 18;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 3';
        fuzzy2.batasBawah = 14;
        fuzzy2.titikTengah = 18;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        fuzzy3.himpunan = 'Normal 3';
        fuzzy3.batasBawah = null;
        fuzzy3.titikTengah = 18;
        fuzzy3.batasAtas = 22;
        fuzzy3.bentukKurva = 'Turun';

        fuzzy4.himpunan = 'Gemuk';
        fuzzy4.batasBawah = 18;
        fuzzy4.titikTengah = 22;
        fuzzy4.batasAtas = null;
        fuzzy4.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3, fuzzy4];
        return hasilFuzzy;

      } else if (Berat > 18 && Berat < 22) {
        fuzzy1.himpunan = 'Normal 3';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 18;
        fuzzy1.batasAtas = 22;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Gemuk';
        fuzzy2.batasBawah = 18;
        fuzzy2.titikTengah = 22;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 22) {
        fuzzy1.himpunan = 'Normal 3';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 18;
        fuzzy1.batasAtas = 22;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Gemuk';
        fuzzy2.batasBawah = 18;
        fuzzy2.titikTengah = 22;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        fuzzy3.himpunan = 'Gemuk';
        fuzzy3.batasBawah = null;
        fuzzy3.titikTengah = 22;
        fuzzy3.batasAtas = 26;
        fuzzy3.bentukKurva = 'Turun';

        fuzzy4.himpunan = 'Sangat Gemuk';
        fuzzy4.batasBawah = 22;
        fuzzy4.titikTengah = 28;
        fuzzy4.batasAtas = null;
        fuzzy4.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3, fuzzy4];
        return hasilFuzzy;

      } else if (Berat > 22 && Berat < 26) {
        fuzzy1.himpunan = 'Gemuk';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 22;
        fuzzy1.batasAtas = 26;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Sangat Gemuk';
        fuzzy2.batasBawah = 22;
        fuzzy2.titikTengah = 28;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat > 26 && Berat <= 28) {
        fuzzy1.himpunan = 'Sangat Gemuk';
        fuzzy1.batasBawah = 22;
        fuzzy1.titikTengah = 28;
        fuzzy1.batasAtas = null;
        fuzzy1.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1];
        return hasilFuzzy;

      } else {
        this.setState({giziWarning: 'Data berat tidak terdaftar'});
        console.log('Data berat tidak terdaftar')

        return hasilFuzzy;
      }
      
    } else if (Perempuan == true) {
      if (Berat >= 1 && Berat < 5) {
        fuzzy1.himpunan = 'Sangat Kurus';
        fuzzy1.batasBawah = 1;
        fuzzy1.titikTengah = null;
        fuzzy1.batasAtas = 4;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Kurus';
        fuzzy2.batasBawah = 1;
        fuzzy2.titikTengah = 6;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat >= 5 && Berat < 6) {
        fuzzy1.himpunan = 'Kurus';
        fuzzy1.batasBawah = 1;
        fuzzy1.titikTengah = 6;
        fuzzy1.batasAtas = null;
        fuzzy1.bentukKurva = 'Naik';

        fuzzy2.himpunan = 'Normal 1';
        fuzzy2.batasBawah = 5;
        fuzzy2.titikTengah = 10;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 6) {
        fuzzy1.himpunan = 'Kurus';
        fuzzy1.batasBawah = 1;
        fuzzy1.titikTengah = 6;
        fuzzy1.batasAtas = null;
        fuzzy1.bentukKurva = 'Naik';

        fuzzy2.himpunan = 'Kurus';
        fuzzy2.batasBawah = null;
        fuzzy2.titikTengah = 6;
        fuzzy2.batasAtas = 10;
        fuzzy2.bentukKurva = 'Turun';

        fuzzy3.himpunan = 'Normal 1';
        fuzzy3.batasBawah = 5;
        fuzzy3.titikTengah = 10;
        fuzzy3.batasAtas = null;
        fuzzy3.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3];
        return hasilFuzzy;

      } else if (Berat > 6 && Berat < 10) {
        fuzzy1.himpunan = 'Kurus';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 6;
        fuzzy1.batasAtas = 10;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 1';
        fuzzy2.batasBawah = 5;
        fuzzy2.titikTengah = 10;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 10) {
        fuzzy1.himpunan = 'Kurus';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 6;
        fuzzy1.batasAtas = 10;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 1';
        fuzzy2.batasBawah = 5;
        fuzzy2.titikTengah = 10;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        fuzzy3.himpunan = 'Normal 1';
        fuzzy3.batasBawah = null;
        fuzzy3.titikTengah = 10;
        fuzzy3.batasAtas = 15;
        fuzzy3.bentukKurva = 'Turun';

        fuzzy4.himpunan = 'Normal 2';
        fuzzy4.batasBawah = 10;
        fuzzy4.titikTengah = 14;
        fuzzy4.batasAtas = null;
        fuzzy4.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3, fuzzy4];
        return hasilFuzzy;

      } else if (Berat > 10 && Berat < 14) {
        fuzzy1.himpunan = 'Normal 1';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 10;
        fuzzy1.batasAtas = 15;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 2';
        fuzzy2.batasBawah = 10;
        fuzzy2.titikTengah = 14;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 14) {
        fuzzy1.himpunan = 'Normal 1';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 10;
        fuzzy1.batasAtas = 15;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 2';
        fuzzy2.batasBawah = 10;
        fuzzy2.titikTengah = 14;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat >= 14 && Berat < 15) {
        fuzzy1.himpunan = 'Normal 1';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 10;
        fuzzy1.batasAtas = 15;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 2';
        fuzzy2.batasBawah = null;
        fuzzy2.titikTengah = 14;
        fuzzy2.batasAtas = 20;
        fuzzy2.bentukKurva = 'Turun';

        fuzzy3.himpunan = 'Normal 3';
        fuzzy3.batasBawah = 15;
        fuzzy3.titikTengah = 18;
        fuzzy3.batasAtas = null;
        fuzzy3.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3];
        return hasilFuzzy;

      } else if (Berat > 15 && Berat < 18) {
        fuzzy1.himpunan = 'Normal 2';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 14;
        fuzzy1.batasAtas = 20;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 3';
        fuzzy2.batasBawah = 15;
        fuzzy2.titikTengah = 18;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 18) {
        fuzzy1.himpunan = 'Normal 2';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 14;
        fuzzy1.batasAtas = 20;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 3';
        fuzzy2.batasBawah = 15;
        fuzzy2.titikTengah = 18;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        fuzzy3.himpunan = 'Normal 3';
        fuzzy3.batasBawah = null;
        fuzzy3.titikTengah = 18;
        fuzzy3.batasAtas = 25;
        fuzzy3.bentukKurva = 'Turun';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3];
        return hasilFuzzy;

      } else if (Berat > 18 && Berat < 20) {
        fuzzy1.himpunan = 'Normal 2';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 14;
        fuzzy1.batasAtas = 20;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 3';
        fuzzy2.batasBawah = null;
        fuzzy2.titikTengah = 18;
        fuzzy2.batasAtas = 25;
        fuzzy2.bentukKurva = 'Turun';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat >= 20 && Berat < 21) {
        fuzzy1.himpunan = 'Normal 2';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 14;
        fuzzy1.batasAtas = 20;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Normal 3';
        fuzzy2.batasBawah = null;
        fuzzy2.titikTengah = 18;
        fuzzy2.batasAtas = 25;
        fuzzy2.bentukKurva = 'Turun';

        fuzzy3.himpunan = 'Gemuk';
        fuzzy3.batasBawah = 20;
        fuzzy3.titikTengah = 22;
        fuzzy3.batasAtas = null;
        fuzzy3.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3];
        return hasilFuzzy;

      } else if (Berat == 21) {
        fuzzy1.himpunan = 'Normal 3';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 18;
        fuzzy1.batasAtas = 25;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Gemuk';
        fuzzy2.batasBawah = 20;
        fuzzy2.titikTengah = 22;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat > 21 && Berat < 23) {
        fuzzy1.himpunan = 'Normal 3';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 18;
        fuzzy1.batasAtas = 25;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Gemuk';
        fuzzy2.batasBawah = 20;
        fuzzy2.titikTengah = 22;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        fuzzy3.himpunan = 'Gemuk';
        fuzzy3.batasBawah = null;
        fuzzy3.titikTengah = 22;
        fuzzy3.batasAtas = 30;
        fuzzy3.bentukKurva = 'Turun';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3];
        return hasilFuzzy;

      } else if (Berat >= 23 && Berat < 25) {
        fuzzy1.himpunan = 'Normal 3';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 18;
        fuzzy1.batasAtas = 25;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Gemuk';
        fuzzy2.batasBawah = null;
        fuzzy2.titikTengah = 22;
        fuzzy2.batasAtas = 30;
        fuzzy2.bentukKurva = 'Turun';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else if (Berat == 25) {
        fuzzy1.himpunan = 'Normal 3';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 18;
        fuzzy1.batasAtas = 25;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Gemuk';
        fuzzy2.batasBawah = null;
        fuzzy2.titikTengah = 22;
        fuzzy2.batasAtas = 30;
        fuzzy2.bentukKurva = 'Naik';

        fuzzy3.himpunan = 'Sangat Gemuk';
        fuzzy3.batasBawah = 25;
        fuzzy3.titikTengah = 30;
        fuzzy3.batasAtas = null;
        fuzzy3.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3];
        return hasilFuzzy;

      } else if (Berat > 25 && Berat <= 30) {
        fuzzy1.himpunan = 'Gemuk';
        fuzzy1.batasBawah = null;
        fuzzy1.titikTengah = 22;
        fuzzy1.batasAtas = 30;
        fuzzy1.bentukKurva = 'Turun';

        fuzzy2.himpunan = 'Sangat Gemuk';
        fuzzy2.batasBawah = 25;
        fuzzy2.titikTengah = 30;
        fuzzy2.batasAtas = null;
        fuzzy2.bentukKurva = 'Naik';

        hasilFuzzy = [fuzzy1, fuzzy2];
        return hasilFuzzy;

      } else {
        this.setState({giziWarning: 'Data berat tidak terdaftar'});
        console.log('Data berat tidak terdaftar')

        return hasilFuzzy;
      }
    } else {
      this.setState({giziWarning: 'Jenis kelamin tidak diketahui'});
    }
  }

  // Hitung fuzzy berat
  hitungLinearBerat = (data) => {
    var linears = [];
    var resultObj = {};
    var result;
    var berat = this.state.giziBerat;

    for (let i=0; i < data.length; i++) {
      if (data[i].bentukKurva === 'Naik') {
        result = (berat - data[i].batasBawah) / (data[i].titikTengah - data[i].batasBawah)
        console.log('berat1: ', data[i].batasBawah, berat, berat - data[i].batasBawah)
        console.log('berat2: ', data[i].titikTengah, data[i].titikTengah - data[i].batasBawah)
        linears.push({score: result, kurva: data[i].bentukKurva, himpunan: data[i].himpunan});

      } else if (data[i].bentukKurva === 'Turun') {
        result = (data[i].batasAtas - berat) / (data[i].batasAtas - data[i].titikTengah)
        linears.push({score: result, kurva: data[i].bentukKurva, himpunan: data[i].himpunan});
      }
    }
    return linears;
  }

  // Tabel fuzzy berdasar berat
  compareFuzzyUmur = () => {
    var Umur = this.state.giziUmur;
    var Berat = this.state.giziBerat;

    var fuzzy1 = {}
    var fuzzy2 = {}
    var fuzzy3 = {}
    var fuzzy4 = {}

    var hasilFuzzy = [];

    if (Umur >= 0 && Umur <= 11) {
      fuzzy1.fase = 'Fase 1';
      fuzzy1.batasBawah = 0;
      fuzzy1.titikTengah = 12;
      fuzzy1.batasAtas = null;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 2';
      fuzzy2.batasBawah = 0;
      fuzzy2.titikTengah = 12;
      fuzzy2.batasAtas = null;
      fuzzy2.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2]
      return hasilFuzzy;

    } else if (Umur == 12) {
      fuzzy1.fase = 'Fase 1';
      fuzzy1.batasBawah = 0;
      fuzzy1.titikTengah = 12;
      fuzzy1.batasAtas = null;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 2';
      fuzzy2.batasBawah = 0;
      fuzzy2.titikTengah = 12;
      fuzzy2.batasAtas = null;
      fuzzy2.bentukKurva = 'Naik';

      fuzzy3.fase = 'Fase 2';
      fuzzy3.batasBawah = null;
      fuzzy3.titikTengah = 12;
      fuzzy3.batasAtas = 24;
      fuzzy3.bentukKurva = 'Turun';

      fuzzy4.fase = 'Fase 3';
      fuzzy4.batasBawah = 12;
      fuzzy4.titikTengah = 24;
      fuzzy4.batasAtas = null;
      fuzzy4.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3, fuzzy4]
      return hasilFuzzy;

    } else if (Umur >= 13 && Umur <= 23) {
      fuzzy1.fase = 'Fase 2';
      fuzzy1.batasBawah = null;
      fuzzy1.titikTengah = 12;
      fuzzy1.batasAtas = 24;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 3';
      fuzzy2.batasBawah = 12;
      fuzzy2.titikTengah = 24;
      fuzzy2.batasAtas = null;
      fuzzy2.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2]
      return hasilFuzzy;

    } else if (Umur == 24) {
      fuzzy1.fase = 'Fase 2';
      fuzzy1.batasBawah = null;
      fuzzy1.titikTengah = 12;
      fuzzy1.batasAtas = 24;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 3';
      fuzzy2.batasBawah = 12;
      fuzzy2.titikTengah = 24;
      fuzzy2.batasAtas = null;
      fuzzy2.bentukKurva = 'Naik';

      fuzzy3.fase = 'Fase 3';
      fuzzy3.batasBawah = null;
      fuzzy3.titikTengah = 24;
      fuzzy3.batasAtas = 36;
      fuzzy3.bentukKurva = 'Turun';

      fuzzy4.fase = 'Fase 4';
      fuzzy4.batasBawah = 24;
      fuzzy4.titikTengah = 36;
      fuzzy4.batasAtas = null;
      fuzzy4.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3, fuzzy4]
      return hasilFuzzy;

    } else if (Umur >= 25 && Umur <= 35) {
      fuzzy1.fase = 'Fase 3';
      fuzzy1.batasBawah = null;
      fuzzy1.titikTengah = 24;
      fuzzy1.batasAtas = 36;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 4';
      fuzzy2.batasBawah = 24;
      fuzzy2.titikTengah = 36;
      fuzzy2.batasAtas = null;
      fuzzy2.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2]
      return hasilFuzzy;

    } else if (Umur == 36) {
      fuzzy1.fase = 'Fase 3';
      fuzzy1.batasBawah = null;
      fuzzy1.titikTengah = 24;
      fuzzy1.batasAtas = 36;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 4';
      fuzzy2.batasBawah = 24;
      fuzzy2.titikTengah = 36;
      fuzzy2.batasAtas = null;
      fuzzy2.bentukKurva = 'Naik';

      fuzzy3.fase = 'Fase 4';
      fuzzy3.batasBawah = null;
      fuzzy3.titikTengah = 36;
      fuzzy3.batasAtas = 48;
      fuzzy3.bentukKurva = 'Turun';

      fuzzy4.fase = 'Fase 5';
      fuzzy4.batasBawah = 36;
      fuzzy4.titikTengah = 48;
      fuzzy4.batasAtas = null;
      fuzzy4.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3, fuzzy4]
      return hasilFuzzy;

    } else if (Umur >= 37 && Umur <= 47) {
      fuzzy1.fase = 'Fase 4';
      fuzzy1.batasBawah = null;
      fuzzy1.titikTengah = 36;
      fuzzy1.batasAtas = 48;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 5';
      fuzzy2.batasBawah = 36;
      fuzzy2.titikTengah = 48;
      fuzzy2.batasAtas = null;
      fuzzy2.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2]
      return hasilFuzzy;

    } else if (Umur == 48) {
      fuzzy1.fase = 'Fase 4';
      fuzzy1.batasBawah = null;
      fuzzy1.titikTengah = 36;
      fuzzy1.batasAtas = 48;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 5';
      fuzzy2.batasBawah = 36;
      fuzzy2.titikTengah = 48;
      fuzzy2.batasAtas = null;
      fuzzy2.bentukKurva = 'Naik';

      fuzzy3.fase = 'Fase 5';
      fuzzy3.batasBawah = null;
      fuzzy3.titikTengah = 48;
      fuzzy3.batasAtas = 60;
      fuzzy3.bentukKurva = 'Turun';

      fuzzy4.fase = 'Fase 6';
      fuzzy4.batasBawah = 48;
      fuzzy4.titikTengah = null;
      fuzzy4.batasAtas = 60;
      fuzzy4.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2, fuzzy3, fuzzy4]
      return hasilFuzzy;

    } else if (Umur >= 49 && Umur <= 60) {
      fuzzy1.fase = 'Fase 5';
      fuzzy1.batasBawah = null;
      fuzzy1.titikTengah = 48;
      fuzzy1.batasAtas = 60;
      fuzzy1.bentukKurva = 'Turun';

      fuzzy2.fase = 'Fase 6';
      fuzzy2.batasBawah = 48;
      fuzzy2.titikTengah = null;
      fuzzy2.batasAtas = 60;
      fuzzy2.bentukKurva = 'Naik';

      hasilFuzzy = [fuzzy1, fuzzy2]
      return hasilFuzzy;

    } else {
      this.setState({giziWarning: 'Data umur tidak terdaftar'});
      console.log('Data umur tidak terdaftar')

      return hasilFuzzy;
    }
  }

  // Hitung fuzzy berat
  hitungLinearUmur = (data) => {
    var linears = [];
    var resultObj = {};
    var result;
    var umur = this.state.giziUmur;

    for (let i=0; i < data.length; i++) {
      if (data[i].bentukKurva === 'Naik') {
        result = (umur - data[i].batasBawah) / (data[i].titikTengah - data[i].batasBawah)
        linears.push({score: result, kurva: data[i].bentukKurva, fase: data[i].fase});
      } else if (data[i].bentukKurva === 'Turun') {
        result = (data[i].batasAtas - umur) / (data[i].batasAtas - data[i].titikTengah)
        linears.push({score: result, kurva: data[i].bentukKurva, fase: data[i].fase});
      }
    }
    return linears;
  }

  // Tabel status gizi
  compareStatusGizi = (berat, umur) => {
    // var himpunan = berat.himpunan;
    var fase = umur.fase;
    var status;

    if (fase === 'Fase 1' && berat.himpunan === 'Sangat Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 1' && berat.himpunan === 'Kurus') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 1' && berat.himpunan === 'Normal 1') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 1' && berat.himpunan === 'Normal 2') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 1' && berat.himpunan === 'Normal 3') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 1' && berat.himpunan === 'Gemuk') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 1' && berat.himpunan === 'Sangat Gemuk') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 2' && berat.himpunan === 'Sangat Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 2' && berat.himpunan === 'Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 2' && berat.himpunan === 'Normal 1') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 2' && berat.himpunan === 'Normal 2') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 2' && berat.himpunan === 'Normal 3') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 2' && berat.himpunan === 'Gemuk') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 2' && berat.himpunan === 'Sangat Gemuk') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 3' && berat.himpunan === 'Sangat Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 3' && berat.himpunan === 'Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 3' && berat.himpunan === 'Normal 1') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 3' && berat.himpunan === 'Normal 2') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 3' && berat.himpunan === 'Normal 3') {
      status = 'Gemuk';
      return status;
    } else if (fase === 'Fase 3' && berat.himpunan === 'Gemuk') {
      status = 'Gemuk';
      return status;
    } else if (fase === 'Fase 3' && berat.himpunan === 'Sangat Gemuk') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 4' && berat.himpunan === 'Sangat Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 4' && berat.himpunan === 'Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 4' && berat.himpunan === 'Normal 1') {
      status = 'Kurang';
      return status;
    } else if (fase === 'Fase 4' && berat.himpunan === 'Normal 2') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 4' && berat.himpunan === 'Normal 3') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 4' && berat.himpunan === 'Gemuk') {
      status = 'Gemuk';
      return status;
    } else if (fase === 'Fase 4' && berat.himpunan === 'Sangat Gemuk') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 5' && berat.himpunan === 'Sangat Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 5' && berat.himpunan === 'Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 5' && berat.himpunan === 'Normal 1') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 5' && berat.himpunan === 'Normal 2') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 5' && berat.himpunan === 'Normal 3') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 5' && berat.himpunan === 'Gemuk') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 5' && berat.himpunan === 'Sangat Gemuk') {
      status = 'Obesitas';
      return status;
    } else if (fase === 'Fase 6' && berat.himpunan === 'Sangat Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 6' && berat.himpunan === 'Kurus') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 6' && berat.himpunan === 'Normal 1') {
      status = 'Buruk';
      return status;
    } else if (fase === 'Fase 6' && berat.himpunan === 'Normal 2') {
      status = 'Kurang';
      return status;
    } else if (fase === 'Fase 6' && berat.himpunan === 'Normal 3') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 6' && berat.himpunan === 'Gemuk') {
      status = 'Normal';
      return status;
    } else if (fase === 'Fase 6' && berat.himpunan === 'Sangat Gemuk') {
      status = 'Obesitas';
      return status;
    } else {
      this.setState({giziWarning: 'Status Gizi tidak ada'});
      console.log('Status Gizi tidak ada')

      return status;
    }
  }

  // Hitung Min status gizi
  hitungMin = (berat, umur) => {
    var mins = [];
    var statusGizi;
    var minKecil;
    var kurva;

    for (let i = 0; i < berat.length; i++) {
      for (let j = 0; j < umur.length; j++) {
        statusGizi = this.compareStatusGizi(berat[i], umur[j]);

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

  // Compare batas status gizi
  compareBatasStatusGizi = (data) => {
    var hasil;

    if (data.status === 'Buruk') {
      hasil = {
        batasBawah: 0,
        titikTengah: 8
      }
    } else if (data.status === 'Kurang') {
      hasil = {
        batasBawah: 4,
        titikTengah: 12
      } 
    } else if (data.status === 'Normal') {
      hasil = {
        batasBawah: 8,
        titikTengah: 20
      } 
    } else if (data.status === 'Gemuk') {
      hasil = {
        batasBawah: 14,
        titikTengah: 22
      } 
    } else if (data.status === 'Obesitas') {
      hasil = {
        batasBawah: 18,
        titikTengah: 28
      } 
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
      hasilBatas = this.compareBatasStatusGizi(data[i]);
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

  // Hitung defuzzy
  hitungDefuzzy = (data) => {
    var hasil = 0;

    for (let i=0; i < data.length; i++) {
      hasil = hasil + data[i].hasilScore;
    }
    return hasil;
  }

  // Cari status yg dihitung
  compareYangDihitung = (angka) => {
    var hasil = [];

    if (angka >= 0 && angka <= 8) {
      hasil.push('Buruk');
    }
    if (angka > 4 && angka <= 12) {
      hasil.push('Kurang');
    }
    if (angka > 8 && angka <= 20) {
      hasil.push('Normal');
    }
    if (angka > 14 && angka <= 22) {
      hasil.push('Gemuk');
    }
    if (angka > 18 && angka <= 28) {
      hasil.push('Obesitas');
    }

    return hasil;
  }

  // Hitung Persentase
  hitungPersentase = (status, n) => {
    var hasil = [];
    var stat = {};
    var dataStat;
    var hitung;

    for (let i = 0; i < status.length; i++) {
      stat.status = status[i];
      dataStat = this.compareBatasStatusGizi(stat);

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

    var valid = this.validateInputGizi();
    var Umur = this.state.giziUmur;
    var Berat = this.state.giziBerat;
    var Laki = this.state.giziLaki;
    var Perempuan = this.state.giziPerempuan;

    var hasilFuzzyBerat;
    var hasilLinearBerat;
    var hasilFuzzyUmur;
    var hasilLinearUmur;
    var hasilStatusGizi;
    var hasilAlpha;
    var hasilScoreKurva;
    var hasilDeFuzzy;
    var n;
    var statusYangDihitung;
    var hasilPresentase;
    var hasilAkhir;

    if (valid == false) {
      this.setState({giziWarning: 'Input tidak valid'});
    } else {
      if (Berat <= 30) {

        hasilFuzzyBerat = this.compareFuzzyBerat();
        hasilLinearBerat = this.hitungLinearBerat(hasilFuzzyBerat);
        console.log('Hasil berat: ', hasilLinearBerat)
        console.log(' ')

        hasilFuzzyUmur = this.compareFuzzyUmur();
        hasilLinearUmur = this.hitungLinearUmur(hasilFuzzyUmur);
        console.log('Hasil umur: ', hasilLinearUmur)
        console.log(' ')

        hasilStatusGizi = this.hitungMin(hasilLinearBerat, hasilLinearUmur);
        console.log('Hasil status gizi: ', hasilStatusGizi)
        console.log(' ')

        hasilAlpha = this.hitungAlpha(hasilStatusGizi);
        console.log('Hasil alpha: ', hasilAlpha)
        console.log(' ')

        hasilScoreKurva = this.hitungScoreKurva(hasilStatusGizi);
        console.log('Hasil hitung kurva: ', hasilScoreKurva)
        console.log(' ')

        hasilDeFuzzy = this.hitungDefuzzy(hasilScoreKurva);
        // console.log('Hasil defuzzy: ', hasilDeFuzzy)
        console.log(' ')

        n = hasilDeFuzzy / hasilAlpha;
        console.log('Hasil defuzzy: ', n)
        console.log(' ')

        statusYangDihitung = this.compareYangDihitung(n);
        console.log('yg dihitung: ', statusYangDihitung)
        console.log(' ')

        hasilPresentase = this.hitungPersentase(statusYangDihitung, n);
        console.log('Hasil presentase: ', hasilPresentase)
        console.log(' ')

        hasilAkhir = this.fixPersen(hasilPresentase);
        console.log('Hasil Akhir: ', hasilAkhir)
        console.log(' ')

        this.setState({
          giziHitung: Math.round(hasilAkhir.persen),
          giziHasil: hasilAkhir.status
        });

      } else {
        this.setState({giziWarning: 'Berat diluar batas perhitungan'});
        console.log('Berat diluar batas perhitungan')
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

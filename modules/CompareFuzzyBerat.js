// Tabel fuzzy berdasar berat
export const compareFuzzyBerat = (Laki, Perempuan, Berat) => {

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

      }
    }
  }
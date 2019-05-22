
// Tabel fuzzy berdasar berat
export const compareFuzzyUmur = (Umur, Berat) => {

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

	}
}
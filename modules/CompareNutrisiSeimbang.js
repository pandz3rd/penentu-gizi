
export const compareNutrisiSeimbang = (umur) => {
	var hasil;

	if (umur > 0 && umur < 7) {
		hasil = {
			energi: 676,
			protein: 101,
			lemak: 405,
			karbohidrat: 169,
			asi: 4
		};
	} else if (umur >= 7 && umur < 10) {
		hasil = {
			energi: 690,
			protein: 103,
			lemak: 172,
			karbohidrat: 414,
			asi: 4
		};
	} else if (umur >= 10 && umur <= 12) {
		hasil = {
			energi: 711,
			protein: 106.65,
			lemak: 177.75,
			karbohidrat: 426.6,
			asi: 3
		};
	} else if (umur > 12 && umur < 36) {
		hasil = {
			energi: 845.77,
			protein: 127,
			lemak: 507.5,
			karbohidrat: 211.5,
			asi: 2
		};
	} else if (umur >= 36 && umur < 48) {
		hasil = {
			energi: 1044.88,
			protein: 157,
			lemak: 261.22,
			karbohidrat: 625,
			asi: 0
		};
	} else if (umur >= 48 && umur <= 60) {
		hasil = {
			energi: 1080,
			protein: 162,
			lemak: 648,
			karbohidrat: 270,
			asi: 0
		};
	}
	return hasil;
}
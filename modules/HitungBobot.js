
export const hitungBobot = (umur, gizi, kalori, keseimbangan) => {
	var c1, c2, c3, c4, c5;
	var hasil = [];

	if (gizi === 'Buruk') {
		c1 = 5;
	} else if (gizi === 'Kurang') {
		c1 = 4;
	} else if (gizi === 'Normal') {
		c1 = 3;
	} else if (gizi === 'Gemuk') {
		c1 = 2;
	} else {
		c1 = 1;
	}

	var protein = kalori * 0.15 / keseimbangan.protein;
	if (protein >= 1) {
		c2 = 5;
	} else if (protein >= 0.8) {
		c2 = 4;
	} else if (protein >= 0.6) {
		c2 = 3;
	} else if (protein >= 0.4) {
		c2 = 2;
	} else if (protein >= 0.01) {
		c2 = 1;
	} else {
		c2 = 0;
	}

	var lemak = kalori * 0.25 / keseimbangan.lemak;
	if (lemak >= 1) {
		c3 = 5;
	} else if (lemak >= 0.8) {
		c3 = 4;
	} else if (lemak >= 0.6) {
		c3 = 3;
	} else if (lemak >= 0.4) {
		c3 = 2;
	} else if (lemak >= 0.01) {
		c3 = 1;
	} else {
		c3 = 0;
	}

	var karbohidrat = kalori * 0.6 / keseimbangan.karbohidrat;
	if (karbohidrat >= 1) {
		c4 = 1;
	} else if (karbohidrat >= 0.8) {
		c4 = 2;
	} else if (karbohidrat >= 0.6) {
		c4 = 3;
	} else if (karbohidrat >= 0.4) {
		c4 = 4;
	} else if (karbohidrat >= 0.01) {
		c4 = 5;
	} else {
		c4 = 0;
	}

	if (umur >= 0 && umur < 6) {
		c5 = 0;
	} else if (umur >= 6 && umur < 7) {
		c5 = 1;
	} else if (umur >= 7 && umur < 10) {
		c5 = 2;
	} else if (umur >= 10 && umur < 13) {
		c5 = 3;
	} else if (umur >= 13 && umur < 24) {
		c5 = 3;
	} else if (umur >= 24 && umur < 37) {
		c5 = 4;
	} else if (umur >= 37 && umur <= 60) {
		c5 = 5;
	} else {
		c5 = 0;
	}

	hasil = [c1, c2, c3, c4, c5]
	return hasil;
}
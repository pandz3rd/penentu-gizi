
export const hitungPrefensi = (positif, negatif) => {
	var hasil = [];

	for (var i = 0; i < positif.length; i++) {
		var score = negatif[i] / (negatif[i] + positif[i]);
		hasil.push(score);
	}
	return hasil;
}
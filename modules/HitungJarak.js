
export const hitungJarak = (matriks, ideal) => {
	var score = [];

	for (var i = 0; i < matriks.length; i++) {
		var penjumlahan = 0;
		for (var j = 0; j < matriks[i].length; j++) {
			var pengurangan = matriks[i][j] - ideal[j];
			var kuadrat = pengurangan * pengurangan;
			var akar = Math.sqrt(kuadrat)
			penjumlahan = penjumlahan + akar;
		}
		score.push(penjumlahan);
	}
	return score;
}
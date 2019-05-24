
export const matriksTernormalisasi = (matriks, kriteria, operasi) => {
	var tabels = [];
	var tabel;

	if (operasi === 'Bagi') {
		for (var i = 0; i < matriks.length; i++) {
			tabel = [];
			for (var j = 0; j < matriks[i].length; j++) {
				var score = matriks[i][j] / kriteria[i];
				tabel.push(score);
			}
			tabels.push(tabel);
		}
		return tabels;
	} else {
		for (var i = 0; i < matriks.length; i++) {
			tabel = [];
			for (var j = 0; j < matriks[i].length; j++) {
				var score = matriks[i][j] * kriteria[i];
				tabel.push(score);
			}
			tabels.push(tabel);
		}
		return tabels;
	}

}
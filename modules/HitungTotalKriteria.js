
export const hitungTotalKriteria = (data) => {
	var hasil = [];
	var score;

	for (var i = 0; i < data.length; i++) {
		score = 0;
		for (var j = 0; j < data[i].length; j++) {
			score = score + data[i][j];
		}
		hasil.push(score);
	}
	return hasil;
}
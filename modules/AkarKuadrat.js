
export const akarKuadrat = (bil) => {
	var hasil = [];
	var score = 0;

	for (var i = 0; i < bil.length; i++) {
		score = Math.sqrt(bil[i] * bil[i])
		hasil.push(score);
	}
	return hasil;
}
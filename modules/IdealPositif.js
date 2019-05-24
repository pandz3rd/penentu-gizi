
export const idealPositif = (data) => {
	var hasil = [];

	for (var i = 0; i < data.length; i++) {
		var largest = Math.max.apply(Math, data[i]);
		hasil.push(largest);
	}
	return hasil;
}
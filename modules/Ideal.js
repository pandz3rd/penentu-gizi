
export const ideal = (data, kondisi) => {
	var hasil = [];

	if (kondisi === 'Positif') {
		for (var i = 0; i < data.length; i++) {
			var largest = Math.max.apply(Math, data[i]);
			hasil.push(largest);
		}
		return hasil;
	} else {
		for (var i = 0; i < data.length; i++) {
			var smallest = Math.min.apply(Math, data[i]);
			hasil.push(smallest);
		}
		return hasil;
	}

}
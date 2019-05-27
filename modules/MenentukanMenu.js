
export const menentukanMenu = (data) => {
	var hasil;
	var largest = Math.max.apply(Math, data);
	var menu;

	for (var i = 0; i < data.length; i++) {
		if (data[i] == largest) {
			menu = i + 1;
		}
	}
	hasil = "Menu " + menu;
	return hasil;
}
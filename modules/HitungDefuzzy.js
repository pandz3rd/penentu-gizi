
  // Hitung defuzzy
export const hitungDefuzzy = (data) => {
	var hasil = 0;

	for (let i=0; i < data.length; i++) {
	  hasil = hasil + data[i].hasilScore;
	}
	return hasil;
}
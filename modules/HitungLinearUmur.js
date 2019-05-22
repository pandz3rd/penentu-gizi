
// Hitung fuzzy berat
export const hitungLinearUmur = (data, umur) => {
	var linears = [];
	var resultObj = {};
	var result;

	for (let i=0; i < data.length; i++) {
	  if (data[i].bentukKurva === 'Naik') {
	    result = (umur - data[i].batasBawah) / (data[i].titikTengah - data[i].batasBawah)
	    linears.push({score: result, kurva: data[i].bentukKurva, fase: data[i].fase});
	  } else if (data[i].bentukKurva === 'Turun') {
	    result = (data[i].batasAtas - umur) / (data[i].batasAtas - data[i].titikTengah)
	    linears.push({score: result, kurva: data[i].bentukKurva, fase: data[i].fase});
	  }
	}
	return linears;
}
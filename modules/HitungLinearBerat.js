
// Hitung fuzzy berat
export const hitungLinearBerat = (data, berat) => {
	var linears = [];
	var resultObj = {};
	var result;

	for (let i=0; i < data.length; i++) {
	  if (data[i].bentukKurva === 'Naik') {
	    result = (berat - data[i].batasBawah) / (data[i].titikTengah - data[i].batasBawah)
	    console.log('berat1: ', data[i].batasBawah, berat, berat - data[i].batasBawah)
	    console.log('berat2: ', data[i].titikTengah, data[i].titikTengah - data[i].batasBawah)
	    linears.push({score: result, kurva: data[i].bentukKurva, himpunan: data[i].himpunan});

	  } else if (data[i].bentukKurva === 'Turun') {
	    result = (data[i].batasAtas - berat) / (data[i].batasAtas - data[i].titikTengah)
	    linears.push({score: result, kurva: data[i].bentukKurva, himpunan: data[i].himpunan});
	  }
	}
	return linears;
}
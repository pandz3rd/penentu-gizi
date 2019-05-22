
// Compare batas status gizi
export const compareBatasStatusGizi = (data) => {
	var hasil;

	if (data.status === 'Buruk') {
	  hasil = {
	    batasBawah: 0,
	    titikTengah: 8
	  }
	} else if (data.status === 'Kurang') {
	  hasil = {
	    batasBawah: 4,
	    titikTengah: 12
	  } 
	} else if (data.status === 'Normal') {
	  hasil = {
	    batasBawah: 8,
	    titikTengah: 20
	  } 
	} else if (data.status === 'Gemuk') {
	  hasil = {
	    batasBawah: 14,
	    titikTengah: 22
	  } 
	} else if (data.status === 'Obesitas') {
	  hasil = {
	    batasBawah: 18,
	    titikTengah: 28
	  } 
	}
	return hasil;
}
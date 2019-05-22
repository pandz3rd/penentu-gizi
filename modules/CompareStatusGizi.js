
// Tabel status gizi
export const compareStatusGizi = (berat, umur) => {
	var fase = umur.fase;
	var status;

	if (fase === 'Fase 1' && berat.himpunan === 'Sangat Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 1' && berat.himpunan === 'Kurus') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 1' && berat.himpunan === 'Normal 1') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 1' && berat.himpunan === 'Normal 2') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 1' && berat.himpunan === 'Normal 3') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 1' && berat.himpunan === 'Gemuk') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 1' && berat.himpunan === 'Sangat Gemuk') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 2' && berat.himpunan === 'Sangat Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 2' && berat.himpunan === 'Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 2' && berat.himpunan === 'Normal 1') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 2' && berat.himpunan === 'Normal 2') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 2' && berat.himpunan === 'Normal 3') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 2' && berat.himpunan === 'Gemuk') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 2' && berat.himpunan === 'Sangat Gemuk') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 3' && berat.himpunan === 'Sangat Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 3' && berat.himpunan === 'Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 3' && berat.himpunan === 'Normal 1') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 3' && berat.himpunan === 'Normal 2') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 3' && berat.himpunan === 'Normal 3') {
	  status = 'Gemuk';
	  return status;
	} else if (fase === 'Fase 3' && berat.himpunan === 'Gemuk') {
	  status = 'Gemuk';
	  return status;
	} else if (fase === 'Fase 3' && berat.himpunan === 'Sangat Gemuk') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 4' && berat.himpunan === 'Sangat Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 4' && berat.himpunan === 'Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 4' && berat.himpunan === 'Normal 1') {
	  status = 'Kurang';
	  return status;
	} else if (fase === 'Fase 4' && berat.himpunan === 'Normal 2') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 4' && berat.himpunan === 'Normal 3') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 4' && berat.himpunan === 'Gemuk') {
	  status = 'Gemuk';
	  return status;
	} else if (fase === 'Fase 4' && berat.himpunan === 'Sangat Gemuk') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 5' && berat.himpunan === 'Sangat Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 5' && berat.himpunan === 'Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 5' && berat.himpunan === 'Normal 1') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 5' && berat.himpunan === 'Normal 2') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 5' && berat.himpunan === 'Normal 3') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 5' && berat.himpunan === 'Gemuk') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 5' && berat.himpunan === 'Sangat Gemuk') {
	  status = 'Obesitas';
	  return status;
	} else if (fase === 'Fase 6' && berat.himpunan === 'Sangat Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 6' && berat.himpunan === 'Kurus') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 6' && berat.himpunan === 'Normal 1') {
	  status = 'Buruk';
	  return status;
	} else if (fase === 'Fase 6' && berat.himpunan === 'Normal 2') {
	  status = 'Kurang';
	  return status;
	} else if (fase === 'Fase 6' && berat.himpunan === 'Normal 3') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 6' && berat.himpunan === 'Gemuk') {
	  status = 'Normal';
	  return status;
	} else if (fase === 'Fase 6' && berat.himpunan === 'Sangat Gemuk') {
	  status = 'Obesitas';
	  return status;
	}
}
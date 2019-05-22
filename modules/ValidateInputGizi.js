
export const validateInputGizi = (Umur, Berat, Laki, Perempuan) => {
  var validate;

  if (Laki == false && Perempuan == false) {
  	validate = false;
    return validate;
  } else if (Berat <= 0 || Berat == null || Umur == null || Umur <= 0 || Umur >= 61) {
    validate = false;
    return validate;
  } else {
    validate = true;
    return validate;
  }
}
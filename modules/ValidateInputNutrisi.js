
export const validateInputNutrisi = (Umur, Kalori) => {
  var validate;
  console.log('Umur: ', Umur)

  if (Umur == null || Umur <= 0 || Umur >= 61 || Kalori <= 0 || Kalori >= 3000) {
  	validate = false;
    return validate;
  } else {
    validate = true;
    return validate;
  }
}
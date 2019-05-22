
// Cari status yg dihitung
export const compareYangDihitung = (angka) => {
    var hasil = [];

    if (angka >= 0 && angka <= 8) {
      hasil.push('Buruk');
    }
    if (angka > 4 && angka <= 12) {
      hasil.push('Kurang');
    }
    if (angka > 8 && angka <= 20) {
      hasil.push('Normal');
    }
    if (angka > 14 && angka <= 22) {
      hasil.push('Gemuk');
    }
    if (angka > 18 && angka <= 28) {
      hasil.push('Obesitas');
    }
    return hasil;
}
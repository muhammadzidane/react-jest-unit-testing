export const potongPajak = (gaji) => {
  const pajak = 10 / 100;
  const gajiBersih = gaji - gaji * pajak;

  return `Gaji bersih anda Rp${gajiBersih}`;
};

export const sapaan = (nama) => {
  return `Halo ${nama}, apa kabs !`;
}
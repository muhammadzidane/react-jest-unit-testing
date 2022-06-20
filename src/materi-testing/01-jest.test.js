import { penjumlahan } from "./angka";
import { potongPajak, sapaan } from "./text";

describe("basic testing", () => {
  it("testing sedarhana", () => {
    expect(true).toBe(true);
  });

});

describe("testing angka", () => {
  it("menjumlahkan nilai", () => {
    expect(1 + 1).toBe(2);
    expect(5 * 5).toBe(25);
  });

  it("Fungsi penjumlahan", () => {
    expect(penjumlahan(3, 2)).toBe(5);
    expect(penjumlahan(4, 8)).toBe(12)
  });
})

describe("testing text", () => {
  it("Mengetahui gaji bersih dikurangi pajak", () => {
    expect(potongPajak(10000000)).toBe(`Gaji bersih anda Rp${9000000}`);
  });

  it("sapaan", () => {
    const name = 'Zidane';
    expect(sapaan(name)).toBe(`Halo ${name}, apa kabs !`);
  })
});

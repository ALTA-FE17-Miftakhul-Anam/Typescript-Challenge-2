// Problem 2 - Cetak Tabel Perkalian
function cetakTablePerkalian(number: number): void {
    for (let i = 1; i <= number; i++) {
      let row = '';
      for (let j = 1; j <= number; j++) {
        const result = i * j;
        if (result <= number * number) {
          row += `${result} `;
        }
      }
      console.log(row.trim());
    }
  }
  
  cetakTablePerkalian(9);
  
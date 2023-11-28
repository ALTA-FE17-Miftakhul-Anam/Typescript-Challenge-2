// Problem 3 - Diamond
function makeDiamond(char: string): void {
    const targetCharCode = char.toUpperCase().charCodeAt(0);
    const width = targetCharCode - 'A'.charCodeAt(0) + 1;
  
    for (let i = 0; i < width * 2 - 1; i++) {
      const currentChar = String.fromCharCode('A'.charCodeAt(0) + Math.abs(i - (width - 1)));
      const spaces = ' '.repeat(Math.abs(i - (width - 1)));
  
      if (i < width) {
        const row = `${' '.repeat(width - 1 - i)}${currentChar}${spaces}${i !== 0 ? currentChar : ''}`;
        console.log(row);
      } else {
        const row = `${' '.repeat((width - 1) - Math.abs(i - (width - 1)))}${currentChar}${spaces}${currentChar}`;
        console.log(row);
      }
    }
  }
  
  makeDiamond('C');
  // makeDiamond('E');
  
  

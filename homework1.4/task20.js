
    let rows = 5;
    let output = '';
    for (let i = 1; i <= rows; i++) {
      let n = 0;
      let c = 0;
      let out = i;
      for (let j = 1; j <= i; j++) {
        c = out + n; 
        output += c + " ";
        out = c;
        n = rows - j;  
      }
      rows = 5;
      console.log(output);
      output = "";
    }
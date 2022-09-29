
function drawHourglass(size){
  let distAst = 0;
  for (var linha=1; linha<=size; linha++){
    for (var coluna=1; coluna<=size; coluna++){
      if(coluna ===1 || coluna ===size){
        process.stdout.write("#")
        continue
      }
      if(linha === 1 || linha === size)  {
        process.stdout.write("#")
        continue
      }
    
      if ((coluna == (1+distAst) )|| coluna == (size-distAst) || (1+distAst)<=coluna && coluna<=(size-distAst))
      process.stdout.write("#")
      else
      process.stdout.write(" ");
    }
    process.stdout.write('\n');

    distAst++;
  }
}

process.stdin.on('readable', ()=>{ 
   
  let variable = process.stdin.read(); 
  const variableParse= Number(variable)
  if(variableParse !== NaN){
    return drawHourglass(variableParse)
  }
  
})
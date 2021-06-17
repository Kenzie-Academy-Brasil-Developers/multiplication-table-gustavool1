function matriz(lines){
    let matriz = []
    for(let i=0; i<=lines; i++){
      matriz[i]=[];
      for(let c=0; c<=lines; c++){
        matriz[i][c]= 0
      }
    }
    for(let i= 0; i<=lines;i++){
      for(let cc =0 ; cc<=lines; cc++){
        
        matriz[i][cc] = i*cc
        
      }
    }
    return console.table(matriz)
   }
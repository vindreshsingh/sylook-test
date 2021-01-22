function fighterSelection(fighters, position, moves){
    let hoveredCharacters = [];
    let fightersCurrentPosition = position;
    for (let move of moves){
          
      if (move == 'left'){
        if(fightersCurrentPosition[1] == 0){
          fightersCurrentPosition[1] = 5;
          hoveredCharacters.push(fighters[fightersCurrentPosition[0]][fightersCurrentPosition[1]]);
        } else{
          fightersCurrentPosition[1]--;
          hoveredCharacters.push(fighters[fightersCurrentPosition[0]][fightersCurrentPosition[1]]);
        }
      }
      
      if (move == 'right'){
        if(fightersCurrentPosition[1] == 5){
          fightersCurrentPosition[1] = 0;
          hoveredCharacters.push(fighters[fightersCurrentPosition[0]][fightersCurrentPosition[1]]);
        } else{
          fightersCurrentPosition[1]++;
          hoveredCharacters.push(fighters[fightersCurrentPosition[0]][fightersCurrentPosition[1]]);
        }
      }
      if (move == 'down'){
        if(fightersCurrentPosition[0] == 1){
          hoveredCharacters.push(fighters[fightersCurrentPosition[0]][fightersCurrentPosition[1]]);
        } else{
          fightersCurrentPosition[0]++;
          hoveredCharacters.push(fighters[fightersCurrentPosition[0]][fightersCurrentPosition[1]]);
        }
      }
  
      if (move == 'up'){
        if(fightersCurrentPosition[0] == 0){
          hoveredCharacters.push(fighters[fightersCurrentPosition[0]][fightersCurrentPosition[1]]);
        } else{
          fightersCurrentPosition[0]--;
          hoveredCharacters.push(fighters[fightersCurrentPosition[0]][fightersCurrentPosition[1]]);
        }
      }
      
      
  
      
    }
    
    return hoveredCharacters;
  }
  let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
   ]
  let initial_position = (0,0)
   let moves = ['up', 'left', 'right', 'left', 'left']
  console.log(fighterSelection(fighters,initial_position,moves));
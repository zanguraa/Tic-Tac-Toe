const footballPoints = (w, d, l)=> {
    
    let win = w * 3;
    let draw = d * 1;
    let loose = l * 0;
    let sumPoints = win + draw + loose;
    
    console.log(`the team has ${sumPoints} points`);
}

footballPoints(3, 4, 1);


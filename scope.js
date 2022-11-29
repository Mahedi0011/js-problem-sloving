

let bonus = 20;

function sum(frist, second){
    let result = frist + second + bonus;
    // console.log(result);
    if (result > 9){    /// Block scope ja sob jaiga theke neoa jaina
       var  mood = "Happy"; // var call korle kon plbm nai but const / let dile sob jaigai call hoyna
          mood = 'Jantu'
         mood = 'fantu'
        console.log(mood);
    }
    // console.log(mood);
    return result;
}

const output = sum(3, 7);
// console.log(bonus)     // Global scope sob jaigai call korajai
// console.log(output);
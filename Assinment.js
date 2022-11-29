

function feetToMile(feet){
    var mile = feet * 5280;
    if (feet < 0){
        return "Distance Cannnot be Negative.";
    }

    return mile;
}

var result = feetToMile(3);
console.log(result);



function woodCalculator(chair, table, bad){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var badWood = bad * 5;
   
    if(chair < 0 || table < 0 || bad < 0 ){
       return "Quantity cannot be negative.";
    }
//     if (table < 0){
//         return "Quantity cannot be negative.";
//     }

//    if (bad < 0){
//         return "Quantity cannot be negative."; 
//     }

    var totalWood = chairWood + tableWood + badWood;
    return totalWood
}

var result =  woodCalculator(3, 3, 0);
console.log(result);

function brickCalculator(floor){
    let totalBrick;
    if(floor <= 0){
        console.log("sorry ")
        return;
    }

    if (floor <= 10){
        totalBrick = floor * 15 *1000;
    }

    else if (floor <= 20){
        totalBrick = (10 * 15 * 1000) + ((floor - 10) * 12  * 1000);
    }
    else{
        totalBrick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000);
    }
    console.log("total brick need:" +  totalBrick);
}

brickCalculator(12);


function tinyFriend(friends){
    if (friends.length == 0){
        console.log("Please enter a valid.")
        return;
    }

    let tiny = friends[0];
     for (let i = 0; i < friends.length; i++) {
            if (friends[i].length > tiny.length){
                tiny = friends[i];
            }
        
     }
     console.log(" Tiny :" + tiny)
}

tinyFriend(['kayes', 'omi', 'bush']);
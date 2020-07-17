
// feetToMile

function feetToMile(feet){
    const mile = feet / 5280 ;
    return mile;
}
   console.log(" Feet to mile converter answer :")

const myMomFeet = feetToMile(600);
console.log(myMomFeet);





// woodCalculator

function woodCalculator(chairPiece, tablePiece , katPiece )
    {
   const  oneChair_oneTable_oneKat_wood_needs = 1 * chairPiece + 3 * tablePiece + 5 * katPiece;
   return oneChair_oneTable_oneKat_wood_needs ;
    }

    console.log("Total wood needs for chair , table  and kat : ")

    var total_wood_needs = woodCalculator( 14,5,12 );
console.log(total_wood_needs);





// brickCalculator

function brickCalculator(floor_number){
   
    if (floor_number<1){
        return "No need any brick pieces";
    }

    else if ( floor_number>=1 && floor_number <=10){
        console.log("One into ten makes any floor need brick pieces :  ")
        return 15 * floor_number * 10000;

        /* in 1 to 10 floor each floor is 15 feet */ 

        
    }
    else if ( floor_number >=11 && floor_number <=20){
        console.log("Eleven into twenty makes any floor need brick pieces :  ")
        return 15 * 10 * 1000 + 12 * (floor_number-10) * 1000;

        /* in 11 to 20 floor each floor is 12 feet */ 
    }
    else {
        console.log("For above 20 floor makes need brick pieces")
        return 15 *10 *1000 + 12 * 10 * 1000 + 10 * (floor_number-20) * 1000;

        /* Above 20 floor each floor is 10 feet */ 
    }
}
var result = brickCalculator(25);
console.log(result);





// tinyFriend

function tinyFriend(names)
{
    var smallName = names[0];

    for ( var i = 0; i < names.length; i++){
        var currentName = names[i];
        if (currentName.length < smallName.length){
            smallName = currentName;
        }
    }
    return smallName;
}

    console.log(" In this array most smallest name is : ")

var result = tinyFriend(['akiba','pushpita','siyam','eftia','niha','kowelen']);
console.log(result);





    





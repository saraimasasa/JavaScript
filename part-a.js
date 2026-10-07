

// 1)

const isStudent = true;
const myname = "sarai";
const age = 17;

const introduction = 'My name is ${myname}, I am ${age} years old, student: ${isStudent}';

console.log(introduction);
console.log(typeof myname);
console.log(typeof age);
console.log(typeof isStudent);


const course = "JavaScript";
let completedExercises;
const isReady = false;

console.log(typeof course);
console.log(typeof completedExercises);
console.log(typeof isReady);

///לא מתאים יותר מקונסט כי לט מאפשר לשנות את הערך של המשתנה כמו שרציתי לעשות וקונסט לא מאפשר

let completedCount = 0;
completedCount = 1;
console.log(completedCount );



//2)

const priceText = "120";
const quantityText = "3";
const orderNumber = 5021;

const numberPrice = Number(priceText);
const numberQuantity = Number(quantityText);
const totalPrice = numberPrice + numberQuantity;

console.log(totalPrice);

const orderldText = String(orderNumber);

console.log(typeof priceText);
console.log(typeof numberPrice);
console.log(typeof quantityText);
console.log(typeof numberQuantity);
console.log(typeof orderNumber);
console.log(typeof orderldText);

//סעיף ד)
//הטעות היא שחיברו את הסטרינגים ולא את הערכים של המשתנה וכתצאה מכך יהיה לי שרשור שלך המחרוזות


//ניחוש: 
//10
//"8"+"2"
console.log(Number("8") + 2);
console.log(String(8) + 2);


//3)

const my_age = 17; //גיל
const has_Permission = true; //אישור
const is_Registration_Open = true; //הרשמה פתוחה
const participant_Id = 24; //מספר משתתף

if ((my_age >= 18) || (has_Permission === true && is_Registration_Open === true))
{
   console.log("eligible");
}else
{
    console.log("eligible not");
}

if (participant_Id  % 2 === 0)
{
  console.log("zugi");
}

if (isRegistrationOpen === true && participantId === 24)
{
console.log("registere");
}

if (is_Registration_Open === false)
    {
      console.log("closed");
    }
else if (is_Registration_Open === true && has_Permission === false)
    {
console.log("waiting for approval");
    }
else
    {
console.log("registered");
    }


//4)



//5)




//6)




//7)




//8)




//9)









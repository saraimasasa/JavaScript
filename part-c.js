// תרגיל 10

const categories = ["Electronics","Fashion","Books","Home"];

console.log(categories[0]);
const lastIndex = categories.length - 1;
console.log(categories[lastIndex]);

console.log(categories.includes("Books")); //קיים

console.log(categories.indexOf("Fashion")); // 1
console.log(categories.indexOf("Sports")); // -1 כשהערך לא קיים מוחזר

categories.push("Sports");
const removed = categories.pop();

categories.splice(1,1,"Games");

// push, pop, splice.




// תרגיל 11

const stockAmounts = [4, 0, 7, 3, 0];

const calculateTotalStock=(array) =>{
    let total=0;
    for(const amount of array){
        total=total+amount;
    }
    return total;
}

const countOutOfStock=(array)=>{
    let count=0;
    for(const element of array){
        if(element===0){
            count++;
        }
    }
    return count;
}

const totalstock=calculateTotalStock(stockAmounts);
const outofstock=countOutOfStock(stockAmounts);
console.log(totalstock);
console.log(outofstock);

const calculateTotalStockIndex=(array)=>{
    let total=0;
    for(let i=0;i<array.length;i++)
    {
        total=total+array[i];
    }
    return total;
}

// for...of נשתמש בזה כאשר נרצה לעבור על כל ערכי המערך מבלי לדעת את מיקומם
// index נשתמש בזה כאשר נרצה לעבור על המערך ולשנות דברים התלויים במיקום של האיברים





// תרגיל 12

const user = {
id: 1,
firstName:"Dana",
lastName: "Levi",
age: 17
};

console.log(user.firstName);
console.log(user.age);

user.age=18;

user.email = "danaLevi@gmail.com";

console.log( `Id: ${user.id} , First name: ${user.firstName} , Last name: ${user.lastName} , Age: ${user.age} , Email: ${user.email} `);

// console.log(user.Firstname); הקוד אינו מחזיר את שם המשתמש מכיוון שהשם הפרטי המוגדר בהתחלה בתוך "משתמש "רשום עם האות אף קטנה ובקוד הנתון הוא רשום עם האות אף גדולה ,ולכן הקוד אינו מחזיר את שם המשתמש
console.log(user.firstName);





// תרגיל 13

const post = {
    id: 101,
    content:"JavaScript practice day",
    author: {
      id: 7,
      name:"Noa",
      username:"@noa_dev"
    },
    comments: [
      { id: 1, user: "@amit", text: "Good luck!" },
      { id: 2, user: "@lior", text: "Nice post"}
    ]
};

console.log(post.author.name);
console.log(post.author.username);

console.log(post.comments[0].text);

console.log(post.comments.length);

post.comments.push({id: 3, user: "@haleli", text: "Love it"});

// console.log(post.author.name);
// console.log(post.comments[1].user);
// לפי דעתי ,ראשית יודפס שם הכותבת שהוא נועה ואחר כך ואז יודפס שם המשתמש של כותב התגובה השנייה שהוא "@lior"




// תרגיל 14

const products = [
{ id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
{ id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
{ id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
{ id: 4, name: "Backpack", price: 80, category: "Fashion", inStock: true }
];


for (const product of products) {
    console.log(product.id);
    console.log(product.name);
    console.log(product.price);
}

const countAvailableProducts= (products)=>{
    let counter=0;
    for(const product of products)
    {
        if(product.inStock===true)
        {
            counter++;
        }
    }
    return counter;
}

const getProductNameById =(products,id) =>{
    for(const product of products)
    {
        if(product.id===id)
        {
            return product.name;
        }
    }
    return "product not found";
}

console.log(getProductNameById(products,3));
console.log(getProductNameById(products,99));

// פעולות אילו יתבצעו בדרך כלל לפי ID ולא לפי שם מכיוון שלכל מוצר יש ID מיוחד  ולעומת זאת שם הוא משתמש נפוץ יותר .
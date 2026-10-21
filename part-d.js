// תרגיל 15

const players = [
    { id: 1, nickname: "Pixel", score: 840, level: 5 },
    { id: 2, nickname: "Nova", score: 1200, level: 8 },
    { id: 3, nickname: "Blaze", score: 460, level: 3 }
];

players.forEach(player => {
    console.log(`${player.nickname} - ${player.score} points`);
});

players.forEach(player => {
    console.log(`Id : ${player.id} , ${player.nickname} - ${player.score} points ,level : ${player.level} `);
});

// const result = players.forEach(player => player.nickname);
// console.log(result);
// ערכו יהיה undefined
// מכיוון שfor each  מבצעת פעולה על כל איבר הנמצא במערך אך היא לא מחזירה ערך אף פעם



// תרגיל 16

const scores = [840, 1200, 460, 950];
const courses = ["JavaScript", "Design", "Databases"];

const updatedScores=scores.map(score => score+100);

const courseNameLengths= courses.map(course => course.length);

console.log(scores); //4
console.log(updatedScores); //4
console.log(courses); //3
console.log(courseNameLengths); //3

// const doubledScores = scores.map(score => {score * 2 });
const doubledScores = scores.map(score => score * 2 );




// תרגיל 17

const posts = [
    { id: 101, username: "noa_dev", content: "First project!", likes: 45 },
    { id: 102, username: "dan_codes", content: "New feature", likes: 180 },
    { id: 103, username: "maya_js" , content: "Weekend update", likes: 72 }
];

const postUsernames=posts.map(post => post.username);

const postLabels = posts.map( post => `${post.username} | ${post.content} | ${post.likes} likes`);

const postCards = posts.map( post => ({
    id: post.id,
    label: ` ${post.username} - ${post.likes} likes` }));

console.log(posts);
console.log(postCards);
// המערך המקורי לא השתנה מכיוון שהפעולה map לא משנה את המערך הנתון אלא יוצרת מערך חדש לגמרי ומבצעת את הפעולות עליו



// תרגיל 18

const tasks = [
    { id: 1, title: "Write tests", completed: false, priority: "high" },
    { id: 2, title: "Update profile", completed: true, priority: "low" },
    { id: 3, title: "Fix login", completed: false, priority: "high" },
    { id: 4, title: "Review text", completed: false, priority: "medium"}
];

const openTasks = tasks.filter(task => task.completed===false);

const highPriorityTasks = tasks.filter(task => task.priority==="high");

const urgentOpenTasks = tasks.filter(task => (task.completed===false &&  task.priority==="high" ));

const getTasksByPriority = (tasks, priority) => tasks.filter(task => task.priority === priority);

const result = tasks.filter(task => task.id === 3);
// array מכיוון שפילטר תמיד מחזיר מערך חדש
// יהיה בו איבר אחד ,ID




// תרגיל 19

const movies = [
    { id: 11, title: "Skyline", genre: "Drama", rating: 8.2 },
    { id: 12, title: "Orbit", genre: "Sci-Fi", rating: 7.9 },
    { id: 13, title: "Ocean", genre: "Adventure", rating: 8.5 }
];

const findMovieById = (movies, id) => movies.find(movie => movie.id===id);

const result12 = findMovieById(movies, 12);
if(result12)
{
    console.log(result12);
}
else
{
    console.log("movie not found");
}

const result99 = findMovieById(movies, 99);
if(result99)
{
    console.log(result99);
}
else
{
    console.log("movie not found");
}

// const movie = movies.filter(movie => movie.id === 12);   קוד נתון
// console.log(movie.title);

const movie = movies.find(movie => movie.id === 12);
console.log(movie.title);

// find מחזיר את האיבר הראשון שעומד בתנאי או אנדפאינד אם אין אף איבר מתאים
// filter מחזיר מערך חדש עם איברים שעומדים בתנאי הנתון או מערך ריק אם אין אף איבר מתאים



// תרגיל 20

// foreach
// בחרתי בזה מכיוון שבסעיף זה צריך לבצע הדפסה לכל שחקן בלי להחזיר ערך
players.forEach(player => {
    console.log( `${player.nickname} - ${player.score} points`);
});

//map
//  בחרתי בזה מכיוון שבסעיף זה צריך ליצור מערך חדש של שמות מתוך מערך של אובייקטים
const usernames = posts.map(post => post.username);

//filter
// בחרתי בזה מכיוון שבסעיף זה צריך לסנן ולהחזיר מערך חדש עם המשימות שלא הושלמו
const unfinishedTasks = tasks.filter(task => !task.completed);

//find
// בחרתי בזה מכיוון שבסעיף זה צריך לאתר אובייקט לפי ה ID 
const id13 = movies.find(movie => movie.id===13);

//map + filter
// בחרתי בזה מכיוון שקודם צריך לסנן את הסרטים עם דירוג של מעל 8 ואז למצוא את השמות שלהם
const moviesAboveEight = movies.filter(movie => movie.rating>8).map(movie=>movie.title);

//find
// בחרתי בזה מכיוון שבסעיף זה צריך למצוא פוסט אחד לפי ה ID
const post102 = posts.find(post => post.id ===102);

// סיכום בחירה 
// for...of/foreach -מבצע פעולה על כולם
// map-יוצר תוצאה חדשה מכל אחד
// filter- שומר רק חלק 
// find- מחזיר אחד 




// תרגיל 21

const playersAbove800 = players.filter(player => player.score>800).map(player => player.nickname);

const usernamesOver100 = posts.filter(post => post.likes >100).map(post => post.username);

const getOpenTaskTitles = (tasks) => tasks.filter(task => !task.completed).map(task => task.title);

// const result = players.filter(player => player.score > 800).map(player => player.nickname);  קוד נתון 
// אחרי הפעולה הראשונה סוג הערך יהיה מערך 
// אחרי הפעולה השנייה סוג הערך יהיה מערך של מחרוזות 
// result- מערך חדש המכיל את הכינוי של השחקנים העומדים בתנאים

// בדרך כלל מסננים לפני שיוצרים מערך שמות ,ולא להיפך מכיוון שהפעולה פילטר צריכה  את כלל המאפיינים של האובייקט ,ואם נעשה מאפ קודם נשאר רק עם הכינויים ונאבד את שאר המאפיינים שצריך לבניית התנאי 
const movie = {
id: 41,
title: "Orbit",
genre: "Sci-Fi",
rating: 8.4,
};

//א)

const {title, genre, rating} = movie;

//ב)
console.log(`${rating} | ${genre} | ${title}`);

//ג)
//החיזוי: Orbit Ocean
const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);

//23)
const user = {
  id: 7,
  name: "Dana Levi",
  email: "dana@example.com",
  isActive: true
};

const formatUser = ({name, email}) => {return `${name} - ${email}`};

 console.log(formatUser(user));  


const getUserStatus = ({name, isActive}) =>
{
 if(isActiv = true)
    return  `${name} active`
else
    return `${name} + inactive`
};

console.log(getUserStatus(user))


//ד)
// תשובה: לא משנה שום דבר


//24
const player = {
  id: 1,
  nickname: "Noni",
  score: 1200,
  level: 8
};

const comments = [
  { id: 1, user: "Noa", text: "Great game!", likes: 12 },
  { id: 2, user: "Dan", text: "Well played", likes: 7 }
];

const newComment = {
  id: 3,
  user: "Maya",
  text: "Amazing score!",
  likes: 0
};


const updatedPlayer = {...player, score: 1350} ;
const commentsAfterAdd = [...comments, newComment];
console.log(player);
console.log(updatedPlayer);
console.log(comments);
console.log( commentsAfterAdd);

//25
const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" }
];


const removeTaskById = (tasks, id) =>
{
const task2 = tasks.filter(task =>task.id !== id);

return task2
}

console.log(removeTaskById(tasks, 2));
console.log(removeTaskById(tasks, 5));






//
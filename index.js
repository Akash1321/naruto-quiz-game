var readlineSync = require("readline-sync");

var score = 0;

var firstInput = readlineSync.question("Enter your name ");
console.log("Welcome to the Naruto quiz " + firstInput);
console.log("")
console.log("The rules of the game are: ");
console.log("You get 2 points for the right answer and penalized 1 point for wrong answer");





function mcqAsk(options, question, answer) {

    index = readlineSync.keyInSelect(options, question);

    if (options[index] === answer) {
        console.log(options[index] + " is the Right answer");
        score = score + 2;
    } else {
        console.log(options[index] + " is the Wrong answer");
        score = score - 1;
    }

    console.log("-----------------")
    console.log("Your score is " + score);

}




var toAsk = [{
        options: ["Jiraiya", "Minato", "Kakashi", "Iruka"],
        question: "(1) what is naruto's father name",
        answer: "Minato"
    },

    {
        options: ["Ramen", "Shushi", "Jhapche", "Rice cake"],
        question: "(2) What is naruto's favourite dish?",
        answer: "Ramen"
    },
    {
        options: ["Sakura", "Ino", "Temari", "Hinata"],
        question: "(3) Who is Naruto's wife?",
        answer: "Hinata"
    },
    {
        options: ["Madara", "Dunzo", "Itachi", "Obito"],
        question: "(4) Who killed uchiha clan?",
        answer: "Itachi"
    },
    {
        options: ["Deidara", "Hidan", "Sasori", "Kakuzu"],
        question: "(5) Which akatsuki member killed Asuma?",
        answer: "Hidan"
    },
    {
        options: ["Jiraiya", "Orochimaru", "Tsunade", "Tobirama"],
        question: "(6)Which of these is not a legendary Sanin?",
        answer: "Tobirama"
    },
    {
        options: ["Jiraiya", "Minato", "Obito", "Madara"],
        question: "(7)Who trained the akatsuki member Pain?",
        answer: "Jiraiya"
    },
    {
        options: ["Naruto", "Kakashi", "Sasuke", "Sakura"],
        question: "(8) Who killed Kakuzu?",
        answer: "Naruto"
    },
    {
        options: ["Tobirama", "Madara", "Hashirama", "Six path Sage"],
        question: "(9) Who is the founder of leaf village?",
        answer: "Hashirama"
    },
    {
        options: ["Minato", "Kakashi", "Naruto", "Tsunade"],
        question: "(10) Who is the Sixth Hokage of leaf village?",
        answer: "Kakashi"
    }


]


for (let i = 0; i < toAsk.length; i++) {
    mcqAsk(toAsk[i].options, toAsk[i].question, toAsk[i].answer);
}

console.log("Your total score is [ " + score + " ]")

var highScore = [{
    name: "Rigio",
    scored: 16
}, {
    name: "Miruj",
    scored: 14
}]

for (let x = 0; x < 1; x++) {
    if (score > highScore[x].scored) {
        console.log("Hurrah! You are the new High scorer of the quiz");
        console.log("")
        console.log("Send a screenshot so that I can update the list")
    } else {
        console.log("")
        console.log("The highscore is [ " + highScore[x].scored + " ]");
        console.table(highScore);
    }
}
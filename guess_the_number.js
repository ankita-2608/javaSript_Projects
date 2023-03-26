let a = Math.random() * 100;
a = Number.parseInt(a)

let input;
let score = 100

while(input != a) {
    score = score - 1
    input = prompt("Enter the number")

    if(input == a) {
        console.log("Congratulations! You have guessed the number right!")
        console.log(`Your score is ${100-score}`)
    }
    else if(input>a && input<100) 
        console.log("Entered number is greater")
    else if(input<a && input>0)
        console.log("Entered number is lesser")
    else
        console.log("Enter a number between 1 and 100")
}
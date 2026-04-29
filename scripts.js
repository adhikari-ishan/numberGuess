const answer = Math.floor(Math.random() * 50 + 1);
let result = document.querySelector("#result");

let guesses = 0;

result.addEventListener("click", ()=>{
    guesses = guesses + 1;
    let input = document.querySelector("#input").value;
    if(input == answer){
        alert(`${answer} is correct guess. It took you ${guesses} to guess`);
    }

    else if (answer>input){
        alert(`Try greater number `);
    }


    else{
        alert(`Try smaller number `);
    }

});

// RUNNING CODE
fizzbuzz(15);

// FUNCTIONS
function fizzbuzz(n = 1) {
    let text = ``;
    for (let i = 1; i <= n; i++) {
        if (isFizz(i) && isBuzz(i)) text += `FizzBuzz, `;
        else if (isFizz(i)) text += `Fizz, `;
        else if (isBuzz(i)) text += `Buzz, `;
        else text += `${i}, `;
    }
    console.log(`${text.slice(0, text.length - 2)}.`);
}

function isFizz(n) {
    if (n % 3 == 0) return true;
    else return false;
}

function isBuzz(n) {
    if (n % 5 == 0) return true;
    else return false;
}

function askForNumber() {
    let n = prompt("Enter a number");
    n = Number(n);
    return n;
}
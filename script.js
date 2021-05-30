// RUNNING CODE
fizzbuzz(222);

// FUNCTIONS
function fizzbuzz(n = 1) {
    for (let i = 1; i <= n; i++) {
        if (isFizzbuzz(i)) console.log(`FizzBuzz`);
        else if (isFizz(i)) console.log(`Fizz`);
        else if (isBuzz(i)) console.log(`Buzz`);
        else console.log(i);
    }
}

function isFizzbuzz(n) {
    if (n % 5 == 0 && n % 3 == 0) return true;
    else return false;
}

function isFizz(n) {
    if (n % 3 == 0) return true;
    else return false;
}

function isBuzz(n) {
    if (n % 5 == 0) return true;
    else return false;
}
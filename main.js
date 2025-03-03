
function checkNumbers(numbers) {
    numbers.forEach(num => {
        if (num % 2 === 0) {
            console.log(`${num} - Четное`);
        } else {
            console.log(`${num} - Нечетное`);
        }
    });
}

const inputNumbers = [32, 67, 98, 102, 43, 27, 34, 71, 31, 76, 13, 100];
checkNumbers(inputNumbers);






















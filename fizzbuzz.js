function fizzBuzz(num) {
	let counter = 1
	while (counter < num + 1) {
		if (counter % 15 === 0) {
			console.log('Fizzbuzz');
		}
		else if (counter % 3 === 0) {
			console.log('Fizz');
		}
		else if (counter % 5 === 0) {
			console.log('Buzz');
		}
		else {
			console.log(counter);
		}
		counter++;
	}
	
}
fizzBuzz(30);

// OR

function FIZZYBUZZ(num) {
	for(let i = 1; i <= num; i++) {
		if (i % 15 === 0) {
			console.log('Fizzbuzz');
		}
		else if (i % 3 === 0) {
			console.log('Fizz');
		}
		else if (i % 5 === 0) {
			console.log('Buzz');
		}
		else {
			console.log(i);
		}
	}
}
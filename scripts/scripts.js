// Gets user input from textboxes
let getUserInput = () => {
	document.getElementById("outputSpan").innerHTML = "";
  const arrayInputString = document.getElementById('arrayInput').value;
  const windowSize = parseInt(document.getElementById('windowInput').value);
  errorCheck(arrayInputString, windowSize);
}

// Runs getUserInput() when the user presses the 'Done' button
document.getElementById("readyButton").onclick = getUserInput;

// Checks to see if data entered is valid
let errorCheck = (arrayInputString, windowSize) => {

	let inputArray = [];
	let inputExists = false;
	let arrayisValid = false;

	if (arrayInputString && windowSize) {
		inputExists = true;
	}else {
		document.getElementById("outputSpan").innerHTML ="Please enter data in the input boxes.";
		console.log("Please enter data in the input boxes.");
	}

	// Throws an error if the array is not entered as numbers, separted by commas
	try {
		inputArray = JSON.parse("[" + arrayInputString + "]");
		arrayisValid = true;
	} catch (error) {
		document.getElementById("outputSpan").innerHTML ="Array must be entered as numbers, separted by commas.";
		console.log("Array must be entered as numbers, separted by commas.");
		arrayIsValid = false;
	}

	// Checks that the windows size is not larger than the array
	if (inputArray.length >= windowSize && arrayisValid == true) {
		averageFunction(inputArray, windowSize);
	} else if (inputArray.length < windowSize && arrayisValid == true) {
		document.getElementById("outputSpan").innerHTML ="Window size should not be larger than array size.";
		console.log("Window size should not be larger than array size.");		
	}
}

// Function that builds the array of averages, and outputs this array when completed
let averageFunction = (inputArray, windowSize) => {
	const holderArray = []; // Tracks array elements being used to take the average
	const outputArray = []; // Used to store calculated averages
	let sum = 0;

	for (let i = 0; i < inputArray.length; i++) {
		holderArray.push(inputArray[i]);

		// Calculate cumulative averages up until the window size has been hit
		if (outputArray.length < windowSize) {
				sum += inputArray[i];
				const avg = sum/(i+1);
				outputArray.push(avg);

		// After the window size has been hit, calculates simple moving average using windowSize  
		} else {
				sum += inputArray[i] - holderArray.shift();
				const avg = sum/windowSize;
				outputArray.push(avg);
		}
	}

	// Output
	document.getElementById("outputSpan").innerHTML ="[" + outputArray.join(", ") + "]";
	console.log(outputArray, "output");

}









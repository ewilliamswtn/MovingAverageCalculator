
let AvgFunction = () => {

  const arrayInputString = document.getElementById('arrayInput').value;
  const win = parseInt(document.getElementById('windowInput').value);
  let inputArray = [];  // Array built from user input
	const holderArray = []; // Array to hold only the numbers being averaged
	const outputArray = []; // Array to store output values 
	let sum = 0;


	try {

		inputArray = JSON.parse("[" + arrayInputString + "]");
		const inputArraySize = inputArray.length;

		if (inputArraySize < win) {

			console.log("Window size should not be larger than array size.");

		} else {

			for (let i = 0; i < inputArraySize; i++) {

				holderArray.push(inputArray[i]);

				if (outputArray.length < win) {
					sum += inputArray[i];
					const avg = sum/(i+1);
					outputArray.push(avg);

				}

				else {

					sum += inputArray[i] - holderArray.shift();
					const avg = sum/win;
					outputArray.push(avg);

				}
			}

				console.log(outputArray, "output");

		}
	} catch (error) {

		console.log("Array must be entered as numbers, separted by commas.");

	}
}

document.getElementById("readyButton").onclick = AvgFunction;

// ***********************************************************
// notes
// ***********************************************************

// Array must be numbers, separated by commas

// Window size must be an integer
// Window size cannot be negative, or 0
// Window size cannot be larger than array size


// Time complexity: O(n)
// Space complexicity: 0(n)


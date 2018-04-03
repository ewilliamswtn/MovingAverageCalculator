
let AvgFunction = () => {

  var textBox1 = document.getElementById('arrayInput').value;
  var win = parseInt(document.getElementById('windowInput').value);
  var inputArray = [];  // Array built from user input
	var holderArray = []; // Array to hold only the numbers being averaged
	var outputArray = []; // Array to store output values 

	try {

		inputArray = JSON.parse("[" + textBox1 + "]");
		var inputArraySize = inputArray.length;

		if (inputArraySize < win) {

			console.log("Window size should not be larger than array size.");

		} else {

			for (var i = 0; i < inputArraySize; i++) {

				holderArray.push(inputArray[i]);

				if (outputArray.length < win) {

					var sum = holderArray.reduce((a, b) => a + b, 0);
					var avg = sum/(i+1);
					outputArray.push(avg);

				}

				else {

					holderArray.shift();
					var sum = holderArray.reduce((a, b) => a + b, 0);
					var avg = sum/win;
					outputArray.push(avg);

				}
			}

				console.log(win);
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





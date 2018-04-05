# MovingAverageCalculator
## Description
#### Javascript program that will incrementally calculate the average of array elements.

## Details
* Allows user to input an array of numbers and a window size.<br>
* When the user is ready, a button may be clicked that will calculate the averages and send them to an array, which is then displayed.<br>

* ### Time complexity: O(n)<br>
* ### Space complexity: O(n)

## Notes
* An error message will be displayed if the user does not enter data for the **Array** and/or the **Window Size**.
  * [scripts/scripts.js lines 19-24](/scripts.js)

* An error message will be displayed if the user does not enter a valid array of numbers, separated by commas, for the **Array**.
  * [scripts/scripts.js lines 27-34](/scripts.js)

* An error message will be displayed if the user enters a **Window Size** that is larger than the size of the **Array**.
  * [scripts/scripts.js lines 37-43](/scripts.js)

* The user is unable to enter 0, negative numbers, or non-integers for the **Window Size**.
  * [index.html line 22](/index.html)

## To run:

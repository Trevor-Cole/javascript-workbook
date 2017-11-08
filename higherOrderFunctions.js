//Create an object and store it to a variable called userObject. It must have at least 8 key/value pairs.

const myFunction = (arr, callback) => {
	const myNewArr = [];
	
	arr.forEach((item) => {
		myNewArr.push(callback(item));		
	});
	
	return myNewArr;
};

// const myArr = [0, 1, 2, 4];
// myFunction(myArr, (cory) => {
// 	return cory;
// });

const userObject = {
  name: 'bob',
  height: "6'7",
  age: 36,
  race: 'white',
  gender: 'male',
  dob: '09/13/1965',
  favColor: 'red',
  intrests: ['sports', 'music']
};
const userKeyArray = Object.keys(userObject);

// Create an array of all of the values in userObject using userKeyArray and your map() function, store it in a variable called userValueArray. 


const userValueArray = myFunction(userKeyArray, (item) => {
  return userObject[item];
});
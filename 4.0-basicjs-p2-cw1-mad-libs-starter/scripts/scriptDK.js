/*
This is your silly sentence:

My :recentHolidayYouCelebrated: was so strange... first, I ran out of :pluralNoun:, and when
I went to go get more at the store down the street, a :weirdVehicleOrShip: almost ran me over!

The words you will be asking the user for are above: 
1. a recent holiday you celebrated
2. a plural noun
3. a weird vehicle or ship

*/

// part 1
// link this script file in the HTML file (with the defer attribute)





// part 2
// ask the user for each word and store them in variables:

let holiday = prompt("Name a Holiday!");
let pNoun = prompt("Name a Plural Noun!");
let whip = prompt("Name a Weird Vehicle!");


// part 3
// store the silly sentence in a variable using a template literal, and insert the variables from above:

let adLib = `Last ${holiday} I saw 5 ${pNoun} at the park. The crazy thing is, they were lifting up a ${whip} with their bare hands instead of driving it! I told the ${pNoun} to stop, but they told me,"Come on, Don't be a buzzkill. It's ${holiday}" and the ${pNoun} proceeded to throw the ${whip} at me. That day, those ${pNoun} ruined ${holiday} for me.`;


// part 4
// look at the HTML file, find the element that we are going to be storing the sentence in
// store the silly sentence in its innerHTML:

document.getElementById("madLib").innerHTML=adLib;


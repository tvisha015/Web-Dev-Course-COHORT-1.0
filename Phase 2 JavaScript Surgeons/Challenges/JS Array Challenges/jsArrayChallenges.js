// 1
// You just need to implement the addGuest function
function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list
    guestList.push(newGuest);
    return guestList;
}
let guestList = ["Anirudh","Mukul"];
let newGuest = "Radhika";
obj = addGuest(guestList,newGuest);
console.log(obj);

// 2
function eatCandy(candyJar) {
    // Remove the last candy from the jar and return the updated jar
    candyJar = candyJar.pop();
    return candyJar;
}
let candyJar = ["Lollipop","Gum","Chocolate"];
obj = eatCandy(candyJar);
console.log(obj);

// 3
function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    queue.unshift(puppyName);
    return queue;
}
let queue = ["Tom","Jerry","Spike"]
let puppyName = "Max";
obj = addPuppy(queue,puppyName);
console.log(obj);

// 4
function removeStudent(bus) {
    // Remove the first student and return the updated bus list
    bus.shift();
    return bus;
}
let bus = ["John","Sarah","Mike","Emma"];
obj = removeStudent(bus);
console.log(obj);

// 5
function sortBooks(books) {
    // Sort the books alphabetically and return the updated list
    books.sort();
    return books;
}
let books = new Array("Math","English","Science","History");
obj = sortBooks(books);
console.log(obj);

//6
function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    foodList = foodList.filter(item => item !== "Burger");
    return foodList;
}
let foodList = new Array("Salad","Burger","Apple","Pizza","Banana");
obj = filterHealthy(foodList);
console.log(obj);

// 7
// You just need to implement the findPhone function
function findPhone(items) {
    // Return the index of "Phone" in the items array
    return items.indexOf("Phone");
}
let items = new Array("Wallet","Keys","Phone","Glasses");
obj = findPhone(items)

// 8
// You just need to implement the writeLoveLetter function
function writeLoveLetter(message, name) {
    // Add name at the start of the message and return updated array
    message.unshift(name);
    return message;
}
let message = new Array("I","love","you")
let name = "Aarav";
obj = writeLoveLetter(message,name);
console.log(obj);

// 9
// You just need to implement the addVIP function
function addVIP(queue, vipGuest) {
    // Add vipGuest at the beginning of queue and return updated queue
    queue.unshift(vipGuest);
    return queue;
}

// 10
// You just need to implement the countMovies function
function countMovies(movieList) {
    // Return the number of movies in the movieList
    return movieList.length;
}
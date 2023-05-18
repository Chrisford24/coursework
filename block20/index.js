const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
function main() {
const root = document.getElementById('root'); // Grab root element and add h1 element with the text of FREELANCERS
const h1 = document.createElement('h1');
h1.style.color = "blue"
h1.innerHTML = 'FREELANCERS';
root.appendChild(h1); // Append the HTML document
const userList = document.createElement('ul'); // Create unordered list element
users.forEach(user => {
    const listItem = document.createElement('li'); // Create our list item element
    listItem.innerHTML = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`; // Set our innerHTML to display user information
    userList.appendChild(listItem); // Appends our listItem to the unordered list
})
root.appendChild(userList); // Append the unordered list to our root element
}
//call the main function
main();

const listitem = document.createElement('style');

listitem.innerHTML = `
li{
    color: blue;
}`



document.head.appendChild(listitem);


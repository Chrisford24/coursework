// Adding elements to a page

const body = document.body
/* append add strings and element */
body.append("Hello World");
body.appendChild()

// Creating elements
const div = document.createElement("div");

// adding text to elements
// div.innerText = "hello world"
div.innerHTML = "Hola world";
div.textContent = "bye world"

// must append to add to page
body.append(div)


// removing elements  element.remove() / element.removeChild(element)
div.remove()

// modify attributes
// element.getAttribute("id")
// element.setAttribute("title", "dfafd")
// element.removeAttribute("title")

// modify data attribute
// element.dataset

// modifing classes
// element.classList.add("new-class")
// element.classList.remove("classname")
// element.classList.toggle("classname")

// modifing style CSS
// element.style

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

  // ADD
// <p> with red text that says “Hey I’m red!”
const p = document.createElement('p')
p.innerText = "Hey Im Red!";
container.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement('h3');
h3.textContent = "Im a blue h3";
container.appendChild(h3);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”

const mydiv = document.createElement('div');
const myH1 = document.createElement('h1');
const myP = document.createElement('p');

mydiv.appendChild(myH1);
mydiv.appendChild(myP);

container.appendChild(mydiv);
// Add a script tag to the bottom of the page for your code.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
var storyDiv = document.getElementById("story");
const button = document.getElementById('lib-button');
button.addEventListener('click', makeMadLib)


function makeMadLib() {
    let noun = document.querySelector('#noun');
    let adjective = document.querySelector('#adjective');
    let name = document.querySelector('#person');
  // console.log(`${noun.value} ${adjective.value} ${name.value}` )

  storyDiv.innerHTML = `${name.value} married a ${adjective.value} ${noun.value}... So weird!`;
}


// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
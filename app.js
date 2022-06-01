// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const showAnswerButton = document.getElementById('show-answer-button');
const animalSection = document.getElementById('animal-section');

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

tosCheckbox.addEventListener('change', () => {
    showAnswerButton.disabled = !tosCheckbox.checked;
});

showAnswerButton.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
});
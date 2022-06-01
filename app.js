// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const showAnswerButton = document.getElementById('show-answer-button');
const animalSection = document.getElementById('animal-section');

const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('image-display');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');

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

imageSelect.addEventListener('change', () => {
    const src = 'assets/' + imageSelect.value;
    imageDisplay.src = src;
});

nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
});
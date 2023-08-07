const term = document.querySelector('.term');
const definition = document.querySelector('.definition');

const checkButton = document.querySelector('.check');
const nextbutton = document.querySelector('.Next');

words = {
    ProjectCharter: "The start document of a project. Lists details such as signature, sponsor, and project manager name.",
    Sponsor: "The person championing the project. This includes marketing, roadblock clearance, and connections person."
}

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]

    term.innerHTML = `<h3>${randomTerm[0]}</h3>`
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
    }
);

nextbutton.addEventListener('click', function() {
        getRandomWord();
    }
);
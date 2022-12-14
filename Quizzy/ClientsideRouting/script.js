var questionsJSON = [
        {
            id: 0,
            question: "What is the capital of switzerland?",
            answers:[
                {
                    text: "Bern",
                    isCorrect: true
                },
                {
                    text: "Munich",
                	isCorrect: false
                },
                {
                    text: "London",
                    isCorrect: false
                },
                {
                    text: "Paris",
                    isCorrect: false
                }   
            ]
        },
        {
            id: 1,
            question: "What is the most seen movie?",
            answers:[
                {
                    text: "E.T.",
                    isCorrect: false
                },
                {
                    text: "Titanic",
                    isCorrect: true
                },
                {
                    text: "The Wizard of Oz",
                    isCorrect: false
                },
                {
                    text: "Star Wars: Episode IV - A New Hope",
                    isCorrect: false
                }
            ]
        },
        {
            id: 2,
            question: "What is the name of the greek god of love?",
            answers:[
                {
                    text: "Aphrodite",
                    isCorrect: true
                },
                {
                    text: "Athena",
                    isCorrect: false
                },
                {
                    text: "Apollo",
                    isCorrect: false
                },
                {
                    text: "Demeter",
                    isCorrect: false
                }
            ]
        },
        {
            id: 3,
            question: "What does the Richter scale measure??",
            answers:[
                {
                    text: "Wind Speed",
                    isCorrect: false
                },
                {
                    text: "Earthquake Intensity",
                    isCorrect: true
                },
                {
                    text: "Temperature",
                    isCorrect: false
                },
                {
                    text: "Tornado Strength",
                    isCorrect: false
                }
            ]
        },
        {
            id: 4,
            question: "What is latin for fire?",
            answers:[
                {
                    text: "librum",
                    isCorrect: false
                },
                {
                    text: "Ventus",
                    isCorrect: false
                },
                {
                    text: "Aqua",
                    isCorrect: false
                },
                {
                    text: "Ignis",
                    isCorrect: true
                }
            ]
        },
        {
            id: 5,
            question: "People often wish each other to break a ...",
            answers:[
                {
                    text: "rib",
                    isCorrect: false
                },
                {
                    text: "foot",
                    isCorrect: false
                },
                {
                    text: "leg",
                    isCorrect: true
                },
                {
                    text: "finger",
                    isCorrect: false
                }
            ]
        },
        {
            id: 6,
            question: "In which country do you find the national park Serengeti?",
            answers:[
                {
                    text: "Sri Lanka",
                    isCorrect: false
                },
                {
                    text: "Tanzania",
                    isCorrect: true
                },
                {
                    text: "Kenya",
                    isCorrect: false
                },
                {
                    text: "Ruanda",
                    isCorrect: false
                }
            ]
        },
        {
            id: 7,
            question: "In which Italian city can you find the Colosseum?",
            answers:[
                {
                    text: "Venice",
                    isCorrect: false
                },
                {
                    text: "Naples",
                    isCorrect: false
                },
                {
                    text: "Rome",
                    isCorrect: true
                },
                {
                    text: "Milan",
                	isCorrect: false
                }
            ]
        },
        {
            id: 8,
            question: "What is the largest active volcano in the world?",
            answers:[
                {
                    text: "Mount Etna",
                    isCorrect: false
                },
                {
                    text: "Mount Vesuvius",
                    isCorrect: false
                },
                {
                    text: "Mount Batur",
                    isCorrect: false
                },
                {
                    text: "Mouna Loa",
                    isCorrect: true
                }
            ]
        },
        {
            id: 9,
            question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
            answers:[
                {
                    text: "Le Louvre",
                    isCorrect: true
                },
                {
                    text: "Uffizi Museum",
                    isCorrect: false
                },
                {
                    text: "British Museum",
                    isCorrect: false
                },
                {
                    text: "Metropolitan Museum of Art",
                    isCorrect: false
                }
            ]
        },
        {
            id: 10,
            question: "What is the largest continent in size?",
            answers:[
                {
                    text: "Africa",
                    isCorrect: false
                },
                {
                    text: "Australia",
                    isCorrect: false
                },
                {
                    text: "Europe",
                    isCorrect: false
                },
                {
                    text: "Asia",
                    isCorrect: true
                }
            ]
        },
        {
            id: 11,
            question: "What is the longest river in the world?",
            answers:[
                {
                    text: "Congo River",
                    isCorrect: false
                },
                {
                    text: "Yellow River",
                    isCorrect: false
                },
                {
                    text: "Nile",
                    isCorrect: false
                },
                {
                    text: "Amazon River",
                    isCorrect: true
                }
            ]
        }
    ]
var previousQuestions = new Array();
var isAnsweredCorrectly = true;
var questionsAnswered = new Array();
const PageContent = document.querySelector(".PageContent");
const homeButton = document.querySelector(".WholeTitle");
homeButton.addEventListener("click", event => {
	event.preventDefault();
	router.navigate(routes.home.hash);
})

let renderHome = () => {
	PageContent.innerHTML = `<div class="home-Container">
	<div class="home">
	<div class="Instruction">What do you want to do?</div>
	<div class="homeButtons">
	<button class="play">Play</button>
	<button class="create">Create Question</button>
	</div>
	</div>
	</div>
	`

	const playButton = document.querySelector(".play");
	playButton.addEventListener("click", event => {
		event.preventDefault();
		router.navigate(routes.quiz.hash);
	})

	const createButton = document.querySelector(".create");
	createButton.addEventListener("click", event => {
		event.preventDefault();
		router.navigate(routes.create.hash);
	})
}

let renderQuiz = () => {
	previousQuestions = new Array();
	isAnsweredCorrectly = true;
	answeredQuestions = 0;
	PageContent.innerHTML = `<div class="Display">
	<div class="Quiz-Container">
	<div class="Question"></div>
	<div class="AnswerContainer">
	  <button class="Answer" id="ButtonA" value="0"></button>
	  <button class="Answer" id="ButtonB" value="1"></button>
	  <button class="Answer" id="ButtonC" value="2"></button>
	  <button class="Answer" id="ButtonD" value="3"></button>
	</div>
	</div>
	<div class="progressContainer">
	<div class="bar" data-value="9">Frage 10</div>
	<div class="bar" data-value="8">Frage 9</div>
	<div class="bar" data-value="7">Frage 8</div>
	<div class="bar" data-value="6">Frage 7</div>
	<div class="bar" data-value="5">Frage 6</div>
	<div class="bar" data-value="4">Frage 5</div>
	<div class="bar" data-value="3">Frage 4</div>
	<div class="bar" data-value="2">Frage 3</div>
	<div class="bar" data-value="1">Frage 2</div>
	<div class="bar" data-value="0">Frage 1</div>
	</div>
  </div>`
  createQuestion(questionsJSON)
}

let renderCreate = () => {
	PageContent.innerHTML = "";
	var howOftenLoaded = 0;
	PageContent.innerHTML +=`<div class="home-Container" id="create">
	<div class="usage">Here you can create some of your own questions.</br>For that you need to fill all the input fields and check one checkbox, this will mark an answer as the correct one.</div>
	<div class="BoxContainer">`
	howOftenLoaded = createQuestionBox(howOftenLoaded);
}

async function createQuestionBox(howOftenLoaded){
	document.querySelector(".BoxContainer").innerHTML +=`
	<div class="createContainer" id="${howOftenLoaded}">
	<div class="inputContainer">
		<div class="nameOfInput">Question:</div>  
		<input class="Input" id="question" type="text" maxlength="30" placeholder=""/>
	</div>
	<div class="answerContainer">
	<div class="inputContainer" id="answer">
	<input class="bool" type="checkbox">
	<div class="nameOfInput">A:</div>  
	<input class="Input" id="answer" type="text" maxlength="30" placeholder=""/>
	</div>
	<div class="inputContainer" id="answer">
	<input class="bool" type="checkbox">
	<div class="nameOfInput">B:</div>  
	<input class="Input" id="answer" type="text" maxlength="30" placeholder=""/>
	</div>
	<div class="inputContainer" id="answer">
	<input class="bool" type="checkbox">
	<div class="nameOfInput">C:</div>  
	<input class="Input" id="answer" type="text" maxlength="30" placeholder=""/>
	</div>
	<div class="inputContainer" id="answer">
	<input class="bool" type="checkbox">
	<div class="nameOfInput">D:</div>  
	<input class="Input" id="answer" type="text" maxlength="30" placeholder=""/>
	</div>
	</div>
	<div class="errorMessage"></div>
	<button class="apply" value="${howOftenLoaded}">Apply</button>
	</div>
	<button class="addQuestion">Add Question</button>`
	howOftenLoaded += 1;
	const applyChanges = document.querySelectorAll(".apply")
	applyButton(applyChanges);
	const addQuestion = document.querySelector(".addQuestion")
	addQuestion.addEventListener("click", event => {
		event.preventDefault(),
		addQuestion.parentNode.removeChild(addQuestion);
		createQuestionBox(howOftenLoaded);
	})
}

function applyButton(applyChanges){
	applyChanges.forEach(async element => {
		const inputFields = document.getElementById(element.value).querySelectorAll(".Input")
		const checkboxes = document.getElementById(element.value).querySelectorAll(".bool")
		let isInputFieldEmpty = false;
        let isChecked = false;
        checkboxes.forEach(element => {
            element.addEventListener("click", event =>{
                isChecked = true;
                checkboxes.forEach(box =>{
                    if(box != element){
                        box.checked = false;
                    }
                    else{
                        box.checked = true
                    }
                })
            })
        })
		element.onclick = () => {
			inputFields.forEach(element => {
				if(element.value === "")
				{
					isInputFieldEmpty = true;
				}
			})

			if(!isInputFieldEmpty && isChecked){
			let newQuestion = {
				id: Object.keys(questionsJSON).length,
				question: inputFields[0].value,
				answers:[
					{
						text: inputFields[1].value,
						isCorrect: checkboxes[0].checked
					},
					{
						text: inputFields[2].value,
						isCorrect: checkboxes[1].checked
					},
					{
						text: inputFields[3].value,
						isCorrect: checkboxes[2].checked
					},
					{
						text: inputFields[4].value,
						isCorrect: checkboxes[3].checked
					}
				]
			}
				questionsJSON.push(newQuestion);
				document.getElementById(element.value).parentNode.removeChild(document.getElementById(element.value))
			}
			else{
				document.querySelector(".errorMessage").innerHTML = "You are not allowed to leave a Field empty"
				howManyChecks = 0;
				isInputFieldEmpty = false;
			}
		}
	})
}

function createQuestion(questionList){
    var isAlreadyAnswered = false;

	if(answeredQuestions > 9){
		createWinOrLoseScreen("You answered all questions correctly!");
	}
	else if(!isAnsweredCorrectly){
		createWinOrLoseScreen("What a shame! Your answer was wrong");
	}
	else{
	const answerbuttons = document.querySelectorAll(".Answer");
	do{
    	var i = Math.floor(Math.random() * Object.keys(questionList).length);
	}while(previousQuestions.includes(i));
    document.querySelector(".Question").innerHTML = questionList[i].question;
    document.getElementById("ButtonA").innerHTML = questionList[i].answers[0].text;
    document.getElementById("ButtonB").innerHTML = questionList[i].answers[1].text;
    document.getElementById("ButtonC").innerHTML = questionList[i].answers[2].text;
    document.getElementById("ButtonD").innerHTML = questionList[i].answers[3].text;
	previousQuestions.push(questionList[i].id);

	answerbuttons.forEach(element => {
		element.onclick = () => {
			const progressbars = document.querySelectorAll(".bar");
            if(!isAlreadyAnswered){
			if (questionList[i].answers[element.value].isCorrect){
				element.style.backgroundColor = "#3BB143";
				progressbars[9 - answeredQuestions].style.backgroundColor = "#3BB143";
				answeredQuestions += 1;
			}
			else{
				element.style.backgroundColor = "red";
				progressbars[9 - answeredQuestions].style.backgroundColor = "red";
				isAnsweredCorrectly = false;
			}
			setTimeout(() => { 
			element.style.backgroundColor = "";
			createQuestion(questionsJSON); }, 700);
            isAlreadyAnswered = true;
		}
    }
	})
}
}

function createWinOrLoseScreen(textToDisplay){
	PageContent.innerHTML = `<div class="home-Container">
	<div class="home">
	<div class="Instruction">${textToDisplay}</div>
	<div class="homeButtons">
	<button class="play">Play again</button>
	<button class="homeButton">Go to home</button>
	</div>
	</div>
	</div>`
	const playButton = document.querySelector(".play");
	playButton.addEventListener("click", event => {
		event.preventDefault();
		router.navigate(routes.quiz.hash);
	})
	const newhomeButton = document.querySelector(".homeButton");
	newhomeButton.addEventListener("click", event => {
		event.preventDefault();
		router.navigate(routes.home.hash);
	})
}

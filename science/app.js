const views = [...document.querySelectorAll('.view')];
const navButtons = [...document.querySelectorAll('.nav-button')];

function showView(id) {
  views.forEach(view => view.classList.toggle('active', view.id === id));
  navButtons.forEach(button => button.classList.toggle('active', button.dataset.view === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showView(button.dataset.go)));

const flashcards = [
  ['feedback', 'Homeostasis', 'The maintenance of a stable internal environment within safe limits.'],
  ['feedback', 'Negative feedback', 'A response that counteracts the original change and returns a condition towards its normal range.'],
  ['feedback', 'Positive feedback', 'A response that increases the original change until a clear endpoint stops the cycle.'],
  ['feedback', 'Stimulus', 'A change in the internal or external environment that produces a response.'],
  ['feedback', 'Sensor', 'A receptor that detects a change.'],
  ['feedback', 'Control centre', 'The part that receives information and coordinates a response.'],
  ['feedback', 'Effector', 'A muscle or gland that carries out a response.'],
  ['feedback', 'Endotherm', 'An animal that produces most of its heat through metabolism.'],
  ['feedback', 'Ectotherm', 'An animal whose temperature depends more on heat from the environment.'],
  ['feedback', 'Hypothalamus', 'The brain region that coordinates thermoregulation and helps control endocrine activity.'],
  ['endocrine', 'Hormone', 'A chemical messenger released by a gland and carried in the blood.'],
  ['endocrine', 'Target cell', 'A cell with the receptor needed to respond to a particular hormone.'],
  ['endocrine', 'Insulin', 'A pancreatic hormone that lowers blood glucose.'],
  ['endocrine', 'Glucagon', 'A pancreatic hormone that raises blood glucose.'],
  ['endocrine', 'Glycogen', 'The storage form of glucose found mainly in liver and muscle cells.'],
  ['endocrine', 'Pancreas', 'An organ that senses blood glucose and releases insulin or glucagon.'],
  ['endocrine', 'Pituitary gland', 'A gland that releases hormones controlling other endocrine glands.'],
  ['endocrine', 'Hyperglycaemia', 'Blood glucose above the normal range.'],
  ['endocrine', 'Hypoglycaemia', 'Blood glucose below the normal range.'],
  ['nervous', 'Central nervous system', 'The brain and spinal cord.'],
  ['nervous', 'Peripheral nervous system', 'The nerves outside the brain and spinal cord.'],
  ['nervous', 'Sensory neuron', 'Carries an impulse from a receptor towards the CNS.'],
  ['nervous', 'Relay neuron', 'Connects neurons inside the CNS.'],
  ['nervous', 'Motor neuron', 'Carries an impulse from the CNS to an effector.'],
  ['nervous', 'Reflex action', 'A rapid automatic response to a stimulus.'],
  ['nervous', 'Reflex arc', 'The nerve pathway involved in a reflex action.'],
  ['nervous', 'Nerve impulse', 'An electrical signal transmitted along a neuron.'],
  ['nervous', 'Dendrite', 'A branched part of a neuron that receives signals.'],
  ['nervous', 'Axon', 'The long part of a neuron that carries an impulse away from the cell body.'],
  ['nervous', 'Myelin sheath', 'An insulating layer that increases the speed of an impulse along an axon.'],
  ['nervous', 'Axon terminal', 'The end of an axon where neurotransmitter is released.'],
  ['nervous', 'Synapse', 'The small gap between a presynaptic cell and a postsynaptic cell.'],
  ['nervous', 'Neurotransmitter', 'A chemical messenger released across a synapse.'],
  ['nervous', 'Reaction time', 'The time taken to respond to a stimulus.'],
  ['nervous', 'Cerebellum', 'The brain region that coordinates movement and balance.'],
  ['nervous', 'Brain stem', 'Connects the brain to the spinal cord and controls automatic functions such as breathing.']
];

let filteredCards = [...flashcards];
let cardIndex = 0;
let cardFlipped = false;

const flashcard = document.getElementById('flashcard');
const cardTopic = document.getElementById('card-topic');
const cardLabel = document.getElementById('card-label');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const cardCount = document.getElementById('card-count');

function renderCard() {
  const [topic, front, back] = filteredCards[cardIndex];
  cardTopic.textContent = topic;
  cardLabel.textContent = cardFlipped ? 'DEFINITION' : 'TERM';
  cardFront.textContent = front;
  cardBack.textContent = back;
  cardCount.textContent = `${cardIndex + 1} / ${filteredCards.length}`;
  flashcard.classList.toggle('flipped', cardFlipped);
}

flashcard.addEventListener('click', () => { cardFlipped = !cardFlipped; renderCard(); });
document.getElementById('prev-card').addEventListener('click', () => { cardIndex = (cardIndex - 1 + filteredCards.length) % filteredCards.length; cardFlipped = false; renderCard(); });
document.getElementById('next-card').addEventListener('click', () => { cardIndex = (cardIndex + 1) % filteredCards.length; cardFlipped = false; renderCard(); });

document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach(item => item.classList.toggle('active', item === button));
    filteredCards = button.dataset.filter === 'all' ? [...flashcards] : flashcards.filter(card => card[0] === button.dataset.filter);
    cardIndex = 0;
    cardFlipped = false;
    renderCard();
  });
});

renderCard();

const autoQuestions = [
  {
    topic: 'Homeostasis',
    prompt: 'Which statement best defines homeostasis?',
    options: ['Keeping every internal condition perfectly constant', 'Maintaining internal conditions within safe limits', 'Increasing all body processes after a stimulus', 'Controlling only body temperature'],
    answer: 1,
    explain: 'Homeostasis keeps internal conditions within a narrow safe range. Small changes still occur.'
  },
  {
    topic: 'Feedback',
    prompt: 'What characterises a negative feedback loop?',
    options: ['It amplifies the original change', 'It counteracts the original change', 'It produces no response', 'It occurs only during illness'],
    answer: 1,
    explain: 'Negative feedback produces a response that opposes the original change.'
  },
  {
    topic: 'Feedback',
    prompt: 'What happens to the initial stimulus during negative feedback?',
    options: ['It is amplified', 'It remains unchanged', 'It is reduced or stopped', 'It becomes a different stimulus'],
    answer: 2,
    explain: 'The response reduces the departure from the normal range.'
  },
  {
    topic: 'Feedback',
    prompt: 'Which process uses positive feedback?',
    options: ['Blood clotting', 'Blood glucose regulation', 'Temperature regulation', 'Water balance'],
    answer: 0,
    explain: 'Activated platelets attract more platelets until the clot forms.'
  },
  {
    topic: 'Thermoregulation',
    prompt: 'Which statement describes an endotherm?',
    options: ['Its temperature always equals the air temperature', 'It gains all heat by lying in sunlight', 'It produces most body heat through metabolism', 'It cannot change its heat-loss rate'],
    answer: 2,
    explain: 'Endotherms generate much of their heat through metabolic reactions.'
  },
  {
    topic: 'Thermoregulation',
    prompt: 'Which response helps an endotherm cool down?',
    options: ['Shivering', 'Vasoconstriction', 'Sweating', 'Increased muscle contraction'],
    answer: 2,
    explain: 'Sweat absorbs thermal energy as it evaporates from the skin.'
  },
  {
    topic: 'Thermoregulation',
    prompt: 'What is the control centre for human thermoregulation?',
    options: ['Pancreas', 'Hypothalamus', 'Cerebellum', 'Spinal nerve'],
    answer: 1,
    explain: 'The hypothalamus receives temperature information and coordinates effectors.'
  },
  {
    topic: 'Endocrine',
    prompt: 'How do endocrine glands send messages to target cells?',
    options: ['Hormones travel in the bloodstream', 'Impulses travel through bones', 'Enzymes travel through axons', 'Antibodies travel through synapses'],
    answer: 0,
    explain: 'Endocrine glands secrete hormones into the blood.'
  },
  {
    topic: 'Endocrine',
    prompt: 'Why does a hormone affect some cells but not every cell?',
    options: ['Only target cells contain the matching receptor', 'Hormones remain inside the gland', 'Only neurons receive chemical signals', 'Hormones move through one nerve only'],
    answer: 0,
    explain: 'A target cell responds because it has a receptor that matches the hormone.'
  },
  {
    topic: 'Blood glucose',
    prompt: 'Which response occurs when blood glucose rises after a meal?',
    options: ['Alpha cells release glucagon', 'Beta cells release insulin', 'The liver releases more glucose', 'Muscles release glycogen into blood'],
    answer: 1,
    explain: 'Pancreatic beta cells detect high blood glucose and secrete insulin.'
  },
  {
    topic: 'Blood glucose',
    prompt: 'What is one effect of glucagon?',
    options: ['The liver breaks down glycogen', 'Cells remove more glucose from blood', 'The pancreas stores blood as glycogen', 'Sweat glands release glucose'],
    answer: 0,
    explain: 'Glucagon causes the liver to break down glycogen and release glucose.'
  },
  {
    topic: 'Blood glucose',
    prompt: 'Why is blood glucose regulation negative feedback?',
    options: ['The response moves glucose further from normal', 'The response reverses the original glucose change', 'The response ends only after childbirth', 'The response always causes disease'],
    answer: 1,
    explain: 'Insulin or glucagon opposes the original change in blood glucose.'
  },
  {
    topic: 'Nervous system',
    prompt: 'Which structures form the central nervous system?',
    options: ['Brain and spinal cord', 'Brain and sensory nerves', 'Spinal cord and muscles', 'Receptors and glands'],
    answer: 0,
    explain: 'The CNS consists of the brain and spinal cord.'
  },
  {
    topic: 'Nervous system',
    prompt: 'Which neuron carries an impulse from a skin receptor towards the CNS?',
    options: ['Motor neuron', 'Sensory neuron', 'Effector neuron', 'Endocrine neuron'],
    answer: 1,
    explain: 'A sensory neuron carries information from a receptor to the CNS.'
  },
  {
    topic: 'Reflexes',
    prompt: 'Which sequence correctly describes a withdrawal reflex?',
    options: ['Motor neuron, receptor, sensory neuron, muscle', 'Receptor, sensory neuron, relay neuron, motor neuron, muscle', 'Brain, hormone, receptor, muscle', 'Muscle, spinal cord, receptor, sensory neuron'],
    answer: 1,
    explain: 'The receptor starts the pathway. The signal enters the spinal cord before leaving through a motor neuron.'
  },
  {
    topic: 'Synapses',
    prompt: 'How does a signal usually cross a synapse?',
    options: ['A neurotransmitter diffuses across the gap', 'The axons physically join together', 'Blood carries the electrical impulse', 'The myelin sheath enters the next neuron'],
    answer: 0,
    explain: 'The presynaptic cell releases a neurotransmitter that binds to receptors on the next cell.'
  }
];

const writtenQuestions = [
  {
    topic: 'Thermoregulation',
    prompt: 'Explain how negative feedback lowers body temperature when a student becomes too hot during exercise. [6]',
    guide: ['States that body temperature rises above the normal range', 'Names thermoreceptors or the hypothalamus as detecting the change', 'Names the hypothalamus as the control centre', 'Identifies sweating as an effector response', 'Explains vasodilation or increased skin blood flow', 'Explains that heat loss returns temperature towards normal']
  },
  {
    topic: 'Endotherms and ectotherms',
    prompt: 'Compare how an endotherm and an ectotherm maintain a suitable body temperature. [4]',
    guide: ['Defines an endotherm using metabolic heat', 'Defines an ectotherm using environmental heat', 'Gives one relevant endotherm response', 'Gives one relevant ectotherm behaviour']
  },
  {
    topic: 'Blood glucose',
    prompt: 'Explain how blood glucose returns towards normal after a carbohydrate-rich meal. [6]',
    guide: ['States that blood glucose rises', 'Names beta cells in the pancreas', 'Names insulin', 'Explains glucose uptake by body cells', 'Explains conversion of glucose to glycogen in the liver', 'Links the response to negative feedback']
  },
  {
    topic: 'CER and data',
    prompt: 'Use CER to explain whether the data support the claim that exercise lowers blood glucose. [6]',
    table: {
      headings: ['Time after exercise / min', '0', '10', '20', '30'],
      values: ['Blood glucose / mmol L⁻¹', '7.8', '7.1', '6.5', '6.2']
    },
    guide: ['Makes a direct claim that the data support the statement', 'Quotes the starting value with its unit', 'Quotes the final value with its unit', 'States that blood glucose decreased over time', 'Links the decrease to glucose uptake by muscle cells', 'Explains that cells use glucose in respiration']
  }
];

const modePicker = document.getElementById('mode-picker');
const quizShell = document.getElementById('quiz-shell');
const results = document.getElementById('results');
const questionCard = document.getElementById('question-card');
const questionNumber = document.getElementById('question-number');
const questionTopic = document.getElementById('question-topic');
const progressBar = document.getElementById('progress-bar');
const timer = document.getElementById('timer');
const nextButton = document.getElementById('next-question');

let activeQuestions = [];
let currentQuestion = 0;
let responses = [];
let timeLeft = 15 * 60;
let timerId;

function shuffle(items) {
  return [...items].sort(() => Math.random() - .5);
}

function startQuiz(mode) {
  activeQuestions = mode === 'quick' ? shuffle(autoQuestions).slice(0, 8) : [...autoQuestions, ...writtenQuestions];
  currentQuestion = 0;
  responses = [];
  timeLeft = (mode === 'quick' ? 15 : 55) * 60;
  modePicker.classList.add('hidden');
  results.classList.add('hidden');
  quizShell.classList.remove('hidden');
  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft -= 1;
    renderTimer();
    if (timeLeft <= 0) finishQuiz();
  }, 1000);
  renderTimer();
  renderQuestion();
}

function renderTimer() {
  const minutes = Math.max(0, Math.floor(timeLeft / 60));
  const seconds = Math.max(0, timeLeft % 60);
  timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function renderQuestion() {
  const question = activeQuestions[currentQuestion];
  questionNumber.textContent = `Question ${currentQuestion + 1} of ${activeQuestions.length}`;
  questionTopic.textContent = question.topic;
  progressBar.style.width = `${(currentQuestion / activeQuestions.length) * 100}%`;
  nextButton.textContent = currentQuestion === activeQuestions.length - 1 ? 'Finish quiz' : 'Next question';

  if (question.options) {
    questionCard.innerHTML = `<h2>${question.prompt}</h2><div class="option-list">${question.options.map((option, index) => `<label><input type="radio" name="answer" value="${index}"><span>${option}</span></label>`).join('')}</div>`;
  } else {
    const table = question.table ? `<table class="data-table"><tr>${question.table.headings.map(value => `<th>${value}</th>`).join('')}</tr><tr>${question.table.values.map(value => `<td>${value}</td>`).join('')}</tr></table>` : '';
    questionCard.innerHTML = `<h2>${question.prompt}</h2>${table}<label for="written-answer"><span class="sr-only">Your answer</span></label><textarea id="written-answer" placeholder="Write your answer here..."></textarea>`;
  }
}

function saveCurrentResponse() {
  const question = activeQuestions[currentQuestion];
  if (question.options) {
    const checked = questionCard.querySelector('input:checked');
    responses[currentQuestion] = checked ? Number(checked.value) : null;
  } else {
    responses[currentQuestion] = questionCard.querySelector('textarea').value.trim();
  }
}

function finishQuiz() {
  clearInterval(timerId);
  saveCurrentResponse();
  quizShell.classList.add('hidden');
  results.classList.remove('hidden');
  progressBar.style.width = '100%';

  const autoItems = activeQuestions.filter(question => question.options);
  let correct = 0;
  const review = activeQuestions.map((question, index) => {
    const response = responses[index];
    if (question.options) {
      const isCorrect = response === question.answer;
      if (isCorrect) correct += 1;
      const selected = response === null || response === undefined ? 'No answer' : question.options[response];
      return `<div class="review-item ${isCorrect ? 'correct' : 'incorrect'}"><h3>${index + 1}. ${question.prompt}</h3><p><strong>Your answer:</strong> ${selected}</p><p><strong>Answer:</strong> ${question.options[question.answer]}</p><p>${question.explain}</p></div>`;
    }
    return `<div class="review-item"><h3>${index + 1}. ${question.prompt}</h3><p><strong>Your answer:</strong> ${response || 'No answer'}</p><div class="self-mark"><strong>Self-marking checklist</strong>${question.guide.map(point => `<label><input type="checkbox" class="mark-point"> <span>${point}</span></label>`).join('')}</div></div>`;
  }).join('');

  results.innerHTML = `<div class="score-circle"><strong>${correct}/${autoItems.length}</strong><span>auto score</span></div><h2>Review every answer</h2><p>For written answers, tick each idea that your response included. One tick represents one possible mark.</p>${review}<div class="quiz-actions"><button class="secondary-action" id="retry-quiz">Choose another mode</button><button class="primary-action" id="review-notes">Review the notes</button></div>`;
  results.querySelector('#retry-quiz').addEventListener('click', resetQuiz);
  results.querySelector('#review-notes').addEventListener('click', () => showView('notes'));
}

function resetQuiz() {
  clearInterval(timerId);
  modePicker.classList.remove('hidden');
  quizShell.classList.add('hidden');
  results.classList.add('hidden');
  timeLeft = 15 * 60;
  renderTimer();
}

document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => startQuiz(button.dataset.mode)));
nextButton.addEventListener('click', () => {
  saveCurrentResponse();
  if (currentQuestion === activeQuestions.length - 1) finishQuiz();
  else { currentQuestion += 1; renderQuestion(); }
});
document.getElementById('quit-quiz').addEventListener('click', resetQuiz);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !quizShell.classList.contains('hidden')) resetQuiz();
});

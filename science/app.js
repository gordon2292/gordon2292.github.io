const views = [...document.querySelectorAll('.view')];
const navButtons = [...document.querySelectorAll('.nav-button')];

function showView(id) {
  views.forEach(view => view.classList.toggle('active', view.id === id));
  const navView = ['notes', 'flashcards', 'quiz'].includes(id) ? 'overview' : ['chem-notes', 'chem-cards', 'chem-quiz'].includes(id) ? 'chemistry' : id;
  navButtons.forEach(button => button.classList.toggle('active', button.dataset.view === navView));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showView(button.dataset.go)));
document.querySelectorAll('[data-open-note]').forEach(button => button.addEventListener('click', () => {
  const note = document.getElementById(button.dataset.openNote);
  if (note) {
    note.open = true;
    requestAnimationFrame(() => note.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }
}));

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
  ['feedback', 'Platelet activation', 'A positive feedback process in which activated platelets release chemicals that recruit and activate more platelets.'],
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
  ['nervous', 'Brain stem', 'Connects the brain to the spinal cord and controls automatic functions such as breathing.'],
  ['osmosis', 'Osmoregulation', 'The control of water and solute concentrations inside an organism.'],
  ['osmosis', 'Osmosis', 'The net movement of water across a partially permeable membrane from higher water concentration to lower water concentration.'],
  ['osmosis', 'Isotonic', 'Describes a solution with the same effective solute concentration as the cell, so there is no net water movement.'],
  ['osmosis', 'Hypotonic', 'Describes a solution with a lower solute concentration than the cell, causing water to enter the cell.'],
  ['osmosis', 'Hypertonic', 'Describes a solution with a higher solute concentration than the cell, causing water to leave the cell.'],
  ['plants', 'Tropism', 'Directional plant growth in response to a stimulus.'],
  ['plants', 'Auxin', 'A plant hormone that affects cell elongation and helps control growth responses.'],
  ['plants', 'Phototropism', 'Directional growth in response to light.'],
  ['plants', 'Gravitropism', 'Directional growth in response to gravity.'],
  ['plants', 'Thigmotropism', 'Directional growth in response to touch.'],
  ['plants', 'Photoperiod', 'The duration of daylight in a 24-hour cycle.'],
  ['immunity', 'Pathogen', 'A microorganism or agent that can cause disease.'],
  ['immunity', 'Antigen', 'A molecule recognised as foreign by the immune system.'],
  ['immunity', 'Antibody', 'A protein made by B cells that binds to a specific antigen.'],
  ['immunity', 'Phagocyte', 'A white blood cell that surrounds and digests pathogens.'],
  ['immunity', 'Lymphocyte', 'A white blood cell involved in a specific immune response.'],
  ['immunity', 'Memory cell', 'A long-lived immune cell that helps produce a faster response after later exposure to the same antigen.'],
  ['immunity', 'Antibiotic', 'A medicine used to treat bacterial infections, not viral infections.'],
  ['immunity', 'Antiviral', 'A medicine that reduces viral replication or interferes with a viral process.'],
  ['immunity', 'Vaccine', 'A preparation that exposes the immune system to antigens safely and promotes immune memory.'],
  ['immunity', 'Antibiotic resistance', 'The ability of bacteria to survive an antibiotic that previously killed or stopped them.'],
  ['immunity', 'Inflammation', 'A non-specific response that increases blood flow and vessel permeability near damaged or infected tissue.'],
  ['immunity', 'Pus', 'Dead immune cells and microbes suspended in tissue fluid.'],
  ['immunity', 'Fever', 'A controlled rise in body temperature that can slow some pathogens and increase immune activity.']
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
  },
  {
    topic: 'Osmosis',
    prompt: 'A cell is placed in an isotonic solution. What happens to its water balance?',
    options: ['Water only enters the cell', 'Water only leaves the cell', 'There is no net movement of water', 'The membrane stops all water movement'],
    answer: 2,
    explain: 'Water moves in both directions, but there is no net movement because the effective concentrations are equal.'
  },
  {
    topic: 'Osmosis',
    prompt: 'What usually happens to an animal cell placed in a hypotonic solution?',
    options: ['Water enters the cell', 'Water leaves the cell', 'Salt leaves but water cannot move', 'The cell becomes isotonic immediately'],
    answer: 0,
    explain: 'The solution has a lower solute concentration than the cell, so water enters by osmosis.'
  },
  {
    topic: 'Osmoregulation',
    prompt: 'Which adaptation helps a freshwater fish remove excess water?',
    options: ['Drinking large amounts of seawater', 'Producing large amounts of dilute urine', 'Stopping all ion uptake at the gills', 'Producing very concentrated urine'],
    answer: 1,
    explain: 'Freshwater fish gain water by osmosis, so their kidneys release large amounts of dilute urine.'
  },
  {
    topic: 'Plant responses',
    prompt: 'Why does a young shoot bend towards light?',
    options: ['Auxin causes greater cell elongation on the shaded side', 'Water moves out of every cell on the shaded side', 'Gravity stops cell division on the lit side', 'Antibodies accumulate on the shaded side'],
    answer: 0,
    explain: 'Auxin redistributes towards the shaded side, where greater elongation bends the shoot towards light.'
  },
  {
    topic: 'Plant responses',
    prompt: 'Which response is shown when a root grows downwards?',
    options: ['Negative gravitropism', 'Positive gravitropism', 'Positive phototropism', 'Negative hydrotropism'],
    answer: 1,
    explain: 'The root grows in the direction of the gravitational stimulus, so the response is positive gravitropism.'
  },
  {
    topic: 'Immunity',
    prompt: 'Which statement about antibiotics is correct?',
    options: ['They kill every type of virus', 'They treat bacterial infections', 'They create antibodies directly', 'They prevent every future infection'],
    answer: 1,
    explain: 'Antibiotics act against bacteria. They do not treat viral infections.'
  },
  {
    topic: 'Immunity',
    prompt: 'Why does an antibody bind to one particular antigen?',
    options: ['Its binding site has a matching shape', 'It contains the same DNA as the pathogen', 'It is carried by a motor neuron', 'It dissolves every cell membrane'],
    answer: 0,
    explain: 'A specific antibody has a binding site with a shape that matches its antigen.'
  },
  {
    topic: 'Immunity',
    prompt: 'How can vaccination lead to a faster response after later infection?',
    options: ['It produces memory cells', 'It removes all skin barriers', 'It prevents phagocytes from working', 'It turns viruses into bacteria'],
    answer: 0,
    explain: 'Memory cells formed after vaccination help the immune system respond faster to the same antigen later.'
  },
  {
    topic: 'Immunity',
    prompt: 'What is the main role of a phagocyte?',
    options: ['Release insulin', 'Engulf and digest pathogens', 'Carry impulses to muscles', 'Make plant cells elongate'],
    answer: 1,
    explain: 'Phagocytes surround and digest pathogens as part of the non-specific immune response.'
  },
  {
    topic: 'Antibiotic resistance',
    prompt: 'How can antibiotic resistance become more common in a bacterial population?',
    options: ['Resistant bacteria survive and reproduce', 'Every bacterium decides to become resistant', 'Antibiotics change bacteria into viruses', 'Vaccines remove bacterial variation'],
    answer: 0,
    explain: 'Antibiotics create selection pressure. Resistant bacteria survive and pass resistance to their descendants.'
  },
  {
    topic: 'Graph interpretation',
    prompt: 'In the IV-glucose graph, blood plasma glucose is about 15 mmol dm⁻³ at 115 mmol dm⁻³ injected and about 52 at 145. What is a reasonable interpolated value at 135?',
    options: ['About 10 mmol dm⁻³', 'About 20 mmol dm⁻³', 'About 40 mmol dm⁻³', 'About 90 mmol dm⁻³'],
    answer: 2,
    explain: 'The point at 135 lies between the values at 115 and 145, giving an approximate reading of 40 mmol dm⁻³.'
  },
  {
    topic: 'Data analysis',
    prompt: 'Which evidence best supports the claim that glucose regulation worked at lower IV glucose loads?',
    options: ['Mortality reached 100%', 'Plasma glucose stayed near 10 mmol dm⁻³ at 60 and 85 mmol dm⁻³ injected', 'Urine glucose reached about 75 mmol dm⁻³', 'Plasma glucose reached about 52 mmol dm⁻³'],
    answer: 1,
    explain: 'A stable plasma concentration near the baseline supports the claim that negative feedback was maintaining balance.'
  },
  {
    topic: 'Evaluation',
    prompt: 'Why does the rat investigation not show that larger humans can tolerate high glucose concentrations?',
    options: ['Humans do not regulate glucose', 'Body size alone does not determine tolerance, and rat data cannot be transferred directly to humans', 'All mammals have identical blood', 'Oral and IV glucose always have identical effects'],
    answer: 1,
    explain: 'The conclusion goes beyond the evidence. Species differences and feeding route must be considered, and the sample is also small.'
  },
  {
    topic: 'Positive feedback',
    prompt: 'Why is blood clotting described as positive feedback?',
    options: ['Activated platelets recruit more platelets', 'Insulin lowers blood glucose', 'Sweating lowers temperature', 'The response always continues forever'],
    answer: 0,
    explain: 'Activated platelets release signals that activate more platelets until the damaged area is sealed.'
  },
  {
    topic: 'Immune response',
    prompt: 'What best explains redness and swelling around an infected cut?',
    options: ['Inflammation increases blood flow and vessel permeability', 'Motor neurons convert bacteria into antibodies', 'Glucagon seals the wound', 'The skin becomes hypertonic'],
    answer: 0,
    explain: 'Inflammatory chemicals increase local blood flow and allow fluid and immune cells to enter the tissue.'
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
  },
  {
    topic: 'Glucose data',
    prompt: 'Analyse the IV-glucose data to make one claim that negative feedback is working at lower concentrations and one claim that it is overwhelmed at higher concentrations. [8]',
    table: {
      headings: ['Glucose injected / mmol dm⁻³', '60', '85', '95', '115', '145'],
      rows: [
        ['Plasma glucose / mmol dm⁻³', '10', '10', '12', '15', '52'],
        ['Urine glucose / mmol dm⁻³', '0', '0', '5', '30', '75'],
        ['Mortality / %', '0', '0', '0', '75', '100']
      ]
    },
    guide: ['States that regulation is working at lower injected concentrations', 'Quotes the 10 mmol dm⁻³ plasma value at 60 or 85', 'Uses the zero urine glucose or mortality as further evidence', 'States that regulation is overwhelmed at higher concentrations', 'Quotes a higher plasma or urine value with its unit', 'Quotes the 75% or 100% mortality value', 'Explains that negative feedback has a limited capacity', 'Connects the evidence directly to both claims']
  },
  {
    topic: 'Evaluation',
    prompt: 'Evaluate the claim: “The rats could not tolerate high IV glucose, so larger humans can tolerate high glucose.” [6]',
    guide: ['Identifies evidence supporting poor tolerance in the tested rats', 'Quotes the 75% or 100% mortality value', 'Identifies the small sample of four IV rats', 'Explains that results from rats cannot be transferred directly to humans', 'Explains that body size alone does not determine glucose tolerance', 'Reaches a judgment limited to the tested rats and conditions']
  },
  {
    topic: 'Applied homeostasis',
    prompt: 'A cut is red, swollen and contains pus, and body temperature is slightly raised. Explain how clotting and immune responses help restore homeostasis. [8]',
    guide: ['States that the skin barrier was broken', 'Explains that platelet activation forms a plug by positive feedback', 'Links clotting to reduced blood loss or pathogen entry', 'Explains vasodilation or increased permeability during inflammation', 'Links redness or swelling to the inflammatory response', 'Explains phagocytosis of pathogens', 'Explains what pus contains', 'Links fever and later temperature regulation to restoration of balance']
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
  activeQuestions = mode === 'quick' ? shuffle(autoQuestions).slice(0, 8) : [...shuffle(autoQuestions).slice(0, 16), ...shuffle(writtenQuestions).slice(0, 4)];
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
    const tableRows = question.table?.rows || (question.table?.values ? [question.table.values] : []);
    const table = question.table ? `<table class="data-table"><tr>${question.table.headings.map(value => `<th>${value}</th>`).join('')}</tr>${tableRows.map(row => `<tr>${row.map(value => `<td>${value}</td>`).join('')}</tr>`).join('')}</table>` : '';
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

const chemistryCards = [
  ['pH', 'Indicator', 'A substance that changes colour depending on the acidity or alkalinity of a solution.'],
  ['pH', 'Universal indicator', 'An indicator mixture that gives an approximate pH from a range of colours.'],
  ['pH', 'pH meter', 'An instrument that gives a more precise numerical pH than an indicator.'],
  ['Definitions', 'Arrhenius acid', 'A substance that produces H⁺ ions in water.'],
  ['Definitions', 'Arrhenius base', 'A substance that produces OH⁻ ions in water.'],
  ['Definitions', 'Brønsted–Lowry acid', 'A proton donor.'],
  ['Definitions', 'Brønsted–Lowry base', 'A proton acceptor.'],
  ['Definitions', 'Alkali', 'A base that dissolves in water.'],
  ['Definitions', 'Strong acid', 'An acid that ionises almost completely in water.'],
  ['Reactions', 'Neutralisation', 'A reaction in which an acid and a base form a salt and water.'],
  ['Reactions', 'Salt', 'An ionic compound formed when the hydrogen ion of an acid is replaced by a positive ion.'],
  ['Titration', 'Titre', 'The volume delivered from a burette during a titration.'],
  ['Titration', 'Equivalence point', 'The point where reactants are present in the exact mole ratio from the equation.'],
  ['Titration', 'Endpoint', 'The observed colour change used to stop a titration.'],
  ['Solutions', 'Solute', 'A substance dissolved in a solvent.'],
  ['Solutions', 'Solvent', 'The liquid that dissolves a solute.'],
  ['Solutions', 'Precipitate', 'An insoluble solid produced when solutions react.'],
  ['Solutions', 'Crystallisation', 'Producing crystals by concentrating a solution and allowing it to cool.']
];

let chemistryCardIndex = 0;
let chemistryCardFlipped = false;
const chemistryFlashcard = document.getElementById('chem-flashcard');

function renderChemistryCard() {
  const [topic, front, back] = chemistryCards[chemistryCardIndex];
  document.getElementById('chem-card-topic').textContent = topic;
  document.getElementById('chem-card-label').textContent = chemistryCardFlipped ? 'DEFINITION' : 'TERM';
  document.getElementById('chem-card-front').textContent = front;
  document.getElementById('chem-card-back').textContent = back;
  document.getElementById('chem-card-count').textContent = `${chemistryCardIndex + 1} / ${chemistryCards.length}`;
  chemistryFlashcard.classList.toggle('flipped', chemistryCardFlipped);
}

chemistryFlashcard.addEventListener('click', () => { chemistryCardFlipped = !chemistryCardFlipped; renderChemistryCard(); });
document.getElementById('chem-prev-card').addEventListener('click', () => {
  chemistryCardIndex = (chemistryCardIndex - 1 + chemistryCards.length) % chemistryCards.length;
  chemistryCardFlipped = false;
  renderChemistryCard();
});
document.getElementById('chem-next-card').addEventListener('click', () => {
  chemistryCardIndex = (chemistryCardIndex + 1) % chemistryCards.length;
  chemistryCardFlipped = false;
  renderChemistryCard();
});
renderChemistryCard();

const chemistryQuestions = [
  {
    topic: 'pH',
    prompt: 'Which description fits a solution with pH 3?',
    options: ['Acidic', 'Neutral', 'Alkaline', 'It must be pure water'],
    answer: 0,
    explain: 'A pH below 7 is acidic. A lower pH indicates greater acidity.'
  },
  {
    topic: 'Indicators',
    prompt: 'Why is universal indicator more useful than litmus for estimating pH?',
    options: ['It gives a range of colours linked to pH', 'It always gives an exact decimal value', 'It reacts only with strong acids', 'It measures concentration directly'],
    answer: 0,
    explain: 'Universal indicator estimates pH from its colour. Litmus mainly distinguishes acids from alkalis.'
  },
  {
    topic: 'Definitions',
    prompt: 'What does an Arrhenius base produce in water?',
    options: ['H⁺ ions', 'OH⁻ ions', 'CO₂ molecules', 'Hydrogen gas'],
    answer: 1,
    explain: 'In the Arrhenius model, a base produces hydroxide ions in aqueous solution.'
  },
  {
    topic: 'Definitions',
    prompt: 'Why is ammonia a Brønsted–Lowry base?',
    options: ['It accepts a proton', 'It donates a proton', 'It contains a metal', 'It always contains OH⁻ in its formula'],
    answer: 0,
    explain: 'Ammonia accepts H⁺ to form NH₄⁺.'
  },
  {
    topic: 'Salt names',
    prompt: 'Which salt type forms from sulfuric acid?',
    options: ['Chloride', 'Nitrate', 'Sulfate', 'Phosphate'],
    answer: 2,
    explain: 'Sulfuric acid forms sulfate salts.'
  },
  {
    topic: 'Reactions',
    prompt: 'What are the products of an acid reacting with a metal carbonate?',
    options: ['Salt and hydrogen only', 'Salt, water and carbon dioxide', 'Salt and oxygen', 'Water and hydrogen only'],
    answer: 1,
    explain: 'An acid–carbonate reaction produces a salt, water and carbon dioxide.'
  },
  {
    topic: 'Equations',
    prompt: 'Which equation is balanced?',
    options: ['HCl + Ca(OH)₂ → CaCl₂ + H₂O', '2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O', 'HCl + Ca(OH)₂ → CaCl + 2H₂O', '2HCl + CaOH → CaCl₂ + H₂O'],
    answer: 1,
    explain: 'The coefficients 2:1:1:2 give equal numbers of every atom on both sides.'
  },
  {
    topic: 'Titration',
    prompt: 'What is the endpoint of a titration?',
    options: ['The indicator colour change used to stop', 'The moment the burette is filled', 'The boiling point of the solution', 'The mass of dry salt'],
    answer: 0,
    explain: 'The endpoint is the observed physical change. The equivalence point describes the exact chemical ratio.'
  },
  {
    topic: 'Titration',
    prompt: 'Which apparatus transfers an accurate fixed volume into the conical flask?',
    options: ['Volumetric pipette', 'Evaporating basin', 'Filter funnel', 'Test tube'],
    answer: 0,
    explain: 'A volumetric pipette delivers a fixed volume accurately.'
  },
  {
    topic: 'Calculation',
    prompt: '25.0 cm³ of 0.100 mol dm⁻³ HCl reacts 1:1 with 0.200 mol dm⁻³ NaOH. What NaOH volume is needed?',
    options: ['6.25 cm³', '12.5 cm³', '25.0 cm³', '50.0 cm³'],
    answer: 1,
    explain: 'The acid contains 0.00250 mol. The same moles of 0.200 mol dm⁻³ NaOH occupy 0.0125 dm³, or 12.5 cm³.'
  },
  {
    topic: 'Salt preparation',
    prompt: 'Why is a salt-forming titration repeated without indicator?',
    options: ['To avoid contaminating the salt crystals', 'To make the acid stronger', 'To produce carbon dioxide', 'To change the mole ratio'],
    answer: 0,
    explain: 'The first run finds the exact reacting volumes. Repeating without indicator keeps the product pure.'
  },
  {
    topic: 'Salt preparation',
    prompt: 'Which method prepares an insoluble salt from two soluble salt solutions?',
    options: ['Precipitation', 'Simple distillation', 'Chromatography', 'Electrolysis'],
    answer: 0,
    explain: 'The solutions react to form an insoluble precipitate, which is filtered, washed and dried.'
  },
  {
    topic: 'Salt preparation',
    prompt: 'Why is excess insoluble base added to an acid?',
    options: ['To make sure all acid reacts', 'To leave unreacted acid in the filtrate', 'To prevent salt formation', 'To measure pH exactly'],
    answer: 0,
    explain: 'Excess solid ensures complete neutralisation. The unreacted solid can then be removed by filtration.'
  },
  {
    topic: 'Crystallisation',
    prompt: 'Why should the salt solution not be heated completely dry?',
    options: ['Cooling a concentrated solution allows crystals to form', 'The salt must remain a gas', 'Water is a catalyst', 'Drying changes a chloride into a nitrate'],
    answer: 0,
    explain: 'The solution is concentrated and then cooled so crystals form. Heating to dryness can damage some salts and gives poorer crystals.'
  }
];

const chemistryQuizStart = document.getElementById('chem-quiz-start');
const chemistryQuizShell = document.getElementById('chem-quiz-shell');
const chemistryResults = document.getElementById('chem-results');
const chemistryQuestionCard = document.getElementById('chem-question-card');
const chemistryFeedback = document.getElementById('chem-feedback');
const chemistryNextButton = document.getElementById('next-chem-question');
let activeChemistryQuestions = [];
let chemistryQuestionIndex = 0;
let chemistryScore = 0;
let chemistryChecked = false;

function startChemistryQuiz() {
  activeChemistryQuestions = shuffle(chemistryQuestions).slice(0, 10);
  chemistryQuestionIndex = 0;
  chemistryScore = 0;
  chemistryQuizStart.classList.add('hidden');
  chemistryResults.classList.add('hidden');
  chemistryQuizShell.classList.remove('hidden');
  renderChemistryQuestion();
}

function renderChemistryQuestion() {
  const question = activeChemistryQuestions[chemistryQuestionIndex];
  chemistryChecked = false;
  document.getElementById('chem-question-number').textContent = `Question ${chemistryQuestionIndex + 1} of ${activeChemistryQuestions.length}`;
  document.getElementById('chem-question-topic').textContent = question.topic;
  document.getElementById('chem-progress-bar').style.width = `${(chemistryQuestionIndex / activeChemistryQuestions.length) * 100}%`;
  chemistryQuestionCard.innerHTML = `<h2>${question.prompt}</h2><div class="option-list">${question.options.map((option, index) => `<label><input type="radio" name="chem-answer" value="${index}"><span>${option}</span></label>`).join('')}</div>`;
  chemistryFeedback.className = 'chem-feedback hidden';
  chemistryFeedback.textContent = '';
  chemistryNextButton.textContent = 'Check answer';
}

function checkChemistryAnswer() {
  const question = activeChemistryQuestions[chemistryQuestionIndex];
  const selected = chemistryQuestionCard.querySelector('input:checked');
  if (!selected) {
    chemistryFeedback.className = 'chem-feedback incorrect';
    chemistryFeedback.textContent = 'Choose an answer before checking.';
    return;
  }
  chemistryChecked = true;
  const isCorrect = Number(selected.value) === question.answer;
  if (isCorrect) chemistryScore += 1;
  chemistryQuestionCard.querySelectorAll('input').forEach(input => { input.disabled = true; });
  chemistryFeedback.className = `chem-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  chemistryFeedback.innerHTML = `<strong>${isCorrect ? 'Correct.' : `Answer: ${question.options[question.answer]}`}</strong> ${question.explain}`;
  chemistryNextButton.textContent = chemistryQuestionIndex === activeChemistryQuestions.length - 1 ? 'See results' : 'Next question';
}

function finishChemistryQuiz() {
  chemistryQuizShell.classList.add('hidden');
  chemistryResults.classList.remove('hidden');
  chemistryResults.innerHTML = `<div class="score-circle"><strong>${chemistryScore}/${activeChemistryQuestions.length}</strong><span>score</span></div><h2>${chemistryScore >= 8 ? 'Strong recall' : 'Review and try again'}</h2><p>Use the chemistry notes to correct any uncertain definitions, equations or practical steps.</p><div class="quiz-actions"><button class="secondary-action" id="retry-chem-quiz">Try another set</button><button class="primary-action" id="review-chem-notes">Review chemistry notes</button></div>`;
  document.getElementById('retry-chem-quiz').addEventListener('click', startChemistryQuiz);
  document.getElementById('review-chem-notes').addEventListener('click', () => showView('chem-notes'));
}

function resetChemistryQuiz() {
  chemistryQuizShell.classList.add('hidden');
  chemistryResults.classList.add('hidden');
  chemistryQuizStart.classList.remove('hidden');
}

document.getElementById('start-chem-quiz').addEventListener('click', startChemistryQuiz);
chemistryNextButton.addEventListener('click', () => {
  if (!chemistryChecked) checkChemistryAnswer();
  else if (chemistryQuestionIndex === activeChemistryQuestions.length - 1) finishChemistryQuiz();
  else { chemistryQuestionIndex += 1; renderChemistryQuestion(); }
});
document.getElementById('quit-chem-quiz').addEventListener('click', resetChemistryQuiz);

const navButtons = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');
const jumpButtons = document.querySelectorAll('[data-jump]');

function showSection(id) {
  screens.forEach(screen => screen.classList.toggle('active-screen', screen.id === id));
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.section === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

jumpButtons.forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.jump));
});

const partData = {
  clavijero: {
    title: 'Clavijero',
    text: 'Es la parte superior donde están las clavijas. Sirve para tensar o aflojar las cuerdas y así afinar la guitarra. Si algo suena raro, antes de culpar al universo, revisa aquí.',
    tip: 'Tip: gira poco a poco. Los cambios bruscos pueden romper una cuerda.'
  },
  mastil: {
    title: 'Mástil',
    text: 'Es la parte larga donde se apoya la mano izquierda. Sobre él están el diapasón, los trastes y las cuerdas.',
    tip: 'Tip: no aprietes como si estuvieras castigando la guitarra. Presiona lo justo para que suene limpio.'
  },
  trastes: {
    title: 'Trastes',
    text: 'Son las barritas metálicas que dividen el mástil. Cada espacio cambia la nota por semitonos.',
    tip: 'Tip: presiona cerca del traste siguiente, no justo encima de la barrita.'
  },
  cuerdas: {
    title: 'Cuerdas',
    text: 'Son la fuente directa del sonido. En afinación estándar, de la más grave a la más aguda: Mi, La, Re, Sol, Si, Mi.',
    tip: 'Tip: aprende sus nombres desde el primer día. Te ahorra confusión, drama y tutoriales eternos.'
  },
  caja: {
    title: 'Caja o cuerpo',
    text: 'En guitarras acústicas y clásicas, la caja amplifica el sonido. En eléctricas, el cuerpo sostiene las pastillas, controles y puente.',
    tip: 'Tip: evita golpes y cambios extremos de temperatura.'
  },
  boca: {
    title: 'Boca',
    text: 'Es el orificio de la caja en las guitarras acústicas o clásicas. Ayuda a proyectar el sonido hacia afuera.',
    tip: 'Tip: no metas objetos ahí. Parece obvio, pero la humanidad siempre encuentra formas nuevas de decepcionar.'
  },
  puente: {
    title: 'Puente',
    text: 'Sujeta las cuerdas al cuerpo de la guitarra y transmite su vibración. Es clave para estabilidad y sonido.',
    tip: 'Tip: si se despega o se levanta, no lo fuerces. Eso ya pide revisión técnica.'
  }
};

const partInfo = document.getElementById('partInfo');
const hotspots = document.querySelectorAll('.hotspot');

hotspots.forEach(hotspot => {
  hotspot.addEventListener('click', () => {
    const data = partData[hotspot.dataset.part];
    hotspots.forEach(item => item.classList.remove('active'));
    hotspot.classList.add('active');
    partInfo.innerHTML = `
      <p class="eyebrow">Parte seleccionada</p>
      <h3>${data.title}</h3>
      <p>${data.text}</p>
      <p><strong>${data.tip}</strong></p>
    `;
  });
});

const steps = [
  {
    title: 'Postura cómoda y estable',
    text: 'Siéntate con la espalda tranquila, hombros sueltos y la guitarra apoyada sin tensión. La idea es tocar, no convertirte en estatua barroca.',
    bullets: ['La guitarra debe quedar cerca del cuerpo.', 'Evita subir los hombros.', 'La muñeca izquierda debe sentirse libre, no aplastada.']
  },
  {
    title: 'Afinar antes de tocar',
    text: 'Una guitarra desafinada puede hacer que practiques bien y aun así suenes raro. Eso es maltrato emocional en formato cuerda.',
    bullets: ['Usa afinador físico o app.', 'Afinación estándar: Mi, La, Re, Sol, Si, Mi.', 'Afina despacio y escucha el cambio.']
  },
  {
    title: 'Mano izquierda: presión limpia',
    text: 'La mano izquierda pisa las notas. El objetivo no es fuerza, es ubicación.',
    bullets: ['Presiona con la punta de los dedos.', 'Ubica el dedo cerca del traste.', 'Evita tocar otras cuerdas sin querer.']
  },
  {
    title: 'Mano derecha: sonido y ritmo',
    text: 'La mano derecha pulsa, rasguea o arpegia. Es la encargada de que la música respire.',
    bullets: ['Empieza lento.', 'Alterna dedos o usa plumilla según el estilo.', 'Mantén el pulso antes de buscar velocidad.']
  },
  {
    title: 'Practicar poco, pero bien',
    text: 'Diez minutos diarios bien hechos valen más que dos horas una vez al mes llenas de sufrimiento teatral.',
    bullets: ['Repite lento.', 'Escucha si cada cuerda suena clara.', 'Cierra con algo que disfrutes tocar.']
  }
];

const stepButtons = document.querySelectorAll('.step');
const stepContent = document.getElementById('stepContent');

function renderStep(index) {
  const step = steps[index];
  stepButtons.forEach(btn => btn.classList.toggle('active', Number(btn.dataset.step) === index));
  stepContent.innerHTML = `
    <h3>${step.title}</h3>
    <p>${step.text}</p>
    <ul>${step.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
}

stepButtons.forEach(btn => {
  btn.addEventListener('click', () => renderStep(Number(btn.dataset.step)));
});

renderStep(0);

// El rendering de acordes interactivo ha sido removido de esta sección ya que es explicativa.

const quizQuestions = [
  {
    question: '¿Cuál es la afinación estándar de la guitarra de grave a agudo?',
    options: ['Mi, La, Re, Sol, Si, Mi', 'La, Si, Do, Re, Mi, Fa', 'Re, Sol, Do, Fa, La, Re', 'Mi, Si, Sol, Re, La, Mi'],
    answer: 0,
    feedback: 'Correcto: Mi, La, Re, Sol, Si, Mi. Las notas de la sexta a la primera cuerda.'
  },
  {
    question: '¿Para qué sirven principalmente las clavijas?',
    options: ['Para decorar', 'Para afinar las cuerdas', 'Para amplificar el sonido', 'Para cambiar de acorde automáticamente'],
    answer: 1,
    feedback: 'Eso es: las clavijas tensan o aflojan las cuerdas para afinar.'
  },
  {
    question: '¿Qué tipo de guitarra suele tener cuerdas de nylon?',
    options: ['Eléctrica', 'Clásica', 'Bajo eléctrico', 'Acústica de cuerdas metálicas'],
    answer: 1,
    feedback: 'Correcto: la guitarra clásica normalmente usa nylon.'
  },
  {
    question: '¿Qué hacen los trastes?',
    options: ['Dividen el mástil en alturas específicas', 'Guardan el sonido', 'Sostienen la correa', 'Cambian el color de la guitarra'],
    answer: 0,
    feedback: 'Exacto: los trastes ayudan a ubicar notas por semitonos.'
  },
  {
    question: '¿Qué conviene hacer antes de practicar?',
    options: ['Tocar rapidísimo', 'Afinar y revisar postura', 'Comprar otra guitarra', 'Culpar a los dedos'],
    answer: 1,
    feedback: 'Bien: afinación y postura primero. El drama después, si queda tiempo.'
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;
const quizCard = document.getElementById('quizCard');

function renderQuiz() {
  const item = quizQuestions[currentQuestion];
  answered = false;
  quizCard.innerHTML = `
    <div class="quiz-progress">Pregunta ${currentQuestion + 1} de ${quizQuestions.length}</div>
    <div class="quiz-question">${item.question}</div>
    <div class="quiz-options">
      ${item.options.map((option, index) => `<button class="quiz-option" data-index="${index}">${option}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quizFeedback"></div>
  `;

  document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => handleAnswer(Number(option.dataset.index)));
  });
}

function handleAnswer(selected) {
  if (answered) return;
  answered = true;
  const item = quizQuestions[currentQuestion];
  const options = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');

  options.forEach((option, index) => {
    if (index === item.answer) option.classList.add('correct');
    if (index === selected && selected !== item.answer) option.classList.add('wrong');
  });

  if (selected === item.answer) score += 1;

  const isLast = currentQuestion === quizQuestions.length - 1;
  feedback.innerHTML = `
    ${item.feedback}
    <br><br>
    <button class="primary-action" id="nextQuestion">${isLast ? 'Ver resultado' : 'Siguiente pregunta'}</button>
  `;

  document.getElementById('nextQuestion').addEventListener('click', () => {
    if (isLast) renderResult();
    else {
      currentQuestion += 1;
      renderQuiz();
    }
  });
}

function renderResult() {
  const message = score >= 4
    ? 'Muy bien. Ya puedes mirar una guitarra sin que parezca una tabla con cables.'
    : score >= 2
      ? 'Vas bien. Falta repasar, pero tampoco estamos ante una tragedia griega.'
      : 'Toca repasar. La guitarra tendrá paciencia; yo haré el intento.';

  quizCard.innerHTML = `
    <div class="quiz-progress">Resultado</div>
    <div class="quiz-question">${score} / ${quizQuestions.length}</div>
    <p class="quiz-feedback">${message}</p>
    <button class="primary-action" id="restartQuiz">Repetir quiz</button>
  `;

  document.getElementById('restartQuiz').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    renderQuiz();
  });
}

renderQuiz();

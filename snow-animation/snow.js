function renderSnowflakesContainer() {
  const snowflakesContainer = document.createElement('div');
  snowflakesContainer.id = 'snowflakes-container';

  document.body.appendChild(snowflakesContainer);

  return snowflakesContainer;
}

const snowflakeImages = [
  'images/snowflakes/flake.png',
  'images/snowflakes/flake2.png',
  'images/snowflakes/flake3.png',
];

function renderSnowflake(snowflakesContainer) {
  const snowflakeContainer = document.createElement('div');
  snowflakeContainer.classList.add('snowflake-container');

  snowflakeContainer.style.left = `${Math.random() * 100}%`;
  snowflakeContainer.style.transform = `scale(${Math.random()})`;

  const img = document.createElement('img');
  img.src = snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];

  snowflakeContainer.appendChild(img);

  snowflakesContainer.appendChild(snowflakeContainer);

  setTimeout(renderSnowflake, 500, snowflakesContainer);
}

function renderSledge(snowflakesContainer) {
  const sledgeContainer = document.createElement('div');
  sledgeContainer.id = 'sledge-container';

  const sledgeImg = document.createElement('img');
  sledgeImg.src = 'images/santasledge/sledge.png';

  sledgeContainer.appendChild(sledgeImg);

  for (let i = 0; i < 3; i++) {
    const reindeerContainer = document.createElement('div');
    reindeerContainer.classList.add('reindeer-container');

    const reindeerImg = document.createElement('img');
    reindeerImg.src = 'images/santasledge/reindeer.png';

    reindeerContainer.appendChild(reindeerImg);
    sledgeContainer.appendChild(reindeerContainer);
  }

  snowflakesContainer.appendChild(sledgeContainer);
}

function addAudioElement(snowflakesContainer) {
  const animationAudio = document.createElement('audio');
  animationAudio.src = 'sounds/jinglebells.mp3';
  animationAudio.play();

  snowflakesContainer.appendChild(animationAudio);
}

function addStartButton(snowflakesContainer) {
  const button = document.createElement('button');
  button.innerText = 'Let it snow!';
  snowflakesContainer.appendChild(button);
  return button;
}

const snowflakesContainer = renderSnowflakesContainer();
const button = addStartButton(snowflakesContainer);

button.addEventListener(
  'click',
  () => {
    renderSledge(snowflakesContainer);
    renderSnowflake(snowflakesContainer);
    addAudioElement(snowflakesContainer);

    let lastPosition = 0;
    let sledgeDimensions;

    document.addEventListener('mousemove', (e) => {
      const sledgeContainer = document.querySelector('#sledge-container');

      sledgeDimensions =
          sledgeDimensions || sledgeContainer.getBoundingClientRect();

      if (lastPosition < e.pageX) {
        sledgeContainer.classList.add('flipped-sledge');
        sledgeContainer.style.left = `${e.pageX - sledgeDimensions.width}px`;
        sledgeContainer.style.top = `${e.pageY}px`;
      }

      if (lastPosition > e.pageX) {
        sledgeContainer.classList.remove('flipped-sledge');
        sledgeContainer.style.left = `${e.pageX}px`;
        sledgeContainer.style.top = `${e.pageY}px`;
      }

      lastPosition = e.pageX;
    });

    button.remove();
  },
  { once: true }
);

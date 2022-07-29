const menuHamburguer = document.querySelector('.burger-menu');
const myNav = document.querySelector('.organizer');
const myBody = document.querySelector('body');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('active');
  myNav.classList.toggle('active');
  myBody.classList.toggle('active');
});

document.querySelectorAll('.link-nav').forEach((n) => n.addEventListener('click', () => {
  menuHamburguer.classList.remove('active');
  myNav.classList.remove('active');
}));

const myCardsContent = [
  {
    myCardId: '1',
    profilePicture: 'images/portraita-1.png',
    speakerName: 'Samantha Corndwell',
    speakerTitle: 'Professor and master of ArTech and film-making',
    speakerDescription: 'Focusing on a collaborative approach in a networked environment, she created the concept of "Shootverse" that consist in create a photo of the universe in 360 grades and make it looks like a planet',
  },
  {
    myCardId: '2',
    profilePicture: 'images/portraita-2.png',
    speakerName: 'Joseph Locke',
    speakerTitle: 'Photographer, Visual Technologies Developer',
    speakerDescription: 'Joseph Locke was born in Lousiana and in his early 20s discovered how to mix 2 passions, astronomy and technology that take him to fully investigate about advanced camera prototypes and years later created the first hand camera that takes "Super zoom photos"',
  },
  {
    myCardId: 'hide',
    profilePicture: 'images/portraita-3.png',
    speakerName: 'Jessica Sophisphere',
    speakerTitle: 'Professor of Universe Photography',
    speakerDescription: 'Focusing on a collaborative approach in a networked environment, she created the concept of "Shootverse" that consist in create a photo of the universe in 360 grades and make it looks like a planet',
  },
  {
    myCardId: 'hide',
    profilePicture: 'images/portraita-4.png',
    speakerName: 'Melanie Morrocco',
    speakerTitle: 'Professor and master of ArTech and film-making',
    speakerDescription: 'Focusing on a collaborative approach in a networked environment, she created the concept of "Shootverse" that consist in create a photo of the universe in 360 grades and make it looks like a planet',
  },
  {
    myCardId: 'hide',
    profilePicture: 'images/portraita-5.png',
    speakerName: 'Ryan Harrington',
    speakerTitle: 'Professor and master of ArTech and film-making',
    speakerDescription: 'Focusing on a collaborative approach in a networked environment, she created the concept of "Shootverse" that consist in create a photo of the universe in 360 grades and make it looks like a planet',
  },
  {
    myCardId: 'hide',
    profilePicture: 'images/portraita-6.png',
    speakerName: 'Luz Martinez',
    speakerTitle: 'Professor and master of ArTech and film-making',
    speakerDescription: 'Focusing on a collaborative approach in a networked environment, she created the concept of "Shootverse" that consist in create a photo of the universe in 360 grades and make it looks like a planet',
  },

];
const myCardsContainerParent = document.querySelector('.speakers-card-container');
const dynamicSpeakersCards = () => {
  let speakersContainer = '';

  for (let i = 0; i < myCardsContent.length; i += 1) {
    const speakersCard = `
    <div class="card-speaker ${myCardsContent[i].myCardId}">
    <img src="${myCardsContent[i].profilePicture}" alt="" class="speaker-profile">
    <article class="speaker-info-container">
        <h3 class="speaker-name">${myCardsContent[i].speakerName}</h3>
        <p class="speaker-title">${myCardsContent[i].speakerTitle}</p>
        <hr></hr>
        <p class="speaker-info">${myCardsContent[i].speakerDescription}</p>
    </article>
   </div>`;
    speakersContainer += speakersCard;
  }
  myCardsContainerParent.innerHTML = speakersContainer;
};
dynamicSpeakersCards();

const readMoreButton = document.querySelector('.more-button');

readMoreButton.addEventListener('click', () => {
  myCardsContainerParent.classList.toggle('morebtn');
  if (readMoreButton === 'SHOW MORE') {
    readMoreButton.innerText = 'SHOW MORE';
  } else {
    readMoreButton.innerText = 'SHOW LESS';
  }
});

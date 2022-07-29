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
    speakerDescription: 'Focusing on a collaborative approach in a networked environment, she created the concept of "Shootverse" that consist in create a photo of the universe in 360 grades and converts it into a fish-eye effect that slowly take the appereance of a planet.',
  },
  {
    myCardId: '2',
    profilePicture: 'images/portraita-2.png',
    speakerName: 'Joseph Locke',
    speakerTitle: 'Photographer, Visual Technologies Developer',
    speakerDescription: 'Joseph Locke discovered how to mix 2 passions, astronomy and technology that take him to fully investigate about advanced camera prototypes and years later created the first hand camera that takes "Super zoom photos."',
  },
  {
    myCardId: 'hide',
    profilePicture: 'images/portraita-3.png',
    speakerName: 'Jessica Sophisphere',
    speakerTitle: 'Professor of Universe Photography',
    speakerDescription: 'Landscape Photographer in Microsoft, and actively participate as a spacial photographer in NASA.',
  },
  {
    myCardId: 'hide',
    profilePicture: 'images/portraita-4.png',
    speakerName: 'Michael Mauritius',
    speakerTitle: 'CEO of ArtScope, Astronomer and Arts Bachelor',
    speakerDescription: 'Founder of the first ArTech career in the world. Featured contributor of visual content with Disney, Huawei and Pinterest. DELL and IBM ally for improving modern skills, develop and test technology.',
  },
  {
    myCardId: 'hide',
    profilePicture: 'images/portraita-5.png',
    speakerName: 'Ryan Harrington',
    speakerTitle: 'Communication and Journalism Bachelor',
    speakerDescription: 'Known for showcase the last advances in Technology into online press with clever-crafted articles. Also Public Relationships Consultant in SpaceX and Google Marketing Manager.',
  },
  {
    myCardId: 'hide',
    profilePicture: 'images/portraita-6.png',
    speakerName: 'Luz Martinez',
    speakerTitle: 'Professor Visual Artificial Intelligence',
    speakerDescription: 'Worked as a Photography Artificial Intelligence Engineer. Known for Create the tinest photography telescope that take shoot of one star per minute in 4k quality and store the information in the cloud.',
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

const btnshow = document.getElementById('btnshow');

btnshow.addEventListener('click', () => {
  myCardsContainerParent.classList.toggle('morebtn');
  if (btnshow.innerHTML === 'SHOW MORE') {
    btnshow.innerHTML = 'SHOW LESS';
  } else if (btnshow.innerHTML === 'SHOW LESS') {
    btnshow.innerHTML = 'SHOW MORE';
  }
});

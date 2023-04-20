const dh = document.getElementById('dh');
const hamb = document.getElementById('hamb');
const close = document.getElementById('close');
const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

hamb.addEventListener('click', () => {
  dh.classList.toggle('open');
});
portfolio.addEventListener('click', () => {
  dh.classList.toggle('open');
});
about.addEventListener('click', () => {
  dh.classList.toggle('open');
});
contact.addEventListener('click', () => {
  dh.classList.toggle('open');
});
close.addEventListener('click', () => {
  dh.classList.toggle('open');
});

const desktop = document.querySelector('.desktop-menu');
const links = `
        <li id="portfolio">
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li id="about">
          <a href="#About">About</a>
        </li>
        <li id="contact">
          <a href="#Contact">Contact</a>
        </li>
        <li class="close" id="close">&times;</li>
`;
const ul = document.createElement('ul');
ul.innerHTML = links;
desktop.appendChild(ul);

const storeData = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: './image/Snapshoot Portfolio (1).svg',
    technologies: ['html', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi-post',
    description:
      'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: './image/Snapshoot Portfolio (2).svg',
    technologies: ['html', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi-post',
    description:
      'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: './image/Snapshoot Portfolio (3).svg',
    technologies: ['html', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: './image/Snapshoot Portfolio (4).svg',
    technologies: ['html', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
];

const description = document.querySelectorAll('.work-paragraph');
for (let i = 0; i < description.length; i += 2) {
  description[i].innerHTML = storeData[i].description;
  description[i + 1].innerHTML = storeData[i + 1].description;
}

// ..............popups...................

const popups = document.querySelector('.popups');
const popupProjectTitle = document.querySelector('.popup-project-title');
// const popupProjectDescription = document.querySelector('description');

const disappearButton = document.querySelector(
  '.popups-project-disapper-button',
);

disappearButton.addEventListener('click', () => {
  popups.style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
  // eslint-disable-next-line no-unused-vars, no-multi-assign
  const popup = (document.querySelector('.popup-chair').style.display = 'none');
});

const popupsBootstrapLanguageDiv = document.querySelector(
  '.bootstrap-language',
);
const popupsRubyLanguageDiv = document.querySelector('.ruby-language');
const popupsProjectDesktop = document.querySelector(
  '.popups-project-p-desktop',
);
const popupsProjectMobile = document.querySelector('.popups-project-p-mobile');
const seeliveaTag = document.querySelector('.see-live-aTag');

const btnOne = document.querySelector('.btn-one');

btnOne.addEventListener('click', () => {
  document.querySelector('.popup-chair').style.display = 'flex';
  document.querySelector('.popups').style.display = 'flex';
  document.querySelector('.popups-endline-mobile').style.display = 'none';
  document.querySelector('#popups-project-img').src = storeData[0].imagesrc;
  document.querySelector('body').style.overflow = 'hidden';
  popupProjectTitle.innerHTML = storeData[0].name;
  popupsProjectDesktop.innerHTML = storeData[0].aboutProjectDesktop;
  popupsProjectMobile.innerHTML = storeData[0].aboutProjectMobile;
  seeliveaTag.href = storeData[0].href;
  popupsBootstrapLanguageDiv.classList.remove('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.remove('ruby-language-disappear');
});

const btnTwo = document.querySelector('.btn-two');

btnTwo.addEventListener('click', () => {
  document.querySelector('.popup-chair').style.display = 'flex';
  document.querySelector('.popups').style.display = 'flex';
  document.querySelector('.popups-endline-mobile').style.display = 'none';
  document.querySelector('#popups-project-img').src = storeData[1].imagesrc;
  document.querySelector('body').style.overflow = 'hidden';
  popupProjectTitle.innerHTML = storeData[1].name;
  popupsProjectDesktop.innerHTML = storeData[1].aboutProjectDesktop;
  popupsProjectMobile.innerHTML = storeData[1].aboutProjectMobile;
  seeliveaTag.href = storeData[1].href;
  popupsBootstrapLanguageDiv.classList.remove('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.remove('ruby-language-disappear');
});
const btnThree = document.querySelector('.btn-three');

btnThree.addEventListener('click', () => {
  document.querySelector('.popup-chair').style.display = 'flex';
  document.querySelector('.popups').style.display = 'flex';
  document.querySelector('.popups-endline-mobile').style.display = 'none';
  document.querySelector('#popups-project-img').src = storeData[2].imagesrc;
  document.querySelector('body').style.overflow = 'hidden';
  popupProjectTitle.innerHTML = storeData[2].name;
  popupsProjectDesktop.innerHTML = storeData[2].aboutProjectDesktop;
  popupsProjectMobile.innerHTML = storeData[2].aboutProjectMobile;
  seeliveaTag.href = storeData[2].href;
  popupsBootstrapLanguageDiv.classList.remove('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.remove('ruby-language-disappear');
});
const btnFour = document.querySelector('.btn-four');

btnFour.addEventListener('click', () => {
  document.querySelector('.popup-chair').style.display = 'flex';
  document.querySelector('.popups').style.display = 'flex';
  document.querySelector('.popups-endline-mobile').style.display = 'none';
  document.querySelector('#popups-project-img').src = storeData[3].imagesrc;
  document.querySelector('body').style.overflow = 'hidden';
  popupProjectTitle.innerHTML = storeData[3].name;
  popupsProjectDesktop.innerHTML = storeData[3].aboutProjectDesktop;
  popupsProjectMobile.innerHTML = storeData[3].aboutProjectMobile;
  seeliveaTag.href = storeData[3].href;
  popupsBootstrapLanguageDiv.classList.remove('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.remove('ruby-language-disappear');
});


const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  const validerror = document.getElementById('validerror');
  const email = form.elements[1].value;
  if (email.toLowerCase() !== email) {
    validerror.style.display = 'block';
    e.preventDefault();
  }
});
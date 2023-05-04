import {
  buttonEdit,
  buttonAdd,
  formElementEdit,
  nameInput,
  jobInput,
  profileName,
  profileAbout,
  popupEdit,
  popupAdd,
  element,
  formElementAdd,
  placeInput,
  linkInput,
  imgPopup,
  imageFromPopup,
  textFromPopup,
  closeButtons,
  popupContainers,
} from './Constans.js';
import { validationSettings, FormValidation } from './FormValidator.js';
import { Card } from './Card.js';
export { createImgPopup };


// Массив карточек по умолчанию.
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//функция открытия попапа.
function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

//функция закрытия попапа.
function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

// Функция закрытия всех попапов по крестику.
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Функции для закрытия попапов по оверлею по Esc.
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Функции для закрытия попапов по оверлею.
popupContainers.forEach((item) => {
  const popup = item.closest('.popup');
  popup.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popup);
    }
  });
});

// Функция создания попапа с картинками на весь экран.
function createImgPopup(image) {
  imageFromPopup.src = image.src;
  textFromPopup.textContent = image.alt;
  imageFromPopup.alt = image.alt;
  openPopup(imgPopup);
};

// Функция изменения Имени и Профессии.
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
};

// Слушатель открытия формы редактирования профиля.
buttonEdit.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  validFormEdit.removeErrors();
  openPopup(popupEdit);
  validFormEdit.disabledButtonSubmit();
});

// Слушатель открытия попапа добавления карточки.
buttonAdd.addEventListener('click', function () {
  formElementAdd.reset();
  validFormAdd.removeErrors();
  openPopup(popupAdd);
  validFormAdd.disabledButtonSubmit();
});

// Слушатель изменения Имени и Профессии.
formElementEdit.addEventListener('submit', handleFormEditSubmit);

// Валидация форм по классу.
const validFormEdit = new FormValidation(validationSettings, formElementEdit);
validFormEdit.enableValidation();
const validFormAdd = new FormValidation(validationSettings, formElementAdd);
validFormAdd.enableValidation();

function creatingCard(item) {
  const card = new Card(item, '#element__grid');
  const cardElement = card.createCard();
  return cardElement;
}

// Добавление карточек из массива.
initialCards.forEach(item => {
  element.append(creatingCard(item));
});

// Добавление карточек по инпутам.
formElementAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  element.prepend(creatingCard({ name: placeInput.value, link: linkInput.value }));
  closePopup(popupAdd);
});
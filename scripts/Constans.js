const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formElementEdit = document.querySelector('#form-edit');
const nameInput = formElementEdit.querySelector('#name-input');
const jobInput = formElementEdit.querySelector('#job-input');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const buttonCloseEdit = document.querySelector('.popup__close_type_edit-profile');
const buttonCloseAdd = document.querySelector('.popup__close_type_add-card');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const popupAdd = document.querySelector('.popup_type_add-card');
const submitEdit = document.querySelector('#submit__edit');
const submitAdd = document.querySelector('#submit__add');
const cardTemplate = document.querySelector('#element__grid').content;
const element = document.querySelector('#el__card');
const elementGrid = cardTemplate.querySelector('.element__grid');
const buttonBasket = elementGrid.querySelector('#element__basket');
const image = elementGrid.querySelector('.element__image');
const formElementAdd = document.querySelector('#form-add');
const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#link-input');
const imgPopup = document.querySelector('.popup_type_img-fullscreen');
const imageFromPopup = document.querySelector('.popup__image');
const textFromPopup = document.querySelector('.popup__text');
const buttonCloseImage = document.querySelector('.popup__close_type_img-fullscreen');
const closeButtons = document.querySelectorAll('.popup__close');
const popupContainers = document.querySelectorAll('.popup__overlay');

export {
    buttonEdit,
    buttonAdd,
    formElementEdit,
    nameInput,
    jobInput,
    profileName,
    profileAbout,
    buttonCloseEdit,
    buttonCloseAdd,
    popupEdit,
    popupAdd,
    submitEdit,
    submitAdd,
    cardTemplate,
    element,
    elementGrid,
    buttonBasket,
    image,
    formElementAdd,
    placeInput,
    linkInput,
    imgPopup,
    imageFromPopup,
    textFromPopup,
    buttonCloseImage,
    closeButtons,
    popupContainers,
};
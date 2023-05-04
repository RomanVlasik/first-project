export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit',
  fieldSetSelector: '.popup__set',
  inactiveButtonClass: 'popup__submit_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};

export class FormValidation {  
    constructor (settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
      this._inputList = this._getInputList();
      this._buttonElement = this._formElement.querySelector(this._settings.buttonSelector);
}

  _getInputList () {
    return Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
  }

    _showInputError (inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
    };
  
    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    };
    
    _checkInputValidity (inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };

    _setEventListeners () {
    this._toggleButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  };

    enableValidation () {
      this._setEventListeners();
  };

  _hasInvalidInput () {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    };

    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.disabledButtonSubmit();
      } else {
        this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
        this._buttonElement.disabled = false;
      }
    };

    removeErrors () {
    this._inputList.forEach((item) => {
        this._hideInputError(item);
      });
  };

    disabledButtonSubmit () {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
  }
  };
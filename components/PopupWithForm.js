import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handelFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  setEventListners() {
    super.setEventListners();
    this._popupForm.addEventListner("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues;

      this.handleFormSubmit(inputValues);
    });
  }
}

export default PopupWithForm;

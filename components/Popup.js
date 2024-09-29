export default class Popup {
    constructor({popupSelector}){
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseBtn = this._popupElement.querySelector(".popup__clos");
    }

    _handelEscapeClose(){
        if(evt.key === "Escape"){
            this.close();
        }
    }

    open(){
        this._popupElement.classList.add("popup_visible");
        document.addEventListener("keyup", this._handelEscapeClose);
    }

    close(){
        this._popupElement.classList.remove("popup_visible");
        document.removeEventListener("keyup", this._handleEscapeClose);
    }

    setEventListners(){
        this._popupCloseBtn. addTodoCloseBtn.addEventListener("click", () => {
            this.close();
             });

        this._popupElement.addEventListener("mousedown",(evt)=>{
            if (evt.target.classList.contains("popup__close") || evt.target === this._popupElement) {
                this.close();
            }
        });
}}
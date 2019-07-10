import View from '../../view'
class Modal extends View {
    modal;

    constructor() {
        super();
        Modal.clearModals();

        this.modal = this.createElement({
            tagName: 'div',
            className: 'modal'
        });
        this.close = this.createElement({
            tagName: 'div',
            className: 'close'
        });

        this.modal.append(this.close);
        this.close.addEventListener('click', () => {
            Modal.clearModals();
        });

        document.body.appendChild(this.modal);
    }


    static clearModals(callback) {
        let modals = document.getElementsByClassName('modal');
        if (modals.length > 0)
            [...modals].forEach(elem => elem.remove());
        if (callback)
            callback();
    }
}
export default Modal;
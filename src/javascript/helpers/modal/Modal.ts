import View from '../../view'
class Modal extends View {
    modal: HTMLElement;
    close: HTMLElement;

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


    static clearModals(callback?: ()=> void): void {
        let modals: HTMLCollection = document.getElementsByClassName('modal');
        if (modals.length > 0) {
            for(let i = 0;i<modals.length;i++)
                modals[i].remove();
        }
        if (callback)
            callback();
    }
}
export default Modal;
import Modal from './Modal';

export class Text_modal extends Modal {
    constructor(header, text, callback?) {
        super();
        let h = this.createElement({
            tagName: 'h2',
            className: 'text_modal_h2'
        });
        h.innerHTML = header;


        let div = this.createElement({
            tagName: 'div',
            className: 'text_modal_text'
        });
        div.innerHTML = text;


        let divForBtn = this.createElement({
            tagName: 'div',
            className: 'divForBtn'
        });

        let btn = this.createElement({
            tagName: 'button',
            className: 'text_modal_button'
        });
        divForBtn.append(btn);
        btn.innerHTML = 'OK';

        btn.addEventListener('click', () => {
            Modal.clearModals(callback);
        });
        this.modal.append(h, div, divForBtn);
        if (callback)
            this.close.addEventListener('click', callback);
    }

    static showInformation(header, text, callback?) {
        document.body.append(new Text_modal(header, text, callback).modal);
    }


}
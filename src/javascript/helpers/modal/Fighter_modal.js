import Modal from './Modal'
import FighterView from '../../fighterView'

class Fighter_modal extends Modal {

    constructor(fighter, preparation) {
        super();
        Object.assign(this.fighter = {}, fighter);
        
        this.preparation = preparation;

        this.modal.style.background = "url('./resources/choose-character.img') no-repeat";
        this.modal.style.backgroundSize = "800px 500px";

        let h = this.createElement({
            tagName: 'h2'
        });
        h.innerHTML = ` `;
        this.modal.appendChild(h);

        let left = this.createElement({
            tagName: 'div',
            className: 'left'
        });
        left.append(new FighterView(fighter).element);

        let right = this.createElement({
            tagName: 'div',
            className: 'right'
        });
        right.append(this.createIndicator(this.fighter.attack, 'attack'),
            this.createIndicator(this.fighter.defense, 'defense'),
            this.createIndicator(this.fighter.health, 'health'));

        this.modal.append(left, right);

        this.modal.append(this.createButton());
    }

    createIndicator(point, name) {

        let elem = this.createElement({
            tagName: 'div',
            className: 'indicator'
        });

        let block = this.createElement({
            tagName: 'div',
            className: 'inline'
        });
        block.innerHTML = name;

        let counter = this.createElement({
            tagName: 'span',
            className: 'counter'
        });
        counter.innerHTML = point;

        let minus = this.createElement({
            tagName: 'span',
            className: 'minus'
        });

        let plus = this.createElement({
            tagName: 'span',
            className: 'plus'
        });

        let countBlock = this.createElement({
            tagName: 'div',
            className: 'countBlock'
        });
        countBlock.append(minus, counter, plus);

        plus.addEventListener('click', () => {
            if (point == 1)
                minus.style.opacity = '1';
            this.fighter[name]++;
            point++;
            counter.innerHTML = point;
        });

        minus.addEventListener('click', () => {
            switch (point) {
                case 1:
                    break;
                case 2:
                    minus.style.opacity = '0.5';
                    this.fighter[name]--;
                    point--;
                    break;
                default:
                    this.fighter[name]--;
                    point--;
            }
            counter.innerHTML = point;
        });


        elem.append(block, countBlock);
        return elem;
    }

    createButton() {
        let block = this.createElement({
            tagName: 'div',
            className: 'btnBlock'
        });

        let myBTN = this.createElement({
            tagName: 'button',
            className: 'btn'
        });
        myBTN.className += ' btn-primary';

        myBTN.innerHTML = 'my fighter';
        myBTN.addEventListener('click', () => {
            this.preparation.your = this.fighter;
            Modal.clearModals();
        });

        let enemyBTN = this.createElement({
            tagName: 'button',
            className: 'btn',
        });
        enemyBTN.className += ' btn-primary';

        enemyBTN.innerHTML = 'enemy fighter';
        enemyBTN.addEventListener('click', () => {
            this.preparation.enemy = this.fighter;
            Modal.clearModals();
        });

        block.append(myBTN, enemyBTN);
        return block;
    }

}
export default Fighter_modal;
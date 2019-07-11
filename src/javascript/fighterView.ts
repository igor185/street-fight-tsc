import View from './view';
import IFighterView from './interface/IFighterView'
import {Fighter} from "./Fighter";

export default  class FighterView extends View implements IFighterView {

    constructor(fighter, handleClick?) {
        super();
        this.createFighter(fighter, handleClick);
    }

    public getElement():HTMLElement {
        return super.getElement();
    }

    createFighter(fighter: Fighter, handleClick?: (fighter: Fighter) => void): void {
        const {name, source} = fighter;
        const nameElement = this._createName(name);
        const imageElement = this._createImage(source);

        super.setElement(super.createElement({tagName: 'div', className: 'fighter'}));
        super.getElement().append(imageElement, nameElement);
        if (handleClick)
            super.getElement().addEventListener('click', event => handleClick(fighter), false);
    }

    private _createName(name: string): HTMLSpanElement {
        const nameElement = super.createElement({tagName: 'span', className: 'name'});
        nameElement.innerText = name;

        return nameElement;
    }

    private _createImage(source: string): HTMLElement {
        const attributes = {src: source};
        return super.createElement({
            tagName: 'img',
            className: 'fighter-image',
            attributes
        });
    }
}
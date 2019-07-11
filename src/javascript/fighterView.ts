import View from './view';
import {Fighter} from "./Fighter";

export default class FighterView extends View {

    constructor(fighter, handleClick?) {
        super();
        this._createFighter(fighter, handleClick);
    }

    private _createFighter(fighter: Fighter, handleClick?: (fighter: Fighter) => void): void {
        const {name, source}:{name:string, source:string} = fighter;
        const nameElement:HTMLSpanElement = this._createName(name);
        const imageElement: HTMLElement = this._createImage(source);

        super.setElement(super.createElement({tagName: 'div', className: 'fighter'}));
        super.getElement().append(imageElement, nameElement);
        if (handleClick)
            super.getElement().addEventListener('click', () => handleClick(fighter), false);
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
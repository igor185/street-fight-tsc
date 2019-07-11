import View from './view';
import FighterView from './fighterView';
import {fightersService} from './services/fightersService';
import Fighter_modal from './helpers/modal/Fighter_modal';
import Preparation from './battle/Preparation';
import {Fighter} from "./Fighter";

export class FightersView extends View {
  handleClick;
  preparation;

  constructor(fighters) {
    super();
    this.handleClick = this._handleFighterClick.bind(this);
    this.createFighters(fighters);
    this.preparation = new Preparation();
  }

  fightersDetailsMap: Map<number, Fighter> = new Map();

  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);
      return fighterView.getElement();
    });

    const element = super.createElement({
      tagName: 'div',
      className: 'fighters'
    });
    element.append(...fighterElements);
  }

  private _handleFighterClick(fighter) {
    let modal: Fighter_modal;

    if (this.fightersDetailsMap.has(fighter._id))
      modal = new Fighter_modal(this.fightersDetailsMap.get(fighter._id), this.preparation);
    else
      fightersService.getFighterDetails(fighter._id)
      .then(data => {
        fighter.addDetails(data);
        this.fightersDetailsMap.set(fighter._id, fighter);
        modal = new Fighter_modal(fighter, this.preparation)
      }).catch(err => {
        console.log(err);
      });

  }
}
import View from './view';
import FighterView from './fighterView';
import {fightersService} from './services/fightersService';
import Fighter_modal from './helpers/modal/Fighter_modal';
import Preparation from './battle/Preparation';

class FightersView extends View {

  constructor(fighters) {
    super();
    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
    this.preparation = new Preparation();
  }

  fightersDetailsMap = new Map();

  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);
      return fighterView.element;
    });

    this.element = this.createElement({
      tagName: 'div',
      className: 'fighters'
    });
    this.element.append(...fighterElements);
  }

  handleFighterClick(event, fighter) {
    let modal;

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

export default FightersView;
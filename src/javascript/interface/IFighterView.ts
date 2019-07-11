import {Fighter} from "../Fighter";

export default interface IFighterView {
    createFighter: (fighter: Fighter, handleClick?: (fighter: Fighter) => void) => void;
    getElement: ()=>HTMLElement;
}
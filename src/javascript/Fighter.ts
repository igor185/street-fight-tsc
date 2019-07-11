import MyRandom from './services/MyRandom';
import IFighter from './interface/IFighter';

export class Fighter implements IFighter {
    _id;
    name;
    source;
    attack;
    defense;
    health;

    constructor({_id, name, source}) {
        this._id = _id;
        this.name = name;
        this.source = source;
    }

    addDetails({attack, defense, health}): void {
        this.attack = attack;
        this.defense = defense;
        this.health = health;
    }

    getHitPower = (): number => {
        return this.attack * MyRandom.randomFloatNumber(1, 2);
    };

    getBlockPower = (): number =>{
        return this.defense * MyRandom.randomFloatNumber(1, 2);
    };
}
import MyRandom from './services/MyRandom';
class Fighter {
    constructor({
        _id,
        name,
        source
    }) {
        this._id = _id;
        this.name = name;
        this.source = source;
        this.getHitPower = this._getHitPower;
        this.getBlockPower = this._getBlockPower;
    }
    addDetails({
        attack,
        defense,
        health
    }) {
        this.attack = attack;
        this.defense = defense;
        this.health = health;
    }
    _getHitPower() {
        return this.attack * MyRandom.randomFloatNumber({
            min: 1,
            max: 2
        });
    }
    _getBlockPower() {
        return this.defense * MyRandom.randomFloatNumber({
            min: 1,
            max: 2
        });
    }
}
export default Fighter;
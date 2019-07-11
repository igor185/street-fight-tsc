import Battle from './Battle';
import {Fighter} from "../Fighter";

export default class Preparation {
    _your;
    _enemy;
    btn;
    get your() {
        return this._your;
    };
    set your(fighter: Fighter) {
        document.getElementById('firstChoose').innerHTML = `Your: ${fighter.name}`;
        this._your = fighter;
        if (this._your && this._enemy && !this.btn) {
            this._printBTN();
        }
    };

    get enemy() {
        return this._enemy;
    };
    set enemy(fighter: Fighter) {
        document.getElementById('secondChoose').innerHTML = `Enemy: ${fighter.name}`;
        this._enemy = fighter;
        if (this._your && this._enemy && !this.btn) {
            this._printBTN();
        }
    };

    private _printBTN(): void {
        let elem = document.getElementById('choosed');
        elem.innerHTML = '';

        this.btn = document.createElement('button');
        this.btn.innerHTML = 'Begin battle';

        this.btn.addEventListener('click', () => {
            new Battle(this._your, this._enemy);
        });
        elem.append(this.btn);
    }
}
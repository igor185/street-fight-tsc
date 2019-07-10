import Battle from './Battle';

class Preparation {

    get your() {
        return this._your;
    };
    set your(fighter) {
        document.getElementById('firstChoose').innerHTML = `Your: ${fighter.name}`;
        this._your = fighter;
        if (this._your && this._enemy && !this.btn) {
            this.printBTN();
        }
    };

    get enemy() {
        return this._enemy;
    };
    set enemy(fighter) {
        document.getElementById('secondChoose').innerHTML = `Enemy: ${fighter.name}`;
        this._enemy = fighter;
        if (this._your && this._enemy && !this.btn) {
            this.printBTN();
        }
    };

    printBTN() {
        let elem = document.getElementById('choosed')
        elem.innerHTML = '';

        this.btn = document.createElement('button');
        this.btn.innerHTML = 'Begin battle';

        this.btn.addEventListener('click', () => {
            new Battle(this._your, this._enemy);
        });
        elem.append(this.btn);

    }
}

export default Preparation;
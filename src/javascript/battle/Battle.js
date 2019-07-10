import FighterView from '../fighterView';
import Text_modal from '../helpers/modal/Text_modal';
import Indicator from './Indicator';
import MyRandom from '../services/MyRandom';

class Battle {
    count = 0;

    constructor(you, enemy) {

        this.rootElem = document.getElementById('root');
        this.rootElem.style.display = 'none';

        this.enemy = enemy;
        this.you = you;

        this.init();

        Text_modal.showInformation(`There is information about fight`, `You need to choose which enemy's part of the body to attack, after that your enemy is to decide which part to protect. And then vice versa - he attacks, you defend. Performance of both fighters is displayed in the console at the bottom of the window.`);

        this.log('The fight start!');

    }

    init() {

        this.generatorAttack = this.generator(this.you, this.enemy);
        this.generatorDefense = this.generator(this.enemy, this.you);

        this.arrows = document.createElement('div');
        this.arrows.setAttribute('id', 'chooseAttack');
        this.arrows.innerHTML = `<span id='up'></span>
        <span id='middle'></span>
        <span id='down'></span>`;

        this.shields = document.createElement('div');
        this.shields.setAttribute('id', 'chooseDefense');
        this.shields.innerHTML = `<span id='upDef'></span>
        <span id='middleDef'></span>
        <span id='downDef'></span>`;

        this.root = document.createElement('div')
        this.root.setAttribute('id', 'rootElem');

        let header = document.createElement('div');
        header.setAttribute('class', 'header');

        this.firstIndicator = new Indicator(this.you);
        header.append(this.firstIndicator.elem);

        let span = document.createElement('span')
        span.setAttribute('class', 'headerSpan');
        span.innerHTML = 'VS';
        header.append(span);

        this.secondIndicator = new Indicator(this.enemy);
        header.append(this.secondIndicator.elem);
        this.root.append(header);

        this.arrows.style.display = 'flex';
        let fighters = document.createElement('div');
        fighters.setAttribute('class', 'fighters');
        fighters.append(new FighterView(this.you).element);
        fighters.append(this.arrows);
        fighters.append(this.shields);
        fighters.append(new FighterView(this.enemy).element);
        this.root.append(fighters);



        this.text = document.createElement('textarea');
        this.text.setAttribute('id', 'textarea');
        this.text.setAttribute('disabled', 'disabled');

        this.root.append(this.text);

        document.body.append(this.root);

        document.getElementById('up').addEventListener('click', () => {
            this.hit(1);
        });
        document.getElementById('middle').addEventListener('click', () => {
            this.hit(2);
        });
        document.getElementById('down').addEventListener('click', () => {
            this.hit(3);
        });

        document.getElementById('upDef').addEventListener('click', () => {
            this.hit(1);
        });
        document.getElementById('middleDef').addEventListener('click', () => {
            this.hit(2);
        });
        document.getElementById('downDef').addEventListener('click', () => {
            this.hit(3);
        });
    }
    log(...text) {

        text.forEach(elem => {
            this.text.value += `${elem} \n`;
        });
        this.text.scrollTop = this.text.scrollHeight;
    }

    hit(where) {
        let arr = ['head', 'armor', 'legs'];
        let attack;

        if (this.count % 2 == 0)
            attack = this.generatorAttack.next().value;
        else
            attack = this.generatorDefense.next().value;

        let damage = attack.attack.toFixed(1);

        if (where == attack.where) {
            damage = attack.attack.toFixed(1) - attack.defense.toFixed(1);
        }

        let res;

        if (this.count % 2 == 0)
            res = this.secondIndicator.hit((+damage).toFixed(1));
        else
            res = this.firstIndicator.hit((+damage).toFixed(1));


        if (!res.end) {
            if (this.count % 2 == 0) {
                this.log(`-- You attack ${arr[where-1]} with damage ${attack.attack.toFixed(1)}. Enemy defense ${arr[attack.where-1]} with power ${attack.defense.toFixed(1)}. Total damage ${res.damage}`);
                this.arrows.style.display = 'none';
                this.shields.style.display = 'flex';
            } else {
                this.log(`-- Enemy attack ${arr[attack.where-1]} with damage ${attack.attack.toFixed(1)}. Your defense ${arr[where-1]} with power ${attack.defense.toFixed(1)}. Total damage ${res.damage}`);
                this.shields.style.display = 'none';
                this.arrows.style.display = 'flex';
            }
        } else {
            let callback = () => {
                document.getElementById('rootElem').remove();
                document.getElementById('root').style.display = 'flex';
            };

            if (this.count % 2 == 0) {
                Text_modal.showInformation('Yeah', `Сongratulations on the victory, keep up the good work`, callback);
            } else
                Text_modal.showInformation('Oops', `You lost, but do not worry. Next time everything will turn out`, callback);
        }

        this.count++;
    }

    * generator(fighter1, fighter2) {
        while (true)
            yield {
                attack: fighter1.getHitPower(),
                defense: fighter2.getBlockPower(),
                where: MyRandom.randomIntNumber({
                    min: 1,
                    max: 3
                })
            }
    }
}

export default Battle;
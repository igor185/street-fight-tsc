import FighterView from '../fighterView';
import {Text_modal} from '../helpers/modal/Text_modal';
import Indicator from './Indicator';
import MyRandom from '../services/MyRandom';
import {Fighter} from "../Fighter";
import {EWhere} from "./EWhere";

class Battle{
    count = 0;
    rootElem: HTMLElement;
    enemy: Fighter;
    you: Fighter;
    generatorAttack: IterableIterator<{ defense: number; attack: number; where: number }>;
    generatorDefense: IterableIterator<{ defense: number; attack: number; where: number }>;
    arrows: HTMLDivElement;
    shields: HTMLDivElement;
    root: HTMLDivElement;
    firstIndicator: Indicator;
    secondIndicator: Indicator;
    text: HTMLTextAreaElement;

    constructor(you, enemy) {

        this.rootElem = document.getElementById('root');
        this.rootElem.style.display = 'none';

        this.enemy = enemy;
        this.you = you;

        this._init();

        Text_modal.showInformation(`There is information about fight`, `You need to choose which enemy's part of the body to attack, after that your enemy is to decide which part to protect. And then vice versa - he attacks, you defend. Performance of both fighters is displayed in the console at the bottom of the window.`);

        this._log('The fight start!');

    }

    private _init() {

        this.generatorAttack = Battle.generator(this.you, this.enemy);
        this.generatorDefense = Battle.generator(this.enemy, this.you);

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

        this.root = document.createElement('div');
        this.root.setAttribute('id', 'rootElem');

        let header: HTMLDivElement = document.createElement('div');
        header.setAttribute('class', 'header');

        this.firstIndicator = new Indicator(this.you);
        header.append(this.firstIndicator.elem);

        let span:HTMLSpanElement = document.createElement('span');
        span.setAttribute('class', 'headerSpan');
        span.innerHTML = 'VS';
        header.append(span);

        this.secondIndicator = new Indicator(this.enemy);
        header.append(this.secondIndicator.elem);
        this.root.append(header);

        this.arrows.style.display = 'flex';
        let fighters: HTMLDivElement = document.createElement('div');
        fighters.setAttribute('class', 'fighters');
        fighters.append(new FighterView(this.you).getElement());
        fighters.append(this.arrows);
        fighters.append(this.shields);
        fighters.append(new FighterView(this.enemy).getElement());
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

    private _log(...text : Array<string>) {
        text.forEach(elem => {
            this.text.value += `${elem} \n`;
        });
        this.text.scrollTop = this.text.scrollHeight;
    }

    hit(where) {
        let arr = [EWhere.Up, EWhere.Middle, EWhere.Down];
        let attack: {attack, defense, where} = this.count % 2 == 0 ? this.generatorAttack.next().value : this.generatorDefense.next().value;
        let damage:number = <number>attack.attack.toFixed(1);


        if (where == attack.where) {
            damage = attack.attack.toFixed(1) - attack.defense.toFixed(1);
        }

        let res = this.count % 2 == 0 ? this.secondIndicator.hit((+damage).toFixed(1)) : this.firstIndicator.hit((+damage).toFixed(1));


        if (!res.end) {
            if (this.count % 2 == 0) {
                this._log(`-- You attack ${arr[where-1]} with damage ${attack.attack.toFixed(1)}. Enemy defense ${arr[attack.where-1]} with power ${attack.defense.toFixed(1)}. Total damage ${res.damage}`);
                this.arrows.style.display = 'none';
                this.shields.style.display = 'flex';
            } else {
                this._log(`-- Enemy attack ${arr[attack.where-1]} with damage ${attack.attack.toFixed(1)}. Your defense ${arr[where-1]} with power ${attack.defense.toFixed(1)}. Total damage ${res.damage}`);
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

    static* generator(fighter1: Fighter, fighter2: Fighter) {
        console.log(fighter1);
        while (true)
            yield {
                attack: fighter1.getHitPower(),
                defense: fighter2.getBlockPower(),
                where: MyRandom.randomIntNumber(1,3)
            }
    }
}

export default Battle;
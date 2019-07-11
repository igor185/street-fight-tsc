import {FightersView} from './fightersView';
import {fightersService} from './services/fightersService';
import {Fighter} from './Fighter';
import {Text_modal} from './helpers/modal/Text_modal';


class App {
    constructor() {
        Text_modal.showInformation('Greetings! Welcome to our game', `First of all, you need to choose two characters - your fighter and your enemy - by clicking on their avatar, and decide on the level of health, the power of attack and defense. After that you are ready to start the fight (you will see the button 'Begin fight' at the very top of the window).`);
        this.startApp();
    }

    static rootElement: HTMLElement = document.getElementById('root');
    static loadingElement: HTMLElement = document.getElementById('loading-overlay');
    static information: HTMLElement = document.getElementById('informationBlock');

    async startApp(): Promise<void> {
        try {
            App.loadingElement.style.visibility = 'visible';

            let fighters: Array<Fighter> = [...await fightersService.getFighters()].map(elem => new Fighter(elem));

            const fightersView: FightersView = new FightersView(fighters);
            const fightersElement: HTMLElement = fightersView.getElement();

            App.rootElement.appendChild(fightersElement);
            App.information.innerHTML = `
                <div id='firstChoose'>Your</div>
                <div id='choosed'>Сhoose a character</div>
                <div id='secondChoose'>Enemy</div>`;

        } catch (error) {
            console.warn(error);
            App.rootElement.innerText = 'Failed to load data';
        } finally {
            App.loadingElement.style.visibility = 'hidden';
            App.information.style.visibility = 'visible';
        }
    }
}

export default App;
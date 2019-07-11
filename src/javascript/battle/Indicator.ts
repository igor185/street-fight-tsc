class Indicator {
    fighter;
    private _health;
    elem;
    indicator;
    span;

    constructor(fighter) {
        this.fighter = fighter;
        this._health = fighter.health;

        this.elem = document.createElement('div');
        this.elem.setAttribute('class', 'progress');
        this.indicator = document.createElement('div');
        this.indicator.setAttribute('class', 'indicatorHealth');
        this.span = document.createElement('span');
        this.span.innerHTML = this.fighter.health;

        this.elem.append(this.span, this.indicator);
    }

    hit(point: string | number) {
        point = <number> point;
        if (point < 0) return {
            end: false,
            damage: 0
        };
        this._health = (this._health.toFixed(1) - point);
        if (this._health <= 0) {
            this.span.innerHTML = '0';
            this.indicator.style.width = '0%';
            return {
                end: true,
                damage: point.toFixed(1)
            };
        } else {
            this.span.innerHTML = this._health.toFixed(1);
            let width = (100 * (this._health).toFixed(1) / this.fighter.health).toFixed(1);
            this.indicator.style.width = `${width}%`;
            return {
                end: false,
                damage: point.toFixed(1)
            };
        }
    }
}
export default Indicator;
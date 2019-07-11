export default class MyRandom{

    static randomFloatNumber(min, max):number {
        return (Math.random() * (max - min) + min).toFixed(1);
    }

    static randomIntNumber(min, max):number {
        return ((Math.random() * (max - min) + min).toFixed(0));
    }
}
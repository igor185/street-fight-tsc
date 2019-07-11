export default interface IFighter {
    _id: number,
        name:string;
    source:string;
    attack:number;
    defense:number;
    health:number;
    // @ts-ignore
    addDetails: ({attack:number, defense:number, health:number}) => void;
    getHitPower:()=>number;
    getBlockPower:()=>number;
}
export default interface IView {
    createElement: ({tagName, className, attributes}:{tagName:string, className?:string, attributes?:object}) => HTMLElement;
    getElement:()=> HTMLElement;
    setElement:(elem:HTMLElement) => void;
}
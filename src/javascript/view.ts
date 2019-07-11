class View {
    public element: HTMLElement;

    createElement<T extends {tagName:string, className?:string, attributes?: object}>(obj: T): HTMLElement {
        const {tagName, className = '', attributes = {}} = obj;

        const element: HTMLElement = document.createElement(tagName);
        if (className)
            element.classList.add(className);
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

        return element;
    }
    getElement(): HTMLElement{
        return this.element;
    }
    setElement(elem: HTMLElement): void{
        this.element = elem;
    }
}


export default View;
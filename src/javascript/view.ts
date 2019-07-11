import IView from "./interface/IView";

export default class View implements IView {
    private element: HTMLElement;

    createElement({tagName, className='', attributes = {}}: { tagName: string, className?: string, attributes?: object }): HTMLElement {
        const element: HTMLElement = document.createElement(tagName);
        if (className)
            element.classList.add(className);
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

        return element;
    }

    getElement(): HTMLElement {
        return this.element;
    }

    setElement(elem: HTMLElement): void {
        this.element = elem;
    }
}
export default class Widget {
    constructor(tagName = '', className = '', container) {
        this.element = document.createElement(tagName);
        this.className = className;
        this.container = container;

        this.setClassAtr();
    }

    insertToDOM() {
        this.container.appendChild(this.element);
    }

    setClassAtr() {
        this.element.classList.add(this.className);
    }
}

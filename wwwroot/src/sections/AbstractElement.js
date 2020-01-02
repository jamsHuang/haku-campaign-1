import * as $ from 'jquery';

class AbstractElement {
    constructor(htmlElement) {
        this._htmlElement = htmlElement;
        this.resizeHandler = this.resizeHandler.bind(this);
        this.scrollHandler = this.scrollHandler.bind(this);
        this.createScrollEffect = this.createScrollEffect.bind(this);
    }

    get htmlElement() {
        return this._htmlElement
    }

    scrollHandler(scrollTop) {
    }

    resizeHandler() {
    };

    createScrollEffect() {

    }
}

export default AbstractElement;
const dom = {
    $(ele) {
        return document.querySelector(ele);
    },
    $$(ele) {
        return document.querySelectorAll(ele);
    },
    createElement(tag) {
        return document.createElement(tag);
    },
    appendElement(target, element) {
        this.$(target).appendChild(element);
    }
};

export default dom;
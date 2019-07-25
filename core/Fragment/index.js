class Fragment {
    constructor(child = []) {
        this.child = child.flat();
        this.element = document.createDocumentFragment();

        this.init();
    }

    init() {
        this.setChild();
    }

    setChild() {
        const methodAddChild = {
            stringType: this.useSetContent,
            numberType: this.useSetContent,
            objectType: this.useSetAppendChild
        }

        this.child.forEach(item => {
            try {
                methodAddChild[`${typeof item}Type`].call(this, item);
            } catch(error) {
                throw new Error(error);
            }
        });
    }

    useSetContent(item) {
        this.element.textContent = item;
    }

    useSetAppendChild(item) {
        this.element.appendChild(item);
    }

    getElement() {
        return this.element;
    }
}

export default Fragment;

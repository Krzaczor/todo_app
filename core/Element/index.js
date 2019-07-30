function type(arg) {
    return typeof arg;
}

const attributtes = [
    {
        name: "id",
        set(value) {
            this.element.setAttribute("id", value);
        }
    },
    {
        name: "className",
        set(value) {
            this.element.classList = value;
        }
    },
    {
        name: "data",
        set(dataset) {
            if (type(dataset[0]) !== "object") {
                this.element.setAttribute(`data-${dataset[0]}`, dataset[1]);
            } else {
                dataset.forEach(item => {
                    this.element.setAttribute(`data-${item[0]}`, item[1]);
                });
            }
        }
    },
    {
        name: "event",
        set(event) {
            if (type(event[0]) !== "object") {
                this.element.addEventListener(event[0], event[1], false);
            } else {
                event.forEach(item => {
                    this.element.addEventListener(item[0], item[1], false);
                });
            }
        }
    },
    {
        name: "style",
        set(value) {
            this.element.setAttribute("style", value);
        }
    },
    {
        name: "value",
        set(value) {
            this.element.setAttribute("value", value);
        }
    },
    {
        name: "src",
        set(value) {
            this.element.setAttribute("src", value);
        }
    },
    {
        name: "type",
        set(value) {
            this.element.setAttribute("type", value);
        }
    },
    {
        name: "method",
        set(value) {
            this.element.setAttribute("method", value);
        }
    },
    {
        name: "alt",
        set(value) {
            this.element.setAttribute("alt", value);
        }
    },
    {
        name: "forName",
        set(value) {
            this.element.setAttribute("for", value);
        }
    },
    {
        name: "name",
        set(value) {
            this.element.setAttribute("name", value);
        }
    },
    {
        name: "href",
        set(value) {
            this.element.setAttribute("href", value);
        }
    },
    {
        name: "label",
        set(value) {
            this.element.setAttribute("label", value);
        }
    },
    {
        name: "cols",
        set(value) {
            this.element.setAttribute("cols", value);
        }
    },
    {
        name: "action",
        set(value) {
            this.element.setAttribute("action", value);
        }
    },
    {
        name: "cellpadding",
        set(value) {
            this.element.setAttribute("cellpadding", value);
        }
    },
    {
        name: "cellspacing",
        set(value) {
            this.element.setAttribute("cellspacing", value);
        }
    },
    {
        name: "charset",
        set(value) {
            this.element.setAttribute("charset", value);
        }
    },
    {
        name: "checked",
        set(value) {
            this.element.setAttribute("checked", value);
        }
    },
    {
        name: "readonly",
        set(value) {
            this.element.setAttribute("readonly", value);
        }
    },
    {
        name: "size",
        set(value) {
            this.element.setAttribute("size", value);
        }
    },
    {
        name: "placeholder",
        set(value) {
            this.element.setAttribute("placeholder", value);
        }
    },
    {
        name: "autofocus",
        set(value) {
            if (value) this.element.setAttribute("autofocus", true);
        }
    }
];

// const fragment = document.createDocumentFragment();

class Element {
    constructor(name = null, attrs = {}, child = []) { 
        this.name = name;
        this.attrs = attrs;
        this.child = child.flat();
        this.fragment = document.createDocumentFragment();
        this.element = null;

        this.init();
    }

    init() {
        this.setName();
        this.setAttributes();
        this.setChild();
    }

    setName() {
        if (type(this.name) !== "string") {
            throw new Error("tag name is not string!");
        }

        this.element = document.createElement(this.name);
    }

    setAttributes() {
        if (type(this.attrs) !== "object") {
            throw new Error("data is not object");
        }

        attributtes.forEach(item => {
            if (this.attrs[item.name] !== undefined) { 
                item.set.call(this, this.attrs[item.name]);
            }
        });
    }

    setChild() {
        const methodAddChild = {
            stringType: this.useSetContent,
            numberType: this.useSetContent,
            objectType: this.useSetAppendChild,
            booleanType: this.useSetContent
        }

        this.child.forEach(item => {
            try {
                methodAddChild[`${type(item)}Type`].call(this, item);
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
        this.element = this.fragment.appendChild(this.element);
        return this.element;
    }
}

export default Element;

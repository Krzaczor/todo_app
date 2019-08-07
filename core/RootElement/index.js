import CreateFragment from '../Fragment';
import CreateElement from '../Element';

let arrayParams;

function setObject(Reference, props = {}) {
    let obj = null
    
    try {
        obj = new Reference(props[0]);
        return obj;
    }
    catch(err) {
        const objProps = {};
        
        obj = Reference;
        props.forEach(prop => {
            objProps[ prop ] = props[ prop ];
        });

        obj.prototype.state = objProps;

        return obj;
    }
}

function setElement(element, props, child) {
    const elementDOM = new CreateElement(element, props, child);
    return elementDOM.getElement();
}

function setFragment(child) {
    const fagmentDOM = new CreateFragment(child);
    return fagmentDOM.getElement();
}

function init() {
    const [element, ...propsOrChild] = arrayParams;
    
    if (element === "fragment") {
        return setFragment(propsOrChild);
    }
    
    if (typeof element === "string") {
        const [props, ...child] = propsOrChild;
        return setElement(element, props, child);
    }
    
    return setObject(element, propsOrChild);
}

function Element(...params) {
    arrayParams = params || [];

    return init();
}

export default Element;

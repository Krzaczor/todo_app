import CreateFragment from '../Fragment';
import CreateElement from '../Element';

let arrayParams = [];

function setObject(Reference, props) {
    let obj = null;
    
    try {
        if (props.length !== 0 && props[0] && props[0] !== {}) {
            console.log(Reference, props, "z");
            
            obj = new Reference(props[0]);
        } else {
            console.log(Reference, props, "bez");

            obj = new Reference();
        }
        
        return obj;
    } catch(err) {
        throw new Error(err);
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

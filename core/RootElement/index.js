import CreateFragment from '../Fragment';
import CreateElement from '../Element';

let arrayParams;

function setObject(Reference, props = {}) {
    const obj = new Reference(props[0]);

    if (obj.didAction) obj.didAction();

    try {
        return obj.render();
    } catch(err) {
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

function RootElement(...params) {
    arrayParams = params || [];

    return init();
}



export default RootElement;
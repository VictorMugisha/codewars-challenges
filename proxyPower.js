
/**
 * Proxy Power: Data validation is crucial. Write a function createValidationProxy(obj) that takes an object and returns a proxy that validates any attempt to set a property value. If the value is invalid (e.g., not a number for a numeric property), throw an error.

 */




function createValidationProxy(obj) {
    let objProxy = new Proxy(obj, {
        set(target, propName, value, thirArg) {
            if (target.hasOwnProperty(porpName)) {
                console.log(`Trying to update the porperty ${propName} from ${target[propName]} to ${value}`)
                target[porpName] = value;
                return true;
            } else {
                console.log(`No such property on ${target} object!!`)
                return false
            }
        },
        get (target, propName) {
            if (target.hasOwnProperty(propName)) {
                console.log("Access Granted!!");
                return target[propName];
            } else {
                console.error('Error: No such property!!')
                return false;
            }
        }
    })
    
    return objProxy
}

let test = {
    name: "John",
    age: 32
}

let proxyy = createValidationProxy(test)

console.log(proxyy.name)
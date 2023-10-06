
//Constants

//Create a config class to change the default values

class onGodConfig {
    static debounceDelay = 0;
    static customEventName = 'custom:ongod';
    static customAttributeName = 'custom-ongod-applied';
    static customEventAttributeName = 'ongod'
    static reload = function () {
        ongodInit();
    }
}

let ongodInit = (function () {
    // Constants
    const DEBOUNCE_DELAY = onGodConfig.debounceDelay // Adjust the delay as needed (in milliseconds)
    const CUSTOM_EVENT_ONGOD = onGodConfig.customEventName;
    const CUSTOM_EVENT_ATTRIBUTE_ONGOD = onGodConfig.customEventAttributeName;
    const CUSTOM_ATTRIBUTE_ONGOD = onGodConfig.customAttributeName

    // Default function when the ongod attribute is not found
    function onGodDefault(element, mutation, observer) {
        //Not sure... but, this is needed
        return true;
    }

    // Event handler for custom event
    function onGodEvent(event) {
        const element = event.target;
        const mutation = event.detail.mutation;
        const observer = event.detail.observer;
        if(mutation.attributeName === CUSTOM_ATTRIBUTE_ONGOD){
            return onGodDefault(element, mutation, observer);            
        }
        try {
            var onGodAttribute = event.currentTarget.getAttribute(CUSTOM_EVENT_ATTRIBUTE_ONGOD);
        }
        catch (error) {
            return onGodDefault(element, mutation, observer);
        }
        try {
            if (onGodAttribute) {
                var F = new Function(onGodAttribute)
                return F(event);
            } else {
                return onGodDefault(element, mutation, observer);
            }
        } catch (error) {
            console.error('Error in ongod event:', error);
        } finally {
            reloadGodEventDebounced();
            console.debug('ongod event debounced');
            return true;
        }
    }

    let _godDebounceTimer = null;

    // Debounced event reload
    function reloadGodEventDebounced() {
        if (_godDebounceTimer) {
            clearTimeout(_godDebounceTimer);
        }
        _godDebounceTimer = setTimeout(reloadGodEvent, DEBOUNCE_DELAY);
    }


    // Reload the event listener
    function reloadGodEvent() {
        const elementsWithOngodAttribute = document.querySelectorAll('['+CUSTOM_EVENT_ATTRIBUTE_ONGOD+']');
        elementsWithOngodAttribute.forEach(element => {
            if (element.getAttribute(CUSTOM_ATTRIBUTE_ONGOD) !== 'true') {
                element.setAttribute(CUSTOM_ATTRIBUTE_ONGOD, 'true');
                element.addEventListener(CUSTOM_EVENT_ONGOD, onGodEvent);
                const observer = new MutationObserver(onGodEventCallback);
                observer.observe(element, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    characterData: true,
                    attributeOldValue: true,
                    characterDataOldValue: true
                });
            }
        });
        console.debug('ongod event reloaded');
    }

    // Callback for MutationObserver
    function onGodEventCallback(mutationsList, observer) {
        mutationsList.forEach(mutation => {
            const element = mutation.target;
            const godEvent = new CustomEvent(CUSTOM_EVENT_ONGOD, {
                bubbles: true,
                detail: { mutation, observer }
            });
            element.dispatchEvent(godEvent);
        });
    }

    window.addEventListener('load', reloadGodEvent);
    return reloadGodEvent;
})();


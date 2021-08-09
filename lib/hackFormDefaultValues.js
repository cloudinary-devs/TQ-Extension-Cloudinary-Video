const jQuery = require("jquery");
/**
 *
 * @param values[] Array of strings or null in the order of inputs to fill. null value skips that field.
 */
module.exports = function set(values) {

    if (!Array.isArray(values)) {
        console.error('Values should have been an array. Making it one.');
        values = [values];
    }

    //reverse the array so that we can pop values off of it
    values.reverse();

    //We have to wait a bit for the objective startup to finish because it gives fields an empty value which will
    //overwrite what we do here otherwise
    window.setTimeout(function () {
        jQuery('input.validation-input-text').each(

            function (idx, element) {

                const value = values.pop();

                if (value === null) { //don't set
                    return;
                }

                let lastValue = element.value;
                element.value = value;
                let event = new Event("input", { target: element, bubbles: true });
                // React 15
                event.simulated = true;
                // React 16
                let tracker = element._valueTracker;
                if (tracker) {
                    tracker.setValue(lastValue);
                }
                element.dispatchEvent(event);

            });
    }, 800);
}
'use strict';

function collect_all_even(collection) {
    var evenNumArray = [];

    collection.forEach(function (element) {
        if (element % 2 === 0)  evenNumArray.push(element);
    });

    return evenNumArray;
}

module.exports = collect_all_even;

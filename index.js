'use strict'

/**
 * This function tests if the string provided is valid JSON
 * 
 * @param {String} str 
 * @returns {Boolean} bool - Returns true if string is valid JSON
 */
module.exports.isJSON = (str) => {
    try {
        return (JSON.parse(str) && !!str);
    } catch (e) {
        return false;
    }
}

/**
 * 
 */
module.exports.circumference = (diameter) => {
    return Math.PI * diameter
}

/**
 * 
 */
module.exports.area = (radius) => {
    return Math.PI * radius * radius
}

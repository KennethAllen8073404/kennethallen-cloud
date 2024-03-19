const _ = require('lodash');
const axios = require('axios');

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Invalid input: Expecting non-empty array of numbers');
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Function to fetch data from a URL and parse it as JSON
async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
    }
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Expecting a string');
    }
    return _.startCase(str);
}

// Add more interesting functions here...

module.exports = {
    calculateAverage,
    fetchData,
    capitalizeWords,
    // Add exported functions here...
};

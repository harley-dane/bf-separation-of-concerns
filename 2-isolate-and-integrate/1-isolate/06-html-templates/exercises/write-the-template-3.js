'use strict';
/**
 * renders an unordered list of all even numbers in an array
 * @param {number[]} numbers - an array of numbers
 * @param {string} id - a value to use for the list's id
 * @returns {string} an HTML <ul> string with all even numbers
 */
const renderEvens = (numbers, id) => {
  let listItems = '';
  for (const number of numbers) {
    if (number % 2 === 0) {
      // Check if the number is even
      listItems += `<li>${number}</li>`; // Create a list item for the even number
    }
  }
  const list = `<ul id="${id}">${listItems}</ul>`; // Wrap the list items in a <ul> with the specified id
  return list;
};

const _1_emptyArray = renderEvens([], 'empty');
console.assert(_1_emptyArray === '<ul id="empty"></ul>', 'Test 1: empty array');

const _2_allOdd = renderEvens([1, 3, 5], 'all-odd');
console.assert(_2_allOdd === '<ul id="all-odd"></ul>', 'Test 2: all odd');

const _3_allEven = renderEvens([2, 4, 6], 'all-even');
console.assert(
  _3_allEven === '<ul id="all-even"><li>2</li><li>4</li><li>6</li></ul>',
  'Test 3: all even',
);

const _4_mixed = renderEvens([1, 2, 3, 4, 5], 'mixed');
console.assert(
  _4_mixed === '<ul id="mixed"><li>2</li><li>4</li></ul>',
  'Test 4: mixed numbers',
);

const divEl = document.createElement('div');

divEl.innerHTML = _1_emptyArray;
divEl.innerHTML += _2_allOdd;
divEl.innerHTML += _3_allEven;
divEl.innerHTML += _4_mixed;
console.log(divEl);

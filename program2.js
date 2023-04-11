function addListItem(text) {
    const ul = document.querySelector('ul'); // get the unordered list element
    const li = document.createElement('li'); // create a new list item element
    li.textContent = text; // set the text content of the new list item
    ul.appendChild(li); // add the new list item to the end of the unordered list
  }
  addListItem('New item');
  
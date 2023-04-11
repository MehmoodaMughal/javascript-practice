function addParagraph(text) {
    // create a new paragraph element
    const newParagraph = document.createElement('p');
    
    // set the text content of the new paragraph
    newParagraph.textContent = text;
    
    // add the new paragraph to the end of the document body
    document.body.appendChild(newParagraph);
  }
  addParagraph('This is some new text!');
  
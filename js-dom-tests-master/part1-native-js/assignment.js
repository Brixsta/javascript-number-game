// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
  return document.createElement('div');
}

// Return a <div> element with the given className.
function createDivWithClass (string) {
    var newDiv =  document.createElement('div');
    newDiv.className = string;
    return newDiv;
}


// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise


function updateTodoList (ul) {
  
  const listItems = ul.children;
  console.log(listItems);
  for(listItem of listItems) {
    const text = listItem.textContent;


      if(text.startsWith("COMPLETED")) {
        listItem.remove();
      } else if (text.startsWith("URGENT")) {
        listItem.classList.add("important");
      }
  }

  }
   




// Define a function named createList that takes one argument.
//   createList (object)

function createList (obj) {
  var newList = document.createElement('ul');

  for(TITLE in obj) {
    const listItem = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = TITLE;

    newList.appendChild(listItem);
    listItem.appendChild(a);
    const attributeName = 'href';
    a.setAttribute(attributeName, obj[TITLE]);

  }
    console.log(newList);
    return newList;
}

function  extractQuote (article) {
  var paragraphEls = article.children;
  var newArray = Array.from(paragraphEls);

  console.log(article.getElementsByTagName('p'));

  //return paragraphEls;


}



// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.




// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.

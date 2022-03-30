const textValue = document.querySelector('.search');

const submitBtn = document
  .querySelector('.submit')
  .addEventListener('click', createRow);

const listUl = document.querySelector('ul');
listUl.addEventListener('click', cutThrough);
listUl.addEventListener('click', deleteLi);
listUl.addEventListener('click', itemsLeftNumber);
listUl.addEventListener('click', deleteItemsLi);

const itemsLeft = document.querySelector('.items-left');

const clearCompleted = document
  .querySelector('.clear-completed')
  .addEventListener('click', clearAllChecked);

function createRow() {
  let ul = document.querySelector('ul');

  let li = document.createElement('li');
  ul.appendChild(li);

  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList = 'check';

  li.appendChild(checkBox);

  let text = document.createElement('p');
  text.classList = 'text-list';
  text.innerHTML = textValue.value;
  li.appendChild(text);

  let deleteRow = document.createElement('img');
  deleteRow.src = 'images/icon-cross.svg';
  deleteRow.classList = 'delete';
  li.appendChild(deleteRow);

  itemsLeft.innerHTML++;
}

// line through the p or disable line through when chech or uncheck

function cutThrough(e) {
  if (e.target.classList.contains('check')) {
    let li = e.target.parentElement;
    li.classList.toggle('cut');
    e.target.classList.toggle('checked');
  }
}

// Delete the li when X is pressed

function deleteLi(e) {
  if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    li.style.display = 'none';
  }
}

// Count up or down when check or uncheck the checkbox

function itemsLeftNumber(e) {
  if (e.target.classList.contains('checked')) {
    itemsLeft.innerHTML--;
  } else if (e.target.classList.contains('check')) {
    itemsLeft.innerHTML++;
  }
}

// Count down only if the list item is not checked

function deleteItemsLi(e) {
  li = e.target.parentElement;
  if (e.target.classList.contains('delete') && !li.classList.contains('cut')) {
    itemsLeft.innerHTML--;
  }
}

// Clear all the list items that are completed

function clearAllChecked() {
  console.log('a');
}

const textValue = document.querySelector('.search');
textValue.addEventListener('keyup', createRowEnter);

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', createRow);

const listUl = document.querySelector('ul');
listUl.addEventListener('click', cutThrough);
listUl.addEventListener('click', deleteLi);
listUl.addEventListener('click', itemsLeftNumber);
listUl.addEventListener('click', deleteItemsLi);

const itemsLeft = document.querySelector('.items-left');

const all = document.querySelector('.all');
all.addEventListener('click', showAll);

const active = document.querySelector('.active');
active.addEventListener('click', showActive);

const completed = document.querySelector('.completed');
completed.addEventListener('click', showCompleted);

const clearCompleted = document
  .querySelector('.clear-completed')
  .addEventListener('click', clearAllChecked);

function createRowEnter(e) {
  if (e.keyCode === 13) {
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

    textValue.value = '';
  }
}

function createRow(e) {
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

  textValue.value = '';
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

function clearAllChecked(e) {
  lis = document.querySelectorAll('.cut');
  lis.forEach((li) => {
    li.style.display = 'none';
  });
}

// Buttons nav

function showAll() {
  all.style.color = 'rgb(53, 53, 236)';
  active.style.color = ' rgb(175, 168, 168)';
  completed.style.color = ' rgb(175, 168, 168)';

  lisClear = document.querySelectorAll('li');
  lisClear.forEach((liClear) => {
    liClear.style.display = 'flex';
  });

  lis = document.querySelectorAll('.cut');
  lis.forEach((li) => {
    li.style.display = 'flex';
  });
}

function showActive() {
  active.style.color = 'rgb(53, 53, 236)';
  all.style.color = 'rgb(175, 168, 168)';
  completed.style.color = 'rgb(175, 168, 168)';

  lisClear = document.querySelectorAll('li');
  lisClear.forEach((liClear) => {
    liClear.style.display = 'flex';
  });

  lis = document.querySelectorAll('.cut');
  lis.forEach((li) => {
    li.style.display = 'none';
  });
}

function showCompleted() {
  completed.style.color = 'rgb(53, 53, 236)';
  active.style.color = ' rgb(175, 168, 168)';
  all.style.color = ' rgb(175, 168, 168)';

  lisClear = document.querySelectorAll('li');
  lisClear.forEach((liClear) => {
    liClear.style.display = 'none';
  });

  lis = document.querySelectorAll('.cut');
  lis.forEach((li) => {
    li.style.display = 'flex';
  });
}

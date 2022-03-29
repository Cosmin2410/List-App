const textValue = document.querySelector('.search');

const submitBtn = document
  .querySelector('.submit')
  .addEventListener('click', createRow);

// const checkBoxs = document.querySelectorAll('.check');

const listUl = document.querySelector('ul');
listUl.addEventListener('click', cutThrough);
listUl.addEventListener('click', deleteLi);

let counter = 1;

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
}

function cutThrough(e) {
  if (e.target.classList.contains('check')) {
    let li = e.target.parentElement;
    li.classList.toggle('cut');
  }
}

function deleteLi(e) {
  if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    li.style.display = 'none';
  }
}

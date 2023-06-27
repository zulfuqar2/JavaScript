// const input =document.querySelector('.AddList');
// const removeBtn=document.querySelector('.btn');
// const addList =document.querySelector('.AddBt');
// const sortList=document.querySelector('.p');

// function AddList(){
//     const listItem=input.value;
//     if(listItem){
//         let liElement=document.createElement('li');
//         liElement.textContent=`${listItem}`;
//         ulElement.appendChild(liElement);
//         localStorage.setItem("myList",Json("ulElement"));
//         input.value="";
//         console.log(localStorage);
//         return false;

//     }
// }

// function removeBtn(event){
//     let item =event.target;
//     while (item!==ulElement);
//     event.preventDefault();
//     console.log(item);

// }

 // Function to move the added list items downwards
 function moveListDown() {
    const input = document.querySelector('.AddList');
    const listText = input.value.trim();

    if (listText !== '') {
      const list = document.createElement('div');
      list.className = 'list';
      list.innerHTML = `
        <div class="listText">${listText}</div>
        <button class="removeBtn">X</button>
      `;

      list.addEventListener('click', function () {
        this.parentNode.removeChild(this);
      });

      const container = document.querySelector('.container');
      container.appendChild(list);

      input.value = '';
    }
  }

  // Add event listener to the "Add List" button
  const addBtn = document.querySelector('.AddBt');
  addBtn.addEventListener('click', moveListDown);

  // Function to remove all list items
  function removeAllLists() {
    const lists = document.querySelectorAll('.list');
    lists.forEach(function (list) {
      list.parentNode.removeChild(list);
    });
  }

  // Add event listener to the "X" button for removing all lists
  const removeAllBtn = document.querySelector('.btn');
  removeAllBtn.addEventListener('click', removeAllLists);

  // Function to sort the list items
  function sortBy() {
    const container = document.querySelector('.container');
    const lists = document.querySelectorAll('.list');

    const sortedLists = Array.from(lists).sort(function (a, b) {
      const textA = a.querySelector('.listText').textContent;
      const textB = b.querySelector('.listText').textContent;
      return textA.localeCompare(textB);
    });

    sortedLists.forEach(function (list) {
      container.appendChild(list);
    });
  }

  // Add event listener to the "Sort" button
  const sortBtn = document.querySelector('.sort');
  sortBtn.addEventListener('click', sortBy);
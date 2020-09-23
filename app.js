const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector('.addListBtn');

addListBtn.addEventListener('click', function () {
    // Create an li out of thin air
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);

    // Add the input value inside that new li
    newLi.appendChild(liContent);
    // Attaching the li to the user 
    userList.appendChild(newLi);
})
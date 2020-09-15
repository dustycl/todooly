const input = document.getElementById("input-text");
const addBtn = document.getElementById("add-item");

const userList =["laundry", "dishes", "homework", "groceries"];

const list = document.getElementById("list");
for (let i = 0; i < userList.length; i++) {
    let text = userList[i];
    addItem(text);
}

addBtn.addEventListener('click', () => {
  let text = input.value;

  if (text !== "") {
    addItem(text);
    input.value = "";
  }
});

function addItem(text) {
    const item = document.createElement("li");
    item.id = text;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', (e) => {
      e.currentTarget.parentNode.remove();
      console.log("Item deleted");
    });

    item.textContent = text.toLowerCase();
    item.appendChild(deleteBtn);
    list.appendChild(item);
}

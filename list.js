const input = document.getElementById("input-text");
const addBtn = document.getElementById("add-item");

const userList = {"User List": ["laundry", "dishes", "homework", "groceries"]};

const list = document.getElementById("list");
for (let i = 0; i < userList["User List"].length; i++) {
    let text = userList["User List"][i];
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
    const itemRow = document.createElement("tr");
    const itemCol = document.createElement("td");
    const deleteCol = document.createElement("td");

    itemRow.id = text;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', (e) => {
      e.currentTarget.parentNode.parentNode.remove();
      console.log("Item deleted");
    });

    itemCol.textContent = text.toLowerCase();
    deleteCol.appendChild(deleteBtn);
    itemRow.appendChild(itemCol);
    itemRow.appendChild(deleteCol);
    list.appendChild(itemRow);
}

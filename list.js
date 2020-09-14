const list = document.getElementById("list");

const addBtn = document.getElementById("add-item");

addBtn.addEventListener('click', () => {
  const input = document.getElementById("input-text");
  let text = input.value;

  if (text !== "") {
    const item = document.createElement("li");
    item.id = text;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', (e) => {
      e.currentTarget.parentNode.remove();
    });

    item.textContent = text.toLowerCase();
    item.appendChild(deleteBtn);
    list.appendChild(item);
  }
});

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document .querySelector("#list");

button.addEventListener("click", ()=>{
    if (input.value != ""){
    const myChap = input.value;
    

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = myChap;
    deleteButton.textContent = "❌";
    deleteButton.setAttribute("aria-label","delete button")
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", ()=>{
        li.remove();
        input.focus();
        input.value = "";
    })


    input.focus();





}
}
)
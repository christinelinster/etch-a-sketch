const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const clear = document.querySelector(".clear");
const maxSize = 100;

btn.addEventListener("click", () => {
    removeBoxes();

    const size = Math.min(Number(prompt("Set the number of squares for your grid.")), maxSize);
    for (i=0; i<size; i++){
        const rows = document.createElement("div");
        rows.classList.add("row");
            for(j=0;j<size;j++){
                const columns = document.createElement("div");
                columns.classList.add("column");
                rows.appendChild(columns);
            }
        container.appendChild(rows);
    }

    const boxes = document.querySelectorAll(".column");
    boxes.forEach((box)=>{
        box.addEventListener("mouseover", () => {
        box.classList.add('color');
    })
})
})

clear.addEventListener("click", () => {
    clearColors();
})

function removeBoxes(){
    const target = document.querySelectorAll(".row");
    target.forEach((row) =>{
        container.removeChild(row);
    }
)}

function clearColors(){
    const boxes = document.querySelectorAll(".column");
    boxes.forEach((box)=>{
        box.classList.remove('color');
    }
)}









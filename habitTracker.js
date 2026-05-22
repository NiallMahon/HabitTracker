const table = document.getElementById("table");
function createTable() {

    const row = table.insertRow();
    const cell = row.insertCell();
    

    const input = document.createElement("input");
    input.type = "text";
    input.value = "Title";
    


    cell.appendChild(input);
}

function createRow() {

    // If table is empty, create first cell
    if (table.rows.length === 0) {
        createTable();
        return;
    }

    const colCount = table.rows[0].cells.length;
    const row = table.insertRow();

       
    row.insertCell().textContent = table.rows.length - 1;
    for (let i = 1; i < colCount; i++) {
        
        const cell = row.insertCell();
        const button = document.createElement("button");
        
        cell.appendChild(button)
    }
}

function createCol() {

    // If table is empty, create first cell
    if (table.rows.length === 0) {
        createTable();
        return;
    }

    const rowCount = table.rows.length;

    const goal = document.createElement("input");
    goal.type = "text";
    goal.value = "goal";

    table.rows[0].insertCell().appendChild(goal);
    for (let i = 1; i < rowCount; i++) {
        const cell = table.rows[i].insertCell();
        const button = document.createElement("button");
        
        cell.appendChild(button)
    }
}
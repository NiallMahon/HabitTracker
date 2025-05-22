 function saveTable(){
            const table = document.getElementById("tableid");
            const data = [];

            for (var i=0; i<table.rows.length; i++){
                    const row = table.rows[i];
                    const rowData = [];
                    for (var j =0; j < row.cells.length; j++){
                        const cell = row.cells[j]; 
                        const input = cell.querySelector("input");
                        const button = cell.querySelector("button");    

                        if (input){
                            rowData.push({
                                type: 'input',
                                value: input.value,
                                placeholder: input.placeholder || ''
                            });
                        }
                        else if(button){
                            rowData.push({type: 'button', color: button.style.backgroundColor});
                        }
                        else {
                            rowData.push({type: 'text', value: cell.innerText});
                        }
                    }
                    data.push(rowData);
            }
            const savedObject = {
                table: data,
                count: count
            };

            localStorage.setItem("SaveTab", JSON.stringify(savedObject));
        }

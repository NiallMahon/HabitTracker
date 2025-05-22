   function loadTable(){
            const saved = localStorage.getItem("SaveTab");
            if (!saved) {
                return;
            }

            const savedObject = JSON.parse(saved);
            const data = savedObject.table;
            count = savedObject.count;
            var container = document.getElementById("container");
          container.innerHTML =""

          var table = document.createElement("table");
          table.id = "tableid";
          container.appendChild(table); 

          for (var i =0; i < data.length; i++){
            const row = table.insertRow();
            const rowData = data[i];    
            for (var j =0; j < rowData.length; j++){
                const cellData = rowData[j];
                const cell = row.insertCell();

                if (cellData.type === 'input'){
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = cellData.value;
                    input.placeholder = cellData.placeholder || '';
                    input.style.border = 'none';
                    cell.appendChild(input);
                }
                else if (cellData.type === 'button'){
                    const button = document.createElement('button');
                    button.className = 'clic';
                    button.style.height = '80px';
                    button.style.backgroundColor = cellData.color || ' ';
                    cell.appendChild(button);

                }
                else if (cellData.type === 'text'){
                    cell.innerText = cellData.value;
                  
                }
            }
          }
          
        }

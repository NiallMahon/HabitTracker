  function addcol(){
                var table = document.getElementById("tableid");
                var rowCount = table.rows.length;
                var colCount = table.rows[0].cells.length;
                
                for (var i = 0; i < rowCount; i++){
                    var cell = table.rows[i].insertCell(table.rows[i].cells.length);
                    if (i ===0){
                        cell.innerHTML ='<input type="text" onkeyup="goalName()" class="goal" placeholder="GOAL">';
                        
                    
                    }
                    else {
                        cell.innerHTML = '<button  class="clic"  style="height: 80px;"></button>';
                    }
                }
                //ADD COL
                fetch(`http://localhost:3000/add-col/${counter}`, {
                    method: "POST",
                })
                .then((res) =>res.text())
                .then((text)=>console.log(text))

                counter ++;
            }

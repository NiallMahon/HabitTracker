  var count = 1;
        function addrow() {
            var table = document.getElementById("tableid");
            var rowCount = table.rows.length;
            var colCount = table.rows[0].cells.length;
              var newRow = table.insertRow(rowCount);
            for (var i = 0; i<colCount; i++) {
               var cell = newRow.insertCell(i);
                if (i === 0) {
                    cell.innerHTML = count;
                    cell.style.height="80px";
                    count++;
                }
                else {
                    cell.innerHTML ='<button class="clic" style="height: 90px;"></button>';
                }
            }
        }

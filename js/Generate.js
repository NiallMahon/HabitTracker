        function generate() {
          var container = document.getElementById("container");
          container.innerHTML =""

          var table = document.createElement("table");
          

          var row = table.insertRow(0);
          var cell = row.insertCell(0);
          cell.innerHTML = '<input type="text" style="border: none;" class="cell"; placeholder=" ">';

          container.appendChild(table);
          table.id = "tableid";
        }

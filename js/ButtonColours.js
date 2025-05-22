  document.addEventListener('click', function(e){
            if (e.target.classList.contains('clic') ){
                change(e.target);
            }
        })

        function change(button){
            var colours = ['green', 'red', 'black', 'white'];
            var colour = button.style.backgroundColor;
            var pos = colours.indexOf(colour);
            const next = (pos + 1)%colours.length;
            button.style.backgroundColor = colours[next];
        }

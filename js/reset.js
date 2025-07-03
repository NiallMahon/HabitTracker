   function reset(){
                fetch("http://localhost:3000/reset", {
                    method: "DELETE",
                })
                .then((res)=>res.text())
                .then((text)=>console.log(text))
            }

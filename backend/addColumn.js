app.post('/add-col/:count', (req, res) => {
    var count = req.params.count
    var columnName = mysql.escapeId(count)
    
    let sql = `ALTER TABLE users ADD ${columnName} INT`
    con.query(sql, (err, result) =>{
        if (err) {
            console.error(err)
            return res.status(500).send("Error")
        }
        res.send("Col added")
    })
})

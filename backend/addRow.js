app.post('/add-row/:colCount', (req, res) => {
    colCountString = req.params.colCount
    colCount = parseInt(colCountString)

    let values = []
    for (var i = 0; i< (colCount+1); i++) {
      values.push(null)
    }
    let sql = "INSERT INTO users VALUES (?)"
    con.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).send("Error with sql")
        }
        res.send("Row added")
    })
} )

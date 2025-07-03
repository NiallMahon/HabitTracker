app.delete('/reset', (req, res) => {
    let sql = "DROP TABLE users"
    let sql2 = "CREATE TABLE users (goal_name VARCHAR(20), goal_id INT PRIMARY KEY AUTO_INCREMENT)"

    con.query(sql, (err) => {
        if (err) {
            console.error(err)
            return res.status(500).send("Error Dropping")
        }

        con.query(sql2, (err) => {
            if (err) {
                console.error(err)
                return res.status(500).send("Error Creating")
            }

            res.send("Reset")
        })
    })
})

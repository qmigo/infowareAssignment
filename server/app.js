const express = require('express')
const app = express()
const port = 5000
const db = require('./models/index')
const cors = require('cors')
const { createEmployee, listEmployees, getEmployee, updateEmployee, deleteEmployee } = require('./controller')
const errorHandler = require('./middleware/errorMiddleware')

app.use(cors())
app.use(express.json())


app.post('/', createEmployee)
app.get('/', listEmployees)
app.get('/employee/:empId', getEmployee)
app.put('/employee/:empId', updateEmployee)
app.delete('/employee/:empId', deleteEmployee)

app.use(errorHandler)

db.sequelize.sync({ force: true }).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server listening at http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(err)
})

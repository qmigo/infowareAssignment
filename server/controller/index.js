const db = require('../models/index')
const customAPIError = require('../error/customAPIError')

const Employee = db.employee
const Op = db.Sequelize.Op

const createEmployee = async (req, res)=>{
    const employee = await Employee.create(req.body)
    res.status(200).json({employee})
}

const getEmployee = async (req, res)=>{
    const { empId } = req.query
    if(!empId)
    throw new customAPIError(300, "Bad Request | EmpID missing")

    const employee = await Employee.findByPk(empId)
    res.status(200).json({employee})
}

const listEmployees = async (req, res)=>{
    const { pageSize=5, page=1 } = req.query

    const employees = await Employee.findAll({
        limit: pageSize,
        offset: pageSize*(page-1)     
    })
    res.status(200).json({employees})
}

const updateEmployee = async(req, res)=>{
    const { empId } = req.query
    if(!empId)
    res.status(300).json({msg:"bad request, empId is mandatory"})

    await Employee.update(req.body,{
        id: empId
    })

    res.status(200).json({success: true})
}

const deleteEmployee = async(req, res)=>{
    const { empId } = req.query
    if(!empId)
    res.status(300).json({msg:"bad request, empId is mandatory"})

    await Employee.destroy({
        id: empId
    })

    res.status(200).json({success: true})
} 

module.exports  = {
    createEmployee,
    deleteEmployee,
    listEmployees,
    updateEmployee,
    getEmployee
}


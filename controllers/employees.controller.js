const pool = require("../db.js");

const getEmployees = async (req, res, next) => {
    const [row] = await pool.query('SELECT * FROM employee')
    res.json(row);
}

const getEmployee = async (req,res) =>{
  console.log(req.params.id)
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [req.params.id])
  console.log(rows)
  if (rows.length == 0){
    return res.status(404).json({
      message: "No encontrado"
    })
  }
  res.json(rows) 
}

const createEmployee = async (req, res, next) => {

  const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    //console.log(name, salary)
    res.send({ 
      id: rows.insertId,
      name,
      salary
     });
}

const updateEmployee = async (req, res, next) => {
  try{
    //throw new Error("Mi error ") //Generar un error
    const {id} = req.params
    const {name, salary} = req.body
    const[result] = await pool.query("UPDATE employee SET name= IFNULL(?,name), salary= IFNULL(?,salary) where id = ?", [name,salary, id])
    if (result.affectedRows =0){
      return res.status(404).json({
        message: "No existe dicho usuario a eliminar"
      })
    }
    const [rows] = await pool.query("SELECT * FROM employee where id = ?", [id])
    res.json(rows)
  } catch(error){
    res.status(500).send("Se ha producido un ERROR 500 "+error)
  }
}

const deleteEmployees =  async (req, res, next) => {
  const [result] = await pool.query("DELETE FROM employee where id = ?",[req.params.id])
  console.log(result)
  if(result.affectedRows=0){ //Saber cuantos registros han sido eliminados
    return res.status(404).json({
      message: "No existe dicho usuario a eliminar"
    })
  }
  res.send('Eliminando empleados');
}

module.exports = { 
    getEmployees,
    createEmployee, 
    updateEmployee,
    deleteEmployees,
    getEmployee
  }

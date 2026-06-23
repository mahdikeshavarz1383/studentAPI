const express = require("express");
const app = express();
const port =3000;
app.use(express.json());
let students=[
    {id:1, name:"mahdi", grade:20,},
    {id:2, name:"sepide",grade:20}
]
app.get("/students",(req,res)=>{
    return res.json({message:students});
})
app.get("/students/:id",(req,res)=> {
    const id=parseInt(req.params.id);
    if(isNaN(id)){return res.status(400).json({message:"please enter a number"}); return;}
    const student=students.find(u=>u.id==id);
    if(!student){return res.status(404).json({message:"not found"})}
    return res.json({message:"found",student})
})
app.post("/students",(req,res)=> {
    const{id,name,grade} = req.body
    if(!name ||!grade){return res.status(400).json({message:"please enter"})}
    const newStudent={
        id:students.length+1,
        name:req.body.name,
        grade:req.body.grade,
    }
    students.push(newStudent)
    return res.json({message:"added",students})
})
app.put("/students/:id",(req,res)=> {
    const id=parseInt(req.params.id);
    if(isNaN(id)){return res.status(400).json({message:"please enter a number"})}
    const student=students.find(u=> u.id==id);
    if(! student){return res.status(400).json({message:"not found"})}
    const{name,grade} = req.body
    if(! name &&!grade){return res.status(400).json({message:"enter name and grade"})}
  if(grade) student.grade=grade
  if(name) student.name=name
  return res.json({message:"updated",student})
})




app.delete("/students/:id",(req,res)=> {
    const id=parseInt(req.params.id);
    if(isNaN(id)){return res.status(400).json({message:"please enter a number"})}
    const student=students.find(u=> u.id==id);
    if(!student){return res.status(404).json({message:"not found"})}
    students=students.filter(u=>u.id!==id)
    return res.json({message:"deleted",students})
})



app.listen(port, ()=>{
    console.log("the program is running on port:3000");

})
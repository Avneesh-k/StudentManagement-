import Student from "../models/Student.js";

//create student
export const createStudent = async(req,res) => {
    try{
        const student = await Student.create(req.body);
        const saved = await student.save();
        res.status(201).json(saved)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

//get Allstudent 
export const getAllStudent = async(req,res)=>{
    try{
        const data = await Student.find().sort({createdAt:-1})
        res.json(data)
    }catch(error){
        res.send(error.message)
    }
}


//update Student 
export const updateStudent = async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body,{ new:true})
        res.send(updatedStudent)
    }catch(error){
        res.send(error.message)
    }
}

//get oneStudent
export const getStudent = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await Student.findById(id)
        res.send(data)
    }catch(error){
        res.send(error.message)
    }
}

//delete student 
export const deletestudent = async(req,res)=> {
    try{
        const id = req.params.id;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if(!deletedStudent){
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student deleted successfully", student: deletedStudent });
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


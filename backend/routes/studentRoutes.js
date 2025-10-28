import express  from "express";
import { createStudent, deletestudent, getAllStudent, getStudent, updateStudent } from "../controllers/studentController.js";

const router = express.Router()

router.post('/addstudent',createStudent)
router.get('/allstudents',getAllStudent)
router.delete('/:id',deletestudent)
router.get('/:id',getStudent)
router.put('/:id',updateStudent)

export default router
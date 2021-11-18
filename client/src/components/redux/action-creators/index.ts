import  axios  from 'axios';
import { ActionTypeStudent } from "../action-types"
import { StudentAction } from "../actions"
import { Dispatch } from "redux"
import {toast} from "react-toastify"


interface studentData{
    _id?: FormDataEntryValue
    firstname: FormDataEntryValue
    lastname: FormDataEntryValue
    email: FormDataEntryValue
    dob: FormDataEntryValue
    address: FormDataEntryValue
    gender: FormDataEntryValue
}

const config = {
    headers: {
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin": "*",
    }
}

export const createStudent = (student: studentData) => async(dispatch:Dispatch<StudentAction>) => {
    try {
        const body = {
            "email": student.email,
            "firstname":student.firstname,
            "lastname":student.lastname,
            "dob":student.dob,
            "address":student.address,
            "gender":student.gender,
        }
        const {data} = await axios.post("/students/add", body, config)
        toast.success("Student Created Successfully")

        dispatch({type: ActionTypeStudent.CREATE_STUDENT, payload: data})
    } catch (error: any) {
        dispatch({type: ActionTypeStudent.STUDENTS_ERROR, payload: error.response.data})
        toast.error("Student Already Exists")
    }
}
export const getallStudents = () => async(dispatch:Dispatch<StudentAction>) => {
    try {
        const {data} = await axios.get("/students/all", config)
        console.log(data);
        dispatch({type: ActionTypeStudent.GETALL_STUDENTS, payload: data})
    } catch (error: any) {
        dispatch({type: ActionTypeStudent.STUDENTS_ERROR, payload: error.response.data})
        toast.error(error.response.data.message)
    }
}

export const deleteStudent = (id:string) => async(dispatch:Dispatch<StudentAction>) => {
    try {
        await axios.delete(`students/delete/${id}`, config)
        dispatch({type: ActionTypeStudent.DELETE_STUDENT, payload: id})
        toast.success("Student Deleted Successfully")

    } catch (error:any) {
        dispatch({type: ActionTypeStudent.STUDENTS_ERROR, payload: error.response.data})
        toast.error(error.response.data.message)
    }
}
export const updateStudent = (student: studentData) => async(dispatch:Dispatch<StudentAction>) => {
    try {
        console.log(student)
        const body = {
            "_id":student._id,
            "email": student.email,
            "firstname":student.firstname,
            "lastname":student.lastname,
            "dob":student.dob,
            "address":student.address,
            "gender":student.gender,
        }
       const {data} = await axios.post(`students/update`,body,config)
        dispatch({type: ActionTypeStudent.EDIT_STUDENT, payload: data})
        toast.success("Student Updated Successfully")

    } catch (error:any) {
        dispatch({type: ActionTypeStudent.STUDENTS_ERROR, payload: error.response.data})
        toast.error(error.response.data.message)
    }
}
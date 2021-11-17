import { ActionTypeStudent } from "../action-types";

interface CreateStudentAction{
    type:ActionTypeStudent.CREATE_STUDENT
    payload:any
}
interface EditStudentAction{
    type:ActionTypeStudent.EDIT_STUDENT
    payload:any
}
interface DeleteStudentAction{
    type:ActionTypeStudent.DELETE_STUDENT
    payload:any
}
interface GetallStudentAction{
    type:ActionTypeStudent.GETALL_STUDENTS
    payload:any
}
interface StudentErrorAction{
    type:ActionTypeStudent.STUDENTS_ERROR
    payload:any
}

export type StudentAction =
 | CreateStudentAction
 | EditStudentAction
 | DeleteStudentAction
 | GetallStudentAction
 | StudentErrorAction

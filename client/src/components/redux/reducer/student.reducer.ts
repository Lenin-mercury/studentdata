import { StudentAction } from "../actions";
import { ActionTypeStudent } from "../action-types";

interface StudentState {
    loading: boolean
    error: string | null
    student:object |null
    students: any | null
}

const initialState = {
    loading: false,
    error:null,
    student:null,
    students:[]
}


/**
 *
 * @param state
 * @param action
 */
 export const StudentReducer = (
    state: StudentState = initialState,
    action: StudentAction
  ): StudentState => {
    let modifiedState: any
    switch (action.type) {
      //
      // Create Student
      //
      case ActionTypeStudent.CREATE_STUDENT:
        modifiedState = {
          loading: false,
          error: null,
          student:action.payload,
          students:[action.payload, ...state.students]
        }
        break
      //
      // Edit Student
      //
      case ActionTypeStudent.EDIT_STUDENT:
          const editedStudents = state.students.map((student: { _id: any }) => {
              if (student._id === action.payload._id) {
                  return student = action.payload
              } else {
                return student
              }
          })

        modifiedState = {
            ...state,
          loading: false,
          error: null,
          students:editedStudents
        }
        break

      //
      // Delete Student
      //
      case ActionTypeStudent.DELETE_STUDENT:
        const filterCust = state.students.filter((student:{_id: any}) => student._id !== action.payload)
        modifiedState = {
            ...state,
          loading: false,
          error: null,
          students:filterCust
        }
        break

      //
      // Get all Students
      //
      case ActionTypeStudent.GETALL_STUDENTS:
        modifiedState = {
            ...state,
          loading: false,
          error: null,
          students:action.payload
        }
        break
      //
      // Student Error
      //
      case ActionTypeStudent.STUDENTS_ERROR:
        modifiedState = {
            ...state,
          loading: false,
          error: action.payload,
        }
        break
        //
        //Default
        //
      default:
        modifiedState = state
        break
    }
    return modifiedState
  }

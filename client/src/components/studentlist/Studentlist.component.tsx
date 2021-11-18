import React, { useEffect, useState } from 'react'
import './Studentlist.styles.scss'
import { getallStudents, deleteStudent } from '../redux/action-creators'
import { useDispatch, useSelector } from "react-redux"

const Studentlist = (props: any) => {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state.student)
    useEffect(() => {
        dispatch(getallStudents())
    }, [])

    const _renderTableHead = () => <thead>
        <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View Details</th>
        </tr>
    </thead>
    const _renderTableBody = () => <tbody>
        {state && state.students.length > 0 && state.students.map((student: any, key: number) => {
            return (
                <tr key={key + 1}>
                    <td>
                        {key + 1}
                    </td>
                    <td>
                        {student.firstname}  {student.lastname}
                    </td>
                    <td>
                        <i className="fas fa-edit"
                            onClick={() => {
                                props.setStudentData(student)
                                props.setIsEdit(true)
                                props.setTab("addstudent")
                            }
                            }></i>
                    </td>
                    <td>
                        <i className="fas fa-trash" onClick={() => dispatch(deleteStudent(student._id))}></i>
                    </td>
                    <td>
                        <span onClick={() => {
                            props.setStudentData(student)
                            props.setOpenPopup(true)
                        }} className="studentlist__table--span"> details</span>
                    </td>
                </tr>
            )
        })}
    </tbody>
    const _renderStudentListHeader = () => <h2 className="studentlist__header">Student List</h2>
    const _renderTable = () => <table className="studentlist__table table table-striped table-hover">
        {_renderTableHead()}
        {_renderTableBody()}
    </table>
    return (
        <div className="studentlist">
            {_renderStudentListHeader()}
            <section className="studentlist__tablecontainer table-responsive">
                {_renderTable()}
            </section>
        </div>
    )
}
export default Studentlist
import React, { useState } from 'react'
import './homepage.styles.scss'
import Register from '../../components/register/Register.component'
import Studentlist from '../../components/studentlist/Studentlist.component'
import Popup from '../../components/popup'
const Homepage = () => {
    const [tab, setTab] = useState<string>("addstudent")
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [studentData, setStudentData] = useState<object | null>(null)

    const _renderHeader = () => <section className="header">
        <div className="header__login">
            <span className="header__login--span">Login</span>
        </div>
        <div className="header__student">
            <span className={tab === "addstudent" ? "header__student--span active" : "header__student--span"}
            onClick={() => {
                setTab("addstudent")
                setStudentData(null)
            }}>
                Add Student
            </span>
            <span className={tab === "addstudent" ? "header__student--span " : "header__student--span active"} onClick={() => setTab("studentlist")}>
                Student List
            </span>
        </div>
    </section>
    const _renderMain = () => <section className="main">
        {tab === "addstudent" ? <Register formData={studentData} isEdit={isEdit} setIsEdit={setIsEdit} /> :
            <Studentlist setOpenPopup={setOpenPopup} setIsEdit={setIsEdit} setStudentData={setStudentData} setTab={setTab}
            />}
    </section>

    return (
        <div className="homepage">
            {_renderHeader()}
            {_renderMain()}
            {openPopup && <Popup setOpenPopup={setOpenPopup} options={studentData} />}
        </div>
    )
};

export default Homepage
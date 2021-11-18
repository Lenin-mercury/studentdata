import React, { useEffect, useState } from 'react'
import "./Register.styles.scss";
import { createStudent, updateStudent } from '../redux/action-creators'
import { useDispatch } from "react-redux"
import {toast} from 'react-toastify'

interface FormData {
  _id?: string
  email: string
  firstname: string
  lastname: string
  dob: string
  address: string
  gender: string
}

interface OptionValue {
  value: string
  label: string
  name: string
  type?: string
  placeholder?: string
}

const Register = (props: any) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstname: "",
    lastname: "",
    dob: "",
    address: "",
    gender: "male",
  })

  useEffect(() => {
    props.formData && setFormData(props.formData)
  }, [props.formData])

  if (formData && formData.dob) {
    const formattedDate = new Date(formData.dob).toISOString().slice(0, 10);
    formData.dob = formattedDate.toString();
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (new Date(formData.dob) > new Date()) return toast.error("Date of Birth is greater than today")
    props.isEdit ? dispatch(updateStudent(formData)) : dispatch(createStudent(formData))
    props.setIsEdit(false)
    setFormData({
      email: "",
      firstname: "",
      lastname: "",
      dob: "",
      address: "",
      gender: "",
    })
  }

  const onCancel = () => {
    setFormData({
      email: "",
      firstname: "",
      lastname: "",
      dob: "",
      address: "",
      gender: "",
    })
  }

  const _renderInput = (option: OptionValue) => <>
    <div className="register__inputgroup">
      <label htmlFor={option.name} className="register__label">{option.label} </label>
      <input
        type={option.type || "text"}
        className="register__input"
        name={option.name}
        placeholder={option.placeholder}
        value={option.value}
        onChange={(e) => {
          setFormData({ ...formData, [option.name]: e.target.value })
        }}
        required
      />
    </div>
  </>

  const _renderDateInput = (option: OptionValue) => <>
    <div className="register__inputgroup">
      <label htmlFor={option.name} className="register__label">{option.label} </label>
      <input
        type="date"
        className="register__input"
        name={option.name}
        placeholder={option.placeholder}
        value={option.value}
        onChange={(e) => {
          setFormData({ ...formData, [option.name]: e.target.value })
        }}
        required
      />
    </div>
  </>

  const _renderAddressInput = (option: OptionValue) => <>
    <div className="register__inputgroup">
      <label htmlFor={option.name} className="register__label">{option.label}</label>
      <textarea name={option.name} className="register__input" value={option.value} required
        onChange={(e) => {
          setFormData({ ...formData, [option.name]: e.target.value })
        }} />
    </div>
  </>

  const _renderGenderInput = (option: OptionValue) => <>
    <div className="register__radiogroup">
      <div className="register__radiogroup--radio">
        <label htmlFor="male">Male</label>
        <input type="radio"
        name="gender"
        id="male"
        value="male"
        checked={formData && formData.gender ? formData.gender === 'male': false}
        onChange={(e) => {
          setFormData({ ...formData, [option.name]: e.target.value })
        }} />
      </div>
      <div className="register__radiogroup--radio">
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="female" value="female" checked={formData && formData.gender ? formData.gender === 'female': false} onChange={(e) => {
          setFormData({ ...formData, [option.name]: e.target.value })
        }} />
      </div>
    </div>

  </>

  const _renderSubmitButtons = () => <>
    <div className="register__buttons">
      <span onClick={onCancel} className="register__cancel btn btn-secondary">Cancel</span>
      <button type="submit" className="register__submit btn btn-info">Submit</button>
    </div>
  </>

  return (
    <div className="register">
      <form action="submit" onSubmit={(e) => onSubmit(e)}>
        <h1 className="register__header">Add Student</h1>
        {_renderInput({ label: "First Name", name: "firstname", placeholder: "Your First Name", value: formData.firstname })}
        {_renderInput({ label: "Last Name", name: "lastname", placeholder: "Your Last Name", value: formData.lastname })}
        {_renderDateInput({ label: "Date of birth", name: "dob", placeholder: "Your Last Name", value: formData.dob })}
        {_renderInput({ label: "Email", name: "email", placeholder: "emailexample@test.com", value: formData.email })}
        {_renderAddressInput({ label: "Address", name: "address", value: formData.address })}
        {_renderGenderInput({ name: "gender", value: formData.gender, label: "gender" })}
        {_renderSubmitButtons()}
      </form>
    </div>
  );
};

export default Register
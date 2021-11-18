import React from 'react'
import './popup.styles.scss'

const Popup = (props: any) => {
    if (props.options && props.options.dob) {
        var formattedDate = new Date(props.options.dob).toISOString().slice(0, 10);
        props.options.dob = formattedDate.toString();
      }
    const _renderPopupheader = () => <h1 className="popup__content--header">Student Details</h1>
    const _renderCloseButton = () => <i className="fas fa-times" onClick={() => props.setOpenPopup(false)}></i>

    const _renderPopupContentLeft = () => <div className="popup__content--left">
        <div className="popup__content--left-imgcontainer">
            <img src={`https://avatars.dicebear.com/api/${props.options && props.options.gender}/${props.options && props.options.firstname}.svg`} alt="profile pic" className="popup__content--left-img" />
        </div>

        <strong className="popup__content--left-name">{props.options && props.options.firstname} {props.options && props.options.lastname}</strong>

        <span>Student</span>

        <div className="popup__content--left-social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
        </div>

    </div>

    const _renderPopupContentRight = () => <div className="popup__content--right">
        <span className="popup__content--right-header">Personal Information</span>
        <div className="popup__content--right-details">
            <div className="popup__content--right-details-container">
                <strong>Email</strong>
                <span>{props.options && props.options.email}</span>
            </div>
            <div className="popup__content--right-details-container">
                <strong>Phone Number</strong>
                <span>+91-987654321</span>
            </div>
            <div className="popup__content--right-details-container">
                <strong>Date of Birth </strong>
                <span>{props.options && props.options.dob}</span>
            </div>

            <div className="popup__content--right-details-container">
                <strong>Gender</strong>
                <span>{props.options && props.options.gender}</span>
            </div>
            <div className="popup__content--right-details-container address">
                <strong>Address</strong>
                <span>{props.options && props.options.address}</span>
            </div>
        </div>
            <button onClick={() => window.print()} className="btn btn-info"> Print </button>
    </div>

    const _renderPopupContentCenter = () => <div className="popup__content--center"></div>

    const _renderPopupContent = () => <div className="popup__content">
        {_renderPopupheader()}
        {_renderPopupContentLeft()}
        {_renderPopupContentCenter()}
        {_renderPopupContentRight()}
        {_renderCloseButton()}

    </div>
    return (
        <section className="popup">
            {_renderPopupContent()}
        </section>
    )
}

export default Popup
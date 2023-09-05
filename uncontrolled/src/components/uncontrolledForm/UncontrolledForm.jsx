import { useState } from 'react'
import style from './UncontrolledForm.module.scss'

export const UncontrolledForm = () => {

    const [error, setError] = useState("")

    function onSubmitForm (event) {
        event.preventDefault()

        console.log("first ", event.target.firstname.value)
        console.log("lastname ", event.target.lastname.value)
        console.log("email ", event.target.email.value)
        
        if (event.target.firstname.value == ""){
            setError("Firstname must be set")
        }
    }

    return(
        <form onSubmit={(event) => onSubmitForm(event)} className={style.formStyle}>
            <label htmlFor="firstname">
                First name:
                <input id="firstname" name="firstname" placeholder="Enter your first name"></input>
            </label>
            <b>{error}</b>
            <label htmlFor="lastname">
                Last name:
                <input id="lastname" name="lastname" placeholder="Enter your last name"></input>
            </label>
            <label htmlFor="email">
                Email:
                <input id="email" type="email" name="email" placeholder="Enter your email"></input>
            </label>
            <input type="submit" value="SEND"></input>
        </form>
    )
}
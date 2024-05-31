import { useState } from "react"


const Register = (props) => {
    const [form, setForm] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSignUp(form)
    }
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <div>
        <h1>Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"/>
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email"/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password"/>
                <input type="password" name="password" autoComplete="true" placeholder="Password" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password2"/>
                <input type="password2" name="password2" autoComplete="true" placeholder="Password2" onChange={handleChange}/>
            </div>
            <button type="submit" className="popup-button" value="Login">Submit</button>
        </form>
    </div>
  )
}

export default Register
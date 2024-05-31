import { useState } from "react"

const Login = (props) => {
    const [form, setForm] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault()
    let submission = await props.handleLogin(form)
    if(submission) {
        setErrorMsg(submission.error)
    }
}
    
const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
}
return (
    <div>
    <div>
      <h1 >Log In</h1>
    </div>
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="username"/>
        <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
    </div>
    <div>                
        <label htmlFor="password"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
    </div>
        <button type="submit" className="popup-button" value="Login">Submit</button>
    </form>
        {errorMsg ? <h4 style={{color: "red"}}>{errorMsg}</h4> : ""}
    </div>
  )
}

export default Login
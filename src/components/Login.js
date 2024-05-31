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
    <div className="flex items-center justify-center
    min-h-screen">
    <form className="main bg-white rounded-lg shadow-md p-10 
    transition-transform w-96 text-center" onSubmit={handleSubmit}>
    <div>
    <h1 className="text-2xl" >Log In</h1>
        <label class="block mt-4 mb-2 text-lef
            t text-gray-700 font-bold" htmlFor="username"/>
            Username :
        <input type="text" name="username" onChange={handleChange}/>
    </div>
    <div>                
        <label class="block mt-4 mb-2 text-lef
            t text-gray-700 font-bold" htmlFor="password"/>
            Password :
        <input type="password" name="password" onChange={handleChange}/>
    </div>
        <button type="submit" value="Login">Submit</button>
    </form>
        {errorMsg ? <h4 style={{color: "red"}}>{errorMsg}</h4> : ""}
    </div>
  )
}

export default Login
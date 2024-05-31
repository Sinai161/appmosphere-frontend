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
        <div className="flex items-center justify-center
    min-h-screen">
        <form className="main bg-white rounded-lg shadow-md p-10 
    transition-transform w-96 text-center" onSubmit={handleSubmit}>
        <h1 className="text-2xl">Register</h1>
                <label className="block mt-4 mb-2 text-lef
            t " htmlFor="username">
                Username :
                <input type="text" name="username" onChange={handleChange}/>
                </label>
                <label className="block mt-4 mb-2 text-lef
            t " htmlFor="email">
                Email :
                <input type="email" name="email" onChange={handleChange}/>
                </label>
                <label className="block mt-4 mb-2 text-lef
            t " htmlFor="password">
                Password :
                <input type="password" name="password" autoComplete="true"  onChange={handleChange}/>
                </label>
                <label className="block mt-4 mb-2 text-lef
            t " htmlFor="password2">
                Password2 :
                <input type="password2" name="password2" autoComplete="true"  onChange={handleChange}/>
                </label>
            <button type="submit" className="popup-button" value="Login">Submit</button>
        </form>
        </div>

  )
}

export default Register
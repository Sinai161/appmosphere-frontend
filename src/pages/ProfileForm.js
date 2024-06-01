import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Ref. from Unit 3 React
const ProfileForm = (props) => {
    const token = localStorage.getItem("authToken");
    const [profile, setProfile] = useState({
        username:"",
        img:"",
        bio:""
    })

    const handleInput = (event) => {
        console.log("TARGET", event.target.value)
        setProfile({[event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post("http://localhost:8000/api/profile", {profile},
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    
const navigate = useNavigate()

const handleCancel = () => {
    navigate('/feed')
}


return (
    <div className="flex items-center justify-center">
                <form  onSubmit={handleSubmit}>
                <h2 className="text-2xl">Create Profile</h2>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="username"
                            value={profile.username}
                            onChange={handleInput}
                            placeholder="username"
                        />
                    </label>
                    <label>
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="img"
                            value={profile.img}
                            onChange={handleInput}
                            placeholder="img"
                        />
                    </label>
                    <label>
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="bio"
                            value={profile.bio}
                            onChange={handleInput}
                            placeholder="bio"
                            />
                    </label>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  type="submit">Submit</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCancel}  >Cancel</button>
                </form>
    </div>
    )

}

export default ProfileForm
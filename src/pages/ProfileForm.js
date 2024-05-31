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
        setProfile({...profile, [event.target.name]: event.target.event})
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
                    <field className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="username"
                            value={profile.username}
                            onChange={handleInput}
                            placeholder="username"
                        />
                    </field>
                    <field >
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="song"
                            value={profile.img}
                            onChange={handleInput}
                            placeholder="img"
                        />
                    </field>
                    <field>
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="releaseDate"
                            value={profile.bio}
                            onChange={handleInput}
                            placeholder="bio"
                            />
                    </field>
                    <button  type="submit">Submit</button>
                    <button onClick={handleCancel}  >Cancel</button>
                </form>
    </div>
    )

}

export default ProfileForm
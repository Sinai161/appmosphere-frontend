import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FeedForm = () => {
    const token = localStorage.getItem("authToken");
    const [feed, setFeed] = useState({
        img:""
    })

    const handleInput = (event) => {
        setFeed({...feed, [event.target.name]: event.target.event})
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post("http://localhost:8000/api/feed", {feed},
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
        <section>
                <field onSubmit={handleSubmit}>
                <h2 className="text-2xl">Add Post</h2>
                    <field className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="img"
                            name="img"
                            value={feed.img}
                            onChange={handleInput}
                            placeholder="insert img"
                        />
                    </field>
                    <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Submit</button>
                    </div>
                    <div>
                    <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCancel} >Cancel</button>
                    </div>
                </field>
        </section>
    </div>
    )
}

export default FeedForm
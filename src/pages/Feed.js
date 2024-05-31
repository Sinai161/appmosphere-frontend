import axios from 'axios';
import { useState, useEffect, } from 'react'; 
import { useNavigate } from 'react-router';
const Feed = (props) => {
    const [feed, setFeed] = useState([])
    const token = localStorage.getItem("authToken");
    const navigate = useNavigate();

    const handleGetProfile = () => {
        navigate(`/profile/${props.User}`)
      }
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/feed",
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            setFeed(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    

    return (
        <div className="flex items-center justify-center ">
            <div className=" box-content w-96 h-96 p-4">
                <div className="grid gap-5">
                    <h1 className='text-2xl text-center'>Welcome to your Feed</h1>
                    {feed.map((feed) => (
                        <div key={feed.id}>
                            <img onClick={handleGetProfile}  alt='post' src={feed.img} />
                            <div>{feed.User}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
// onClick={() => handleGetProfile()}

export default Feed
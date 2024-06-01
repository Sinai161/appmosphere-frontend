import axios from 'axios';
import { useState, useEffect, } from 'react';
const Feed = () => {
    const [feed, setFeed] = useState([])
    const token = localStorage.getItem("authToken");
    const [user, setUser] = useState(null);

    const fetchUser = async (id) => {
        if (token) {
            const response = await axios.get(`http://localhost:8000/api/user/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                }
            });
            const user = response.data
            setUser(user.data);
        } else {
            console.log("no token");
        }
    };

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

    const addFollow = async (id) => {
        if (token) {
            const response = await axios.post(`http://localhost:8000/api/follow/${id}`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                }
            });
            console.log("Followed", response.data.Profile)
        } else {
            console.log("no token");
        }
    }

    const createFollowButton = (id) => {
        if (user && user.user && user.user._id !== feed.user) {
            if (user.profile) {
                const { profile } = user;
                if (!profile.following || !profile.following.includes(id)) {
                    return (<button onClick={() => addFollow(id)}>Follow</button>)
                }
            }
            return (<p>Following</p>)
        }
    }

    useEffect(() => {
        fetchData();
        fetchUser();
    }, [addFollow])



    return (
        <div className="flex items-center justify-center ">
            <div className=" box-content w-96 h-96 p-4">
                <div className="grid gap-5">
                    <h1 className='text-2xl text-center'>Welcome to your Feed</h1>
                    {feed.map((feed) => (
                        <div key={feed.id}>
                            <img alt='post' src={feed.img} />
                            <div>{createFollowButton(feed.User)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Feed
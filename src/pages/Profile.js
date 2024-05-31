import React, { useState, useEffect } from "react";
import axios from 'axios';
// prop = {User:"string-userId"}
const Profile = (props) => {
    const [profile, setProfile] = useState([])
    const [feed, setFeed] = useState([])
    const [user, setUser] = useState(null);

    const handleFollow = () => {
      axios.post()
        .then(res => {
          setUser({ ...user, followers: [...user.followers, props.User] });
  })
  .catch(err => console.log(err));
  }
    const token = localStorage.getItem("authToken");

    const fetchData = async () => {
        try {
            const url = props.User ? `http://localhost:8000/api/profile/${props.User}` : "http://localhost:8000/api/profile"
            console.log("URL", url)
            const response = await axios.get(url,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

            setProfile(response.data.data.foundProfile);
            setFeed(response.data.data.foundFeed);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="flex items-center justify-center
    min-h-screen">
            {profile.map((profile) => (
                <div key={profile.id}>
                    <h1 className="text-2xl">{profile.username}</h1>
                    <img className="rounded-full" src={profile.img} alt="profile-pc" style={{ width: "30%" }} />
                    <div>{profile.bio}</div>
                    <div>{profile.followers}</div>
                    <button onClick={handleFollow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Follow</button>
                </div>
            ))}
            <div>
            {feed.map((feed) => (
                <div key={feed.id}>
                    <img className="rounded-full" src={feed.img} alt="profile-pc" style={{ width: "30%" }} />
                </div>
            ))}
            </div>
            
        </div>

    )


}

export default Profile
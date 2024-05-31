import React, {useState, useEffect } from "react";
import axios from 'axios';
const Profile = () => {
    const [profile, setProfile] = useState([])
    const [feed, setFeed] = useState([])
    const token = localStorage.getItem("authToken");

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/profile",  
            {headers: {
                'Authorization': `Bearer ${token}`
              }});
            setProfile(response.data.data);
        }catch(error) {
            console.error("Error fetching data:", error);
        }
    }

    const fetchData2 = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/profile",  
            {headers: {
                'Authorization': `Bearer ${token}`
              }});
            setFeed(response.data.data);
        }catch(error) {
            console.error("Error fetching data:", error);
        }
    }


useEffect(() => {
    fetchData()
    fetchData2();
},)

return (
    <div className="flex items-center justify-center
    min-h-screen">
    {profile.map((profile) => (
        <div key={profile.id}>
          <h1 className="text-2xl">{profile.username}</h1>
          <img className="rounded-full"  src={profile.img} alt="profile-pc" style={{ width: "30%" }}/>
          <div>{profile.bio}</div>
        </div>
    ))}
    {feed.map((feed) => (
        <div key={feed.id}>
          <img className="rounded-full"  src={feed.img} alt="profile-pc" style={{ width: "30%" }}/>
        </div>
    ))}
    </div>

  )


}

export default Profile
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Profile = (props) => {
    const URL = process.env.REACT_APP_URL
    const [profile, setProfile] = useState([])
    const [feed, setFeed] = useState([])

    const token = localStorage.getItem("authToken");

    const fetchData = async () => {
        try {
            const url = props.User ? `${URL}profile/${props.User}` : `${URL}profile`
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
                </div>
            ))}
            <div></div>
            {feed.map((feed) => (
                <div key={feed.id}>
                    <img className="rounded-full" src={feed.img} alt="profile-pc" style={{ width: "30%" }} />
                </div>
            ))}
            
        </div>
    )


}

export default Profile
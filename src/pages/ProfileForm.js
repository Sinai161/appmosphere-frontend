import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Ref. from Unit 3 React
const ProfileForm = (props) => {
    const newProfileForm = {
        username: "",
        img: "",
        bio: "",
    }

const [form, setForm] = useState(newProfileForm);

const navigate = useNavigate()

const handleChange = (index) => {
    setForm({...form, [index.target.name]: index.target.value})
}

const handleSubmit = (index) => {
    index.preventDefault();
    props.createArtist(form);
    setForm(newProfileForm);
};

const handleCancel = () => {
    navigate('/')
}


return (
    <div className="container">
        <section className="form-section">

            <h2 className="artist">Create Profile</h2>
                <form className="style-up" onSubmit={handleSubmit}>
                    <field>
                        <input
                            type="text"
                            name="artist"
                            value={form.artist}
                            onChange={handleChange}
                            placeholder="Artist"
                        />
                    </field>
                    <field >
                        <input
                            type="text"
                            name="song"
                            value={form.song}
                            onChange={handleChange}
                            placeholder="Song"
                        />
                    </field>

                    <field>
                        <input
                            type="text"
                            name="releaseDate"
                            value={form.releaseDate}
                            onChange={handleChange}
                            placeholder="Release Date"
                            />
                    </field>
                    <field>
                        <input
                            type="text"
                            name="genre"
                            value={form.genre}
                            onChange={handleChange}
                            placeholder="Genre"
                        />
                    </field>
                    <field>
                        <input
                            type="text"
                            name="album"
                            value={form.album}
                            onChange={handleChange}
                            placeholder="Album"
                        />
                    </field>
                    <field>
                        <input
                            type="text"
                            name="image"
                            value={form.photo}
                            onChange={handleChange}
                            placeholder="Image URL"
                        />
                    </field>

                    <button className="popup-button" type="submit">Submit</button>
                    <button onClick={handleCancel} className="popup-button" >Cancel</button>
                </form>
        </section>
    </div>
    )

}

export default ProfileForm
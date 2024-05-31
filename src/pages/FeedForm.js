import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedForm = () => {
    const newFeedForm = {
        img: "",
        user: "",
    }

const [form, setForm] = useState(newFeedForm);

const navigate = useNavigate()

const handleChange = (index) => {
    setForm({...form, [index.target.name]: index.target.value})
}

const handleSubmit = (index) => {
    index.preventDefault();
    setForm(newFeedForm);
};

const handleCancel = () => {
    navigate('/feed')
}


return (
    <div className="container">
        <section className="form-section">
            <h2 className="artist">Add Post</h2>
                <form className="style-up" onSubmit={handleSubmit}>
                    <field>
                        <input
                            type="img"
                            name="img"
                            value={FeedForm.img}
                            onChange={handleChange}
                            placeholder="insert img"
                        />
                    </field>
                  

                    <button type="submit">Submit</button>
                    <button onClick={handleCancel} >Cancel</button>
                </form>
        </section>
    </div>
    )

}

export default FeedForm
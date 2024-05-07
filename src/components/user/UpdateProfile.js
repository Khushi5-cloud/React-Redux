// UpdateProfile.js 

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateProfile } from "../../redux/UserSlice";
import UserService from "../../services/UserService";

const UpdateProfile = () => {
    console.log('UpdateProfile');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector(store => store.user.jwtToken);
    console.log(userData);
    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        console.log(evt.target);
        console.log(formData);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        console.log(formData);
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            console.log(user);
            dispatch(userUpdateProfile(user));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST')
                alert(error.message);
        }
    };

    return (
        <>

<div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>

            <div class="card" style={{ width: "50rem" }}>
                <div class="card-header" style={{ fontSize: '26px' }}>
                    <strong>Update Your Profile</strong>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="input-group mb-3" style={{ width: '50rem' }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">First Name</span>
                        </div>
                        <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3" style={{ width: '50rem' }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Last Name</span>
                        </div>
                        <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3" style={{ width: '50rem' }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                        </div>
                        <input type="number" className="form-control" name="phone" value={formData.phone} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3" style={{ width: '50rem' }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        </div>
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group mb-3" style={{ width: '50rem' }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Avatar</span>
                        </div>
                        <input type="text" className="form-control" name="avatar" value={formData.avatar} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <button type="submit" class="btn btn-primary">Update Your Profile</button>
                </form>

            </div>

        </div>






        </>
    );
};

export default UpdateProfile;

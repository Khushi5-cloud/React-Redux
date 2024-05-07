import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        <>

        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
            <div class="card" style={{ width: "50rem"}}>
                <div class="card-header" style={{ fontSize: '26px' }}>
                    <strong>User Profile</strong>
                    
                </div>
                {userData && (
                <ul class="list-group list-group-flush">
                    {userData.avatar && <img width={'200px'} height={'300px'} src={userData.avatar} alt="Avatar" />}
                    <li class="list-group-item"><strong>Username</strong> : {userData.username}</li>
                    <li class="list-group-item"><strong>First name</strong> : {userData.firstName}</li>
                    <li class="list-group-item"><strong>Last name</strong> : {userData.lastName}</li>
                    <li class="list-group-item"><strong>Phone</strong> : {userData.phone}</li>
                    <li class="list-group-item"><strong>Email</strong> : {userData.email}</li>
                    
                </ul>
                )}
            </div>
        </div>
        
                <UpdateProfile/>

        </>
    );
};

export default Profile;

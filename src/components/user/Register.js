import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerData);
        UserService.registerUser(registerData)
            .then((response) => {
                console.log(response);
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`You have already registered`);
            });

    };

    return (
        <>
    
        {/*
            <p>Register here</p>
            <form onSubmit={handleRegisterSubmit}>
                <input type="text" name="username" value={registerData.username}
                    onChange={handleChange} autoFocus required />
                <br />
                <input type="password" name="password" value={registerData.password}
                    onChange={handleChange} required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <>
                <p>{afterRegisterMessage && afterRegisterMessage} </p>
            </>
            <p>Already registered? <Link to={'/login'}>Login</Link> </p>
    */}

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
                <div style={{ border: "1px solid #ccc", padding: "20px", width: "30rem" }}>
                    <h2 style={{ color: "blue" }}>Register Page</h2>


                    <form onSubmit={handleRegisterSubmit}>
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" className="form-control" name="username" value={registerData.username} placeholder="Enter username" onChange={handleChange} />

                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" name="password" value={registerData.password} placeholder="Enter password" onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <>
                    <p>{afterRegisterMessage && afterRegisterMessage} </p>
                    </>
                    <p>Already registered? <Link to={'/login'}>Login</Link> </p>
                </div>
            </div>

        </>
    );
};
export default Register;
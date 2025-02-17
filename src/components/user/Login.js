import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log(loginData);
        UserService.loginUser(loginData)
            .then((response) => {
                console.log(response);
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/profile');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    return (
        <>

            {/*
                   <h1>Login Component</h1>
            <p>Login here</p>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="username" value={loginData.username}
                    onChange={handleChange} autoFocus required />
                <br />
                <input type="password" name="password" value={loginData.password}
                    onChange={handleChange} required />
                <br />
                <input type="submit" value="Login" />
            </form>
            {afterSubmit && <p>{afterSubmit}</p>}
            <p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
    */}
            

            

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
                <div style={{ border: "1px solid #ccc", padding: "20px", width: "30rem" }}>
                    <h2 style={{ color: "blue" }}>Login Page</h2>


                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={loginData.username} onChange={handleChange} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={loginData.password} onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    {afterSubmit && <p>{afterSubmit}</p>}
                    <p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
                </div>
            </div>
        
        </>




    )
};
export default Login;
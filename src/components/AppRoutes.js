import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Login from "./user/Login";
import Parent from "./Parent";
import Employee from './Employee';
import Home from "./Home";
import Page404 from './Page404';
//import Menubar from "./Menubar";
import Register from './user/Register';
import Profile from "./user/Profile";
import Logout from './user/Logout';
import { useSelector } from "react-redux";

const AppRoutes = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus) {
        return (
            <>
                {/*
                <BrowserRouter>
                    <Menubar />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="emp" element={<Employee />} />
                        <Route path="parent" element={<Parent />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="profile" element={<Profile />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
               */}

                <BrowserRouter>

                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <strong style={{ color: 'blue', fontSize: '27px'}}>IBM</strong>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" style={{color:'white'}}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/emp" style={{color:'white'}}>Employee</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/parent" style={{color:'white'}}>Parent</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" style={{color:'white'}}>Logout</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile" style={{color:'white'}}>Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="emp" element={<Employee />} />
                        <Route path="parent" element={<Parent />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="profile" element={<Profile />} />
                    </Routes>


                </BrowserRouter>
            </>
        );
    }
    else {
        return (
            <>
                {/*
                <BrowserRouter>
                    <Menubar />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
        */}



                <BrowserRouter>

                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <strong style={{ color: 'blue', fontSize: '27px' }}>IBM</strong>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" style={{color:'white'}}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" style={{color:'white'}}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" style={{color:'white'}}>Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="*" style={{color:'white'}}>Page404</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </  BrowserRouter>
            </>
        );
    }
};

export default AppRoutes;



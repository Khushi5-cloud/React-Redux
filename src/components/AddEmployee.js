// import axios from "axios";
// import { useState } from "react";

// const AddEmployee = () => {

//     const backendUrl = 'https://jsonplaceholder.typicode.com/users';
//     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });

//     const handleChange = (evt) => {
//         console.log(evt.target);
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(empData);
//         axios.post(backendUrl, empData)
//             .then((resp) => {
//                 console.log(resp.data);
//                 alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
//                 setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
//             });
//     };

//     return (
//         <>
//             <h1>Add Employee Component</h1>
//             <form onSubmit={handleSubmit} >
//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//                 <br />
//                 <label htmlFor="aadhaar">Aadhaar:</label>
//                 <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//                 <br />
//                 <label htmlFor="salary">Salary:</label>
//                 <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//                 <br />
//                 <input type="submit" value="Add Employee" />
//             </form>
//         </>
//     );
// };

// export default AddEmployee;






import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {
    const backendUrl = 'http://localhost:8080/add-emp';
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }
    /*
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }
    */

        if (!/^\d{12}$/.test(empData.aadhaar)) {
            newErrors.aadhaar = "Aadhaar must be a 12-digit number";
            isValid = false;
        }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post(backendUrl, empData)
                .then((resp) => {
                    alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
                    setEmpData({firstname:'',email:'',aadhaar:'',salary:'' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

    return (
        <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
            <div class="card" style={{ width: "50rem" }}>
                <div class="card-header" style={{ fontSize: '26px' }}>
                    <strong>Add Employee</strong>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="firstName">Name</label>
                        <input type="text" className="form-control" id="firstNname" name="firstName" value={empData.firstName} onChange={handleChange} />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" class="form-control" id="email" value={empData.email} name="email" onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    
                    <div class="form-group">
                        <label htmlFor="aadhaar">Aadhar</label>
                        <input type="number" class="form-control" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} />
                        {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
                    </div>
    
                    <div class="form-group">
                        <label htmlFor="salary">Salary</label>
                        <input type="number" class="form-control" id="salary" value={empData.salary} name="salary" onChange={handleChange} />
                        {errors.salary && <span className="error">{errors.salary}</span>}
                    </div>

                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default AddEmployee;


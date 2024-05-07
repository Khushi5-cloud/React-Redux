/*
import axios from "axios";
import { useEffect, useState } from "react";




const EmpList = () => {

    const [empList, setEmpList] = useState('');

    useEffect(() => {
        console.log('useEffect');
        //axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('http://localhost:8080/allemp')
            .then((resp) => {
                console.log(resp.data);
                setEmpList(resp.data);
            })
    }, []);
    
    const handleDelete= async (eid)=>{
        try{
        console.log(eid);
        await axios.delete(`http://localhost:8080/delete/${eid}`);
        setEmpList(empList.filter(emp=>emp.eid!==eid));
        }catch(error){
            console.error('Error',error);
            throw new error(error);
            

        }
    };
    return (
        <>
    
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
            <div class="card" style={{ width: "50rem" }}>
                <div class="card-header" style={{ fontSize: '26px' }}>
                    <strong>Employee List</strong>
                </div>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Gmail</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                    
                <tbody>
                    {empList && empList.map(emp =>
                        <tr key={emp.eid}>
                            <td >{emp.firstName} </td>
                            <td >{emp.salary} </td>
                            <td>{emp.gmail}</td>
                            <td>
                            <button type="button" className="btn btn-outline-danger" onClick={()=>handleDelete(emp.eid)}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            
                
            </table>
            </div>
        </div>
        </>

    );
};

export default EmpList;
*/

import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        axios.get('http://localhost:8080/allemp')
            .then((resp) => {
                console.log(resp.data);
                setEmpList(resp.data);
            })
    }, []);
    
    const handleDelete = async (id) => {
        try {
            console.log(id);
            await axios.delete(`http://localhost:8080/delete/${id}`);
            setEmpList(empList.filter(emp => emp.id !== id));
        } catch(error) {
            console.error('Error', error);
            throw new Error(error);
        }
    };

    return (
        <>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
                <div class="card" style={{ width: "50rem" }}>
                    <div class="card-header" style={{ fontSize: '26px' }}>
                        <strong>Employee List</strong>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empList.map(emp =>
                                <tr key={emp.id}>
                                    <td>{emp.name}</td>
                                    <td>{emp.salary}</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default EmpList;



// import axios from "axios";
// import { useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     const getEmpList = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp);
//                 setEmpList(resp.data);
//             })
//     };

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <p> {empList && empList.length} </p>
//             <button onClick={getEmpList}>Get Emp List</button>

//         </>
//     );
// };

// export default EmpList;

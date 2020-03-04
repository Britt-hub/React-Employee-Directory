import React, { useContext, useState } from "react";
import "../styles/DataTable.css";
import "../components/Body"
import DataAreaContext from "../utils/DataAreaContext"

// const DataTable = () => {
//     const context = useContext(DataAreaContext);

// }

function DataTable() {
const [url] = useState("https://randomuser.me/api/?results=10")
    
    // const { sortFunc } = fetch(url);
    const { displayedEmployees, searchValue } = useContext(DataAreaContext)
    const [employees, setEmployees] = useState(displayedEmployees)      

    const sortFunc = (col) => {
        setEmployees(displayedEmployees.filter(e => {
            console.log(searchValue)
           return e.name.last.indexOf(searchValue) >= 0
        }))
    }

    return (

        <table>
            <thead>
                <tr>
                    <td onClick={() => sortFunc("name")}><button>First Name</button></td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td onClick={() => sortFunc("age")}></td>
                </tr>
            </thead>
       
        <tbody>
            {employees.map(employee => {
                return (
                    <tr key={employee.name.first}>
                    <td>{employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dob.age}</td>
</tr>

                )
            })}

        </tbody>
        </table>
    )
}

// have no idea what im doing with this file but here it goes....


export default DataTable;
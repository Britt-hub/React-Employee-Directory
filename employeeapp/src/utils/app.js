import React, {useState} from "react";
import Main from "../components/Main";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Nav from "../components/Nav";
import DataTable from "../components/DataTable"

// import Index from "./Index";
// import "./styles/app.css";

//uncomment this out if what Im doing is working 
// function App() {
//   return (
//     <div className="App">
//       <Wrapper>
//         <Header />
//         <Main />
//       </Wrapper>
//     </div>
//   );
// }
//uncomment this out if what Im doing is working (above)
/////////////////////////////////////////////////////
const EmployeeContext = React.createContext()


function App() {
  const [employee, setEmployees] = useState([]);
  const [displayedEmployees, setDisplayedEmployees] = useState([])
  

  return (
    <div className="App">
      <EmployeeContext.Provider value={{ employee, setEmployees, displayedEmployees, setDisplayedEmployees }}></EmployeeContext.Provider>
            <Wrapper>
       <Header />
        <Main />
        <DataTable />
       </Wrapper>

     
      <EmployeeContext.Provider />
    </div>
  );
}

export default App;
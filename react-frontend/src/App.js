import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeCompinent from './components/ViewEmployeeCompinent';

// created to use router props in react router v6.*
export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       const navigate = useNavigate();
       return <Children {...props}  match = {match} navigate = {navigate}/>
   }
}

function App() {
  return (
    <Router>
      
        <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route path='/' element={<ListEmployeeComponents/>}/>
            <Route path='/employees' element={<ListEmployeeComponents/>}/>
            <Route path='/add-employee' element={<CreateEmployeeComponent/>}/>
            <Route path='/update-employee/:id' element={<UpdateEmployeeComponent/>}/>
            <Route path='/view-employee/:id' element={<ViewEmployeeCompinent/>}/>
          </Routes> 
        </div>
        <FooterComponent/>
      
    </Router>
    
    
  );
}

export default App;

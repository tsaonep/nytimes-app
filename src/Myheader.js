import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';


function Myheader(){
  return(
<div className='headerDiv' class="parent container d-flex justify-content-center align-items-center h-100 mb-3">

 <img  src={logo} alt="Logo" />;
    
 </div>

  )
}

export default Myheader;

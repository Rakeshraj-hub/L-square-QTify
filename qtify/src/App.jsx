
import './App.css'
import Navbar from './components/Navbar';
import Poster from './components/Poster';
import Cards from './components/Cards';
import Api from './components/Api';

function App() {


  
  return (
    <div>
      <Navbar />
      <div className='main-content'>
      <Poster />
      <Api />
      </div>
    </div>
  );
 

}









 
export default App

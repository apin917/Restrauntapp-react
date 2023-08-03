import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AllRest from './Components/AllRest/AllRest';
import { Routes,Route } from 'react-router-dom';
import  View from './Components/ViewRest/View';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <Routes>
          {/* localhost: //3000 - all restraunt view  */}
          <Route path='/' element={<AllRest/>} />
          <Route path='/view/:id' element={<View/>} />
        </Routes>
         <Footer/>
    
      </header>
    </div>
  );
}

export default App;

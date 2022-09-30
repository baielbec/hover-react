import './Style/App.scss';
import Header from "./componentes/Header/Header";
import Hero from "./componentes/Hero/Hero";
import About from "./componentes/About/About";
import Invest from "./componentes/Invest/Invest";
import Best from "./componentes/Best/Best";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Invest/>
        <Best/>
    </div>
  );
}

export default App;

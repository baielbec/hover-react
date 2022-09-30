import './Style/App.scss';
import Header from "./componentes/Header/Header";
import Hero from "./componentes/Hero/Hero";
import About from "./componentes/About/About";
import Invest from "./componentes/Invest/Invest";
import Best from "./componentes/Best/Best";
import Become from "./componentes/Become/Become";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Invest/>
        <Best/>
        <Become/>
    </div>
  );
}

export default App;

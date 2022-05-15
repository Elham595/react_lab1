import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
function App() {
  let ListOfProduct=[
    
    {name:'Coffe',description:'BestSeller Drink Here',ProIMG:'motivation1.jpg'},
    {name:'Tea',description:'Popular Drink Here',ProIMG:'motivation3.jpg'},
    {name:'Juice',description:'Summer Drink Here',ProIMG:'motivation1.jpg'},
    {name:'xxxx',description:' Helloooooooooo',ProIMG:'motivation3.jpg'},
    {name:'yyyy',description:'Hiiiiiiiiiiiiiiiiii',ProIMG:'motivation1.jpg'},
  ];
  return (
  
    <div className="App">
       <Header/>
       <ProductList data={ListOfProduct}/>
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <Footer/>
    </div>
   

  );
}

export default App;

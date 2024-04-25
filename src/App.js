import logo from './logo.svg';
import './App.css';
import LoginDetails from './Pages/login';
import RegisterDetails from './Pages/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/home';
import Navbar from './Components/navbar';
import NotFound from './Pages/notfound';
import Movies from './Pages/products';
import ProductDetails from './Pages/productdetails';
import { useSelector } from 'react-redux';
import Favorites from './Pages/favorits';
import Header from './Components/header';
import Cards from './Pages/card';
import Footer from './Components/footer';

function App() {
  const myTheme = useSelector((state) => state.themeR.theme);

  return (
    
    // <div class={`${myTheme === 'Light' ? "bg-light text-dark" : "bg-dark text-light"}`}>
    <div>
    <BrowserRouter>
    <Navbar/>
    
    <Switch>
      <Route component={Movies} path="/" exact/>
      <Route component={LoginDetails} path="/login" exact/>
      <Route component={RegisterDetails} path="/register" exact/>
      <Route component={ProductDetails} path="/ProductDetails/:id" exact/>
      <Route component={Favorites} path="/favourits" exact/>
      <Route component={Cards} path="/cards" exact/>
      <Route component={NotFound} path="*" />


    </Switch>
    {/* <Footer/> */}
    </BrowserRouter>
  
    </div>
    

  );
}

export default App;

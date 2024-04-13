import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import { Component } from 'react';
import store from './store/store';
import LoginPage from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductDetail from './pages/ProductDetail/ProductDetail';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/product-detail/:id' element={<ProductDetail />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}




const PrivateRoute = ({ element: Element, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('isLogged'));

  return (
    <Route
      {...rest}
      element={user ? <Element /> : <Navigate to="/" replace />}
    />
  );
};

export default App;
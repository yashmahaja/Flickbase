import '../src/styles/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Header from './components/navigation/header';
import Home from './components/home'
import MainLayout from './hoc/mainLayout';
const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <MainLayout>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </MainLayout>
    </BrowserRouter>
  );
}
 
export default Router;

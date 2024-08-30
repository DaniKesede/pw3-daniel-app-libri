import Home from './COMPONENTS/pages/Home'
import ListBooks from './COMPONENTS/pages/ListBooks';
import CreateBooks from './COMPONENTS/pages/CreateBooks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./COMPONENTS/Layout/NavBar"
import Container from "./COMPONENTS/Layout/Container"

function App() {
  
  return (
    <>

      <BrowserRouter >

        <Container>

          <Routes>

            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/listBook' element={<ListBooks/>}/>
              <Route path='/createBook' element={<CreateBooks/>}/>
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>

    </> 
  );
};

export default App
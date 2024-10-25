import Home from './COMPONENTS/pages/Home';
import ListBooks from './COMPONENTS/pages/ListBooks';
import CreateBooks from './COMPONENTS/pages/CreateBooks';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./COMPONENTS/Layout/NavBar";
import Container from "./COMPONENTS/Layout/Container";
import DetailBook from "../src/COMPONENTS/pages/DetailBook";

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
              <Route path='/detailBook/:cod_livro' element={<DetailBook/>}/>
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>

    </> 
  );
};

export default App
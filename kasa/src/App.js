import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Error404 from './pages/Error404';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import { logementsList } from './data.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route path="/FicheLogement/{logement.id}" element={<FicheLogement/>} />
    <Route path="/APropos" element={<APropos/>} />
    <Route path="*" element={<Error404/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

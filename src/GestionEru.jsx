import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListEtu from "./ListEtu";

const GestionEtu = () => {
  return (
    <>
      <header>
        <h1>Gestion Des Etudinats</h1>
      </header>
      <BrowserRouter>
      <nav>
        <ul>
            <li><Link to='/'>List Des Etudinats</Link></li>
            <li><Link to='/ajout'>Ajouter Un Etudinat</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ListEtu />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default GestionEtu;

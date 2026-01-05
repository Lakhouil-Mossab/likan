import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetudiant } from "./slice";

const ListEtu = () => {
    const dispatch=useDispatch()
    const {etudiants,status} = useSelector((state) => state.Etudiants);
    useEffect(()=>{
        if (status==='idel'){
            dispatch(Fetudiant());
        }
    },[status,dispatch])
    if (status==='loading') return
    <p>
        ...loading
    </p>;

  return (
    <>
      <h2> Liste Des Etudiants</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Filiere</th>
            <th>Date De Nessance</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((e) => (
            <tr>
              <td>{e.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ListEtu;

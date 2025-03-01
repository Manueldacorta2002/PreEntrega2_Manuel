import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/categoria/placa-de-video">Placa de Video</Link>
      <Link to="/categoria/procesador">Procesador</Link>
      <Link to="/categoria/memoria-ram">Memoria RAM</Link>
    </nav>
  );
}

export default NavBar;

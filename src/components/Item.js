import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div>
      <h3>{item.nombre}</h3>
      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
}

export default Item;

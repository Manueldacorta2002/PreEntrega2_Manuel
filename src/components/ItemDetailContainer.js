import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { id: 1, nombre: "RTX 4090", descripcion: "Placa de video gamer" },
          { id: 2, nombre: "Ryzen 9 7950X", descripcion: "Procesador potente" },
          { id: 3, nombre: "Corsair 32GB", descripcion: "Memoria RAM DDR5" },
        ];
        resolve(data.find(p => p.id === Number(itemId)));
      }, 1000);
    });

    fetchProducto.then(setProducto);
  }, [itemId]);

  return producto ? (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <button>Añadir al carrito</button>
    </div>
  ) : (
    <p>Cargando...</p>
  );
}

export default ItemDetailContainer;

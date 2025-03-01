import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

function ItemListContainer() {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { id: 1, nombre: "RTX 4090", categoria: "placa-de-video" },
          { id: 2, nombre: "Ryzen 9 7950X", categoria: "procesador" },
          { id: 3, nombre: "Corsair 32GB", categoria: "memoria-ram" },
        ];
        resolve(categoriaId ? data.filter(p => p.categoria === categoriaId) : data);
      }, 1000);
    });

    fetchProductos.then(setProductos);
  }, [categoriaId]);

  return (
    <div>
      <h2>Catálogo {categoriaId ? `de ${categoriaId}` : ""}</h2>
      {productos.length > 0 ? (
        productos.map(prod => <Item key={prod.id} item={prod} />)
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
}

export default ItemListContainer;

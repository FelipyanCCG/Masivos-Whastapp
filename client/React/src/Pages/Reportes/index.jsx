import { Layout } from "../../Components/Layout";

const Reportes = () => {
  const datos = [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "edad": 25,
      "ciudad": "Bogotá"
    },
    {
      "id": 2,
      "nombre": "María García",
      "edad": 30,
      "ciudad": "Medellín"
    },
    {
      "id": 3,
      "nombre": "Carlos Rodríguez",
      "edad": 28,
      "ciudad": "Cali"
    },
    {
      "id": 4,
      "nombre": "Laura Martínez",
      "edad": 22,
      "ciudad": "Barranquilla"
    },
    {
      "id": 5,
      "nombre": "Pedro López",
      "edad": 35,
      "ciudad": "Cartagena"
    }
  ];

  return (
    <Layout title={'Reportes'}>
      <div>
        <h2>Tabla de Reportes</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.id}</td>
                <td>{registro.nombre}</td>
                <td>{registro.edad}</td>
                <td>{registro.ciudad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export { Reportes };

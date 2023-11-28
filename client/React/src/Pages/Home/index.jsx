import React, { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { MasivosContext } from '../../Context';
import { TbReportSearch } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

function Home() {
  const context = useContext(MasivosContext);

  return (
    <Layout title={context.homeDataClient.attributes.name}>
      <div className="p-2 bg-white w-5/6">
        <div className="flex justify-between">
          <div className="rounded-lg shadow-xl border bg-white w-4/6">
            <div className="p-4 w-full h-30">
              <h2 className="text-2xl font-semibold mb-2">Plantilla</h2>
              <p className="text-gray-700 text-base">
                Escoja la plantilla que desea enviar verificada por meta.
              </p>
              <select
                id="selectPlantilla"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-2 p-2 my-2"
                defaultValue="DiBanka"
                onChange={(e) => {
                  context.setPlantilla(e.target.value);
                }}
              >
                <option value="conocedibanka">conocedibanka</option>
                <option value="presentacion">presentacion</option>
                <option value="canales">canales</option>
                <option value="pensionados">pensionados</option>
              </select>
              <h2 className="text-2xl font-semibold mt-4">Envío de ejemplo</h2>
              <p className="text-gray-700 text-base">
                Ingrese su número de teléfono para enviar una prueba.
              </p>
              <div className="flex">
                <input
                  id="numeroEjemplo"
                  type="text"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-2 p-2 my-2"
                />
                <button
                  type="button"
                  className="ml-2 bg-[#0096C8] text-white text-sm rounded-lg focus:ring-2 focus:border-2 p-2 my-2"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="ml-6 rounded-lg overflow-hidden shadow-xl border bg-white w-2/6">
            <div className="flex items-center justify-center h-60">
              <img
                src={context.homeDataClient.attributes.image}
                alt="Thomas Edison"
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg overflow-hidden border shadow-xl bg-white">
  <div className="p-4">
    <div className="p-5 mb-4 mt-3 rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Masivos WhatsApp</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-gray-700 text-base mb-4">
          Ingrese los números de teléfono para enviar
        </div>
        <div className="text-right">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0096C8]"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Manual</span>
          </label>
        </div>
      </div>

      <input type="file" class="block w-full text-sm text-gray-500
      file:me-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-[#0096C8] file:text-white
      hover:file:bg-blue-700
      file:disabled:opacity-50 file:disabled:pointer-events-none
      dark:file:bg-[#0096C8]
      dark:hover:file:bg-[#0081C1]
    "/>
      <div className="flex justify-between">
        <div className="flex items-center mt-8">
        <button
            id="enviarArchivo"
            className="bg-[#0096C8] text-white text-sm rounded-lg p-2 m-3 "
            type="button"
            disabled
          >
            Enviar
          </button>
        <p id="cantidadRegistros" className="font-bold ml-3">
          Registros en el archivo: 0
        </p>
        <p id="registrosCorrectos" className="ml-3">

        </p>
        <p id="registrosIncorrectos" className="ml-3">

        </p>
        </div>
        <NavLink
        to = "/Reportes"
        className="mt-16 text-3xl text-[#0096C8] transform hover:scale-150 transition-transform duration-200 font-bold">
        <TbReportSearch />
        </NavLink>

      </div>
    </div>
  </div>
</div>

      </div>
    </Layout>
  );
}

export { Home };

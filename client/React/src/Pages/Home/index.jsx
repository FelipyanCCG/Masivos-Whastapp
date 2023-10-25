import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { MasivosContext } from '../../Context';

function Home() {
  const context = useContext(MasivosContext);

  return (
    <Layout>
      <div className="p-4 bg-gray-200">
        <h1 className="text-3xl font-medium mb-4">{context.homeDataClient.attributes.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Plantilla</h2>
              <p className="text-gray-700 text-base">
                Escoja la plantilla que desea enviar verificada por meta.
              </p>
              <select id="selectPlantilla" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-2 p-2 my-2">
                <option value="conocedibanka">conocedibanka</option>
                <option value="presentacion">presentacion</option>
                <option value="canales">canales</option>
                <option value="pensionados">pensionados</option>
              </select>
              <h2 className="text-2xl font-semibold mt-4">Envío de ejemplo</h2>
              <p className="text-gray-700 text-base">Ingrese su número de teléfono para enviar una prueba.</p>
              <div className="flex">
                <input id="numeroEjemplo" type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-2 p-2 my-2" />
                <button type="button" className="ml-2 bg-blue-500 text-white text-sm rounded-lg focus:ring-2 focus:border-2 p-2 my-2">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="p-4">
              <img src={context.homeDataClient.attributes.image} alt="Thomas Edison" />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="p-4">
            <div className="bg-gray-50 p-5 mb-4 mt-3 rounded-md">
              <h1 className="text-2xl font-semibold">Masivos WhatsApp</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="text-lg">
                  Ingrese los números de teléfono para enviar
                </div>
                <div className="text-right">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">Manual</span>
                  </label>
                </div>
              </div>
              <input type="file" id="archivoExcel" accept=".xlsx" className="form-input mb-3" />
              <div id="inputNumeros">
                <div className="mb-4">
                  <span className="block text-gray-700">Números de Teléfono</span>
                  <textarea id="inputtextarea" className="form-input h-24 rounded-lg" aria-label="Números de Teléfono"></textarea>
                </div>
              </div>
              <div className="flex items-center">
                <div id="ContEnviarArchivo">
                  <button id="enviarArchivo" className="bg-blue-500 text-white text-sm rounded-lg p-2 mr-3" type="button" disabled>
                    Enviar
                  </button>
                </div>
                <p id="cantidadRegistros" className="font-bold">Registros en el archivo: 0</p>
                <p id="registrosCorrectos" className="ml-3"></p>
                <p id="registrosIncorrectos" className="ml-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { Home };

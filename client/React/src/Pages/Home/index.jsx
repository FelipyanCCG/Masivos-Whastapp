import { Layout } from '../../Components/Layout'

function Home() {

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">DiBanka</h1>
            </div>

            <div className="w-full flex justify-evenly">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300">
                    <div className="px-6 py-4">
                        <h2 className="font-bold text-xl mb-2">Plantilla</h2>
                        <p className="text-gray-700 text-base">
                            Escoja la plantilla que desea enviar verificada por meta.
                        </p>
                        <select id="selectPlantilla" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-2 mb-2">
                            <option selected>Escoja una plantilla</option>
                            <option value="conocedibanka">conocedibanka</option>
                            <option value="presentacion">presentacion</option>
                            <option value="canales">canales</option>
                            <option value="pensionados">pensionados</option>
                        </select>
                        
                        <h2 className="font-bold text-xl mb-2">Envío de ejemplo</h2>
                        <p className="text-gray-700 text-base">Ingrese su número de teléfono para enviar una prueba.</p>
                        <div className="input-group mb-3">
                            <div id="ContEnviarEjemplo">
                            <input id="numeroEjemplo" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-2 mb-2" />
                            <button type="button" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-2 mb-2">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300">
                    <div className="px-6 py-4">
                        <img src='https://www.shutterstock.com/shutterstock/photos/2270265539/display_1500/stock-vector-the-illustration-and-vector-of-the-portrait-of-thomas-edison-with-the-light-bulb-thomas-edison-was-2270265539.jpg'></img>
                    </div>
                </div>
                
            </div>

            <div className="m-full rounded overflow-hidden shadow-lg bg-gray-300 mt-4">
                    <div className="px-6 py-4">
                        <img src='https://www.shutterstock.com/shutterstock/photos/2270265539/display_1500/stock-vector-the-illustration-and-vector-of-the-portrait-of-thomas-edison-with-the-light-bulb-thomas-edison-was-2270265539.jpg'></img>
                    </div>
                </div>
        </Layout>
    );


}

export { Home }
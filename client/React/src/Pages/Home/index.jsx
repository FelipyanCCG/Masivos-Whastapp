import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { MasivosContext } from '../../Context';

function Home() {
    const context = useContext(MasivosContext);
    
    return (
        <Layout>
            <div className="flex items-center justify-center mb-4">
                <h1 className="text-3xl font-medium">Contact Center Group</h1>
            </div>
            <div className="container mx-full my-full bg bg-gray-200">
                <div className='flex justify-between'>
                    <div className="mr-4 rounded-lg overflow-hidden shadow-lg bg-gray-300">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Plantilla</h2>
                            <p className="text-gray-700 text-base">
                                Escoja la plantilla que desea enviar verificada por meta.
                            </p>
                            <select value="conocedibgam" id="selectPlantilla" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 my-2">
                                <option value="conocedibanka">conocedibanka</option>
                                <option value="presentacion">presentacion</option>
                                <option value="canales">canales</option>
                                <option value="pensionados">pensionados</option>
                            </select>

                            <h2 className="text-xl font-semibold mt-2">Envío de ejemplo</h2>
                            <p className="text-gray-700 text-base">Ingrese su número de teléfono para enviar una prueba.</p>
                            <div className="flex">
                                <input id="numeroEjemplo" type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 my-2" />
                                <button type="button" className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 my-2">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-300">
                    <div className="p-4">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2270265539/display_1500/stock-vector-the-illustration-and-vector-of-the-portrait-of-thomas-edison-with-the-light-bulb-thomas-edison-was-2270265539.jpg" alt="Thomas Edison" />
                    </div>
                </div>
                </div>
                <div className="mt-5 rounded-lg overflow-hidden shadow-lg bg-gray-300 col-span-2">
                    <div className="p-4">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2270265539/display_1500/stock-vector-the-illustration-and-vector-of-the-portrait-of-thomas-edison-with-the-light-bulb-thomas-edison-was-2270265539.jpg" alt="Thomas Edison" />
                    </div>
                </div>
            </div>
            
        </Layout>
    );
}

export { Home };

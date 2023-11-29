import { Layout } from '../../Components/Layout';

const Box = ({ title }) => {
    return (
        <div className='w-72 h-96 m-8 border-2 border-gray-300 shadow-lg flex flex-col items-center justify-around rounded-md p-4'>
            <h1 className='text-2xl text-[#0096C8] mb-4'>{title}</h1>
            <button 
            className='bg-[#0096C8] text-white w-4/6 h-8 mt-8 rounded transition-colors duration-200' 
            onClick={() => console.log('Crear clicked')}>
                Crear
            </button>
            <button 
            className='bg-[#0096C8] text-white w-4/6 h-8 mt-8 rounded transition-colors duration-200' 
            onClick={() => console.log('Editar clicked')}>
                Editar
            </button>
            <button 
            className='bg-[#0096C8] text-white w-4/6 h-8 mt-8 rounded transition-colors duration-200' 
            onClick={() => console.log('Eliminar clicked')}>
                Eliminar
            </button>
        </div>
    );
}

const Config = () => {
    return (
        <Layout title='Configuracion'>
            <div className="flex items-center justify-center">
                <Box title='Usuarios' />
                <Box title='Campañas' />
                <Box title='Plantillas' />
            </div>
        </Layout>
    );
}

export { Config };

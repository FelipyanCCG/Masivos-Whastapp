import { useContext, useEffect } from 'react';
import { MasivosContext } from '../../Context/index.jsx';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Menu = () => {
    const context = useContext(MasivosContext);

    useEffect(() => {
        context.setGetDataClient(true);
    }, []);

    const renderView = () => {
        const filteredData = context.getDataClients.filter(item =>
            item.attributes.users.includes(context.userLogin.attributes.name));

        if (context.getDataClients && filteredData?.length > 0) {
            return (
                <div className="flex flex-wrap justify-center gap-12">
                    {filteredData.map(item => (
                        <Card key={item.id} data={item} />
                    ))}
                </div>
            );
        } else {
            return (
                <div className="flex flex-col items-center justify-center mt-8">
                  <svg
                    className="w-16 h-16 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div className="text-center text-xl font-semibold mt-6">Ningún servicio disponible</div>
                  <p className="text-gray-500 mt-6">
                    Lo sentimos, actualmente no hay servicios disponibles. Vuelve más tarde.
                  </p>
                </div>
              );
        }
    }

    const renderSkeleton = () => {
        return(
        <div className='flex flex-wrap justify-center gap-12 m-4'>
            <div className='w-60'>
                {<Skeleton count={8} height={40} />}
            </div>
            <div className='w-60'>
                {<Skeleton count={8} height={40} />}
            </div>
        </div>)
    }
    return (
        <Layout title={'Menu'}>
            {context.getDataClients.length > 0 ? renderView() : renderSkeleton()}
        </Layout>
    );
}

export { Menu }
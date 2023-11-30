import { useContext, useEffect } from 'react';
import { MasivosContext } from '../../Context/index.jsx';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';

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
            return <div className="text-center text-xl font-semibold mt-8">Ninguna servicio a disposicion:( </div>;
        }
    }

    return (
        <Layout title={'Menu'}>
            {renderView()}
        </Layout>
    );
}

export { Menu }
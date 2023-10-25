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
        if (context.getDataClients && context.getDataClients.clients?.length > 0) {
            return (
                <div className="grid gap-3 grid-cols-3 w-full max-w-screen-lg">
                    {context.getDataClients.clients.map(item => (
                        <Card key={item.id} data={item} />
                    ))}
                </div>
            );
        } else {
            return <div className="text-center text-xl font-semibold mt-8">We don't have anything :(</div>;
        }
    }

    return (
        <Layout>
            <h1 className="text-3xl font-semibold mb-4">Menu</h1>
            {renderView()}
        </Layout>
    );
}

export { Menu }

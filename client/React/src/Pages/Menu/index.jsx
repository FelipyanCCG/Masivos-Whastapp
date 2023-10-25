import { useContext } from 'react';
import { MasivosContext } from '../../Context/index.jsx';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
const Menu = () => {
    const context = useContext(MasivosContext);

    const renderView = () => {

        if (context.getDataClients && context.getDataClients.clients?.length > 0) {
            
          return (
            context.getDataClients.clients ?.map(item => (
              <Card key={item.id} data={item} />
            ))
          )
        } else {
          return (
            <div>We dont have anything :(</div>
          )
        } 
    }

    return (
<Layout>
    {context.setGetDataClient(true) }
    <h1>Menu</h1>
    <div className='grid gap-3 grid-cols-3 w-full max-w-screen-lg'>
          {renderView()}
    </div>
</Layout>
    )
}

export { Menu }
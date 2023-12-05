import { useContext } from 'react'
import { MasivosContext } from '../../Context'
import { useNavigate } from 'react-router-dom'

const Card = ({ data }) => {
  const context = useContext(MasivosContext)
  const navigate = useNavigate();

  const show = (data) => {
    console.log(data?.attributes.image);
    context.setHomeDataClient(data)
    navigate('/Home');
  }
  
  const handleImageError = (e) => {
    e.target.src = 'path/to/default/image.jpg'; // replace with your default image path
  }

  return (
    <div 
      className='flex flex-col bg-white cursor-pointer w-64 h-62 p-4 shadow-lg hover:shadow-2xl transition-shadow duration-200 rounded-lg transform hover:scale-105'
      onClick={() => show(data)}
      role="button"
      aria-label="Show details"
    >
      <div className='w-full h-48 relative overflow-hidden rounded-lg'>
        <img 
          className='w-full h-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-200' 
          src={data?.attributes.image}
          alt='Client' 
          onError={handleImageError}
        />
      </div>
      <div className='mt-4'>
        <p className='text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200'>
          {data?.attributes.Client}
        </p>
        <p className='text-gray-500 mt-2'>
          Telefono: {data?.attributes.phone_id}
        </p>
        <p className='text-gray-500 mt-2'>
          ID: {data?.id}
        </p>
      </div>
    </div>
  )
}

export { Card }
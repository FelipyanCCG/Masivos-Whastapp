import { useContext } from 'react'
import { MasivosContext } from '../../Context'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const context = useContext(MasivosContext)
  const navigate = useNavigate();

  const show = (data) => {
    console.log(data);
    context.setHomeDataClient(data)
    navigate('/Home');
  }

  return (
    <div className='bg-white cursor-pointer w-64 h-72 rounded-lg shadow-md hover:shadow-lg'>
      <figure className='relative w-full h-4/5' onClick={() => show(props.data)}>
        <span className='absolute bottom-2 left-2 bg-white/70 text-black text-sm font-semibold p-1 px-2 rounded'>+</span>
        <img className='w-full h-full object-cover rounded-t-lg' src={props.data?.attributes.image} alt='Client' />
      </figure>
      <div className='p-3'>
        <p className='text-lg font-semibold'>{props.data?.attributes.name}</p>
        <p className='text-gray-500 text-sm mt-1'>ID: {props.data?.id}</p>
      </div>
    </div>
  )
}

export { Card }

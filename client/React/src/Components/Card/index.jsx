
const Card = (props) => {
  console.log(props);

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>+</span>
        <img className='w-full h-full object-cover rounded-lg' 
        src={props.data?.attributes.image} 
        alt='art' />
        <div 
            >
          
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{props.data?.attributes.name}</span>
        <span className='text-lg font-medium'>ID : {props.data?.id}</span>
      </p>
    </div>
  )
}

export { Card }
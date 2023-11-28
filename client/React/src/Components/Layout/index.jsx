const Layout = ({ children, title }) => {
    return (
      <div className='mt-32 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-[#0096C8] mb-6'>{title}</h1>
        {children}
      </div>
    )
  }
  
  export { Layout }
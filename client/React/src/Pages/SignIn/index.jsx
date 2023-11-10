import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { MasivosContext } from '../../Context';

function SignIn() {
  const context = useContext(MasivosContext);

  const handleEmailChange = (e) => {
    context.setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    context.setPassword(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.setSubmitButtonClicked(true);
  };

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={context.email}
              onChange={handleEmailChange}
              required
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-600">Contraseña</label>
            <input
              type="password"
              id="password"
              value={context.password}
              onChange={handlePasswordChange}
              required
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export { SignIn };

import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const MasivosContext = createContext();

export const MasivosProvider = ({ children }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [userLogin, setUserLogin] = useState({});

  const navigate = useNavigate(); // Añade esta línea

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');

        const data = new FormData();
        data.append('email', email);
        data.append('password', password);

        console.log('email' + email, 'Password' + password);

        const response = await fetch('http://compartida.ccgltda.com/api/login', {
          method: 'POST',
          headers: myHeaders,
          body: data,
          redirect: 'follow',
        });

        const result = await response.json();

        if (result.data && result.data.token) {
          setUserLogin(result.data);
          setLogin(true); 
          navigate('/Home');
          console.log(userLogin.attributes.name); 
        } else {
          alert('Credenciales inválidas');
        }
      } catch (error) {
        console.log('Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
      }
      setSubmitButtonClicked(false);
    };

    // Llamar a handleLogin cuando cambien email o password
    if (email !== '' && password !== '') {
      handleLogin();
    }
  }, [submitButtonClicked]);

  return (
    <MasivosContext.Provider
      value={{
        login,
        setLogin,
        email,
        setEmail,
        password,
        setPassword,
        submitButtonClicked,
        setSubmitButtonClicked,
        userLogin,
        setUserLogin
      }}
    >
      {children}
    </MasivosContext.Provider>
  );
};

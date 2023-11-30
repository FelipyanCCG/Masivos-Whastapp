import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleCampains, handleLogin, handleUser, handleClient, handleMessage } from '../Api';
import { Modal } from '../Utils/Modal';
export const MasivosContext = createContext();

export const MasivosProvider = ({ children }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [userLogin, setUserLogin] = useState({});
  const [plantilla, setPlantilla] = useState('');
  const [tokenUser, setTokenUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Llamar a handleLogin cuando cambien email o password
    if (email !== '' && password !== '') {

      handleLogin(email, password).then(result => {
        if (result.data && result.data.attributes.name) {
          const welcome = '¡Bienvenido! ' + result.data.attributes.name;
          Modal('success', welcome);
          setTokenUser(result.data.attributes.token);
          setUserLogin(result.data);
          setLogin(true);
          navigate('/Menu');
        } else {
          Modal('error', 'Credenciales incorrectas');
        }
      })


    }

    setSubmitButtonClicked(false);
  }, [submitButtonClicked]);

  const [getDataClient, setGetDataClient] = useState(false);
  const [getDataClients, setGetDataClients] = useState([]);

  useEffect(() => {
    if (getDataClient) {
      handleCampains(tokenUser).then(result => {
        setGetDataClients(result.data);
      })
    }
  }, [getDataClient]);


  const [homeDataClient, setHomeDataClient] = useState({});

  const [fieldsFormConfig, setFieldsFormConfig] = useState(
    {
      'Usuarios': {
        'Crear': { fields: ['name', 'email', 'password'], api: handleUser },
        'Editar': [],
        'Eliminar': []
      },
      'Campañas': {
        'Crear': { fields: ['name', 'status', 'token_meta', 'phone_id', 'waba_id', 'users', 'image'], api: handleClient },
        'Editar': [],
        'Eliminar': []
      },
      'Plantillas': {
        'Crear': { fields: ['messaging_product','wa_id','message_id','message_status','code_status','user_id','template','client_id'], api: handleMessage },
        'Editar': [],
        'Eliminar': []
      }
    });

  return (
    <MasivosContext.Provider
      value={{
        tokenUser,
        setTokenUser,
        login,
        setLogin,
        email,
        setEmail,
        password,
        setPassword,
        submitButtonClicked,
        setSubmitButtonClicked,
        userLogin,
        setUserLogin,
        getDataClient,
        setGetDataClient,
        getDataClients,
        setGetDataClients,
        homeDataClient,
        setHomeDataClient,
        plantilla,
        setPlantilla,
        fieldsFormConfig,
        setFieldsFormConfig
      }}
    >
      {children}
    </MasivosContext.Provider>
  );
};

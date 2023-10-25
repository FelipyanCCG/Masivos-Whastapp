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
          navigate('/Menu');
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

const [getDataClient, setGetDataClient] = useState(false);
const [getDataClients, setGetDataClients] = useState([]);

  useEffect(() => {
    setGetDataClients({
        "id": 84,
        "type": "User",
        "attributes": {
            "name": "Flossie Jerde",
            "email": "i@admin.com",
            "token": "4|P0vGI3nr4JSJb9VbUYHpjmsH0hl078MjnXUJjbFLd3747454",
            "created_at": "2023-10-25T19:40:57.000000Z"
        },
        "clients": [
            {
                "id": 4,
                "type": "client",
                "attributes": {
                    "name": "CCG",
                    "image": "https://cdn2.hubspot.net/hubfs/3882410/Imported_Blog_Media/la-gente-en-el-contact-center.jpg"
                }
            },
            {
                "id": 5,
                "type": "client",
                "attributes": {
                    "name": "CCG2",
                    "image": "https://cdn2.hubspot.net/hubfs/3882410/Imported_Blog_Media/panorama-2016-contact-center-1.jpg"
                }
            },
            {
                "id": 6,
                "type": "client",
                "attributes": {
                    "name": "CCG3",
                    "image": "https://cdn2.hubspot.net/hubfs/3882410/Imported_Blog_Media/la-gente-en-el-contact-center.jpg"
                }
            },
            {
                "id": 7,
                "type": "client",
                "attributes": {
                    "name": "CCG4",
                    "image": "https://cdn2.hubspot.net/hubfs/3882410/Imported_Blog_Media/panorama-2016-contact-center-1.jpg"
                }
            }
        ]
    })
    }, [getDataClient]);
  
    

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
        setUserLogin,
        getDataClient,
        setGetDataClient,
        getDataClients,
        setGetDataClients
      }}
    >
      {children}
    </MasivosContext.Provider>
  );
};

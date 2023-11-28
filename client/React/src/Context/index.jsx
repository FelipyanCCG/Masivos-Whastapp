import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../Api';
import Swal from 'sweetalert2';

export const MasivosContext = createContext();

export const MasivosProvider = ({ children }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [userLogin, setUserLogin] = useState({});
  const [plantilla, setPlantilla] = useState('');

  const navigate = useNavigate(); 

  useEffect(() => {
    // Llamar a handleLogin cuando cambien email o password
    if (email !== '' && password !== '') {

        handleLogin(email, password).then(result => {
            if (result.data && result.data.attributes.name) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                  });
            
                  Toast.fire({
                    icon: "success",
                    iconColor: "##0d6efd",
                    title: "¡Bienvenido!",
                  });
                setUserLogin(result.data);
                setLogin(true);
                navigate('/Menu');
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                  });
            
                  Toast.fire({
                    icon: "error",
                    iconColor: "##0d6efd",
                    title: "¡Credenciales incorrectas!",
                  });
            }
        })

    }
    setSubmitButtonClicked(false);
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
                    "image": "data:image/jpeg;base64,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"
                }
            },
            {
                "id": 5,
                "type": "client",
                "attributes": {
                    "name": "DiBanka",
                    "image": "data:image/jpeg;base64,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"
                }
            },
            {
                "id": 6,
                "type": "client",
                "attributes": {
                    "name": "vus",
                    "image": "data:image/png;base64,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"
                }
            },
            {
                "id": 7,
                "type": "client",
                "attributes": {
                    "name": "Unisanitas",
                    "image": "data:image/jpeg;base64,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"
                }
            }
        ]
    })
    }, [getDataClient]);
  
    
    const [homeDataClient, setHomeDataClient] = useState({});

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
        setGetDataClients,
        homeDataClient, 
        setHomeDataClient,
        plantilla,
        setPlantilla,
      }}
    >
      {children}
    </MasivosContext.Provider>
  );
};

const url = 'http://localhost:8000/api';
const handleLogin = async (email, password) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('device_name', 'app')
        const response = await fetch(url+'/login', {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow',
        });

        const result = await response.json();

        return result;

    } catch (error) {
        console.log('Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
    }
};
const handleCampains = async (token) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", 'Bearer '+token);

        const response = await fetch(url+'/clients/', {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        });

        const result = await response.json();
    
        return result;

    } catch (error) {
        console.log('Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
    }
}
const handleUser = async (token, [name, email, password]) => {
    try {
     console.log(token, name, email, password);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', 'Bearer ' + token);
  
      const requestBody = {
        name: name,
        email: email,
        password: password,
      };
  
      const response = await fetch(url + '/users/', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(requestBody),
        redirect: 'follow',
      });
  
      const result = await response.json();
  
      console.log(result);
      return result;

    } catch (error) {
      console.log(
        'Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.'
      );
    }
  };
const handleClient = async (
    token,[name,status,tokenMeta,phone_id,waba_id,users,image]) => {     
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('Authorization', 'Bearer ' + token);
            
            const requestBody = {
                name: name,
                status: status,
                token: tokenMeta,
                phone_id: phone_id,
                waba_id: waba_id,
                users: users,
                image: image
            };
            console.log(requestBody);
            
            const response = await fetch(url + '/clients', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(requestBody),
                redirect: 'follow',
            });
            
            const result = await response.json();
            
            console.log(result);
            return result;

           } catch (error) {
             console.log(
               'Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.'
             );
           }
}
const handleMessage = async (
    token,[messaging_product,wa_id,message_id,message_status,code_status,user_id,template,client_id]) => {     
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('Authorization', 'Bearer ' + token);
            
            const requestBody = {
                messaging_product: messaging_product,
                wa_id: wa_id,
                message_id: message_id,
                message_status: message_status,
                code_status: code_status,
                user_id: user_id,
                template: template,
                client_id: client_id
            };
            console.log(requestBody);
            
            const response = await fetch(url + '/messages', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(requestBody),
                redirect: 'follow',
            });
            
            const result = await response.json();

            console.log(result);
            return result;

           } catch (error) {
             console.log(
               'Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.'
             );
           }
}
export { handleLogin, handleCampains, handleUser, handleClient, handleMessage };
const handleLogin = async (email,password) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');

        const data = new FormData();
        data.append('email', email);
        data.append('password', password);

        const response = await fetch('http://localhost:8000/api/login', {
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

export { handleLogin }
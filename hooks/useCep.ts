export function useCep(){

    function getApiData(cep:string){
        const axios = require('axios').default

        const address = axios.get(`https://viacep.com.br/ws/${cep}/json`)
        // eslint-disable-next-line 
        .then((response)=> { 
            const data = {"bairro": response.data.bairro,
            "cidade": response.data.localidade,
            "estado":response.data.uf}

            return data
        })
        // eslint-disable-next-line 
        .catch((error)=>console.log(error.message))
        
        return address

    }

    return { getApiData }
}
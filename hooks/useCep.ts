export function useCep(){

    function getApiData(cep:string){
        const axios = require('axios').default

        const address = axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response)=> {
            if(response.data.erro === "true"){
                throw new Error("Erro: CEP não encontrado.")
            }

            const addressData = {"bairro": response.data.bairro,
            "cidade": response.data.localidade,
            "estado":response.data.uf}

            return addressData
        })
        // Retornando erro para caso a api não encontre o CEP fornecido.  
        .catch((error)=>{
            throw new Error(error.message)}
        )
        
        return address

    }

    return { getApiData }
}
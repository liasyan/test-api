const axios = require("axios");
const config = require("../config");

module.exports = async ({ query }) => {

    const { data: fetchedData } = await axios.get('http://195.62.53.158:3000/users') || {};

    const data = fetchedData.slice(-4);

    if (query) {
     const params = Object.keys(query);

     if (params.length === config.query_param_count) {
         const param = params[0];
         const value = query[param];

         if (config.allowed_query_params.includes(param)) {
             return data.filter(item => item[param] === value);
         }
      }
    }

    return data;
}
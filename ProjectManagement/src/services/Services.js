import axios from 'axios';

const Services = (url = '', params = {}) => {
   return new Promise((res, rej) => {
      axios
         .post(url, params)
         .then((response) => {
            console.log('==========================================');
            console.log('API Response:', response);
            // console.log('url Service', url);
            // console.log('params Service', JSON.stringify(params));
            if (!!response && response.status === 200) {
               res(response);
               if (response.data.result == undefined) {
                  success(response);
               } else {
                  success(response.data.result);
               }
            } else {
               rej(response);
            }
         })
         .catch((exception) => {
            rej(exception);
         });
   });
};

export default Services;

import { API_URL } from 'constants/apiconfig';

const LogInURL = `${API_URL}login`;


// export const logInRequest = payload => request({
//     method: 'post',
//     url: LogInURL,
//     data  : JSON.stringify(payload.data),
//     // headers: {
//     //     'Authorization': `Bearer ${ payload.token }`,
//     // }
// });


export function logInRequest(data) {
  return {
    status: 200,
    data  : {
      token: 'lo-lo-lo'
    }
  };
}

import {
  BASE_URL,
  Route,
  Method,
  ErrorText
} from './constants.js';

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => load(Route.POST_DATA, ErrorText.SEND_DAT, Method.POST, body);

export { getData, sendData };

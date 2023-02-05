export const isDev = process.env.NODE_ENV === 'development';

const gatewayUrl = isDev
  ? 'http://localhost:5000/v1'
  : window?.env?.API_URL ?? 'http://localhost:5000/v1';

const apiLinks = {
  login: `${gatewayUrl}/users/login`,
  getUserInfo: `${gatewayUrl}/users/information`,
};

export default apiLinks;

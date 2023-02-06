export const isDev = process.env.NODE_ENV === 'development';

const gatewayUrl = isDev
  ? 'http://localhost:5000/v1'
  : window?.env?.API_URL ?? 'http://localhost:5000/v1';

const apiLinks = {
  login: `${gatewayUrl}/users/login`,
  getUserInfo: `${gatewayUrl}/users/information`,
  task: {
    get: (id) => `${gatewayUrl}/tasks${id ? `/${id}` : ''}`,
    create: () => `${gatewayUrl}/tasks`,
    update: (id) => `${gatewayUrl}/tasks/${id}`,
    delete: (id) => `${gatewayUrl}/tasks/${id}`,
    complete: (id) => `${gatewayUrl}/tasks/${id}/complete`
  }
};

export default apiLinks;

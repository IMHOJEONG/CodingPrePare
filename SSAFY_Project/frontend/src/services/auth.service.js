import axios from 'axios';

const API_URL = 'http://localhost:8085/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }

  changePassword(user) {
    return axios.put(API_URL + 'changepassword', user);
  }
  deleteUser(user) {
    localStorage.removeItem('user');
    axios.delete(API_URL + 'delete', { data: user });
      
  }
}

export default new AuthService();
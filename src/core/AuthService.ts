export default class AuthService {
    static validateUserLogin(username: string, password: string) {
        if (username === 'user' && password === 'passw0rd') {
            return true;
        } else {
            return false;
        }
    }

    static getLoginStatus() {
        if (window.localStorage.getItem('userIsLoggedIn') === 'true') {
            return true;
        } else {
            return false;
        }
    }
}

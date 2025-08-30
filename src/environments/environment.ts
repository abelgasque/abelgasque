export const environment = {
  production: false,
  webhook: {
    url: 'http://localhost:5432',
    user: 'admin',
    password: 'admin'
  },
  github: {
    api: "https://api.github.com",
    token: "your_github_token",
    username: 'abelgasque'
  },
  firebase: {
    apiKey: "your_key",
    authDomain: "YOUR_APP.firebaseapp.com",
    databaseURL: "https://YOUR_APP.firebaseio.com",
    projectId: "YOUR_APP",
    storageBucket: "YOUR_APP.firebasestorage.app",
    messagingSenderId: "000000000",
    appId: "XXXXXXXX",
    measurementId: "G-XXXXXXX"
  }
};
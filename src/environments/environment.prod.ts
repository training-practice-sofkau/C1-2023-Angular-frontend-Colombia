export const environment = {
  firebase: {
    projectId: 'microbanco-angular',
    appId: '1:585911593359:web:ad693faeb11940fd4dc3fa',
    storageBucket: 'microbanco-angular.appspot.com',
    apiKey: 'AIzaSyCM3PA0tGgBvUdEjUcYQsr1AribMH0erIs',
    authDomain: 'microbanco-angular.firebaseapp.com',
    messagingSenderId: '585911593359',
  },
  production: true,
  urlBase: 'api/hero',
  regexEmail:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
  regexPassword: '^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'


};

import { changeTmp } from './view-controller/router.js';

const init = () => {
    <script>
                var firebaseConfig = {
                apiKey: "AIzaSyCAT08HmwAU2eKLS9_Cz2SyMkxZSX7dNvI",
                authDomain: "burger-queen-8dda0.firebaseapp.com",
                databaseURL: "https://burger-queen-8dda0.firebaseio.com",
                projectId: "burger-queen-8dda0",
                storageBucket: "",
                messagingSenderId: "341525346793",
                appId: "1:341525346793:web:dda1e5b0016eb7f1917378"
              };
              firebase.initializeApp(firebaseConfig);
            </script>
    changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};

window.addEventListener('load', init);
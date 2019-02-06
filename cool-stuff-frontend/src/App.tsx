import React from 'react';
import './App.css';
import Auth from './components/Auth/Auth';

const App = () => (
  <div>
    <Auth>
      {
        ({ isAuth }) => (
          <>
            <h1>App</h1>
            {
              JSON.stringify(isAuth)
            }
          </>
        )
      }
    </Auth>
  </div>
);

export default App;

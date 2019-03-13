import React from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";

const App = () => (
  <div>
    <Auth>
      {({ isAuth }) => (
        <div>
          <h1>App</h1>
          {JSON.stringify(isAuth)}
        </div>
      )}
    </Auth>
  </div>
);

export default App;

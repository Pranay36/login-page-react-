import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
   <div className="container">
     {userIsRegistered === true ? <Form status = "Login" />: <Form status = "Register"/>}
    </div>
  );
}

export default App;


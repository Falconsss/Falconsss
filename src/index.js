import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

async function newUsers() {
  let url =
    "https://randomuser.me/api/1.3/?results=10&inc=gender,name,location,email,dob,phone,picture";
  let response = await fetch(url);
  let json = await response.json();
  let results = json.results;
  return results;
}

function App() {
  return (
    <div>
      <Button label="Сгенерировать" onClick={() => newUsers()} />
    </div>
  );
}

const main = document.getElementById("root");
ReactDOM.render(<App />, main);

import React, { useState } from "react";
import Nav from "./components/Nav";
const App = () => {
  const [categories] = useState([
    { name: "About",description: "About Our App" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <div className="container">
      <div className="card">f</div>
      </div>
    </div>
  );
};

export default App;

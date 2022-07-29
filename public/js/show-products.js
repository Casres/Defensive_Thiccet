const handleProductSubmit = (event) => {
    event.preventDefault();
  
    const formData = { htmlVariableRepresentation1, htmlVariableRepresentation2 };
  
    // fetch request to connect to the front end
    fetch("/api/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formaData),
    })
      .then((response) => response.json())
      .then((postResponse) => {
        alert(`All products received👍🏼`);
        console.log(postResponse);
      });
  };
  
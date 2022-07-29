const handleProductSubmit = (event) => {
    event.preventDefault();
  
    const formData = { htmlVariableRepresentation1, htmlVariableRepresentation2 };
  
    // fetch request to connect to the front end
    fetch("/api/products", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formaData),
    })
      .then((response) => response.json())
      .then((postResponse) => {
        alert(`Product updated👍🏼`);
        console.log(postResponse);
      });
  };
  
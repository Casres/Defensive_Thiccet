const handleProductSubmit = (event) => {
    event.preventDefault();
  
    const formData = { htmlVariableRepresentation1, htmlVariableRepresentation2 };
  
    // fetch request to connect to the front end
    fetch("/api/products/:id", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formaData),
    })
      .then((response) => response.json())
      .then((postResponse) => {
        alert(`Product Deleted👍🏼`);
        console.log(postResponse);
      });
  };
  
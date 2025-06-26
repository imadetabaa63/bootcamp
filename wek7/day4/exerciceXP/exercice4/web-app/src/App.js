import React from "react";

function App() {
  const handleClick = async () => {
    try {
      const response = await fetch("https://webhook.site/9f64bebd-0f1e-4ca6-878f-3ecec41e7589", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "allowOrigin": true
        },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27
        })
      });

      const data = await response.text();
      console.log("Réponse du serveur :", data);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  return (
    <div className="App">
      <h1>Envoyer des données JSON</h1>
      <button onClick={handleClick}>Envoyer</button>
    </div>
  );
}

export default App;

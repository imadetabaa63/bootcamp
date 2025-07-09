

  var allBoldItems;

  function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
  }

  function highlight() {
    for (let i = 0; i < allBoldItems.length; i++) {
      allBoldItems[i].style.color = "blue";
    }
  }

  function returnItemsToDefault() {
    if (!allBoldItems) return; // pour éviter l’erreur
    for (let i = 0; i < allBoldItems.length; i++) {
      allBoldItems[i].style.color = "black";
    }
  }
   

  
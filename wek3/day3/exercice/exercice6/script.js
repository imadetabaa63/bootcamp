const navDiv = document.getElementById('navBar');

    
    navDiv.setAttribute('id', 'socialNetworkNavigation');
    
  const newLi = document.createElement('li');

  
  const logoutText = document.createTextNode('Logout');

  
  newLi.appendChild(logoutText);

  
  const ull = document.getElementById('menu');
  ull.appendChild(newLi)

  ///////////////////////////
  const ul = document.getElementById('menu');

  
  const firstLi = ul.firstElementChild;

  
  const lastLi = ul.lastElementChild;

  
  console.log('Premier élément :', firstLi.textContent);
  console.log('Dernier élément :', lastLi.textContent);
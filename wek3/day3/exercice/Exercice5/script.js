
const container = document.getElementById('container');
console.log(container);


const firstList = document.querySelectorAll('ul.list')[0];
firstList.children[1].textContent = 'Richard';


const secondList = document.querySelectorAll('ul.list')[1];
secondList.removeChild(secondList.children[1]);


const lists = document.querySelectorAll('ul.list');
lists.forEach(ul => {
    ul.children[0].textContent = 'YourName';
});


lists.forEach(ul => {
    ul.classList.add('student_list');
});


firstList.classList.add('university', 'attendance');


container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';


const danLi = Array.from(document.querySelectorAll('li')).find(li => li.textContent === 'Dan');
if (danLi) danLi.style.display = 'none';


const richardLi = Array.from(document.querySelectorAll('li')).find(li => li.textContent === 'Richard');
if (richardLi) richardLi.style.border = '1px solid black';


document.body.style.fontSize = '20px';


if (container.style.backgroundColor === 'lightblue') {
    const userNames = Array.from(document.querySelectorAll('ul.list li'))
        .filter(li => li.style.display !== 'none') 
        .map(li => li.textContent);
    alert(`Hello ${userNames[0]} and ${userNames[1]}`);
}

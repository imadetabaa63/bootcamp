document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("libform");
  const story = document.getElementById("story");
  const libButton = document.getElementById("lib-button");
  const randomBtn = document.getElementById("random-button");

  const templates = [
    (noun, adj, person, verb, place) =>
      `${person} went to ${place} with a ${adj} ${noun}, and they started to ${verb}.`,
    (noun, adj, person, verb, place) =>
      `In ${place}, ${person} found a ${adj} ${noun} that could ${verb}!`,
    (noun, adj, person, verb, place) =>
      `Why did ${person} bring a ${adj} ${noun} to ${place}? To ${verb}, of course!`
  ];

  function generateStory() {
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill in all the fields!");
      return;
    }

    const template = templates[Math.floor(Math.random() * templates.length)];
    story.textContent = template(noun, adjective, person, verb, place);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    generateStory();
  });

  randomBtn.addEventListener("click", () => {
    generateStory();
  });
});

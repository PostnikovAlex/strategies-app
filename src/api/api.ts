const fetchStrategies = () =>
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => data)
    .catch(err => alert(err));

export { fetchStrategies };

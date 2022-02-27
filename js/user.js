const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(rep => rep.json())
        .then(data => displySingleUser(data.results[0]))
};

loadSingleUser();


const displySingleUser = users => {
    const container = document.getElementById('meals')
    users.forEach(user => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${data.results}</h1>
        `;
        container.appendChild(div);
    })

};
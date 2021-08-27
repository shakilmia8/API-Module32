function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUsers(data));
}
loadPosts();

function displayUsers(posts) {
    const postsContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>`;
        postsContainer.appendChild(div);
    }
}

function addPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: 'shakil',
            titel: 'cpi',
            body: 'He is a web developer'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
addPosts();
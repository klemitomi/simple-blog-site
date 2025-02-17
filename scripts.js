document.addEventListener("DOMContentLoaded", function () {
    loadPosts();
});

let posts = [
    { id: 1, title: "Első blogposzt", content: "Ez egy rövid bevezető a blogposzt tartalmáról..." },
    { id: 2, title: "Második blogposzt", content: "Egy másik bejegyzés rövid leírása..." }
];

function loadPosts() {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";
    posts.forEach(post => {
        postList.innerHTML += `
            <div class="card mb-3">
                <div class="card-body bg-secondary text-white rounded">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                    <button class="btn btn-outline-light" onclick="editPost(${post.id})">Szerkesztés</button>
                    <button class="btn btn-outline-danger" onclick="deletePost(${post.id})">Törlés</button>
                </div>
            </div>
        `;
    });
}

function createPost() {
    const title = prompt("Add meg a bejegyzés címét:");
    const content = prompt("Írd be a bejegyzés tartalmát:");
    if (title && content) {
        const newPost = { id: Date.now(), title, content };
        posts.push(newPost);
        loadPosts();
    }
}

function editPost(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        const newTitle = prompt("Új cím:", post.title);
        const newContent = prompt("Új tartalom:", post.content);
        if (newTitle && newContent) {
            post.title = newTitle;
            post.content = newContent;
            loadPosts();
        }
    }
}

function deletePost(id) {
    posts = posts.filter(post => post.id !== id);
    loadPosts();
}

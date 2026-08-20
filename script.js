document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  if (typeof posts !== "undefined") {
    const list = document.getElementById("post-list");
    if (list) renderPosts(posts);

    const home = document.getElementById("home-posts");
    if (home) renderHomePosts(posts.slice(0, 3));
  }

  document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      renderPosts(filter === "all" ? posts : posts.filter(p => p.tags.includes(filter)));
    });
  });
});

function renderPosts(items) {
  const list = document.getElementById("post-list");
  if (!list) return;
  list.innerHTML = items.map(p => `
    <article class="post-card" id="${p.id}">
      <div class="post-meta"><span>${p.category}</span><span>NaRye Journal</span></div>
      <h2>${p.title}</h2>
      <p>${p.preview}</p>
      <button class="read-more" data-post="${p.id}">Read Q&amp;A / Note →</button>
      <div class="post-content" id="content-${p.id}" hidden>${p.content}</div>
    </article>
  `).join("");
  list.querySelectorAll(".read-more").forEach(btn => {
    btn.addEventListener("click", () => {
      const box = document.getElementById("content-" + btn.dataset.post);
      const open = !box.hidden;
      box.hidden = open;
      btn.textContent = open ? "Read Q&A / Note →" : "Close note ↑";
    });
  });
}

function renderHomePosts(items) {
  const home = document.getElementById("home-posts");
  if (!home) return;
  home.innerHTML = items.map(p => `
    <article class="mini-post">
      <span>${p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.preview}</p>
      <a href="notes.html#${p.id}">Read →</a>
    </article>
  `).join("");
}
document.addEventListener('DOMContentLoaded', () => {
    const toc = document.querySelector('.lambda-toc');
    if (!toc) return;

    const blogs = [
        { title: "The Harvest", slug: "the-harvest", date: "2025-11-20" },
        { title: "The War Veteran", slug: "the-war-veteran", date: "2025-10-15" }
    ];

    const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    let len = blogs.length;
    sortedBlogs.forEach(blog => {
        const link = document.createElement('a');
        link.href = `blogs/${blog.slug}.html`;
        link.classList.add('post-link');
        link.innerHTML = `
            <span>λx<sub>${len}</sub>  ↦</span>
            <div class="post-info">
                <span class="post-title">${blog.title}</span>
                <span class="post-date">${blog.date}</span>
            </div>
        `;
        toc.appendChild(link);
        len--;
    });
});

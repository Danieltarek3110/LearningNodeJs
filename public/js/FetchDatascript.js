document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blogList');

    fetch('http://localhost:3000/blogs/all-blogs')
        .then(response => response.json())
        .then(data => {
            data.forEach(blog => {
                const listItem = document.createElement('li');
                listItem.classList.add('tm-list-group-item');
                const link = document.createElement('a');
                link.classList.add('tm-link'); 
                link.textContent = blog.title;

                link.href = `/blogs/${blog._id}`; 

                listItem.appendChild(link);
                blogList.appendChild(listItem);
            });
        })
        .catch((error) => console.error('Error fetching blogs:', error));
});

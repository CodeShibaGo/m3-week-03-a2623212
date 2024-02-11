const postsPage = [
  {
    id: 1,
    title: "Post One",
    body: "dolor sit amet consectetur adipisicing elit. Nisi numquam at nostrum vitae fugiat exercitationem architecto maioressint sed ducimus quam illum soluta quas nesciunt totam",
  },
  {
    id: 2,
    title: "Post Two",
    body: "dolor sit amet consectetur adipisicing elit. Nisi numquam at nostrum vitae fugiat exercitationem architecto maioressint sed ducimus quam illum soluta quas nesciunt totam",
  },
  {
    id: 3,
    title: "Post Three",
    body: "dolor sit amet consectetur adipisicing elit. Nisi numquam at nostrum vitae fugiat exercitationem architecto maioressint sed ducimus quam illum soluta quas nesciunt totam",
  },
  {
    id: 4,
    title: "Post Four",
    body: "dolor sit amet consectetur adipisicing elit. Nisi numquam at nostrum vitae fugiat exercitationem architecto maioressint sed ducimus quam illum soluta quas n",
  },
  {
    id: 5,
    title: "Post Five",
    body: "dolor sit amet consectetur adipisicing elit. Nisi numquam at nostrum vitae fugiat exercitationem architecto maioressint sed ducimus quam illum soluta quas n",
  },
];

const postsContainer = document.querySelector("#posts-container");

const renderPosts = (page) => {
  // console.log("render!");
  page.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
`;
    postsContainer.appendChild(postElement);
  });
};

//Intersection Observer API
const loader = document.querySelector(".loader");
const listObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        // console.log("Delayed for 1 second.");
        renderPosts(postsPage);
        listObserver.observe(loader);
      }, 1000);

      listObserver.unobserve(loader);
      // console.log("unobserve");
    }
  });
});

renderPosts(postsPage);
listObserver.observe(loader);

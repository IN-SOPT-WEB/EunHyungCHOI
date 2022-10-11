const tagForm = document.querySelector(".js-form-tag"),
    tagInput = document.querySelector(".js-input-tag");

const tags = document.querySelector(".js-tags");


function handleTagSubmit(e) {
    e.preventDefault();

    const newTag = document.createElement("li");

    newTag.classList.add("tags__tag");
    newTag.innerHTML = tagInput.value;

    tags.appendChild(newTag);
};

function init() {
    tagForm.addEventListener("submit", handleTagSubmit);
};

init();
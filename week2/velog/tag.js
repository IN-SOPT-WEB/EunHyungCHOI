const tagForm = document.querySelector(".js-form-tag"),
    tagInput = document.querySelector(".js-input-tag");

const tags = document.querySelector(".js-tags");


function handleTagSubmit(e) {
    e.preventDefault();
    const todoIndex = Array.from(
        e.target.parentElement.parentElement.children
    ).indexOf(e.target.parentElement);

    const newTag = document.createElement("li");

    const tagList = Array.from(tags.children).map((child) => 
        child.innerHTML
    ); // 태그 스트링만 담은 리스트

    newTag.classList.add("tags__tag");
    newTag.innerHTML = tagInput.value;

    if(!tagList.includes(newTag.innerHTML)){
        tags.appendChild(newTag);
    }
};

function init() {
    tagForm.addEventListener("submit", handleTagSubmit);
};

init();
const tagForm = document.querySelector(".js-form-tag"),
    tagInput = document.querySelector(".js-input-tag");

const tags = document.querySelector(".js-tags");

function handleTagSubmit(e) {
    e.preventDefault();

    const newTag = document.createElement("li");
    const tagList = Array.from(tags.children).map((child) => 
        child.innerHTML
    ); // 태그 스트링만 담은 리스트

    newTag.classList.add("tags__tag");
    newTag.innerHTML = tagInput.value;
    newTag.addEventListener("click", (e) => tags.removeChild(e.currentTarget));

    if(!tagList.includes(newTag.innerHTML)){
        tags.appendChild(newTag);
        // 로컬 스토리지에 스트링 배열 저장
        tagList.push(newTag.innerHTML);
        localStorage.setItem('tags', tagList);
    }
};

function init() {
    const storedTags = localStorage.getItem('tags').split(',');
    storedTags.forEach((tagStr) => {
        const newTag = document.createElement("li");

        newTag.classList.add("tags__tag");
        newTag.innerHTML = tagStr;
        newTag.addEventListener("click", (e) => tags.removeChild(e.currentTarget));

        tags.appendChild(newTag);
    });

    tagForm.addEventListener("submit", handleTagSubmit);
};

init();
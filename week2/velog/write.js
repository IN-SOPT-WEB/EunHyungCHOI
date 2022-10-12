const tagForm = document.querySelector(".js-form-tag"),
    tagInput = document.querySelector(".js-input-tag");

const tags = document.querySelector(".js-tags");

function addNewTag(str) {
    const newTag = document.createElement("li");

    newTag.classList.add("tags__tag");
    newTag.innerHTML = str;
    newTag.addEventListener("click", (e) => tags.removeChild(e.currentTarget));

    tags.appendChild(newTag);
}

function handleTagSubmit(e) {
    e.preventDefault();

    const newTagStr = tagInput.value;
    const tagList = Array.from(tags.children).map((child) => 
        child.innerHTML
    ); // 태그 스트링만 담은 리스트

    if(!tagList.includes(newTagStr)){
        addNewTag(newTagStr);

        // 로컬 스토리지에 스트링 배열 저장
        tagList.push(newTagStr);
        localStorage.setItem('tags', tagList);
    }
};

function init() {
    const storedTags = localStorage.getItem('tags').split(',');
    storedTags.forEach((tagStr) => addNewTag(tagStr));

    tagForm.addEventListener("submit", handleTagSubmit);
};

init();
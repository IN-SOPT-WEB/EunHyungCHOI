const body = document.querySelector("body");

const modalBackground = document.querySelector(".modal-background"),
    modalBox = document.querySelector(".modal-box"),
    modalBtn = document.querySelector(".modal-button");

const cardSection = document.querySelector(".cards"),
    cardArtics = document.querySelectorAll(".card");

const slideBtns = document.querySelectorAll(".slide-button");

const daySelect = document.querySelector(".js-select"),
    optionBox = document.querySelector(".js-options"),
    optionItems = document.querySelectorAll(".js-option");
let selectedItem = document.querySelector(".option-selected");

// For 드롭다운
function handleOptionClick(e) {
    // select 텍스트 변경
    daySelect.value = e.currentTarget.innerHTML;

    // 선택된 옵션 텍스트 색상 변경
    selectedItem.classList.remove("option-selected");
    e.currentTarget.classList.add("option-selected");
    selectedItem = e.currentTarget;

    // select box 숨기기
    optionBox.classList.remove("select-selected");
}

function handleSelectClick() {
    // select box 토글
    optionBox.classList.contains("select-selected") ?
        optionBox.classList.remove("select-selected") :
        optionBox.classList.add("select-selected");
}

// For 모달 기능
function handleCardClick(e) {
    modalBackground.style.visibility = "visible";
    modalBox.style.visibility = "visible";

    body.style.position = "fixed";

    modalBox.appendChild(e.currentTarget.cloneNode(true));
}

function handleCloseClick() {
    modalBox.removeChild(modalBox.querySelector("article"));

    body.style.position = "relative";

    modalBackground.style.visibility = "hidden";
    modalBox.style.visibility = "hidden";
}

function handleSliding(e) {
    if(e.currentTarget.innerHTML === "⬅️") {
        cardSection.classList.remove("slide-right");
        cardSection.classList.add("slide-left");
    } else {
        cardSection.classList.remove("slide-left");
        cardSection.classList.add("slide-right");
    }
}

function init() {
    daySelect.value = selectedItem.innerHTML;

    daySelect.addEventListener("click", handleSelectClick);
    optionItems.forEach((item) => 
        item.addEventListener("click", handleOptionClick)
    );

    cardArtics.forEach((artic) => 
        artic.addEventListener("click", handleCardClick)
    );
    
    modalBtn.addEventListener("click", handleCloseClick);

    slideBtns.forEach((btn) => 
        btn.addEventListener("click", handleSliding)
    );
};

init();
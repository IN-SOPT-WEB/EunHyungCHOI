const todayBtn = document.querySelector(".js-today"),
    tomorrowBtn = document.querySelector(".js-tomorrow"),
    bothBtn = document.querySelector(".js-both");

const leftSection = document.querySelector(".left-section"),
    rightSection = document.querySelector(".right-section");

const leftForm = document.querySelector(".js-left-form"),
    rightForm = document.querySelector(".js-right-form");

const leftInput = document.querySelector(".js-left-input"),
    rightInput = document.querySelector(".js-right-input");

const leftUl = document.querySelector(".js-left-ul"),
    rightUl = document.querySelector(".js-right-ul");

const btns = [todayBtn, tomorrowBtn, bothBtn];

function btnClickEffect(target) {
    btns.map((btn) => {
        btn === target ? 
            btn.classList.add("clicked") : 
            btn.classList.remove("clicked");
    })
}

function handleTodayClick(e) {
    btnClickEffect(e.currentTarget);
    rightSection.classList.add("hidden");
    leftSection.classList.remove("hidden");
}

function handleTomorrowClick(e) {
    btnClickEffect(e.currentTarget);
    rightSection.classList.remove("hidden");
    leftSection.classList.add("hidden");
}

function handleBothClick(e) {
    btnClickEffect(e.currentTarget);
    rightSection.classList.remove("hidden");
    leftSection.classList.remove("hidden");
}

function handleTodoSubmit(e) {
    e.preventDefault();

    const newTodo = document.createElement("li");
    const removeBtn = document.createElement("button");
    const todoLine = document.createElement("hr");

    removeBtn.innerHTML = "🗑";
    removeBtn.classList.add("remove-button");
    removeBtn.addEventListener("click", handleRemoveClick);
    
    todoLine.classList.add("ul__hr");

    newTodo.innerHTML = e.currentTarget === leftForm ? leftInput.value : rightInput.value;
    newTodo.classList.add("ul__li");
    newTodo.appendChild(removeBtn);

    if(e.currentTarget === leftForm) {
        leftUl.hasChildNodes() && leftUl.appendChild(todoLine);
        leftUl.appendChild(newTodo);
    } else {
        rightUl.hasChildNodes() && rightUl.appendChild(todoLine);
        rightUl.appendChild(newTodo);
    }
}

function handleRemoveClick(e) {
    // 지우고자 하는 todo의 인덱스
    const todoIndex = Array.from(
        e.target.parentElement.parentElement.children
    ).indexOf(e.target.parentElement);

    const hrIndex = todoIndex === 0 ? 0 : todoIndex / 2 - 1;

    console.log(hrIndex)

    if(e.target.parentElement.parentElement === leftUl) {
        // left-section의 todo를 지웠다면
        leftUl.removeChild(e.target.parentElement);
        // 가로선 지우기
        const hrs = document.querySelectorAll(".ul__hr");
        leftUl.childElementCount > 1 && leftUl.removeChild(hrs[hrIndex]);
    } else {
        // right-section의 todo를 지웠다면
        rightUl.removeChild(e.target.parentElement);
        // 가로선 지우기
        const hrs = document.querySelectorAll(".ul__hr");
        rightUl.childElementCount > 1 && rightUl.removeChild(hrs[hrIndex]);
    }
}

function init() {
    todayBtn.addEventListener("click", handleTodayClick);
    tomorrowBtn.addEventListener("click", handleTomorrowClick);
    bothBtn.addEventListener("click", handleBothClick);
    
    leftForm.addEventListener("submit", handleTodoSubmit);
    rightForm.addEventListener("submit", handleTodoSubmit);
}

init();
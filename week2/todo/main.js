/**
 * .hidden 클래스를 css에서 선언해두고 classList append를 하면
 * 오늘만보기 / 내일만보기 구현 가능
 * -> remove로 삭제 가능
 */

/**
 * 할일 추가하는 법 -> createElement
 * const currentLi = document.createElement("li");
 * const btn = create("button");
 * btn.innerHTML = "<span><이미지>/span>";
 * currentLi.appendChild(btn);
 * currentLi.innerHTML ="어쩌구"
 * 
 * 엔터 눌렀을 때도 추가되게 하려면 "keydown" 이벤트 리스너 부착
 * 
 * delete 버튼 활성화: currentLi가 사라지는 핸들러 구현
 */

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
        if(btn === target) {
            btn.classList.add("clicked");
        } else {
            btn.classList.remove("clicked");
        }
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
        leftUl.childElementCount > 0 && leftUl.appendChild(todoLine);
        leftUl.appendChild(newTodo);
    } else {
        rightUl.childElementCount > 0 && rightUl.appendChild(todoLine);
        rightUl.appendChild(newTodo);
    }
}

function handleRemoveClick(e) {
    if(e.target.parentElement.parentElement === leftUl) {
        // left-section의 todo를 지웠다면
        leftUl.removeChild(e.target.parentElement);
        // 가로선 지우기
        const lines = document.querySelectorAll(".ul__hr");
        leftUl.childElementCount > 1 && leftUl.removeChild(lines[lines.length - 1]);
    } else {
        // right-section의 todo를 지웠다면
        rightUl.removeChild(e.target.parentElement);
        // 가로선 지우기
        const lines = document.querySelectorAll(".ul__hr");
        rightUl.childElementCount > 1 && rightUl.removeChild(lines[lines.length - 1]);
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
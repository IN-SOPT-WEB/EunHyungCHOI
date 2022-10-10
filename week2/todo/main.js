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
}

function handleTomorrowClick(e) {
    btnClickEffect(e.currentTarget);
}

function handleBothClick(e) {
    btnClickEffect(e.currentTarget);

}

function init() {
    todayBtn.addEventListener("click", handleTodayClick);
    tomorrowBtn.addEventListener("click", handleTomorrowClick);
    bothBtn.addEventListener("click", handleBothClick);
}

init();
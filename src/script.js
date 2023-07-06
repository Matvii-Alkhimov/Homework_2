// 1

const elements = {
    inputEl: document.querySelector(".slider__input"),
    imageEl: document.querySelector(".slider__image"),
    containerEl: document.querySelector(".container"),
    boxEl: document.querySelector("#box"),
}

elements.inputEl.addEventListener("input", _.debounce(changeImageFunction, 500))

function changeImageFunction(event) {
    const rotate = Math.round(Math.random() * (360 - 0) + 0);
    const scale = Math.random() * (1.1 - 0) + 0;
    elements.imageEl.style.rotate = `${rotate}deg`;
    elements.imageEl.style.scale = `${scale}`;
}

// 2

elements.containerEl.addEventListener("mousemove", _.throttle(moveBoxFunction, 1000));

function moveBoxFunction(event) {
    console.log(event)
    elements.boxEl.style.top = `${event.offsetY}px`;
    elements.boxEl.style.left = `${event.offsetX}px`;

}
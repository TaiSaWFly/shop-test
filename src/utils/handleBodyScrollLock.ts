const handleScrollLock = (elementBody: HTMLElement) => {
    const paddingOffset = window.innerWidth - elementBody.offsetWidth + "px";
    const pagePosition = window.scrollY;
    elementBody.classList.add("scroll-lock");
    elementBody.dataset.position = `${pagePosition}`;
    elementBody.style.top = `-${pagePosition}px`;
    elementBody.style.paddingRight = paddingOffset;
};

const handleScrollUnlock = (elementBody: HTMLElement) => {
    const pagePosition = elementBody.dataset.position
        ? parseInt(elementBody.dataset.position, 10)
        : 0;
    elementBody.style.top = "auto";
    elementBody.classList.remove("scroll-lock");
    window.scroll({ top: pagePosition, left: 0 });
    elementBody.style.paddingRight = "0px";
    document.body.removeAttribute("data-position");
};

const handleBodyScrollLock = (isLock: boolean) => {
    const elementBody = document.body;
    if (elementBody) {
        isLock
            ? handleScrollLock(elementBody)
            : handleScrollUnlock(elementBody);
    }
};

export default handleBodyScrollLock;

const root = document.querySelector(':root');
root.style.setProperty('--scroll', '0% 0%')
window.addEventListener('scroll', (ev) => {
    const bodyY = parseInt(window.scrollY, 10);

    root.style.setProperty('--scroll', `0% ${-bodyY * 0.3}px`);
})
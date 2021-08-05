document.addEventListener('mousemove', parallax);

function parallax(e) {
    this.querySelectorAll('.shape').forEach((shape) => {
        const offSet = shape.getAttribute('data-offset');
        const x = (window.innerWidth - e.pageX * offSet) / 100;
        const y = (window.innerHeight - e.pageY * offSet) / 100;
        shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}
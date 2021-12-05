document.querySelectorAll('.producto-modal img').forEach(img => {
    img.addEventListener('click', function (e) {
        e.stopPropagation();
        this.parentNode.classList.add('active');
        this.classList.add('active')
    })
});

document.querySelectorAll('.producto-modal').forEach(img => {
    img.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.remove('active');
        document.querySelectorAll('.producto-modal img').forEach(img => {
            img.classList.remove('active')
        });
    })
});
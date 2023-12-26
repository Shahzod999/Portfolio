function dropdown() {
    let drop = document.getElementById('links');
    let more = document.getElementById('drop');

    drop.style.display = 'flex';
    more.style.display = 'none';

    window.addEventListener('click', function(event) {
        // Проверяем клик вне всплыв окна
        if (!drop.contains(event.target) && !more.contains(event.target)) {
            // Закр всплыв окно
            drop.style.display = 'none';
            more.style.display = 'block';
        }
    });
}

function closeFront() {
    var front = document.getElementById('imageModal');
    front.style.display = 'none';
}

function openImage(imagePath) {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');

    modal.style.display = 'flex';
    modal.style.opacity = 0; 
    modalImage.src = imagePath;

    setTimeout(function () {
        modal.style.opacity = 1;
    }, 50);
}

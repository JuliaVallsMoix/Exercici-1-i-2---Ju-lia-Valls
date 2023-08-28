document.addEventListener('DOMContentLoaded', function () {

    const boxes = document.querySelectorAll('.hover-color-change');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.classList.add('hovered');
        });

        box.addEventListener('mouseout', () => {
            box.classList.remove('hovered');
        });
    });

    const grayBoxes = document.querySelectorAll('.gray-box');

    grayBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.transform = 'translateX(100px)';
        });
    });

    const redBoxes = document.querySelectorAll('.red-box');

    redBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.transform = 'translateX(100px)';
        });
    });

    const yellowBoxes = document.querySelectorAll('.yellow-box');

    yellowBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.transform = 'translateX(100px)';
        });
    });

    const resizableBox = document.querySelectorAll('.resizable');

    resizableBox.forEach(box => {
        box.addEventListener('click', () => {
            box.style.width = '400px';
            box.style.height = '400px'
        })
    })

    const blueBoxes = document.querySelectorAll('.blue-box');

    blueBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.transition = 'transform 0.5s';
            box.style.transform = 'rotate(45deg)';
        });
    });

    const blackBoxes = document.querySelectorAll('.black-box');

    blackBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'red';
            box.style.transform = 'rotate(90deg)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = 'black';
            box.style.transform = 'none';
        });
    });

});


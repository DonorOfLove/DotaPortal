export function changePerspective(e, background) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([background.current]);
    window.requestAnimationFrame(function () {
        transformElement(background.current, position);
    });
}

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / 1500;
    let calcY = (x - box.x - (box.width / 2)) / 5000;
    return "perspective(100px) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
}



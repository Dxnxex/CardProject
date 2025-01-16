import { initCanvas } from './initCanvas.js';


window.onload = function () {

    const { canvas, ctx, saveBtn, moveBtn, xInput, yInput, img } = initCanvas();


    // Objekt reprezentující obrázek
    const imageObject = {
        x: 100,
        y: 100,
        width: 0,
        height: 0,
        isDragging: false,
        offsetX: 0,
        offsetY: 0
    };

    // Funkce pro vykreslení obrázku na canvas
    function drawImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, imageObject.x, imageObject.y, imageObject.width, imageObject.height);
    }

    // Zjištění, zda je myš uvnitř obrázku
    function isMouseInImage(mouseX, mouseY) {
        return (
            mouseX >= imageObject.x &&
            mouseX <= imageObject.x + imageObject.width &&
            mouseY >= imageObject.y &&
            mouseY <= imageObject.y + imageObject.height
        );
    }

    // Převod pozice myši na souřadnice canvas
    function getMousePos(event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    // Událost: stisknutí myši
    canvas.addEventListener("mousedown", (event) => {
        const mousePos = getMousePos(event);
        if (isMouseInImage(mousePos.x, mousePos.y)) {
            imageObject.isDragging = true;
            imageObject.offsetX = mousePos.x - imageObject.x;
            imageObject.offsetY = mousePos.y - imageObject.y;
        }
    });

    // Myš - Držení - Tahání objektu
    canvas.addEventListener("mousemove", (event) => {
        if (imageObject.isDragging) {
            const mousePos = getMousePos(event);
            imageObject.x = mousePos.x - imageObject.offsetX;
            110

            imageObject.y = mousePos.y - imageObject.offsetY;
            drawImage();
        }
    });

    // Myš - Uvolnění - Přestat tahat
    canvas.addEventListener("mouseup", () => {

        //Přestat tahat
        imageObject.isDragging = false;

        //Aktualizace hodnot v OVLÁDÁNÍ
        xInput.value = Math.round(imageObject.x);
        yInput.value = Math.round(imageObject.y);

    });

    xInput.addEventListener("click", (event) => {

        if (xInput.value<imageObject.x) {imageObject.x -=1;
        } else {imageObject.x +=1;}

        xInput.value = Math.round(imageObject.x);
        drawImage()

    });


    yInput.addEventListener("click", (event) => {

        if (yInput.value<imageObject.y) {imageObject.y -=1;
        } else {imageObject.y +=1;}

        yInput.value = Math.round(imageObject.y);
        drawImage()

    });

    // Přemístění obrázku podle hodnot v políčkách
    moveBtn.addEventListener("click", () => {
        const newX = parseInt(xInput.value, 10);
        const newY = parseInt(yInput.value, 10);

        if (!isNaN(newX)) imageObject.x = newX;
        if (!isNaN(newY)) imageObject.y = newY;

        drawImage();
    });

    // Po načetení image -> nastavení velikost podpůrného objektu
    img.onload = () => {
        imageObject.width = img.width;
        imageObject.height = img.height;
        drawImage();
    };

    // Uložení obrázku jako soubor
    saveBtn.addEventListener("click", function () {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "upraveny_obrazek.png";
        link.click();
    });
};

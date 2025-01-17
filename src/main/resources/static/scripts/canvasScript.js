import { controlCanvas } from "./controlCanvas.js";
import { initCanvas } from './initCanvas.js';

window.onload = function () {

    const { canvas, ctx, saveBtn, moveBtn, xInput, yInput, img } = initCanvas();

    const imageSelect = document.getElementById("imageSelect");
    const images =[];
    const selectedIndex = { value: 0 };

    //Setup images
    for (let i = 1; i <= 2; i++) {
        images.push({
            img: new Image(),
            x: i * 100,
            y: i * 50,
            width: 100,
            height: 100,
            isDragging: false,
            offsetX: 0,
            offsetY: 0,
            src: `uploads/image${i}.png`,
        });
    };



    // Nastavení HTML Options
    images.forEach((image, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `Obrázek ${index + 1}`;
        imageSelect.appendChild(option);
    });



    // Funkce pro vykreslení obrázku na canvas
    function drawImages() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //FOR
        images.forEach((images) => {
            ctx.drawImage(images.img, images.x, images.y, images.width, images.height);
        });

    }

    // Převod pozice myši na souřadnice canvas
    function getMousePos(event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    // Myš - Stistknutí - Označit
    canvas.addEventListener("mousedown", (event) => {
        const mousePos = getMousePos(event);

        images.forEach((image, index) => {
            if (
                mousePos.x >= image.x &&
                mousePos.x <= image.x + image.width &&
                mousePos.y >= image.y &&
                mousePos.y <= image.y + image.height
            ) {
                imageSelect.value = index;
                selectedIndex.value = index;

                image.isDragging = true;
                image.offsetX = mousePos.x - image.x;
                image.offsetY = mousePos.y - image.y;

            }

        });

        setInputValues();
    });

// Myš - Držení - Tahání objektu
    canvas.addEventListener("mousemove", (event) => {
        const mousePos = getMousePos(event);

        images.forEach((image, index) => {
            if (image.isDragging) {
                image.x = mousePos.x - image.offsetX;
                image.y = mousePos.y - image.offsetY;

                drawImages();
            }
        });

        setInputValues();
    });


        //Nastavení X & Y Inputu v HTML
        function setInputValues() {
            xInput.value =   images[selectedIndex.value].x;
            yInput.value =   images[selectedIndex.value].y;
        }

        // Myš - Uvolnění - Přestat tahat
        canvas.addEventListener("mouseup", () => {
            images.forEach((image) => {
                image.isDragging = false;
            });
        });


    // Po načetení image -> nastavení velikost podpůrného objektu
    images.forEach((image) => {
        image.img.src = image.src;
        image.img.onload = drawImages;
    });

    // Uložení obrázku jako soubor
    saveBtn.addEventListener("click", function () {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "upraveny_obrazek.png";
        link.click();
    });


controlCanvas(images, selectedIndex, drawImages,setInputValues,xInput,yInput,moveBtn);

};

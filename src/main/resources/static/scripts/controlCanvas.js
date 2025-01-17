export function controlCanvas(images, selectedIndex, drawImages,setInputValues,xInput,yInput,moveBtn) {

    document.addEventListener("keydown", (event) => {
        const selectedImage = images[selectedIndex.value];
        const speed = 1;

        switch (event.key) {
            case "ArrowUp":
                selectedImage.y -= speed;
                break;
            case "ArrowDown":
                selectedImage.y += speed;
                break;
            case "ArrowLeft":
                selectedImage.x -= speed;
                break;
            case "ArrowRight":
                selectedImage.x += speed;
                break;
            default:
                return;
        }

        //Funkce
        setInputValues();
        drawImages();
    });


    //Pohyb přes Y
    yInput.addEventListener("click", (event) => {

        images[selectedIndex.value].y = yInput.value;
        drawImages();

    });

    //Pohyb přes X
    xInput.addEventListener("click", (event) => {

        images[selectedIndex.value].x = xInput.value;
        drawImages();

    });

    // Přemístění obrázku podle hodnot v XY
    moveBtn.addEventListener("click", () => {

        images[selectedIndex.value].x = xInput.value;
        images[selectedIndex.value].y = yInput.value;
        drawImages();
    });


};
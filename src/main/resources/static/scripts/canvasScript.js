window.onload = function() {

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const saveBtn = document.getElementById("saveBtn");

    // Načtení obrázku
    const img = new Image();
    img.src = 'uploads/image.png';

    //Vykreslení obrázku na Canvas
    img.onload = function() {

        //Nastavení velikosti Canvasu dle hlavního obrázku
        canvas.width = img.width;
        canvas.height = img.height;

        // Vykreslení obrázku
        ctx.drawImage(img, 0, 0);

        //TEST - Příklad pro přídání na Canvas
        ctx.font = '30px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText('Nějaký text', 50, 50);

    };


    // Uložení obrázku jako soubor
    saveBtn.addEventListener('click', function() {
        // Vytvoření odkazu pro stažení obrázku
        const dataURL = canvas.toDataURL('image/png'); // nebo jiný formát (jpeg, jpg)
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'upraveny_obrazek.png';  // Název souboru pro uložení
        link.click();
    });


};

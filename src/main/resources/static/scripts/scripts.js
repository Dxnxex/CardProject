document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');
  button.addEventListener('click', function(event) {uploadImage(event);});
});



function uploadImage(event) {
  event.preventDefault();

  console.log('Funkce: imageUpload');
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    console.log('Vybraný soubor:', file.name);

    const reader = new FileReader();
    reader.onloadend = function() {

      const base64String = reader.result.split(',')[1];
      //sendBase64ToServer(base64String);

      // Zobrazíme obrázek v prohlížeči
      const img = document.createElement('img');
      img.src = reader.result;
      document.body.appendChild(img);

      // Odeslání obrázku na server
      fetch('/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: base64String })
      })
          .then(response => response.json())
          .then(data => console.log('Nahráno:', data))
          .catch(error => console.error('Chyba při nahrávání:', error));
    };

    reader.readAsDataURL(file);
    console.log('Nahrávání souboru');

  } else {
    console.log('Nebyl vybrán žádný soubor');
  }

}

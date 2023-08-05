const express = require('express');
const app = express();
const port = 3000; // Puoi modificare la porta a tua discrezione

// Configura Express per servire i file statici nella cartella del tuo progetto PixiJS
app.use(express.static('C:/Users/andre/wa_hack70/pixi'));

// Avvia il server
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}!`);
});
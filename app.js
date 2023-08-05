// import { TiledMap } from 'pixi-tiledmap';
// import { TiledMap } from './node_modules/';
// import { TilingSprite } from '@pixi/sprite-tiling';
// import { TilingSprite } from './node_modules/@pixi/sprite-tiling/lib/TilingSprite.mjs';
// const PixiTiledMap = require('pixi-tiledmap').TiledMap;

// Inizializza PixiJS
const app = new PIXI.Application({
  resizeTo: window,
  backgroundColor: 0xaaaaaa,
});
// PIXI.loader
//     .add('assets/01_basement.tmx')
//     .load(() => {
//         /**
//          *   PIXI.extras.TiledMap() is an extended PIXI.Container()
//          *   so you can render it right away
//          */
//         renderer.render(new PIXI.extras.TiledMap('assets/01_basement.tmx'));
//     });
//inizializzazione TMX
// const PIXI = require('pixi.js');
// const PixiTiledMap = require('pixi-tiledmap');


// Aggiungi il renderer al DOM
document.body.appendChild(app.view);

// create a new Sprite from an image path
const bunny = PIXI.Sprite.from("https://pixijs.com/assets/bunny.png");

// center the sprite's anchor point
// bunny.anchor.set(0.5);

let playerLevel = 0;
let playerXP = 0;
const XPToNextLevel = [100, 250, 500, 1000, 2000 /* Altri valori... */];

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

function gainExperience(amount) {
    console.log('l\'esperienza del giocatore è: ' + playerXP + 'il livello è: ' + playerLevel)
  playerXP += amount;
  checkLevelUp();
}

function checkLevelUp() {
  while (playerXP >= XPToNextLevel[playerLevel - 1]) {
    playerXP -= XPToNextLevel[playerLevel - 1];
    playerLevel++;
    // Aggiungi altre azioni o ricompense per il raggiungimento di nuovi livelli
  }
}

// Aggiungi un listener per l'evento 'keydown' della tastiera
document.addEventListener("keydown", (event) => {
  let speed = 20; // La velocità di movimento del personaggio

  // Controlla il tasto premuto
  if (
    event.key === "ArrowUp" || 
    event.key == "W" || 
    event.key == "w"
    ) {
        gainExperience(20);
        // Muovi il personaggio verso l'alto
        bunny.y -= speed;
  } else if (
    event.key === "ArrowDown" ||
    event.key == "S" ||
    event.key == "s"
  ) {
        gainExperience(20);
        // Muovi il personaggio verso il basso
        bunny.y += speed;
  } else if (
    event.key === "ArrowLeft" ||
    event.key == "A" ||
    event.key == "a"
  ) {
        gainExperience(20);
        // Muovi il personaggio verso sinistra
        bunny.x -= speed;
  } else if (
    event.key === "ArrowRight" ||
    event.key == "D" ||
    event.key == "d"
  ) {
        // Muovi il personaggio verso destra
        gainExperience(20);
        bunny.x += speed;
  }
});

app.ticker.add((delta) => {
  const speed = 0; // La velocità di movimento del personaggio

  // Aggiorna la posizione del personaggio basandosi sulla velocità e il delta
  bunny.x += speed * delta;
  bunny.y += speed * delta;
});

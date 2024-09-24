class Victoire extends Phaser.Scene {
    constructor() {
      super({ key: "Victoire" });
    }
  
    preload() {
      this.load.image("bgAccueil", "./assets/images/bgAccueil.jpg");
      this.load.image("btnMenuPrincipal", "./assets/images/btnMenuPrincipal.png");
    }
  
    create() {
  
      let img = this.add.image(config.width / 2, config.height / 2, "bgAccueil");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);
  
  
      const buttonB = this.add
        .image(config.width - 290, 310, "btnMenuPrincipal")
        .setScale(0.3)
        .setOrigin(1, 0);
  
      buttonB.setInteractive();
  
      buttonB.on("pointerdown", () => {
        this.scene.start("Accueil");
      });
  
    }
  
    update() {
  
    }
  }
  

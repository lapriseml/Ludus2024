class Credits extends Phaser.Scene {
    constructor() {
      super({ key: "Credits" });
    }
  
    preload() {
      this.load.image("bgAccueil", "./assets/images/bgAccueil.jpg");
      this.load.image("btnFermer", "./assets/images/btnFermer.png");
    }
  
    create() {
  
      let img = this.add.image(config.width / 2, config.height / 2, "bgAccueil");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);
  
  
      const buttonA = this.add
        .image(config.width - 20, 20, "btnFermer")
        .setScale(0.5)
        .setOrigin(1, 0);
  
      buttonA.setInteractive();
  
      buttonA.on("pointerdown", () => {
        this.scene.start("Accueil");
      });
  
    }

    update() {

    }
  }

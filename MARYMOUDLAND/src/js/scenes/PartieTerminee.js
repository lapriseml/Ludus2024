class PartieTerminee extends Phaser.Scene {
    constructor() {
      super({ key: "PartieTerminee" });
    }
  
    preload() {
      this.load.image("bgAccueil", "./assets/images/bgAccueil.jpg");
      this.load.image("btnRecommencer", "./assets/images/btnRecommencer.png");
      this.load.image("btnMenuPrincipal", "./assets/images/btnMenuPrincipal.png");
    }
  
    create() {
  
      let img = this.add.image(config.width / 2, config.height / 2, "bgAccueil");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);


      const buttonA = this.add
      .image(config.width - 850, 750, "btnRecommencer")
      .setScale(0.4)
      .setOrigin(1, 0);
  
      buttonA.setInteractive();
  
      buttonA.on("pointerdown", () => {
        this.scene.start("Jeu");
      });
  
  
      const buttonB = this.add
        .image(config.width - 850, 950, "btnMenuPrincipal")
        .setScale(0.4)
        .setOrigin(1, 0);
  
      buttonB.setInteractive();
  
      buttonB.on("pointerdown", () => {
        this.scene.start("Accueil");
      });
  
    }
  
    update() {
  
    }
  }
  

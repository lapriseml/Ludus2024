class Jeu extends Phaser.Scene {
    constructor() {
      super({ key: "Jeu" });
    }
  
    preload() {
      this.load.image("bgAccueil", "./assets/images/bgAccueil.jpg");
      this.load.image("btnQuitter", "./assets/images/btnQuitter.png");
    }
  
    create() {
  
      let img = this.add.image(config.width / 2, config.height / 2, "bgAccueil");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);


      const buttonA = this.add
      .image(config.width - 850, 950, "btnQuitter")
      .setScale(0.4)
      .setOrigin(1, 0);

      buttonA.setInteractive();

      buttonA.on("pointerdown", () => {
      this.scene.start("Accueil");
      });

    }
  
    update() {
  
    }
}
  

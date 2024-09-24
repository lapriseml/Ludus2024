class Accueil extends Phaser.Scene {
  constructor() {
    super({ key: "Accueil" });
  }

  preload() {
    this.load.image("bgAccueil", "./assets/images/bgAccueil.jpg");
    this.load.image("logo", "./assets/images/logo.png");
    this.load.image("btnAudioOn", "./assets/images/btnAudioOn.png");
    this.load.image("btnAudioOff", "./assets/images/btnAudioOff.png");
    this.load.image("btnCommencer", "./assets/images/btnCommencer.png");
    this.load.image("btnCommentJouer", "./assets/images/btnCommentJouer.png");
    this.load.image("btnCredits", "./assets/images/btnCredits.png");
  }

  create() {

    let img = this.add.image(config.width / 2, config.height / 2, "bgAccueil");
    let scaleX = config.width / img.width;
    let scaleY = config.height / img.height;
    let scale = Math.max(scaleX, scaleY);
    img.setScale(scale);


    const logo = this.add
      .image(config.width - 750, 100, "logo")
      .setScale(0.8)
      .setOrigin(1, 0);


    const buttonA = this.add
      .image(config.width - 150, 20, "btnAudioOn")
      .setScale(0.5)
      .setOrigin(1, 0);

    buttonA.setInteractive();

    buttonA.on("pointerdown", () => {
      this.scene.start("");
    });


    const buttonB = this.add
      .image(config.width - 10, 20, "btnAudioOff")
      .setScale(0.5)
      .setOrigin(1, 0);

    buttonB.setInteractive();

    buttonB.on("pointerdown", () => {
      this.scene.start("");
    });


    const buttonC = this.add
      .image(config.width - 750, 550, "btnCommencer")
      .setScale(0.7)
      .setOrigin(1, 0);

    buttonC.setInteractive();

    buttonC.on("pointerdown", () => {
      this.scene.start("Jeu");
    });


    const buttonD = this.add
      .image(config.width - 750, 700, "btnCommentJouer")
      .setScale(0.7)
      .setOrigin(1, 0);

    buttonD.setInteractive();

    buttonD.on("pointerdown", () => {
      this.scene.start("CommentJouer");
    });


    const buttonE = this.add
      .image(config.width - 750, 850, "btnCredits")
      .setScale(0.7)
      .setOrigin(1, 0);

    buttonE.setInteractive();

    buttonE.on("pointerdown", () => {
      this.scene.start("Credits");
    });

  }

  update() {

  }
}


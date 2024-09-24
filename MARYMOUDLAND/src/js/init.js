const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    transparent: true,
    width: 1920,
    height: 1080,
    scene: [Accueil, Jeu, CommentJouer, Credits, PartieTerminee, Victoire]
};
const game = new Phaser.Game(config);
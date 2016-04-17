var Game = (function () {
    function Game(width, height) {
        var game = new Phaser.Game(width, height, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    Game.prototype.preload = function () {
    };
    Game.prototype.create = function () {
    };
    Game.prototype.update = function () {
    };
    return Game;
}());
var Startup = (function () {
    function Startup() {
    }
    Startup.Main = function () {
        window.onload = function () {
            var game = new Game(1400, 700);
        };
        return 0;
    };
    return Startup;
}());
Startup.Main();
//# sourceMappingURL=app.js.map
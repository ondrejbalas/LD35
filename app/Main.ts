class Startup {
    private game: Game;
    
    public static Main(): number {
        window.onload = () => {
            var game = new Game(1400, 700);
        }
        return 0;
    }
}

Startup.Main();
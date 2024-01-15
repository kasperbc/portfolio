enum GameType {
    GameJam = "Game Jam",
    SchoolProject = "School Project",
    PersonalProject = "Personal Project",
    PracticalTraining = "Practical Training"
}

enum Platform {
    Desktop = "Desktop",
    Mobile = "Mobile",
    Web = "Web"
}

// todo implement
interface GameProject {
    name: string;
    summary: string;
    type: GameType;
    platform: string;
    year: number;
    engine: string;
    devTime: string;
    teamSize: string;
    image: string;

    // page specific
    description: string;
    myRole: string;
    link: string;
    github: string; // if not a link, then the text is displayed in the button and the button is disabled
    tech: string[];
}
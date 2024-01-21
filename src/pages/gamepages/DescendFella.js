import Header from "../../components/Header";
import ProjectPage from "../../components/ProjectPage";

export default function DescendFella() {
    return (
        <div>
            <Header />
            <ProjectPage
                gameName = "Descend Fella"
                gameDescription=
                { "Descend Fella is a 3D high-score based game where you fall trough the sky and try to get a high score. " +
                "The game was created in three days for the ScoreScape 22 jam mostly by me, with the music composed by a friend of mine." +
                " The game allows the player to input their own name and has an online leaderboard showing the top players' scores."
                }
                myRole=
                {"I created almost all of the game, including the programming and design. The player model was externally sourced but the animation was created " +
                'by me in Blender. I also created the online leaderboard with <a href="https://lootlocker.com/" target="_blank">LootLocker</a>.'
                }
                gameBanner = "https://img.itch.zone/aW1nLzEwMzU1NTE3LnBuZw==/315x250%23c/IMKYa9.png"
                playLink = "https://kekis.itch.io/descend-fella"
                playLinkText="Itch.io"
                sourceLinkEnabled = {false}
                sourceLinkText="Source unavailable"
                tech="Unity, 3D, C#, Git, GitHub, Blender, LootLocker, Online Leaderboard"
            />
        </div>
    )
}
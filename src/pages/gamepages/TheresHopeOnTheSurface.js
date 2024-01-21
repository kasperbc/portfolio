import Header from "../../components/Header";
import ProjectPage from "../../components/ProjectPage";

export default function HopeOnTheSurface() {
    return (
        <div>
            <Header />
            <ProjectPage
                gameName = "There's Hope on the Surface"
                gameDescription=
                { "There's Hope on the Surface is a 2D ''up-scoller'' where you find yourself at the bottom of a deep mine and have to dig your way to the surface. But remember to watch your oxygen levels!<br/><br/>" +
                "The game was created in 48 hours for the BIT first-year students' EXPA Game Jam by an international team." +
                
                "<h3>Reception</h3>" +
                "After the jam ended, the game placed third out of six submissions, in a vote among the submitting teams and was generally well-received by those who played it." +
                " Overall, making the game was a great experience as it was my first time participating in a in-person game jam."
                }
                myRole=
                {"I was one of two programmers for this game. I created the destructible terrain system and collaborated with the other programmer to create " +
                "other mechanics. I also created some of the art assets."
                }
                gameBanner = "https://img.itch.zone/aW1nLzEzOTMyMDk5LnBuZw==/315x250%23c/dIjrqK.png"
                playLink = "https://kekis.itch.io/there-is-hope-on-the-surface"
                playLinkText="Download"
                sourceLink="https://github.com/Emiliontti/EXPAGameJamG3"
                sourceLinkEnabled = {true}
                sourceLinkText="GitHub"
                tech="Unity, 2D, C#, Git, GitHub"
            />
        </div>
    )
}
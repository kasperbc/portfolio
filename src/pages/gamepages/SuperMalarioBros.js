import Header from "../../components/Header";
import ProjectPage from "../../components/ProjectPage";
import SuperMalarioBrosImg from "../../imgs/super-malario-bros.png";

export default function SuperMalarioBros() {
    return (
        <div>
            <Header />
            <ProjectPage
                gameName = "Super Malario Bros."
                gameDescription=
                { "Super Malario Bros is a clone of Super Mario Bros. created as a practice project to learn Unity. The game has one level you can traverse and " +
                "it is littered with bugs and broken physics, but can be enjoyed in a so-bad-its-good way. I also created an Android port of the game." +
                "<br/><br/>" +
                'At one point, I planned to make a 3D Platforming game sequel called <Link to="/super-malario-3d">"Super Malario 3D"</Link>, but the project was eventually cancelled.'
                }
                myRole=
                {"N/A"
                }
                gameBanner = {SuperMalarioBrosImg}
                playLink = "https://kekis.itch.io/super-malario-bros"
                playLinkText="Itch.io"
                sourceLinkEnabled = {false}
                sourceLinkText="Source unavailable (Perhaps for the best)"
                tech="Unity, 3D, C#, Android"
            />
        </div>
    )
}
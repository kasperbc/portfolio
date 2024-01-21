import Header from "../../components/Header";
import ProjectPage from "../../components/ProjectPage";
import Malario3DImg from "../../imgs/malario3d.png";
    
export default function SuperMalario3D() {
    return (
        <div>
            <Header />
            <ProjectPage
                gameName = "Super Malario 3D"
                gameDescription=
                {'Super Malario 3D is a 3D platformer with two completed levels. The game is a cancelled sequel to Super Malario Bros and was created for me to practice creating 3D games. ' +
                "The project was in development on-and-off for around a year and the development slowly died out after that. Like it's predicessor, the game is littered with bugs but it might be enjoyable to some." +
                "At it's final state, the game had two finished levels created with ProBuilder." +
                "<br/><br/>" +
                "The game was planned to have a bunch of features, such as five unique levels, an online leaderboard, a boss fight and a story."
                }
                myRole=
                {"N/A"
                }
                gameBanner = {Malario3DImg}
                playLink = "https://github.com/kasperbc/malario3d/releases/tag/release"
                playLinkText="Download"
                sourceLink="https://github.com/kasperbc/malario3d"
                sourceLinkEnabled = {true}
                sourceLinkText="GitHub"
                tech="Unity, 3D, C#, ProBuilder, Git, GitHub"
            />
        </div>
    )
}
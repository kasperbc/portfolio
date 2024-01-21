import Header from "../../components/Header";
import ProjectPage from "../../components/ProjectPage";
import CoWImg from "../../imgs/confict-of-wizards.png";

export default function ConflictOfWizards() {
    return (
        <div>
            <Header />
            <ProjectPage
                gameName = "Conflict of Wizards"
                gameDescription=
                { "Conflict of Wizards is a turn-based RPG battle game about Wizards fighting each other. The player controls a team of three wizards " +
                "and the game controls the opposing team. The game was created by me over the course of three months for a school project in Business College Helsinki."
                }
                myRole=
                {"N/A"
                }
                gameBanner = {CoWImg}
                playLink = "https://github.com/kasperbc/conflict-of-wizards/releases/tag/release"
                playLinkText="Download"
                sourceLink="https://github.com/kasperbc/conflict-of-wizards"
                sourceLinkEnabled = {true}
                sourceLinkText="GitHub"
                tech="C#, .NET, Git, GitHub"
            />
        </div>
    )
}
import Header from "../../components/Header";
import ProjectPage from "../../components/ProjectPage";
import BloomingLoveImg from "../../imgs/blooming-love.png";

export default function BloomingLove() {
    return (
        <div>
            <Header />
            <ProjectPage
                gameName = "Blooming Love"
                gameDescription=
                { "Blooming Love is a flower-themed dating simulator, where you play as a bee and have to go meet various flowers, completing " +
                " bullet-hell sequence minigames along the way to earn their love. And pollen.<br/><br/>" +
                "The game was made by a team of 5 first-year students at JAMK, including me and was developed in six days for the Game Programming course." +
                " The game recieved positive feedback from the professor, noting the impressive scale of the game and potential expandability in such a short time."
                }
                myRole=
                {'I was the programmer of the project, so my tasks involved creating the dialogue system of the game using the <a href="https://www.inklestudios.com/ink/", target="_blank">ink</a>' +
                " narrative scripting language. I also designed and created the UI and the code and sprites for the bullet-hell sequences in the game."
                }
                gameBanner = {BloomingLoveImg}
                playLink = "https://github.com/kasperbc/Blooming-Love/releases/tag/v1.0.0"
                playLinkText="Download"
                sourceLink="https://github.com/kasperbc/Blooming-Love"
                sourceLinkEnabled = {true}
                sourceLinkText="GitHub"
                tech="Unity, 2D, C#, Git, Trello, Pixel Art, Aseprite, Ink (Inkle)"
            />
        </div>
    )
}
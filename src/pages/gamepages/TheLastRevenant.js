import Header from "../../components/Header";
import ProjectPage from "../../components/ProjectPage";

export default function TheLastRevenant() {
    return (
        <div>
            <Header />
            <ProjectPage
                gameName = "The Last Revenant"
                gameDescription=
                { "The Last Revenant is a 2D Metroidvania, where you wake up in a space station now devoid of life and have to escape. Whilst you explore the station," +
                " you find a grappling hook and various logs left by the crew, revealing the truth about what really happened...<br /><br />" +
                " The game is my first proper project created in Godot and was created in 30 days for the Metroidvania Month 22 Jam. The development took place from November 16th to " +
                " December 16th and looking back, perhaps it was not the best time to attend a game jam at the very end of the semester.<br/><br/>" +
                
                " <h3>Results and Post-Jam</h3> " +
                " Several issues were raised in the feedback during the rating period, such as issues relating to player movement, unclear progression and performance issues." +
                    " After the rating period of the jam, the game placed #25 Overall, putting it roughly in the top 25% of the jam submissions.<br/><br/>" +
                    
                " Post-jam, we have been working on an update to address some of the issues, " +
                " but as of writing, the update is not yet done and progress has slowed due to me having to focus on schoolwork and the designer having to go to the army, " +
                " however much dedication has been put towards the project and I am confident it will come out <i>eventually</i>."
                }
                myRole=
                { "I was the programmer and co-designer of this project, so my time was mostly spent on programming the entire game. " +
                "In addition, I also did the UI, some of the 2D sprites and most of the level layouts." }
                gameBanner = "https://img.itch.zone/aW1hZ2UvMjQyMTY1Mi8xNDM1OTQzMi5wbmc=/250x600/fuyrIw.png"
                playLink = "https://kekis.itch.io/the-last-revenant"
                playLinkText="Itch.io"
                sourceLink="https://github.com/kasperbc/TheLastRevenant"
                sourceLinkEnabled = {true}
                sourceLinkText="GitHub"
                tech="Godot, 2D, GDScript, Git, Miro, Pixel Art, Aseprite, Photoshop, Trello"
            />
        </div>
    )
}
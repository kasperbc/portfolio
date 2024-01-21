import Header from "../../components/Header";
import ProjectPage from "../../components/ProjectPage";

export default function Epistasis() {
    return (
        <div>
            <Header />
            <ProjectPage
                gameName = "Epistasis"
                gameDescription=
                {"Epistasis is a 3D scifi-horror game developed with the Unity game engine, where you discover the remnants of a wrecked and abandoned space station and it is up to you to find out what happened, and you might not be the only one there. " +
                    "The game was created by a team of 5 third-year students (including me) as our final project in Business College Helsinki. The development took place from January 2023 to May 2023. <br /><br />" +
                    
                    "The project was done in co-operation with professors Vera Schneider and Eero Manner, as well as Janne Laine, a professional from the game industry. The goal was to emulate what it was like to create a game in the industry all the way from the beginning to the end." +
                    " This included things like creating and presenting the prototype, holding playtests through the development and ultimately demoing the game at a game developer convention." +
                    " The game includes many assets from the Asset Store and other external sources, to which the school gave a budget of 200€." +
                    " Through the development, we used a scrum process, where the development was split into four phases and those were further split into two-week sprints. <br /><br />" +
                    
                    // TODO might write the rest of this later
                    // "<h3>The development of Epistasis</h3>" +
                    // "Through the development, we used a scrum process, where the development was split into four phases and those were further split into two-week sprints," +
                    // " with meetings happening at the beginning of every sprint, where we assessed our progress from the previous sprint and goals towards the next sprint." +
                    // " We were also supposed hold meetings every morning, but that did not end up happening as frequently as planned." +
                    
                    // " <h4>The prototype phase</h4>" +
                    // "It all started in the beginning of January, where we gathered in a classroom on the second floor of the school and were explained the first task, which was to create an initial prototype and present it to the industry professinal, to which we had a month to do so.<br/><br/>" +
                    // "Thus, we got to work. After spending a couple of weeks in a poorly heated classroom in the basement level of the school, we had created a functional prototype with the basic mechanics, some already good-looking graphics and we even got the netcode working early on. " +
                    // "However, those who have played the game might have realized that the game does not have netcode or any online functionality at all and most of the good-looking assets are from external sources. That is because I have decieved you.<br/><br/>" +
                    
                    // "The game I am talking about is not the same as the one currently out now on https://128games.itch.io/epistasis. In fact, this initial prototype was a completely different game, given the nickname Vengeance." +
                    // " To this day, I still like the concept of it, as Vengeance was an online fighting game, where characters from different historical eras, such as a medieval knight, a futuristic cyborg and many others (I cannot remember the other ones)" +
                    // " were pulled into an arena in another universe to fight one another. Why? Well we did not get far enough into development to find out, because at this point a few weeks had nearly passed and we had realized that the game wasn't fun at all, we did not have any good ideas for it and " + 
                    // " none of us knew how to actually make a good fighting game.<br/><br/> " +
                    
                    // " So on the evening of Friday we made the decision to scrap the idea, which was not ideal as we had to present the game next Wednesday and we were supposed to have worked on it for a few weeks already." + 
                    // " At the time, it felt devastating. However, looking back now, it was a good thing this happened.<br/><br/>" + 
                    
                    // " Nonetheless, we returned to school the next week with two days to come up with an idea and present it. After a couple of hours had passed, we did not have any real ideas. However, " + 
                    // " as the project happened during January 2023, I remembered this new technology called ChatGPT and had the idea to consult it for ideas for our project. It took a lot of attempts to get it to produce good ones, but after a while, we ended up between two ideas." + 
                    // " One was to make a 2D game about traversing a world filled with darkness and to fill it with light, with a magical lantern and one was a 3D game about exploring a wrecked space station and finding out the tragedy that had unfolded.<br/><br/>" +
                    // " We were split between the ideas for a good hour or two. On one hand, the 2D game seemed like an appealing option as our previous prototype was already 2D and we could potentially reuse some code and assets from it." + 
                    // " However, me and one other team member were on the side of the 3D game. While we could probably scrape something out of the failed prototype, I thought that there wasn't much there to gather and the concept of the 3D game seemed much more" + 
                    // ' interesting. Ultimately, after a lot of arguing, we decided on the 3D game, which we gave the working title of "Escape from the space station". This name stuck around for a whiiile.<br/><br/>' + 
                    
                    // " The next day, we were brainstorming ideas for our new game while making the presentation for it and quickly enough doomsday arrived and we had to present the project." + 
                    // " Surprisingly enough, it did not go horribly. There were a few questions based on the game we were comparing it to but otherwise we got the go-ahead. (I think in real world terms this would mean that we get funding)." + 
                    // ' In case anyone wants to see the presentation, it is archived <a href="https://kasperbjorkgren.com/Pitch_Deck.pdf" target="_blank">here</a>.<br/><br/>' + 

                    // " After this, there was a week of the prototype phase left, which we used to create the first prototype for the game." +
                    // " Still having the collective trauma from Vengeance, we focused more on making the game playable quickly rather than focusing on the details. In particular, I was responsible for creating the character movement during this time, so" +
                    // " I did it in a rather quick and scrappy way. The intention was to later on replace it with better code, but funnily enough the same character controller stayed all the way until release. In it's final stage, it handles things like" +
                    // " the character movement, the flashlight, the menu that displays the map and your collected items and the enemy sound, all wrapped up in a nice and tidy 756-line package. I would have loved to replace it with a better controller, but at one point " +
                    // " everything was too dependent on it for it to be rebuilt. Working with that thing through the development was not one of the fondest times of the development.<br/><br/>" +
                    
                    // " Regardless, we ended the prototype phase with a small-scale playtest of the demo. And after evaluating the feedback, we moved on to the pre-production phase." +
                    
                    // " <h4>Pre-production phase</h4>" +
                    // " This phase, we had two weeks to plan the game and create a GDD and things went much more smoothly this time." +
                    // " We brainstormed and planned a good chunk of the game, such as the story, core gameplay loop and gameplay mechanics." +
                    // " During this time, the vision for the game started feeling a lot clearer.<br/><br/>" +
                    
                    // " We also came with a lot of ideas that ended up being scrapped later, such as:" +
                    // " <ul>" +
                    // " <li></li>" +
                    // " <li></li>" +
                    // " </ul>" +
                    // " "}
                    " " }
                myRole={"My roles in development were mostly programming-related, such as the Character Movement and Player UI." +
                        ' I also did level design & building, voice acting, sound design and created the trailer for the game.<br/><br/>' +
                        '<iframe width="625" height="351" src="https://www.youtube.com/embed/BoSNThJUqoI" title="Epistasis - Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' }
                gameBanner = "https://img.itch.zone/aW1nLzEyMzM4MzQ0LnBuZw==/315x250%23c/mpNO0F.png"
                playLink = "https://128games.itch.io/epistasis"
                playLinkText = "Itch.io"
                sourceLinkEnabled = {false}
                sourceLinkText="Source available on request"
                tech="Unity, 3D, C#, HDRP, Scrum, Git, Jira, Miro, AI, Navigation, Blender, Photoshop"
            />
        </div>
    )
}
import ProjectCard from "./ProjectCard"
import BloomingLoveImg from "../imgs/blooming-love.png"
import ConflictOfWizardsImg from "../imgs/confict-of-wizards.png"

export default function ProjectShowcase() {
    return (
        <div className="ProjectShowcase">
            <h2>Game Projects</h2>
            <div className="ProjectCards">
                <ProjectCard
                    name="Epistasis"
                    description="A 3D scifi-horror game made by a team of 3rd year students."
                    image="https://img.itch.zone/aW1nLzEyMzM4MzQ0LnBuZw==/315x250%23c/mpNO0F.png"
                    link="/epistasis"
                    type="Practical Training"
                    year="2023"
                    engine="Unity"
                    time="5 months"
                    teamSize="5"
                />
                <ProjectCard
                    name="The Last Revenant"
                    description="A 2D scifi-metroidvania where the main upgrade is a grappling hook."
                    image="https://img.itch.zone/aW1hZ2UvMjQyMTY1Mi8xNDM1OTQzMi5wbmc=/250x600/fuyrIw.png"
                    link="/the-last-revenant"
                    type="Game Jam"
                    year="2023"
                    engine="Godot"
                    time="1 month"
                    teamSize="3"
                />
                <ProjectCard
                    name="Blooming Love"
                    description="A flower-themed dating simulator made for JAMK's Sprint Week."
                    image={BloomingLoveImg}
                    link="/blooming-love"
                    type="School Project"
                    year="2023"
                    engine="Unity"
                    time="1 week"
                    teamSize="5"
                />
                <ProjectCard
                    name="Hope on the Surface"
                    description="A 2D platformer made by an international team."
                    image="https://img.itch.zone/aW1nLzEzOTMyMDk5LnBuZw==/315x250%23c/dIjrqK.png"
                    link="/theres-hope-on-the-surface"
                    type="Game Jam"
                    year="2023"
                    engine="Unity"
                    time="2 days"
                    teamSize="5"
                />
                <ProjectCard
                    name="Descend Fella"
                    description="A 3D arcade-style game about falling with an online leaderboard."
                    image="https://img.itch.zone/aW1nLzEwMzU1NTE3LnBuZw==/315x250%23c/IMKYa9.png"
                    link="/descend-fella"
                    type="Game Jam"
                    year="2022"
                    engine="Unity"
                    time="3 days"
                    teamSize="2"
                />
                <ProjectCard
                    name="Conflict of Wizards"
                    description="A turn-based combat game built in the .NET console."
                    image={ConflictOfWizardsImg}
                    link="/conflict-of-wizards"
                    type="School Project"
                    year="2022"
                    engine=".NET"
                    time="3 months"
                    teamSize="Solo"
                />
                <ProjectCard
                    name="Super Malario Bros."
                    description="Clone of Super Mario Bros, also available on Android."
                    image="https://img.itch.zone/aW1nLzM1MTU0ODQucG5n/315x250%23c/w%2FNB%2Fd.png"
                    link="/super-malario-bros"
                    type="Personal Project"
                    year="2020"
                    engine="Unity"
                    time="2 weeks"
                    teamSize="Solo"
                />
            </div>
        </div>
    )
}
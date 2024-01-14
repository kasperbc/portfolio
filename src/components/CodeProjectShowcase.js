import CodeProjectCard from "./CodeProjectCard"

export default function CodeProjectShowcase() {
    return (
        <div className="ProjectShowcase">
            <h2>Coding Projects</h2>
            <div className="ProjectCards">
                <CodeProjectCard
                    name="kasperbjorkgren.com"
                    description="A portfolio website for Kasper Björkgren. You're looking at it right now!"
                    link="https://kasperbjorkgren.com"
                    year="2024"
                    engine="React"
                />
                <CodeProjectCard
                    name="Paper size calculator"
                    description="A tool for calculating which standard paper size is the closest match to a given size."
                    link="https://kasperbjorkgren.com"
                    year="2023"
                    engine="Python"
                />
                <CodeProjectCard
                    name="Discord data extractor"
                    description="A script for displaying the amount of time you have spent in voice chats from your Discord data package."
                    link="https://kasperbjorkgren.com"
                    year="2023"
                    engine="Python"
                />
                <CodeProjectCard
                    name="Helsinki: The Game Bot"
                    description='A Discord bot for running a hypothetical game inspired by YouTube show "Jet Lag: The Game".'
                    link="https://kasperbjorkgren.com"
                    year="2023"
                    engine="Python"
                />
                <CodeProjectCard
                    name="Teambot"
                    description="A tool for generating balanced teams of people based on skill points."
                    link="https://kasperbjorkgren.com"
                    year="2022"
                    engine="Python"
                />
            </div>
        </div>
    )
}
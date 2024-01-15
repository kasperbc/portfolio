export default function SkillShowcase()
{
    return (
        <div className="SkillShowcase" id="skills">
            <h2>Skills & Technologies</h2>
            <div className="SkillShelves">
                <div className="SkillShelf">
                    <Skill name="C# / .NET" level={1} />
                    <Skill name="Git" level={0.8} />
                    <Skill name="Python" level={0.6} />
                    <Skill name="Godot" level={0.6} />
                    <Skill name="HTML" level={0.6} />
                    <Skill name="CSS" level={0.5} />
                    <Skill name="Java" level={0.5} />
                    <Skill name="React" level={0.25} />
                    <Skill name="MySQL" level={0.2} />
                    <Skill name="Kotlin" level={0.1} />
                </div>
                <div className="SkillShelf">
                    <Skill name="Unity 2D / 3D" level={1} />
                    <Skill name="GitHub" level={0.8} />
                    <Skill name="Microsoft Excel" level={0.7} />
                    <Skill name="GitHub Copilot" level={0.7} />
                    <Skill name="Microsoft Word" level={0.6} />
                    <Skill name="Visual Studio Code" level={0.6}/>
                    <Skill name="Visual Studio 2022" level={0.4}/>
                    <Skill name="Adobe Photoshop" level={0.4} />
                    <Skill name="Blender" level={0.35}/>
                    <Skill name="Adobe Premiere Pro" level={0.3}/>
                </div>
            </div>
        </div>
    );
}

function Skill({ name = "Skill Name", level = 0.0 }) {
    return (
        <div className="Skill">
            <div className="SkillName">
                {name}
            </div>
            <div className="SkillLevel" style={{
                width: "10vw",
                backgroundColor: "lightgray",
                borderRadius: "50rem",
            }}>
                <div className="SkillLevelFill" style={{
                    width: `${level * 100}%`,
                    height: "100%",
                    backgroundColor: "teal",
                    borderRadius: "50rem",
                }}>
                </div>
            </div>
        </div>
    );
}
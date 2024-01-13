export default function SkillShowcase()
{
    return (
        <div className="SkillShowcase">
            <h2>Skills</h2>
            <Skill name="C# / .NET" level={0.1} />
        </div>
    );
}

function Skill({name = "Skill Name", level = 0.0})
{
    return (
        <div className="Skill">
            <div className="SkillName">
                {name}
            </div>
            <div className="SkillLevel">
                {level}
            </div>
        </div>
    );
}
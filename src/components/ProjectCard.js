import { AspectRatio, Card, Chip, CardOverflow } from "@mui/joy"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from "react-router-dom";

export default function ProjectCard({
    name,
    type,
    image,
    description,
    link,
    year,
    engine,
    time,
    teamSize })
{
    return (
        <div className="ProjectCard">
            <Card variant="solid" sx={{ width: "50%" }} className="Card">
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img src={image} alt=""/>
                    </AspectRatio>
                </CardOverflow>
                <div className="ProjectContent">
                    <div className="MainContent">
                        <Link className="ProjectName" to={link}>{name}</Link>
                        <Chip className="ProjectType">{type}</Chip>
                        <p className="ProjectDescription">{description}</p>
                    </div>
                    <div className="ProjectInfos">
                        <div className="ProjectInfo">
                            <CalendarMonthIcon titleAccess="Publish Year"/>
                            <p>{year}</p>
                        </div>
                        <div className="ProjectInfo">
                            <CodeIcon titleAccess="Engine"/>
                            <p>{engine}</p>
                        </div>
                        <div className="ProjectInfo">
                            <AccessTimeIcon titleAccess="Development Time"/>
                            <p>{time}</p>
                        </div>
                        <div className="ProjectInfo">
                            <GroupsIcon titleAccess="Team Size"/>
                            <p>{teamSize}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
import { AspectRatio, Card, Chip, CardContent, CardOverflow, IconButton, Typography } from "@mui/joy"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CodeIcon from '@mui/icons-material/Code';

export default function CodeProjectCard({ name, type, description, link, year, engine, time }) {
    return (
        <div className="ProjectCard" style={{height:"175px"}}>
            <Card variant="solid" sx={{ width: "50%"}} className="Card">
                <div className="ProjectContent">
                    <div className="MainContent">
                        <a className="ProjectName" href={link} target="_blank">{name}</a>
                        <p className="ProjectDescription">{description}</p>
                    </div>
                    <div className="ProjectInfos">
                        <div className="ProjectInfo">
                            <CalendarMonthIcon titleAccess="Year"/>
                            <p>{year}</p>
                        </div>
                        <div className="ProjectInfo">
                            <CodeIcon titleAccess="Language"/>
                            <p>{engine}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
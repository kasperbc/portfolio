import { Card, CardOverflow } from "@mui/joy"

function CardText() {
    return (
        <div>Help</div>
    )
}

export default function ProjectCard() {
    return (
        <Card variant="solid" sx={{ width:"50%"}}>
            <CardOverflow>
                <img src="https://source.unsplash.com/random" alt="random" />
            </CardOverflow>
            <CardText />
            <CardText />
            <CardText />
            <CardText />
            <CardText />
        </Card>
    )
}
import { Button } from "@mui/joy";
import { FaDownload, FaUserLarge } from "react-icons/fa6";

export default function Cover() {
    return (
        <div className="AppCover">
            <div className="CoverImage">
                <img className="CoverBackground" src="https://img.itch.zone/aW1hZ2UvMjA3NjYyNi8xNDY1NTQwOS5wbmc=/original/nOFO87.png" alt='A screenshot from my game "Epistasis"' />
                <div className="CoverCard">
                    <div className="CoverProfileImage">
                        <img src="https://dummyimage.com/100x100/000/fff" alt="random" />
                    </div>
                    <div className="CoverText">
                        <div className="CoverName">
                            Hello, I'm Kasper.
                        </div>
                        <div className="CoverDescription">
                            I am a student in Jyväskylä, studying game development and programming.
                            <div className="CoverButtons">
                                <Button size="lg" variant="soft" startDecorator={<FaDownload />}>Download CV</Button>
                                <Button size="lg" variant="soft" style={{ top:"-2px" }} component="a" href="#contact">Contact</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
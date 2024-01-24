import { Button } from "@mui/joy";
import { FaDownload } from "react-icons/fa6";
import PortraitImg from "../imgs/portrait.png";

export default function Cover() {
    return (
        <div className="AppCover">
            <div className="CoverImage">
                <img className="CoverBackground" src="https://img.itch.zone/aW1hZ2UvMjA3NjYyNi8xNDY1NTQwOS5wbmc=/original/nOFO87.png" alt='A screenshot from my game "Epistasis"' />
                <div className="CoverCard">
                    <div className="CoverProfileImage">
                        <img src={PortraitImg} alt="random" />
                    </div>
                    <div className="CoverText">
                        <div className="CoverName">
                            Hello, I'm Kasper.
                        </div>
                        <div className="CoverDescription">
                            I am a game development student in Jyväskylä, Finland. Welcome to my portfolio!
                            <div className="CoverButtons">
                                <Button size="lg" variant="solid" startDecorator={<FaDownload />} component="a" href="https://kasperbjorkgren.com/Kasper_Bjorkgren_CV_En.pdf" target="_blank">Download CV</Button>
                                <Button size="lg" variant="solid" style={{ top:"-2px" }} component="a" href="#contact">Contact</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
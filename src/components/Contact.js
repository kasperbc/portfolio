import { Button, ButtonGroup } from "@mui/joy";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaItchIo } from "react-icons/fa";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <div className="ContactHeader">
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <div className="ContactDetails">
                <div className="ContactDetail">
                    <MailOutlineIcon className="ContactDetailIcon"/>
                    <p>kasper.bjorkgren@gmail.com</p>
                </div>
                <div className="ContactDetail">
                    <PhoneIcon className="ContactDetailIcon"/>
                    <p>+358 44 320 7761</p>
                </div>
            </div>
            <div className="ContactButtons">
                <ButtonGroup>
                    <Button size="lg" startDecorator={<LinkedInIcon />} component="a" href="https://www.linkedin.com/in/kasper-bj%C3%B6rkgren-25b279279/" target="_blank">LinkedIn</Button>
                    <Button size="lg" startDecorator={<GitHubIcon />} component="a" href="https://github.com/kasperbc" target="_blank">GitHub</Button>
                    <Button size="lg" startDecorator={<FaItchIo />} component="a" href="https://kekis.itch.io" target="_blank">Itch.io</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
import { Button, ButtonGroup } from '@mui/joy'
import '../pages/projectpage.css'

export default function ProjectPage({
    gameName,
    gameDescription,
    tech,
    myRole,
    gameBanner,
    playLink,
    playLinkText = "Play",
    sourceLink,
    sourceLinkEnabled = true,
    sourceLinkText = "GitHub",
}) {
    

    return (
        <div className="Page">
            <div className="ProjectPage">
                <div className="Cover">
                    <div className="CoverImage">
                        <img className="CoverBackground" src={gameBanner} alt='A screenshot of the game' />
                        <div className="CoverText">
                            <h1 dangerouslySetInnerHTML={{__html: gameName}} />
                        </div>
                    </div>
                </div>

                <div className="Content">
                    <h2>Background</h2>
                    <p dangerouslySetInnerHTML={{__html: gameDescription}} />
                    <h2>My Role</h2>
                    <p dangerouslySetInnerHTML={{ __html: myRole }} />
                    <h2>Links</h2>
                    <ButtonGroup>
                        <Button variant="solid" color='primary' size='md' component='a' href={playLink} target='_blank'>{playLinkText}</Button>
                        <Button variant="solid" color='primary' size='md' disabled={!sourceLinkEnabled} target='_blank'
                            component='a' href={sourceLink}>{sourceLinkText}</Button>
                    </ButtonGroup>
                    <h2>Tech</h2>
                    <p dangerouslySetInnerHTML={{ __html: tech }} />
                </div>
            </div>
        </div>
    )
}
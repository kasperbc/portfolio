import MovieIcon from '@mui/icons-material/Movie';
import BrushIcon from '@mui/icons-material/Brush';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function AboutMe()
{
    return (
        <div className="AboutMe">
            <h2>About me</h2>
            <div className="AboutMeText">
                <p>Hello, I am a 19-year old student, currently studying programming and game development in Jyväskylä.
                My game development journey started in 2015, when created my first game in Scratch and I have been learning everything I can about it ever since.
                    I am a passionate developer and I love problem-solving and the process of "What is the best way to do this?".
                </p>
            </div>
            <h3>My other hobbies include:</h3>
            <div className="AboutMeHobbies">
                <div className="Hobby">
                    <MovieIcon className="HobbyIcon"/>
                    <p className="Hobby">Video Editing</p>
                </div>
                <div className="Hobby">
                    <BrushIcon className="HobbyIcon"/>
                    <p className="Hobby">Art</p>
                </div>
                <div className="Hobby">
                    <LocalActivityIcon className="HobbyIcon"/>
                    <p className="Hobby">Event Organization</p>
                </div>
            </div>
        </div>
    );
}
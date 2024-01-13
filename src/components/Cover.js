export default function Cover() {
    return (
        <div className="AppCover">
            <div className="CoverImage">
                <img className="CoverBackground" src="https://dummyimage.com/1920x1080/000/fff" alt="random" />
                <div className="CoverCard">
                    <div className="CoverProfileImage">
                        <img src="https://dummyimage.com/100x100/000/fff" alt="random" />
                    </div>
                    <div className="CoverText">
                        <div className="CoverName">
                            Hello, I'm Kasper.
                        </div>
                        <div className="CoverDescription">
                            I am a first-year student in Jyväskylä, studying game development and programming.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
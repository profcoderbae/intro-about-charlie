import React from "react"
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Facts About Me</h1>
            <ul className="main--facts">
                <li>My name is Charlie Nghondzweni</li>
                <li>I am an aspiring Software Developer, currently doing my Honours in BSc Computer Science</li>
                <li>I am very passionate about the field of computer science as a whole, because it allows me to think critically,learn and grow beyond my imaginations</li>
                <li>I consider myself as a hardworker which I have proven through my academics, my achievements in sports, coding projects, side business hustles and charity programmes I ran</li>
                <li>During my free time I like reading books. The current book I am reading is The Laws of Human Nature by Robert Greene</li>
                <li>I am a long-distance runner, I obtained position two in provincials competition in the North West province</li>
                <li>I love baking and I used to sell muffins</li>
                <li>I believe in giving back and assisting the ones in in need, which led me to create two NPOs, first is <b>Kurhula a Kuve Na N'wina</b> where we would assist homeless people in Mafikeng town by giving them food monthly</li>
                <li>Second NPO is <b>Matende X</b> an educational programme that assist grade 12 learners with applications for tertiary education and bursaries</li>
                <li>I have managed a couple of software engineering projects we were given during my undergraduate studies, and all this experience has helped me gain good communication skills, ability to work under pressure, enhanced my passion, and booosted my coding skills</li>
                <li>Working with a team and leading it, sharpened my leadership skills</li>
                
                
            </ul>
            <h1 className="main--title">Reasons I want to be a developer at SovTech</h1>
            <ul className="main--facts">
                <li>Mission and goals that SovTech values are very much aligned with mine.</li>
                <li>The valuable mentorship that I will be exposed to, will help me to grow in the field and to standout from the crowd.</li>
                <li>The passion that the company have for software engineering I believe, I would learn a lot in SovTech regarding software engineering and the diversity it's broad I would like to work with all races.</li>
                <li>It's an award winning end-to-end custom software development company, thus my experience will be expanded in a big way </li>
    
            </ul>

            <div>
                <h3>
                    CONNECT WITH ME
                </h3>
            </div>
            <div className="main--social">
                <div><BsFacebook /></div>
                <div><BsTwitter /></div>
                <div> <BsLinkedin /></div>
            </div>
                <div>
                    <h3>MY GALLERY</h3>
                </div>
            
            <div className="footer--text">
                <p>@2022 Copyright Charlie Nghondzweni</p>
            </div>
        </main>
    )
}
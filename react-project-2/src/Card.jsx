import profilepicture from './assets/Images/profilepicture.png'
import teamwork from './assets/Images/team-work.png'


function Card() {
    return (
        <>
        <div className="card" >
            <img className="card-image" src={profilepicture} alt="profile picture " ></img>
            <h1 className="card-title"  >  Bilkis Naher </h1>
            <p> I make Youtube videos and play video games</p>
        </div>
        <hr/>
         <div className="card" >
         <h1 className="team-title"> My team </h1>
         <img className="card-team-image" src={teamwork} alt="team-work " ></img>
         <p className="card-text"  > I always appreciate my team members as having unique enthusiasm and hard-working</p>
         <hr/>
     </div>
     <hr/>
        
     </>
    )
}

export default Card
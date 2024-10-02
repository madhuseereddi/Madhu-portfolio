import "./index.css";

const Home = (props) => {
    const {darkMode} = props
    console.log(darkMode)
    return (
        <div className="home-page">
            <div className="inner-home">
                <div className="profile-dt">
                    <h1 className= {darkMode ? "greeting1" : "greeting2"}>Hi There,</h1>
                    <h1 className="name">
                        <span className="first-name">I'm Madhu</span>
                        <span className="last-name"> Seereddi</span>
                    </h1>
                    <h1 className= {darkMode ? "welcome-message-1" : "welcome-message-2"}>
                        Welcome to My <span className="portfolio">Portfolio</span>
                    </h1>
                

                    {/* Social Media Links */}
                    <div className="social-media">
                        <a href="https://www.facebook.com/madhu.seereddy.5?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1726993782/icons8-facebook-48_taneav.png" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/madhuseereddy?igsh=MW96cWlneXlocXAxZw==" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1726993783/icons8-instagram-48_c9qxim.png" alt="Instagram" />
                        </a>
                        <a href="https://wa.me/7995875236" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1726993782/icons8-whatsapp-48_bnly5q.png" alt="WhatsApp" />
                        </a>
                        <a href="https://t.me/learn_stack" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1726993782/icons8-telegram-48_kxvocl.png" alt="Telegram" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC01-E3EmI8qsVutqnAZVkCA" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1726993782/icons8-youtube-48_kcm5t6.png" alt="YouTube" />
                        </a>
                        <a href="https://twitter.com/saimadhu5236" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1726993782/icons8-twitter-48_kjtllr.png" alt="Twitter" />
                        </a>
                    </div>
                    <a href="/NXTWAVE_madhuResume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <button className='sys-res-btn sys-btn'>Resume/CV</button>
        </a>
                </div>
                <div className="img-container">
                    <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1715870052/img1_ttzjto.jpg" className="profile-image" alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;

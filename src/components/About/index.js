import "./index.css";


const About = (props) => {
    // Sections Array including Personal Info with detailed descriptions
    const sections = [
        {
            img: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_1:1/v1722603180/madhudp_hdrhlc.png",
            title: "About Me",
            description: "Hello! I’m Madhu Seereddi, a passionate Full Stack Developer based in Amalapuram. I specialize in creating responsive and user-friendly web applications, utilizing technologies such as Node.js, React.js, HTML, CSS, and SQL. My journey in tech began during my B.Tech in Electronics and Communication Engineering, where I developed a strong foundation in both front-end and back-end development. I am dedicated to delivering scalable and maintainable solutions that enhance user experiences."
        },
        {
            img: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_1:1/v1727497011/books-with-graduation-cap-digital-art-style-education-day_23-2151164325_garwtf.avif",
            title: "Personal Projects",
            description: "Throughout my journey, I have developed several personal projects that showcase my skills and creativity. One of my notable projects is a responsive portfolio website that highlights my skills, projects, and professional background. Additionally, I built a dynamic Resume Builder application, allowing users to create, customize, and download professional resumes with ease. Another project includes an IPL Dashboard that presents real-time data using React.js. Each project has taught me valuable lessons in problem-solving and effective coding practices."
        },
        {
            img: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_1:1/v1727496682/Untitled-design-825x510_rgzrx1.png",
            title: "Technical Skills",
            description: "I possess a wide array of technical skills that enable me to excel in various aspects of development. My proficiency includes front-end technologies like React.js, HTML, and CSS, as well as back-end development using Node.js and SQL databases. I am also familiar with Python, Java, and MongoDB. My expertise extends to UI/UX design principles, allowing me to create visually appealing and user-friendly applications. Additionally, I leverage tools like Git, AWS, and VSCode to streamline my workflow and collaborate effectively."
        },
        {
            img: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_1:1/v1727496888/man-getting-award-writing_74855-5891_nmd8eu.avif",
            title: "Achievements",
            description: "I have been recognized for my contributions to the tech community and my academic excellence. I secured 2nd prize in a college coding event, showcasing my problem-solving abilities and competitive spirit. I have also taken on the role of Teaching Assistant at the NxtWave platform, where I help fellow learners enhance their coding skills. My involvement in various coding competitions, hackathons, and open-source projects has further enriched my experience and knowledge in the field."
        },
        {
            img: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_1:1/v1727497011/books-with-graduation-cap-digital-art-style-education-day_23-2151164325_garwtf.avif",
            title: "Education",
            description: "I am currently pursuing a B.Tech in Electronics and Communication Engineering at Sasi Institute of Technology & Engineering, where I maintain a GPA of 10.0. My education has equipped me with a solid understanding of engineering principles and programming concepts. Prior to this, I completed my Intermediate education at Sri Chaitanya Junior College, achieving a GPA of 10.0. My strong academic background has provided me with the tools necessary to excel in my technical endeavors."
        },
        {
            img: "https://res.cloudinary.com/dx97khgxd/image/upload/c_crop,ar_1:1/v1727497086/hobbies_and_interests_in_resume_qpjpsc.png",
            title: "Hobbies",
            description: "Outside of coding, I have a range of hobbies that keep me engaged and inspired. I enjoy listening to music, which helps me relax and recharge. Learning CSS animations is another passion of mine, as it allows me to enhance my web development skills. I also love watching movies, especially mythological series that spark my imagination. Additionally, I participate in community events, workshops, and coding competitions, as they offer valuable opportunities for growth and networking."
        }
    ];

    return (
        <div className="about">
        
            {/* Sections Rendering */}
            <div className="about-sections">
                {sections.map((section, index) => (
                    <div key={index} className="about-section">
                        <div className={`about-person ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="about-part2">
                                <img 
                                    src={section.img} 
                                    alt={section.title} 
                                    className="my-img" 
                                />
                            </div>
                            <div className={props.darkMode ? "about-part11" : "about-part22"}>
                                <h3>{section.title}</h3>
                                <p>{section.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;

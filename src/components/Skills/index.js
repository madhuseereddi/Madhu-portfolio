import { Component } from "react";
import "./index.css"

const techSkills = [
    {
      name: "HTML",
      description: "Markup language for creating web pages and web applications.",
      usage: "Frontend",
      logoLink: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
    },
    {
      name: "CSS",
      description: "Stylesheet language used to describe the look and formatting of a document written in HTML.",
      usage: "Frontend",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    {
      name: "JavaScript",
      description: "Scripting language used to create dynamic website content and interactivity.",
      usage: "Frontend, Backend",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      name: "ReactJS",
      description: "JavaScript library for building user interfaces, particularly single-page applications.",
      usage: "Frontend",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine for building backend services.",
      usage: "Backend",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
      name: "SQL",
      description: "Structured Query Language used for managing relational databases.",
      usage: "Database",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
    },
    {
      name: "MongoDB",
      description: "NoSQL database program that uses JSON-like documents with optional schemas.",
      usage: "Database",
      logoLink: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
    },
    {
      name: "C",
      description: "General-purpose programming language used in system software, application development, etc.",
      usage: "Backend, Systems",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
    },
    {
      name: "C++",
      description: "Extension of C programming language with object-oriented features.",
      usage: "Backend, Systems",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
    },
    {
      name: "Python",
      description: "High-level programming language known for its readability and versatility.",
      usage: "Backend, Data Science",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    },
    {
      name: "Java",
      description: "Object-oriented programming language used for building web, mobile, and enterprise applications.",
      usage: "Backend",
      logoLink: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
    },
    {
      name: "Bootstrap",
      description: "Frontend framework for designing responsive web applications.",
      usage: "Frontend",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
    },
    {
      name: "UI/UX",
      description: "Design principles focusing on creating user-friendly and visually appealing interfaces.",
      usage: "Frontend",
      logoLink: "https://www.innovation.wiki/wp-content/uploads/2022/05/UX-UI-Design.jpg"
    },
    {
      name: "Git",
      description: "Version control system for tracking changes in source code during software development.",
      usage: "Development Tools",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
    },
    {
      name: "Command Line",
      description: "Interface for typing text commands to perform specific tasks in an operating system.",
      usage: "Development Tools",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Icons8_flat_command_line.svg"
    },
    {
      name: "Power BI",
      description: "Business analytics tool to visualize data and share insights.",
      usage: "Data Visualization",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
    },
    {
      name: "AWS",
      description: "Cloud computing platform offering a wide range of services for storage, computation, and networking.",
      usage: "Cloud Services",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    {
      name: "VSCode",
      description: "Source-code editor developed by Microsoft, supporting various programming languages and features.",
      usage: "Development Tools",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
    },
    {
      name: "Figma",
      description: "Web-based interface design tool for collaboration and prototyping.",
      usage: "Design Tools",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
    },
    {
      name: "Communication Skills",
      description: "Soft skill focused on conveying ideas effectively in verbal and non-verbal formats.",
      usage: "Soft Skills",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Employee_Training_-_Communication_Skills_Illustration.jpg"
    },
    {
      name: "Leadership",
      description: "Ability to lead and manage teams, projects, or organizations successfully.",
      usage: "Soft Skills",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Leadership_Skills_-_Illustration.jpg"
    },
    {
      name: "Time Management",
      description: "Skill focused on effectively managing time to meet deadlines and productivity goals.",
      usage: "Soft Skills",
      logoLink: "https://upload.wikimedia.org/wikipedia/commons/3/34/Il_pomodoro.jpg"
    }
  ];
  
  class Skills extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isDarkMode: false,
      };
    }
  
    toggleTheme = () => {
      this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
    };
  
    renderSkillsByCategory(category) {
      return techSkills
        .filter(skill => {
          switch (category) {
            case 'Frontend':
              return skill.usage.includes('Frontend');
            case 'Backend':
              return skill.usage.includes('Backend');
            case 'Database':
              return skill.usage.includes('Database');
            case 'Others':
              return !['Frontend', 'Backend', 'Database'].some(cat => skill.usage.includes(cat));
            default:
              return false;
          }
        })
        .map(skill => (
          <div key={skill.name} className={this.props.darkMode ? "list-item1" : "list-item2"}>
            <img src={skill.logoLink} alt={skill.name} className="logo1" />
            <h3 className="skillname">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ));
    }
  
    render() {
      const { isDarkMode } = this.state;
  
      return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      
          <div className="skills">
            <h2 className= {this.props.darkMode ? "skills2" : "skills1"}>Frontend Skills</h2>
            <div className="list-items">{this.renderSkillsByCategory('Frontend')}</div>
  
            <h2 className= {this.props.darkMode ? "skills2" : "skills1"}>Backend Skills</h2>
            <div className="list-items">{this.renderSkillsByCategory('Backend')}</div>
  
            <h2 className= {this.props.darkMode ? "skills2" : "skills1"}>Database Skills</h2>
            <div className="list-items">{this.renderSkillsByCategory('Database')}</div>
  
            <h2 className= {this.props.darkMode ? "skills2" : "skills1"}>Other Skills</h2>
            <div className="list-items">{this.renderSkillsByCategory('Others')}</div>
          </div>
        </div>
      );
    }
  }
  
  export default Skills;
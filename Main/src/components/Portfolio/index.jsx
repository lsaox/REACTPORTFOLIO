import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'WeatherDashboard',
      description: 'API USAGE, CSS, HTML, JAVASCRIPT',
      link: "https://lsaox.github.io/WeatherApiHW/",
      repo: "https://github.com/lsaox/WeatherApiHW"
    },
    {
      name: 'RZRKT',
      description: 'WEB DESIGN, CSS, SHOPIFY',
      link: "https://rzrkt.com",
      
    },
    {
      name: 'DudeWheresMyBrew',
      description: 'API USAGE, HTML, CSS, JAVASCRIPT',
      link: "https://fractalicecream.github.io/DudeWheresMyBrew/",
      repo: "https://github.com/FractalIceCream/DudeWheresMyBrew"
    },
    {
      name: 'WorkDayScheduler',
      description: 'JQUERY, JAVASCRIPT, CSS,  HTML',
      link: "https://lsaox.github.io/Day-Planner-Homework/",
      repo: "https://github.com/lsaox/Day-Planner-Homework"
    },
    {
      name: 'PasswordGenerator',
      description: 'JAVASCRIPT, HTML, CSS',
      link: "https://github.com/lsaox/password-generator-homework/",
      repo: "https://github.com/lsaox/password-generator-homework"
    },
    {
      name: 'LilahAndGraysonsArt',
      description: 'HTML, CSS',
      link: "https://lsaox.github.io/LilahandGraysonGallery/",
      repo: "https://github.com/lsaox/LilahandGraysonGallery"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

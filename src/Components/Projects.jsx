import { useState } from 'react';
import '../Styles/Projects.css';

const Projects = ({ data, isVisible }) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProjects = data.projects.filter(project => {
    const techStack = Array.isArray(project.techStack) ? project.techStack.join(', ') : project.techStack;
    return (
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      techStack.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className={`projects ${isVisible ? 'scroll-up' : ''}`}>
      <div className="nav">
        <div><h1>My Projects</h1></div>
        <div className="search-bar">
          <input
            className='search-input'
            type="text"
            placeholder="Search by project title or skills..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <hr />
      <div className="project">
        {filteredProjects.map((project,index) => (
          <div className='project-card' key={index}>
            <div className='projectimage'><img src={project.image.url} alt="" /></div>
            <div className='project-title'>
              <span>{project.techStack}</span><br />&nbsp;
              <h4>{project.title}</h4>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquam amet corporis maxime dolor temporibus est adipisci enim maiores, consectetur non, vel laboriosam velit in aut vitae deleniti accusantium dolore sit laudantium. Odit voluptates veniam quas fugit ducimus eaque voluptatibus officiis, provident fugiat consectetur, vel facere reiciendis adipisci saepe consequatur!</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React from 'react';

import TechList from '../tech-list';

const ProjectInfo = ({ project }) => {
  return (
  <section className="flex px-8 sm:px-24 flex-col sm:flex-row justify-between">
      <div className="flex flex-col w-full sm:w-2/3">
        <h2 className="text-xxl sm:text-heading">{project.shortDescription}</h2>
        <p className="text-base my-8">{project.description}</p>
        <div className="mt-0">
          <a className="btn" target="__blank" rel="noopener" style={{ color: project.color, border: `1px ${project.color} solid` }} href={project.url}>Launch project</a>
          {project.github && (
            <a href={project.github} target="__blank" rel="noopener" className="ml-2 sm:ml-6 btn">View on GitHub</a>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-12 sm:mt-0">
        <div className="flex">
          <div className="mr-auto sm:mr-12">
            <h3 style={{ color: project.color }}>Completed</h3>
            <span className="">{project.completed}</span>
          </div>
          <div>
            <h3 style={{ color: project.color }}>My role</h3>
            <ul>
              {project.role.map((r, i) => <li className="" key={i}>{r}</li>)}
            </ul>
          </div>
        </div>
        <div className="col-span-2 w-full mt-6">
          <h3 style={{ color: project.color }}>Made with</h3>
          <TechList items={project.tech} />
        </div>
      </div>
    </section>
  )
}

export default ProjectInfo;
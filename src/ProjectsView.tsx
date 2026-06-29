import greatEmpireImage from './assets/great-empire.png'
import content from './content.json'
import ContactLink from './ContactLink'

function getProjectImage(image: string, imageKey: string) {
  if (imageKey === 'greatEmpire') {
    return greatEmpireImage
  }

  return image
}

function ProjectsView() {
  return (
    <section className="portfolio" aria-label="Проекты">
      {content.sections.map((section, sectionIndex) => (
        <section className="portfolio__section" aria-labelledby={section.id} key={section.id}>
          <div className="portfolio__intro">
            <h2 id={section.id}>{section.title}</h2>
            <p>{section.description}</p>
          </div>

          <div className="portfolio__projects">
            {section.projects.map((project, projectIndex) => {
              const projectImage = getProjectImage(project.image, project.imageKey)

              return (
                <article className={`project-card ${project.imageFit === 'contain' ? 'project-card--logo' : ''}`} style={{ animationDelay: `${(sectionIndex + projectIndex) * 140 + 180}ms` }} key={project.title}>
                  {projectImage ? (
                    <img className={`project-card__image ${project.imageFit === 'contain' ? 'project-card__image--contain' : ''}`} src={projectImage} alt={`${content.imageAltPrefix} ${project.title}`} />
                  ) : (
                    <div className="project-card__image project-card__image--placeholder" aria-hidden="true">{project.placeholder}</div>
                  )}
                  <div className="project-card__content">
                    <h3>{project.title}</h3>
                    {'subtitle' in project && project.subtitle && (
                      <p className="project-card__subtitle">{project.subtitle}</p>
                    )}
                    {'downloads' in project && project.downloads && (
                      <dl className="project-card__stats">
                        <div>
                          <dt>{content.downloadsLabel}</dt>
                          <dd>{project.downloads}</dd>
                        </div>
                      </dl>
                    )}
                    <p className="project-card__description">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}</a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
      <ContactLink />
    </section>
  )
}

export default ProjectsView

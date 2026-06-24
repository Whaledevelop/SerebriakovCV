import { useState } from 'react'
import avatar from './assets/avatar.jpg'
import greatEmpireImage from './assets/great-empire.png'
import content from './content.json'
import './App.css'

function getProjectImage(image: string, imageKey: string) {
  if (imageKey === 'greatEmpire') {
    return greatEmpireImage
  }

  return image
}

function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

  return (
    <main className={`site ${isPortfolioOpen ? 'site--portfolio-open' : ''}`}>
      <section className="intro" aria-labelledby="name">
        <div className="intro__content">
          <div className="intro__identity">
            <img className="intro__avatar" src={avatar} alt={content.hero.avatarAlt} />
            <div className="intro__copy">
              <p className="intro__eyebrow">{content.hero.eyebrow}</p>
              <h1 id="name">{content.hero.name}</h1>
              <p className="intro__role">{content.hero.role}</p>
            </div>
          </div>
          {!isPortfolioOpen && (
            <button className="intro__action" type="button" onClick={() => setIsPortfolioOpen(true)}>
              {content.hero.actionLabel}
            </button>
          )}
        </div>
      </section>

      {isPortfolioOpen && (
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
                        <p className="project-card__subtitle">{project.subtitle}</p>
                        {project.downloads && (
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
        </section>
      )}
    </main>
  )
}

export default App

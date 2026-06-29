import content from './content.json'
import ContactLink from './ContactLink'

function SkillsView() {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <section className="skills__section" aria-labelledby="skills-title">
        <div className="skills__intro">
          <h2 id="skills-title">{content.skillsPage.skillsTitle}</h2>
          <p>{content.skillsPage.skillsDescription}</p>
        </div>
        <div className="skill-groups">
          {content.skillsPage.groups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="skills__section" aria-labelledby="code-samples-title">
        <div className="skills__intro">
          <h2 id="code-samples-title">{content.skillsPage.codeTitle}</h2>
          <p>{content.skillsPage.codeDescription}</p>
        </div>
        <div className="code-samples">
          {content.skillsPage.codeSamples.map((sample) => (
            <a className="code-sample" href={sample.url} target="_blank" rel="noreferrer" key={sample.title}>
              <span>{sample.title}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <ContactLink />
    </section>
  )
}

export default SkillsView

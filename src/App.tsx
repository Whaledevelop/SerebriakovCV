import { useState } from 'react'
import avatar from './assets/avatar.jpg'
import content from './content.json'
import ProjectsView from './ProjectsView'
import SkillsView from './SkillsView'
import './App.css'

type ActiveView = 'projects' | 'skills' | null

function App() {
  const [activeView, setActiveView] = useState<ActiveView>(null)
  const isContentOpen = activeView !== null

  function openView(view: ActiveView) {
    setActiveView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className={`site ${isContentOpen ? 'site--portfolio-open' : ''}`}>
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
          <div className="intro__actions">
            <button className={`intro__action ${activeView === 'projects' ? 'intro__action--active' : ''}`} type="button" aria-pressed={activeView === 'projects'} onClick={() => openView('projects')}>
              {content.hero.actionLabel}
            </button>
            <button className={`intro__action intro__action--secondary ${activeView === 'skills' ? 'intro__action--active' : ''}`} type="button" aria-pressed={activeView === 'skills'} onClick={() => openView('skills')}>
              {content.hero.skillsActionLabel}
            </button>
          </div>
        </div>
      </section>

      {activeView === 'projects' && <ProjectsView />}
      {activeView === 'skills' && <SkillsView />}
    </main>
  )
}

export default App

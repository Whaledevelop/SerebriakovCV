import content from './content.json'

function ContactLink() {
  return (
    <footer className="contact">
      <p>{content.contact.title}</p>
      <div className="contact__links">
        <a href={content.contact.url} target="_blank" rel="noreferrer">{content.contact.label}</a>
        <a href={content.contact.resumeUrl} target="_blank" rel="noreferrer">{content.contact.resumeLabel}</a>
      </div>
    </footer>
  )
}

export default ContactLink

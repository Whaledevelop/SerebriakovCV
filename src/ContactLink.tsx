import content from './content.json'

function ContactLink() {
  return (
    <footer className="contact">
      <p>{content.contact.title}</p>
      <a href={content.contact.url} target="_blank" rel="noreferrer">{content.contact.label}</a>
    </footer>
  )
}

export default ContactLink

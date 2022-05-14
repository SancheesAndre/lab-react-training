import './Greetings.css'

const Greetings = (props) => {
    const { lang, children } = props

    const setGreeting = (lang) => {
        if (lang == 'de') {
            return "Hallo"
        } else if (lang == 'en') {
            return "Hello"
        } else if (lang == 'es') {
            return "Hola"
        } else if (lang == 'fr') {
            return "Bonjour"
        }
    }
    return (
        <div className='greetingText'>
            <p>{setGreeting(lang)} {children}</p>
        </div>
    )
}

export default Greetings
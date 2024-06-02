import { socials } from "../js/socials"

function Socials() {
    return (
        <div className="socials flex jc-sbetween ai-center">
            {socials.map((social, index) => {
                return (
                    <div key={index}>
                        <a href={social.url}>{social.title}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Socials
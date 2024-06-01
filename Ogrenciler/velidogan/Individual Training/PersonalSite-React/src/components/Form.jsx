import React from 'react'

function Form() {
    const inputs = ["name","surname","email"]
    return (
        <>
            <form className="contact-form needs-validation" action="https://formspree.io/f/xvoevlow" method="post" noValidate>
                {
                    inputs.map((input,index)=>(
                        <div className={input} key={index}>
                            <input name={input} type="text" className="input w-100 text-light" placeholder={input} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please Enter your {input}
                            </div>
                        </div>
                    ))
                }
                <div className="message">
                    <textarea name="message" className="input w-100" placeholder="Enter your messsage..." required></textarea>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please Enter your message...
                    </div>
                </div>
                <button type="submit" className="btn-primary">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    SEND MESSAGE
                </button>                    
            </form>
            <script>{
                (() => {
                    'use strict'

                    const forms = document.querySelectorAll('.needs-validation')

                    Array.from(forms).forEach(form => {
                        form.addEventListener('submit', event => {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                        }, false)
                    })
                })()}
            </script>
        </>
  )
}

export default Form
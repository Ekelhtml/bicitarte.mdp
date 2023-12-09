///TUTORIAL PARA HACER LA CUENTA; GUARDAR COMO TOKEN LAS CREDENCIALES Y VALIDAR EL MAIL
///https://www.youtube.com/watch?v=MV-Aqkjju64

const formBtn = document.querySelector('#form-btn')

const sendEmail = (e) =>  {
    e.preventDefault()
    const form = e.target.parentElement.parentElement
    const isValid = form.reportValidity()
    if(isValid){
        const mail = document.querySelector('#form-mail')
        const name = document.querySelector('#form-name')
        const body = document.querySelector('#form-body')
        Email.send({
            SecureToken: "5011668a-d529-421e-9dd7-ddfd24f011ad",
            To: 'demofirebase41@gmail.com',
            From: "demofirebase41@gmail.com",
            Subject: `Consulta de ${name.value}`,
            Body: `RESPONDER A ${mail.value}. ${body.value}`,
        })
            .then(function (message) {
                alert("mail sent successfully")
                form.reset()
            })
            .catch(e => console.log(e))

    }

}

formBtn.addEventListener('click', sendEmail)
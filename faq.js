const FAQ = {
    tours: [
        {
            title: "Salida y regreso",
            question: "¿Desde dónde salen para emprender los recorridos? ¿Siempre se encuentran en el mismo punto? ¿Tienen alguna dirección para que dejemos asentada?",
            answer: "Salimos desde Ricardo Gutierrez 589. A 1 cuadra del museo mar y a 2 del mar. ¡Salimos y volvemos juntos!"
        },
        {
            title: "Horarios de los recorridos",
            question: "¿Tienen horarios estipulados de salidas para cada recorrido? ¿Horario de incio y de regreso?",
            answer: "8 y 17 hs (puede cambiar segun el clima, escribinos!)"
        },
        {
            title: "Días de servicio",
            question: "¿Se puede coordinar una salida cualquier día de la semana?",
            answer: "Sí! se reprograma o suspende en dia de lluvias"
        },
        {
            title: "Promociones",
            question: "¿Ofrecen algún tipo de promoción por grupos de personas?",
            answer: "4x3 ! Vienen 4 y solo pagan 3!"
        },
        {
            title: "Edades",
            question: "¿Hay alguna edad mínima para poder hacer los recorridos? ¿Cuentan con bicicletas para niños?",
            answer: "Menores de hasta 15 kg pueden venir con padre o madre con sillita y casco sin cargo. Mayores de 15 años hasta 18 años acompañados con un tutor."
        },

    ],
    rent: [
        {
            title: "Dirección de retiro",
            question: "¿Podrías indicarnos la dirección exacta para retirar las bicicletas?",
            answer: " Ricardo Gutierrez 589. A 1 cuadra del museo mar y a 2 del mar."
        },
        {
            title: "Horarios de entrega y devolución",
            question: "¿El alquiler es por cierta cantidad de horas en el día, por ejemplo de 9 a 20 hs? ¿Se pueden alquileres de 24 hs? ¿Pueden alquilar más de 1 día? ¿Hasta qué hora tienen para hacer la devolución?",
            answer: "A combinar"
        }
    ]
}

const toursFAQ = document.querySelector('#tours')
const rentFAQ = document.querySelector('#rent')

const toogleAnswer = (e) => {
    e.target.nextElementSibling.classList.toggle('open')
}

const createCard = (faq, idx) => {
    const faqCard = document.createElement('div')
    const faqTitle = document.createElement('h4')
    const faqQuestion = document.createElement('h5')
    const faqAnswerDiv = document.createElement('div')
    const faqAnswer = document.createElement('p')
    faqTitle.textContent = `${idx+1}. ${faq.title}`;
    faqQuestion.textContent = faq.question;
    faqAnswer.textContent = faq.answer;
    faqCard.classList.add('faq-card')
    faqAnswerDiv.classList.add('faq-div')
    faqCard.appendChild(faqTitle)
    faqCard.appendChild(faqQuestion)
    faqAnswerDiv.appendChild(faqAnswer)
    faqCard.appendChild(faqAnswerDiv)
    faqQuestion.onclick = toogleAnswer
    return faqCard;
}

const printQuestionsOnDOM = () => {
    const {tours, rent} = FAQ;
    tours.forEach( (faq, idx) => {
        const card = createCard(faq, idx)
        toursFAQ.appendChild(card)
         })
    rent.forEach( (faq, idx) => {
        const card = createCard(faq, idx)
        rentFAQ.appendChild(card)
         })
}

printQuestionsOnDOM()


const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    
    const options = {
        from: "MrDonald's",
        to: data.email,
        subject: 'Ваш заказ',
        html: `
            <div>
                <h2>Здравствуйте ${data.nameClient}</h2>
                <h3>Ваш заказ: </h3>
                <ul>
                    ${data.order.map(({ name, count, toppings, choices }) => (
                        `<li>
                            <h4>${name} - ${count}</h4>
                            ${toppings !== 'no toppings' ? `<p>Добавки: ${toppings}</p>` :
                            choices !== 'no choices' ? `<p>${choices}</p>` : ''}
                        </li>`
                    )).join('')}
                </ul>
                <span>Итоговая цена: ${data.totalPrice}</span>
            </div>
        `
    };

    transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => sendOrderEmail(order.val()));

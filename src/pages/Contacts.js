import React from 'react'
import ContactForm from '../components/ContactForm';
export default function Contacts() {
    return (
        <section className="contacts-container">
            <h1>Фондация „Интелектуален клуб КОСМОС – Димитър Брацов“</h1>
            <h3><address>Aдрес: гр. Стара Загора, кв. „Три чучура-север“, бл. 79, ап. 01</address></h3>
            <h3>Mоб. тел.:<phone> 0898 679 609</phone></h3>
            <h3>Имейл:<email> bimed@mail.bg</email></h3>
            <h3>Contact us</h3>
            <ContactForm />
        </section>
    )
}

import React, { Component } from 'react';

import homeData from '../data/homeData';
import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';
//import Client from '../contentful';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            visible: true,
            data: []
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    // getData = async () => {
    //     try {
    //         Client.getEntries({
    //             content_type: "cosmosApp",
    //             order: 'sys.createdAt'
    //         }).then((response) => {
    //             this.setState({
    //                 data: response.items
    //             })
    //         }
    //         )
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    componentDidMount() {

        // this.getData();
        this.setState({
            data: homeData
        })

    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })

    }

    render() {
        return (
            <>
                <section className={this.state.visible ? "container" : "container show"}>
                    <pre>
                        Република България<br />
                        Интелектуален елит на:<br />
                        Град Стара Загора<br />
                        Община Стара Загора<br />
                        Област Стара Загора<br />
                        Целият български народ на Нейно Величество:<br />
                        Православна Майка България!<br />
                        И към всички братя Българи<br />
                        в другите Българии, останали<br />
                        зад държавната ни граница!<br />
                    </pre>
                    <h1 className="center">О Б Р Ъ Щ Е Н И Е</h1>
                    <h4 className="center">(СПОДЕЛЕНО)</h4>
                    <p className="center">
                        От Димитър Генов Брацов<br />
                        Председател –  моб. тел.: 0898 679 609<br />
                        на Фондация „Интелектуален клуб КОСМОС – Димитър Брацов“<br />
                        гр. Стара Загора, кв. „Три чучура-север“, бл. 79, ап. 01<br />
                    </p>
                    <pre>
                        Уважаеми колеги,<br />
                        всички Вие, съпричастни<br />
                        с поетичното, изящното, Божественото слово,<br />

                    </pre>
                    <Container data={this.state.data} />
                    <pre className="italic">
                        Януари, 2021 г.		    	  С уважение <br />
                        Гр. Стара Загора	    	    	към всички вас: ………………. <br />
                        Резиденция „Змейово“    	Президент: Димитър Брацов <br />
                    </pre>
                    <hr />
                    <pre>
                        P.S. Следва продължение:<br />
                        I.	Учредители на Фондация „Космос – Димитър Брацов“<br />
                        II.	Печатен орган<br />
                        III.	Автори – презентирани на страниците на списанието<br />
                        IV.	Национален и с международно участие конкурс „Николай Лилиев“- Лауреати<br />
                        V.	Абонати на списанието<br />
                        VI.	Рекламодатели в списанието:<br />
                        1.	ЕТ „Бимед – Иванка Брацова“ – Стара Загора<br />

                    </pre>
                </section>
                <ToggleBtn
                    handleToggle={this.handleToggle}
                    visible={this.state.visible}
                />
            </>
        )
    }
}



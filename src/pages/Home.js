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
                    <h1 className="center">ОБЩИНА СТАРА ЗАГОРА,
                    ФОНДАЦИЯ “КОСМОС - ДИМИТЪР БРАЦОВ” – СТАРА ЗАГОРА
                    СПИСАНИЕ «ПТИЦИ В НОЩТА»,
                    НАРОДНО ЧИТАЛИЩЕ “НИКОЛАЙ ЛИЛИЕВ-2005” - СТАРА ЗАГОРА,
                    ДРУЖЕСТВО НА ПИСАТЕЛИТЕ – СТАРА ЗАГОРА
                    НАРОДНО ЧИТАЛИЩЕ „ДАСКАЛ ПЕТЪР ИВАНОВ – 1988“
                    С ПЕЧАТЕН ОРГАН - ВЕСТНИК „ЛИТЕРАТУРЕН ГЛАС“,
                    ИЗДАТЕЛСКИ КОНСОРЦИУМ “КОТА” - СТАРА ЗАГОРА
                    РЕГИОНАЛНА БИБЛИОТЕКА “ЗАХАРИЙ КНЯЖЕСКИ” – СТ.ЗАГОРА
                    </h1>
                    <h1 className="center">
                        ОБЯВЯВАТ
                    </h1>
                    <h1 className="center">
                        ОСМИ  НАЦИОНАЛЕН И С МЕЖДУНАРОДНО УЧАСТИЕ КОНКУРС
                        ЗА ПОЕЗИЯ „АКАДЕМИК НИКОЛАЙ ЛИЛИЕВ“ 2021 г. СТАРА ЗАГОРА

                    </h1>
                    <div>
                        Конкурсът е анонимен, без възрастови ограничения, на свободна тема.
                        Всеки автор от България или от чужбина изпраща до 3 (ТРИ)
                        поетични произведения, написани на кирилица, шрифт Times New Roman,
                        размер на шрифта 12, във формат .odt, .doc, .docx или .rtf
                        на електронен адрес:   ptici_liliev@abv.bg
                        в срок от 12 април 2021 г.  до 24.00 ч. на 16 май 2021 година
                    </div>
                    <div>
                        <u> Писмата (имейлите)</u> трябва да съдържат заглавие Относно: „За конкурса“ и ДВА прикачени файла – единият - с трите стихотворения заедно, а другият - с личните данни на участника (трите имена, възраст, точен адрес, телефон), за да бъдете идентифицирани при крайното класиране. В първия прикачен файл трябва да присъстват единствено стихотворенията на участника. Не вписвайте личните си данни в този файл!
                    </div>
                    <div>
                        <u>Журито оценява стихотворенията анонимно!</u>
                    </div>
                    <div>
                        На всяка творба се зачислява номер на пристигането (входящ номер).
                    </div>
                    <div>
                        <u>Допълнителни изисквания:</u> Участващите творби трябва да са авторски, непубликувани под каквато и да е форма (на хартия, в Интернет, под формата на аудио и/или видео). Не се допускат и не се приемат стихотворения, участвали в предишни издания на конкурса!
                    </div>
                    <div>
                        <u>Ограничение за дължината</u> на едно стихотворение – до 30 (тридесет) реда.

                    </div>
                    <div>
                        Творбите, които не отговарят на условията, не се допускат до участие.
                        <u>В конкурса не могат да участват със свои творби:</u>
                    </div>
                    <ul>
                        <li>членовете на конкурсното жури;</li>
                        <li>носителите на награди от предишните седем поетични конкурси;</li>
                        <li>участниците в организацията, провеждането и отчитането на конкурса.</li>
                    </ul>
                    <div>
                        <u>Публикации на творбите:</u> Авторите запазват изключителните права върху своите стихотворения! С изпращането на своите стихотворения всеки участник се съгласява
                        да предостави на списание „Птици в нощта“ и вестник „Литературен глас“,
                        както и на сайтовете   literaturenglas.com  и   fondaciakosmosdb.com
                        правата за публикация на авторовите творба.

                    </div>
                    <div>
                        <u> Ще бъдат присъдени следните награди:</u>
                    </div>
                    <div>
                        Първа награда - 500 лв., Втора награда – 400 лв., Трета награда - 300 лв.
                        Четвърта награда – 200 лева и Пета награда - 100 лв.
                    </div>
                    <div>
                        Всички получават и Почетна грамота и презентация
                        на страниците на в. „Литературен глас“, сп. „Птици в нощта“ и на двата сайта.
                        Наградите ще бъдат връчени на 26 май 2021 г. (сряда) от 18 ч. в Конферентната зала
                        на Регионална библиотека „Захарий Княжески“ - Стара Загора.
                        Лауреатите (отличените автори) автори поемат пътните си разноски.
                    </div>

                    <h1 className="center">Начало на обръщение</h1>
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



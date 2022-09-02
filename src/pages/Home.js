import React, { Component } from 'react';


import homeData from '../data/homeData';
//import Container from '../components/Container';
import ToggleBtn from '../components/ToggleBtn';
//import Image from '../components/Image.js';
//import imageData from '../data/imageData';
//import Client from '../contentful';
import img1 from "../images/MADJARSKI  SNIMKA.jpg";
import img2 from "../images/photo001.jpg";
import img3 from "../images/photo002.jpg";


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

                        <img src={img2} class="img img-center"alt='Easter one'/>

                    <h1 className='center'>ВЕЛИКДЕНСКИ ПОСТИ...</h1>
                    <h2 className='center'>/Христос ли воскресе.../</h2>
                   <pre>
                   <div>
                   Сълза да отрониш за просяка, <br></br>
                    коричка от хляба си ти да дариш <br></br>
                    и вечният глад и болната мъка <br></br>
                    в душата му плаха ти да стопиш... <br></br>
                    Д. Брацов <br></br><br></br>
                   </div>

                   <p className='italic'>
                   Боже мой, в Светлината на празника теб ще помоля:-<br></br>
                    От небето високо тихо да слезеш, <br></br>
                    за малко да спреш пред църковните порти, <br></br>
                    да видиш тук на Земята, дали по Небесната Воля <br></br>
                    до болка, от глад посиняват ръцете на хиляди смъртни.<br></br>

                    Паричката, твоята древна монета не искам за мене. <br></br>
                    Ти за мен си и Бог и свидетел, <br></br>
                    нека тя да остане Спомен за тебе. <br></br>
                    Суха коричка, огризка от великденска постна вечеря <br></br>
                    и капчица вино от тялото божие, <br></br>
                    от Иисуса искам да вкуся..<br></br><br></br>

                    Сълза да отрониш, мили мой боже, за мене, за Просяка,  <br></br>
                    трохичка от снощният, от постният хляб на мен да дариш <br></br>
                    и побелелият глад на очите и недоспалата болка <br></br>
                    душата самотна на просяка, миром, с ръка да приспиш...<br></br> <br></br>

                    Камбаните медни и тази, както и всяка друга година <br></br>
                    в захлас, до забрава, Твоето име пак ще възнасят <br></br>
                    Христос ли воскресе? - Небето смирено ще питат... <br></br><br></br>

                    Надеждата плаха и свята на гладните смъртни <br></br>
                    по божият свят Птиците в песен пак ще разнасят. <br></br>
                    Мечтата божествена Просяка пак ще погали<br></br>
                    и пак ще разплита <br></br>
                    в сънят му тревожен въпросите вечни:- <br></br>
                    Воистина ли, Боже, Иисуса Христа в душите ни<br></br>
                    плахи и детски <br></br>
                    за кой ли път и отново, пак ще възкръсне. <br></br>

                    25.04.2013 г.<br></br>
                    </p>

                  </pre>
                   <img src={img3} class="img img-center"alt='Easter two'/>


                    <h1 className="center">ЗА ПОСЛЕДНО СБОГОМ…
                    </h1>
                    <div>
                        На 4 януари 2022 г. на 82-годишна възраст, ни напусна Стойчо Маджарски.
                    </div>
                    <div>
                        „Брилянтен майстор на поетичното слово, блестящ журналист, изящен автор на проза и ценен преводач от руски език, с ярко присъствие в старозагорския поетичен небосклон. С многостранна дейност и обществени ангажименти, в които влагаше еднаква отговорност, принципност и всеотдайност. Безрезервно отдаден на каузата, наречена Читалище, той бе председател на НЧ „Съзнание 1900″-с. Казанка повече от десетилетие, а до края на жизнения си път остана съпричастен към неговата дейност! Оставаш в сърцата ни, поете! Светъл да е пътят ти!“, се казва още в съобщението от официалната Фейсбук страница на отделите „Култура“ и „Туризъм и младежки дейности“ към Община Стара Загора..
                    </div>
                    <div>
                        Стойчо Маджарски (Стойчо Митев Стойчев), български поет, прозаик и преводач, е роден на 22.02.1939 г. в село Маджерито, община Стара Загора. Завършва средното си образование в Стара Загора (1957) и българска филология във ВТУ „Св. св. Кирил и Методий” - В. Търново (1980). Работи в Коми - АССР като директор на Дом за култура, журналист в българския вестник и телевизия (1972-1990). Бил е заместник- главен редактор на сп. „Участие” и Завеждащ редакция в Радиовъзел - Стара Загора. Има публикувани стихотворения във в. „Септември”, „Литературен глас”, в сп. „Участие”, „Птици в нощта”, „Кула”, „Съвременност” (Македония) и др. Работил е и като главен редактор на в. „Синя поща” и е основател на сп. „Птици в нощта”, излизало в Стара Загора (1999-2004). Бил е отговорен секретар на в. „Литературен глас”. Носител на наградата за литература и изкуство „Николай Лилиев”, голямата награда на Съюза на руските писатели през 2008 г. - „Златен Есенински медал”, на Петнайстата награда „Золотая муза” (2009), на орден „Кирил и Методий” - II степен и още десет отличия. Член е на Съюза на свободните писатели. Автор на 23 книги, 11 от които с поезия - „Вик от тайгата” (стихове, 1989), „Смях без мито” (хумор, 1990), „Бяла магия” (1992), „И все душата ми е жадна” (1994), „Докато дойде денят” (1996), „Врата” (1997), „Звездни бързеи” (1999), проза - „Под сянката на студения паралел. Сборник документални разкази” (2001) и др. Преводи: „Ще си издигна паметник неръкотворен. Избрана лирика от А. С. Пушкин” (1990, „Щом горя, до пепел нека бъде!… Избрани стихотворения от С. А. Есенин” (2000), „Тъжните славеи на Русия”

                    </div>
                    <div>
                        (2013) и др. Превежда и от френски език. Живееше в с. Казанка, община Стара Загора.
                    </div>
                    <img src={img1} className="img img-center" alt="Logo" />



                    <pre> I. КАТАРЗИС <br></br>
                    (С дълбока скръб споделям<br></br>
                    спомен скъп за Стойчо Маджарски)<br></br>
                    Пътуват, топят се бавно снеговете и годините!<br></br>
                    По стъпките на Времето бели облаци летят, <br></br>
                    отмерват крачки барабаните.<br></br>
                    Отиват си след тях – по пътя звезден към могилите<br></br>
                    Господата и Другарите, – от Бога най-избраните.<br></br>
                    Заспиват Дните, задрямали в чакалните на Гарите<br></br>
                    в очакване на пореден безнадежден черен Влак!<br></br>
                    Билета скъсан, Божи Стих последен<br></br>
                    в две ръце – прощалното Есе<br></br>
                    и недоспала, недопята Песен, <br></br>
                    която в душата си ще носим до Безкрая чак!<br></br>
                    Потегляме, Приятелю, прегърнали цветя<br></br>
                    надежди и розови мечти<br></br>
                    за оня Райски, по-добрия Свят по Божите Селения, <br></br>
                    дето ще го дирим цяла Вечност<br></br>
                    при далечните Звезди, <br></br>
                    а там да бродят в Сънят ни вечен космически видения…<br></br>
                    От перона празен, на път ще ни изпрати нас утехата, <br></br>
                    че на Земята, за другите след нас, ние сме оставили<br></br>
                    Божи дар извечен, <br></br>
                    стихът ни земен, <br></br>
                    люлчината Песен, <br></br>
                    и Палитрата, и четките<br></br>
                    от нас на скрито, в късен час<br></br>
                    за всички вас пред Райските врати<br></br>
                    в дар някъде оставили…<br></br>
                    С последно Сбогом: Димитър Брацов<br></br>
                    Фондация „Космос – Д. Брацов“<br></br>
                    Династия Брацови<br></br>
                    Интелектуален елит на Стара Загора<br></br>
                    4 януари 2022 г.<br></br>
                    Стара Загора, Резиденция „Змейово“                    </pre>

                    <pre>
                    II. НА ПРОЩАВАНЕ<br></br>
                    В памят на Стойчо Маджарски -<br></br>
                    Съосновател на Фондация „Космос – ДБ“,<br></br>
                    В тъжен Ден изпращам на Небето<br></br>
                    най-добрият наш Другар, Колега и Приятел <br></br>
                    и с воплите на зимен, декемврийски Вятър <br></br>
                    заплакаха всички Божи птици по полето!<br></br>
                    Господ-Бог и Той изхлипа в Тишината!<br></br>
                    Божите сълзи събира в топли шепи Самотата <br></br>
                    и пак ли, в будно Утро ще литне недоспала Чучулига, <br></br>
                    Теб да дири високо горе нейде в Синевата!<br></br>
                    Нощта отново в Ято Птиците събира!<br></br>
                    Сама самичка и Тя ще плаче в Самота.<br></br>
                    И плаках аз на тъмно, заедно с Дъжда, <br></br>
                    когато Ти си тръгна много тъжен от Света!<br></br>
                    Ще те сънуват в огън всички мои Сетива, <br></br>
                    теб Единствен и след Теб, - усмивката игрива <br></br>
                    и в небесносиньо Утро твоят спомен неспокоен <br></br>
                    за кой ли път и отново, пак ще ме събужда и приспива…<br></br>
                    С последно Сбогом: Димитър Брацов<br></br>
                    Фондация „Космос – Д. Брацов“<br></br>
                    Династия Брацови
                    Интелектуален елит на Стара Загора<br></br>
                    4 януари 2022 г.<br></br>
                    Стара Загора, Резиденция „Змейово“                    </pre>
                 <pre>
                    III. РЕКВИЕМ<br></br>
                    За Стойчо Маджарски -<br></br>
                    Основател на списание „Птици в нощта“<br></br>
                    В края на Земният ти Път,<br></br>
                    видях в този неизбежен тъжен Миг, <br></br>
                    Теб Те драсна Господ-Бог завинаги <br></br>
                    от Неговият, невидимият Списък!<br></br>
                    Ще прати Той Колесница с Огнени коне, <br></br>
                    от този грешен Свят, от Земята да те вземе.<br></br>
                    Ще го помоля Аз на Колене, -<br></br>
                    на Самотният ти Гроб да дойдат<br></br>
                    топли, бели, южни Ветрове, -<br></br>
                    да те погалят, да си вземат Сбогом с Теб <br></br>
                    и Те, - за Теб да викнат Песен за последно…<br></br>
                    Зная, на прощаване, не ще поискаш<br></br>
                    нито Писък, <br></br>
                    нито Вопъл, <br></br>
                    нито Вик.<br></br>
                    Ще помолиш, отгоре да ти сложат <br></br>
                    скромен Божи Кръст <br></br>
                    и да хвърлят после <br></br>
                    шепичка за сбогом, <br></br>
                    от родната, <br></br>
                    от нашенската Пръст!...<br></br>
                    С последно Сбогом: Димитър Брацов<br></br>
                    Фондация „Космос – Д. Брацов“<br></br>
                    Династия Брацови<br></br>
                    Интелектуален елит на Стара Загора<br></br>
                    4 януари 2022 г.<br></br>
                    Стара Загора, Резиденция „Змейово                </pre>



                </section>
                <ToggleBtn
                    handleToggle={this.handleToggle}
                    visible={this.state.visible}
                />

<section className={this.state.visible ? "container" : "container show"}>
               <h1 className='center'>НАПРАВЛЕНИЯ ЗА 2022 ГОДИНА</h1>
              <>
                    <div>

                        <br/>
                        I  направление:  Поезия, Белетристика, Публицистика <br/>
                        Комисия по номинацията: <br/>
                        Дружество на писателите – Стара Загора, ръководство: <br/>
                        1. Таньо Клисуров – председател <br/>
                        2. Виолета Бончева – член <br/>
                        3. Йордан Пеев – член <br/> <br/>

                        Номинирани за 2022 г.: <br/>
                        1. Стойчо Митев Стойчев (Маджарски) - посмъртно <br/>
                        1.1. Стойност на номинацията – 1000 лв. <br/>
                        1.2. Възпоменателна грамота <br/>
                        1.3. Цел: Издаване на книга – Избрани произведения <br/> <br/>

                        Примерно заглавие: „Молитва за прошка, молитва за обич“ <br/> <br/>

                        Мото: И за мен спомняйте <br/>
                        винаги с добро, - <br/>
                        защото винаги съм бил <br/>
                        от една сама Звезда – <br/>
                        отронена сълза. <br/> <br/>

                        Обявяване: 1 ноември 2022 г. – Стара Загора <br/>
                        РБ „Захарий Княжески“, Ден на Народните Будители (Апостоли) <br/> <br/>

                        Редакционен колектив: <br/>
                        1. Таньо Клисуров – Гл. Редактор на книгата <br/>
                        2. Живка Стойчева – Редактор Логистика <br/>
                        3. Йордан Пеев – редактор <br/>
                        4. Виолета Бончева – редактор <br/>
                        5. Йордан Атанасов – редактор <br/>
                        6. Десислава Малчева – предпечат, дизайн <br/> <br/>

                        Задачи:   1)  ноември – декември 2022 г.  – изготвяне, предпечат + издаване на книгата -  за Коледа 2022 г. <br/>
                        2) януари 2023 г. – Възпоменателна презентация на книгата пред интелектуалната общност на Стара Загора – РБ „Захарий Княжески“ <br/> <br/>

                        II направление:  Изобразително изкуство, Живопис, Хералдика <br/> <br/>

                        Комисия по номинацията: <br/> <br/>

                        1. проф. Марин Добрев – съпредседател <br/>
                        2. Милен Алагенски – съпредседател <br/>
                        3. Валентин Дончевски - член <br/> <br/>

                        Номинирани за 2022 г.: <br/>
                        1. Христо Николов Танев – посмъртно <br/>
                        1.1. Стойност на номинацията – 1000 лв. <br/>
                        1.2. Възпоменателна грамота <br/>
                        1.3. Цел: Издаване на сборник: <br/>
                        - Публицистика – АЗ-ът на българите <br/>
                        - Хералдика <br/>
                        - Живопис <br/>
                        Каталог на неговите художествени произведения. <br/>
                        Примерно заглавие: „За вас живях, за вас болях!“ <br/> <br/>

                        Мото: И бях АЗ – <br/>
                        от една сама Звезда <br/>
                        отронена сълза… <br/> <br/>

                        Обявяване: 1 ноември 2022 г. – Стара Загора <br/>
                        РБ „Захарий Княжески“, Ден на Народните Будители (Апостоли) <br/> <br/>

                        Редакционен колектив: <br/>
                        1. Трифон Митев – Гл. Редактор <br/>
                        2. Николай Христов Танев – логистика, редактор <br/>
                        3. Огнян Христов Танев – Логистика, редактор <br/>
                        4. Таньо Клисуров  - редактор (по родова линия) <br/>
                        5. НЧ „Христо Танев – 2020“ – корпоративен член: <br/>
                            5.1. Емилия Симова – Председател, логистика <br/>
                            5.2. Васа Русева – Секретар, логистика <br/> <br/>

                        Задачи: <br/>
                        1) След 01.11.2022 г. – до 01.03.2023 г.  – издаване на сборника <br/>
                        2) На Първа пролет, 2023 г. – презентация на книгата <br/>
                        - Възпоменание за него - Христо Танев <br/> <br/>


                        III направление: <br/>
                        Обществено-полезна Читалищна (Апостолска) дейност <br/> <br/>

                        Комисия по номинацията: <br/>
                        1. Съюз на народните читалища – София <br/>
                            1.1. – Николай Дойнов – Председател <br/>
                        2. Община Стара Загора <br/>
                            2.1. Диана Атанасова <br/>
                            2.2. Анелия Овчарова <br/> <br/>

                        Номинирани за 2022 г.: <br/>
                        1. Иван Аяров – Заслужил деятел – посмъртно <br/>
                        1.1. Стойност на номинацията – 1000 лв. <br/>
                        1.2. Възпоменателна грамота <br/>
                        1.3. Цел: Издаване на сборник творческа биография: <br/>
                            - поезия, белетристика, публицистика <br/>
                            - Обществено-полезна (Апостолска) читалищна дейност <br/> <br/>

                        Обявяване: 1 ноември 2022 г. – Стара Загора <br/>
                        РБ „Захарий Княжески“, Ден на Народните Будители (Апостоли) <br/>

                        Редакционен колектив: <br/>
                        1. Трифон Митев – Гл. Редактор <br/>
                        2. НЧ „Св. Климент Охридски“ – логистика <br/>
                            2.1. Васил Герлимов – председател <br/>
                            2.2. г-жа Михайлова  – секретар <br/>
                            2.3. Творческият колектив на читалището <br/> <br/>

                        Задачи: <br/>
                        1) от 01.11.2022 г.  – 20.12.2022 г. редакция + издаване на сборника <br/>
                        2) на 22.12.2022 г.- в киносалона на Читалището – Възпоменателна вечер за д-р Иван Аяров  + презентация на сборника. <br/>


                        Съставил: <br/>
                            Димитър Брацов <br/> <br/> <br/>



                        ПЕРСПЕКТИВА ЗА 2023 ГОДИНА <br/> <br/>

                        I направление: <br/> <br/>

                        Поезия, белетристика, публицистика <br/> <br/>

                        1. Номинация – Таньо Стоянов Клисуров <br/>
                        Поет, писател, публицист <br/> <br/>

                        2. Номинация - Виолета Бончева <br/>
                        Поет, преводач, испанист <br/> <br/>

                        3. Номинация: академик Крум Георгиев <br/>
                        Поет, фолклорист <br/> <br/>

                        4. Номинация – Йордан Цонев Атанасов <br/>
                        Поет, писател, публицист <br/> <br/>

                        5. Номинация – доц. Злати Златев - посмъртно <br/>
                        Художник <br/> <br/>


                        В последващи години проектът „Златен фонд“ продължава. <br/> <br/>

                        Президент на Фондацията: <br/>
                        Димитър Брацов <br/>

                    </div>
              </>



           </section>
           <ToggleBtn
               handleToggle={this.handleToggle}
               visible={this.state.visible}
           />
            </>
        )
    }
}

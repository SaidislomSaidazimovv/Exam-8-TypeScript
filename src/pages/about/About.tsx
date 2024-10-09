import { useState, useEffect } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10 px-5 lg:px-32">
      <h1 className="text-3xl font-bold text-center mb-6 animate-fade-in">
        Красота без границ
      </h1>

      <div className="lg:flex lg:justify-between w-full">
        <div className="lg:w-2/3 mb-10 lg:mb-0 mr-24 space-y-6">
          <p className="text-base leading-relaxed transition-all duration-300">
            Приветствуем в захватывающем мире MAKEUP! Уже сейчас здесь гостит
            свыше 340 млн пользователей из разных стран, а приобретенные ими
            товары достигают ежегодной отметки в 50 млн.
          </p>
          <p className="text-base leading-relaxed transition-all duration-300">
            Мы уверены, для красоты не должно быть границ и преград, поэтому
            обеспечиваем доступ к нескончаемому разнообразию косметических
            продуктов и сервисов для всех бьюти-адептов.
          </p>
          <p className="text-base leading-relaxed transition-all duration-300">
            Наша цель — дать вам возможность найти в мире красоты все, что
            пожелаете, и даже больше.
          </p>
          <p className="text-base font-semibold leading-relaxed text-black transition-all duration-300">
            Один из самых мощных онлайн-бьюти-ритейлеров Европы, MAKEUP уже
            успешно работает в 36 странах. Каждый день мы продолжаем работать
            для вас, расширяя горизонты MAKEUP и создавая потрясающий мир
            красоты.
          </p>
        </div>

        <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-bold mb-4">Контакты</h3>
          <p className="text-gray-700 mb-2">МЫ ВСЕГДА НА СВЯЗИ!</p>
          <p className="text-purple-600 underline mb-4 cursor-pointer hover:text-purple-600 transition-all duration-300">
            Написать нам письмо
          </p>
          <p className="text-gray-700">+998 712 050 578</p>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-black transition-all duration-300">
          Самый широкий ассортимент бьюти-товаров
        </h2>
        <p className="text-base w-[1230px] leading-relaxed transition-all duration-300">
          Свыше 3000 брендов и 164 000 товаров — наша команда знает, что
          является актуальным именно <br /> сегодня и появление каких брендов вызовет <br />
          ажиотаж у настоящих ценителей косметики и парфюмерии.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-black transition-all duration-300">
          Официальное партнерство с топ-брендами
        </h2>
        <p className="text-base leading-relaxed w-[1230px] transition-all duration-300">
          MAKEUP авторизирован и работает по прямым контрактам с самыми крупными <br />
          luxe-брендами: YSL, Lancome, Biotherm, Armani, Prada, Valentino, Estee
          Lauder, Clinique… <br /> Мы гордимся, что сотрудничаем с официальными
          поставщиками и предлагаем  <br />исключительно оригинальные товары, <br />
          уникальные коллекции и дополнительные преимущества от брендов.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-black transition-all duration-300">
          Шопинг с комфортом
        </h2>
        <p className="text-base leading-relaxed w-[1230px] transition-all duration-300">
          Вы замечали, что часто необходимые бьюти-продукты расположены на <br />
          шопинг-карте максимально неудобно? Любимый шампунь — у мастера в <br />
          салоне, тушь и подводка — в отдельной сети магазинов, космецевтика — <br />
          исключительно в аптеке. Мы считаем, что на изнурительных марафонах для<br />
          пополнения запасов и продолжительных поисках выгодных предложений
          стоит поставить точку!
        </p>
        <p className="text-base leading-relaxed transition-all duration-300">
          MAKEUP собрал в ассортименте все категории, бьюти-товары из самых <br />
          удаленных уголков планеты и в разных вариациях — от масс-маркета до <br />
          люкса. Современная система контроля цен, мониторинг актуальных новинок <br />
          и мегаудобная доставка позволят вам наслаждаться покупками, экономя <br />
          время для более важных дел. За годы своего существования MAKEUP стал <br />
          синонимом комфортного шопинга, мы не останавливаемся и ежедневно
          улучшаем наш сервис!
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-black transition-all duration-300">
          Шоу-румы для удачного выбора
        </h2>
        <p className="text-base leading-relaxed w-[1230px] transition-all duration-300">
          ТОП-бренды luxe-сегмента, уникальные нишевые парфюмы, органическая<br />
          косметика и товары для профессионалов представлены в шоу-румах MAKEUP. <br />
          Здесь можно получить консультацию от специалистов, пройти hi-tech <br />
          диагностику особенностей вашей кожи, индивидуально подобрать средства <br />
          для ухода и протестировать то, что вас интересует.
        </p>
        <p className="text-base leading-relaxed transition-all duration-300">
          Два просторных шоу-рума работают в Киеве (ТРЦ «Атмосфера») и Варшаве <br />
          («Воля-Парк»). Для постоянных клиентов MAKEUP действуют онлайн-цены
          сайта.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-black transition-all duration-300">
          MAKEUP Beauty Atelier
        </h2>
        <p className="text-base leading-relaxed w-[1230px] transition-all duration-300">
          Уже много лет мы специализируемся на индустрии красоты, работаем с <br />
          ведущими брендами и экспертами, что позволило нам объединить<br />
          высококлассных мастеров, эффективные бьюти-продукты, талант и<br />
          технологии в едином пространстве — бьюти-салоне MAKEUP. Стайлинг и<br />
          уход за волосами, лечебная косметология и hi-tech процедуры доступны в <br />
          MAKEUP Beauty Atelier в г. Варшаве.
        </p>
        <p className="text-base leading-relaxed transition-all duration-300">
          Пн-Сб, с 10:00 до 21:00. <br /> Телефон для записи: +48 602 661 809 <br /> E-mail:
          salon.wolapark@makeup.pl
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-black transition-all duration-300">
          В тренде beauty-мира
        </h2>
        <p className="text-base leading-relaxed w-[1230px] transition-all duration-300">
          MAKEUP знает о ваших предпочтениях, мыслях и мечтах. Ежегодно наши <br />
          клиенты получают более 1 млн подарков. Пробники, миниатюры, дегустации <br />
          редких ароматов, постоянные акции, квесты с ценными призами и <br />
          специальные предложения — мы всегда стремимся открывать для вас что-то <br />
          новое и помогаем находить своих фаворитов!
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-black transition-all duration-300">
          Заботимся о будущем
        </h2>
        <p className="text-base leading-relaxed transition-all duration-300">
          Наша цель — видеть красоту во всех уникальных проявлениях, <br />
          подчеркивать и создавать ее в окружающем нас мире…
        </p>
        <p className="text-base leading-relaxed  w-[1230px] transition-all duration-300">
          Мы заботимся о будущем планеты и постоянно работаем над проектами по<br />
          переработке и сознательному потреблению. Мы отказались от<br />
          использования полиэтилена для упаковки посылок, заменив его бумагой,<br />
          которая, как и наши брендовые коробки, подлежит переработке. В 2022 <br />
          году мы внедрили специальное оборудование, что позволило нам в <br />
          процессе упаковывания использовать экологичный скотч.
        </p>
        <p className="text-base leading-relaxed w-[1230px] transition-all duration-300">
          Мы поддерживаем бренды, которые заботятся об окружающем мире, а также <br />
          предоставляем клиентам информацию о текущих sustainable-инновациях в <br />
          упаковке и ингредиентах. Vegan, Bio, PETA – с помощью специального <br />
          фильтра нашим клиентам легко найти товары, которые имеют
          соответствующие сертификаты.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-black transition-all duration-300">
          Пространство вдохновения
        </h2>
        <p className="text-base leading-relaxed transition-all duration-300">
          Обзоры, свотчи, тесты, секреты и советы экспертов... Мы создали
          пространство, <br /> которое дарит вдохновение.
        </p>
        <p className="text-base leading-relaxed w-[1230px] transition-all duration-300">
          Свыше 2 млн подписчиков Facebook, более 700 тыс. фолловеров Instagram, <br />
          ТОП-Youtube-канал, online-дайджест, блог бьюти-редакции, более 3 млн <br />
          отзывов о товарах на сайте, специальное сообщество Makeup club для <br />
          обмена бьюти-советами и опытом — за годы работы мы построили <br />
          уникальный информационный портал и обрели огромное количество
          поклонников.
        </p>
        <p className="text-base leading-relaxed transition-all duration-300">
          Присоединяйтесь к MAKEUP и вместе с нами творите бьюти-историю!
        </p>
      </div>
    </div>
  );
};

export default About;

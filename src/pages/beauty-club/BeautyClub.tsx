import { useEffect, useState } from "react";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";
import Img4 from "../../assets/4.png";

const BeautyClub = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
          <span className="black-white font-semibold text-lg">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center font-semibold text-4xl mb-7 mt-9">
        Beauty Club
      </h2>
      <div className="flex justify-center items-center py-12 px-6 bg-white">
        <div className="max-w-md mr-64">
          <h1 className="text-2xl font-semibold mb-6">
            Получайте подарок на ваш день рождения
          </h1>
          <p className="text-sm mb-4">
            Маленький секрет прекрасного настроения подготовил MAKEUP Beauty
            Club. Выбирайте подарок ко Дню рождения. Ведь это так приятно!
          </p>
          <p className="text-lg font-semibold mb-2">Что вы получаете:</p>
          <p className="text-sm mb-4">
            любые товары нашего сайта, общей стоимостью до 60 000 сумов либо
            соответствующую скидку на заказ — совершенно бесплатно. Подарок
            можно получить при любом заказе на сумму от 370 000 сумов. Ваш
            подарок будет суммироваться с действующим акционным предложением и
            другими актуальными скидками.
          </p>
          <p className="text-lg font-semibold mb-2">Что для этого нужно:</p>
          <p className="text-sm">
            укажите дату рождения в личном кабинете, дождитесь письма с
            поздравлением и выберите подарок при следующем заказе. Вам не нужно
            предъявлять документы во время получения заветной коробочки с
            заказом — нам достаточно ваших регистрационных данных!
          </p>
          <p className="mt-4 text-blue-600 font-semibold cursor-pointer">
            Популярные вопросы
          </p>
        </div>
        <div className="max-w-md -mt-16">
          <img
            src={Img1}
            alt="Beauty illustration"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10 items-center py-12 px-6 bg-white">
        <div className="max-w-md -mt-16">
          <img
            src={Img2}
            alt="Beauty illustration"
            className="w-full object-cover"
          />
        </div>
        <div className="max-w-md ml-64">
          <h1 className="text-2xl font-semibold mb-6">
            Будьте в тренде, красота - это легко!
          </h1>
          <p className="text-sm mb-4">
            Когда все подружки дерутся за перламутровую розовую помаду, вы гордо
            выбираете сливовый оттенок. Вы всегда на гребне модной волны и
            наперед знаете все тенденции бьюти-мира. А мы знаем ваш маленький
            секрет, ведь с обзорами и советами MAKEUP Beauty Club – легко
            оставаться в тренде!
          </p>
          <p className="text-lg font-semibold mb-2">Что вы получаете:</p>
          <p className="text-sm mb-4">
            уникальные обзоры горячих новинок и трендов, а также мнения наших
            покупателей о самых популярных товарах. Наши советы, beauty-статьи и
            рекомендации помогут вам не только следить за модой, но и следовать
            ей с невероятной легкостью.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 items-center py-12 px-6 bg-white">
        <div className="max-w-md mr-64">
          <h1 className="text-2xl font-semibold mb-6">Подарок на Новый Год</h1>
          <p className="text-sm mb-4">
            Мы отмечаем Новый год по нашим правилам! При оформлении заказа под
            вашей учетной записью мы запомним дату первого заказа и непременно
            поздравим вас на годовщину.
          </p>
          <p className="text-lg font-semibold mb-2">Что вы получаете:</p>
          <p className="text-sm mb-4">
            один из предложенных сюрпризов от MAKEUP. Это могут быть аксессуары
            или другие бьюти-продукты.
          </p>
        </div>
        <div className="max-w-md -mt-16">
          <p className="text-lg font-semibold mb-2">Что для этого нужно:</p>
          Что для этого нужно: просто добавьте в корзину продукты на сумму от
          120 000 сумов, и при оформлении заказа под вашим логином/паролем
          система предложит вам несколько презентов на выбор. Сюрприз будет
          доступен в ближайшие 2 недели после годовщины, не забудьте подписаться
          на наши рассылки, мы напомним об ожидающем вас подарке.
          Воспользоваться предложением вы сможете однократно. В следующем году
          вас будет ждать другой сюрприз, поэтому оставайтесь с нами и делайте
          этот мир еще прекраснее!
        </div>
      </div>
      <div className="flex justify-center mt-10 items-center py-12 px-6 bg-white">
        <div className="max-w-md">
          <img
            src={Img3}
            alt="Beauty illustration"
            className="w-full object-cover"
          />
        </div>
        <div className="max-w-md ml-64">
          <h1 className="text-2xl font-semibold mb-6">
            Лучшие акции от мировых брендов
          </h1>
          <p className="text-sm mb-4">
            Новый клатч от Chanel, годовой запас шампуня или скидка на самую
            модную помаду. Самые свежие акции и специальные подарки брендов —
            для участников MAKEUP Beauty Club. И пусть вокруг все кусают локти,
            ведь вам достается самое лучшее. А как...особая тайна клуба MAKEUP.
          </p>
          <p className="text-lg font-semibold mb-2">Что вы получаете:</p>
          <p className="text-sm mb-4">
            все участники клуба получают наш специальный дайджест. Будьте в
            курсе новых акций и подарков от известных брендов. Получайте
            рассылку на свой email и выбирайте самые вкусные предложения!
          </p>
          <p className="text-lg font-semibold mb-2">Что для этого нужно:</p>
          <p className="text-sm mb-4">
            укажите свой email в личном кабинете, в разделе "Управление
            подписками" подтвердите уведомления, которые Вы хотели бы получать,
            и не забывайте проверять почту. Мы будем рассказывать вам про все
            доступные акции и подарки, которые вы можете получить от MAKEUP.
          </p>
          <p className="text-sm mb-4">
            Изменить свой email вы всегда можете в личном кабинете.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-12 px-6 bg-white">
        <div className="max-w-md mr-64">
          <h1 className="text-2xl font-semibold mb-6">Ваш список желаний</h1>
          <p className="text-sm mb-4">
            Секрет ваших желаний — персональный wishlist. Смелый оттенок помады,
            трендовая новинка от Lancome или новый цвет краски для волос — ваши
            тайные планы всегда под рукой!
          </p>
          <p className="text-lg font-semibold mb-2">Что вы получаете:</p>
          <p className="text-sm mb-4">
            возможность собрать в одном списке все товары, которые вы ожидаете
            или попросту планируете попробовать. Составляя список желаний, вы
            без проблем сможете отслеживать наличие товаров и их актуальную
            цену. Кроме того, больше нет необходимости вспоминать, какой продукт
            понравился вам в прошлый раз, ведь все ваши фавориты — у вас под
            рукой!
          </p>
          <p className="text-lg font-semibold mb-2">Что для этого нужно:</p>
          <p className="text-sm">
            авторизоваться в личном кабинете, используя данные участника MAKEUP
            Beauty Club — логин и пароль. Найти на сайте желаемый товар и
            использовать кнопку «добавить в избранное», чтобы поместить его в
            свой список желаний.
          </p>
        </div>
        <div className="max-w-md">
          <img
            src={Img4}
            alt="Beauty illustration"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10 items-center py-12 px-6 bg-white">
        <div className="max-w-md mr-64">
          <h1 className="text-2xl font-semibold mb-6">История покупок</h1>
          <p className="text-sm mb-4">
            Вы помните, как называется тот красивый оттенок лака, который вы
            купили несколько месяцев назад? А какой номер был у нового
            тонального средства, который вы рискнули попробовать и получили
            столько восторженных комплиментов? Секрет вашего неизменно
            идеального образа - MakeUp Beauty Club, ведь с ним вы всегда можете
            проверить историю своих заказов!
          </p>
          <p className="text-lg font-semibold mb-2">Что вы получаете:</p>
          <p className="text-sm mb-4">
            мы сохраняем упорядоченный список всех ваших прошлых заказов. Теперь
            у вас есть быстрый доступ к полюбившимся товарам и возможность
            отслеживать их обновления на сайте.
          </p>
        </div>
        <div className="max-w-md -mt-40">
          <p className="text-lg font-semibold mb-2">Что для этого нужно:</p>
          делайте покупки онлайн, используя данные для авторизации в ваш личный
          кабинет. История покупок будет сохраняться автоматически, но только в
          случае вашей авторизации на сайте.
        </div>
      </div>
    </div>
  );
};

export default BeautyClub;

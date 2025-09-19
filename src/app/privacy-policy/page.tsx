export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="conteiner-custom">
        {/* Заголовок документа */}
        <div className="text-start mb-12">
          <h1 className="text-3xl font-helvetica font-light mb-6">
            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
          </h1>
          <div className="w-24 h-px bg-zinc-700 mb-6"></div>
          <p className="text-zinc-400 text-sm">
            Дата последнего обновления: 1 января 2023 года
          </p>
        </div>

        {/* Преамбула */}
        <div className="mb-10">
            <p className="text-zinc-200 leading-relaxed mb-6">
            Настоящая Политика конфиденциальности (далее — «Политика») регулирует порядок сбора, 
            использования, хранения, обработки и раскрытия информации, полученной от пользователей 
            (далее — «Пользователь») веб-сайта (далее — «Сайт») компании.
          </p>
            <p className="text-zinc-200 leading-relaxed">
            Используя Сайт, Пользователь выражает свое согласие с условиями настоящей Политики. 
            Если Пользователь не согласен с условиями Политики, он должен прекратить использование Сайта.
          </p>
        </div>

        {/* Основные разделы */}
        <div className="space-y-8">
          <DocumentSection title="1. ОПРЕДЕЛЕНИЯ">
            <p className="text-zinc-400 leading-relaxed mb-4">
              В настоящей Политике используются следующие термины:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу</li>
              <li><strong>Обработка персональных данных</strong> — любое действие или совокупность действий, совершаемых с персональными данными</li>
              <li><strong>Конфиденциальность персональных данных</strong> — обязательное для соблюдения требование не допускать их распространения без согласия субъекта</li>
            </ul>
          </DocumentSection>

          <DocumentSection title="2. СБОР ИНФОРМАЦИИ">
            <p className="text-zinc-400 leading-relaxed mb-4">
              Мы можем собирать следующую информацию:
            </p>
            <ul className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
              <li>Контактные данные (имя, фамилия, адрес электронной почты, номер телефона)</li>
              <li>Информацию о вашем устройстве и технических характеристиках (IP-адрес, тип браузера, операционная система)</li>
              <li>Данные об использовании Сайта (посещенные страницы, время посещения, клики)</li>
              <li>Информацию, предоставленную через формы обратной связи</li>
            </ul>
          </DocumentSection>

          <DocumentSection title="3. ЦЕЛИ СБОРА ИНФОРМАЦИИ">
            <p className="text-zinc-400 leading-relaxed mb-4">
              Собранная информация используется для следующих целей:
            </p>
            <ul className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
              <li>Предоставление услуг и поддержки Пользователям</li>
              <li>Обработка запросов, заявок и обращений</li>
              <li>Улучшение функциональности и пользовательского опыта Сайта</li>
              <li>Анализ статистики использования Сайта</li>
              <li>Выполнение обязательств в соответствии с законодательством</li>
            </ul>
          </DocumentSection>

          <DocumentSection title="4. ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ">
            <p className="text-zinc-400 leading-relaxed mb-4">
              Обработка персональных данных осуществляется в соответствии с следующими принципами:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Законности и справедливости</li>
              <li>Ограничения обработки достижением конкретных целей</li>
              <li>Соответствия содержания и объема обрабатываемых данных заявленным целям</li>
              <li>Достоверности и достаточности данных</li>
            </ul>
          </DocumentSection>

          <DocumentSection title="5. ЗАЩИТА ДАННЫХ">
            <p className="text-zinc-400 leading-relaxed">
              Мы реализуем соответствующие технические и организационные меры безопасности для защиты 
              вашей персональной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. 
              Меры безопасности включают шифрование данных, контроль доступа и регулярный мониторинг систем.
            </p>
          </DocumentSection>

          <DocumentSection title="6. ИСПОЛЬЗОВАНИЕ COOKIES">
            <p className="text-zinc-400 leading-relaxed mb-4">
              Сайт использует файлы cookies для:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Обеспечения корректной работы функциональности Сайта</li>
              <li>Сбора аналитической информации о использовании Сайта</li>
              <li>Персонализации контента и рекламных предложений</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Пользователь может настроить браузер для отказа от cookies, однако это может повлиять 
              на функциональность Сайта.
            </p>
          </DocumentSection>

          <DocumentSection title="7. ПЕРЕДАЧА ДАННЫХ ТРЕТЬИМ ЛИЦАМ">
            <p className="text-zinc-400 leading-relaxed">
              Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам 
              без вашего явного согласия, за исключением случаев, предусмотренных законодательством, 
              или в рамках выполнения договорных обязательств с привлечением субподрядчиков, 
              которые гарантируют同等 уровень защиты данных.
            </p>
          </DocumentSection>

          <DocumentSection title="8. ПРАВА ПОЛЬЗОВАТЕЛЕЙ">
            <p className="text-zinc-400 leading-relaxed mb-4">
              Пользователь имеет право:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>На доступ к своим персональным данным</li>
              <li>На исправление неточных или неполных данных</li>
              <li>На удаление персональных данных</li>
              <li>На отзыв согласия на обработку данных</li>
              <li>На ограничение обработки данных</li>
            </ul>
          </DocumentSection>

          <DocumentSection title="9. ИЗМЕНЕНИЕ ПОЛИТИКИ">
            <p className="text-zinc-400 leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Все изменения вступают в силу с момента их опубликования на Сайте. Рекомендуем регулярно 
              проверять данную страницу для ознакомления с актуальной версией Политики.
            </p>
          </DocumentSection>

          <DocumentSection title="10. КОНТАКТНАЯ ИНФОРМАЦИЯ">
            <p className="text-zinc-400 leading-relaxed">
              По всем вопросам, связанным с настоящей Политикой конфиденциальности и обработкой 
              персональных данных, обращайтесь по адресу электронной почты или через страницу{" "}
              <a href="/contacts" className="text-white underline hover:no-underline">
                Контакты
              </a>.
            </p>
          </DocumentSection>
        </div>

        {/* Подпись */}
        <div className="mt-16 pt-8 border-t border-zinc-700">
          <p className="text-zinc-400 text-sm text-start">
            Настоящий документ является официальной Политикой конфиденциальности компании
          </p>
        </div>
      </div>
    </div>
  );
}

// Компонент для секций документа
function DocumentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-helvetica font-light mb-4 text-white border-l-1 border-zinc-700 pl-4">
        {title}
      </h2>
      <div className="pl-6">
        {children}
      </div>
    </div>
  );
}
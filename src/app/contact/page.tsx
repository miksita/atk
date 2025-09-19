// app/contacts/page.tsx
export default function Contacts() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="conteiner-custom">
        {/* Заголовок страницы */}
        {/* <div className="mb-16">
          <h1 className="text-3xl font-helvetica font-light tracking-wide mb-6">
            Контакты
          </h1>
          <div className="w-20 h-px bg-zinc-700"></div>
        </div> */}

        <div className="space-y-24">
          {/* Основные филиалы */}
          <Section title="Филиалы">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-zinc-800 pb-20">
              <ContactCard
                city="Москва"
                address="ул. Тверская, д. 10, офис 305"
                phone="+7 (495) 123-45-67"
                email="info@company.com"
                manager="general@company.com"
              />
              
              <ContactCard
                city="Владивосток"
                address="ул. Светланская, д. 25, офис 410"
                phone="+7 (423) 345-67-89"
                email="vladivostok@company.com"
                manager="vladivostok-manager@company.com"
              />
            </div>
          </Section>

          {/* Международные представительства */}
          <Section title="Международные представительства">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-zinc-800 pb-20">
              <CompactOffice
                city="Пекин"
                country="Китай"
                phone="+86 10 8765 4321"
                email="china@company.com"
              />
              
              <CompactOffice
                city="Берлин"
                country="Германия"
                phone="+49 30 12345678"
                email="germany@company.com"
              />
              
              <CompactOffice
                city="Стамбул"
                country="Турция"
                phone="+90 212 345 6789"
                email="turkey@company.com"
              />
              
              <CompactOffice
                city="Алматы"
                country="Казахстан"
                phone="+7 727 345 6789"
                email="kazakhstan@company.com"
              />
            </div>
          </Section>

          {/* Руководители отделов */}
          <Section title="Руководители отделов">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EmailItem
                department="Генеральный директор"
                email="ceo@company.com"
              />
              <EmailItem
                department="Финансовый директор"
                email="cfo@company.com"
              />
              <EmailItem
                department="Международные перевозки"
                email="transport@company.com"
              />
              <EmailItem
                department="Контейнерное оборудование"
                email="containers@company.com"
              />
              <EmailItem
                department="Технический директор"
                email="cto@company.com"
              />
              <EmailItem
                department="Отдел кадров"
                email="hr@company.com"
              />
            </div>
          </Section>

          {/* Дополнительная информация */}
          {/* <Section title="Реквизиты">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">Юридическое название</p>
                  <p className="text-zinc-300">ООО "АТК Логистик"</p>
                </div>
                <div className="space-y-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">ИНН</p>
                  <p className="text-zinc-300">7701234567</p>
                </div>
                <div className="space-y-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">КПП</p>
                  <p className="text-zinc-300">770101001</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">ОГРН</p>
                  <p className="text-zinc-300">1234567890123</p>
                </div>
                <div className="space-y-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">Банк</p>
                  <p className="text-zinc-300">ПАО "Сбербанк"</p>
                </div>
                <div className="space-y-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">Р/С</p>
                  <p className="text-zinc-300">40702810123456789012</p>
                </div>
              </div>
            </div>
          </Section> */}
        </div>
      </div>
    </div>
  );
}

// Компонент секции
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-6">
        <h2 className="text-xl font-helvetica font-light text-zinc-100 tracking-wide uppercase text-sm letter-spacing-wider">
          {title}
        </h2>
        {/* <div className="flex-1 h-px bg-zinc-800"></div> */}
      </div>
      {children}
    </div>
  );
}

// Компонент карточки филиала
function ContactCard({ 
  city, 
  address, 
  phone, 
  email, 
  manager 
}: { 
  city: string;
  address: string;
  phone: string;
  email: string;
  manager: string;
}) {
  return (
    <div className="group p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-helvetica font-normal text-zinc-100 group-hover:text-white transition-colors">
            {city}
          </h3>
        </div>
        
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">Адрес</p>
            <p className="text-zinc-300 leading-relaxed text-sm">{address}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">Телефон</p>
            <p className="text-zinc-300 text-sm">{phone}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">Почта</p>
            <a 
              href={`mailto:${email}`} 
              className="text-zinc-300 hover:text-white transition-colors text-sm block hover:underline"
            >
              {email}
            </a>
          </div>
          
          <div className="space-y-2">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">Руководитель</p>
            <a 
              href={`mailto:${manager}`} 
              className="text-zinc-300 hover:text-white transition-colors text-sm block hover:underline"
            >
              {manager}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Компонент международного представительства
function CompactOffice({ 
  city, 
  country, 
  phone, 
  email 
}: { 
  city: string;
  country: string;
  phone: string;
  email: string;
}) {
  return (
    <div className="p-5 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
      <div className="space-y-4">
        <div className="space-y-1">
          <h4 className="text-lg font-helvetica font-normal text-zinc-100">
            {city}
          </h4>
          <p className="text-zinc-500 text-sm">{country}</p>
        </div>
        
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">Тел</p>
            <p className="text-zinc-300 text-sm">{phone}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">Почта</p>
            <a 
              href={`mailto:${email}`} 
              className="text-zinc-300 hover:text-white transition-colors text-sm block hover:underline"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Компонент email руководителя
function EmailItem({ 
  department, 
  email 
}: { 
  department: string;
  email: string;
}) {
  return (
    <div className="p-4 hover:border-zinc-700 transition-colors duration-300">
      <div className="space-y-2">
        <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">{department}</p>
        <a 
          href={`mailto:${email}`} 
          className="text-zinc-300 hover:text-white transition-colors text-sm block hover:underline font-medium"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
'use client'
import ContactForm from '@/components/Form/ContatctForm';
import "../../i18n/i18n";

interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export default function Home() {
  const handleSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Герой секция */}
      <section className="pt-16 md:pt-20 pb-20 md:pb-30 border-b border-zinc-800">
        <div className="conteiner-custom">
          <div className="text-start">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-helvetica font-light tracking-wide mb-6 leading-tight">
              Международные <br className="hidden sm:block" />логистические решения
            </h1>
            <div className="w-20 h-px bg-zinc-700 mb-6 md:mb-8 group-hover:w-40 transition-all duration-1000"></div>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 md:mb-10">
              Профессиональные услуги грузоперевозок и контейнерные решения мирового уровня
            </p>

            {/* Кнопка CTA */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-zinc-700 text-zinc-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                <span className="relative z-10">Начать сотрудничество</span>
                <div className="absolute inset-0 bg-zinc-800 scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
              </a>

              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-zinc-400 hover:text-white transition-colors duration-300 group text-sm sm:text-base"
              >
                <span>Узнать больше</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 md:py-24 border-b border-zinc-800 ">
        <div className="conteiner-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <ServiceBlock
              title="Международные перевозки"
              description="Полный комплекс логистических услуг для вашего бизнеса"
              link="/international-transport"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              }
            />
            <ServiceBlock
              title="Контейнерное оборудование"
              description="Современные контейнерные решения для различных грузов"
              link="/container-equipment"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6">
        <ContactForm onSubmit={handleSubmit} />
      </section>
    </div>
  );
}

// Компонент услуги
function ServiceBlock({
  title,
  description,
  link,
  icon
}: {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group border border-zinc-700 p-6 md:p-10">
      <a href={link} className="block">
        <div className="flex items-start space-x-4 mb-4">
          <div className="text-zinc-400 group-hover:text-white transition-colors flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-lg md:text-xl font-helvetica font-light text-zinc-100 group-hover:text-white transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-zinc-400 leading-relaxed mb-4 text-sm md:text-base">
          {description}
        </p>
        <span className="text-zinc-500 text-xs md:text-sm group-hover:text-zinc-300 transition-colors">
          Подробнее →
        </span>
      </a>
    </div>
  );
}
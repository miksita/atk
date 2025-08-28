'use client'
import ContactForm from '@/components/Form/ContatctForm';
import LogisticsBlock from '@/components/LogisticsBlock/LogisticsBlock';
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
    <div>
      <LogisticsBlock />
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
}
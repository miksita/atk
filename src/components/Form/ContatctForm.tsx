'use client'
import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void
}

interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useTranslation()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-zinc-950/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-950 rounded-lg max-w-md w-full p-6 border border-zinc-800">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white text-center mb-2">
          {t('contactForm.successModal.title')}
        </h3>
        <p className="text-zinc-300 text-center mb-6">
          {t('contactForm.successModal.message')}
        </p>
        <button
          onClick={onClose}
          className="w-full bg-blue-800 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition-colors"
        >
          {t('contactForm.successModal.button')}
        </button>
      </div>
    </div>
  )
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setIsModalOpen(true)
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    })
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="py-20 border-t border-zinc-700">
        <div className="conteiner-custom">
          <div className="">
            <div className="flex items-center justify-start mb-6 border-b border-zinc-700 pb-4">
              <h2 className="text-3xl flex items-start gap-3">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('contactForm.title')}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contactForm.fields.name')}
                    className="input-custom"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contactForm.fields.phone')}
                    className="input-custom"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contactForm.fields.email')}
                    className="input-custom"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <select
                    name="service"
                    className="input-custom appearance-none bg-black pr-10 cursor-pointer hover:border-zinc-600 transition-colors w-full"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">{t('contactForm.services.default')}</option>
                    <option value="international">{t('contactForm.services.international')}</option>
                    <option value="container">{t('contactForm.services.container')}</option>
                    <option value="other">{t('contactForm.services.other')}</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="">
                  <textarea
                    placeholder={t('contactForm.fields.message')}
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 border-1 border-zinc-700 resize-none "
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition-colors">
                {t('contactForm.submitButton')}
              </button>
            </form>
          </div>
        </div>
      </section>

      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
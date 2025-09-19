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
  consentProcessing: boolean
  consentPrivacy: boolean
}

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useTranslation()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-zinc-950/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-950 rounded-lg max-w-md w-full p-6 border border-zinc-800">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="title text-center mb-2">
          {t('contactForm.successModal.title')}
        </h3>
        <p className="text-zinc-300 text-center mb-6">
          {t('contactForm.successModal.message')}
        </p>
        <button
          onClick={onClose}
          className="w-full bg-zinc-300 py-2 font-medium hover:bg-zinc-400 transition-colors text-black"
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
    message: '',
    consentProcessing: false,
    consentPrivacy: false
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [consentError, setConsentError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    if ((name === 'consentProcessing' || name === 'consentPrivacy') && consentError) {
      setConsentError('')
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!formData.consentProcessing || !formData.consentPrivacy) {
      setConsentError(t('contactForm.consentError'))
      return
    }
    
    setIsSubmitting(true)
    
    // Имитация задержки отправки
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    onSubmit(formData)
    setIsModalOpen(true)
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
      consentProcessing: false,
      consentPrivacy: false
    })
    setConsentError('')
    setIsSubmitting(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="py-20 border-t border-zinc-700">
        <div className="conteiner-custom">
          <div className="bg-black md:px-10 md:py-16 px-4 pt-10 pb-8 border border-zinc-700">
            {/* Заголовок с улучшенной анимацией */}
            <div className="flex items-center justify-start mb-8 border-b border-zinc-700 pb-6 group">
              <div className="flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-8 h-8 text-zinc-300 transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="title text-2xl md:text-3xl font-light tracking-wide">
                  {t('contactForm.title')}
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5">
                {/* Поля ввода с улучшенным UX */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contactForm.fields.name')}
                    className="input-custom peer"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 peer-focus:w-full"></div>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contactForm.fields.phone')}
                    className="input-custom peer"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 peer-focus:w-full"></div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contactForm.fields.email')}
                    className="input-custom peer"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 peer-focus:w-full"></div>
                </div>

                <div className="relative group">
                  <select
                    name="service"
                    className="input-custom appearance-none bg-black pr-10 cursor-pointer hover:border-zinc-600 transition-colors w-full peer"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">{t('contactForm.services.default')}</option>
                    <option value="international">{t('contactForm.services.international')}</option>
                    <option value="container">{t('contactForm.services.container')}</option>
                    <option value="other">{t('contactForm.services.other')}</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-transform duration-200 group-hover:translate-x-1">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 peer-focus:w-full"></div>
                </div>

                <div className="relative">
                  <textarea
                    placeholder={t('contactForm.fields.message')}
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black focus:outline-none focus:ring-2 focus:ring-white border-1 border-zinc-700 resize-none text-sm peer"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 peer-focus:w-full"></div>
                </div>
                
                {/* Улучшенный блок согласий */}
                <div className="space-y-4 pt-4 pb-6 border-t border-zinc-800">
                  <div className="flex items-start gap-3 group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        id="consentProcessing"
                        name="consentProcessing"
                        checked={formData.consentProcessing}
                        onChange={handleChange}
                        className="sr-only peer"
                        required
                      />
                      <div className="w-4 h-4 border border-zinc-600 bg-black peer-checked:bg-zinc-300 peer-checked:border-zinc-300 transition-all duration-200 flex items-center justify-center">
                        {formData.consentProcessing && (
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <label htmlFor="consentProcessing" className="text-sm text-zinc-400 cursor-pointer hover:text-zinc-300 transition-colors">
                      Согласие на обработку персональных данных
                    </label>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        id="consentPrivacy"
                        name="consentPrivacy"
                        checked={formData.consentPrivacy}
                        onChange={handleChange}
                        className="sr-only peer"
                        required
                      />
                      <div className="w-4 h-4 border border-zinc-600 bg-black peer-checked:bg-zinc-300 peer-checked:border-zinc-300 transition-all duration-200 flex items-center justify-center">
                        {formData.consentPrivacy && (
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <label htmlFor="consentPrivacy" className="text-sm text-zinc-400 cursor-pointer hover:text-zinc-300 transition-colors">
                      Согласие на политику конфиденциальности
                    </label>
                  </div>
                  
                  {consentError && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {consentError}
                    </p>
                  )}
                </div>
              </div>

              {/* Кнопка отправки с улучшенной анимацией */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-zinc-300 py-3 rounded-sm font-medium hover:bg-zinc-400 disabled:bg-zinc-600 disabled:cursor-not-allowed transition-all duration-300 text-black relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      {t('contactForm.submitting')}
                    </>
                  ) : (
                    t('contactForm.submitButton')
                  )}
                </span>
                <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
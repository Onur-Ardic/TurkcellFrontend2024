import { useTranslations } from 'next-intl';
import React from 'react'

const Faq = () => {
    const t = useTranslations();
  return (
    <>
          <div className="row mb-5">
            </div>
            <div className="row mb-5 align-items-center">
                <div className="col-12">
                    <div className="accordion" id="faqSectionOne">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button text-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#sectionOneOne" aria-expanded="true" aria-controls="sectionOneOne">
                                   {t('faqT1')}
                                </button>
                            </h2>
                            <div id="sectionOneOne" className="accordion-collapse collapse show"
                                data-bs-parent="#faqSectionOne">
                                <div className="accordion-body">
                                    {t('faqA1')}
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed text-primary" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#sectionOneTwo" aria-expanded="false"
                                        aria-controls="sectionOneTwo">
                                        {t('faqT2')}
                                    </button>
                                </h2>
                                <div id="sectionOneTwo" className="accordion-collapse collapse"
                                    data-bs-parent="#faqSectionOne">
                                    <div className="accordion-body">
                                        {t('faqA2')}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed text-primary" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#sectionOneThree" aria-expanded="false"
                                        aria-controls="sectionOneThree">
                                        {t('faqT3')}
                                    </button>
                                </h2>
                                <div id="sectionOneThree" className="accordion-collapse collapse"
                                    data-bs-parent="#faqSectionOne">
                                    <div className="accordion-body">
                                        {t('faqA3')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Faq
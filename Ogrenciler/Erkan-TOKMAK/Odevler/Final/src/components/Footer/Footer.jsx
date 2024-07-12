
import {
    Logo,
    Text,
    NewsletterSection,
    NewsletterText,
    FooterSection,
    FooterMenuTitle,
    FooterMenuText,
    FooterMenuSection,
    FooterCopy
} from '@/styles/FooterStyle'
import { Container } from '@/styles/LayoutStyle';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
    const t = useTranslations();
    return (
        <>
            <FooterSection className=''>
                <Container>
                    <div className="position-relative">
                        <NewsletterSection>
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <NewsletterText>
                                        {t('newsletterText')}
                                    </NewsletterText>
                                </div>
                                <div className="col-12 col-md-4">
                                    <NewsletterForm />
                                </div>
                            </div>
                        </NewsletterSection>
                    </div>

                    <FooterMenuSection>
                        <div className="row justify-content-between align-items-start">
                            <div className="col-12 col-md-2 mb-3">
                                <Logo>
                                    {t('logo')}
                                </Logo>
                                <Text>
                                    {t('footerText')}
                                </Text>
                                <div className="d-flex gap-2">
                                    <Link href="#">
                                        <FaTwitter />
                                    </Link>
                                    <Link href="#">
                                        <FaFacebookF />
                                    </Link>
                                    <Link href="#">
                                        <FaInstagram />
                                    </Link>
                                    <Link href="#">
                                        <FaGithub />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <FooterMenuTitle>
                                    {t('footerCompany')}
                                </FooterMenuTitle>
                                <ul className='list-unstyled'>
                                    <li>
                                        <FooterMenuText>
                                            {t('about')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('features')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('works')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('career')}
                                        </FooterMenuText>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <FooterMenuTitle>
                                    {t('footerHelp')}
                                </FooterMenuTitle>
                                <ul className='list-unstyled'>
                                    <li>
                                        <FooterMenuText>
                                            {t('customerSupport')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('deliveryDetails')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('termsAndConditions')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('privacyPolicy')}
                                        </FooterMenuText>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <FooterMenuTitle>
                                    {t('footerFaq')}
                                </FooterMenuTitle>
                                <ul className='list-unstyled'>
                                    <li>
                                        <FooterMenuText>
                                            {t('account')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('manageDeliveries')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('orders')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('payments')}
                                        </FooterMenuText>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <FooterMenuTitle>
                                    {t('footerResources')}
                                </FooterMenuTitle>
                                <ul className='list-unstyled'>
                                    <li>
                                        <FooterMenuText>
                                            {t('ebook')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('devTutorial')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('howToBlog')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('youtubePlaylist')}
                                        </FooterMenuText>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-top d-none d-md-flex">
                            <div className="mt-0">
                                <FooterCopy>
                                    {t('allRightsReserved')}
                                </FooterCopy>
                            </div>
                            <div className="mt-0">
                                <div className="d-flex flex-row justify-content-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_123)">
                                            <rect x="10" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.88795" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path d="M33.0222 15.1212L30.848 25.2848H28.2189L30.3935 15.1212H33.0222ZM44.0839 21.6839L45.4681 17.8671L46.2646 21.6839H44.0839ZM47.0173 25.2848H49.4492L47.3271 15.1212H45.0824C44.578 15.1212 44.1524 15.4146 43.963 15.8669L40.0185 25.2848H42.7795L43.3276 23.7671H46.7008L47.0173 25.2848ZM40.1555 21.9663C40.1668 19.2838 36.4459 19.1362 36.4716 17.9379C36.4794 17.5728 36.8271 17.1855 37.5866 17.0861C37.9639 17.0369 39.0013 16.9992 40.1793 17.5413L40.6406 15.386C40.0079 15.1563 39.1937 14.9353 38.1811 14.9353C35.5825 14.9353 33.7534 16.3169 33.738 18.2953C33.7216 19.7583 35.0437 20.5747 36.0399 21.0611C37.0642 21.5594 37.4084 21.8785 37.4039 22.324C37.3971 23.0063 36.5868 23.3068 35.8308 23.3187C34.5087 23.3396 33.7415 22.9619 33.13 22.6769L32.6536 24.9039C33.2677 25.186 34.4016 25.4312 35.578 25.4437C38.3396 25.4437 40.1465 24.0791 40.1555 21.9663ZM29.2653 15.1212L25.0056 25.2848H22.226L20.1299 17.1736C20.0025 16.674 19.8918 16.4913 19.5049 16.2806C18.8734 15.938 17.8295 15.616 16.9111 15.4165L16.9739 15.1212H21.4475C22.0175 15.1212 22.5306 15.5008 22.6599 16.1574L23.7671 22.039L26.503 15.1212H29.2653Z" fill="#1434CB" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_123" x="0.811593" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_123" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_123" result="effect2_dropShadow_31_123" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_123" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_125)">
                                            <rect x="9.61426" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.5022" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path d="M36.27 13.8484H29.4068V26.1819H36.27V13.8484Z" fill="#FF5F00" />
                                            <path d="M29.8426 20.0151C29.8415 18.8273 30.1107 17.6548 30.6297 16.5864C31.1487 15.518 31.904 14.5817 32.8384 13.8484C31.6813 12.9389 30.2916 12.3732 28.8283 12.2162C27.3649 12.0591 25.8869 12.3169 24.5631 12.9602C23.2393 13.6034 22.1232 14.6061 21.3424 15.8537C20.5615 17.1013 20.1475 18.5434 20.1475 20.0151C20.1475 21.4869 20.5615 22.929 21.3424 24.1766C22.1232 25.4241 23.2393 26.4269 24.5631 27.0701C25.8869 27.7133 27.3649 27.9712 28.8283 27.8141C30.2916 27.657 31.6813 27.0914 32.8384 26.1819C31.904 25.4485 31.1487 24.5122 30.6297 23.4438C30.1107 22.3754 29.8415 21.2029 29.8426 20.0151Z" fill="#EB001B" />
                                            <path d="M45.529 20.0151C45.529 21.4869 45.115 22.929 44.3342 24.1765C43.5534 25.4241 42.4374 26.4268 41.1136 27.0701C39.7899 27.7133 38.3118 27.9712 36.8485 27.8141C35.3851 27.657 33.9955 27.0914 32.8384 26.1819C33.772 25.4478 34.5267 24.5113 35.0457 23.4431C35.5646 22.3749 35.8343 21.2028 35.8343 20.0151C35.8343 18.8275 35.5646 17.6554 35.0457 16.5872C34.5267 15.5189 33.772 14.5825 32.8384 13.8484C33.9955 12.9389 35.3851 12.3732 36.8485 12.2162C38.3118 12.0591 39.7899 12.3169 41.1136 12.9602C42.4374 13.6034 43.5534 14.6062 44.3342 15.8537C45.115 17.1013 45.529 18.5434 45.529 20.0151Z" fill="#F79E1B" />
                                            <path d="M44.7807 24.8756V24.6231H44.8825V24.5716H44.6232V24.6231H44.725V24.8756H44.7807ZM45.2841 24.8756V24.5711H45.2046L45.1132 24.7805L45.0217 24.5711H44.9422V24.8756H44.9983V24.6459L45.0841 24.8439H45.1423L45.228 24.6454V24.8756H45.2841Z" fill="#F79E1B" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_125" x="0.425851" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_125" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_125" result="effect2_dropShadow_31_125" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_125" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_127)">
                                            <rect x="9.22852" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.11646" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.4256 15.646H16.7381C16.5542 15.646 16.3978 15.7796 16.3691 15.9611L15.2821 22.8518C15.2605 22.9879 15.3658 23.1104 15.5038 23.1104H16.7868C16.9707 23.1104 17.1271 22.9768 17.1558 22.7949L17.449 20.9364C17.4772 20.7544 17.634 20.6209 17.8176 20.6209H18.6683C20.4387 20.6209 21.4603 19.7643 21.7273 18.0669C21.8475 17.3243 21.7324 16.7408 21.3845 16.332C21.0026 15.8835 20.325 15.646 19.4256 15.646ZM19.7356 18.1627C19.5887 19.127 18.8519 19.127 18.1394 19.127H17.7339L18.0184 17.3261C18.0353 17.2174 18.1296 17.1372 18.2396 17.1372H18.4255C18.9108 17.1372 19.3686 17.1372 19.6052 17.4138C19.7462 17.5789 19.7895 17.824 19.7356 18.1627ZM27.4592 18.1318H26.1722C26.0625 18.1318 25.9678 18.212 25.9509 18.3209L25.8939 18.6808L25.8039 18.5504C25.5253 18.146 24.9041 18.0109 24.284 18.0109C22.8617 18.0109 21.6471 19.0879 21.4105 20.5988C21.2876 21.3523 21.4623 22.0729 21.8899 22.5755C22.2821 23.0375 22.8433 23.2301 23.5109 23.2301C24.6568 23.2301 25.2924 22.4933 25.2924 22.4933L25.2349 22.8509C25.2133 22.9877 25.3185 23.1102 25.4557 23.1102H26.615C26.7994 23.1102 26.9549 22.9766 26.984 22.7948L27.6796 18.3904C27.7016 18.2549 27.5966 18.1318 27.4592 18.1318ZM25.6652 20.6364C25.541 21.3715 24.9574 21.865 24.2132 21.865C23.8395 21.865 23.5407 21.7452 23.3491 21.5181C23.1588 21.2926 23.0865 20.9715 23.147 20.614C23.2631 19.8851 23.8564 19.3756 24.5893 19.3756C24.9547 19.3756 25.2518 19.4968 25.4475 19.726C25.6435 19.9574 25.7214 20.2804 25.6652 20.6364ZM33.0201 18.1317H34.3134C34.4945 18.1317 34.6002 18.3348 34.4973 18.4833L30.1959 24.6914C30.1262 24.792 30.0115 24.8518 29.8889 24.8518H28.5972C28.4153 24.8518 28.3091 24.6471 28.4144 24.4982L29.7538 22.6078L28.3293 18.4279C28.28 18.2826 28.3873 18.1317 28.5419 18.1317H29.8127C29.9778 18.1317 30.1235 18.24 30.1711 18.398L30.9271 20.9226L32.7109 18.2955C32.7807 18.1929 32.8968 18.1317 33.0201 18.1317Z" fill="#253B80" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M47.0426 22.8512L48.1456 15.8345C48.1625 15.7256 48.2569 15.6454 48.3665 15.645H49.6082C49.7453 15.645 49.8506 15.7679 49.829 15.9039L48.7413 22.7943C48.713 22.9762 48.5566 23.1098 48.3723 23.1098H47.2634C47.1263 23.1098 47.021 22.9872 47.0426 22.8512ZM38.5957 15.6454H35.9077C35.7242 15.6454 35.5678 15.779 35.5391 15.9605L34.4521 22.8512C34.4305 22.9872 34.5358 23.1098 34.6731 23.1098H36.0523C36.1805 23.1098 36.2901 23.0163 36.3101 22.8891L36.6186 20.9358C36.6469 20.7538 36.8037 20.6203 36.9872 20.6203H37.8375C39.6082 20.6203 40.6297 19.7637 40.8969 18.0663C41.0174 17.3237 40.9016 16.7402 40.5539 16.3314C40.1722 15.8829 39.4951 15.6454 38.5957 15.6454ZM38.9057 18.1621C38.7592 19.1264 38.0223 19.1264 37.3094 19.1264H36.9043L37.1892 17.3255C37.2061 17.2168 37.2996 17.1366 37.41 17.1366H37.5958C38.0809 17.1366 38.5391 17.1366 38.7755 17.4132C38.9167 17.5783 38.9596 17.8234 38.9057 18.1621ZM46.6285 18.1312H45.3425C45.2319 18.1312 45.1381 18.2114 45.1215 18.3203L45.0646 18.6802L44.9742 18.5498C44.6956 18.1454 44.0748 18.0103 43.4546 18.0103C42.0324 18.0103 40.8181 19.0873 40.5815 20.5981C40.459 21.3517 40.633 22.0723 41.0605 22.5748C41.4535 23.0369 42.014 23.2294 42.6816 23.2294C43.8274 23.2294 44.4628 22.4927 44.4628 22.4927L44.4056 22.8503C44.3839 22.9871 44.4892 23.1096 44.6272 23.1096H45.786C45.9695 23.1096 46.1259 22.976 46.1546 22.7941L46.8506 18.3898C46.8719 18.2543 46.7666 18.1312 46.6285 18.1312ZM44.8347 20.6358C44.7113 21.3709 44.127 21.8644 43.3826 21.8644C43.0096 21.8644 42.7103 21.7446 42.5185 21.5175C42.3282 21.292 42.2568 20.9709 42.3166 20.6134C42.4332 19.8845 43.0258 19.375 43.7587 19.375C44.1242 19.375 44.4212 19.4962 44.6171 19.7253C44.8138 19.9568 44.8917 20.2798 44.8347 20.6358Z" fill="#179BD7" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_127" x="0.0401087" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_127" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_127" result="effect2_dropShadow_31_127" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_127" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_129)">
                                            <rect x="9.84277" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.73072" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path d="M24.92 16.0816C25.231 15.6926 25.4421 15.1703 25.3864 14.6366C24.9311 14.6592 24.3756 14.9369 24.054 15.3262C23.7652 15.6596 23.5096 16.2038 23.5762 16.7151C24.0873 16.7594 24.5978 16.4597 24.92 16.0816Z" fill="#000008" />
                                            <path d="M25.3806 16.8149C24.6385 16.7707 24.0074 17.2362 23.653 17.2362C23.2984 17.2362 22.7557 16.8372 22.1687 16.848C21.4047 16.8592 20.6957 17.2912 20.308 17.9782C19.5106 19.3527 20.0976 21.3915 20.8731 22.5109C21.2497 23.0647 21.7035 23.6745 22.3015 23.6526C22.8666 23.6304 23.088 23.2867 23.7749 23.2867C24.4612 23.2867 24.6607 23.6526 25.2588 23.6415C25.879 23.6304 26.2668 23.0874 26.6434 22.5331C27.0754 21.9018 27.2523 21.2922 27.2634 21.2587C27.2523 21.2476 26.0674 20.7931 26.0564 19.43C26.0452 18.2887 26.9867 17.7459 27.031 17.7122C26.4993 16.9259 25.6686 16.8372 25.3806 16.8149Z" fill="#000008" />
                                            <path d="M31.8427 15.2704C33.4557 15.2704 34.579 16.3823 34.579 18.0011C34.579 19.6257 33.4326 20.7434 31.8022 20.7434H30.0163V23.5836H28.7259V15.2704L31.8427 15.2704ZM30.0163 19.6603H31.4969C32.6203 19.6603 33.2597 19.0555 33.2597 18.0069C33.2597 16.9585 32.6203 16.3593 31.5026 16.3593H30.0163V19.6603Z" fill="#000008" />
                                            <path d="M34.9161 21.8611C34.9161 20.801 35.7284 20.15 37.1688 20.0693L38.8278 19.9714V19.5048C38.8278 18.8308 38.3727 18.4275 37.6124 18.4275C36.8921 18.4275 36.4427 18.7731 36.3333 19.3147H35.1581C35.2272 18.22 36.1604 17.4135 37.6584 17.4135C39.1274 17.4135 40.0664 18.1912 40.0664 19.4068V23.5836H38.8738V22.5869H38.8451C38.4938 23.261 37.7275 23.6873 36.9325 23.6873C35.7457 23.6873 34.9161 22.9499 34.9161 21.8611ZM38.8278 21.3138V20.8356L37.3357 20.9278C36.5925 20.9797 36.172 21.308 36.172 21.8265C36.172 22.3565 36.6098 22.7022 37.2781 22.7022C38.148 22.7022 38.8278 22.103 38.8278 21.3138Z" fill="#000008" />
                                            <path d="M41.1923 25.8132V24.8049C41.2843 24.8279 41.4916 24.8279 41.5954 24.8279C42.1715 24.8279 42.4826 24.586 42.6727 23.9639C42.6727 23.9523 42.7822 23.5951 42.7822 23.5894L40.5931 17.523H41.941L43.4736 22.4545H43.4965L45.0291 17.523H46.3426L44.0726 23.9004C43.5543 25.3696 42.9551 25.8419 41.6992 25.8419C41.5954 25.8419 41.2843 25.8304 41.1923 25.8132Z" fill="#000008" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_129" x="0.654366" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_129" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_129" result="effect2_dropShadow_31_129" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_129" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_131)">
                                            <rect x="9.45703" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.34498" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path d="M31.751 23.6142H30.7025V15.4559H33.482C34.1864 15.4559 34.7871 15.6907 35.2785 16.1604C35.7809 16.63 36.0321 17.2033 36.0321 17.8805C36.0321 18.574 35.7809 19.1473 35.2785 19.6115C34.7925 20.0757 34.1919 20.305 33.482 20.305H31.751V23.6142ZM31.751 16.4607V19.3057H33.5038C33.9188 19.3057 34.2683 19.1637 34.5414 18.8852C34.8198 18.6067 34.9618 18.2682 34.9618 17.8859C34.9618 17.5091 34.8198 17.176 34.5414 16.8975C34.2683 16.6081 33.9243 16.4662 33.5038 16.4662H31.751V16.4607Z" fill="#3C4043" />
                                            <path d="M38.7732 17.8477C39.5487 17.8477 40.1603 18.0552 40.608 18.4702C41.0558 18.8852 41.2797 19.4531 41.2797 20.174V23.6142H40.2804V22.8388H40.2367C39.8053 23.4777 39.2265 23.7944 38.5057 23.7944C37.8886 23.7944 37.3753 23.6142 36.9603 23.2483C36.5453 22.8824 36.3378 22.4292 36.3378 21.8831C36.3378 21.3043 36.5562 20.8456 36.9931 20.5071C37.4299 20.163 38.0142 19.9938 38.7405 19.9938C39.363 19.9938 39.8763 20.1084 40.2749 20.3378V20.0975C40.2749 19.7316 40.1329 19.4258 39.8435 19.1692C39.5541 18.9125 39.2156 18.7869 38.8279 18.7869C38.2436 18.7869 37.7794 19.0327 37.4408 19.5296L36.518 18.9508C37.0258 18.2136 37.7794 17.8477 38.7732 17.8477ZM37.419 21.8995C37.419 22.1726 37.5337 22.4019 37.7685 22.5821C37.9978 22.7623 38.2709 22.8551 38.5821 22.8551C39.0244 22.8551 39.4176 22.6913 39.7616 22.3637C40.1056 22.036 40.2804 21.6538 40.2804 21.2115C39.9527 20.9548 39.4995 20.8238 38.9152 20.8238C38.4893 20.8238 38.1343 20.9275 37.8504 21.1296C37.561 21.3425 37.419 21.5992 37.419 21.8995Z" fill="#3C4043" />
                                            <path d="M46.9807 18.028L43.4858 26.0661H42.4046L43.7043 23.2538L41.3999 18.028H42.5412L44.2012 22.0361H44.223L45.8394 18.028H46.9807Z" fill="#3C4043" />
                                            <path d="M27.5806 19.6443C27.5806 19.3024 27.55 18.9753 27.4932 18.6608H23.0985V20.4628L25.6295 20.4634C25.5268 21.063 25.1965 21.5741 24.6903 21.9148V23.084H26.1969C27.0766 22.2698 27.5806 21.0662 27.5806 19.6443Z" fill="#4285F4" />
                                            <path d="M24.6908 21.9149C24.2714 22.1977 23.7314 22.3632 23.0996 22.3632C21.8791 22.3632 20.8438 21.5408 20.473 20.4323H18.9189V21.638C19.6888 23.1659 21.2713 24.2144 23.0996 24.2144C24.3632 24.2144 25.4247 23.7988 26.1974 23.0835L24.6908 21.9149Z" fill="#34A853" />
                                            <path d="M20.3266 19.5378C20.3266 19.2265 20.3785 18.9256 20.473 18.6428V17.4371H18.9189C18.6005 18.0689 18.4214 18.782 18.4214 19.5378C18.4214 20.2935 18.601 21.0067 18.9189 21.6385L20.473 20.4328C20.3785 20.1499 20.3266 19.849 20.3266 19.5378Z" fill="#FABB05" />
                                            <path d="M23.0996 16.7119C23.7892 16.7119 24.4068 16.9494 24.8945 17.4136L26.2296 16.0795C25.4187 15.3243 24.3615 14.8607 23.0996 14.8607C21.2719 14.8607 19.6888 15.9092 18.9189 17.4371L20.473 18.6428C20.8437 17.5343 21.8791 16.7119 23.0996 16.7119Z" fill="#E94235" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_131" x="0.268624" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_131" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_131" result="effect2_dropShadow_31_131" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_131" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="row border-top d-block d-md-none">
                            <div className="col-12 col-md-6 mt-4 text-center">
                                <FooterCopy>
                                    {t('allRightsReserved')}
                                </FooterCopy>
                            </div>
                            <div className="col-12 col-md-6 mt-2">
                                <div className="d-flex gap-1 justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_123)">
                                            <rect x="10" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.88795" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path d="M33.0222 15.1212L30.848 25.2848H28.2189L30.3935 15.1212H33.0222ZM44.0839 21.6839L45.4681 17.8671L46.2646 21.6839H44.0839ZM47.0173 25.2848H49.4492L47.3271 15.1212H45.0824C44.578 15.1212 44.1524 15.4146 43.963 15.8669L40.0185 25.2848H42.7795L43.3276 23.7671H46.7008L47.0173 25.2848ZM40.1555 21.9663C40.1668 19.2838 36.4459 19.1362 36.4716 17.9379C36.4794 17.5728 36.8271 17.1855 37.5866 17.0861C37.9639 17.0369 39.0013 16.9992 40.1793 17.5413L40.6406 15.386C40.0079 15.1563 39.1937 14.9353 38.1811 14.9353C35.5825 14.9353 33.7534 16.3169 33.738 18.2953C33.7216 19.7583 35.0437 20.5747 36.0399 21.0611C37.0642 21.5594 37.4084 21.8785 37.4039 22.324C37.3971 23.0063 36.5868 23.3068 35.8308 23.3187C34.5087 23.3396 33.7415 22.9619 33.13 22.6769L32.6536 24.9039C33.2677 25.186 34.4016 25.4312 35.578 25.4437C38.3396 25.4437 40.1465 24.0791 40.1555 21.9663ZM29.2653 15.1212L25.0056 25.2848H22.226L20.1299 17.1736C20.0025 16.674 19.8918 16.4913 19.5049 16.2806C18.8734 15.938 17.8295 15.616 16.9111 15.4165L16.9739 15.1212H21.4475C22.0175 15.1212 22.5306 15.5008 22.6599 16.1574L23.7671 22.039L26.503 15.1212H29.2653Z" fill="#1434CB" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_123" x="0.811593" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_123" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_123" result="effect2_dropShadow_31_123" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_123" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_125)">
                                            <rect x="9.61426" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.5022" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path d="M36.27 13.8484H29.4068V26.1819H36.27V13.8484Z" fill="#FF5F00" />
                                            <path d="M29.8426 20.0151C29.8415 18.8273 30.1107 17.6548 30.6297 16.5864C31.1487 15.518 31.904 14.5817 32.8384 13.8484C31.6813 12.9389 30.2916 12.3732 28.8283 12.2162C27.3649 12.0591 25.8869 12.3169 24.5631 12.9602C23.2393 13.6034 22.1232 14.6061 21.3424 15.8537C20.5615 17.1013 20.1475 18.5434 20.1475 20.0151C20.1475 21.4869 20.5615 22.929 21.3424 24.1766C22.1232 25.4241 23.2393 26.4269 24.5631 27.0701C25.8869 27.7133 27.3649 27.9712 28.8283 27.8141C30.2916 27.657 31.6813 27.0914 32.8384 26.1819C31.904 25.4485 31.1487 24.5122 30.6297 23.4438C30.1107 22.3754 29.8415 21.2029 29.8426 20.0151Z" fill="#EB001B" />
                                            <path d="M45.529 20.0151C45.529 21.4869 45.115 22.929 44.3342 24.1765C43.5534 25.4241 42.4374 26.4268 41.1136 27.0701C39.7899 27.7133 38.3118 27.9712 36.8485 27.8141C35.3851 27.657 33.9955 27.0914 32.8384 26.1819C33.772 25.4478 34.5267 24.5113 35.0457 23.4431C35.5646 22.3749 35.8343 21.2028 35.8343 20.0151C35.8343 18.8275 35.5646 17.6554 35.0457 16.5872C34.5267 15.5189 33.772 14.5825 32.8384 13.8484C33.9955 12.9389 35.3851 12.3732 36.8485 12.2162C38.3118 12.0591 39.7899 12.3169 41.1136 12.9602C42.4374 13.6034 43.5534 14.6062 44.3342 15.8537C45.115 17.1013 45.529 18.5434 45.529 20.0151Z" fill="#F79E1B" />
                                            <path d="M44.7807 24.8756V24.6231H44.8825V24.5716H44.6232V24.6231H44.725V24.8756H44.7807ZM45.2841 24.8756V24.5711H45.2046L45.1132 24.7805L45.0217 24.5711H44.9422V24.8756H44.9983V24.6459L45.0841 24.8439H45.1423L45.228 24.6454V24.8756H45.2841Z" fill="#F79E1B" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_125" x="0.425851" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_125" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_125" result="effect2_dropShadow_31_125" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_125" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_127)">
                                            <rect x="9.22852" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.11646" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.4256 15.646H16.7381C16.5542 15.646 16.3978 15.7796 16.3691 15.9611L15.2821 22.8518C15.2605 22.9879 15.3658 23.1104 15.5038 23.1104H16.7868C16.9707 23.1104 17.1271 22.9768 17.1558 22.7949L17.449 20.9364C17.4772 20.7544 17.634 20.6209 17.8176 20.6209H18.6683C20.4387 20.6209 21.4603 19.7643 21.7273 18.0669C21.8475 17.3243 21.7324 16.7408 21.3845 16.332C21.0026 15.8835 20.325 15.646 19.4256 15.646ZM19.7356 18.1627C19.5887 19.127 18.8519 19.127 18.1394 19.127H17.7339L18.0184 17.3261C18.0353 17.2174 18.1296 17.1372 18.2396 17.1372H18.4255C18.9108 17.1372 19.3686 17.1372 19.6052 17.4138C19.7462 17.5789 19.7895 17.824 19.7356 18.1627ZM27.4592 18.1318H26.1722C26.0625 18.1318 25.9678 18.212 25.9509 18.3209L25.8939 18.6808L25.8039 18.5504C25.5253 18.146 24.9041 18.0109 24.284 18.0109C22.8617 18.0109 21.6471 19.0879 21.4105 20.5988C21.2876 21.3523 21.4623 22.0729 21.8899 22.5755C22.2821 23.0375 22.8433 23.2301 23.5109 23.2301C24.6568 23.2301 25.2924 22.4933 25.2924 22.4933L25.2349 22.8509C25.2133 22.9877 25.3185 23.1102 25.4557 23.1102H26.615C26.7994 23.1102 26.9549 22.9766 26.984 22.7948L27.6796 18.3904C27.7016 18.2549 27.5966 18.1318 27.4592 18.1318ZM25.6652 20.6364C25.541 21.3715 24.9574 21.865 24.2132 21.865C23.8395 21.865 23.5407 21.7452 23.3491 21.5181C23.1588 21.2926 23.0865 20.9715 23.147 20.614C23.2631 19.8851 23.8564 19.3756 24.5893 19.3756C24.9547 19.3756 25.2518 19.4968 25.4475 19.726C25.6435 19.9574 25.7214 20.2804 25.6652 20.6364ZM33.0201 18.1317H34.3134C34.4945 18.1317 34.6002 18.3348 34.4973 18.4833L30.1959 24.6914C30.1262 24.792 30.0115 24.8518 29.8889 24.8518H28.5972C28.4153 24.8518 28.3091 24.6471 28.4144 24.4982L29.7538 22.6078L28.3293 18.4279C28.28 18.2826 28.3873 18.1317 28.5419 18.1317H29.8127C29.9778 18.1317 30.1235 18.24 30.1711 18.398L30.9271 20.9226L32.7109 18.2955C32.7807 18.1929 32.8968 18.1317 33.0201 18.1317Z" fill="#253B80" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M47.0426 22.8512L48.1456 15.8345C48.1625 15.7256 48.2569 15.6454 48.3665 15.645H49.6082C49.7453 15.645 49.8506 15.7679 49.829 15.9039L48.7413 22.7943C48.713 22.9762 48.5566 23.1098 48.3723 23.1098H47.2634C47.1263 23.1098 47.021 22.9872 47.0426 22.8512ZM38.5957 15.6454H35.9077C35.7242 15.6454 35.5678 15.779 35.5391 15.9605L34.4521 22.8512C34.4305 22.9872 34.5358 23.1098 34.6731 23.1098H36.0523C36.1805 23.1098 36.2901 23.0163 36.3101 22.8891L36.6186 20.9358C36.6469 20.7538 36.8037 20.6203 36.9872 20.6203H37.8375C39.6082 20.6203 40.6297 19.7637 40.8969 18.0663C41.0174 17.3237 40.9016 16.7402 40.5539 16.3314C40.1722 15.8829 39.4951 15.6454 38.5957 15.6454ZM38.9057 18.1621C38.7592 19.1264 38.0223 19.1264 37.3094 19.1264H36.9043L37.1892 17.3255C37.2061 17.2168 37.2996 17.1366 37.41 17.1366H37.5958C38.0809 17.1366 38.5391 17.1366 38.7755 17.4132C38.9167 17.5783 38.9596 17.8234 38.9057 18.1621ZM46.6285 18.1312H45.3425C45.2319 18.1312 45.1381 18.2114 45.1215 18.3203L45.0646 18.6802L44.9742 18.5498C44.6956 18.1454 44.0748 18.0103 43.4546 18.0103C42.0324 18.0103 40.8181 19.0873 40.5815 20.5981C40.459 21.3517 40.633 22.0723 41.0605 22.5748C41.4535 23.0369 42.014 23.2294 42.6816 23.2294C43.8274 23.2294 44.4628 22.4927 44.4628 22.4927L44.4056 22.8503C44.3839 22.9871 44.4892 23.1096 44.6272 23.1096H45.786C45.9695 23.1096 46.1259 22.976 46.1546 22.7941L46.8506 18.3898C46.8719 18.2543 46.7666 18.1312 46.6285 18.1312ZM44.8347 20.6358C44.7113 21.3709 44.127 21.8644 43.3826 21.8644C43.0096 21.8644 42.7103 21.7446 42.5185 21.5175C42.3282 21.292 42.2568 20.9709 42.3166 20.6134C42.4332 19.8845 43.0258 19.375 43.7587 19.375C44.1242 19.375 44.4212 19.4962 44.6171 19.7253C44.8138 19.9568 44.8917 20.2798 44.8347 20.6358Z" fill="#179BD7" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_127" x="0.0401087" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_127" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_127" result="effect2_dropShadow_31_127" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_127" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_129)">
                                            <rect x="9.84277" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.73072" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path d="M24.92 16.0816C25.231 15.6926 25.4421 15.1703 25.3864 14.6366C24.9311 14.6592 24.3756 14.9369 24.054 15.3262C23.7652 15.6596 23.5096 16.2038 23.5762 16.7151C24.0873 16.7594 24.5978 16.4597 24.92 16.0816Z" fill="#000008" />
                                            <path d="M25.3806 16.8149C24.6385 16.7707 24.0074 17.2362 23.653 17.2362C23.2984 17.2362 22.7557 16.8372 22.1687 16.848C21.4047 16.8592 20.6957 17.2912 20.308 17.9782C19.5106 19.3527 20.0976 21.3915 20.8731 22.5109C21.2497 23.0647 21.7035 23.6745 22.3015 23.6526C22.8666 23.6304 23.088 23.2867 23.7749 23.2867C24.4612 23.2867 24.6607 23.6526 25.2588 23.6415C25.879 23.6304 26.2668 23.0874 26.6434 22.5331C27.0754 21.9018 27.2523 21.2922 27.2634 21.2587C27.2523 21.2476 26.0674 20.7931 26.0564 19.43C26.0452 18.2887 26.9867 17.7459 27.031 17.7122C26.4993 16.9259 25.6686 16.8372 25.3806 16.8149Z" fill="#000008" />
                                            <path d="M31.8427 15.2704C33.4557 15.2704 34.579 16.3823 34.579 18.0011C34.579 19.6257 33.4326 20.7434 31.8022 20.7434H30.0163V23.5836H28.7259V15.2704L31.8427 15.2704ZM30.0163 19.6603H31.4969C32.6203 19.6603 33.2597 19.0555 33.2597 18.0069C33.2597 16.9585 32.6203 16.3593 31.5026 16.3593H30.0163V19.6603Z" fill="#000008" />
                                            <path d="M34.9161 21.8611C34.9161 20.801 35.7284 20.15 37.1688 20.0693L38.8278 19.9714V19.5048C38.8278 18.8308 38.3727 18.4275 37.6124 18.4275C36.8921 18.4275 36.4427 18.7731 36.3333 19.3147H35.1581C35.2272 18.22 36.1604 17.4135 37.6584 17.4135C39.1274 17.4135 40.0664 18.1912 40.0664 19.4068V23.5836H38.8738V22.5869H38.8451C38.4938 23.261 37.7275 23.6873 36.9325 23.6873C35.7457 23.6873 34.9161 22.9499 34.9161 21.8611ZM38.8278 21.3138V20.8356L37.3357 20.9278C36.5925 20.9797 36.172 21.308 36.172 21.8265C36.172 22.3565 36.6098 22.7022 37.2781 22.7022C38.148 22.7022 38.8278 22.103 38.8278 21.3138Z" fill="#000008" />
                                            <path d="M41.1923 25.8132V24.8049C41.2843 24.8279 41.4916 24.8279 41.5954 24.8279C42.1715 24.8279 42.4826 24.586 42.6727 23.9639C42.6727 23.9523 42.7822 23.5951 42.7822 23.5894L40.5931 17.523H41.941L43.4736 22.4545H43.4965L45.0291 17.523H46.3426L44.0726 23.9004C43.5543 25.3696 42.9551 25.8419 41.6992 25.8419C41.5954 25.8419 41.2843 25.8304 41.1923 25.8132Z" fill="#000008" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_129" x="0.654366" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_129" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_129" result="effect2_dropShadow_31_129" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_129" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="49" viewBox="0 0 66 49" fill="none">
                                        <g filter="url(#filter0_dd_31_131)">
                                            <rect x="9.45703" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                            <rect x="9.34498" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107" />
                                            <path d="M31.751 23.6142H30.7025V15.4559H33.482C34.1864 15.4559 34.7871 15.6907 35.2785 16.1604C35.7809 16.63 36.0321 17.2033 36.0321 17.8805C36.0321 18.574 35.7809 19.1473 35.2785 19.6115C34.7925 20.0757 34.1919 20.305 33.482 20.305H31.751V23.6142ZM31.751 16.4607V19.3057H33.5038C33.9188 19.3057 34.2683 19.1637 34.5414 18.8852C34.8198 18.6067 34.9618 18.2682 34.9618 17.8859C34.9618 17.5091 34.8198 17.176 34.5414 16.8975C34.2683 16.6081 33.9243 16.4662 33.5038 16.4662H31.751V16.4607Z" fill="#3C4043" />
                                            <path d="M38.7732 17.8477C39.5487 17.8477 40.1603 18.0552 40.608 18.4702C41.0558 18.8852 41.2797 19.4531 41.2797 20.174V23.6142H40.2804V22.8388H40.2367C39.8053 23.4777 39.2265 23.7944 38.5057 23.7944C37.8886 23.7944 37.3753 23.6142 36.9603 23.2483C36.5453 22.8824 36.3378 22.4292 36.3378 21.8831C36.3378 21.3043 36.5562 20.8456 36.9931 20.5071C37.4299 20.163 38.0142 19.9938 38.7405 19.9938C39.363 19.9938 39.8763 20.1084 40.2749 20.3378V20.0975C40.2749 19.7316 40.1329 19.4258 39.8435 19.1692C39.5541 18.9125 39.2156 18.7869 38.8279 18.7869C38.2436 18.7869 37.7794 19.0327 37.4408 19.5296L36.518 18.9508C37.0258 18.2136 37.7794 17.8477 38.7732 17.8477ZM37.419 21.8995C37.419 22.1726 37.5337 22.4019 37.7685 22.5821C37.9978 22.7623 38.2709 22.8551 38.5821 22.8551C39.0244 22.8551 39.4176 22.6913 39.7616 22.3637C40.1056 22.036 40.2804 21.6538 40.2804 21.2115C39.9527 20.9548 39.4995 20.8238 38.9152 20.8238C38.4893 20.8238 38.1343 20.9275 37.8504 21.1296C37.561 21.3425 37.419 21.5992 37.419 21.8995Z" fill="#3C4043" />
                                            <path d="M46.9807 18.028L43.4858 26.0661H42.4046L43.7043 23.2538L41.3999 18.028H42.5412L44.2012 22.0361H44.223L45.8394 18.028H46.9807Z" fill="#3C4043" />
                                            <path d="M27.5806 19.6443C27.5806 19.3024 27.55 18.9753 27.4932 18.6608H23.0985V20.4628L25.6295 20.4634C25.5268 21.063 25.1965 21.5741 24.6903 21.9148V23.084H26.1969C27.0766 22.2698 27.5806 21.0662 27.5806 19.6443Z" fill="#4285F4" />
                                            <path d="M24.6908 21.9149C24.2714 22.1977 23.7314 22.3632 23.0996 22.3632C21.8791 22.3632 20.8438 21.5408 20.473 20.4323H18.9189V21.638C19.6888 23.1659 21.2713 24.2144 23.0996 24.2144C24.3632 24.2144 25.4247 23.7988 26.1974 23.0835L24.6908 21.9149Z" fill="#34A853" />
                                            <path d="M20.3266 19.5378C20.3266 19.2265 20.3785 18.9256 20.473 18.6428V17.4371H18.9189C18.6005 18.0689 18.4214 18.782 18.4214 19.5378C18.4214 20.2935 18.601 21.0067 18.9189 21.6385L20.473 20.4328C20.3785 20.1499 20.3266 19.849 20.3266 19.5378Z" fill="#FABB05" />
                                            <path d="M23.0996 16.7119C23.7892 16.7119 24.4068 16.9494 24.8945 17.4136L26.2296 16.0795C25.4187 15.3243 24.3615 14.8607 23.0996 14.8607C21.2719 14.8607 19.6888 15.9092 18.9189 17.4371L20.473 18.6428C20.8437 17.5343 21.8791 16.7119 23.0996 16.7119Z" fill="#E94235" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_31_131" x="0.268624" y="0.293736" width="64.9911" height="48.4072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.448214" />
                                                <feGaussianBlur stdDeviation="2.24107" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_131" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4.48214" />
                                                <feGaussianBlur stdDeviation="4.48214" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_31_131" result="effect2_dropShadow_31_131" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_31_131" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </FooterMenuSection>
                </Container>
            </FooterSection>
        </>
    )
}

export default Footer
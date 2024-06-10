import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { AccordionWrapper } from "./styled";

const About = () => {
  return (
    <AccordionWrapper className="container">
      <h3 className="text-center mb-4">Hazırlayanlar</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Onur Ardıç</Accordion.Header>
          <Accordion.Body>
            Merhaba, ben Atatürk Üniversitesi Yönetim Bilişim Sistemleri 4.
            sınıf öğrencisiyim. Bilgisayarla tanışmam 7 yaşında başladı ve o
            günden beri teknolojiye olan merakım hiç azalmadı. Kendi gelişimime
            her zaman açık bir öğrenci olarak, yeni şeyler öğrenmeyi ve kendimi
            sürekli olarak geliştirmeyi seven biriyim. Şu anki odaklandığım alan
            Front End geliştirme ve burada HTML, CSS, JS konularında sağlam bir
            bilgiye sahibim. Bu alandaki yeteneklerimi piyasada işlere
            dönüştürdüm ve referanslarımı oluşturdum. Kütüphane olarak React,
            Angular, Bootstrap, TailwindCss ve Sass kullanıyorum. Gelecekteki
            vizyonum bir şirkette proje yöneticisi olarak görev almak ve
            yenilikçi yaklaşımlarla projeleri en iyi şekilde gerçekleştirmektir.
            Bu hedefe ulaşabilmek için sürekli olarak kendimi geliştiriyor ve
            öğreniyorum. Daha önce gerçekleştirdiğim projeler arasında sosyal
            medya platformları, tanıtım siteleri ve hazır script tasarımları
            gibi çeşitli projeler bulunmaktadır. Ayrıca, React, VueJS, Tailwind
            CSS ve PHP gibi teknolojilere olan ilgim ve öğrenme isteğim hiç
            azalmıyor. Her geçen gün kendimi daha da güçlendirmek ve yeni
            beceriler kazanmak adına çaba sarf ediyorum. Gelecekteki hedeflerime
            ulaşmak için kararlılıkla çalışmaya devam ediyorum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Buğra Özkahraman</Accordion.Header>
          <Accordion.Body>
            Cumhuriyet Üniversitesi Bilgisayar Mühendisliği bölümünden Mart
            2024'te mezun oldum. Şu an Front-End eğitimime devam etmekteyim.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Atakan Altunbaş</Accordion.Header>
          <Accordion.Body>
            Mart 2024'te Turkcell'in Front-End Eğitim Kampı'na katıldım ve
            eğitimime devam ediyorum. Web Programlama konusunda kendimi
            geliştirmek istiyorum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </AccordionWrapper>
  );
};

export default About;

import { AboutWrapper, IconImage, IconImageWrapper } from './styled'

const About = () => {
  return (
    <section
      className="about-us josefin-sans"
      style={{ padding: '160px 0', backgroundColor: '#000', color: '#fff' }}
      id="About"
    >
      <AboutWrapper className="about-wrapper">
        <h1 className="about-title">About Us</h1>
        <p className="about-text" style={{ fontSize: '17px', lineHeight: '30px' }}>
          Merhaba, ben Atatürk Üniversitesi Yönetim Bilişim Sistemleri 4. sınıf öğrencisiyim.
          Bilgisayarla tanışmam 7 yaşında başladı ve o günden beri teknolojiye olan merakım hiç
          azalmadı. Kendi gelişimime her zaman açık bir öğrenci olarak, yeni şeyler öğrenmeyi ve
          kendimi sürekli olarak geliştirmeyi seven biriyim. Şu anki odaklandığım alan Front End
          geliştirme ve burada HTML, CSS, JS konularında sağlam bir bilgiye sahibim. Bu alandaki
          yeteneklerimi piyasada işlere dönüştürdüm ve referanslarımı oluşturdum.
        </p>

        <IconImageWrapper className="languages">
          <IconImage src="htmlicon.png" alt="html" />
          <IconImage src="cssicon.png" alt="css" />
          <IconImage src="sassicon.png" alt="php" />
          <IconImage src="jsicon.png" alt="js" />
          <IconImage src="bootstrapicon.png" alt="bootstrap" />
          <IconImage src="reacticon.png" alt="react" />
          <IconImage src="reduxicon.png" alt="redux" />
          <IconImage src="angularicon.png" alt="angular" />
        </IconImageWrapper>
      </AboutWrapper>
    </section>
  )
}

export default About

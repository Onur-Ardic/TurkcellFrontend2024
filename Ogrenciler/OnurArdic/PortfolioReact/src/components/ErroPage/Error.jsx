import { Links } from '../baseStyle'
import { ErrorWrapper } from './styled'

const Error = () => {
  return (
    <ErrorWrapper style={{ backgroundColor: '#121212' }}>
      <h2>HOOP xD</h2>
      <h6>DUR YOLCU</h6>
      <p>Burada olduğuna göre ya bir şeyler karıştırıyorsun ya da bizde sorun var </p>

      <div style={{ marginTop: '30px' }}>
        <Links href="https://www.google.com.tr">Geldiğin yere geri dön</Links>
      </div>
    </ErrorWrapper>
  )
}

export default Error

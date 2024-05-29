import './card.css'

function Card({ data }) {
  return (
    <div className="card flex animate__animated animate__backInUp animate_slowly">
      <p>{data.city}</p>
      <div className="card-left">
        <p>{data.day}</p>
        <img src={data.icon} />
        <p className="degree f-24">{data.degree} °C</p>
        <span>{data.date}</span>
      </div>
      <div className="card-right">
        <p className="status">{data.status}</p>
        <div className="min-max-degree flex">
          <p className="flex flex-col">
            Min:
            <span>{data.min} °C</span>
          </p>

          <p className="flex flex-col">
            Max:
            <span>{data.max} °C</span>
          </p>
        </div>

        <p className="night flex">
          <i className="bi bi-moon-fill"></i>
          <span>{data.night} °C</span>
        </p>

        <p className="humidity flex">
          <i className="bi bi-droplet-half"></i>
          <span>{data.humidity} %</span>
        </p>

        <p className="description flex font-ibm-plex">
          <span>{data.description.toUpperCase()}</span>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </p>
      </div>
    </div>
  )
}

export default Card

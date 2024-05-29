
function Card({data}) {
  return (
    <div className='card'>
        <img src={data.icon} />
        <p>{data.day}</p>
        <p>{data.date}</p>
        <p>{data.description}</p>
        <p>{data.status}</p>
        <p>{data.degree}</p>
        <p>{data.min}</p>
        <p>{data.max}</p>
        <p>{data.night}</p>
        <p>{data.humidity}</p>
    </div>
  )
}

export default Card
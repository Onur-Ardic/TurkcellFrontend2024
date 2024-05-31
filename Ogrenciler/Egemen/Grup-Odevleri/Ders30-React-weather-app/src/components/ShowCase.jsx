import Card from "./Card";
const ShowCase = ({ data, capitalize, activeDay }) => {
  if (!data || !data.result || data.result.length === 0) {
    return <p>No data available</p>;
  }
  const getStatusDetails = (status) => {
    const details = {
      Clear: {
        bg: "https://media.istockphoto.com/id/947314334/photo/blue-sky-with-bright-sun.jpg?s=612x612&w=0&k=20&c=XUlLAWDXBLYdTGIl6g_qHQ9IBBw4fBvkVuvL2dmVXQw=",
        sentence:
          "Güneş kreminizi sürmeyi ve güneş gözlüğünüzü almayı unutmayın.",
      },
      Rain: {
        bg: "https://thoughtcatalog.com/wp-content/uploads/2018/01/joy-stamp-21279.jpg?w=1140",
        sentence: "Hava yağmurlu gözüküyor. Şemsiyenizi alsanız iyi olur.",
      },
      Clouds: {
        bg: "https://t4.ftcdn.net/jpg/05/13/26/73/360_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg",
        sentence: "Moralinizi bozmaya hiç gerek yok. Güneşli günler yakın.",
      },
      default: {
        bg: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/04/cloud1.jpg",
        sentence: "İyi günler.",
      },
    };
    return details[status] || details.default;
  };
  const statusDetails = getStatusDetails(data.result[activeDay].status);
  return (
    <div className="container-sm mt-5">
      <div
        className="row rounded-5 p-5 showCaseBanner justify-content-between"
        style={{
          backgroundImage: `url(${statusDetails.bg})`,
        }}
      >
        <div className="col-lg-9 bg-dark bg-opacity-25 rounded-5 p-5">
          <h1 className="cityName">{capitalize(data.city)}</h1>
          <h3 className="text-white mb-5 ms-2">
            {data.result[activeDay].date}
          </h3>
          <h3 className="text-white ">{statusDetails.sentence}</h3>
        </div>
        <div className="col-lg-3">
          <Card
            day={data.result[activeDay]}
            col={"col-12"}
            bg={"purple-bg"}
            color={"text-white"}
            dayBg={"bg-white"}
            dayColor={"purple"}
            capitalize={capitalize}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;

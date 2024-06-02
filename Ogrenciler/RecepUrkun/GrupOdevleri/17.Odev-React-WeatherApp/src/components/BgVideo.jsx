import videoRainyBg from "../assets/videos/rainy.mp4";
import videoCloudyBg from "../assets/videos/cloudy.mp4";
import videoSunnyBg from "../assets/videos/sunny.mp4";

const Video = ({ weather }) => {
  let videoSrc;
  
  switch (weather) {
    case "rainy":
      videoSrc = videoRainyBg;
      break;
    case "cloudy":
      videoSrc = videoCloudyBg;
      break;
    case "açık":
      videoSrc = videoSunnyBg;
      break;
    default:
      videoSrc = videoSunnyBg;
  }

  return <video src={videoSrc} autoPlay loop muted />;
};

export default Video;

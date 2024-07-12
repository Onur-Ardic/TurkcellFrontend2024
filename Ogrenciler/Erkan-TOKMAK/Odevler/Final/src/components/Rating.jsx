
import { Rating as ReactRating , Star} from '@smastrom/react-rating'

const myStyles = {
  itemShapes: Star,
  activeFillColor: '#ffb700',
  
}

export function Rating({rating}) {

  return <ReactRating style={{ maxWidth: 100 }} value={rating} itemStyles={myStyles}/>
}
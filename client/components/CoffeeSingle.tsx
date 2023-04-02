import { CoffeeData } from '../models/Coffee'
import { fetchDelCoffee } from '../actions/getCoffee'
import { useAppDispatch } from '../hooks/redux'

interface Props {
  coffeeProp: CoffeeData
}

export default function SingleCoffee(props: Props) {
  const { id, name, url, selftext } = props.coffeeProp
  const dispatch = useAppDispatch()
  //cut the words and joining the words => limiting words displaying on screen
  // const words = selftext.split(' ')
  // const limitedText = words.slice(0, 18).join(' ') + '...' //optinal
  // -------
  return (
    <div className="card-front">
      <img className="img_size" src={url} alt={name} />
      <div className="card-body">
        <div className="title-card">
          <h2>{name}</h2>
        </div>
        <div className="card-text-bottom">
          {/* <h2>{name}</h2> */}
          <p>{selftext}</p>
          <div className="button-group">
            <button className="button-card">Update</button>
            <button
              onClick={() => dispatch(fetchDelCoffee(id))}
              className="button-card-delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

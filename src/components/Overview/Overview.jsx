import {TiStar} from 'react-icons/ti'
import {TiStarHalf} from 'react-icons/ti'
import { useSelector } from 'react-redux'
import mentor_data from '../../mentor_data'
import {CSSTransition} from 'react-transition-group' 

import './Overview.css'

function Overview() {
  const mentor_id = useSelector(state => state.mentor.id)
  const isEnter = useSelector(state => state.mentor.isAnimationEnter)
    return (
      <div className="overview">
      <div className="rating">
        <span className="num">{mentor_data[mentor_id - 1].rating}</span>
        <div className="stars">
          <TiStar/>
          <TiStar/>
          <TiStar/>
          <TiStar/>
          {mentor_data[mentor_id - 1].rating == "5.0" ? <TiStar/> : <TiStarHalf/> }
        </div>
      </div>
      <div className="title">
        <div className="name">{mentor_data[mentor_id - 1].name}</div>
        <span className="designation">{mentor_data[mentor_id - 1].designation}</span>
      </div>
      <div className="description">
      {mentor_data[mentor_id - 1].description}
      </div>
      <div className="book-btn">Book a session</div>
    </div>
    )
  }
  
  export default Overview
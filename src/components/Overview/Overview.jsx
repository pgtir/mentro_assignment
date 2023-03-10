import {TiStar} from 'react-icons/ti'
import {TiStarHalf} from 'react-icons/ti'
import { useSelector } from 'react-redux'
import mentor_data from '../../mentor_data'
import {CSSTransition} from 'react-transition-group' 

import './Overview.css'

function Overview() {
  const mentor_id = useSelector(state => state.mentor.id)
  const isEnter = useSelector(state => state.mentor.isAnimationEnter)
  const bgLight = "#4CAF50"
  const bgDark = "609B6C"
    return (
      <div className="overview">
      <div className="rating">
        <span className="num" style={{color: `${mentor_id == 3 || mentor_id == 5 ? bgDark : bgLight}`}}>{mentor_data[mentor_id - 1].rating}</span>
        <div className="stars" style={{color: `${mentor_id == 3 || mentor_id == 5 ? bgDark : bgLight}`}}>
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
      <div className="book-btn" style={{backgroundColor: `${mentor_id == 3 || mentor_id == 5 ? bgDark : bgLight}`}}>Book a session</div>
    </div>
    )
  }
  
  export default Overview
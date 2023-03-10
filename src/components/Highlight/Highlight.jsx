import img1 from '../../images/Ellipse 17.png' 
import {BsArrowDown} from 'react-icons/bs'
import './Highlight.css'
import { useSelector, useDispatch } from 'react-redux'
import { rotateLeft, rotateRight } from '../../redux/mentorSlice'
import mentor_data from '../../mentor_data'
import {CSSTransition} from 'react-transition-group'

function Highlight() {
    const mentor_id = useSelector(state => state.mentor.id)
    const isEnter = useSelector(state => state.mentor.isAnimationEnter)
    const bgLight = "#4CAF50"
    const bgDark = "609B6C"
    const dispatach = useDispatch();
    return (
        <div className="highlight">
        <div className="img-container">
        <div className="arrow-btn">
        <div className="btn-left" style={{backgroundColor: `${mentor_id == 3 || mentor_id == 5 ? bgDark : bgLight}`}} onClick={() => dispatach(rotateLeft())}>
        <BsArrowDown/>
        </div>
        </div>
        <CSSTransition
        in ={isEnter}
        timeout={2000}
        classNames="animate-highlight">
         <div className="center">
        <img src={mentor_data[mentor_id - 1].image} alt="" />
        </div>
        </CSSTransition>
        <div className="arrow-btn">
        <div className="btn-right" style={{backgroundColor: `${mentor_id == 3 || mentor_id == 5 ? bgDark : bgLight}`}} onClick={() => dispatach(rotateRight())}>
        <BsArrowDown/>
        </div>
        </div>
        </div>
        <CSSTransition
        in ={isEnter}
        timeout={2000}
        classNames="animate-highlight">
          
        <div className="img-info">
          <div className="name">
          {mentor_data[mentor_id - 1].name}
          </div>
        </div>
        </CSSTransition>
      </div>
    )
  }
  
  export default Highlight
import img17 from '../../images/Ellipse 17.png' 
import img18 from '../../images/Ellipse 18.png' 
import img19 from '../../images/Ellipse 19.png' 
import img20 from '../../images/Ellipse 20.png' 
import img21 from '../../images/Ellipse 21.png' 
import './ImageOrbit.css'
import { useSelector } from 'react-redux'
import mentor_data from '../../mentor_data'
import { CSSTransition } from 'react-transition-group'

function ImageOrbit() {
  const mentor_id = useSelector(state => state.mentor.id)
  const isEnter = useSelector(state => state.mentor.isAnimationEnter)
  const isRotateLeft = useSelector(state => state.mentor.isLeftRotate)
  const isRotateRight = useSelector(state => state.mentor.isRightRotate)
    return (
      <div className="image-orbit" style={{backgroundColor: `${mentor_id == 3 || mentor_id == 5 ? "#7ABD87": "#C5F8C7"}`}}>
      <CSSTransition
          in ={isEnter}
          timeout={2000}
          classNames={isRotateLeft == true && isRotateRight == false ? "animate-orbit-left" : "animate-orbit-right"}>
        <div className="dotted" style={{border: `2px dashed ${mentor_id == 3 || mentor_id == 5 ? "#0C3959": "#4CAF50"}`}}>
          
          <div className="image top">
          <img src={mentor_data[mentor_id - 1].image} alt="" />
          </div>

          <div className="image top-left">
          <img src={mentor_id < 5 ? mentor_data[mentor_id].image : mentor_data[mentor_id - 5].image} alt="" />
          </div>

          <div className="image top-right">
          <img src={mentor_id + 3 < 5 ? mentor_data[mentor_id + 3].image : mentor_data[mentor_id - 2].image} alt="" />
          </div>

          <div className="image bottom-left">
          <img src={mentor_id + 1 < 5 ? mentor_data[mentor_id + 1].image : mentor_data[mentor_id - 4].image} alt="" />
          </div>
          
          <div className="image bottom-right">
          <img src={mentor_id + 2 < 5 ? mentor_data[mentor_id + 2].image : mentor_data[mentor_id - 3].image} alt="" />
          </div>
        </div>
        </CSSTransition>
        </div>
    )
  }
  
  export default ImageOrbit
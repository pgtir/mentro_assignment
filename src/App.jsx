import './styles.css'
import ImageOrbit from './components/ImageOrbit/ImageOrbit'
import Highlight from './components/Highlight/Highlight'
import Overview from './components/Overview/Overview'
import {CSSTransition} from 'react-transition-group' 
import { useSelector } from 'react-redux'

function App() {
  const isEnter = useSelector(state => state.mentor.isAnimationEnter)
    return (
      <div>
        <CSSTransition
        in ={isEnter}
        timeout={2000}
        classNames="animate-overview"
        >
        <Overview/>
        </CSSTransition>
       <ImageOrbit/>
        <Highlight/>
      </div>
    )
  }
  
  export default App
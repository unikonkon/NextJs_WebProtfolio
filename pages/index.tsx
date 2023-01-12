
import Navigatorbar from './component/navbar'
import Home from './Home'



export default function index() {
 
  return (
    <div className="font-sana ">
      <link href="/dist/output.css" rel="stylesheet"></link>
      <div className="z-10">
      <Navigatorbar/>
      </div>
    
      <div className="pt-16 z-0 bg-[url('/bg1.jpg')]">
      <Home/>
      </div>
     
    </div>
  )
}

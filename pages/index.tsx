
import Navigatorbar from './component/navbar'
import Home from './Home'



export default function index() {
 
  return (
    <div className="font-sana ">
      <link href="/dist/output.css" rel="stylesheet"></link>
      <Navigatorbar/>
      <div className="bg-slate-600">
      <Home/>
      </div>
     
    </div>
  )
}

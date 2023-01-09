
import Navigatorbar from './component/navbar'
import Home from './Home'



export default function index() {
 
  return (
    <div className="font-sana bg-slate-600">
      <link href="/dist/output.css" rel="stylesheet"></link>
      <Navigatorbar/>
      <Home/>
    </div>
  )
}

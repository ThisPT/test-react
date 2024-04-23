
import './App.css'
let Email:string
let password:string
let username:string
let date:String
const Submit = ()=>{
  const info = {
    Email,
    password,
    username,
    date
  }
  console.log(info)
  
}
function App() {
  
  return (
    <>
     <div className='hero'>
      <div className='card'>
        <div >
          <div className='login'>Login</div>
          <div className='gap'>
            <div className='email'>Email</div>
            <input onChange={(event)=>{Email = event.target.value}} className='input'></input>
          </div>
          <div className='gap'>
            <div className='email'>Username</div>
            <input onChange={(event)=>{username = event.target.value}} className='input'></input>
          </div>
          <div className='gap'>
            <div className='email'>Password</div>
            <input onChange={(event)=>{password = event.target.value}} className='input'></input>
          </div>
          <div className='gap'>
            <div className='email'>Date</div>
            <input onChange={(event)=>{date = event.target.value}} type='date'className='input'></input>
          </div>
          <div className='btn-wrap'>
            <button onClick={()=>{Submit()}} className='btn'>Submit</button>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

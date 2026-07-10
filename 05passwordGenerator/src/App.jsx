import { useCallback, useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false) 
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123457689"
    if (charAllowed) str+= "!@#$%^&*(){}~'"

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass)

    } ,
    [length, numAllowed, charAllowed, setPassword] ) 

  const copyPasswordToClipboard = useCallback(()=>{
    console.log(passwordRef.current);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);

    window.navigator.clipboard.writeText(password)
  }, [password])

    useEffect(() => {
      passwordGenerator()
    }, [length, numAllowed, charAllowed,passwordGenerator])
  return (
    <>
    
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        
        <h1 className='text-4xl text-center
      text-white'>Password Generator</h1>

        <div className='flex shadow rounded-lg 
        rounded-lg overflow-hidden mb-4 bg-white text-gray-700'>
          <input type='text'
          value ={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label> Length : {length}</label>
          </div>
          <div className='flex text-sm gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=> {
              setnumAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type = "checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=> {
              setcharAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>

    </>
  ) 
}

export default App

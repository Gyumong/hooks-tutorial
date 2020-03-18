import React, {useState} from 'react';
import Average from './Average';
import './App.css';

function App() {
  const [visible,setVisible] = useState(false);
return(
  <div>
<button
  onClick={()=>{
    setVisible(!visible);
  }}
  >
{visible? '숨기기' : '보이기'}
</button>
<hr />
{visible && <Average />}
  </div>
);
};

export default App;

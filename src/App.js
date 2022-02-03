
import './App.css';
import React, {useState} from 'react';

function App() {
 const [ color, setColor] = useState('white')
 const [ids, setIds] = useState([])

 const blocks = [
  [{id: 1}, {id: 2}, {id: 3}],
  [{id: 4}, {id: 5}, {id: 6}],
  [{id: 7}, {id: 8}, {id: 9} ]
 ]

 const find_index = (id) => {
    return ids.includes(id)
 }
 
  return (
    <div className="App">
        {blocks.map(block_set => (
            <div className='row'>
              {block_set.map(block => (
                   <div  
                    className={`block ${color == 'red' ? find_index(block.id) ? `block-red` : `` : ``}`} 
                   onClick={() => {
                     color == 'red' ? setColor('white') : setColor('red')
                     setIds([...ids, block.id])
                   }}
                   ></div>
              ))}
            </div>
        ))}
    </div>
  );
}

export default App;


import './App.css';
import ColorPallet from './components/ColorPallet';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <div className='outer'>
    {
      Colors.map((color,idx)=>{
        return(
          <ColorPallet key={idx} color_name={color.color_name} color_code={color.color_code}/>
        )
      })
    }
    </div>
    </div>
  );
}

export default App;

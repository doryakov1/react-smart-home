import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AddRoom from './Components/AddRoom';
import RoomDetails from './Components/RoomDetails';

let gProducts = [];

function App() {
  const [rooms, setRooms] = useState([]);
  const addRoom = (type, name, color) => {
    let room = {
      type: type,
      name: name,
      color: color
    };
    setRooms([...rooms, room]);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Smart house</h1>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path='/react-smart-home' element={<HomePage rooms={rooms} />} />
          <Route path='/react-smart-home/addroom' element={<AddRoom add={addRoom} />} />
          {rooms.map((val, i) => {
            return <Route path={'/react-smart-home/room' + i} element={<RoomDetails type={val.type} name={val.name} color={val.color} gProducts={gProducts} index={i}  />} />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

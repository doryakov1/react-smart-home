import React, { useState } from 'react';
import './AddRoom.css';
import { useNavigate } from 'react-router-dom';

export default function AddRoom(props) {
    const [roomName, setRoomName] = useState('');
    const [roomColor, setRoomColor] = useState('black');
    const [roomType, setRoomType] = useState('חדר שינה');

    const [alert, setAlert] = useState(false);
    const nev = useNavigate();
    const showAlert = () => {
        if (alert) return <span>Error</span>
    }

    return (
        <div className='room-select'>
                  <h1>Smart house</h1>
            <label for="rooms">בחר חדר חדש</label>
            <select onChange={(e) => setRoomType(e.target.value)} name="rooms" id="room-select">
                <option value=""></option>
                <option value="חדר שינה">חדר שינה</option>
                <option value="חדר אמבטיה/שירותים">חדר אמבטיה/שירותים </option>
                <option value="מטבח">מטבח</option>
            </select>
            <label for="roomName">שם החדר</label>
            <input className='room-name' onChange={(e) => setRoomName(e.target.value)} placeholder="שם בעברית" type="text" name='roomName' />
            <label for="roomColor">בחר צבע</label>
            <input onChange={(e) => setRoomColor(e.target.value)} type="color" className='color-input' name='roomColor' />
            {showAlert()}
            <button onClick={() => {
                if (roomName.length > 0 && roomName >= 'א' && roomName <= 'ת') {
                    setAlert(false);
                    setTimeout(() => {
                        props.add(roomType, roomName, roomColor);
                        nev('/react-smart-home');
                    }, 500);
                } else {
                    setAlert(true);
                }
                setTimeout(() => {
                    nev('/react-smart-home');
                }, 500);

            }} >צור</button>
        </div>
    )
}

import React from 'react';
import './HomePage.css';
import { useNavigate ,Link} from 'react-router-dom';


export default function HomePage(props) {
  const nev = useNavigate();
  return (
    <div className='home-page'>
      <h1>Smart house</h1>
      <div className='rooms-buttons'>
        {props.rooms.map((val,i) => {
          return (
            <Link className='link' to={'/react-smart-home/room' + i}> <div style={{ background: val.color }} className='room-button'>
              <h1>{val.name}</h1>
            </div> </Link>
          )
        })}
      </div>
      {/* <Link className='link' to='/react-smart-home/addroom'> */}
        <button onClick={()=>nev('/react-smart-home/addroom')}>➕</button>
      {/* </Link> */}
    </div>
  )
}

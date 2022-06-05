import React, { useState } from 'react';
import './RoomDetails.css';
import { Link } from 'react-router-dom';



export default function RoomDetails(props) {
  const sliceText = (text) => {
    if (text.length > 20) {
      return text.slice(0, 20) + '...';
    } else {
      return text;
    }
  }
  const [addChar, setAddChar] = useState('הוסף מוצר')
  const [products, setProducts] = useState(() => {
    if (props.gProducts[props.index] == undefined) {
      return [];
    } else {
      return props.gProducts[props.index];
    }
  });
  const [productType, setProductType] = useState('');
  const [alert, setAlert] = useState(false);
  const changeBackground = (val) => {
    if (val.backgorund == 'red') {
      val.backgorund = 'green';
    } else {
      val.backgorund = 'red';
    }
    setProducts([...products]);
    props.gProducts[props.index] = products.slice();
  }
  const showAlert = () => {
    if (alert == true) {
      return <span className='alert'>Error</span>
    }
  }

  const findProductByType = (type) => {
    const result = products.find((product) => product.type == type && type == 'מערכת סטריאו');
    return result;
  }


  const addProduct = () => {
    let product = {
      backgorund: 'red',
      type: productType
    }

    if (products.length >= 5 || product.type == 'דוד' && props.type != 'חדר אמבטיה/שירותים' || product.type <= 0) {
      setAlert(true);
    } else if (findProductByType(product.type) != undefined) {
      setAlert(true);
    } else {
      setAlert(false);
      setProducts([...products, product]);
      props.gProducts[props.index] = products.slice();
    }
  }








  return (
    <div className='room-details'>
      <div className='room-header'>
        <Link className='link' to={'/react-smart-home'}>
          <button className='nav-back'>🔙</button>
        </Link>
        <h1>Smart house</h1>
        <div className='room-header-details'>
          <span className='room-type' >סוג החדר: {sliceText(props.type)}</span>
          <span className='room-name'>שם החדר: {sliceText(props.name)}</span>
        </div>
      </div>
      {showAlert()}
      <div className='products'>
        {products.map((product) => {
          return <button className='product-button' onClick={() => { (changeBackground(product)) }} style={{ background: product.backgorund }}>{product.type}</button>
        })}
      </div>
      <div className='product-menu'>

        <input type="checkbox" id="product-list" />
        <div className='product-select'>
          <select onChange={(e) => setProductType(e.target.value)} name="products" id="product-select">
            <option value="">בחר מוצר</option>
            <option value="מזגן">מזגן</option>
            <option value="מערכת סטריאו">מערכת סטריאו</option>
            <option value="מנורה">מנורה</option>
            <option value="דוד">דוד</option>
          </select>
          <button className='product-add' onClick={addProduct}>הוסף</button>
        </div>
        <label className='product-show' onClick={() => {
          if (addChar == 'הוסף מוצר') {
            setAddChar('❌');
          } else {
            setAddChar('הוסף מוצר');
          }
        }} for="product-list">{addChar}</label>
      </div>

    </div>
  )
}


import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'
export function Button({op,conset}) {
  return (<>
    <Link to='/cart'>
      <button className='N-btn'><AiOutlineShoppingCart/></button>
    </Link>
    <div onClick={()=>op(true)} >
      <button className='N-btn'  >SignUp</button>
    </div>
    <div onClick={()=>conset(true)} >
      <button className='N-btn'>Contribute</button>
    </div>
    </>
  );
}

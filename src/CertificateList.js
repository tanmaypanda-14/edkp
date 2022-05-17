import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import './CertificateList.css';
import previewImg from './images/preview.png'
import { type } from '@testing-library/user-event/dist/type';

export class CertificateList extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="table-top"><ul>
        <li> </li>
        <li><strong>DOCUMENT</strong></li>
        <li><strong>AMOUNT</strong></li>
        <li><strong>PREVIEW</strong></li>
        <li><strong>QUANTITY</strong></li>
            <li> </li></ul></div>
        <div className="cert-list1">
            <li>1</li>
            <li className='doc'>Official Transcript</li>
            <li className='amount'>₹500/-</li>
            <li className='preview'><button><img src={previewImg} alt="" /></button></li>
            <li className='quantity'><button className='subtract' ><i class="fa-solid fa-minus"></i></button>
                <input type="text" value={1} />
                <button className='add'><i class="fa-solid fa-plus"></i></button></li>
            <li className='checkBox'><input type="checkbox" /></li>
        </div>
        <div className="cert-list2">
        <li>2</li>
                <li className='doc'>Consolidated Grade Card</li>
                <li className='amount'>₹100/-</li>
                <li className='preview'><button><img src={previewImg} alt="" /></button></li>
                <li className='quantity'><button className='subtract' ><i class="fa-solid fa-minus"></i></button>
                <input type="text" value={1} />
                <button className='add' ><i class="fa-solid fa-plus"></i></button></li>
                <li className='checkBox'><input type="checkbox" /></li>
        </div>
      </div>
    )
  }
}

export default CertificateList

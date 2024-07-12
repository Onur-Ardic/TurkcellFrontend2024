'use client'
import Image from 'next/image';
import './FilterBar.sass'
import filtericon from '../../../public/filtericon.svg'
import { useState } from 'react';

const FilterBar = () => {
    const [rangeValues] = useState([200, 250, 300, 350, 400, 450, 500]);
    const [currentRangeValue, setCurrentRangeValue] = useState(0);

    const handleInputChange = (e) => {
        setCurrentRangeValue(e.target.value);
    };
    

    return (
        <div className='filterBar'>
          <div className='d-flex justify-content-between'><h4  className="filterTitle">Filters</h4>
          <Image src={filtericon}></Image></div>
            <div className='categories mb-3'>
                <ul className='list-unstyled mb-3 row gap-2'>
                    <li className='d-flex justify-content-between ctgSubTitle'><span>Tshirts</span> <i className="bi bi-chevron-right"></i></li>
                    <li className='ctgSubTitle d-flex justify-content-between'> <span>Shorts</span> <i className="bi bi-chevron-right"></i></li>
                    <li className='ctgSubTitle d-flex justify-content-between'> <span>Shirts</span> <i className="bi bi-chevron-right"></i></li>
                    <li className='d-flex ctgSubTitle justify-content-between'><span>Hoodie</span> <i className="bi bi-chevron-right"></i></li>
                    <li className='d-flex ctgSubTitle justify-content-between'><span>Jeans</span> <i className="bi bi-chevron-right"></i></li>
                </ul>
            </div>
            <h4 className='filterTitle'>Price</h4>
            <div className='d-flex align-items-center gap-2'>
                <input
                    onChange={handleInputChange}
                    type="range"
                    min={0}
                    defaultValue={0}
                    max={rangeValues.length - 1}
                    step={1}
                    list="tick-list"
                />
                <datalist id="tick-list">
                    {rangeValues.map((value, index) => (
                        <option key={index} value={index}>{value}</option>
                    ))}
                </datalist>
                <span className="rangNum">$ {rangeValues[currentRangeValue]}</span>
            </div>
            <div className='colors mb-3'>
            <h4 className="filterTitle">Colors</h4>
            <div className='colorsContent mb-3 d-flex flex-wrap'>
                    <span className='green'></span>
                    <span className='red'></span>
                    <span className='yellow'></span>

                    <span className='orange'></span>
                    <span className='blue'></span>
                    <span className='darkblue'></span>
                    <span className='pink'></span>
                    <span className='purple'></span>
                    <span className='white'></span>

                    <span className='black'></span>

            </div>
            </div>
            <h4 className="filterTitle">Size</h4>
            <div className='sizeContent mb-2 d-flex flex-wrap'>
                    <button className='btn sizeBtn'>Small</button>
                    <button className='btn sizeBtn'>Medium</button>
                    <button className='btn sizeBtn'>XX-Large</button>
                    <button className='btn sizeBtn'>3X-Large</button>
                    <button className='btn sizeBtn'>4X-Large</button>
                    <button className='btn sizeBtn'>X-Small</button>
                    <button className='btn sizeBtn'>XX-Small</button>

            </div>
            <div className='dressStyle mb-3'>
            <h4 className="filterTitle">Dress Style</h4>

                <ul className='list-unstyled mb-3 row gap-2'>
                    <li className='d-flex ctgSubTitle justify-content-between'><span>Tshirts</span> <i className="bi bi-chevron-right"></i></li>
                    <li className='ctgSubTitle d-flex justify-content-between'> <span>Shorts</span> <i className="bi bi-chevron-right"></i></li>
                    <li className='d-flex ctgSubTitle justify-content-between'> <span>Shirts</span> <i className="bi bi-chevron-right"></i></li>
                    <li className='d-flex ctgSubTitle justify-content-between'><span>Hoodie</span> <i className="bi bi-chevron-right"></i></li>
                    <li className='d-flex ctgSubTitle justify-content-between'><span>Jeans</span> <i className="bi bi-chevron-right"></i></li>
                </ul>
            </div>
            <button className='btn applybtn fs-6 btn-lg px-5 py-3 me-md-2 my-3'>Apply Filter</button> 
        </div>
    )
}

export default FilterBar;
import React from 'react'
import Image from 'next/image'
import casual from '../../../../public/assets/casual.svg'
import formal from '../../../../public/assets/formal.svg';
import party from '../../../../public/assets/party.svg';
import gym from '../../../../public/assets/gym.svg';

function DressStyle() {
  return (
    <div className='container my-5 p-0'>
        <div className="dress-style">
            <h2 className='text-center title'>BROWSE BY DRESS STYLE</h2>
            <div className="mb-4 mx-5 d-flex gap-4">
                <div className="sm-product-card">
                    <div className='casual'>
                        <Image src={casual} width='407' height='289' priority sizes='{max-width: 425px} 190px, 310px'/>
                    </div>
                </div>
                <div className="lg-product-card">
                    <div className="formal">
                        <Image src={formal} width={684} height={289} />
                    </div>
                </div>
            </div>
            <div className="d-flex gap-4 mx-5">
                <div className="lg-product-card">
                    <div className="formal">
                        <Image src={party} width={684} height={289} />
                    </div>
                </div>
                <div className="sm-product-card">
                    <div className="casual">
                    <Image src={gym} width='407' height='289' priority sizes='{max-width: 425px} 190px, 310px'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DressStyle
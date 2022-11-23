import React, { useContext, useEffect, useState } from 'react';
import Illustration from '../../assets/Illustration.png';
import Create from '../../assets/Create.png';
import Curate from '../../assets/Curate.png';
import Collaborate from '../../assets/Collaborate.png'
import Frame from '../../assets/Frame 5.png';

export const Home = () => {


    return (
       <div>
            <div style={{ paddingLeft: '10%', paddingRight: '10%', position: 'relative'}}>
                <div style={{ height: '100%', textAlign: 'center', position: "absolute"}}>
                    <img src={Illustration} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div style={{ height: '100%', position: "relative"}}>
                    <img src={Frame} style={{ paddingTop: '51%', maxWidth: '100%', height: 'auto'}} />
                    {/* <img src={Curate} style={{top: 0, maxWidth: '100%', height: 'auto'}}/>
                    <img src={Collaborate} style={{top: 0, maxWidth: '100%', height: 'auto'}}/> */}
                </div>
            </div>
        
       </div> 
    )
}
import React, { useContext, useEffect, useState } from 'react';
import Illustration from '../../assets/Illustration.png';
import Create from '../../assets/Create.png';
import Curate from '../../assets/Curate.png';
import Collaborate from '../../assets/Collaborate.png'
import Frame from '../../assets/FrameTop.png';
import SquiggleBlue from '../../assets/SquiggleBlue.png';
import FrameBlue1 from '../../assets/FrameBlue1.png';
import FrameBlue2 from '../../assets/FrameBlue2.png';
import { Typography } from '@material-ui/core';
import SquiggleBlue2  from '../../assets/SquiggleBlue2.png'

export const Home = () => {

    function over(e) {
        e.currentTarget.src =  FrameBlue1 ;
     }
      function out(e) {
        e.currentTarget.src =  SquiggleBlue ;
      }

    return (
       <div>
            <div style={{ paddingLeft: '10%', paddingRight: '10%', position: 'relative'}}>

                <div style={{ height: '100%', textAlign: 'center', position: "absolute"}}>
                    <img src={Illustration} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>

                <div style={{ height: '100%', position: "relative"}} >
                    <img src={Frame} style={{ paddingTop: '51%', maxWidth: '100%', height: 'auto', zIndex: 1}} />
                    <img src={SquiggleBlue} onMouseOver={over} onMouseOut={out} style={{ maxWidth: '100%', height: 'auto'}} />
                </div>


                {/* <div style={{paddingLeft: '70%'}}>
                        <img src={SquiggleBlue2} />
                    </div>
                    <div style={{paddingLeft: '30%'}}>
                        <div style={{ height: '358px', width: '752px', borderRadius: '60px', backgroundColor: '#3366FF', display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h3' style={{ color: '#33FF99', fontWeight: '600', fontSize: '66px', lineHeight: '57px' }}>It uses the innovation of blockchain technology to authenticate, store historical records.</Typography>
                        </div>
                    </div>   */}

                {/* <div id="how it works" style={{textAlign: 'center'}}>
                    <Typography varient='h2' style={{fontWeight: '600', fontSize: '90px'}}>How it Works</Typography>
                    <div style={{height: '485px', width: '1168px', borderRadius: '60px', backgroundColor: '#33FF99', display: 'flex', alignItems: 'center'}}>
                        <Typography varient='h6' style={{fontWeight: '600', fontSize: '50px'}}>Create a Free Account</Typography><br />
                        <div>
                            <Typography varient='h6' style={{fontWeight: '500', fontSize: '35px', color: '#6600FF'}}>Use your account to browse artworks and discover artists in the CAIR community.</Typography>
                        </div>
                    </div><br />
                    <div style={{height: '485px', width: '1168px', borderRadius: '60px', backgroundColor: '#33FF99', display: 'flex', alignItems: 'center'}}>
                        <Typography varient='h6' style={{fontWeight: '600', fontSize: '50px'}}>Open a Wallet</Typography><br />
                        <div>
                            <Typography varient='h6' style={{fontWeight: '500', fontSize: '35px', color: '#6600FF'}}>Wallets allow artwork on CAIR to contain a historical record of all of its past activity.</Typography>
                        </div>
                    </div><br />
                    <div style={{height: '485px', width: '1168px', borderRadius: '60px', backgroundColor: '#33FF99', display: 'flex', alignItems: 'center'}}>
                        <Typography varient='h6' style={{fontWeight: '600', fontSize: '50px'}}>Collect, Curate, and Collaborate</Typography><br />
                        <div>
                            <Typography varient='h6' style={{fontWeight: '500', fontSize: '35px', color: '#6600FF'}}>Artists in the CAIR community will always have control over how their work is bought, sold, or presented.</Typography>
                        </div>
                    </div>
                </div> */}

                
            </div>
        
       </div> 
    )
}
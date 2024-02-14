import React from 'react';
import DeviceDetails from './DeviceDetails';

const Details = () => {
  return (
    <>

   <DeviceDetails 
     title="4k Monitor"
     subtitle="LMD-X3200MD"
    image="https://univlabs.in/Images/monitorn.png"
     paragraph="The LMD-X3200MD 32-inch medical grade LCD monitor can display very high quality 4K Ultra HD color video images. Its ergonomic design is optimized for environments such as hospital operating rooms, surgical centers, and clinics."
     backgroundColor='#436850'
   />
   <DeviceDetails 
    title="4K Camera"
     subtitle="Surgical 4K Ultra High Definition Camera
"
    image="https://univlabs.in/Images/cam3.png"
     paragraph="The UL-4K ClearView ultra high definition camera system utilizes advanced 3 Chip CMOS technology and premium optics to capture detailed & sharp life like images of the surgical field. It provides four times higher resolution compared to HD camera. For quicker configuration it comes with nine preset surgical specialty settings."
     backgroundColor='#80BCBD'
   />
   <DeviceDetails 
    title="CO2 Insufflator"
     subtitle="Insufflator-TS35"
    image="https://univlabs.in/Images/ins3.png"
     paragraph="Insufflator-TS35 is high-performance Co2 Insufflator, which has unparalleled safety and optimal convenience for the users. It enables rapid creation of a pneumoperitoneum without compromising safety. The Safe VENT® & UniDome technology provides a safe release of excess of gas."
     backgroundColor='#3652AD'
   />
   <DeviceDetails 
    title="Universal Irrigation Pump"
     subtitle="UMP1000"
    image="https://univlabs.in/Images/ump1.png"
     paragraph="UIP is the latest innovation in providing safe, smooth, reliable, and consistent performance in irrigation, suction and intra-cavitory distension. It comes with auto self test feature and precise bubble detection technology for patient safety. It also indicates the used & discarded volume during surgery to detect fluid absorption."
     backgroundColor='#9F70FD'
   />
   <DeviceDetails 
    title="Surgical LED Light Source"
     subtitle="ULSafeX9000"
    image="https://univlabs.in/Images/lightsource.png"
     paragraph="This new LED technology will change the way Light Source is used in the operating room. This device comes with FOC-Tip (TM) Disconnect detection which switches off the light source to prevent patient skin burns. The long life of LED bulbs ( 50,000 hours) will make it environment friendly and drastically reduce the cost."
     backgroundColor='#88AB8E'
   />
    </>
  );
};

export default Details;

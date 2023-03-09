import React from "react";
import Selfie1 from '../../assets/Selfie1.png'
import Styles from './Selfie.module.scss'

function Selfie() {
  const [isTilted, setIsTilted] = React.useState(false);

  const handleMouseMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((rect.height / 2) - y) / 10;
    const rotateY = ((rect.width / 2) - x) / 10;
    const transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    target.style.transform = transform;
  };

  const handleMouseLeave = (event) => {
    setIsTilted(false);
    const target = event.currentTarget;
    target.style.transform = "";
  };

  return (
    <div
      className={isTilted ? `${Styles.Selfie} ${Styles.Tilted}` : Styles.Selfie}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsTilted(true)}
    >
      <img src={Selfie1} alt="selfie" className={Styles.Selfie} />
    </div>
  );
}

export default Selfie;
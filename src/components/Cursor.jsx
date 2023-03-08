import React, { useState, useEffect } from 'react';
import styles from './Cursor.module.scss';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('#ffffff');
  const [cursorSize, setCursorSize] = useState(20);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setCursorSize(40);
      setCursorColor('#ff0000');
    };

    const handleMouseLeave = () => {
      setCursorSize(20);
      setCursorColor('#ffffff');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{
        left: cursorPos.x - cursorSize / 2,
        top: cursorPos.y - cursorSize / 2,
        backgroundColor: cursorColor,
        width: cursorSize,
        height: cursorSize,
      }}
    ></div>
  );
};

export default Cursor;
// import { useThemeContext } from '../../../state/ThemeProvider';
// import styles from './ThemeButton.module.scss'



// function ThemeButton() {
//     const { theme, setTheme } = useThemeContext();
  
//     const toggleTheme = () => {
//       if (theme === 'dark') {
//         setTheme('light');
//       } else {
//         setTheme('dark');
//       }
//       console.log(theme)
//     };
  
//     const buttonClass = theme === 'dark' ? styles.dark : styles.light;
  
//     return (
//       <button
//         className={`${styles.button} ${buttonClass}`}
//         onClick={toggleTheme}
//       >
//         {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//       </button>
//     );
//   }


// export default ThemeButton;
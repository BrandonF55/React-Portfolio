import { Outlet } from 'react-router-dom'
import Header from './Header/Header';
import styles from './Layout.module.scss';
import Footer from './Footer';

function Layout() {

  return(
    <div className={styles.Layout}>
      <Header/>
      <main> 
      <Outlet/>  
       </main>
      <Footer/>
    </div>
  );
}


export default Layout;
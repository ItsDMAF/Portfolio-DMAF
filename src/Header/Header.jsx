import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.navbar}>
      <h1>Diego Andino</h1>
      <ul className={styles.list}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About me</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

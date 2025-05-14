import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.name}>Diego Andino</h1>
      <ul className={styles.list}>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <h1 className={styles.language}>Language</h1>
    </header>
  );
}

export default Header;

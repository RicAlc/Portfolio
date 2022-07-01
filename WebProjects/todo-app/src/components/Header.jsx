import ThemeToggle from '../assets/icons/ThemeToggle';

function Header({ action, theme }) {
  return (
    <header className='header'>
      <h1>TODO</h1>
      <ThemeToggle onClick={() => action()} theme={theme} />
    </header>
  );
}
export default Header;

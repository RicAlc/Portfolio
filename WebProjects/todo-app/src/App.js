import Header from './components/Header.jsx';
import TodoComp from './components/TodoComp';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log(newTheme);
    setTheme(newTheme);
    console.log('theme switched');
  };
  return (
    <div className='App' data-theme={theme}>
      <Header action={switchTheme} theme={theme} />
      <TodoComp />
    </div>
  );
}

export default App;

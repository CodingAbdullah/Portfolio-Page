import classes from './App.module.css';
import MainPage from './Components/MainPage/mainpage';
import ProjectCard from './Components/ProjectCard/projectcard';

const App = () => {
  return (
    <div className={ classes.App }>
      <MainPage />
    </div>
  );
}

export default App;

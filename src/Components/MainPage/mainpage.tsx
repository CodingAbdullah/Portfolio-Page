import classes from '../MainPage/mainpage.module.css';
import ProjectCard from '../ProjectCard/projectcard';
import { constants as projectList } from '../utils/constants';

const MainPage = () => {
    // Importing constants as the project to be displayed
    return (
        <div className={ classes.mainPage }>
            <h1 className={ classes.font }>Portfolio</h1>
            <h4 className={ classes.fontParagraph }>Abdullah's Geeky Stuff</h4>
            <div className={ classes.projectListSection }>
                {
                    projectList.map(proj  => {
                        return (
                            <div className={ classes.projectCard }>
                                <ProjectCard project={ proj } />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainPage;
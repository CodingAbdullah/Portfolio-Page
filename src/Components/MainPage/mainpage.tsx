import classes from '../MainPage/mainpage.module.css';
import ProjectCard from '../ProjectCard/projectcard';
import { constants as projectList } from '../utils/constants';
import Footer from '../Footer/footer';

const MainPage = () => {
    // Importing constants as the project to be displayed
    return (
        <div className={ classes.mainPage }>
            <h1 className={ classes.font }>Portfolio</h1>
            <h4 className={ classes.fontParagraph }>Abdullah's Geeky Stuff</h4>
            <h5 className={ classes.font }>These are my favourite..</h5>
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
            <h3 className={ classes.fontParagraph }>And Many Many more...</h3>
            <Footer />
        </div>
    )
}

export default MainPage;
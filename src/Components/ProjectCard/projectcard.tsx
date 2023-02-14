import classes from './projectcard.module.css';

const ProjectCard = (props: object) => {
    return (
        <div className="project-card">
            <div className="container mt-5 mb-3">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="card p-3 mb-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <h1>This is card..</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
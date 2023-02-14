type styleSchema = {
    width: string,
    color: string,
    marginLeft: string,
    marginRight: string,
    borderStyle: string,
    borderWidth: string,
    borderColor: string,
    textDecoration: string
}

let style: styleSchema = {
    width: '50%', 
    color: 'black', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    borderStyle: 'solid', 
    borderWidth: '5px' , 
    borderColor: 'black',
    textDecoration: 'none',

}

// Setting styles for project cards and passing in the props object definition for rendering
const ProjectCard = (props: { project: { name: string, description: string, languages: string[], url: string }}) => {
    return (
        <div className="project-card">
            <div className="container mt-5 mb-3">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <a style={{ textDecoration: 'none' }} href={ props.project.url } target="_blank" rel="noreferrer">
                        <div style={ style } className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex-col align-items-center">
                                    <h5 style={{ fontFamily: 'Pacifico', textDecoration: 'none' }}>{ props.project.name }</h5>
                                    <p style={{ textDecoration: 'none', fontStyle: 'italic' }}>{ props.project.description }</p>
                                        <> 
                                            <span style={{ fontFamily: 'Pacifico' }}>Languages: </span> 
                                            {
                                                props.project.languages.map(language => {
                                                    return (
                                                        <>
                                                            <p style={{ fontStyle: 'italic' }} className="d-inline">{ " " + language + " " } </p>
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
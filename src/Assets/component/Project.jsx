import { Carousel } from './Courosal';
function Project() {
    return (
        <>
            <div className="project" id='project'>
                <div className="container">
                    <h1>My Recent Works</h1>
                    <div className="project-area">
                        <Carousel />  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
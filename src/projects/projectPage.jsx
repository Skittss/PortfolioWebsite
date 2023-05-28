import FadeIn from 'react-fade-in';
import HomeTemplate from './homeTemplate';
import TableOfContents from './tableofcontents';
import { Row, Col, Grid } from 'antd';
const { useBreakpoint } = Grid

const ProjectPage = ({title, thumb, projectLink, projectRoute, githubURL, footer, children}) => {
    const screens = useBreakpoint();

    return (
    
        <>
        <FadeIn>
            <HomeTemplate 
                title={title} 
                thumb={thumb} 
                projectRoute={projectRoute} 
                projectLink={projectLink} 
                githubURL={githubURL} />
            <Row gutter={0}>
            <Col xs={0} lg={5}>
            <div className='project-toc-wrapper'>
                <TableOfContents title={title}/> 
            </div>
            </Col>
            <Col xs={24} lg={19}>
            <div className="project-content-wrapper" style={{marginRight: screens.lg? "17.5vw" : "6vw", marginLeft: screens.lg? 0 : "6vw"}}>
                {children}
            </div>
            <div className='project-footer-wrapper' style={{
                display: "flex", justifyContent: "center", 
                marginTop: "8vh", marginBottom: "5vh",
                marginRight: screens.lg? "17.5vw" : "6vw", marginLeft: screens.lg? 0 : "6vw"
                }}>
                {footer ? {footer} : "❋ That's all! Thanks for reading. ❋"}
            </div>
            </Col>
            </Row>
        </FadeIn>
        </>
    );
}

export default ProjectPage;
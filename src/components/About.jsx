import Article from './Article';
import AboutMD from '../pages/about.md?raw'

const About = () => {
	return <Article markdown={AboutMD}/>
}

export default About;

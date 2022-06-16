import FAQ from '../../components/FAQ/FAQ';
import Schedule from '../../components/Schedule/Schedule';

import InfoSection2 from '../../components/InfoSection2/InfoSection2';
import InfoSection3 from '../../components/InfoSection3/InfoSection3';
import { FooterSubHeading } from '../../components/Sponsors/Sponsors.elements';
import Team from '../../components/Team/Team';

import { InfoSection } from '../../components';
import HomePage from '../../components/HomePage/HomePage';
import Sponsors from '../../components/Sponsors/Sponsors';

import {
  HomeObjectFive, HomeObjectFour, HomeObjectOne,
  HomeObjectTwo
} from './Data';

const Home = () => {
	return (
		<>
			<HomePage />
			<InfoSection3 {...HomeObjectTwo} />
			<Schedule />
			<FAQ />
			<InfoSection2 {...HomeObjectFour} />
			<FooterSubHeading>
				<Sponsors {...HomeObjectFive} />
			</FooterSubHeading>
			<InfoSection {...HomeObjectOne} />
			<Team />
		</>
	);
};

export default Home;

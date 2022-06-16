import 'bootstrap/dist/css/bootstrap.css';

import { Card, CardDeck, CardGroup, Container } from 'react-bootstrap';
import { Button } from '../../global_styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import { InfoRow, SmallTopLine, Title, TopLine } from './Sponsors1.elements';

import Image from 'react-bootstrap/Image';

import Bayer from '../../img/Bayer_LifeHub_UK_Logo.png';
import BCS from '../../img/bcs-logo.svg';
import HackathonsUk from '../../img/HackathonsUk.png';
import Institute_of_Technology from '../../img/Institute_of_Technology_-_Gold_Sponsor.png';
import mlh from '../../img/mlh-logo-color.png';
import ThamesValleyAiHub from '../../img/ThamesValleyAiHub (1) (2).png';
import Zebra from '../../img/Zebra_Technologies.png';

import CSA from '../../img/Comp_Sci_affiliation.png';
import hackproduction from '../../img/hackproduction.png';
import SEROCU from '../../img/SEROCU_logo-1.png';
import SSH from '../../img/SSH.png';
import StickerMule from '../../img/Sticker_Mule_Logo.png';

const Team1 = ({ lightBg, imgStart, alt, start }) => {
	return (
		<Container>
			<Container>
				<Title>Sponsors </Title>
			</Container>

			<Container>
				<SmallTopLine
					style={{
						fontFamily: 'clone-rounded-latin,sans-serif',
						color: '#FFD700',
					}}
				>
					Gold
				</SmallTopLine>
				<CardGroup>
					<CardDeck>
						<InfoRow>
							<Card
								style={{
									width: 'auto',
									height: 'auto',
									border: 'none',
								}}
							>
								<a
									href="https://southcentraliot.co.uk/"
									target="_blank"
								>
									<Image
										src={Institute_of_Technology}
										fluid
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</a>
								<Card.Body
									style={{
										width: 'auto',
										height: 'auto',
										backgroundColor: '#ffff',
									}}
								></Card.Body>
							</Card>
						</InfoRow>

						<InfoRow>
							<Card
								style={{
									width: 'auto',
									height: 'auto',
									border: 'none',
								}}
							>
								<a
									href="https://innovate.bayer.com/lifehub-uk"
									target="_blank"
								>
									<Image
										src={Bayer}
										fluid
										style={{
											width: 'auto',
											height: 'auto',
										}}
									/>
								</a>
								<Card.Body
									style={{
										width: 'auto',
										height: 'auto',
										backgroundColor: '#ffff',
									}}
								></Card.Body>
							</Card>
						</InfoRow>

						<InfoRow>
							<Card
								style={{
									width: 'auto',
									height: 'auto',
									border: 'none',
								}}
							>
								<a
									href="https://www.zebra.com/us/en.html/"
									target="_blank"
								>
									<Image
										src={Zebra}
										fluid
										style={{
											width: 'auto',
											height: 'auto',
										}}
									/>
								</a>
								<Card.Body
									style={{
										width: 'auto',
										height: 'auto',
										backgroundColor: '#ffff',
									}}
								></Card.Body>
							</Card>
						</InfoRow>

						<InfoRow>
							<Card
								style={{ textAlign: 'center', border: 'none' }}
							>
								<a href="https://www.bcs.org/" target="_blank">
									<Image
										src={BCS}
										fluid
										style={{
											width: 'auto',
											height: 'auto',
										}}
									/>
								</a>
								<Card.Body
									style={{ width: 'auto', height: 'auto' }}
								></Card.Body>
							</Card>
						</InfoRow>
					</CardDeck>
				</CardGroup>

				<SmallTopLine
					style={{
						fontFamily: 'clone-rounded-latin,sans-serif',
						color: '#C0C0C0',
					}}
				>
					Silver{' '}
				</SmallTopLine>

				<CardGroup style={{ width: 'auto', height: 'auto' }}>
					<a
						href="https://cdn.discordapp.com/attachments/704356731974844426/821814499946135592/prospectus2021-final_1.pdf"
						target="_blank"
					>
						<Button>
							Do you want your logo here? Become a sponsor!
						</Button>
					</a>
				</CardGroup>

				{/* 	<SmallTopLine
					style={{
						fontFamily: 'clone-rounded-latin,sans-serif',
						color: '#CD7F32',
					}}
				>
					Bronze{' '}
				</SmallTopLine>

				<CardGroup style={{ width: '50%', height: 'auto' }}>
					<CardDeck>
						
					</CardDeck>
				</CardGroup> */}

				<SmallTopLine
					style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}
				>
					Partners{' '}
				</SmallTopLine>

				<CardGroup style={{ width: '100%', height: 'auto' }}>
					<CardDeck>
						<Card style={{ textAlign: 'center', border: 'none' }}>
							<a
								href="https://www.stickermule.com/unlock?ref_id=0539570701&utm_source=sponsorship&utm_campaign=mlh-sponsorship-2019&utm_medium=referral"
								target="_blank"
							>
								<Image
									src={StickerMule}
									fluid
									style={{ width: 'auto', height: 'auto' }}
								/>
							</a>
							<Card.Body
								style={{ width: 'auto', height: 'auto' }}
							></Card.Body>
						</Card>

						<Card style={{ textAlign: 'center', border: 'none' }}>
							<a
								href="https://mlh.io/seasons/2021/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white"
								target="_blank"
							>
								<Image
									src={mlh}
									fluid
									style={{ width: 'auto', height: 'auto' }}
								/>
							</a>
							<Card.Body
								style={{ width: 'auto', height: 'auto' }}
							></Card.Body>
						</Card>

						<Card style={{ textAlign: 'center', border: 'none' }}>
							<a
								href="https://hackathons.org.uk/"
								target="_blank"
							>
								<Image
									src={HackathonsUk}
									fluid
									style={{ width: 'auto', height: 'auto' }}
								/>
							</a>
							<Card.Body
								style={{ width: 'auto', height: 'auto' }}
							></Card.Body>
						</Card>

						<Card style={{ textAlign: 'center', border: 'none' }}>
							<a href="https://swagshiphack.dev/" target="_blank">
								<Image
									src={SSH}
									fluid
									style={{ width: 'auto', height: 'auto' }}
								/>
							</a>
							<Card.Body
								style={{ width: 'auto', height: 'auto' }}
							></Card.Body>
						</Card>
					</CardDeck>

					<CardDeck>
						<Card style={{ textAlign: 'center', border: 'none' }}>
							<a href="https://serocu.police.uk/" target="_blank">
								<Image
									src={SEROCU}
									fluid
									style={{ width: 'auto', height: 'auto' }}
								/>
							</a>
							<Card.Body
								style={{ width: 'auto', height: 'auto' }}
							></Card.Body>
						</Card>

						<Card style={{ textAlign: 'center', border: 'none' }}>
							<a
								href="https://www.reading.ac.uk/computer-science/"
								target="_blank"
							>
								<Image
									src={CSA}
									fluid
									style={{ width: 'auto', height: 'auto' }}
								/>
							</a>
							<Card.Body
								style={{ width: 'auto', height: 'auto' }}
							></Card.Body>
						</Card>

						<Card style={{ textAlign: 'center', border: 'none' }}>
							<a
								href="https://www.tvaihub.co.uk/"
								target="_blank"
							>
								<Image
									src={ThamesValleyAiHub}
									fluid
									style={{ width: 'auto', height: 'auto' }}
								/>
							</a>
							<Card.Body
								style={{ width: 'auto', height: 'auto' }}
							></Card.Body>
						</Card>

						<Card style={{ textAlign: 'center', border: 'none' }}>
							<a href="https://hack.productions/" target="_blank">
								<Image
									src={hackproduction}
									fluid
									style={{ width: 'auto', height: 'auto' }}
								/>
							</a>
							<Card.Body
								style={{ width: 'auto', height: 'auto' }}
							></Card.Body>
						</Card>
					</CardDeck>
				</CardGroup>
			</Container>
			<TopLine></TopLine>
		</Container>
	);
};

export default Team1;

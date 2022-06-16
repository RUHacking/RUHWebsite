import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck, CardGroup, Container } from 'react-bootstrap';
import { Button } from '../../global_styles';
import { InfoRow, SmallTopLine, Title, TopLine } from './Sponsors.elements';

import Image from 'react-bootstrap/Image';

import Bayer from '../../img/Bayer_LifeHub_UK_Logo.png';
import BCS from '../../img/bcs-logo.svg';
import CodeWizards from '../../img/CodeWizards_Logo.png';
import HackathonsUk from '../../img/HackathonsUk.png';
import mlh from '../../img/mlh-logo-color.png';
import Zebra from '../../img/Zebra_Technologies.png';

import CSA from '../../img/Comp_Sci_affiliation.png';
import DigitalOcean from '../../img/Digital_Ocean.png';
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
									href="https://codewizards.co.uk/"
									target="_blank"
								>
									<Image
										src={CodeWizards}
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
								href="https://www.digitalocean.com/"
								target="_blank"
							>
								<Image
									src={DigitalOcean}
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
								href="https://mlh.io/seasons/2022/events"
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
					</CardDeck>
				</CardGroup>
			</Container>
			<TopLine></TopLine>
		</Container>
	);
};

export default Team1;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';
import COMMITTEE from '../../constants/committee';
import { Container } from '../../global_styles';
import { SmallGap, SmallTopLine, TopLine } from './Team.elements';

const SocialIcon = styled.div`
	display: none;
	@media screen {
		display: block;
		cursor: pointer;
	}
`;
const SocialIconLink = styled.a`
	font-size: 30px;
`;

const Team = () => {
	return (
		<Container>
			<Container id="team">
				<SmallTopLine
					style={{ fontFamily: 'clone-rounded-latin,sans-serif' }}
				>
					Meet The Team
				</SmallTopLine>
			</Container>
			<SmallGap></SmallGap>
			<Container style={{ width: 'auto', height: 'auto' }}>
				<Row xs={1} md={3}>
					{COMMITTEE.map((member, idx) => (
						<Col key={idx} style={{ padding: '15px' }}>
							<Card
								style={{
									textAlign: 'center',
									border: 'none',
									background: '#454545',
								}}
							>
								<Image
									src={member.img}
									fluid
									style={{
										width: 'auto',
										height: 'auto',
									}}
								/>
								<Card.Body
									style={{
										width: 'auto',
										height: 'auto',
									}}
								>
									<Card.Title
										style={{
											fontFamily:
												'clone-rounded-latin,sans-serif',
											color: 'white',
										}}
									>
										{member.name}
									</Card.Title>
									<Card.Text
										style={{
											fontFamily:
												'clone-rounded-latin,sans-serif',
											color: 'white',
										}}
									>
										{member.role}
									</Card.Text>

									<SocialIcon>
										<SocialIconLink
											href={`mailto: ${member.email}`}
											target="_blank"
											aria-label="Email"
											style={{ color: '#EA5837' }}
										>
											<MdEmail size={37} />
										</SocialIconLink>
										{member.linkedin && (
											<SocialIconLink
												href={member.linkedin}
												target="_blank"
												aria-label="Linkedin"
												style={{ color: '#EA5837' }}
											>
												<FaLinkedin />
											</SocialIconLink>
										)}
									</SocialIcon>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<TopLine></TopLine>
		</Container>
	);
};

export default Team;

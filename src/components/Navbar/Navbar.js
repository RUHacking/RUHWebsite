import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../global_styles';
import logo from '../../img/logo/newLogo.png';
import {
	ICON,
	Nav,
	NavbarContain,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavLogo,
	NavMenu
} from './navbar.elements';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick(!click);

	const showButton = () => {
		if (window.innetWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<IconContext.Provider value={{ color: '#ea5837 ' }}>
				<Nav>
					<NavbarContain>
						<NavLogo>
							<img
								src={logo}
								alt="RUHacking Logo"
								style={{
									width: 'auto',
									height: 70,
									marginRight: 7,
								}}
							/>
							<NavLinks
								style={{
									color: '#ffff',
									fontfamily:
										' clone-rounded-latin, sans-serif',
								}}
							>
								R. U. Hacking?
							</NavLinks>
						</NavLogo>

						<ICON onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</ICON>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks
									onClick={handleClick}
									style={{
										color: '#ffff',
										fontfamily:
											' clone-rounded-latin, sans-serif',
									}}
									to="Homepage"
								>
									HOME
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									onClick={handleClick}
									style={{
										color: '#ffff',
										fontfamily:
											' clone-rounded-latin, sans-serif',
									}}
									to="faq"
								>
									FAQ
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									onClick={handleClick}
									style={{
										color: '#ffff',
										fontfamily:
											' clone-rounded-latin, sans-serif',
									}}
									to="inf2"
								>
									SPONSORS
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									onClick={handleClick}
									style={{
										color: '#ffff',
										fontfamily:
											' clone-rounded-latin, sans-serif',
									}}
									to="inf1"
								>
									ABOUT US
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									onClick={handleClick}
									style={{
										color: '#ffff',
										fontfamily:
											' clone-rounded-latin, sans-serif',
									}}
									to="team"
								>
									TEAM
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavItemBtn>
									<a
										href="https://www.eventbrite.co.uk/e/r-u-hacking-2022-24-hour-student-hackathon-tickets-236290038867"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button
											style={{
												fontFamily:
													' clone-rounded-latin, sans-serif',
											}}
										>
											{' '}
											SIGN UP
										</Button>
									</a>
								</NavItemBtn>
							</NavItem>
						</NavMenu>
					</NavbarContain>

					{/* TODO: Add new MLH badge here */}
					<a
						href="https://mlh.io/seasons/2022/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
						id="mlh-trust-badge"
						style={{
							display: 'block',
							width: '90px',
							height: '100%',
							marginRight: '15px',
							zIndex: '10000',
						}}
						target="_blank"
						rel="noreferrer noopener"
					>
						<img
							src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
							alt="Major League Hacking 2022 Hackathon Season"
						/>
					</a>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;

import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import { Container } from '../../global_styles';

export const Nav = styled.nav`
	background: #454545;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContain = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #ffff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
`;

export const ICON = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-400%, 40%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 120vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: #454545;
	}
`;

export const NavItem = styled.li`
	cursor: pointer;

	border-bottom: 2px solid transparent;
	&:hover {
		border-bottom: 2px solid none;
	}

	@media screen and (max-witdh: 960px) {
		width: 100%;

		&:hover {
			border: #000000;
		}
	}
`;
export const NavLinks = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	@media screen and (max-witdh: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: none;
			transition: all 0.3s ease;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-witdh: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 180px;
	}
`;
export const NavBtnLink = styled(LinkS)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;

export const SmallMarging = styled.p`
	margin-bottom: 50px;
	background: #454545;
`;

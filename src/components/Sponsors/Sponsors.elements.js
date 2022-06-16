import styled from 'styled-components';

export const TopLine = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#00000')};
	font-size: 50px;
	line-height: 46px;
	letter-spacing: 1.4px;
	margin-bottom: 90px;
	margin-top: 90px;
	text-align: center;
`;

export const FooterSubHeading = styled.p`
	font-family: 'clone-rounded-latin', sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const WhiteSpace = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#00000')};
	font-size: 50px;
	line-height: 46px;
	letter-spacing: 1.4px;
	padding: -90px;
	text-align: center;
`;

export const SmallTopLine = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#00000')};
	font-size: 40px;
	line-height: 46px;
	letter-spacing: 1.4px;
	padding-top: 90px;
	padding-bottom: 20px;
`;

export const Title = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#00000')};
	font-size: 50px;
	line-height: 46px;
	letter-spacing: 1.4px;
	padding-top: 90px;
	text-align: center;
`;

export const InfoRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

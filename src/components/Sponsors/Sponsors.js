import Image from 'react-bootstrap/Image';
import S2Oi from '../../img/2Oi.png';
import Bayer from '../../img/Bayer_LifeHub_UK_Logo.jpg';
import HackathonsUk from '../../img/HackathonsUk.svg';
import ThamesValleyAiHub from '../../img/ThamesValleyAiHub.png';
import Zebra from '../../img/Zebra_Technologies.png';
import { GapForSponsors, ImgWrapper, InfoRow, InfoSec, SponsorContainer, SponsorLinksContainer, SponsorLinksItems, SponsorLinksWrapper, SponsorLinkTitle, TopLine } from './Sponsors.elements';

const Sponsors = ({ lightBg, imgStart, alt, start }) => {
	return (
		<>
			<link
				rel="stylesheet"
				href="https://use.typekit.net/vtd1gyc.css"
			></link>

			<InfoSec lightBg={lightBg}>
				<SponsorContainer>
					<SponsorLinksContainer>
						<SponsorLinksWrapper>
							<SponsorLinksItems>
								<TopLine />
								<SponsorLinkTitle
									style={{
										color: '#000000',
									}}
								>
									SPONSORS
									<TopLine />
								</SponsorLinkTitle>
								<SponsorLinkTitle
									style={{
										color: '#FFD700',
									}}
								>
									Gold
									<InfoRow imgStart={imgStart}>
										<a
											href="https://innovate.bayer.com/lifehub-uk"
											target="_blank"
										>
											<ImgWrapper start={start}>
												<Image
													src={Bayer}
													fluid
													alt={alt}
												/>
											</ImgWrapper>
										</a>

										<GapForSponsors />
										<ImgWrapper start={start}>
											<a
												href="https://www.zebra.com/us/en.html/"
												target="_blank"
											>
												<Image
													src={Zebra}
													fluid
													alt={alt}
												/>
											</a>
										</ImgWrapper>
									</InfoRow>
								</SponsorLinkTitle>

								<TopLine />
								<SponsorLinkTitle
									style={{
										color: '#C0C0C0',
									}}
								>
									Silver
									<ImgWrapper start={start}></ImgWrapper>
									<InfoRow imgStart={imgStart}></InfoRow>
								</SponsorLinkTitle>

								<TopLine />

								<SponsorLinkTitle
									style={{
										color: '#CD7F32',
									}}
								>
									Bronze
									<InfoRow imgStart={imgStart}>
										<ImgWrapper start={start}>
											<a
												href="https://www.20i.com/"
												target="_blank"
											>
												<Image
													src={S2Oi}
													fluid
													alt={alt}
												/>
											</a>
										</ImgWrapper>
									</InfoRow>
								</SponsorLinkTitle>

								<TopLine />

								<SponsorLinkTitle
									style={{
										color: '#000000',
									}}
								>
									Partners
									<InfoRow imgStart={imgStart}>
										<a
											href="https://hackathons.org.uk/"
											target="_blank"
										>
											<ImgWrapper start={start}>
												<Image
													src={HackathonsUk}
													fluid
													alt={alt}
												/>
											</ImgWrapper>
										</a>

										<GapForSponsors></GapForSponsors>

										<ImgWrapper start={start}>
											<a
												href="https://www.tvaihub.co.uk/"
												target="_blank"
											>
												<Image
													src={ThamesValleyAiHub}
													fluid
													alt={alt}
												/>
											</a>
										</ImgWrapper>

										<GapForSponsors></GapForSponsors>
									</InfoRow>
								</SponsorLinkTitle>
							</SponsorLinksItems>
						</SponsorLinksWrapper>
					</SponsorLinksContainer>
				</SponsorContainer>
			</InfoSec>
		</>
	);
};

export default Sponsors;

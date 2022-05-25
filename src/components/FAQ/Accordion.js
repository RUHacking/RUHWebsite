import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle
} from 'react-icons/io';
import styled from 'styled-components';
import { Container } from '../../global_styles';
import { Data } from './Data';

export const SmallGap = styled.div`
  padding-top: 150px;
`;

const FooterSubHeading = styled.p`
  font-size: 40px;
  color: #000000;
  align-items: center;
  text-align: center;
  display: flex;
  font-family: 'clone-rounded-latin', sans-serif;
`;

const Dropdown = styled.div`
  background: #ffff;
  color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-family: 'clone-rounded-latin', sans-serif;

  border-radius: 25px;
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 30vh;
  background: #ffff;
`;

const Wrap = styled.div`
  background: #ea5837;
  color: #000000;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 100%;
  border-bottom: 20px solid #ffff;
  border-top: 20px solid #ffff;
  border-radius: 25px;
  font-family: 'clone-rounded-latin', sans-serif;

  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 1.4rem;
  }

  span {
    margin-right: 1.6rem;
  }
`;

export const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <Container id="faq">
      <IconContext.Provider value={{ color: '#000000', size: '50px' }}>
        <AccordionSection>
          <FooterSubHeading>Frequently Asked Questions</FooterSubHeading>
        </AccordionSection>

        {Data.map((item, index) => (
          <React.Fragment key={index}>
            <Wrap onClick={() => toggle(index)} keys={index}>
              <h1> {item.question}</h1>
              <span>
                {clicked === index ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </span>
            </Wrap>
            {clicked === index ? (
              <Dropdown>
                <p>{item.answer}</p>
              </Dropdown>
            ) : null}
          </React.Fragment>
        ))}
      </IconContext.Provider>
      <SmallGap></SmallGap>
    </Container>
  );
};

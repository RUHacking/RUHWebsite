import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';
import { Container } from '../../global_styles';

const FooterSubHeading = styled.p`
  font-size: 40px;
  color: #000000;
  align-items: center;
  text-align: center;
  display: flex;
`;

const Dropdown = styled.div`
  background: #ffff;
  color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  border-radius: 25px;
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 175vh;
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

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <Container>
      <IconContext.Provider value={{ color: '#000000', size: '50px' }}>
        <AccordionSection>
          <FooterSubHeading>Frequently Asked Questions </FooterSubHeading>

          {Data.map((item, index) => {
            return (
              <>
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
              </>
            );
          })}
        </AccordionSection>
      </IconContext.Provider>
    </Container>
  );
};

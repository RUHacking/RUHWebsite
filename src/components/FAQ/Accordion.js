import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';

const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Sans Unicode2',
    'Lucida Sans Unicode2', Arial, Helvetica, sans-serif, sans-serif;
  margin-bottom: 24px;
  font-size: 50px;
  color: #000000;
  align-items: center;
`;

const Dropdown = styled.div`
  background: #16b8d8;
  color: #454545;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #454545;
  border-bottom: 1px solid #454545;
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 120vh;
  background: #ea5837;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #ffff;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
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
    <IconContext.Provider value={{ color: '#000000', size: '50px' }}>
      <AccordionSection>
        <Container>
          <FooterSubHeading>Frequently Asked Questions</FooterSubHeading>

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
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

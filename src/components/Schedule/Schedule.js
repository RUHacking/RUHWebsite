import React from 'react';
import styled from 'styled-components';
import { Container } from '../../global_styles';
import './Schedule.css';

export const SmallGap = styled.div`

  padding-top: 150px;
`;

const FooterSubHeading = styled.p`
  font-size: 40px;
  color: #000000;
  align-items: center;
  text-align: center;
  display: flex;
  font-family: 'clone-rounded-latin',sans-serif;
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



const Schedule = () => {
  return (
    <Container id="faq">
      <AccordionSection>
        <FooterSubHeading>Schedule</FooterSubHeading>
      </AccordionSection>




      <div class="row"  >
        <div class="column" >
          <table >
            <th colspan="2" class="table-active">Saturday 25th June — Day 1</th>
            <tr></tr>
            <tr>
              <td>--:--</td>
              <td>TBD</td>
            </tr>
          </table>
        </div>

        <div class="column" >

          <table>
            <th colspan="2" class="table-active">Sunday 26th June — Day 2</th>
            <tr></tr>
            <tr>
              <td>--:--</td>
              <td>TBD</td>
            </tr>
          </table>

        </div>
      </div>


      <SmallGap></SmallGap>

    </Container>
  );
};

export default Schedule;

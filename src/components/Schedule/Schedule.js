import React from 'react';
import styled from 'styled-components';
import './Schedule.css';
import { Container } from '../../global_styles';

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
    <th colspan="2" class="table-active">Saturday 26th June — Day 1</th>
    <tr></tr>
      <tr>
        <td>09:00am</td>
        <td>Doors open, sponsor setup</td>
      </tr>
      <tr>
        <td>09:30am</td>
        <td>Check-in begins, networking</td>
      </tr>
      <tr>
        <td>10:00am</td>
        <td>Opening Ceremony</td>
      </tr>
      <tr>
        <td>11:15am</td>
        <td>Zebra Technologies Workshop</td>
      </tr>
      <tr>
        <td>12:00pm</td>
        <td>SEROCU Talk</td>
      </tr>
      <tr>
        <td>12:30pm</td>
        <td>Bayer LifeHub UK Workshop</td>
      </tr>
      <tr>
        <td>13:15pm</td>
        <td>BCS Q+A</td>
      </tr>
      <tr>
        <td>13:45pm</td>
        <td>Savva’s ASCII Challenge</td>
      </tr>
      <tr>
        <td>14:00pm</td>
        <td>Lunch Break</td>
      </tr>
      <tr>
        <td>14:30pm</td>
        <td>Cirrus Response Workshop</td>
      </tr>
      <tr>
        <td>15:30pm</td>
        <td>Postman API Workshop</td>
      </tr>
      <tr>
        <td>16:30pm</td>
        <td>Citrix Workshop</td>
      </tr>
      <tr>
        <td>17:00pm</td>
        <td>BlackRock Challenge</td>
      </tr>
      <tr>
        <td>18:00pm</td>
        <td>Computer Science Department Talk</td>
      </tr>
      <tr>
        <td>19:00pm</td>
        <td>Pictionary - Hackathons UK</td>
      </tr>
      <tr>
        <td>20:00pm</td>
        <td>MLH Werewolf</td>
      </tr>

      <tr>
        <td>23:00pm</td>
        <td>Quiz</td>
      </tr>
      <tr>
        <td>OVERNIGHT</td>
        <td>Chess Tournament</td>
      </tr>
      </table>
  </div>

  <div class="column" >

    <table>
    <th colspan="2" class="table-active">Sunday 27th June — Day 2</th>
      <tr></tr>
      <tr>
      <td>9:00am</td>
        <td>Soft Deadline</td>
      </tr>
      <tr>
        <td>10:00am</td>
        <td>Hard deadline -> Legitimacy checks</td>
      </tr>
      <tr>
        <td>11:00am</td>
        <td>Judging</td>
      </tr>
      <tr>
        <td>1:00pm</td>
        <td>Closing Ceremony & Prize Giving</td>
      </tr>
      <tr>
        <td>2:00pm</td>
        <td>Presentations</td>
      </tr>
    </table>
    
</div>
</div>


      <SmallGap></SmallGap>

    </Container>
  );
  };

export default Schedule;

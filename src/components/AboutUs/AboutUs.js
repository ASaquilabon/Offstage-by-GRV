import React from 'react';
import RoomA from "../../assets/images/Offstage Assets/RoomA.JPG"
import styled from 'styled-components';

const StyledWrapper = styled.div `
    display: inline-flex;
    justify-content: space-between;
`
const StyledImg = styled.img `
    width:80%;
    padding-left: 60px;
`
const StyledDiv = styled.div `
    width: 50%;
`
const StyledParagraph = styled.p `
    width: 80%;
    padding: 40px;
    color: #fff;
`
const Header = styled.h2`
    color: #fff;
    text-align: center;
`

function AboutUs() {
    return (
<>
<Header>About Us</Header>
        <StyledWrapper>
            <StyledDiv>
                <StyledImg src={RoomA}/>
            </StyledDiv>
            <StyledDiv>
                
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis efficitur nisl, nec iaculis urna commodo quis. Duis sit amet posuere urna. Nullam venenatis massa eu est ornare, a molestie dui ornare. Quisque condimentum pulvinar dictum. Aenean in nisi in magna rutrum faucibus nec eget nisi. Praesent tempor, ex quis mattis ultricies, felis lacus pulvinar metus, id volutpat ex sapien eleifend quam. Pellentesque eget justo lectus. Sed pellentesque magna porta, facilisis odio nec, venenatis massa.
                </StyledParagraph>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis efficitur nisl, nec iaculis urna commodo quis. Duis sit amet posuere urna. Nullam venenatis massa eu est ornare, a molestie dui ornare. Quisque condimentum pulvinar dictum. Aenean in nisi in magna rutrum faucibus nec eget nisi. Praesent tempor, ex quis mattis ultricies, felis lacus pulvinar metus, id volutpat ex sapien eleifend quam. Pellentesque eget justo lectus. Sed pellentesque magna porta, facilisis odio nec, venenatis massa.
                </StyledParagraph>
            </StyledDiv>
        </StyledWrapper>
        </>
    );
}

export default AboutUs;

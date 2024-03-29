import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP } from './HeroElements';
import Video from '../../videos/video.mp4';
import { ArrowForward, ArrowRight } from '@material-ui/icons';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
                Sign up for a new accoun today and receive
                 $250 in credit towars your next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" 
                onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    );
};

export default HeroSection;

import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2018 - Now'} 
                        title={'Founder,CEO'}
                        subTitle={'Apeirogon'}
                        text={'Owned and actively working for it to make new type of startups and business by targeting all kind of people.We are scoped and focused for making some sort of social network where people can share there experience and we are even working for making software for business purpose and even for personal purpose. '}
                    />
                    <ResumeItem 
                        year={'2020 March - 2020 December'} 
                        title={'UI/UX Designer'}
                        subTitle={'Apeirogon'}
                        text={'Worked for Apeirogon in a different team to make the UI/UX  of all of stuffes made a stunning UI for some of our plans. '} 
                    />
                    <ResumeItem 
                        year={'2018'} 
                        title={'Full Stack developer/Content Writer'}
                        subTitle={'AIO'}
                        text={'A sort of open source project like a bloging app where there is all kind of resources related to programming,maths ,science physics.Made some content and even fixed major bugs related to internal securities.'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - 2019'} 
                        title={'Full Stack Develpement'}
                        subTitle={'Udemy/Coursera/Youtube'}
                        text={'As I mentioned before I am a self-taught under 18 developer who learned things through online resources like udemy resources and all. In the full stack developement I was mainly intrested in cross-apps with Python Javascript and React Native. I mainly learned Python , Django , Flask,Unit Test framework(Learning currently), Javascript , React,Angular(Learning currently), Javascript Real time like WebRTC,Node,Express.Meanwhile I too, learned Git,Github , Docker, Heroku Deployment , Netlify Deployment and many more things like MySQL, SQL, dbsqlite, postgressDB.'} 
                    />
                    <ResumeItem 
                        year={'2020-2020 December'} 
                        title={'Data Science'}
                        subTitle={'Youtube/Udemy/Other resources/EDX'}
                        text={'Learned in a self- taught method mainly foucused in two things there they are as Maths and Programming , In maths mainly focused into calculus, linear algebra, and statistics and in the case of prgramming I used Python and Javascript I learned Numpy,OpenCV,Requests,TensorFlow,Pytorch,Keras,SciPy and matplotlib, math(built in libary of python),Chart.js,D3.js. '}
                    />
                    <ResumeItem 
                        year={'2018 - Now'} 
                        title={'High School'}
                        subTitle={'Apex Life School'}
                        text={'Did the high school and one year of primary schooling here.'} 
                    />
                    <ResumeItem
                        year={'2014 - 2018'}
                        title={'Primary School'}
                        subTitle={'Paragon Public School.'}
                        text={'Did 4 years of primary schooling here.'}
                    />
                    <ResumeItem
                        year={'2010 - 2014'}
                        title={'Pre-Primary School'}
                        subTitle={'Kids Learning School'}
                        text={'Did primary schooling here.'}
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume

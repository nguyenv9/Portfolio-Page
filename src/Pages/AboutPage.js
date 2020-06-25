import React from 'react';
import Hero from '../Components/Hero'
import Content from '../Components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Vincent Nguyen. I am full stack developer with experience in Java, ReactJS, NodeJS, Python, C#, C, MySQL, and DynamoDB.</p>  
                <p>First of all, I would like to thank you for taking a look at my portfolio and getting to know me a little more!</p>
                <p>I am constantly learning and trying to improve the way I code. Currently, I am learning AWS Lambda and reading up some Django while I work on my current project.</p>
                <p>My latest project, the FishStore website is going to be an ecommerce website allowing users to learn about different fish and add it to their cart. It would allow for account creations and ordering the items within the cart. It is being built with Python and Django.</p>  
                <p>I have many projects planned for me to work on in the near future and I can't wait to showcase those soon!</p>
            </Content>
        </div>
    );

} 

export default AboutPage;
import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from './img/bean-selection.jpg';
import pic2 from './img/pouring-coffee.jpg';
import pic3 from './img/cup-and-beans.jpg';



const Styles = styled.div`
h1, p{
    text-align:center;
}

.abc{
   height: 600px;
   width: 800px;
   display: flex;
   margin-left: auto;
   margin-right: auto;
   margin-top: 20px;
   margin-bottom: 20px;
   object-fit:cover;
   
}
Carousel{
    z-index:-5;
}
`

export const about = () =>(
    
        <div>
            <Styles>
            <h1>About us!</h1>
            <Carousel>
                <Carousel.Item interval = {1000}>
                    <Styles>
                    <img
                    className = "abc"
                    src = {pic1}
                    alt="pic1"
                    />
                    </Styles>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                <Styles>
                    <img
                    className = "abc"
                    src = {pic2}
                    alt="pic2"
                    />
                    </Styles>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                <Styles>
                    <img
                    className = "abc"
                    src = {pic3}
                    alt="pic3"
                    />
                    </Styles>
                </Carousel.Item>
                
            </Carousel>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nulla lorem, 
            aliquam sed justo ac, ultrices commodo nibh. Phasellus dignissim tincidunt vestibulum. 
            Duis ultrices turpis luctus nisl venenatis, vel pretium neque consequat. Aenean malesuada 
            congue quam, at dapibus felis finibus eget. Etiam vel dolor id quam consectetur rutrum ac 
            quis libero. Quisque volutpat fringilla ligula ac ullamcorper. Sed non consectetur massa. 
            Sed maximus et lorem eu egestas. Donec ac sem at nisl malesuada rutrum non elementum ex. 
            Nunc posuere, mauris at mattis venenatis, ipsum libero tempus mi, non imperdiet turpis 
            dolor vel augue. Suspendisse quis mi porta, aliquet enim ut, hendrerit sem. In vitae tellus 
            efficitur, aliquam velit vitae, rhoncus velit. Phasellus sapien mi, elementum sit amet neque 
            vel, blandit suscipit augue. Quisque feugiat congue tristique. Cras neque justo, maximus viverra 
            feugiat at, facilisis ut nisl. Suspendisse in tempor sapien.
            </p>

            </Styles> 
        </div>
    
)
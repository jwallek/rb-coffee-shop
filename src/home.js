import React from 'react';
import homepic from './img/3-cups.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.pic-1{
    width:400px;
    height: 300px;
    display:flex;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    margin-bottom:20px;
}
h1{
    text-align:center;
}


`

export const home = () =>(
    
        <div>
        <Styles>
            <h1>RB COFFEE</h1>
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
            
            <img class="pic-1" src={homepic} alt="3 cups"/>
            
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
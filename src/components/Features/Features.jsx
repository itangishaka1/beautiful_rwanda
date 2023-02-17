import "./Features.scss";
import "../Grid-test/Grid_test.scss";

import Feature from './Feature/Feature'

const Features = () => {
  return (
    <section className="features" id='features'>
      <div className="row">
       <Feature  
            icon='icon-basic-world' 
            title='Explore the World'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iste sed neque corrupti atque debitis.'
       />
       <Feature  
            icon='icon-basic-compass' 
            title='Meet nature'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iste sed neque corrupti atque debitis.'
       />
       <Feature  
            icon='icon-basic-map' 
            title='Find your way'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iste sed neque corrupti atque debitis.'
       />
       <Feature  
            icon='icon-basic-heart' 
            title='live a healthier life'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iste sed neque corrupti atque debitis.'
       />
      </div>
    </section>
  );
};

export default Features;

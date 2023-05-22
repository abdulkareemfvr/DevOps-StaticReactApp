import 'bulma/css/bulma.css'

import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App(){
    return(
        <div>
            <section class="hero is-small is-primary">
                <div class="hero-body">
                    <p class="title"> Personal Digital assistance</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                        <ProfileCard 
                        title=" Alexa " 
                        handle="@alexa123 " 
                        image = {AlexaImage} 
                        description = "Alexa is Amazon’s cloud-based voice service available on hundreds of millions of devices from Amazon."
                        />
                        </div>
                        <div className='column is-3'>
                        <ProfileCard 
                        title=" Cortana " 
                        handle="@cortana123" 
                        image = {CortanaImage}
                        description="Cortana is a virtual assistant developed by Microsoft that uses the Bing search engine to perform tasks."
                        />
                        </div>
                        <div className='column is-3'>
                        <ProfileCard 
                        title=" Siri " 
                        handle="@siri123" 
                        image = {SiriImage}
                        description="Siri is a spin-off from a project developed by the SRI International Artificial Intelligence Center."
                        />
                        </div>                       
                    </div>
                </section>
            </div>
        </div>
     
    );
}

export default App;
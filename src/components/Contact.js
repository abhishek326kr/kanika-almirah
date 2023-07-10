import ContactForm from './feedbackform';
import feature2 from './Images/banner32.jpg'
import './contact.css'
import Banner2 from './banner2';
import feature3 from './Images/feature-3.jpg';

const contact = () => {
  return (
    <>
    <div>
        <Banner2 imageUrl={feature2} />
      </div>
    <div className='formdiv'>
      {/* Other components */}
      <ContactForm />
      <div className="feature3">
          <img src={feature3} alt="Slide 1" />
        </div>
    </div>
    
    </>
  );
};

export default contact;
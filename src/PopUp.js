import React, { useState } from 'react';

const Popup = () => {
  // State to manage the pop-up's visibility
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Function to open the pop-up
  const openPopup = () => {
    setPopupOpen(true);
  };

  // Function to close the pop-up
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      {/* Button to open the pop-up */}
      <img onClick={openPopup} className='Bucket' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADfUlEQVR4nO2ZW0gVQRjH/17I6OJhvm+OaSlRmt2Jsh6KIoiiIro8SQRBRnajIgLJeih8kIzyJYIeIkq0MqJCKnrqoSR6iJ4KuhC4s5omFBVBD0WemMN3DkuIpu3uOQv9YDg7uzv/b/57vp2d2QX+k31sANADIDFE+QzgMYAdAHKQpbwfxsSfpS1bzXR7OukOctx2ejKAWgDf5LztyELWixlrYt0w5+4WI88RcQoAfBQzsxFx2sTIPkScWjHSjohTKUb6s3X0Gs2QPQsR55oY2YuIs0eMXEfEmSVG+v7fJ1lE+wjnaEGUTj+M7MsCI+/8MDLHc5+EzRWJfdIPMfsw/CCCMxEeE2QWPgBgul+iN8WInRWHxU6J+dBP0QMiehXh0RnEmmieiPYiHGZISn0FMM5P4RyZPCYkSNA0SqyLQYjfEvFdqR1GqWqHudkQNRnmTQ7RQUN0OllXarmr1FpDdN4wN/TH4xOM1isM0Vl7PAHkWQ23sJAcolOeOLmyirWxlgVh5JCIt6aNMDf0aF2ZrhO1JoB8T/1usrNKzU8aZW6U/ce7tF4o200OUYcnzlqJ8yaoadECCdDtNWKIzhjmo91EpdaIITpm66+YJzpEBxzmFod5VaqN/ScM86W3FRUFhmiNq/VWe84gM4l6BESOZx1fnjbCvNjEYsr+E9ZIb3FxXOp5dtumlEN0oot5m21j08jRetFLYIxhfmK03m2Yn1odADEA3wH8AlCGALkjRnb+ZWpddbVeaZjrXaIa++sw1xmtq1yiKaaoaHqyMN+25gHsF/0HCJjDEiiZCiYeL39fUpIeHl2l5iU8ed03adJ4V6l1XUotTR5nXmKIVtvixGLT0oaVmiubz0S/OmgjC4d4wfevzBXtTwDGImByJZANmL6iPtEsuucREh0S0L7o9ot8mV1b3SqExBEJeNlHzc2i+QIhUiVBuwIYDY8gRPLkO4rfq8CfAIoRMnd9NjEA4BwyQJ104AIizhIx8hoRJ18WPQn5yhVpOsRIDSLOLjHyCBGn0DNdaQIwVYbmSLIFwA8fh+FHmTSz0UcjPwCUZMpIi3TCPiSnSLk3zHeV60O0sR9hM0Jq1mo7k6LMs7YYjE9DtPmCDJF6npSOoFNfR9EmcFLvu+5Jx2y5L/tu+tgmcCo9b1e8xaZPhY9tEAY2129Iythir+pwHRpNG/wGcTfTffNEbTMAAAAASUVORK5CYII="></img>

      {/* Pop-up content */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <p>Foods you selected to order are:</p>
            <p>Here the selected order should be mapped</p>
          </div>
        </div>
      )}    
    </div>
  );
};

export default Popup;
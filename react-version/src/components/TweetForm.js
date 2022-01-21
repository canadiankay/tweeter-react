import React from 'react';

function TweetForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("you clicked submit");
  } 
  const textPlaceholder = "What are you humming about?"
  return (
    <section className="newtweet">
    {/* adding the onClick prevent default here completely disables the form being submitted */}
    <form onClick={handleSubmit} method="post" action="/tweets" className="newtweet__form">
      <textarea className="form__textarea" name="text" placeholder={textPlaceholder}></textarea>
      <input type="submit" value="Tweet" className="form__input" />
      <span className="form__counter">140</span>
    </form>
  </section>

  );
}

export default TweetForm;
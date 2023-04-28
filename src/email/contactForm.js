import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef(0);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_ro8gppe",
          "template_49mw2wl",
          form.current,
          "eCea-pB1SWg6TGqbv"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("SUCCESS!");
          },
          (error) => {
            console.log(error.text);
            alert("FAILED...", error);
          }
        );
    };
  
    return (
        <div class="uk-container uk-grid">
            <div class="uk-width-1-4" style={{maxHeight: "30%"}}>
                <img src="./IMG_6518.jpeg" style={{maxWidth: "100%"}}></img>
            </div>
            <div class="uk-padding uk-text-center uk-grid uk-align-center uk-width-2-3@s">
            <form class="uk-form-horizontal uk-margin-large" ref={form} onSubmit={sendEmail}>

                <div class="uk-margin uk-text-left">
                    <label class="uk-form-label" for="for_name">Name</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-border-rounded" name='for_name' id="form-horizontal-text for_name" type="text" placeholder="Name..."  required/>
                    </div>
                </div>

                <div class="uk-margin uk-text-left">
                    <label class="uk-form-label" for="phone_number">Telefonnummer</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-border-rounded" name="phone_number" id="form-horizontal-text phone_number" type="text" placeholder="Telefonnummer..." required/>
                    </div>
                </div>

                <div class="uk-margin uk-text-left">
                    <label class="uk-form-label" for="email">Email</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-border-rounded" name="email" id="form-horizontal-text email" type="text" placeholder="Email..." required/>
                    </div>
                </div>

                <div class="uk-margin uk-text-left">
                    <label class="uk-form-label" for="email_body">Nachrichten</label>
                    <div class="uk-form-controls">
                        <textarea class="uk-textarea uk-border-rounded" name="message" id="form-horizontal-text email_body" type="text" rows="5" cols="40" required></textarea>
                    </div>
                </div>

                <br></br>
                <div class="uk-margin">
                    <div class="uk-form-controls">
                        <button type="submit" class="uk-button uk-button-primary uk-border-rounded">Absenden</button>
                    </div>
                </div>
            <br></br>
            </form>
            <div class="uk-text-left">
                <p>HandWerk, Andrea Köhler, Rüschendamm 1, 26655 Torsholt</p>
                <p>Telefon: 04488 - 5204588</p>
                <p>Email: koehleran[at]web.de</p>
            </div>
        </div>
        </div>
    );
  }
  
  export default ContactForm;

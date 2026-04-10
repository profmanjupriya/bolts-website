import React, { useEffect, useRef, useState } from "react";
import Navbar from './Navbar'

function ContactForm() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-boltsWhite">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdfS_-ttWzAZgGuQmiPTEAUPUQfxvDdu_D094EoO8LnqodqCQ/viewform?usp=sharing&ouid=117489490932856860370"
        className="w-full h-screen max-w-2xl"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default ContactForm;
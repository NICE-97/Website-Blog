import React from "react";

function MailchimpForm() {
  return (
    <div className="container flex mx-auto mt-5 w-full">
      <div className="bg-white w-full sm:w-full p-5">
        <div>
          <h1 className="font-bold">Mailchimp Form</h1>
          <p className="mt-3 text-sm">
            Subscribe to our mailing list to get the new updates.
          </p>
        </div>
        <form className="mt-3">
          <input
            className="px-2 py-1 bg-white border shadow-sm border-slate-300  focus:outline-none  focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1"
            type="text"
            placeholder="Email Address"
          ></input>
          <button className="bg-orange-500 w-full text-white py-0.5 mt-3">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default MailchimpForm;

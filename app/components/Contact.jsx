"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Maper from "./Maper";
export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail.includes("@")) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  // submit işlemi gerçekleştirilebilir

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kj89owr",
        "template_cbk7yl9",
        form.current,
        "hkQ-2hdK6LTVFgJnT"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Your email sent :)", {
            position: "top-center",
            autoClose: 3003,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          alert(error.text);
        }
      );
    if (submitDisabled) {
      return;
    }
  };

  return (
    <section id="contact" className="items-center justify-center py-24 bg-gray-100 flex">
      {/* <div className="lg:w-2/12 flex"></div> */}
      <div className="flex ">
        <div className="w-3/5">
          <h2 className="font-bold text-4xl" >Bizimle İletişime Geçin</h2>
          <p>Neorama Plaza – Yaşam Caddesi</p>
          <p>13/65-66-68</p>
          <p>Söğütözü / Ankara</p>
          <div className="" >
            <Maper />
          </div>
        </div>
        <div className="flex w-4/5 flex-col lg:flex-row">
          <form
            className="flex-1 lg:ml-32 pr-52 items-start border border-mainblue rounded-2xl flex flex-col gap-y-6  p-6"
            ref={form}
            onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent  outline-none w-full border-mainblue placeholder:text-black focus:border-mainblue transition-all border-b py-3"
                name="user_name"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                className="bg-transparent  outline-none w-full border-mainblue placeholder:text-black focus:border-mainblue transition-all border-b py-3"
                name="user_email"
              />
            </div>
            <div>
              <input
                name="message"
                placeholder="Your message"
                className="bg-transparent placeholder-black  outline-none w-full border-mainblue placeholder:text-black focus:border-mainblue transition-all border-b py-12 resize-none mb-12"
              />
              <button
                type="submit"
                disabled={submitDisabled}
                className="rounded-xl p-2 animate-pulse  px-4 bg-black text-white">
                Gönder
              </button>
              <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

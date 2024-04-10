import React, { useRef, useState, Suspense } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation('walk');

  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICEID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
      {
        from_name: form.name,
        to_name: "Dawn",
        from_email: form.email,
        to_email: 'sathivaigarai13@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLICKEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success' });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: '' });
      }, [3000]);
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log('FAILED...', error);
      showAlert({ show: true, text: 'Failed to send message. Please try again later.', type: 'danger' });
    });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input type="text" name="name" className="input" placeholder="John Doe" required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>

          <label className="text-black-500 font-semibold">
            E-mail
            <input type="email" name="email" className="input" placeholder="johndoe@example.com" required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea name="message" rows={4} className="textarea" placeholder="Let me know how I can help you!" required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>

          <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg-h-auto md:h-[550px] h-[350px]">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000}}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.7, 0]}
              scale={[0.5, 0.5, 0.5]} 
            />
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Contact
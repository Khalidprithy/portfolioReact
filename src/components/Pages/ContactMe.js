import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yjyfszl', 'template_l26d6fj', form.current, '9CH62NioqIjo3L1fc')
            .then((result) => {
                toast.success('Email sent successfully')
            }, (error) => {
                toast.error('Could not sent Email, Try again')
            });
    };

    return (
        <div className="bg-primary min-h-full pt-10 grid grid-cols-1 md:grid-cols-2 ">
            <div className="text-center p-4 text-neutral lg:text-left mx-auto">
                <h1 className="text-5xl font-bold">Let's get in touch</h1>
                <p className="py-6">Feel free to contact me to discuss about any kind of Front-end Back-end projects. I am open to take any kind of challenge and develope new skills</p>
            </div>
            <div className="card md:w-96 flex-shrink-0 mx-auto px-4 m-4 shadow-2xl bg-neutral">
                <div className="card-body">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex my-2'>
                            <label className='font-bold mr-2'>Name</label>
                            <input className='rounded-md px-3' type="text" name="user_name" />
                        </div>
                        <div className='flex my-2'>
                            <label className='font-bold mr-3'>Email</label>
                            <input className='rounded-md px-3' type="email" name="user_email" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className='font-bold mr-3 text-left'>Message</label>
                            <textarea className='rounded-md px-3' name="message" />
                        </div>
                        <input className='btn btn-sm btn-secondary' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
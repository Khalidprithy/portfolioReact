import React from 'react';
import toast from 'react-hot-toast';

const ContactMe = () => {

    // const src = "https://smtpjs.com/v3/smtp.js"

    // const handleSubmit = (event) => {
    //     event.send({
    //         Host: "smtp.gmail.com",
    //         Username: "khalidprithy@gmail.com",
    //         Password: "password",
    //         To: 'them@website.com',
    //         From: "you@isp.com",
    //         Subject: "This is the subject",
    //         Body: "And this is the body"
    //     }).then(
    //         message => toast(message)
    //     );
    // }

    return (
        <div>
            <div class="hero min-h-screen bg-primary ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center text-neutral lg:text-left">
                        <h1 class="text-5xl font-bold">Let's get in touch</h1>
                        <p class="py-6">Feel free to contact me to discuss about any kind of Front-end Back-end projects. I am open to take any kind of challenge and develope new skills</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                        <div class="card-body">
                            <form >
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" id='name' placeholder="Your Name" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" id='email' placeholder="Your Email" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea type="text" id='message' class="input min-h-8 input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactMe;
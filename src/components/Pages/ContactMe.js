import React from 'react';

const ContactMe = () => {

    return (
        <div className=''>
            <div className="bg-primary min-h-full pt-10 grid grid-cols-1 md:grid-cols-2 ">
                <div className="text-center p-4 text-neutral lg:text-left mx-auto">
                    <h1 className="text-5xl font-bold">Let's get in touch</h1>
                    <p className="py-6">Feel free to contact me to discuss about any kind of Front-end Back-end projects. I am open to take any kind of challenge and develope new skills</p>
                </div>
                <div className="card md:w-96 flex-shrink-0 px-4 m-4 shadow-2xl bg-neutral">
                    <div className="card-body">
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" id='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" id='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea type="text" id='message' className="input min-h-8 input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
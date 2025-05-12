import { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real implementation, you would send the form data to a server
    // For this demo, we'll just show the success message
    setFormSuccess(true);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-black/50 section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="card p-8 rounded-2xl">
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-black border border-indigo-500/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-500 clickable" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-black border border-indigo-500/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-500 clickable" placeholder="Your Email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-black border border-indigo-500/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-500 clickable" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full bg-black border border-indigo-500/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-500 clickable" placeholder="Your Message"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium clickable">
                  Send Message
                </button>
              </div>
            </form>
            {formSuccess && (
              <div className="mt-6 p-4 bg-emerald-900/30 border border-emerald-500/30 rounded-lg text-emerald-400 text-center">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card p-6 rounded-2xl text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-600/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-400">deepankarbhadrasen@gmail.com</p>
            </div>
            
            <div className="card p-6 rounded-2xl text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-600/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
            
            <div className="card p-6 rounded-2xl text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-600/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-400">Bhopal, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
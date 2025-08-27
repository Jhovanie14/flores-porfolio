import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import Input from "../components/Input";
import emailjs from "emailjs-com";
import Card from "../components/Card";

function Contact({ status }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xmzmdfb",
        "template_29xg2yt",
        form.current,
        "KcB6j-8UOQJYiHTMj"
      )
      .then(
        () => {
          status("success");
          form.current.reset();
        },
        () => {
          status("error");
        }
      );
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
              Let's Work Together
            </h1>
            <p className="text-xl text-stone-700 max-w-2xl mx-auto font-normal">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life.
            </p>
          </div>
          {/* info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* left contact content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <p className="text-neutral-700 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0a6802]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0a6802]" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-neutral-700">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0a6802]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#0a6802]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-neutral-700">+63 (919) 290-3551</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0a6802]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#0a6802]" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-neutral-700">Davao City, PH</p>
                  </div>
                </div>
              </div>
            </div>
            {/* right contact content */}
            <Card>
              <div className="mb-4">
                <h4 className="font-medium text-lg">Send a Message</h4>
                <p className="text-sm text-neutral-800">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      label="Name"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    label="Subject"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    label="Message"
                    isTextArea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex flex-1 items-center justify-center py-2 text-white text-base font-medium rounded-md bg-[#0a6802] hover:bg-[#167e0d]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

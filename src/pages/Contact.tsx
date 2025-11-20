import { useEffect, useState } from 'react';
import { Send, Phone, Mail, ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Field focus states
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // Form handling
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-black text-white pt-36 md:pt-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F26E50]/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"></div>
      
      <SEO 
        title="Contact ThreeAtoms | Get in Touch for AI Solutions"
        description="Contact ThreeAtoms for custom AI solutions. Schedule a consultation to discuss your project needs and how our AI expertise can benefit your business."
        keywords="contact ThreeAtoms, AI consulting, schedule consultation, AI development, custom AI solutions"
        url="https://threeatoms.com/contact"
        canonical="https://threeatoms.com/contact/"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F26E50] to-purple-600 rounded-xl blur opacity-20"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-300">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className={`absolute left-3 transition-all duration-200 ${
                          focusedField === 'name' || formData.name 
                            ? '-top-2.5 text-xs bg-black px-1 text-[#F26E50]' 
                            : 'top-3 text-gray-400'
                        }`}
                      >
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-[#F26E50] text-white transition-all duration-200"
                      />
                    </div>
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className={`absolute left-3 transition-all duration-200 ${
                          focusedField === 'email' || formData.email 
                            ? '-top-2.5 text-xs bg-black px-1 text-[#F26E50]' 
                            : 'top-3 text-gray-400'
                        }`}
                      >
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-[#F26E50] text-white transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="subject" 
                      className={`absolute left-3 transition-all duration-200 ${
                        focusedField === 'subject' || formData.subject 
                          ? '-top-2.5 text-xs bg-black px-1 text-[#F26E50]' 
                          : 'top-3 text-gray-400'
                      }`}
                    >
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required 
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-[#F26E50] text-white transition-all duration-200"
                    />
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={`absolute left-3 transition-all duration-200 ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 text-xs bg-black px-1 text-[#F26E50]' 
                          : 'top-3 text-gray-400'
                      }`}
                    >
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-[#F26E50] text-white resize-none transition-all duration-200"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#F26E50] to-[#F26E50]/80 hover:from-[#F26E50]/90 hover:to-[#F26E50]/70 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-all group"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-[#F26E50] rounded-xl blur opacity-20"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-300">Contact Information</h2>
                
                <div className="space-y-8">
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[#F26E50]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Call Us</h3>
                      <p className="text-gray-300">
                        +91 76739 17050<br />
                        Monday-Friday, 9am-6pm ET
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-[#F26E50]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">WhatsApp</h3>
                      <p className="text-gray-300">
                        Message us on WhatsApp<br />
                        <a
                          href="https://wa.me/917673917050"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#F26E50] hover:underline inline-flex items-center gap-1 transition-all"
                        >
                          +91 76739 17050
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-[#F26E50]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <p className="text-gray-300">
                        contact@threeatoms.com<br />
                        threeatoms.com@gmail.com
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#F26E50]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                      <p className="text-gray-300">
                        <a
                          href="https://www.google.com/maps/place/Unit.No.+114,+Trinity+Work+Hub+-+Best+Coworking+Space,+Plug%26Play+Office,+Managed,+Virtual,+Furnished,+Shared+Space+in+Kukatpally,+Hyderabad,+Manjeera+Trinity+Corporate,+JAWAHARLAL+NEHRU+TECHNOLOGICAL+UNIVERSITY,+Hitech+Road,+beside+LuLu+Mall,+Kukatpally+Housing+Board+Colony,+Kukatpally,+Hyderabad,+Telangana+500072/data=!4m2!3m1!1s0xa32cbea0334783f9:0x886a440a0d04da85!17m2!4m1!1e3!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjQ2LjIYACCenQoqxgEsOTQyNTk1NTEsOTQyNjc3MjcsOTQyNzU0MDMsOTQyOTIxOTUsOTQyOTk1MzIsOTQyODQ0OTMsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksOTQyOTIwNzgsOTQyOTU1MDQsNDcwODQzOTMsOTQyMTMyMDBCAklO&skid=893d10d4-4768-4aef-83c9-b2e3cbc32504"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-[#F26E50] transition-colors"
                        >
                          Unit.No. 114, 1st Floor, Manjeera Trinity Corporate,<br />
                          JNTU - Hitech Road, beside LuLu Mall,<br />
                          KPHB, Phase - 3, Kukatpally,<br />
                          Hyderabad, Telangana 500072
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* FAQ Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What industries do you work with?",
                answer: "We work with clients across various industries including healthcare, finance, e-commerce, manufacturing, and more. Our AI solutions are adaptable to any industry's unique challenges."
              },
              {
                question: "How long does a typical AI project take?",
                answer: "Project timelines vary based on complexity and scope. Simple projects may be completed in a few weeks, while more complex implementations may take several months. We'll provide a detailed timeline during consultation."
              },
              {
                question: "Do I need technical knowledge to work with you?",
                answer: "No technical expertise is required from your end. We handle all technical aspects while ensuring you understand the process and can effectively use the final solution."
              },
              {
                question: "What kind of support do you provide after project completion?",
                answer: "We offer ongoing technical support, maintenance, and optimization services to ensure your AI solution continues to perform optimally and evolves with your business needs."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F26E50]/30 to-purple-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

'use client';

import { sendEmail } from '../app/actions';
import { useState } from 'react';

const ContactForm = ({ email, github }) => {
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData) {
    setIsPending(true);
    setStatus({ type: null, message: '' });
    
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus({ type: 'success', message: 'Transmission successful. Message intercepted.' });
        // Reset form would happen here if we had a ref
      } else {
        setStatus({ type: 'error', message: 'Transmission failed: ' + result.error });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Critical system error during transmission.' });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="p-8 bg-[#141414] border border-[#333333] rounded-md flex-1 w-full">
      <p className="text-[#a0a0a0] mb-6 font-mono text-sm italic">
        // Secure communication channel enabled
      </p>
      
      <form 
        className="space-y-4 mb-8"
        action={handleSubmit}
      >
        <div>
          <label className="text-xs uppercase tracking-widest text-[#00c3ff] mb-2 font-mono block">Identify Self</label>
          <input 
            type="text" 
            name="name"
            className="w-full bg-[#0a0a0a] border border-[#333333] p-3 text-sm font-mono text-[#e6e6e6] focus:border-[#00ff9f] outline-none"
            placeholder="name/alias"
            required
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-[#00c3ff] mb-2 font-mono block">Source (Email)</label>
          <input 
            type="email" 
            name="senderEmail"
            className="w-full bg-[#0a0a0a] border border-[#333333] p-3 text-sm font-mono text-[#e6e6e6] focus:border-[#00ff9f] outline-none"
            placeholder="email@example.com"
            required
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-[#00c3ff] mb-2 font-mono block">Payload (Message)</label>
          <textarea 
            name="message"
            className="w-full bg-[#0a0a0a] border border-[#333333] p-3 text-sm font-mono text-[#e6e6e6] focus:border-[#00ff9f] outline-none h-32"
            placeholder="Type your message..."
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          disabled={isPending}
          className={`w-full py-3 border border-[#00ff9f] text-[#00ff9f] font-mono text-sm uppercase tracking-widest hover:bg-[#00ff9f]/10 transition-all ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isPending ? 'Transmitting...' : 'Transmit'}
        </button>
        
        {status.message && (
          <p className={`mt-4 font-mono text-xs uppercase tracking-wider ${status.type === 'success' ? 'text-[#00ff9f]' : 'text-red-500'}`}>
            [{status.type === 'success' ? 'OK' : 'ERROR'}] {status.message}
          </p>
        )}
      </form>

      <div className="space-y-4 border-t border-[#333333] pt-6">
        <div className="flex flex-col">
          <label className="text-xs uppercase tracking-widest text-[#00c3ff] mb-2 font-mono">Origin</label>
          <div className="text-lg text-[#e6e6e6] font-mono underline decoration-[#333333] underline-offset-8 decoration-2">
            {email}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xs uppercase tracking-widest text-[#00c3ff] mb-2 font-mono">Terminal</label>
          <div className="text-lg text-[#e6e6e6] font-mono underline decoration-[#333333] underline-offset-8 decoration-2">
            {github}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

'use client';

import { useState, FormEvent } from 'react';
import { cn } from '@/lib/utils';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot: string;
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  honeypot: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (form.honeypot) return; // Bot trap
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }));
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm">
          Thank you for your enquiry. Our team will get back to you within one working day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-green-700 underline hover:text-green-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={form.honeypot}
        onChange={e => handleChange('honeypot', e.target.value)}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First Name" required error={errors.firstName}>
          <input
            type="text"
            value={form.firstName}
            onChange={e => handleChange('firstName', e.target.value)}
            className={inputCn(!!errors.firstName)}
            placeholder="Jane"
            autoComplete="given-name"
          />
        </Field>
        <Field label="Last Name" required error={errors.lastName}>
          <input
            type="text"
            value={form.lastName}
            onChange={e => handleChange('lastName', e.target.value)}
            className={inputCn(!!errors.lastName)}
            placeholder="Smith"
            autoComplete="family-name"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email Address" required error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
            className={inputCn(!!errors.email)}
            placeholder="jane@company.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Phone (optional)">
          <input
            type="tel"
            value={form.phone}
            onChange={e => handleChange('phone', e.target.value)}
            className={inputCn(false)}
            placeholder="+91 80 4142 ..."
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Subject">
        <input
          type="text"
          value={form.subject}
          onChange={e => handleChange('subject', e.target.value)}
          className={inputCn(false)}
          placeholder="Enquiry about ..."
        />
      </Field>

      <Field label="Message" required error={errors.message}>
        <textarea
          value={form.message}
          onChange={e => handleChange('message', e.target.value)}
          className={cn(inputCn(!!errors.message), 'resize-y min-h-[140px]')}
          placeholder="Please describe your enquiry ..."
        />
      </Field>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3">
          An error occurred while sending your message. Please try again or contact us directly by email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-[#0066a4] hover:bg-[#00558a] disabled:bg-gray-400 text-white font-bold px-8 py-3 rounded text-sm transition-colors"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function inputCn(hasError: boolean) {
  return cn(
    'w-full border rounded px-3 py-2.5 text-sm outline-none transition-colors',
    hasError
      ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500'
      : 'border-gray-300 bg-white focus:border-[#0066a4] focus:ring-1 focus:ring-[#0066a4]'
  );
}


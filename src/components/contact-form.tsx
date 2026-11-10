'use client';
import { useState, type FormEvent } from 'react';
export function ContactForm() {
  const [draft, setDraft] = useState('');
  const [emailLink, setEmailLink] = useState('');
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [['name', 'Name'], ['company', 'Company'], ['email', 'Email'], ['phone', 'Phone'], ['service', 'Service'], ['pickup', 'Pickup location'], ['delivery', 'Delivery location'], ['date', 'Preferred date'], ['material', 'Material type'], ['details', 'Load and access details']];
    const body = fields.map(([key, label]) => `${label}: ${String(data.get(key) || 'Not provided').trim()}`).join('\n');
    setDraft(body);
    setEmailLink(`mailto:dispatch@kellytrucking.net?subject=${encodeURIComponent('Kelly Trucking — Project Inquiry')}&body=${encodeURIComponent(body)}`);
  }
  return <form onSubmit={prepare} onChange={() => { if (draft) { setDraft(''); setEmailLink(''); } }} className="inquiry-form"><h2>Contact Us</h2><div className="field-grid">
    <label>Name<input name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
    <label>Company<input name="company" autoComplete="organization" maxLength={160} placeholder="Company name" /></label>
    <label>Email<input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
    <label>Phone (optional)<input type="tel" name="phone" autoComplete="tel" maxLength={40} placeholder="Your phone number" /></label>
    <label className="full">Service<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Material Supply</option><option>Dump-Truck Hauling</option><option>Cut And Fill</option><option>Site Preparation</option><option>Not Sure Yet</option></select></label>
    <label>Pickup location<input name="pickup" maxLength={200} placeholder="City or jobsite" /></label>
    <label>Delivery location<input name="delivery" maxLength={200} placeholder="City or jobsite" /></label>
    <label>Preferred date<input name="date" type="date" /></label>
    <label>Material type<input name="material" maxLength={160} placeholder="What needs moving?" /></label>
    <label className="full">Load and access details<textarea name="details" maxLength={2000} rows={5} placeholder="Approximate quantity, loading access, and delivery requirements" /></label>
  </div><button type="submit" className="button">Prepare Request Email</button><p className="form-help">Prepare a written request, then open it in your email app to review and send. Availability and pricing are confirmed by dispatch.</p>{draft && <div className="request-preview" role="status"><h3>Your Request Is Ready</h3><p>This has not been sent. Open your email app to review and send it to dispatch.</p><a href={emailLink} className="button light">Open Email App</a><details><summary>Review Request</summary><pre>{draft}</pre></details></div>}</form>;
}

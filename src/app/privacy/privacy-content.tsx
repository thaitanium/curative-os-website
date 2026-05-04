export default function PrivacyContent() {
  return (
    <div className="space-y-10 text-muted-foreground leading-7">

      <Section title="1. Introduction">
        <P>Curative OS, LLC ("Curative OS," "we," "us," or "our") operates the Curative OS platform available at curativeos.com and app.curativeos.com (the "Service"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our Service.</P>
        <P>By using the Service, you agree to the collection and use of information as described in this Privacy Policy.</P>
      </Section>

      <Section title="2. Information We Collect">
        <SubSection title="Information you provide directly">
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Account registration information: name, email address, password</li>
            <li>Profile information: company name, job title</li>
            <li>Billing information: collected and processed by Stripe, Inc. We do not store full credit card numbers</li>
            <li>Deal and workspace data: property addresses, deal notes, documents, contacts, and other content you input into the Service</li>
            <li>Communications: messages you send us via email or support channels</li>
          </ul>
        </SubSection>
        <SubSection title="Information collected automatically">
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Log data: IP address, browser type, operating system, pages visited, time and date of access</li>
            <li>Device information: hardware model, operating system version, unique device identifiers</li>
            <li>Cookies and similar technologies: session cookies for authentication, preference cookies for settings (see Section 8)</li>
            <li>Error and performance data: collected via Sentry for application error tracking</li>
          </ul>
        </SubSection>
        <SubSection title="Information from third parties">
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Skip trace data: property owner contact information retrieved via third-party skip trace providers (Tracerfy) at your request</li>
            <li>Google OAuth: if you sign in with Google, we receive your name and email address from Google</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="3. How We Use Your Information">
        <P>We use your information to:</P>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          {[
            'Create and manage your account and workspace',
            'Process payments and manage billing',
            'Provide, maintain, and improve the Service',
            'Deliver AI-assisted features (see Section 6)',
            'Send transactional emails (account confirmation, password reset, billing receipts)',
            'Send service-related notifications and product updates',
            'Respond to support requests',
            'Monitor and analyze usage patterns to improve the Service (using aggregated, non-personally-identifiable data)',
            'Detect, investigate, and prevent fraudulent or unauthorized activity',
            'Comply with applicable laws and legal obligations',
          ].map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Callout>
          We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
        </Callout>
      </Section>

      <Section title="4. How We Share Your Information">
        <SubSection title="Service providers">
          We share information with trusted third-party vendors who help us operate the Service:
        </SubSection>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-6 font-semibold text-foreground">Provider</th>
                <th className="text-left py-2 font-semibold text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ['Stripe, Inc.', 'Payment processing and billing'],
                ['Supabase, Inc.', 'Database hosting and authentication'],
                ['Resend, Inc.', 'Transactional email delivery'],
                ['Sentry, Inc.', 'Error tracking and performance monitoring'],
                ['Anthropic, Inc.', 'AI-assisted features (deal underwriting, document analysis)'],
                ['Tracerfy', 'Skip trace data retrieval (at your request)'],
              ].map(([provider, purpose]) => (
                <tr key={provider}>
                  <td className="py-2 pr-6 text-foreground font-medium">{provider}</td>
                  <td className="py-2">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P className="mt-3">These providers are contractually obligated to use your data only to provide services to us and in compliance with applicable law.</P>
        <SubSection title="Business transfers">
          If Curative OS is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or in-app notice before your information is transferred and becomes subject to a different privacy policy.
        </SubSection>
        <SubSection title="Legal compliance">
          We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
        </SubSection>
        <SubSection title="With your consent">
          We may share your information for any other purpose with your explicit consent.
        </SubSection>
      </Section>

      <Section title="5. Data Retention">
        <P>We retain your personal information for as long as your account is active or as needed to provide the Service. Upon cancellation or termination:</P>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Your account data is retained for <strong className="text-foreground">60 days</strong> during which you may reactivate your account and recover your data</li>
          <li>After 60 days, your data will be permanently deleted within the following <strong className="text-foreground">30 days</strong> (90 days total from termination date)</li>
          <li>Billing records and transactional data may be retained longer as required by applicable law (typically 7 years for tax and accounting purposes)</li>
          <li>Aggregated, anonymized data that cannot identify you may be retained indefinitely</li>
        </ul>
        <P className="mt-3">You may request deletion of your data at any time by contacting <A href="mailto:privacy@curativeos.com">privacy@curativeos.com</A>. We will respond within 30 days.</P>
      </Section>

      <Section title="6. Artificial Intelligence and Data Processing">
        <P>Certain features of the Service use AI to assist with deal underwriting, document analysis, and workflow suggestions. When you use these features, relevant data (such as deal notes and uploaded documents) may be transmitted to Anthropic, Inc. for processing. Anthropic's use of this data is governed by its own privacy policy and data processing agreements.</P>
        <Callout>
          <strong className="text-foreground">We do not use your private workspace data to train AI models.</strong>
        </Callout>
        <P>If you do not wish to use AI-assisted features, you may avoid using them within the Service. We do not process your data through AI systems without your initiation of an AI feature.</P>
      </Section>

      <Section title="7. Data Security">
        <P>We implement commercially reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:</P>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Encrypted data transmission (TLS/HTTPS)</li>
          <li>Encrypted data storage</li>
          <li>Access controls and authentication requirements</li>
          <li>Regular security monitoring via Sentry</li>
        </ul>
        <P className="mt-3">No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</P>
        <SubSection title="Data breach notification">
          In the event of a data breach that affects your personal information, we will notify affected users within 72 hours of becoming aware of the breach, to the extent practicable, or as otherwise required by applicable law.
        </SubSection>
      </Section>

      <Section title="8. Cookies">
        <P>We use the following types of cookies:</P>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong className="text-foreground">Essential cookies:</strong> Required for authentication and secure access to your account. The Service cannot function without these.</li>
          <li><strong className="text-foreground">Preference cookies:</strong> Store your settings and preferences (e.g., dark mode, display settings)</li>
          <li><strong className="text-foreground">Error tracking:</strong> Sentry uses minimal telemetry to capture application errors</li>
        </ul>
        <Callout variant="info">
          We do not currently use advertising, analytics, or third-party tracking cookies. <strong className="text-foreground">If we add analytics or tracking tools in the future, we will update this Privacy Policy and notify you before those tools are enabled.</strong>
        </Callout>
      </Section>

      <Section title="9. Your Rights and Choices">
        <P>Regardless of your location, you have the following rights with respect to your personal information:</P>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong className="text-foreground">Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information (subject to legal retention obligations)</li>
          <li><strong className="text-foreground">Data portability:</strong> Request your data in a machine-readable format (CSV or JSON) within 30 days</li>
          <li><strong className="text-foreground">Objection:</strong> Object to certain processing of your personal information</li>
        </ul>
        <P className="mt-3">To exercise any of these rights, contact us at <A href="mailto:privacy@curativeos.com">privacy@curativeos.com</A>. We will respond within 30 days. We may require verification of your identity before fulfilling requests.</P>
      </Section>

      <Section title="10. Children's Privacy">
        <P>The Service is not directed at, and we do not knowingly collect personal information from, children under the age of 18. If you believe we have inadvertently collected information from a minor, contact us at <A href="mailto:privacy@curativeos.com">privacy@curativeos.com</A> and we will promptly delete the information.</P>
      </Section>

      <Section title="11. Third-Party Links and Services">
        <P>The Service may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any third-party services you access.</P>
      </Section>

      <Section title="12. Changes to This Privacy Policy">
        <P>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a prominent notice on the Service at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Privacy Policy.</P>
        <P>We maintain a "Last Updated" date at the top of this page so you can easily identify when changes were made.</P>
      </Section>

      <Section title="13. Contact Us">
        <P>For privacy-related questions, requests, or concerns:</P>
        <div className="mt-3 rounded-lg border border-border bg-card px-5 py-4 text-sm space-y-1">
          <p><strong className="text-foreground">Email:</strong> <A href="mailto:privacy@curativeos.com">privacy@curativeos.com</A></p>
          <p><strong className="text-foreground">Company:</strong> Curative OS, LLC</p>
        </div>
      </Section>

    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="font-semibold text-foreground">{title}. </span>
      <span>{children}</span>
    </div>
  );
}

function P({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={className}>{children}</p>;
}

function Callout({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'warning' | 'info' }) {
  const base = 'rounded-lg border px-5 py-4 text-sm leading-relaxed';
  const styles =
    variant === 'warning'
      ? `${base} border-yellow-500/20 bg-yellow-500/5 text-yellow-200/80`
      : variant === 'info'
      ? `${base} border-accent/30 bg-accent/5 text-muted-foreground`
      : `${base} border-accent/20 bg-accent/5 text-muted-foreground`;
  return <div className={styles}>{children}</div>;
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-accent hover:underline">
      {children}
    </a>
  );
}

export default function TermsContent() {
  return (
    <div className="legal-content space-y-10 text-muted-foreground leading-7">

      <Section title="1. Agreement to Terms">
        <P>These Terms of Service ("Terms") form a legally binding agreement between you ("User," "you," or "your") and Curative OS, LLC ("Curative OS," "we," "us," or "our"). By accessing or using the Curative OS platform, website, or related services (collectively, the "Service"), you agree to be bound by these Terms. If you do not agree, do not use the Service.</P>
        <P>These Terms apply to all users, including free trial users, paying subscribers, and agency owners and their sub-account users.</P>
      </Section>

      <Section title="2. Description of Service">
        <P>Curative OS is a customer relationship management (CRM) platform designed for real estate investors who specialize in curative title transactions. The Service includes deal tracking, team collaboration tools, AI-assisted underwriting, document management, and related features.</P>
        <Callout>
          <strong className="text-foreground">Not professional advice.</strong> The Service is a software tool only. Nothing in the Service constitutes legal, financial, real estate, tax, or investment advice. Curative OS does not hold any professional license. You should consult licensed attorneys, financial advisors, and real estate professionals before making investment decisions. We are not liable for any investment decisions you make using the Service.
        </Callout>
      </Section>

      <Section title="3. Account Registration">
        <SubSection title="Eligibility">
          You must be at least 18 years old and legally capable of entering into a binding contract to use the Service. By registering, you represent and warrant that you meet these requirements.
        </SubSection>
        <SubSection title="Account security">
          You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account. Notify us immediately at <A href="mailto:support@curativeos.com">support@curativeos.com</A> if you suspect unauthorized access.
        </SubSection>
        <SubSection title="Accurate information">
          You agree to provide accurate, current, and complete information during registration and to keep your account information updated.
        </SubSection>
        <SubSection title="One account per person">
          Each account is for a single user. You may not share your login credentials with others. Workspace plans allow multiple seats — each seat requires its own account. Unauthorized account sharing may result in immediate termination.
        </SubSection>
      </Section>

      <Section title="4. Subscriptions, Billing & Cancellation">
        <SubSection title="Subscription plans">
          The Service is offered on a subscription basis. Pricing and plan details are available at <A href="/pricing">curativeos.com/pricing</A> and are subject to change with notice as described in Section 12.
        </SubSection>
        <SubSection title="Billing">
          Subscriptions are billed in advance on a monthly or annual basis, depending on your selected plan. Payment is processed by Stripe, Inc. By providing payment information, you authorize us to charge your payment method on a recurring basis.
        </SubSection>
        <SubSection title="No refunds">
          All fees are non-refundable. There are no prorated refunds for partial billing periods. If you cancel, your access to the Service will continue until the end of your current billing period, at which point your account will be deactivated.
        </SubSection>
        <SubSection title="Cancellation">
          You may cancel your subscription at any time through your account settings or by contacting <A href="mailto:support@curativeos.com">support@curativeos.com</A>. Cancellation takes effect at the end of the current billing period.
        </SubSection>
        <SubSection title="Delinquency">
          If a payment fails and is not resolved within 7 days, we may suspend or terminate your account without further notice.
        </SubSection>
        <SubSection title="Free trials">
          If we offer a free trial, it will be subject to the terms stated at the time of the trial. If you do not cancel before the trial ends, you will be automatically charged for the selected plan.
        </SubSection>
      </Section>

      <Section title="5. Agency and Sub-Account Terms">
        <SubSection title="Agency owners">
          If you are an agency owner ("Agency"), you may provision sub-accounts for your customers ("Sub-Account Users"). You are responsible for ensuring Sub-Account Users comply with these Terms. Fees for sub-accounts are billed to your agency's payment method under consolidated billing.
        </SubSection>
        <SubSection title="Sub-account users">
          Sub-Account Users access the Service through the workspace provisioned by the Agency. If an Agency account is terminated or suspended, all associated sub-accounts may also be suspended.
        </SubSection>
        <SubSection title="Responsibility">
          Agencies are responsible for the actions of their Sub-Account Users and must not use sub-accounts to circumvent the intent of any plan limitation.
        </SubSection>
      </Section>

      <Section title="6. Acceptable Use">
        <P>You agree not to use the Service to:</P>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          {[
            'Violate any applicable federal, state, or local law or regulation',
            'Infringe upon any intellectual property rights of any third party',
            'Upload, store, or transmit any content that is unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable',
            'Engage in any unauthorized data collection, scraping, or harvesting of content from the Service',
            'Attempt to reverse-engineer, decompile, or disassemble any portion of the Service',
            'Introduce malware, viruses, or any other harmful code',
            'Interfere with or disrupt the integrity or performance of the Service or its infrastructure',
            'Impersonate any person or entity',
            'Use the Service for any multi-level marketing, pyramid scheme, or fraudulent purpose',
            'Resell or commercially exploit the Service without our written consent',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <P className="mt-4">We reserve the right to terminate your access without notice for violation of this section.</P>
      </Section>

      <Section title="7. Third-Party Data and Integrations">
        <P>The Service integrates with third-party data providers, including but not limited to skip trace services, property data APIs, and title research tools. Curative OS does not guarantee the accuracy, completeness, or timeliness of any third-party data displayed within the Service. You agree that Curative OS is not liable for any errors, inaccuracies, or omissions in third-party data, and that you will independently verify any data before relying on it for any transaction or investment decision.</P>
        <P>Third-party integrations (including payment processing, email delivery, and AI features) are subject to the terms and privacy policies of those third-party providers.</P>
      </Section>

      <Section title="8. Artificial Intelligence Features">
        <SubSection title="AI-powered features">
          The Service includes AI-assisted tools for deal underwriting, document analysis, and workflow automation. These features are powered by third-party AI providers, including Anthropic, Inc. By using AI features, you consent to your input data being transmitted to and processed by these providers in accordance with their data processing agreements.
        </SubSection>
        <SubSection title="AI output is not professional advice">
          AI-generated content is provided for informational purposes only. You are solely responsible for reviewing, verifying, and acting upon any AI-generated output. Curative OS does not guarantee the accuracy, reliability, or fitness of any AI-generated output.
        </SubSection>
        <SubSection title="No training on your data">
          We do not use your private deal data or workspace content to train AI models.
        </SubSection>
      </Section>

      <Section title="9. Intellectual Property">
        <SubSection title="Our IP">
          The Service, including all software, design, text, graphics, logos, and other content, is owned by Curative OS, LLC and protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Service for your internal business purposes only.
        </SubSection>
        <SubSection title="Your data">
          You retain all ownership rights to the data you upload, input, or generate within the Service ("User Data"). You grant Curative OS a limited license to store, process, and display User Data solely as necessary to provide the Service.
        </SubSection>
        <SubSection title="Feedback">
          If you submit feedback, suggestions, or ideas about the Service, you grant us the right to use such feedback without compensation or attribution.
        </SubSection>
      </Section>

      <Section title="10. Data and Account Termination">
        <P>Upon cancellation or termination, your account will be deactivated at the end of the billing period. Your User Data will be retained for 60 days after deactivation, during which you may reactivate your account and recover your data. After 60 days, we will permanently delete your User Data within the following 30 days (90 days total from termination).</P>
        <SubSection title="Data export">
          You may request an export of your User Data in a machine-readable format (CSV or JSON) by contacting <A href="mailto:support@curativeos.com">support@curativeos.com</A>. We will fulfill export requests within 30 days.
        </SubSection>
        <SubSection title="Beta features">
          Any features labeled "beta," "preview," or "experimental" are provided as-is and are not subject to any service level commitments. We may discontinue beta features at any time without notice.
        </SubSection>
      </Section>

      <Section title="11. Disclaimers and Limitation of Liability">
        <Callout variant="warning">
          <p><strong className="text-foreground">As-is service.</strong> THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF SECURITY VULNERABILITIES.</p>
          <p className="mt-3"><strong className="text-foreground">Limitation of liability.</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CURATIVE OS, LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>
        </Callout>
        <SubSection title="Uptime">
          We make no guarantee of any specific uptime or availability. We will use commercially reasonable efforts to maintain availability but are not responsible for downtime caused by factors outside our reasonable control.
        </SubSection>
        <SubSection title="Indemnification">
          You agree to indemnify, defend, and hold harmless Curative OS, LLC and its officers, directors, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of your use of the Service, your violation of these Terms, or your violation of any third-party rights.
        </SubSection>
      </Section>

      <Section title="12. Pricing Changes">
        <P>We reserve the right to change our pricing at any time. If a pricing change affects your active subscription, we will provide at least <strong className="text-foreground">30 days' written notice</strong> via email or an in-app notification. If you do not wish to continue at the new price, you may cancel your subscription before the new price takes effect without any early termination penalty.</P>
      </Section>

      <Section title="13. Dispute Resolution">
        <SubSection title="Informal resolution">
          Before initiating any formal dispute, you agree to first contact us at <A href="mailto:legal@curativeos.com">legal@curativeos.com</A> and attempt to resolve the dispute informally for at least 30 days.
        </SubSection>
        <SubSection title="Binding arbitration">
          If informal resolution fails, any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association ("AAA") under its Consumer Arbitration Rules, rather than in court. The arbitration will be conducted in English. The arbitrator's award will be final and binding and may be entered as a judgment in any court of competent jurisdiction.
        </SubSection>
        <SubSection title="Small claims exception">
          Either party may bring an individual claim in small claims court in lieu of arbitration, as long as the claim qualifies under the applicable small claims court rules.
        </SubSection>
        <Callout variant="warning">
          <strong className="text-foreground">Class action waiver.</strong> YOU AND CURATIVE OS AGREE THAT EACH MAY ONLY BRING CLAIMS AGAINST THE OTHER IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING. If this class action waiver is found unenforceable, then the arbitration agreement shall be null and void for that claim.
        </Callout>
        <SubSection title="Governing law">
          These Terms are governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law principles.
        </SubSection>
      </Section>

      <Section title="14. Force Majeure">
        <P>We are not liable for any failure or delay in performance resulting from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, epidemics, pandemics, cyberattacks, government actions, internet outages, power failures, or third-party service provider failures.</P>
      </Section>

      <Section title="15. DMCA and Intellectual Property Claims">
        <P>If you believe content on the Service infringes your copyright, please send a DMCA takedown notice to <A href="mailto:legal@curativeos.com">legal@curativeos.com</A> with the information required by 17 U.S.C. § 512(c). We will respond to valid notices promptly.</P>
      </Section>

      <Section title="16. Modifications to Terms">
        <P>We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice in the Service at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you do not agree to the changes, you may cancel your subscription before the effective date.</P>
      </Section>

      <Section title="17. General Provisions">
        <SubSection title="Entire agreement">
          These Terms, together with our Privacy Policy, constitute the entire agreement between you and Curative OS, LLC regarding the Service and supersede all prior agreements.
        </SubSection>
        <SubSection title="Severability">
          If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
        </SubSection>
        <SubSection title="No waiver">
          Our failure to enforce any right or provision of these Terms will not constitute a waiver of future enforcement of that right or provision.
        </SubSection>
        <SubSection title="Assignment">
          You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of our assets.
        </SubSection>
        <SubSection title="Contact">
          Curative OS, LLC &nbsp;·&nbsp; <A href="mailto:legal@curativeos.com">legal@curativeos.com</A> &nbsp;·&nbsp; <A href="mailto:support@curativeos.com">support@curativeos.com</A>
        </SubSection>
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

function Callout({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'warning' }) {
  const base = 'rounded-lg border px-5 py-4 text-sm leading-relaxed';
  const styles = variant === 'warning'
    ? `${base} border-yellow-500/20 bg-yellow-500/5 text-yellow-200/80`
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

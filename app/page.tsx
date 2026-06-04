export default function Home() {
  const faqs = [
    {
      q: 'How does anomaly detection work?',
      a: 'We baseline your API response times over 24 hours and alert you when latency deviates significantly from your normal patterns — not just fixed thresholds.'
    },
    {
      q: 'Which notification channels are supported?',
      a: 'Alerts are delivered via email, Slack, PagerDuty, and webhooks so your team is notified wherever they work.'
    },
    {
      q: 'How many endpoints can I monitor?',
      a: 'The $15/mo plan covers up to 50 endpoints checked every 60 seconds with 90 days of latency history.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know about API slowdowns<br />
          <span className="text-[#58a6ff]">before your customers do</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Real-time latency monitoring across all your API endpoints. Smart anomaly detection fires alerts the moment performance degrades — not after the damage is done.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start monitoring — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 7-day trial</p>
      </section>

      {/* Feature highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⚡', title: 'Real-time checks', desc: 'Endpoints polled every 60 seconds via global edge nodes' },
          { icon: '🔔', title: 'Smart alerts', desc: 'Anomaly detection learns your baseline, cuts false positives' },
          { icon: '📊', title: '90-day history', desc: 'Trend charts and p95/p99 latency breakdowns at a glance' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              '50 monitored endpoints',
              'Checks every 60 seconds',
              'Anomaly detection & smart alerts',
              'Slack, email & webhook notifications',
              '90-day latency history',
              'p95 / p99 percentile charts'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        © {new Date().getFullYear()} API Latency Alert Dashboard. All rights reserved.
      </footer>
    </main>
  )
}

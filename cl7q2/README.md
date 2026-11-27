# Atrios Standard Campaigns

One standard campaign per category. Start every new campaign from these. Email steps left, LinkedIn right.


## Lead acquisition (Paid vendor meeting)

- **Goal:** Book a qualified lead into a paid 30-min call with one vendor.
- **Who:** The operator who owns the decision (Head of People, Finance or Ops, or the CEO under ~20 people) at companies that pass the vendor's bar. Benefits: People Ops / HR / Finance only, never recruiting or talent acquisition.
- **Trigger:** Always start from a signal: benefits renewal (Form 5500), new role in the last 90 days, new funding round, or a relevant job posting.
- **Built from:** v2 (11/16): Monaco review of 61 replies (timing and 'happy with our broker' were the top no's; nearly all replies came on the first touch) + Skyler's emails (numbered yes/no must-haves, ~34 calls in a week). Plus the 6.6x reply lift from adding LinkedIn.
- **Fill in:** `{{trigger_line}} {{topic}} {{vendor}} {{vendor_one_liner}} {{payout}} {{deliverable}} {{gates}} {{value_line}} {{urgency_line}}`


**Day 0 · LinkedIn · Connect request (no pitch)**

> Hi {{recipient.first_name}}, I'm {{sender.first_name}} from Atrios (a16z speedrun). I work with a lot of teams like {{recipient.company}} on {{topic}}. Would love to connect.


**Day 0 · Email · Email 1: trigger question** · Subject: `{{recipient.company}} x {{vendor}} (${{payout}} for 30 min)`

> Hi {{recipient.first_name}},
>
> {{trigger_line}}
>
> {{vendor}} {{vendor_one_liner}}. Through Atrios you get:
> - ${{payout}} for a 30-min call and quick feedback after, whether or not you switch
> - {{deliverable}}
>
> Even if you're happy with your current setup, it's a free second opinion.
>
> To make sure the ${{payout}} goes through, does {{recipient.company}}:
> {{gates}}
>
> If so, reply with a few times this week or next (and your time zone) and I'll book it.
>
> {{sender.first_name}}
> Atrios, backed by a16z speedrun


**Day 2 · LinkedIn · Message (if connected)**

> Thanks for connecting, {{recipient.first_name}}! Sent you a quick note about {{vendor}}. Short version: ${{payout}} for 30 min, plus {{deliverable}}. Worth a look?


**Day 3 · Email · Email 2: value add (not a bump)** · Subject: `Re: {{recipient.company}} x {{vendor}} (${{payout}} for 30 min)`

> Hey {{recipient.first_name}}, one more useful detail: {{value_line}}
>
> {{urgency_line}} If that's worth 30 minutes (and ${{payout}}), send a couple of times and I'll set it up.
>
> {{sender.first_name}}


**Day 7 · Email · Email 3: right person?** · Subject: `Re: {{recipient.company}} x {{vendor}} (${{payout}} for 30 min)`

> Hi {{recipient.first_name}}, last note from me. If someone else at {{recipient.company}} owns {{topic}}, who should I send this to? Happy to set it up for them instead.
>
> {{sender.first_name}}


## Vendor acquisition (Get a partner onto Atrios)

- **Goal:** Get a company to list a perk on Atrios and take meetings from our founders.
- **Who:** Partnerships, startup-program or growth leads (Head/Director) at tools our founders ask for.
- **Trigger:** Founders keep asking for the tool, a competitor is already on Atrios, or they run a startup program.
- **Built from:** Community Perks + Startup Vendors (7-13% reply, 9 positive, 2 meetings). v2 (11/16): warm replies stalled without a concrete next step, so add a same-day reply with two times.
- **Fill in:** `{{similar_partner}} {{similar_trigger}}`


**Day 0 · LinkedIn · Connect request**

> Hi {{recipient.first_name}}, I run GTM at Atrios. {{recipient.company}} keeps coming up with the founders we work with. Would love to connect.


**Day 0 · Email · Email 1: the ask** · Subject: `{{recipient.company}} perks for the Atrios community`

> Hey {{recipient.first_name}},
>
> {{recipient.company}} keeps coming up when our founders ask what to use. Atrios is a community of 4,000+ founders, operators and investors, backed by a16z speedrun. Our tastemakers share the tools they use through their newsletters, communities and events, and our agent recommends tools to founders right when they need them.
>
> Would you be open to putting a {{recipient.company}} perk in front of them? Setup takes about 10 minutes on our side.
>
> {{sender.first_name}}


**Day 2 · LinkedIn · Message (if connected)**

> Thanks for connecting! Quick example of how it works: our agent recommends {{similar_partner}} anytime a founder hits {{similar_trigger}}. What's the moment a startup should be using {{recipient.company}}?


**Day 4 · Email · Email 2: trigger question** · Subject: `Re: {{recipient.company}} perks for the Atrios community`

> Hey {{recipient.first_name}},
>
> For example, our agent recommends Rho anytime a founder raises and needs somewhere to park the cash. What do those triggers look like for your team?
>
> {{sender.first_name}}


**Day 7 · LinkedIn · Message**

> {{recipient.first_name}}, does {{recipient.company}} have a startup program today? Would love to know how we become a partner.


**Day 8 · Email · Email 3: right person?** · Subject: `Re: {{recipient.company}} perks for the Atrios community`

> Hey {{recipient.first_name}}, following up. Does {{recipient.company}} have a startup program? If you're not the right person, who should I talk to?
>
> {{sender.first_name}}


**Day 9 · Email · On a warm reply (same day)** · Subject: `Re: {{recipient.company}} perks for the Atrios community`

> Love it, {{recipient.first_name}}! Easiest next step is a 15-min setup call. Does Tue 2pm or Wed 11am ET work? I'll send the invite and come with a draft perk so it's mostly a yes/no.
>
> {{sender.first_name}}


## Community builder activation (Relationship first)

- **Goal:** Start a real relationship with people who run founder communities, then offer a co-branded perks page or an event.
- **Who:** Community leads, event hosts, newsletter writers, accelerator and program managers.
- **Trigger:** They run or recently launched a community, event series or newsletter.
- **Built from:** Jordan's Connect + Coffee: 44% reply (16 of 36), 5 positive, 0 meetings yet. No pitch until they reply. v2 (11/16): the after-reply step now names a concrete offer and two days.
- **Fill in:** `{{shared_context}} (e.g. prev. CoS at NYC Founders Club)`


**Day 0 · LinkedIn · Connect request**

> Hi {{recipient.first_name}}! I run community at Atrios ({{shared_context}}). Saw you also lead community, would love to connect!


**Day 2 · LinkedIn · Message (if connected)**

> Would love to grab coffee (or hop on a quick call) sometime and hear what you're building at {{recipient.company}}!


**Day 5 · Email · Email 1 (only if no LinkedIn reply)** · Subject: `Coffee?`

> Hi {{recipient.first_name}},
>
> I run community at Atrios and have been following what you're building at {{recipient.company}}. Would love to grab coffee or a quick call and swap notes on what's working with your members.
>
> {{sender.first_name}}


**Day 9 · LinkedIn · Message (after they reply)**

> Love it! One idea: we build co-branded perks pages for communities, with exclusive deals on tools your members already use, and you earn when they use them. Want me to put together a first version for {{recipient.company}}? Happy to walk you through it Tue or Wed, whichever is easier.


## Tastemaker activation (Turn a signup into intros)

- **Goal:** Get a signed-up tastemaker to make their first intro.
- **Who:** Tastemakers with 0-1 intros, ideally LinkedIn-synced so we can name real people in their network.
- **Trigger:** Someone in their network just raised, changed roles, or is hiring.
- **Built from:** C1 fresh-raise outreach (a named person + named perks + their reward). Always name a real person, never a generic ask.
- **Fill in:** `{{contact_name}} {{contact_company}} {{signal}} {{need}} {{perk_1}} {{perk_2}} {{tm_reward}}`


**Day 0 · Email · Email 1: named intro** · Subject: `{{contact_name}} at {{contact_company}}`

> Hey {{recipient.first_name}},
>
> Saw {{contact_name}} {{signal}} 🎉 That's usually when they're setting up {{need}}. Through Atrios they'd get {{perk_1}} and {{perk_2}}.
>
> Know {{contact_name}}? If they take a call, you earn {{tm_reward}}. Say the word and I'll write a 1-line intro you can forward.
>
> {{sender.first_name}}


**Day 2 · LinkedIn · Message**

> Hey {{recipient.first_name}}, quick one: {{contact_name}} at {{contact_company}} {{signal}}. If you know them, I'll draft the intro and you just forward it ({{tm_reward}} to you if they take the call).


**Day 5 · Email · Email 2: two new names** · Subject: `Re: {{contact_name}} at {{contact_company}}`

> Hey {{recipient.first_name}}, if {{contact_name}} isn't a fit, two others in your network just {{signal}}: {{contact_2}} and {{contact_3}}. Want me to set up either?
>
> {{sender.first_name}}


## Re-engagement (Leads who went quiet)

- **Goal:** Get a reply from leads who showed interest, met a vendor, or booked and dropped.
- **Who:** Leads with a past positive reply, a held meeting with no next step, or a cancelled booking.
- **Trigger:** 7+ days of silence after interest or a meeting. Max 3 touches.
- **Built from:** Superposition quiet-lead email (one-letter reply, answers within the hour) and the max-3 follow-up rule.
- **Fill in:** `{{vendor}} {{next_vendor}} {{next_payout}} {{signal_opener}}`


**Day 0 · Email · Email 1: one-letter reply** · Subject: `Quick question about {{vendor}}`

> Hi {{recipient.first_name}},
>
> Where did you land with {{vendor}}? Just reply with a letter:
> A. Moving forward
> B. Interested, but not right now
> C. Not a fit
> D. Something else (tell me)
>
> {{sender.first_name}}


**Day 2 · LinkedIn · Message**

> Hi {{recipient.first_name}}, sent you a one-letter question about {{vendor}}. If it's a C, no worries, I can point you to something that fits better.


**Day 5 · Email · Email 2: next best vendor** · Subject: `Re: Quick question about {{vendor}}`

> Hey {{recipient.first_name}}, {{signal_opener}} Since you met with {{vendor}} a while back, a few others would pay to meet you now, starting with {{next_vendor}} (${{next_payout}} for a 30-min call). Reply with a yes and I'll set it up.
>
> {{sender.first_name}}

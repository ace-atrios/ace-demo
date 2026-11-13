# Atrios Campaign Library

Every standardized campaign we've run, by type, with each step (email + LinkedIn). Reference this before building any new campaign. Copy is pulled live from Monaco; stats are from Monaco's Friday report (Nov 13). **STANDARD** = the current template to copy for that type.

## What works (from the data)
- Add LinkedIn: email-only replies 1.0%, email + LinkedIn 6.6%, LinkedIn-only 26%.
- Relationship first: Connect + Coffee (no pitch) 41.7% vs cold paid-call pitch ~1%.
- Target operators: Head/Director 5.5% and Manager 8.6% reply vs Founder/C-level 1.9%.
- Lead with a real trigger in line 1 (renewal date, new role, new round). Broad untriggered lists flop.
- Subject format that books: `{Company} x {Vendor} ($N for 30 min)`.
- Verify emails before loading anything over 5% bounce.
- Kill rule: 0 replies after ~150 reached, pause and move capacity.

## Checklist for a new campaign
1. Pick the type below and start from its STANDARD card.
2. Name it `{Vendor or type} {Trigger} - {Sender} ({date})` so it lands in the right section here.
3. Line 1 = the trigger. Then who we are (one line), the vendor (one line), What you get (2 bullets), the bar to qualify, and "reply with a couple of times".
4. Add a LinkedIn connect step on day 0, plus a 2-line bump email on day 3.
5. List: operators over founders, verified emails, small first batch (~100).
6. After a week: check replies and positive replies here, keep or kill.

To update this page: Ace rebuilds it from Monaco (`~/work/playbook_campaigns`: pull.py, build.py, render.py). Ask Ace to refresh, or to mark a new STANDARD.


## Lead acquisition


### Trigger: benefits renewal (Form 5500)


#### Corridor renewal · **STANDARD**

Monaco: _Corridor Renewals (Form 5500) - Allan (11/9) split_ (active) · variants: Corridor Renewals (Form 5500) - Jordan (11/9), Corridor Renewals (Form 5500) - Will (11/9), Corridor Renewals (Form 5500) - Taylor (11/9)


**Results:** 248 reached · 1.2% reply · 3 positive · 49% open


**Notes:** Same copy per sender (Allan, Will, Jordan, Taylor). Jordan's version has the most positive replies (2).


**Step 1 · Email · Day 0** · Subject: `{{recipient.company}} x Corridor ($500 for 30 min)`


> Hi {{recipient.first_name}},
>
> Looks like {{recipient.company}}'s health plan is up for renewal in the new year, which is the window to see what else is out there.
>
> I'm Allan, I run GTM at Atrios, backed by a16z speedrun. We match founders and operators with software and services that fit their company, and pay them to evaluate it.
>
> One of our partners, Corridor, is an AI-native benefits broker for teams of 5 to 500, backed by Bain Capital Ventures. They shop the whole market in minutes and give you a dedicated advisor who runs your renewal end to end, at no cost to you.
>
> **What you get:**
> - $500 from Atrios for a 30-min call, whether or not you switch
> - A free benchmark of your current plan against the market
>
> To qualify, {{recipient.company}} needs 5+ full-time US W-2 employees, a US incorporation, and a health plan renewing in the next 3 months.
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> Allan


**Step 2 · Email · +3 days** · Subject: `{{recipient.company}} x Corridor ($500 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Most plans renew January 1, so the next few weeks are the last chance to compare before you're locked in for another year. Worst case, you get a free benchmark and $500 for 30 minutes.
>
> Want me to set it up?
>
> Best,
> Allan


#### Ignition renewal

Monaco: _Ignition Renewals (Form 5500) - Allan (11/9) split_ (active) · variants: Ignition Renewals (Form 5500) - Jordan (11/9), Ignition Renewals (Form 5500) - Will (11/9), Ignition Renewals (Form 5500) - Taylor (11/9)


**Results:** 243 reached · 0.0% reply · 0 positive · 60% open


**Notes:** Same copy per sender. 60%+ opens, 0 replies so far: needs a LinkedIn step + shorter step 1.


**Step 1 · Email · Day 0** · Subject: `{{recipient.company}} x Ignition ($165 for 30 min)`


> Hi {{recipient.first_name}},
>
> Looks like {{recipient.company}}'s health plan is up for renewal in the new year, which is the window to see what else is out there.
>
> I'm Allan, I run GTM at Atrios, backed by a16z speedrun. We match founders and operators with software and services that fit their company, and pay them to evaluate it.
>
> One of our partners, Ignition Benefits, is a YC-backed, AI-native, data-driven benefits broker for small and mid-sized businesses. They benchmark your plan against the market and run your renewal end to end.
>
> **What you get:**
> - $165 from Atrios for a 30-min call, whether or not you switch
> - A free cost analysis of your current benefits
>
> To qualify, {{recipient.company}} needs 24-350 full-time employees, a US incorporation, and benefits through a traditional broker or Gusto today (not a PEO).
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> Allan


**Step 2 · Email · +3 days** · Subject: `{{recipient.company}} x Ignition ($165 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> With renewal coming up, now's when a second opinion is most useful. Worst case, you walk away with a free cost analysis and $165 for your time.
>
> Want me to set it up?
>
> Best,
> Allan


#### Ignition Tier 1 renewals (email-only)

Monaco: _Ignition Lead Acq Tier1 Renewals - Allan (11/6) (email-only)_ (active) · variants: Ignition Lead Acq Tier1 Renewals - Allan (11/6) [people leaders] (email-only)


**Results:** 239 reached · 0.4% reply · 0 positive · 68.9% open


**Notes:** People-leaders slice (2.9%, 1 positive) beats the general slice (0.4%).


**Step 1 · Email · Day 0** · Subject: `{{recipient.company}} x Ignition ($165 for 30 min)`


> Hi {{recipient.first_name}},
>
> {{recipient.company}}'s benefits renew April 1, and the real decisions usually get made in the next 60-90 days. Now's the window to see what else is out there before you lock in another year.
>
> I'm {{sender.first_name}} from Atrios, backed by a16z speedrun. We match founders and operators with software that fits their company, and pay them to evaluate it.
>
> One of our partners, Ignition Benefits, is a YC-backed, AI-native, data-driven benefits broker for small and mid-sized businesses. They benchmark your plan against the market and run your renewal end to end.
>
> **What you get:**
> - $165 from Atrios for a 30-min call, whether or not you switch
> - A free cost analysis of your current benefits
>
> To qualify, {{recipient.company}} needs 24-350 full-time employees, a US incorporation, and benefits through a traditional broker or Gusto today (not a PEO).
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> {{sender.first_name}}


**Step 2 · Email · +3 days** · Subject: `{{recipient.company}} x Ignition ($165 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> If your renewal is in the spring, this is the best time to benchmark before your current broker sends the renewal. Worst case, you walk away with a free cost analysis and $165 for your time.
>
> Want me to set it up?
>
> Best,
> {{sender.first_name}}


#### Hammock renewal + LinkedIn

Monaco: _Hammock Renewals (Form 5500) - Allan (11/9) + LinkedIn v2_ (active)


**Results:** 4 reached · 0.0% reply · 0 positive


**Notes:** Too new to judge.


**Step 1 · LinkedIn connect · Day 0**


> Hey {{recipient.first_name}}, I'm {{sender.first_name}} from Atrios. Just sent you a note about a paid 30-min intro to Hammock (startup health benefits, no surprise renewals). Would love to connect.


**Step 2 · Email · same day** · Subject: `{{recipient.company}} x Hammock ($140 for 30 min)`


> Hi {{recipient.first_name}},
>
> Looks like {{recipient.company}}'s health plan is up for renewal in the new year, which is the window to see what else is out there.
>
> I'm {{sender.first_name}} from Atrios, backed by a16z speedrun. We match founders and operators with software and services that fit their company, and pay them to evaluate it.
>
> One of our partners, Hammock, gives startups health insurance with no admin work and no surprise renewals: you set a fixed health budget and each employee picks their own plan. Unused budget can even go toward wellness like gym memberships and saunas, tax-free. No PEO, no paperwork. Backed by a16z speedrun.
>
> **What you get:**
> - $140 from Atrios for a 30-min call, whether or not you sign up
> - 3 months free if you do
>
> To qualify, {{recipient.company}} needs 5+ US W-2 employees, VC backing, and no PEO today.
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> {{sender.first_name}}


**Step 3 · Email · +3 days** · Subject: `{{recipient.company}} x Hammock ($140 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Renewal is when premiums jump. With Hammock you set the budget, so next year's cost doesn't surprise you. Worst case, you get $140 for 30 minutes and a look at a simpler setup.
>
> Want me to set it up?
>
> Best,
> {{sender.first_name}}


### Trigger: new role


#### Ignition new leader (email + LinkedIn) · **STANDARD**

Monaco: _Ignition Lead Acq A - Allan (11/6) [people leaders]_ (active) · variants: Ignition Lead Acq A - Allan (11/6)


**Results:** 5 reached · 20.0% reply · 1 positive


**Notes:** Best lead-acq reply rate so far (12-20%) but small sample. Has the LinkedIn connect step the others lack.


**Step 1 · LinkedIn connect · Day 0**


> Hey {{recipient.first_name}}, I'm {{sender.first_name}} from Atrios, an a16z speedrun-backed startup. We match people leaders with software that fits their company and pay them to evaluate it. Just sent you a note by email!


**Step 2 · Email · same day** · Subject: `{{recipient.company}} x Ignition ($165 for 30 min)`


> Hi {{recipient.first_name}},
>
> Saw you recently stepped into {{recipient.title}} at {{recipient.company}}, which is usually when benefits get a fresh look.
>
> I'm {{sender.first_name}} from Atrios, backed by a16z speedrun. We match founders and operators with software that fits their company, and pay them to evaluate it.
>
> One of our partners, Ignition Benefits, is a YC-backed, AI-native, data-driven benefits broker for small and mid-sized businesses. They benchmark your plan against the market and run your renewal end to end.
>
> **What you get:**
> - $165 from Atrios for a 30-min call, whether or not you switch
> - A free cost analysis of your current benefits
>
> To qualify, {{recipient.company}} needs 24-350 full-time employees, a US incorporation, and benefits through a traditional broker or Gusto today (not a PEO).
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> {{sender.first_name}}


**Step 3 · Email · +3 days** · Subject: `{{recipient.company}} x Ignition ($165 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Most plans renew in the new year, so now's the window to see what else is out there before you're locked in. Worst case, you walk away with a free cost analysis and $165 for your time.
>
> Want me to set it up?
>
> Best,
> {{sender.first_name}}


#### Hammock new leader

Monaco: _Hammock Lead Acq A - Allan (11/6)_ (active) · variants: Hammock Lead Acq A - Allan (11/6) [people leaders], Hammock Lead Acq A - Allan (11/6) [HR leaders]


**Results:** 15 reached · 0.0% reply · 0 positive


**Step 1 · LinkedIn connect · Day 0**


> Hey {{recipient.first_name}}, I'm {{sender.first_name}} from Atrios, an a16z speedrun-backed startup. We match finance leaders with software that fits their company and pay them to evaluate it. Just sent you a note by email!


**Step 2 · Email · same day** · Subject: `{{recipient.company}} x Hammock ($140 for 30 min)`


> Hi {{recipient.first_name}},
>
> Saw you recently stepped into {{recipient.title}} at {{recipient.company}}, which is usually when benefits get a fresh look.
>
> I'm {{sender.first_name}} from Atrios, backed by a16z speedrun. We match founders and operators with software that fits their company, and pay them to evaluate it.
>
> One of our partners, Hammock, makes health benefits easy for startups: you set a health budget from your first hire and employees pick their own plan. No broker, no PEO, no paperwork. Backed by a16z speedrun.
>
> **What you get:**
> - $140 from Atrios for a 30-min call, whether or not you sign up
> - 3 months free if you do
>
> To qualify, {{recipient.company}} needs 5+ US W-2 employees, VC backing, and no PEO today.
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> {{sender.first_name}}


**Step 3 · Email · +3 days** · Subject: `{{recipient.company}} x Hammock ($140 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Benefits are easiest to sort out before your next hire. Worst case, you get $140 for 30 minutes and a look at a simpler setup.
>
> Want me to set it up?
>
> Best,
> {{sender.first_name}}


#### Automat new sales leaders

Monaco: _Automat New Sales Leaders - Jordan (11/10)_ (active)


**Results:** 36 reached · 0.0% reply · 0 positive · 38.9% open


**Notes:** Testimonial-style ('our team uses it'). 7.7% bounce: verify emails before load.


**Step 1 · Email · Day 0** · Subject: `{{recipient.company}} x Automat ($175 for 30 min)`


> Hi {{recipient.first_name}},
>
> Congrats on the new role at {{recipient.company}}! Since the first 90 days are when most sales leaders decide what their team runs on, I wanted to share something that's been a game changer for our team.
>
> Our team at Atrios started using Automat a few months ago. I'll admit we were skeptical at first, but it now handles a lot of the follow-ups, CRM updates, and research that used to eat our week, and we've been blown away by how much more we get done.
>
> To be upfront: I'm not with Automat. I'm Jordan, and I run community partnerships at Atrios, backed by a16z speedrun. We match founders and operators with software worth their time, and pay them to evaluate it. Automat (YC W23) is one of our partners, and given the new role I thought you might want a look.
>
> **What you get:**
> - $175 from Atrios for a 30-min call, whether or not you buy
> - A free map of which workflows an AI employee could take over first
> - Your first month free if you sign on for a year
>
> To qualify, {{recipient.company}} needs $2M+ in annual revenue, and it's for business use.
>
> Worth 30 minutes? Reply with a couple of times and I'll get it booked.
>
> Take care,
> Jordan


**Step 2 · Email · +3 days** · Subject: `{{recipient.company}} x Automat ($175 for 30 min)`


> Quick bump, {{recipient.first_name}}. Worst case you walk away with a workflow map and $175 for your time. Want me to set it up?
>
> Take care,
> Jordan


#### Arvo R&D credit (new finance leaders)

Monaco: _Arvo R&D credit (new finance leaders) - Jordan (11/9)_ (active)


**Results:** 15 reached · 0.0% reply · 0 positive · 40.0% open


**Notes:** Free-deliverable angle (R&D credit estimate). Too new to judge.


**Step 1 · Email · Day 0** · Subject: `{{recipient.company}}'s 2026 R&D tax credit`


> Hi {{recipient.first_name}},
>
> Congrats on the new role at {{recipient.company}}! I'm Jordan from Atrios, backed by a16z speedrun. We match founders and operators with the best software and services for their company, and get them perks for it.
>
> One of our partners, Arvo Tech, specializes in R&D tax credits for tech companies, and they often find it's been left on the table when a new finance lead comes in. If {{recipient.company}} has engineers building product in the US, you likely qualify, and early-stage companies can even apply up to $500K a year against payroll taxes before they're profitable.
>
> Arvo will run a **free expert estimate** of your 2026 credit, plus free setup if you go ahead. Worth 30 minutes before year-end? Reply with a couple of times that work and I'll get it booked.
>
> Take care,
> Jordan


**Step 2 · Email · +3 days** · Subject: `{{recipient.company}}'s 2026 R&D tax credit`


> Hi {{recipient.first_name}}, quick bump on this.
>
> With 2026 wrapping up, now's the easiest time to document this year's R&D before tax season, and the estimate is free with no obligation. Want me to set up 30 minutes with Arvo?
>
> Take care,
> Jordan


### Trigger: new funding round


#### Hammock new round

Monaco: _Hammock Lead Acq B - Allan (11/6)_ (active) · variants: Hammock Lead Acq B - Allan (11/6) [finance leaders]


**Results:** 101 reached · 1.0% reply · 0 positive · 42.9% open


**Notes:** Broad funding trigger, 1.0%. Untriggered/broad lists underperform.


**Step 1 · LinkedIn connect · Day 0**


> Hey {{recipient.first_name}}, I'm {{sender.first_name}} from Atrios, an a16z speedrun-backed startup. We match founders with software that fits their company and pay them to evaluate it. Just sent you a note by email!


**Step 2 · Email · same day** · Subject: `{{recipient.company}} x Hammock ($140 for 30 min)`


> Hi {{recipient.first_name}},
>
> Saw {{recipient.company}} just closed a new round, which is usually when benefits come up next.
>
> I'm {{sender.first_name}} from Atrios, backed by a16z speedrun. We match founders and operators with software that fits their company, and pay them to evaluate it.
>
> One of our partners, Hammock, makes health benefits easy for startups: you set a health budget from your first hire and employees pick their own plan. No broker, no PEO, no paperwork. Backed by a16z speedrun.
>
> **What you get:**
> - $140 from Atrios for a 30-min call, whether or not you sign up
> - 3 months free if you do
>
> To qualify, {{recipient.company}} needs 5+ US W-2 employees, VC backing, and no PEO today.
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> {{sender.first_name}}


**Step 3 · Email · +3 days** · Subject: `{{recipient.company}} x Hammock ($140 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Benefits are easiest to sort out before your next hire. Worst case, you get $140 for 30 minutes and a look at a simpler setup.
>
> Want me to set it up?
>
> Best,
> {{sender.first_name}}


#### Ignition new round

Monaco: _Ignition Lead Acq B - Allan (11/6)_ (active)


**Results:** 16 reached · 6.2% reply · 0 positive


**Step 1 · LinkedIn connect · Day 0**


> Hey {{recipient.first_name}}, I'm {{sender.first_name}} from Atrios, an a16z speedrun-backed startup. We match founders with software that fits their company and pay them to evaluate it. Just sent you a note by email!


**Step 2 · Email · same day** · Subject: `{{recipient.company}} x Ignition ($165 for 30 min)`


> Hi {{recipient.first_name}},
>
> Saw {{recipient.company}} just closed a new round, which is usually when benefits come up next.
>
> I'm {{sender.first_name}} from Atrios, backed by a16z speedrun. We match founders and operators with software that fits their company, and pay them to evaluate it.
>
> One of our partners, Ignition Benefits, is a YC-backed, AI-native, data-driven benefits broker for small and mid-sized businesses. They benchmark your plan against the market and run your renewal end to end.
>
> **What you get:**
> - $165 from Atrios for a 30-min call, whether or not you switch
> - A free cost analysis of your current benefits
>
> To qualify, {{recipient.company}} needs 24-350 full-time employees, a US incorporation, and benefits through a traditional broker or Gusto today (not a PEO).
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> {{sender.first_name}}


**Step 3 · Email · +3 days** · Subject: `{{recipient.company}} x Ignition ($165 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Most plans renew in the new year, so now's the window to see what else is out there before you're locked in. Worst case, you walk away with a free cost analysis and $165 for your time.
>
> Want me to set it up?
>
> Best,
> {{sender.first_name}}


### No trigger (ICP list)


#### Corridor ICP list

Monaco: _Corridor Lead Acq - Will (11/3)_ (active)


**Results:** 183 reached · 1.6% reply · 1 positive


**Step 1 · Email · Day 0** · Subject: `{{recipient.company}} x Corridor ($500 for 30 min)`


> Hi {{recipient.first_name}},
>
> I'm Will - I run partnerships at Atrios, backed by a16z speedrun. We connect founders and operators with companies worth their time, and we pay them to take the meeting.
>
> I'm reaching out because one of our partners, Corridor, is an AI-native benefits broker for teams of 5 to 500, backed by Bain Capital Ventures. They shop the whole market in minutes instead of weeks, and you get a dedicated advisor who runs your renewal end to end at no cost to you. Hundreds of startups, clinics, schools and manufacturers already use them.
>
> **What you get:**
> - $500 from Atrios for a 30-min call, whether or not you switch
> - A free benchmark of your current plan against the market
> - A $700 welcome bonus if you move over
>
> To qualify, {{recipient.company}} needs 5+ full-time US W-2 employees, a US incorporation, and either a health plan renewing in the next 3 months or plans to offer one for the first time.
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> Will


**Step 2 · Email · +3 days** · Subject: `{{recipient.company}} x Corridor ($500 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Most plans renew January 1, so now's the window to see what else is out there before you're locked in for another year. Worst case, you walk away with a free benchmark of your current plan and $500 for your time.
>
> Want me to set it up?
>
> Best,
> Will


#### Rockwell v3 (20-300 employees)

Monaco: _Rockwell Lead Acq v3 - Will (11/10) 20-300_ (active) · variants: Rockwell Lead Acq v2 - Will (11/3)


**Results:** 21 reached · 0.0% reply · 0 positive · 33.3% open


**Notes:** v3 opens with the money ('I'll be direct: $330'). v2 had a LinkedIn connect step.


**Step 1 · Email · Day 0** · Subject: `{{recipient.company}} x Rockwell ($330 for 30 min)`


> Hi {{recipient.first_name}},
>
> I'll be direct: you'll get $330 for a 30-minute call with Rockwell about {{recipient.company}}'s health benefits.
>
> I'm Will, I run partnerships at Atrios, backed by a16z speedrun. We match operators with companies worth their time, and pay them to take the meeting.
>
> Rockwell is a benefits brokerage built for teams of 20 to 300. Every broker pitch sounds the same on paper, so they skip the pitch: on the first call they run a full analysis of your current plan and show you the employee concierge your team texts for scheduling, refills and bill questions. Most teams that take that first call move forward.
>
> **What you get:**
> - $330 from Atrios for the 30-min call, whether or not you switch
> - A free analysis of your current benefits plan
> - A $1,750 welcome bonus if you switch to Rockwell
>
> To qualify, {{recipient.company}} needs 20+ full-time US W-2 employees and a traditional broker today (not a PEO).
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> Will


**Step 2 · Email · +3 days** · Subject: `{{recipient.company}} x Rockwell ($330 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Switching brokers takes a couple of months, so the best time to look is well before your renewal. Worst case, you get a free analysis of your plan and $330 for 30 minutes.
>
> Want me to grab a time?
>
> Best,
> Will


#### Charlemagne Labs (paused)

Monaco: _Charlemagne Labs Lead Acq - Will (11/6)_ (paused)


**Notes:** Paused.


**Step 1 · LinkedIn connect · Day 0**


> Hey {{recipient.first_name}}, I run partnerships at Atrios, an a16z speedrun-backed startup. We match security leaders with software that fits their company and pay them to evaluate it. Just sent you a note by email!


**Step 2 · Email · same day** · Subject: `{{recipient.company}} x Charlemagne Labs ($165 for 30 min)`


> Hi {{recipient.first_name}},
>
> The $6.3B Binance hack started with a fake job interview over a chat app. An engineer downloaded an "assignment" onto his work laptop, and the endpoint tools didn't catch it (Binance's own report, Nov 3).
>
> I'm Will, I run partnerships at Atrios, backed by a16z speedrun. We match security and IT leaders with software that fits their company, and pay them to evaluate it.
>
> One of our partners, Charlemagne Labs, built Agent Charley: a security assistant that runs on each employee's device and stops phishing and data leaks at the moment of the click, including inside Signal, WhatsApp, Telegram and Slack, without breaking encryption. SOC 2 Type II, no usage-based costs.
>
> **What you get:**
> - $165 from Atrios for a 30-min demo, whether or not you buy
> - A clear look at the messaging-app gaps your email and endpoint tools don't see
>
> To qualify, {{recipient.company}} needs 10+ employees working on company-managed laptops.
>
> Worth 30 minutes? Reply with a couple of times that work and I'll get it booked.
>
> Best,
> Will


**Step 3 · Email · +3 days** · Subject: `{{recipient.company}} x Charlemagne Labs ($165 for 30 min)`


> Hey {{recipient.first_name}}, quick bump on this.
>
> Teams that have met Charlemagne liked that it catches the human mistakes other tools miss: phishing links in chat apps, sketchy files, sensitive data pasted into the wrong thread. Worst case, you get $165 for 30 minutes and a clear view of that risk.
>
> Want me to set it up?
>
> Best,
> Will


## Vendor acquisition


### Partners we want on Atrios


#### Community Perks (email + LinkedIn) · **STANDARD**

Monaco: _Community Perks - Allan (10/27)_ (active)


**Results:** 52 reached · 15.4% reply · 6 positive


**Notes:** Best vendor-acq performer: 15.4% reply, 6 positive, 1 meeting. Watch bounce (14.8%).


**Step 1 · Email · Day 0** · Subject: `{{recipient.company}} perks for the Atrios community`


> Hey {{recipient.first_name}}!
>
> Hope your week's going well. We're building out the perks our founders ask for most, and {{recipient.company}} is at the top of our list.
>
> Quick context on us: Atrios is a community of 4,000+ founders, operators and investors. Our concentration is early-stage venture-backed startups, and the whole point is getting them plugged into the ecosystem while they are still building.
>
> Our tastemakers share recommendations on the tools they actually use with their own networks, through their newsletters, communities, events and social. Our agent suggests tools to founders based on what they are building. We are live with Stripe, Brex, Deel and Rho, and we are an a16z Speedrun company.
>
> We would love to share {{recipient.company}} with the community and promote you to our 4,000+ founders. Let me know what perk would be best to put in front of them and I will take it from there.
>
> Best,
> {{sender.first_name}}


**Step 2 · LinkedIn connect · +1 day**


> Hey {{recipient.first_name}}, I run GTM at Atrios, a community of founders, operators and investors who recommend tools to the startups they work with. {{recipient.company}} keeps coming up. Would love to connect.


**Step 3 · LinkedIn message · same day**


> Thanks for connecting, {{recipient.first_name}}!
>
> I sent you a note earlier this week about putting a {{recipient.company}} perk in front of our founders. Our tastemakers share tools they actually use through their own newsletters, communities and events, and our agent recommends software to founders based on what they are building.
>
> We would love to share {{recipient.company}} with the community and promote you to our 4,000+ founders. Let me know what perk you would want in front of them.
>
> {{sender.first_name}}


**Step 4 · LinkedIn message · +5 days**


> {{recipient.first_name}}, following up here!
>
> Does {{recipient.company}} currently have a startup program? Would love to know how we go about becoming a partner.
>
> {{sender.first_name}}


**Step 5 · Email · +2 days** · Subject: `{{recipient.company}} perks for the Atrios community`


> Hey {{recipient.first_name}},
>
> For ex. our agent recommends Rho anytime a founder raises and needs somewhere to park the cash.
>
> What do those triggers look like for your team?
>
> {{sender.first_name}}


**Step 6 · Email · +4 days** · Subject: `{{recipient.company}} perks for the Atrios community`


> Hey {{recipient.first_name}}, following up here!
>
> Does {{recipient.company}} currently have a startup program? How would we go about becoming a partner?
>
> {{sender.first_name}}


#### Startup Vendors (LinkedIn-first)

Monaco: _Startup Vendors - Allan (10/26)_ (active)


**Results:** 204 reached · 6.9% reply · 11 positive · 42.5% open


**Notes:** 6.9% reply, 11 positive, 1 meeting. LinkedIn x3 then email x3.


**Step 1 · LinkedIn connect · Day 0**


> (blank connection request)


**Step 2 · LinkedIn message · same day**


> Hey {{recipient.first_name}}, thanks for connecting - I lead GTM at Atrios, backed by a16z speedrun. We have a community of 4,000 tastemakers (founders, investors, community builders, etc.) who recommend software/ solutions with their networks. Would love for {{recipient.company}} to be recommended!


**Step 3 · LinkedIn message · +3 days**


> We also built an agent that recommends our partners to buyers based on what's happening at their company. For ex. our agent recommends Rho anytime a founder raises and needs somewhere to park the cash. What do those triggers look like for your team?


**Step 4 · LinkedIn message · +3 days**


> Hey {{recipient.first_name}}, following up here! Does {{recipient.company}} currently have a Startup program? how would we go about becoming a partner?


**Step 5 · Email · same day** · Subject: `{{recipient.company}} x Atrios`


> Hey {{recipient.first_name}},
>
> Just sent you a note on LinkedIn, figured I'd reach out here too. I'm {{sender.first_name}} - I lead GTM at Atrios, backed by a16z speedrun. We have a community of 4,000 tastemakers (founders, investors, community builders, etc.) who recommend software and solutions to their networks. We also built an agent that recommends our partners to buyers based on what's happening at their company.
>
> Would love for {{recipient.company}} to be recommended!
>
> {{sender.first_name}} {{sender.last_name}}
> **Head of GTM @ Atrios**


**Step 6 · Email · +3 days** · Subject: `{{recipient.company}} x Atrios`


> Hey {{recipient.first_name}},
>
> For ex. our agent recommends Rho anytime a founder raises and needs somewhere to park the cash.
>
> What do those triggers look like for your team?
>
> {{sender.first_name}}


**Step 7 · Email · +3 days** · Subject: `{{recipient.company}} x Atrios`


> Hey {{recipient.first_name}}, following up here!
>
> Does {{recipient.company}} currently have a startup program? How would we go about becoming a partner?
>
> {{sender.first_name}}


#### Vendor Requests (paused)

Monaco: _Vendor Requests (ongoing) - Allan_ (paused) · variants: Vendor Requests - Will (ongoing), Vendor Requests - Jordan (ongoing), Vendor Requests (ongoing) - Taylor


**Notes:** For tools our founders ask for that aren't on Atrios. Paused.


**Step 1 · LinkedIn connect · Day 0**


> Hi {{recipient.first_name}}, I'm Allan, I run GTM at Atrios. Founders in our community keep asking us about {{recipient.company}}. Would love to connect about listing your startup offer.


**Step 2 · Email · same day** · Subject: `{{recipient.company}} on Atrios`


> Hi {{recipient.first_name}},
>
> I'm Allan, I run GTM at Atrios, backed by a16z speedrun. Founders in our community keep asking us about {{recipient.company}}, and we'd love to give them a direct path in.
>
> Atrios is a community of 4,000+ founders, operators and investors, mostly at early-stage startups. Our agent recommends the right tools and services to founders right when they need them, with a perk attached, and our tastemakers share those perks through their newsletters, communities and events.
>
> Would you be open to listing a {{recipient.company}} startup offer on Atrios? If you're not the right person, who should I reach out to?
>
> Best,
> Allan


**Step 3 · Email · +4 days** · Subject: `{{recipient.company}} on Atrios`


> Hey {{recipient.first_name}}, quick bump on this.
>
> {{recipient.company}} keeps coming up when founders ask us what to use. Happy to set up the listing on our side, it takes about 10 minutes.
>
> Worth a quick chat?
>
> Best,
> Allan


#### IntroBridge vendors

Monaco: _IntroBridge vendors - SmartOne.ai - Allan (11/9)_ (active) · variants: IntroBridge vendors - RapidDev - Allan (11/9), IntroBridge vendors - Trust ID - Allan (11/9)


**Results:** 3 reached · 33.3% reply · 0 positive


**Step 1 · Email · Day 0** · Subject: `SmartOne.ai x Atrios`


> Hi {{recipient.first_name}},
>
> Saw SmartOne.ai is rewarding intros to founders and data leaders at AI companies on IntroBridge. We do the same thing at Atrios, with a network built around that buyer.
>
> I'm Allan, I run GTM at Atrios (backed by a16z speedrun). Our community of 3,000+ operators, investors and community builders introduces founders and execs to companies like Rho, Corridor, Deel and Monaco. We pay the person to take the call, so they show up engaged, and you set the criteria for who counts.
>
> For SmartOne.ai, that's founders, CTOs and ML leads at venture-backed AI startups that are training or evaluating models and need labeled data at scale.
>
> Worth 20 minutes to see if it fits?
>
> Best,
> Allan


**Step 2 · Email · +3 days** · Subject: `SmartOne.ai x Atrios`


> Hey {{recipient.first_name}}, quick bump on this.
>
> AI startups are a big share of our network, and plenty are hitting the data-labeling wall right now. Off-criteria meetings and no-shows don't count.
>
> Open to a quick look?
>
> Best,
> Allan


## Tastemaker / community activation


### Community builders


#### Connect + Coffee (LinkedIn only) · **STANDARD**

Monaco: _Community Builders - Campaign 1 - Jordan (10/29)_ (active)


**Results:** 36 reached · 41.7% reply · 9 positive


**Notes:** Play of the week: 41.7% reply, no pitch. Relationship first, Atrios later.


**Step 1 · LinkedIn connect · Day 0**


> Hi {{recipient.first_name}}! I run community at Atrios (+ prev. CoS at NYC Founders Club). Saw you also lead community, would love to connect!


**Step 2 · LinkedIn message · same day**


> Would love to grab coffee (or hop on a quick call) sometime and hear what you’re building at {{recipient.company}}!


#### Perks page pilot

Monaco: _Perks Page Pilot - Community Builders - Jordan (11/2)_ (active) · variants: Perks Page Pilot - Karen (gentle) - Jordan (11/2)


**Notes:** Personalized first line from recipient notes. Needs Jordan's OK per send.


**Step 1 · Email · Day 0** · Subject: `A perks page for your community`


> Hi {{recipient.first_name}},
>
> {{recipient.notes}}
>
> We just launched perks pages: a page of exclusive perks on tools founders actually use (Ro, Deel, Brex and more) that you can share with your community in a newsletter, in Slack, or on your site. Your members get perks they can't get anywhere else, and you get rewarded when they use them.
>
> I'm piloting it with a small group of community builders first, and you were one of the first people I thought of. Ace, our AI, has already put together a starting page based on your community, and you can change anything by texting Ace or editing the page directly.
>
> Want me to have Ace send yours over?
>
> Jordan


### Text campaigns (from Ace)


#### C1 fresh-raise tastemaker text

Text (iMessage), 1 message + 1 follow-up

**Notes:** Allan 10/26-27. Tell a tastemaker about a fresh raise in their network, perks the company gets, and their reward if they intro.


**Step 1 · Text**

> Hey {TM}, saw {Founder} just closed a ${amount} round for {Company} 🎉 Perks they'd get: Superposition 1 month free + 20% off their next hire, Hammock 3 months free on health insurance. Know {Founder}? If they take the call, you'd get AirPods Pro on us (or $300 cash). Say the word and I'll write a 1-line intro you can forward.


**Step 2 · Text (v2)**

> Hey {TM}, {Founder} just raised ${amount} for {Company} 🎉 Right now they're likely making first hires and setting up health insurance. Through Atrios we can get them 1 month free + 20% off Superposition, 3 months free on Hammock, plus a few other perks. How do you know {Founder}? I'll write the intro, you just forward it. Once they take the call, you get AirPods Pro or $300, your pick.


### Event follow-ups (from Ace)


#### Event dinner follow-up (Rockwell 11/10)

Text (iMessage), day after event

**Notes:** Thank-you + vendor host link + 2 extra perks. Same shape planned for Masterworks x Deel.


**Step 1 · Text**

> Hi {Name}, Ace here. Great having you at the Rockwell dinner last night! Rohan and the Rockwell team would love to keep the conversation going. Grab a time here: {link}, or reply with a couple of times and I'll book it for you.
> For the 30-min call you get $330, plus a free benefits savings analysis and a $1,750 bonus if you switch. Eligible for payout: 20+ W-2 employees and not on a PEO.
> Two more that could fit {Company}:
> - Superposition (AI recruiter): $165 for a 30-min call + $1,050 if you hire through them
> - Oyster (EOR): $165 for a call


## Re-engagement


### Monaco AI-drafted


#### Re-engagement (email only)

Monaco: _Re-engagement (Email Only)_ (active)


**Notes:** Copy is AI-drafted per contact at enrollment; template is a skeleton.


**Step 1 · Email · Day 0** · Subject: `Re-engagement`


> Re-engagement


**Step 2 · Email · +3 days** · Subject: `Re: Re-engagement`


> Re-engagement follow-up


**Step 3 · Email · +4 days** · Subject: `Re: Re-engagement`


> Re-engagement follow-up


### Lead feedback (from support@)


#### Quiet-lead vendor feedback (Superposition 11/13)

Email from support@, 1 message

**Notes:** Multiple-choice reply ask to leads who met a vendor and went quiet. 1 reply within the hour.


**Step 1 · Email**

> Subject: Quick question about Superposition
>
> Hi {Name},
>
> We're collecting quick feedback on our vendors. Where did you land with Superposition? Just reply with a letter:
> A. Getting started soon
> B. Interested, but not hiring right now
> C. Not a fit
> D. Something else (tell me)

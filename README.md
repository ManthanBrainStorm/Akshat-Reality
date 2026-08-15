# Akshat Reality Launch

Build a production-quality website for a real estate company called "Akshat Reality", based in Indore, Madhya Pradesh, India.

IMPORTANT:

This is a real paid client project.

Do not treat this as a generic AI website, template, SaaS landing page, or demo.

The website's primary business objective is:

1. Establish trust and credibility

2. Clearly communicate what Akshat Reality does

3. Showcase its projects and services

4. Generate qualified enquiries and direct contacts

5. Make it easy for visitors to call, WhatsApp, or submit an enquiry

The website is primarily a COMPANY PROFILE + LEAD GENERATION WEBSITE.

Do NOT build:

- user authentication

- customer dashboard

- payment system

- property marketplace

- unnecessary database

- complicated property search

- unnecessary backend infrastructure

unless explicitly required later.

==================================================

BUSINESS CONTEXT

==================================================

Company:

Akshat Reality

Location:

Indore, Madhya Pradesh, India

Business:

Real estate agency specializing primarily in residential and commercial plots in Indore.

Core services:

1. Plot Selling & Project Management

2. House Construction Services

Brand positioning:

Trustworthy, professional, transparent, customer-focused, locally knowledgeable, and focused on helping clients make quality real estate investments.

Existing brand tagline:

"The Sign of Trust"

Existing supporting positioning:

"A real investment that pays off for generations"

Use the attached Akshat Reality reference PDF as the primary source of truth for available company information.

Do not invent:

- awards

- certifications

- years of experience

- number of customers

- project statistics

- property prices

- locations

- RERA numbers

- testimonials

- team members

- guarantees

- claims of market leadership

- fake reviews

- fake business metrics

If information is missing, use restrained placeholder content clearly marked for replacement rather than inventing facts.

==================================================

REFERENCE MATERIAL

==================================================

The user has provided:

- Akshat Reality reference PDF

- Akshat Reality logo

Analyze these references before designing.

Use the real logo provided.

Use the supplied company information, founder information, services, projects and testimonials as content references.

Do not copy the existing PDF layout.

The PDF is a CONTENT AND BRAND REFERENCE, NOT A DESIGN TEMPLATE.

The existing brand uses a blue/cyan/deep-blue visual identity.

Preserve the recognizable brand identity but modernize it substantially.

==================================================

DESIGN DIRECTION

==================================================

Create a premium, modern Indian real-estate company website.

Visual personality:

- premium

- trustworthy

- sophisticated

- modern

- professional

- clean

- confident

- human

- conversion-focused

Avoid:

- generic AI-generated website appearance

- excessive gradients

- excessive glassmorphism

- excessive rounded cards

- random floating UI elements

- excessive animations

- huge empty sections

- template-like layouts

- excessive shadows

- cheap stock-photo aesthetics

- excessive blue backgrounds

- unnecessary decorative shapes

- gimmicky 3D effects

Use the existing blue brand identity strategically rather than covering every section in blue.

Suggested visual system:

- deep navy / royal blue for authority

- Akshat blue/cyan as accent

- white / warm off-white backgrounds

- dark neutral text

- restrained borders and shadows

Typography should feel premium and editorial.

Use a strong modern sans-serif font pairing if appropriate.

Maintain excellent spacing and visual hierarchy.

==================================================

WEBSITE ARCHITECTURE

==================================================

The primary website should be a SINGLE-PAGE MARKETING WEBSITE.

Main route:

/

The homepage should contain:

1. Navbar

2. Hero

3. Trust / service strip

4. About / Who We Are

5. Services

6. Projects

7. Why Choose Akshat Reality

8. Founder / Leadership

9. Testimonials

10. Strong CTA

11. Contact / Enquiry

12. Footer

Navbar behavior:

Home -> scroll to top

About -> scroll to #about

Services -> scroll to #services

Projects -> scroll to #projects

Careers -> navigate to /careers

Contact -> scroll to #contact

Enquire Now -> scroll to #contact

Use smooth scrolling.

The navigation must work correctly on desktop and mobile.

==================================================

CAREERS PAGE

==================================================

Create a separate:

/careers

page.

This page should feel like part of the same brand system.

Include:

- Careers hero

- Why work with Akshat Reality

- Company culture / values

- Current openings

- Job cards

- Job details

- Application CTA

- Application form placeholder

- Resume upload architecture if appropriate

Do not invent actual job openings.

If actual openings are not provided, create clearly labeled placeholder job data that is easy to replace from a central data file.

==================================================

PROJECT DETAIL PAGES

==================================================

Projects shown on the homepage should link to dedicated project detail pages.

Use:

/projects/[slug]

Example:

/projects/ayodhya-puram

Create reusable project detail architecture.

Each project page should support:

- Hero image

- Project name

- Location

- Status

- Overview

- Gallery

- Key features

- Project information

- Location/map placeholder

- Enquiry CTA

- WhatsApp CTA

- Contact CTA

Use data-driven project content rather than hardcoding each page separately.

Project information must come from the supplied reference material.

Do not invent missing project facts.

==================================================

HOMEPAGE UX

==================================================

The homepage must tell a clear story:

Visitor arrives

↓

Immediately understands Akshat Reality

↓

Understands what they offer

↓

Sees evidence of credibility

↓

Sees projects

↓

Learns why they should choose the company

↓

Builds trust through founder/testimonials

↓

Gets multiple opportunities to contact the company

Primary conversion actions:

- Call

- WhatsApp

- Enquiry form

Use strong but natural CTA wording.

Avoid aggressive sales tactics.

==================================================

HERO

==================================================

Create a high-impact hero.

Clearly communicate:

WHO:

Akshat Reality

WHAT:

Real estate / residential and commercial plots / construction

WHERE:

Indore

WHY:

Trustworthy guidance and quality real estate opportunities

CTA:

Primary: Get in Touch / Enquire Now

Secondary: Explore Services / Explore Projects

Use a premium real-estate visual.

If the correct real hero image is not supplied, use a clearly replaceable placeholder image.

Do not generate fake company/project imagery that could be mistaken for real client assets.

==================================================

ABOUT

==================================================

Create an editorial-style About section.

Use the supplied company information.

Focus on:

- Indore expertise

- real estate services

- transparency

- personalized guidance

- customer satisfaction

- long-term relationships

Do not simply dump the PDF text onto the page.

Rewrite only where necessary for web readability while preserving the meaning of the supplied source material.

==================================================

SERVICES

==================================================

Create two primary service experiences:

01

Plot Selling & Project Management

02

House Construction Services

Make these visually distinct and premium.

Each service should have:

- visual

- concise explanation

- benefits

- CTA

Keep content editable from a central data structure.

==================================================

PROJECTS

==================================================

Feature the projects supplied in the reference:

- Shree Shyam City

- Ayodhya Puram

- Mangalmay City

Use actual supplied assets where available.

Each project card should include:

- image

- name

- location if confirmed

- status if confirmed

- short description

- View Project CTA

Do not assume project status is still current without confirmation.

Make status values easy to change centrally.

==================================================

FOUNDER

==================================================

Use the supplied founder information.

Founder:

Vijendra Singh Rajput

Founder & CEO

Create a premium founder section using the supplied information.

Use the real founder image if supplied.

If image is missing, create a clearly replaceable placeholder.

==================================================

TESTIMONIALS

==================================================

Use supplied testimonials only as reference content.

Do not invent new testimonials.

Make testimonial data editable from:

src/data/testimonials.ts

If testimonial publication requires client confirmation, keep the architecture ready but clearly identify the content as pending approval.

==================================================

CONTACT / LEAD GENERATION

==================================================

This is one of the most important sections.

Create:

- phone CTA

- WhatsApp CTA

- enquiry form

- location

- email if supplied

- business hours if supplied

- map placeholder if exact location is not supplied

Form fields:

- Name

- Phone

- Email (optional)

- Interested In

- Message

Validate input properly.

Show:

- loading state

- success state

- error state

- accessible labels

- keyboard-friendly controls

Do not pretend form submissions are connected to a backend if they are not.

Build the form architecture cleanly so a real backend/email/CRM integration can be added later.

==================================================

WHATSAPP

==================================================

Include a floating WhatsApp CTA.

Make the phone number configurable from:

src/data/site.ts

Do not hardcode it in multiple components.

==================================================

CONTENT ARCHITECTURE

==================================================

IMPORTANT:

I need to be able to replace client information easily without searching through JSX files.

Create centralized data/configuration files.

For example:

src/data/site.ts

src/data/services.ts

src/data/projects.ts

src/data/testimonials.ts

src/data/careers.ts

Images should be organized under:

public/images/

Use meaningful filenames.

Example:

public/images/brand/logo.png

public/images/hero/hero-main.webp

public/images/founder/vijendra-singh-rajput.webp

public/images/projects/ayodhya-puram/hero.webp

public/images/projects/ayodhya-puram/gallery-01.webp

public/images/projects/shree-shyam-city/hero.webp

public/images/projects/mangalmay-city/hero.webp

etc.

DO NOT scatter images randomly throughout the project.

I should be able to replace an image by replacing a file in the appropriate directory or changing one data reference.

==================================================

COMPONENT ARCHITECTURE

==================================================

Use reusable components.

Suggested structure:

components/

  layout/

    Navbar

    Footer

  sections/

    Hero

    TrustStrip

    About

    Services

    Projects

    WhyChooseUs

    Founder

    Testimonials

    CTA

    Contact

  projects/

    ProjectCard

    ProjectGrid

    ProjectHero

    ProjectGallery

    ProjectInfo

  forms/

    EnquiryForm

    CareerApplicationForm

  ui/

    Button

    SectionHeading

    Container

    etc.

Avoid giant monolithic components.

Avoid duplicated markup.

==================================================

RESPONSIVE DESIGN

==================================================

Mobile-first.

Test mentally for:

- 320px

- 375px

- 390px

- 430px

- tablet

- laptop

- large desktop

No horizontal overflow.

Do not simply shrink desktop layouts.

Redesign layouts appropriately for mobile.

Mobile navigation must be polished.

CTA buttons must remain easy to tap.

==================================================

ACCESSIBILITY

==================================================

Target WCAG 2.2 AA where practical.

Include:

- semantic HTML

- proper heading hierarchy

- alt text

- accessible forms

- keyboard navigation

- visible focus states

- sufficient contrast

- reduced-motion support

- accessible mobile navigation

Do not rely on color alone to communicate information.

==================================================

SEO

==================================================

Implement technical SEO from the beginning.

Primary geographic focus:

Indore, Madhya Pradesh

Potential search intent includes:

- real estate company in Indore

- plot dealers in Indore

- residential plots in Indore

- commercial plots in Indore

- plots in Indore

- house construction services in Indore

Do not keyword-stuff.

Implement:

- page titles

- meta descriptions

- semantic headings

- canonical URLs

- Open Graph metadata

- sitemap

- robots.txt

- descriptive image alt text

- structured data where appropriate

- clean project URLs

Do not invent business claims in SEO metadata.

==================================================

PERFORMANCE

==================================================

Prioritize Core Web Vitals.

Use:

- optimized images

- modern image formats where appropriate

- lazy loading for below-the-fold imagery

- responsive image sizing

- minimal client-side JavaScript

- server-rendered/static content where appropriate

- no unnecessary dependencies

- no unnecessary animation libraries

Animations should be subtle and purposeful.

Respect prefers-reduced-motion.

==================================================

SECURITY

==================================================

Do not expose secrets.

Use environment variables for secrets.

Validate form inputs.

Do not trust client-side validation alone if a backend is later connected.

Do not expose private API keys in frontend code.

==================================================

CODE QUALITY

==================================================

Use TypeScript.

Keep code clean and maintainable.

Avoid:

- duplicated code

- giant components

- unnecessary dependencies

- hardcoded business information

- hardcoded phone numbers in multiple places

- hardcoded project content in multiple components

Use reusable types and data structures.

==================================================

IMPORTANT: FIRST BUILD BEHAVIOR

==================================================

Before writing implementation, reason through the information architecture and design system.

Then build the complete first version.

Do not ask unnecessary questions.

Where information is missing:

- use clearly identifiable placeholders

- keep the content editable

- never fabricate business facts

Do not build a generic template.

The result should feel like a real premium Indian real-estate company's website designed specifically for Akshat Reality.

==================================================

FINAL REQUIREMENT

==================================================

After implementation, provide:

1. Complete directory/file structure

2. List of all image locations

3. List of all centralized content/data files

4. List of all routes

5. List of environment variables, if any

6. Explanation of how I can replace:

   - logo

   - hero image

   - founder image

   - project images

   - project information

   - services

   - testimonials

   - phone/WhatsApp

   - contact information

   - career openings

7. Explain how the enquiry form is currently configured

8. Identify anything that is still placeholder/pending client confirmation

Do not claim anything is connected or production-ready unless it actually is.

## Development

This project uses [Bun](https://bun.sh) (see `bunfig.toml` / `bun.lock`). npm works too — just delete `bun.lock` and it'll generate a `package-lock.json` instead.

```sh
git clone <this-repository-url>
cd <repository-name>
bun install
bun run dev
```

Or with npm:

```sh
npm install
npm run dev
```

## Build & Deploy

```sh
bun run build   # or: npm run build
```

The build target is controlled by the `nitro` preset in `vite.config.ts` (currently `cloudflare-module`, for Cloudflare Workers). Swap it for a different [Nitro preset](https://nitro.build/deploy) (e.g. `node-server`, `vercel`, `netlify`) if you're hosting elsewhere.

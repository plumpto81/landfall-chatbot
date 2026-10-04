// Repo path: knowledge.js
const CONTACT_EMAIL = "mike@landfall.landfall";

// Optional extra company text. Leave as "" if the chunks below cover it.
const COMPANY_DETAILS = "";

const chunks = [
  {
    id: "landfall-about",
    title: "About Landfall",
    keywords: ["landfall", "platform", "workspace", "software", "portal", "employer portal", "story", "founder", "who", "built", "feature", "different", "independent recruiter", "worker file", "renewal", "tracking", "deadline", "calendar", "dashboard", "client", "sell", "employer visibility", "journey"],
    text: `About Landfall (from the Landfall website).
- Landfall is a workspace for independent recruiters who manage foreign workers' journeys to Canada. Tagline: "Every worker. Every deadline. One clear picture." It is built for licensed recruiters and is never sold to the recruiter's employers; the recruiter is the customer and their client relationships stay theirs.
- Most software puts the employer at the centre; Landfall puts the recruiter at the centre.
- Deadlines: permit renewals and other critical dates surface before they are missed.
- The whole journey in one place: from application to permit, flight to arrival, every worker across every client, without another spreadsheet to reconcile.
- Employer portal: gives the recruiter's clients a clear view of progress so they stay informed without phone calls.
- The workspace shows active workers, upcoming deadlines, each worker's employer, journey stage and next deadline, with filters and search.
- Why it exists: the founder's story on the site says that after years in government working in immigration worker services, it was clear that a process built for a filing cabinet was running on deadlines that do not forgive. A renewal missed by a week can mean a worker goes out of status, and the people managing these journeys deserve more than a spreadsheet and a good memory.
- Landfall is launching soon.
Contact: Mike@landfall.landfall`
  },
  {
    id: "landfall-pricing",
    title: "Landfall pricing and plans",
    keywords: ["price", "pricing", "cost", "plan", "solo", "practice", "firm", "month", "monthly", "annual", "cad", "seat", "user", "storage", "support", "how much", "subscription", "worker files", "migration", "branded", "multi recruiter", "escalation", "template"],
    text: `Landfall pricing (website pricing page). Prices are in CAD, per user, per month. One seat at a time; add users as the practice grows. Every plan includes the deadline engine. Annual billing saves about two months. Landfall is launching soon.
- Solo: $20/mo per user. For the independent recruiter finding their footing. Up to 50 active worker files; deadline tracking with email reminders; worker and client records in one place; 5 GB document storage; permit renewal calendar; email support.
- Practice (marked "Most popular"): $35/mo per user. For the recruiter with a growing book of business. Up to 250 active worker files; everything in Solo plus an employer self-service portal; automated renewal alerts at 90, 60 and 30 days; permit and visa workflow templates; 25 GB document storage; priority email support.
- Firm: $50/mo per user. For multi-recruiter operations that need control. Unlimited active worker files; everything in Practice plus a multi-recruiter workspace (per user); custom deadline rules and escalation; branded employer portal; 100 GB document storage; onboarding and data migration; phone and priority support.
Contact: Mike@landfall.landfall`
  },
  {
    id: "provinces-overview",
    title: "Provincial overview",
    keywords: ["province", "provincial", "across", "each province", "which province", "all province", "compare", "difference", "licence", "license", "licensed", "licensing", "recruiter", "register", "registration", "registry"],
    text: `Provincial rules at a glance (from the provincial government pages provided).
- Ontario: temporary help agencies and recruiters must be licensed (since July 1, 2024).
- Quebec: employment agencies and temporary foreign worker recruitment agencies need a CNESST licence, which requires a valid Attestation de Revenu Quebec.
- British Columbia: foreign worker recruiters must be licensed; employers hiring foreign workers must register.
- Alberta: anyone helping employers secure employees, including temporary foreign workers, must be licensed as an Employment Agency Business under the Consumer Protection Act.
- Saskatchewan: under the Immigration Services Act, recruiters and immigration consultants must be licensed and employers must register (with exceptions).
- Manitoba: employers recruiting foreign workers must register (Manitoba Provincial Nominees excepted) and recruiters need a licence under the Worker Recruitment and Protection Act.
- New Brunswick: employers of foreign workers must register and renew annually, at no fee. The page provided does not discuss recruiter licensing.
- Nova Scotia: recruiters of foreign workers need a recruiter licence and employers need an employer registration certificate.`
  },
  {
    id: "fed-program",
    title: "Federal Temporary Foreign Worker Program",
    keywords: ["tfwp", "temporary foreign worker", "foreign worker", "program", "lmia", "labour market impact assessment", "service canada", "esdc", "ircc", "cbsa", "federal", "hire", "employer", "inspection", "what is"],
    text: `Federal Temporary Foreign Worker Program (TFWP).
- The program lets Canadian employers hire foreign workers to fill temporary jobs when qualified Canadians are not available.
- It is regulated under the Immigration and Refugee Protection Act and its Regulations, and administered in partnership with Immigration, Refugees and Citizenship Canada (IRCC) and the Canada Border Services Agency (CBSA). IRCC leads the program.
- Employment and Social Development Canada (ESDC), through Service Canada processing centres, assesses employer applications and conducts Labour Market Impact Assessments (LMIAs) to determine the likely effect of hiring foreign workers on the Canadian labour market.
- The assessment looks at labour market information for the region and occupation, the employer's recruitment and advertising efforts, wages and working conditions, labour shortages, and the transfer of skills and knowledge to Canadians.
- Service Canada conducts inspections for the program and answers questions through Employer Contact Centres. In Quebec the program is administered in partnership with the province.
- Services listed: find out if you need an LMIA; hire in a high-wage or low-wage position; hire a temporary foreign agricultural worker; hire a foreign in-home caregiver.
Sources: https://www.canada.ca/en/employment-social-development/programs/temporary-foreign-worker.html and https://www.canada.ca/en/employment-social-development/services/foreign-workers.html`
  },
  {
    id: "fed-streams",
    title: "LMIA streams and how to apply",
    keywords: ["stream", "agricultural", "agriculture", "farm", "caregiver", "global talent", "academic", "recognized employer", "wage", "wage threshold", "high wage", "low wage", "permanent residency", "apply", "application", "lmia online", "job bank", "processing time", "need an lmia"],
    text: `Choosing an LMIA stream (federal page "Hire a temporary foreign worker with a Labour Market Impact Assessment").
Streams listed:
- High and low-wage positions: based on the provincial or territorial hourly wage threshold. Updated hourly wage thresholds took effect July 17, 2026.
- Primary agriculture positions.
- Applications to support permanent residency.
- Global Talent Stream: uniquely skilled or in-demand workers.
- Caregiver positions: care for children, seniors or persons with medical needs.
- Foreign academic positions at degree-granting post-secondary institutions.
- Hiring in the province of Quebec: regular or facilitated processes.
- Recognized Employer Pilot: simplified online application process.
How to apply: employers submit applications through LMIA Online, which requires a Job Bank account. The page also links to a tool to find out whether an LMIA is needed, LMIA processing times, the Employer Contact Centre and processing centre contacts.
Workers (not employers) are directed to the IRCC page on applying to work in Canada.
Source: https://www.canada.ca/en/employment-social-development/services/foreign-workers.html`
  },
  {
    id: "fed-compliance",
    title: "After applying: compliance and abuse reporting",
    keywords: ["compliance", "inspection", "refusal", "refuse", "refused", "modify", "modification", "positive lmia", "voluntary disclosure", "non compliant", "report abuse", "abuse", "obligation", "ebola"],
    text: `After you apply (federal pages).
- Refusal to process: the page explains reasons the program refuses to process certain applications.
- Employer compliance obligations: explains how to comply with obligations under the program.
- Modification to a positive LMIA: steps to make a change to a positive LMIA.
- Employer voluntary disclosure of non-compliance: employers can tell the program about possible compliance issues before an inspection is launched.
- A list of non-compliant employers (those found non-compliant during an inspection) is published.
- Report abuse: people can tell the program if they suspect a temporary foreign worker is being abused.
- Temporary measures are in place for employers with workers arriving from the Democratic Republic of the Congo, Uganda and South Sudan (Ebola disease); see the IRCC Ebola temporary measures page.
Source: https://www.canada.ca/en/employment-social-development/services/foreign-workers.html`
  },
  {
    id: "ontario",
    title: "Ontario",
    keywords: ["ontario", "temporary help agency", "tha", "employment standards act", "esa", "epfna", "information sheet", "olrb", "toronto", "ottawa"],
    text: `Ontario: licensing for temporary help agencies and recruiters (Employment Standards Act, 2000).
- Since July 1, 2024, temporary help agencies must hold a licence to operate and recruiters must hold a licence to act as a recruiter. Employers, prospective employers and other recruiters are prohibited from knowingly using an unlicensed recruiter; clients are prohibited from knowingly using an unlicensed temporary help agency.
- A recruiter is any person (including a corporation, partnership or sole proprietor) who, for a fee, finds or tries to find employment in Ontario for prospective employees, or employees for prospective employers in Ontario. A recruiter does not need to be located in Ontario. Exclusions include employees doing this as part of their job, employers recruiting for themselves, certain educational institutions, trade unions and registered charities.
- Each legal entity applies separately, online. An entity that is both a temporary help agency and a recruiter submits two applications.
- Fee: $1,500 for applications on or after January 1, 2026 (it was $750 before), and licences from those applications generally last two years (one year for earlier ones). An entity applying for both licences generally pays the fee once, with conditions. The fee is not refunded after a decision.
- Security: a temporary help agency applying for an initial licence must provide $25,000 security (electronic irrevocable letter of credit or surety bond). A recruiter does not need to provide security if it will not recruit foreign nationals, or will only recruit foreign nationals for positions at or above the Ontario median hourly wage; in that case a term and condition is placed on the licence.
- The application asks for items such as business addresses, officers and directors, information about certain criminal convictions, compliance history and a tax compliance verification number.
- Penalties for operating or using services without a licence, or giving false or misleading information: $15,000 (first contravention), $25,000 (second within three years), $50,000 (third within three years). Other enforcement can include compliance orders and prosecution.
- A refused applicant can ask the Ontario Labour Relations Board to review the decision.
- Anyone can check a licence on the Ministry's public licensing status page.
- Licensing unit: THA-Recruiter.Licensing@ontario.ca, 416-212-9198, toll-free in Ontario 1-866-975-5577.
- From the Landfall FAQ: recruiters must give foreign nationals two information sheets that explain their rights under the Employment Protection for Foreign Nationals Act (EPFNA) and the Employment Standards Act (ESA). The sheets must be in the worker's preferred language, if it is available.
Source: https://www.ontario.ca/page/licensing-temporary-help-agencies-and-recruiters`
  },
  {
    id: "quebec",
    title: "Quebec",
    keywords: ["quebec", "cnesst", "attestation", "revenu quebec", "montreal"],
    text: `Quebec: mandatory CNESST licence (Revenu Quebec page).
- Employment agencies and temporary foreign worker recruitment agencies must hold a licence from the Commission des normes, de l'equite, de la sante et de la securite du travail (CNESST) to operate in Quebec.
- They must have a valid Attestation de Revenu Quebec when they apply for the CNESST licence, and must keep a valid Attestation at all times for the licence to remain in effect.
- The Attestation certifies that the business has filed required Quebec tax returns and reports and has no overdue account with Revenu Quebec (or has a payment agreement it is following, or collection has been legally suspended).
- It is requested in My Account for businesses; if conditions are met it is issued right away. Businesses can sign up for automatic renewal of the Attestation. Verifying an agency's Attestation is voluntary.
- Legislation and instructions for applying for the licence are on the CNESST website (in French only).
Source: https://www.revenuquebec.ca/en/businesses/sector-specific-measures/attestation-de-revenu-quebec/contracts-authorization-and-licence-requiring-an-attestation/mandatory-cnesst-licence-for-employment-agencies-and-temporary-foreign-worker-recruitment-agencies/`
  },
  {
    id: "bc",
    title: "British Columbia",
    keywords: ["british columbia", "bc", "b c", "vancouver", "victoria", "temporary foreign worker protection act"],
    text: `British Columbia: hiring temporary foreign workers.
- The Temporary Foreign Worker Protection Act protects foreign workers in B.C. from unfair practices.
- Employers must register with the provincial government to hire foreign workers. Most employers hire through the federal Temporary Foreign Worker Program.
- Foreign worker recruiters must be licensed in B.C.; individual recruiters must be licensed even if their business or main operations are outside the province.
- Employers must only use licensed foreign worker recruiters.
- The province provides a searchable list of registered employers and licensed recruiters.
- Foreign workers with concerns about recruitment or employment can find out how the law protects them on the province's protections page.
Source: https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/hiring/hire-temporary-foreign-workers`
  },
  {
    id: "alberta",
    title: "Alberta",
    keywords: ["alberta", "calgary", "edmonton", "employment agency business", "consumer protection act", "aaip"],
    text: `Alberta: resources for employers of temporary foreign workers.
- Employers must follow the federal process and requirements when hiring a temporary foreign worker in Alberta.
- Any person assisting an employer in securing or attempting to secure individuals for employment in Alberta, including temporary foreign workers, must be licensed as an Employment Agency Business under the Consumer Protection Act.
- Employment agencies are prohibited from charging a job seeker any fees related to securing employment.
- The province offers employment agency tips and a way to search for a licensed employment agency.
- After hiring: Employment Standards 780-427-3731 (toll free 1-877-427-3731); Occupational Health and Safety 780-415-8690 (Edmonton) or 1-866-415-8690.
- Employers who want to help workers gain permanent residency can look at the Alberta Advantage Immigration Program.
- Temporary Foreign Worker Advisory Office: 1-877-944-9955, 8:15 am to 4:30 pm, Monday to Friday.
Source: https://www.alberta.ca/resources-employers-temporary-foreign-workers`
  },
  {
    id: "saskatchewan",
    title: "Saskatchewan",
    keywords: ["saskatchewan", "regina", "saskatoon", "immigration services act", "isa", "program compliance"],
    text: `Saskatchewan: The Immigration Services Act (ISA).
- The ISA came into force July 1, 2024 and replaced The Foreign Worker Recruitment and Immigration Services Act (2013). It protects foreign nationals who work, look for work or are in the immigration process in Saskatchewan, including foreign workers, students, visitors, permanent residency applicants and self-employed foreign nationals.
- Immigration recruiters and consultants must be licensed with the Government of Saskatchewan, post a financial security, and sign open, transparent contracts. Lawyers in good standing are exempt from consultant licensing but must be licensed as recruiters if recruiting foreign workers.
- Employers must register with the Program Compliance Branch, except when hiring foreign nationals with open work permits or when the employer is an agency of a foreign government. Employers must pay all costs of hiring foreign workers, including recruitment-related costs, and make sure the recruiters and consultants they use are licensed.
- Recruitment fees or costs cannot be charged to foreign workers. Employers, recruiters and consultants cannot: give misleading information about the job, charge for a job offer or immigration support, take passports, work permits or other documents, withhold information about an immigration application, threaten deportation, contact a worker's family or friends if asked not to, or retaliate against a worker for making a complaint.
- Penalties can include losing the right to practise or to hire foreign workers, fines up to $750,000 (individual) or $1,250,000 (corporation), and administrative penalties up to $200,000 (individual) or $400,000 (corporation). Workers can seek compensation for costs caused by violations.
- Once working in Saskatchewan, foreign workers have the same protection as other employees under provincial labour laws such as The Saskatchewan Employment Act.
- Program Compliance Branch: 306-798-1350 or 833-613-0485. Complaints can be made confidentially.
Source: https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/protections-for-immigrants-and-foreign-workers/legislative-protection-for-immigrants-and-foreign-workers`
  },
  {
    id: "manitoba",
    title: "Manitoba",
    keywords: ["manitoba", "winnipeg", "wrpa", "worker recruitment and protection act", "provincial nominee"],
    text: `Manitoba: foreign worker recruitment (Worker Recruitment and Protection Act).
- All employers wanting to recruit foreign workers in Manitoba, other than Manitoba Provincial Nominees, must first register with Employment Standards.
- A licence from Employment Standards is required for persons engaging in foreign worker recruitment in Manitoba. The Act sets out the obligations recruiters must meet to be approved for a licence.
- The province publishes a list of valid licence holders.
- Employment Standards: 204-945-3352, toll free 1-800-821-4307.
Source: https://www.gov.mb.ca/labour/standards/category,wrpa,factsheet.html`
  },
  {
    id: "new-brunswick",
    title: "New Brunswick",
    keywords: ["new brunswick", "nb", "fredericton", "moncton", "saint john"],
    text: `New Brunswick: registry of employers of foreign workers (Employment Standards Act).
- Employers must register with the provincial government if they employ current or newly hired foreign workers, and must renew and update their registration annually. There is no fee.
- Foreign workers have the same rights as New Brunswick workers under the Employment Standards Act.
- Employers are prohibited from: requiring foreign workers to use and pay an immigration consultant; recovering ineligible recruitment and transportation costs from the worker; misrepresenting employment opportunities; supplying false information about rights and responsibilities; preventing workers from leaving employer-provided accommodations for private accommodations; reducing wages or changing other terms of employment undertaken in recruitment; threatening deportation; and taking a worker's identity documents (such as a passport) or work permit.
- The Employment Standards Branch offers free information sessions, including on foreign workers.
- Employment Standards Branch: 1-888-452-2687, Monday to Friday 8:15 a.m. to 4:30 p.m.
Source: https://www.gnb.ca/en/topic/jobs-workplaces/labour-market-workforce/employment-standards/foreign-workers.html`
  },
  {
    id: "nova-scotia",
    title: "Nova Scotia",
    keywords: ["nova scotia", "ns", "halifax", "labour standards code"],
    text: `Nova Scotia: foreign workers (Labour Standards Code).
- The Code includes rules on recruiter licensing, employer registration, charging and recovering recruitment fees or costs from a worker, holding a foreign worker's property, record keeping for employers and recruiters, and changing the terms and conditions of a foreign worker's employment.
- Recruiters of foreign workers in Nova Scotia must hold a recruiter licence from Labour Standards. Employers who do their own recruitment do not need a recruiter licence.
- Employers must have an employer registration certificate from Labour Standards to lawfully hire a foreign worker. Employers who want help from a recruiter must use a licensed recruiter. A list of licensed recruiters is published, and there is a page on recruiter licence and employer registration exemptions.
- Federally regulated companies do not fall under the provincial Labour Standards Code; employers and recruiters recruiting for a federally regulated business are under federal jurisdiction.
Source: https://novascotia.ca/lae/employmentrights/fw/foreignworker.asp`
  }
];

// Used when a question matches nothing else.
chunks.find((c) => c.id === "landfall-about").fallback = true;

module.exports = { CONTACT_EMAIL, COMPANY_DETAILS, chunks };

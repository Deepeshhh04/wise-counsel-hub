export interface LegalEntry {
  question: string;
  keywords: string[];
  answer: string;
  references: string[];
}

const legalDataset: LegalEntry[] = [
  {
    question: "What are the legal consequences of cheque bounce in India?",
    keywords: ["cheque", "bounce", "dishonour", "check"],
    answer:
      "Under Section 138 of the Negotiable Instruments Act, 1881, cheque bounce is a criminal offence. The drawer may face imprisonment up to 2 years, or a fine up to twice the cheque amount, or both. The payee must send a legal notice within 30 days of receiving the return memo from the bank, and if the drawer fails to pay within 15 days, a complaint can be filed in court.",
    references: ["NI Act Section 138", "NI Act Section 141"],
  },
  {
    question: "What is the punishment for theft in India?",
    keywords: ["theft", "stealing", "stolen", "stole", "chori"],
    answer:
      "Under Section 379 of the Indian Penal Code, theft is punishable with imprisonment up to 3 years, or a fine, or both. If the theft is committed in a dwelling house, the punishment may extend to 7 years under Section 380 IPC. The victim should file an FIR at the nearest police station immediately.",
    references: ["IPC Section 378", "IPC Section 379", "IPC Section 380"],
  },
  {
    question: "How to file a consumer complaint in India?",
    keywords: ["consumer", "complaint", "product", "defective", "service", "deficiency"],
    answer:
      "Under the Consumer Protection Act, 2019, a consumer can file a complaint in the District Consumer Forum for claims up to ₹1 crore, State Commission for up to ₹10 crore, and National Commission for above ₹10 crore. Complaints can also be filed online at consumerhelpline.gov.in. The complaint must be filed within 2 years from the date of cause of action.",
    references: ["Consumer Protection Act 2019", "Section 34", "Section 35"],
  },
  {
    question: "What are the grounds for divorce in India?",
    keywords: ["divorce", "separation", "marriage", "talaq", "dissolution"],
    answer:
      "Under the Hindu Marriage Act, 1955 (Section 13), grounds for divorce include cruelty, adultery, desertion for 2+ years, conversion to another religion, unsoundness of mind, and incurable disease. Under Muslim law, divorce can be through Talaq, Khula, or mutual agreement. The court encourages mediation before granting a decree of divorce.",
    references: ["Hindu Marriage Act Section 13", "Special Marriage Act Section 27"],
  },
  {
    question: "What is the process for filing an FIR?",
    keywords: ["fir", "police", "report", "lodge", "complaint", "first information"],
    answer:
      "Under Section 154 of the Code of Criminal Procedure (CrPC), any person can file an FIR at the nearest police station for a cognizable offence. The police are bound to register it and provide a free copy. If the police refuse to file the FIR, you can send a written complaint to the Superintendent of Police or approach the Magistrate under Section 156(3) CrPC.",
    references: ["CrPC Section 154", "CrPC Section 156(3)"],
  },
  {
    question: "What are the rights of an arrested person in India?",
    keywords: ["arrest", "arrested", "custody", "detention", "rights", "bail"],
    answer:
      "Under Article 22 of the Constitution, an arrested person has the right to know the grounds of arrest, the right to consult a lawyer, and the right to be produced before a magistrate within 24 hours. Under Section 50 CrPC, the person must be informed of their right to bail in bailable offences. Free legal aid is available under Section 304 CrPC.",
    references: ["Article 22", "CrPC Section 50", "CrPC Section 304"],
  },
  {
    question: "What is dowry and its legal punishment?",
    keywords: ["dowry", "dahej", "dowry death", "demand"],
    answer:
      "Under the Dowry Prohibition Act, 1961, giving or taking dowry is punishable with imprisonment of at least 5 years and a fine of ₹15,000 or the dowry value (whichever is higher). Dowry death is covered under Section 304B IPC with a minimum imprisonment of 7 years, extendable to life imprisonment. Harassment for dowry is punishable under Section 498A IPC.",
    references: ["Dowry Prohibition Act 1961", "IPC Section 304B", "IPC Section 498A"],
  },
  {
    question: "How does bail work in India?",
    keywords: ["bail", "anticipatory bail", "regular bail", "interim bail"],
    answer:
      "Bail in India is of three types: Regular Bail (Section 437/439 CrPC), Anticipatory Bail (Section 438 CrPC), and Interim Bail (temporary). In bailable offences, bail is a matter of right. In non-bailable offences, it is at the court's discretion. The accused must furnish a bail bond and surety. Conditions like passport surrender may be imposed.",
    references: ["CrPC Section 437", "CrPC Section 438", "CrPC Section 439"],
  },
  {
    question: "What are the tenant rights in India?",
    keywords: ["tenant", "rent", "landlord", "eviction", "rental", "lease"],
    answer:
      "Under various state Rent Control Acts, tenants have the right to fair rent, protection from arbitrary eviction, and receipt of rent payments. A landlord cannot evict a tenant without a court order and valid grounds such as non-payment of rent, subletting without permission, or personal need. Tenants should always have a written rental agreement.",
    references: ["Rent Control Act", "Transfer of Property Act Section 106"],
  },
  {
    question: "What is cyber crime and how to report it?",
    keywords: ["cyber", "online", "hacking", "fraud", "phishing", "internet", "cybercrime"],
    answer:
      "Cyber crimes are covered under the Information Technology Act, 2000. Common offences include hacking (Section 66), identity theft (Section 66C), and cyber fraud (Section 66D). Victims can report cyber crimes at cybercrime.gov.in or call helpline 1930. An FIR can also be filed at the nearest police station or the dedicated cyber crime cell.",
    references: ["IT Act Section 66", "IT Act Section 66C", "IT Act Section 66D"],
  },
  {
    question: "What is the legal age of marriage in India?",
    keywords: ["marriage", "age", "legal age", "child marriage", "minor"],
    answer:
      "The legal age of marriage in India is 21 years for males and 18 years for females. Child marriage is prohibited under the Prohibition of Child Marriage Act, 2006. Performing, conducting, or abetting a child marriage is punishable with up to 2 years imprisonment and a fine of ₹1 lakh. Such marriages are voidable at the option of the minor.",
    references: ["Prohibition of Child Marriage Act 2006", "Special Marriage Act 1954"],
  },
  {
    question: "What are women's rights against harassment at workplace?",
    keywords: ["harassment", "workplace", "sexual", "posh", "women", "misconduct"],
    answer:
      "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act) mandates every employer with 10+ employees to constitute an Internal Complaints Committee (ICC). Complaints must be filed within 3 months of the incident. The committee must complete the inquiry within 90 days. Penalties include termination and fines up to ₹50,000.",
    references: ["POSH Act 2013", "Vishaka Guidelines"],
  },
  {
    question: "How to file a RTI application?",
    keywords: ["rti", "right to information", "information", "transparency", "government"],
    answer:
      "Under the Right to Information Act, 2005, any Indian citizen can file an RTI application to any public authority by paying ₹10 (fee may vary by state). The application can be submitted online at rtionline.gov.in or by post. The Public Information Officer must respond within 30 days. If dissatisfied, a first appeal can be filed within 30 days of the response.",
    references: ["RTI Act 2005 Section 6", "RTI Act 2005 Section 7"],
  },
  {
    question: "What is defamation and its punishment?",
    keywords: ["defamation", "slander", "libel", "reputation", "defame"],
    answer:
      "Under Section 499 IPC, defamation is making or publishing any imputation concerning a person to harm their reputation. It is punishable under Section 500 IPC with imprisonment up to 2 years, or a fine, or both. Civil defamation allows the aggrieved person to claim monetary damages through a civil suit. Truth spoken in public interest is a valid defence.",
    references: ["IPC Section 499", "IPC Section 500"],
  },
  {
    question: "What are the rules regarding property inheritance?",
    keywords: ["property", "inheritance", "will", "succession", "ancestor", "heir"],
    answer:
      "In India, property inheritance depends on religion. For Hindus, the Hindu Succession Act, 1956 applies — both sons and daughters have equal rights to ancestral property (after the 2005 amendment). For Muslims, inheritance follows Sharia law. A person can distribute self-acquired property via a registered Will. In the absence of a Will, property is distributed among legal heirs.",
    references: ["Hindu Succession Act 1956", "Indian Succession Act 1925"],
  },
  {
    question: "What is domestic violence and how to seek protection?",
    keywords: ["domestic", "violence", "abuse", "beating", "protection order"],
    answer:
      "The Protection of Women from Domestic Violence Act, 2005 covers physical, emotional, verbal, economic, and sexual abuse. The victim can file a complaint with the Protection Officer or police. The court can grant protection orders, residence orders, monetary relief, and custody orders. Breach of a protection order is punishable with up to 1 year imprisonment and a fine of ₹20,000.",
    references: ["DV Act 2005", "Section 12", "Section 18", "Section 31"],
  },
  {
    question: "What is the Motor Vehicles Act penalty for drunk driving?",
    keywords: ["drunk", "driving", "accident", "motor", "vehicle", "traffic", "dui"],
    answer:
      "Under Section 185 of the Motor Vehicles Act, 1988 (amended 2019), first-time drunk driving is punishable with imprisonment up to 6 months and/or a fine of ₹10,000. For repeat offences, imprisonment may extend to 2 years and/or a fine of ₹15,000. The driving licence can be suspended for 3 months. Causing death while drunk driving attracts charges under Section 304A IPC.",
    references: ["MV Act Section 185", "IPC Section 304A"],
  },
  {
    question: "What is the punishment for murder in India?",
    keywords: ["murder", "kill", "homicide", "death", "culpable"],
    answer:
      "Under Section 302 IPC, murder is punishable with death or life imprisonment, along with a fine. Culpable homicide not amounting to murder (Section 304) carries imprisonment up to 10 years or life imprisonment. Attempt to murder under Section 307 IPC is punishable with imprisonment up to 10 years and a fine, extendable to life imprisonment if hurt is caused.",
    references: ["IPC Section 300", "IPC Section 302", "IPC Section 307"],
  },
];

export function findLegalAnswer(userInput: string): LegalEntry | null {
  const normalized = userInput.toLowerCase().trim();
  let bestMatch: LegalEntry | null = null;
  let bestScore = 0;

  for (const entry of legalDataset) {
    const score = entry.keywords.filter((kw) => normalized.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestScore > 0 ? bestMatch : null;
}

export const FALLBACK_RESPONSE = "I'm sorry, I couldn't find a specific answer to your question in my database. Please consult a lawyer for accurate legal advice.";

export default legalDataset;

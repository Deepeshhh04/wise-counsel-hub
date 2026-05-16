// ─────────────────────────────────────────────────────────────────────────────
// NyayaSetu — Legal Dataset (Expanded Multilingual Edition)
// Covers: English, Hindi, Bengali, Marathi, Punjabi, Tamil, Telugu,
//         Gujarati, Kannada, Malayalam, Odia, Urdu transliterations
// Keywords include MyMemory / Google Translate variants for all major
// Indian languages transliterated into Roman script.
// ─────────────────────────────────────────────────────────────────────────────

export interface LegalItem {
  category: string;
  question: string;
  keywords: string[];
  language_hints: string[];
  answer: string;
  references: string[];
}

export const legalDataset: LegalItem[] = [

  // ─── CRIMINAL LAW ──────────────────────────────────────────────────────────

  {
    category: "Criminal Law",
    question: "What are the legal consequences of cheque bounce in India?",
    keywords: [
      // English
      "cheque", "bounce", "bounced", "dishonour", "dishonor", "check",
      "returned cheque", "insufficient funds", "check bounce", "cheque return",
      "check return", "negotiable instruments", "section 138", "ni act",
      "bounced cheque", "returned check", "unpaid cheque", "unpaid check",
      "dishonourd", "chek", "bauns", "check bauns", "chek bauns", "cheque bauns",
      "check dishonor", "cheque dishonor", "bounced check", "bank check",
      // Hindi (transliterated)
      "cheque wapas", "cheque anaadar", "cheque nakaam", "cheque bounce hua",
      "cheque dishonour kya hai", "section 138 kya hai",
      // Bengali (transliterated)
      "chek bounced", "chek ferot", "chek osammaan", "chek asafal",
      "chek bounce hoyeche", "chek protikshepa",
      // Marathi (transliterated)
      "cheque nakar", "cheque parat", "cheque bounced", "cheque anaadar marathi",
      "cheque vaapas", "cheque naakaralelya",
      // Punjabi (transliterated)
      "cheque muda", "cheque wapis", "cheque inakar", "cheque phat gaya",
      "cheque kharaab", "cheque di wapsi",
      // Tamil (transliterated)
      "chek thirumba", "chek nirakka", "chek marutthal", "chek bounced tamil",
      "chek thiramai illai",
      // Telugu (transliterated)
      "chek tirigi", "chek vatadu", "chek bounce ayindi", "chek ante",
      // Gujarati (transliterated)
      "chek paachho", "chek apamaan", "chek bounce thayo",
      // Kannada (transliterated)
      "chek holi", "chek vaapas", "chek nakaraatmaka",
      // Malayalam (transliterated)
      "chek thiriche", "chek nirasthu", "chek bounce ayi",
      // Urdu (transliterated)
      "cheque wapas", "cheque barti", "cheque nakaam",
    ],
    language_hints: [
      "cheque bounce", "cheque dishonour", "cheque wapas", "chek bauns",
      "cheque nakar", "chek bounced", "cheque muda", "chek thirumba",
      "cheque anaadar", "chek parat", "cheque bounce hua", "chek ferot",
    ],
    answer:
      "Under Section 138 of the Negotiable Instruments Act, 1881, cheque bounce is a criminal offence. The drawer may face imprisonment up to 2 years, or a fine up to twice the cheque amount, or both. The payee must send a legal notice within 30 days of receiving the return memo from the bank, and if the drawer fails to pay within 15 days, a complaint can be filed in court.",
    references: ["NI Act Section 138", "NI Act Section 141", "NI Act Section 142"],
  },

  {
    category: "Criminal Law",
    question: "What is the punishment for theft in India?",
    keywords: [
      // English
      "theft", "stealing", "stolen", "stole", "rob", "robbery", "snatch",
      "snatching", "pickpocket", "burglary", "loot", "looting",
      "thief", "thieves", "theft punishment", "stealing punishment",
      "robber", "burglar", "property stolen", "stolen property", "house breaking",
      // Hindi
      "chori", "chor", "choraaya", "loot", "lootpaat", "dakait", "dakaiti",
      "chori ki saza", "maal chori", "ghar mein chori", "jeb katna",
      "utha liya", "cheez gayi", "samaan chori",
      // Bengali
      "churi", "chor", "churir shaja", "loot", "dakata", "dakati",
      "churi hoyeche", "mal churi", "ghor churi",
      // Marathi
      "chori", "cor", "corni", "loot", "dakoiti", "chori zali",
      "chori keli", "majha samaan gela", "ghari chori",
      // Punjabi
      "chori", "chor", "loot", "dakaiti", "chori ho gayi", "samaan chori",
      "ghar vich chori", "lutna",
      // Tamil
      "thiruttu", "thirudi", "kolaiyadi", "thirutan", "koluththu",
      "thiruttu shasthi", "thirudan",
      // Telugu
      "dorangudu", "doranguludu", "dorangadam", "dorangu",
      "lutu", "daadi", "cobbari",
      // Gujarati
      "chori", "chor", "loot", "lunsadhu", "chori thai", "mal chori",
      // Kannada
      "kalla", "kallasulu", "kallatana", "kallutanakke", "kalla naduvalli",
      // Malayalam
      "moshnam", "mosham", "kattattu", "kallante", "moshichu",
      // Urdu
      "chor", "chori", "dakaiti", "loot", "saza chori",
    ],
    language_hints: [
      "chori", "chhina-jhopatni", "loot", "dakait",
      "churi", "dakata", "thiruttu", "dorangudu", "moshnam",
      "kallasulu", "chor", "dakoiti", "lutna",
    ],
    answer:
      "Under Section 379 of the Indian Penal Code, theft is punishable with imprisonment up to 3 years, or a fine, or both. If the theft is committed in a dwelling house, the punishment may extend to 7 years under Section 380 IPC. The victim should file an FIR at the nearest police station immediately.",
    references: ["IPC Section 378", "IPC Section 379", "IPC Section 380"],
  },

  {
    category: "Criminal Law",
    question: "What is the legal procedure to file an FIR in India?",
    keywords: [
      // English
      "FIR", "first information report", "police complaint", "police report",
      "case register", "file complaint", "file case", "register complaint",
      "lodge complaint", "police station", "report crime", "complaint police",
      "first report", "information report", "fir file", "file fir",
      "register fir", "lodge fir", "police case", "crime report",
      // Hindi
      "fir darz karna", "prathamik soochna report", "shikayat",
      "pulis complaint", "thane mein shikayat", "fir kaise karein",
      "fir likhwana", "mera case darj karo", "pulis ne fir nahi li",
      // Bengali
      "fir daakhil", "prathamic tathya pratibedan", "pulish dakhal",
      "police complaint bangla", "thana complaint", "pulis complaint bangla",
      // Marathi
      "fir dakhal karna", "prathamik mahiti abhilekh", "taka dat karna",
      "police takrar marathi", "thanyat takrar", "fir marathi",
      // Punjabi
      "fir darj", "pulis shikayat", "case darj", "thane vich shikayat",
      "pulis wich complaint", "fir punjabi",
      // Tamil
      "fir pothikka", "muthal thakaval arikkai", "police menavam",
      "kaval nilayam pothikka", "fir tamil",
      // Telugu
      "fir noonducheyyi", "poli station", "police complaint telugu",
      "fir telugu", "police daakhalu",
      // Gujarati
      "fir nondho", "police fariyad", "thana complaint gujarati",
      // Kannada
      "fir doddi", "police darivali", "thana darivali kannada",
      // Malayalam
      "fir noondukka", "police parati", "station parati",
      // Urdu
      "fir darz", "pulis shikayat", "muqadma darj",
    ],
    language_hints: [
      "prathamik soochna report", "shikayat", "pulis complaint",
      "fir darz karna", "thane mein", "fir dakhil", "police takrar",
      "fir darj", "fir pothikka", "fir noonducheyyi", "fir nondho",
      "police parati", "muqadma darj",
    ],
    answer:
      "An FIR (First Information Report) can be filed at any police station, even if it is not in the jurisdiction of the offence. Under Section 154 of the CrPC, the police are legally bound to register an FIR for a cognizable offence. If police refuse, you can approach the Superintendent of Police or file a complaint before a Magistrate under Section 156(3) CrPC. You are entitled to a free copy of the FIR.",
    references: ["CrPC Section 154", "CrPC Section 155", "CrPC Section 156"],
  },

  {
    category: "Criminal Law",
    question: "What are my rights if I am arrested in India?",
    keywords: [
      // English
      "arrest", "arrested", "police custody", "detention", "detained",
      "rights on arrest", "bail", "custody", "handcuff", "taken by police",
      "police took", "locked up", "jail", "remand",
      "arrest rights", "arrested rights", "right to bail", "right lawyer",
      // Hindi
      "giraftari", "giraftar", "pakdna", "hathkadi", "bund", "jail",
      "arrested rights hindi", "giraftari mein haq", "bail kaise milega",
      "pakadhna", "mujhe pakad liya", "pulis ne pakad liya",
      // Bengali
      "greftaar", "dharepaka", "handkadi", "hajabot", "bail bangla",
      "greftaar rights", "police dhore niyeche",
      // Marathi
      "aataayit", "pakdna marathi", "bail marathi", "hatakdi",
      "pakarle", "police ne pakadla",
      // Punjabi
      "girftar", "giraftari punjabi", "bail", "hathakadiaan",
      "pulis ne pakad liya punjabi",
      // Tamil
      "kadathal", "kalayizhakka", "bail tamil", "kaidhiyin urimai",
      "police piditthal",
      // Telugu
      "arrest chesadu", "bail telugu", "handcuffs telugu", "bandhi chesadu",
      // Gujarati
      "dharpakaad", "bail gujarati", "police e pakadyo",
      // Kannada
      "badhitha", "bail kannada", "police hididaru",
      // Malayalam
      "arrest cheyyappettal", "bail malayalam", "kaiyookkukal",
      // Urdu
      "giraftari", "qaid", "bail", "hathkadi", "pulis ne pakda",
    ],
    language_hints: [
      "giraftari", "pakadhna", "hathkadi", "girftar",
      "greftaar", "aataayit", "kadathal", "arrest chesadu",
      "dharpakaad", "badhitha", "arrest cheyyappettal",
    ],
    answer:
      "Upon arrest, you have the right to: (1) be informed of the grounds of arrest; (2) consult and be defended by a lawyer of your choice; (3) be produced before a Magistrate within 24 hours; (4) not be subjected to unnecessary restraint; (5) be informed of the right to bail if the offence is bailable. Under Article 22 of the Constitution and the D.K. Basu guidelines issued by the Supreme Court, the police must follow strict procedural safeguards.",
    references: ["Constitution Article 22", "CrPC Section 50", "CrPC Section 56", "CrPC Section 57"],
  },

  {
    category: "Criminal Law",
    question: "What is the punishment for murder in India?",
    keywords: [
      // English
      "murder", "homicide", "kill", "killing", "killed", "death penalty",
      "culpable homicide", "manslaughter", "capital punishment",
      "life imprisonment murder",
      // Hindi
      "hatya", "qatl", "khoon", "hatyara", "jaan se maarna",
      "hatya ki saza", "murder ki saza", "khoon karna",
      // Bengali
      "khun", "hatya bangla", "khuni", "maareche", "jibonnash",
      "murder saja bangla",
      // Marathi
      "hatya marathi", "khun marathi", "khunache shiksha",
      "maarle", "jiv ghene",
      // Punjabi
      "qatl", "khoon", "marna", "hatya punjabi", "maut di saza",
      // Tamil
      "kolai", "kolaiyan", "jeevan nasham", "kolai thandanai",
      // Telugu
      "hatya telugu", "vadhinchadam", "vadhimpu", "chempadu",
      // Gujarati
      "hatya gujarati", "khoon karvu", "marvanu",
      // Kannada
      "hatye", "kond haaku", "praanahani",
      // Malayalam
      "kolla", "kolpathichal", "hatyachayan",
      // Urdu
      "qatl", "khoon", "hatyara", "murder",
    ],
    language_hints: [
      "hatya", "qatl", "khoon", "hatyara",
      "kolai", "hatye", "kolla", "khunache",
      "vadhinchadam", "murder saja",
    ],
    answer:
      "Under Section 302 of the Indian Penal Code, murder is punishable with death or imprisonment for life, and also a fine. Culpable homicide not amounting to murder (Section 304 IPC) carries imprisonment up to 10 years or life imprisonment depending on the intent involved. Cases involving murder are tried by a Sessions Court.",
    references: ["IPC Section 299", "IPC Section 300", "IPC Section 302", "IPC Section 304"],
  },

  {
    category: "Criminal Law",
    question: "What constitutes sexual harassment at the workplace in India?",
    keywords: [
      // English
      "sexual harassment", "workplace harassment", "POSH", "misconduct",
      "hostile work environment", "office harassment", "unwanted advances",
      "posh act", "internal complaints committee", "ICC",
      // Hindi
      "youn utteedan", "karya sthal par utteedan", "kaam par utteedan",
      "karyasthal ling utpeedan", "office mein chhedkhaani",
      // Bengali
      "jouno nipiron", "karmasthale jouno nipiron", "posh act bangla",
      // Marathi
      "lyngik chhan", "karyasthali ling bhed", "posh marathi",
      "karmasthali lainggik chhalachhol",
      // Punjabi
      "lingik utteedan", "kaam te utteedan", "posh punjabi",
      // Tamil
      "payalvaruvappu", "palisaiyar thagaamai", "posh tamil",
      "pali nilaiyangalil payalvaruvappu",
      // Telugu
      "lingaparamaina vexatharpu", "posh telugu",
      // Gujarati
      "jaatigat utpeedan", "karya sthal par jaatigat utpeedan",
      // Kannada
      "laiMgika kopagrasta", "kaaryasthala upadrava",
      // Malayalam
      "lainggika parechal", "thozhilsthala parechal",
    ],
    language_hints: [
      "youn utteedan", "karya sthal par utteedan", "kaam par utteedan",
      "jouno nipiron", "lyngik chhan", "payalvaruvappu",
      "lingaparamaina", "jaatigat utpeedan",
    ],
    answer:
      "Under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act), sexual harassment includes any unwelcome act of physical contact, demand for sexual favours, sexually coloured remarks, showing pornography, or any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature. Every employer with 10 or more employees must constitute an Internal Complaints Committee (ICC). A complaint must be filed within 3 months of the incident.",
    references: ["POSH Act 2013 Section 2", "POSH Act 2013 Section 4", "IPC Section 354A"],
  },

  {
    category: "Criminal Law",
    question: "What is the law on domestic violence in India?",
    keywords: [
      // English
      "domestic violence", "wife beating", "husband abuse", "family violence",
      "marital abuse", "home violence", "spousal abuse", "protection order", "dv act",
      // Hindi
      "gharelu hinsa", "patni par atyachar", "parivaarik hinsa",
      "ghar mein maar", "pati ne maara", "ghar mein hinsa",
      "dv act hindi", "gharelu hinsa act",
      // Bengali
      "gharoyaa nistartan", "gharer modhye nishthurta", "bongsho hinsa",
      "ghorer bhindar maarpit", "gharelu nirjaton bangla",
      // Marathi
      "gharoguti hinsa", "gharachi hinsa", "kutumba hinsa marathi",
      "navarya ne marale", "gharoguti atyachar",
      // Punjabi
      "gharelu hinsa punjabi", "parivarik hinsa", "ghar vich maar",
      "pati ne mar kutta", "dv act punjabi",
      // Tamil
      "kuduumba vashappuram", "vegupuram", "illama kodumai",
      "manaivi adikkapadal",
      // Telugu
      "kutumba himsaa", "illu himsaa", "bhaarya bedhiri",
      // Gujarati
      "gharelu hinsa gujarati", "parivar hinsa", "dv act gujarati",
      // Kannada
      "kudumba daurjanya", "maneyalli daurjanya",
      // Malayalam
      "gruha himsam", "kudumbiya palapeedam",
      // Urdu
      "gharelu tashadud", "aurat par zulm", "ghar mein maar",
    ],
    language_hints: [
      "gharelu hinsa", "patni par atyachar", "parivaarik hinsa", "ghar mein maar",
      "gharoyaa nistartan", "gharoguti hinsa", "kuduumba vashappuram",
      "kutumba himsaa", "gharelu hinsa gujarati", "kudumba daurjanya",
      "gruha himsam", "gharelu tashadud",
    ],
    answer:
      "The Protection of Women from Domestic Violence Act, 2005 protects women from physical, sexual, verbal, emotional, and economic abuse by family members or live-in partners. A victim can approach a Protection Officer, Magistrate, or police. Available remedies include a Protection Order, Residence Order, Monetary Relief, Custody Order, and Compensation Order. The Magistrate can pass an ex-parte order in urgent cases.",
    references: ["DV Act 2005 Section 3", "DV Act 2005 Section 12", "DV Act 2005 Section 18", "IPC Section 498A"],
  },

  {
    category: "Criminal Law",
    question: "What is cybercrime and what are the penalties in India?",
    keywords: [
      // English
      "cybercrime", "hacking", "online fraud", "cyber fraud", "data theft",
      "phishing", "cyber attack", "online scam", "internet fraud",
      "identity theft", "cyber stalking", "it act", "information technology",
      // Hindi
      "saibhar apraadh", "online thagee", "internet dhokha",
      "online fraud hindi", "cyber crime hindi",
      // Bengali
      "saibar opradh", "online prochaloona", "internet thagi",
      // Marathi
      "saibhar apraadh marathi", "online phsavnuk", "internet gulam",
      // Punjabi
      "cyber apradh", "online thaagee punjabi", "internet fraud punjabi",
      // Tamil
      "minnanu kurumbu", "online Vaṉcaṉam", "cyber crime tamil",
      // Telugu
      "cyber nirbhayatva", "online vanchana", "internet mosapu",
      // Gujarati
      "cyber apradh gujarati", "online thagari", "internet fraud gujarati",
      // Kannada
      "saibar aparadha", "online vaancha", "internet moshana",
      // Malayalam
      "cyber krimi", "online thadavara", "internet thagippu",
      // Urdu
      "saibhar jaraayim", "online faraib", "internet thagi urdu",
    ],
    language_hints: [
      "saibhar apraadh", "online thagee", "internet dhokha",
      "saibar opradh", "saibhar apraadh marathi", "minnanu kurumbu",
      "online vanchana", "saibar aparadha", "cyber krimi",
    ],
    answer:
      "The Information Technology Act, 2000 governs cybercrimes in India. Key offences include: hacking (Section 66 – up to 3 years imprisonment or fine up to Rs. 5 lakh); identity theft (Section 66C – up to 3 years + fine); cyber stalking and obscene messages (Section 67 – up to 5 years + fine); online fraud is also covered under IPC Sections 419 and 420. Complaints can be filed at the nearest cyber crime police station or online at cybercrime.gov.in.",
    references: ["IT Act Section 43", "IT Act Section 66", "IT Act Section 66C", "IT Act Section 67", "IPC Section 420"],
  },

  // ─── FAMILY LAW ────────────────────────────────────────────────────────────

  {
    category: "Family Law",
    question: "What are the grounds for divorce in India?",
    keywords: [
      // English
      "divorce", "separation", "marriage dissolution", "end marriage",
      "mutual divorce", "contested divorce", "divorce petition",
      // Hindi
      "talaq", "talaak", "vivah viched", "alag hona", "talak",
      "divorce kaise lein", "talaq lena", "alag rehna",
      "ek taraf talaq", "mutual consent divorce hindi",
      // Bengali
      "talak", "biye bhaanga", "divorce bangla", "alada howa",
      "bibaaha binash",
      // Marathi
      "ghasfot", "vivah chinmul karna", "talaq marathi",
      "ghasfot kasa ghayla", "divorce marathi",
      // Punjabi
      "talaq punjabi", "rishta todna", "allag hona", "ghar chhadna",
      // Tamil
      "manavita vivaagam", "vivaagam", "tirumanam kalangi",
      "talaq tamil",
      // Telugu
      "vividahamu", "vaiduvyamu", "divorce telugu", "talaq telugu",
      // Gujarati
      "chhuuTa cedavvu", "chhuuTaachedaan", "divorce gujarati",
      // Kannada
      "vividahe", "gande hoyisu", "divorce kannada",
      // Malayalam
      "vividaham", "vivaaham parinjupokkal", "divorce malayalam",
      // Urdu
      "talaq", "khula", "fasakh", "alag hona urdu",
    ],
    language_hints: [
      "talaq", "talaak", "vivah viched", "alag hona", "talak",
      "ghasfot", "talak bangla", "manavita vivaagam", "vividahamu",
      "chhuuTa cedavvu", "vividahe", "vividaham", "khula",
    ],
    answer:
      "Grounds for divorce vary by religion. Under the Hindu Marriage Act, 1955, grounds include cruelty, adultery, desertion for 2 years, conversion to another religion, mental disorder, and presumption of death. Mutual consent divorce is available under Section 13B after 1 year of separation. For Muslims, divorce is governed by Muslim Personal Law; for Christians, by the Indian Divorce Act, 1869; for Parsis, by the Parsi Marriage and Divorce Act, 1936.",
    references: ["Hindu Marriage Act Section 13", "Hindu Marriage Act Section 13B", "Special Marriage Act Section 27"],
  },

  {
    category: "Family Law",
    question: "How is child custody decided in India after divorce?",
    keywords: [
      // English
      "child custody", "custody", "guardianship", "parenting rights",
      "minor child", "mother custody", "father custody", "kids custody",
      // Hindi
      "bacche ki custody", "bachche ki dekhbhal", "palak", "bachche ka haq",
      "bacha kiski paas rahega", "custody kise milegi",
      // Bengali
      "shishu preshan", "bacchaar abhivaavak", "custody bangla",
      "shishu akaar", "bachchar raksha",
      // Marathi
      "mulaachi taabbi", "palak marathi", "custody marathi",
      "mulala kon thevanar",
      // Punjabi
      "bachche di custody", "bacchian da haq", "palak punjabi",
      // Tamil
      "kuzhandhai kaavalan", "kuzhandhai vaadal", "custody tamil",
      // Telugu
      "pillal samrakshanam", "custody telugu", "pillal posanam",
      // Gujarati
      "baakanu raakhan", "palak gujarati", "custody gujarati",
      // Kannada
      "makkala samrakshane", "palaka kannada",
      // Malayalam
      "kutti sanrakshana", "custody malayalam",
      // Urdu
      "bachche ki nigrani", "custody urdu", "hizanat",
    ],
    language_hints: [
      "bacche ki custody", "bachche ki dekhbhal", "palak", "bachche ka haq",
      "shishu preshan", "mulaachi taabbi", "kuzhandhai kaavalan",
      "pillal samrakshanam", "makkala samrakshane", "hizanat",
    ],
    answer:
      "In India, child custody is governed by the Guardians and Wards Act, 1890 and personal laws. Courts decide custody based on the 'best interest of the child' principle. Types of custody include physical custody, legal custody, joint custody, and sole custody. Courts consider factors such as the child's age, financial capacity of parents, the child's preference (if old enough), and the moral character of the parents.",
    references: ["Guardians and Wards Act Section 17", "Hindu Minority and Guardianship Act Section 6", "Hindu Marriage Act Section 26"],
  },

  {
    category: "Family Law",
    question: "What is the law on maintenance for wife and children in India?",
    keywords: [
      // English
      "maintenance", "alimony", "support", "wife support", "child support",
      "monthly allowance", "section 125", "maintenance crpc",
      // Hindi
      "nafaqa", "bharan poshan", "guzara", "nafqa", "kharch",
      "pati se paisa", "wife ko paisa", "child support hindi",
      "bharan poshan kaise milega",
      // Bengali
      "bharan poshan bangla", "nafaka", "bibaahito bharan",
      "sthayee kharch", "bibaahita bharan",
      // Marathi
      "paalnposhan", "bharan poshan marathi", "maintenance marathi",
      "paisa milawa",
      // Punjabi
      "nafaqa punjabi", "paalan poshan", "maintenance punjabi",
      "paisa milna",
      // Tamil
      "uravattchi pagirvu", "payiru", "bhadhagam",
      "maintenance tamil", "nafaga tamil",
      // Telugu
      "posha bharanamu", "nafaka telugu", "maintenance telugu",
      // Gujarati
      "bharan poshan gujarati", "nafaka gujarati",
      // Kannada
      "poshanaa", "nafaka kannada", "maintenance kannada",
      // Malayalam
      "bhara poshan", "poshana thalukku", "maintenance malayalam",
      // Urdu
      "nafaqa", "guzara bhatta", "bachche ka kharcha",
    ],
    language_hints: [
      "nafaqa", "bharan poshan", "guzara", "nafqa", "kharch",
      "paalnposhan", "nafaka", "uravattchi pagirvu", "posha bharanamu",
      "nafaka gujarati", "guzara bhatta",
    ],
    answer:
      "Under Section 125 of the CrPC, any person who has sufficient means and neglects to maintain their wife, children, or parents can be ordered to pay monthly maintenance by a Magistrate. Under the Hindu Adoption and Maintenance Act, 1956, a Hindu wife is entitled to maintenance from her husband. The amount is determined by the court based on the income of the husband and needs of the wife/children.",
    references: ["CrPC Section 125", "Hindu Adoption and Maintenance Act Section 18", "Hindu Adoption and Maintenance Act Section 20"],
  },

  {
    category: "Family Law",
    question: "What are the legal requirements for a valid marriage in India?",
    keywords: [
      // English
      "marriage", "wedding", "valid marriage", "marriage age", "marry",
      "marriage registration", "marriage certificate", "marriage act",
      // Hindi
      "shaadi", "vivah", "byah", "shadi", "nikah",
      "shaadi ki umar", "vivah panjikaran", "shaadi certificate",
      // Bengali
      "biye", "bivaaha", "bivaaha nondokaron", "biye registration",
      "biyaar boyos",
      // Marathi
      "lagna", "vivah marathi", "marriage registration marathi",
      "lagnacha dakhala",
      // Punjabi
      "viaah", "shaadi punjabi", "vivah punjabi", "viah certificate",
      // Tamil
      "thirumanam", "kalyanam", "thirumana pothivu", "thirumanam vayadu",
      // Telugu
      "vivaaham", "pellipandiri", "marriage telugu", "vivahamu",
      // Gujarati
      "lagna", "vivah gujarati", "lagnanee umar",
      // Kannada
      "maduve", "marriage kannada", "vivaahadha",
      // Malayalam
      "vivaaham", "kalyanam", "vivaaham register",
      // Urdu
      "nikah", "shaadi", "aqd", "vivah urdu",
    ],
    language_hints: [
      "shaadi", "vivah", "nikah", "byah", "shadi",
      "biye", "lagna", "viaah", "thirumanam", "vivaaham",
      "maduve", "kalyanam", "aqd",
    ],
    answer:
      "Under the Hindu Marriage Act, 1955, a valid Hindu marriage requires: neither party to have a living spouse; neither party to be of unsound mind; the groom to be at least 21 and the bride at least 18 years of age; and the parties must not be within prohibited degrees of relationship. Marriage registration is compulsory in most states. The Special Marriage Act, 1954 allows for inter-religion marriages.",
    references: ["Hindu Marriage Act Section 5", "Hindu Marriage Act Section 8", "Special Marriage Act Section 4"],
  },

  // ─── PROPERTY LAW ──────────────────────────────────────────────────────────

  {
    category: "Property Law",
    question: "What is the process for property registration in India?",
    keywords: [
      // English
      "property registration", "sale deed", "registry", "land registration",
      "stamp duty", "house registration", "flat registration",
      "sub registrar", "property papers",
      // Hindi
      "zameen registry", "sampatti panjikaran", "dastavej", "registry",
      "stamp duty", "zameen ke kaagaz", "ghar ki registry",
      "property kaise register karein",
      // Bengali
      "sampatti nondokaron", "jomi registration", "deed bangla",
      "stamp duty bangla",
      // Marathi
      "sampatti nondnikaran", "jamin nondni marathi", "deed marathi",
      // Punjabi
      "zameen registry punjabi", "property darj", "deed punjabi",
      // Tamil
      "sampathhu pathivu", "nilam pathivu", "deed tamil",
      // Telugu
      "aasthi nondanam", "bhumi nondanam", "deed telugu",
      // Gujarati
      "sampatti nondho", "jamin nondho", "deed gujarati",
      // Kannada
      "adhara nondane", "bhoomi nondane",
      // Malayalam
      "sampathhi rethivu", "bhoomi rethivu",
      // Urdu
      "jaidad ka iqdaam", "zameen registry urdu",
    ],
    language_hints: [
      "zameen registry", "sampatti panjikaran", "dastavej", "registry",
      "jomi registration", "sampatti nondnikaran", "sampathhu pathivu",
      "aasthi nondanam", "adhara nondane", "sampathhi rethivu",
    ],
    answer:
      "Property registration in India is governed by the Registration Act, 1908. The process involves: (1) getting the sale deed drafted on stamp paper of appropriate value; (2) paying stamp duty as per state rates; (3) visiting the Sub-Registrar's office with both buyer and seller; (4) providing identity proof, property documents, and two witnesses; (5) biometric verification and photograph. Registration must be done within 4 months of execution.",
    references: ["Registration Act Section 17", "Registration Act Section 23", "Transfer of Property Act Section 54"],
  },

  {
    category: "Property Law",
    question: "What are the rights of a tenant in India?",
    keywords: [
      // English
      "tenant", "renter", "rent", "eviction", "landlord", "tenancy",
      "house rent", "rental", "lease", "rent agreement", "rental agreement",
      // Hindi
      "kiraya", "kirayedaar", "makaanmaalik", "kiraya ghar", "makaan",
      "kirayedaar ke adhikar", "makan malik ne nikaala",
      "bahar nikaala", "rent dena", "kiraya agreement",
      // Bengali
      "kiraa", "kiraadar", "baadamaalik", "kiraaar adhikaar",
      "ghor theke bahar kare diyeche",
      // Marathi
      "bhaade", "bhaadekar", "bhaadyacha adhikar", "ghar bhaadyane",
      "bhaadekar hakka",
      // Punjabi
      "kiraya punjabi", "kireyedaar", "makan malik ne bahar kita",
      "kiraye de adhikar",
      // Tamil
      "vaadagaiyar", "kudivarumai", "vaaral urimai", "vaadagai urimai",
      // Telugu
      "aadakam", "aadakandaarudu", "aadakam hakkulu",
      // Gujarati
      "bhaadu", "bhaade rahevasi", "bhaaduthi hakaak",
      // Kannada
      "baadige", "baadigenirru", "baadige hakku",
      // Malayalam
      "vaadaga", "vaadakakkaarannu", "vaadaga adhikaram",
      // Urdu
      "kiraya", "kiraadar", "makaan malik", "kiraye ka haqq",
    ],
    language_hints: [
      "kiraya", "kirayedaar", "makaanmaalik", "kiraya ghar",
      "kiraadar", "bhaadekar", "vaadagaiyar", "aadakam",
      "bhaadu", "baadige", "vaadaga", "kiraadar urdu",
    ],
    answer:
      "Tenant rights in India are governed by state-specific Rent Control Acts. General tenant rights include: the right to a rent receipt, the right to essential services (water, electricity), protection from illegal eviction, and the right to a written rental agreement. A landlord can evict a tenant only on specific grounds such as non-payment of rent, subletting without permission, or personal need, and only through a court order.",
    references: ["Transfer of Property Act Section 108", "Delhi Rent Control Act", "Model Tenancy Act 2021"],
  },

  {
    category: "Property Law",
    question: "What is adverse possession and how does it work in India?",
    keywords: [
      // English
      "adverse possession", "squatter rights", "prescriptive title",
      "occupy land", "12 years land", "30 years land", "limitation act land",
      // Hindi
      "zameen par kabza", "pratikulta se kabza", "bhoomi kabza",
      "jameen par kabza", "purana kabza", "12 saal kabza",
      // Bengali
      "jomi daakhal", "pratikoola kabja", "bhoomi daakhal",
      // Marathi
      "jamin kabza marathi", "pratikulta kabja",
      // Punjabi
      "zameen te kabza", "purana kabza punjabi",
      // Tamil
      "nilam aarama", "nilamthadai urimai",
      // Telugu
      "bhoomi aadhipatyam", "bhumi kabja telugu",
      // Gujarati
      "jameen kabjo", "zameen par kabja gujarati",
      // Kannada
      "bhumi adhipati", "bhumi kabja kannada",
      // Malayalam
      "bhoomi adhikaram", "bhumi kabja malayalam",
    ],
    language_hints: [
      "pratikulta se kabza", "zameen par kabza", "bhoomi kabza", "jameen par kabza",
      "jomi daakhal", "jamin kabza", "nilam aarama", "bhoomi aadhipatyam",
      "jameen kabjo", "bhumi adhipati",
    ],
    answer:
      "Adverse possession is a legal doctrine under which a person who continuously, openly, and hostilely possesses another person's land for 12 years (private land) or 30 years (government land) may acquire legal title to that land. The possession must be continuous, uninterrupted, hostile, and with the knowledge of the original owner. The original owner must file a suit for recovery within the limitation period or lose the right.",
    references: ["Limitation Act 1963 Article 65", "Transfer of Property Act", "Specific Relief Act Section 5"],
  },

  // ─── LABOUR LAW ────────────────────────────────────────────────────────────

  {
    category: "Labour Law",
    question: "What are the rules for gratuity payment in India?",
    keywords: [
      // English
      "gratuity", "retirement benefit", "service benefit", "gratuity payment",
      "employee benefit", "leaving job benefit",
      // Hindi
      "upardan", "seva nidhi", "sewa labh", "naukri chhodni par paisa",
      "retirement par paisa", "gratuity kaise milti hai",
      // Bengali
      "gratuity bangla", "sevaa nidhi bangla", "anugraha pradan",
      // Marathi
      "upadan marathi", "gratuity marathi", "seva laaabh",
      // Punjabi
      "gratuity punjabi", "sewa nidhi punjabi", "naukri chhadan te",
      // Tamil
      "parisukku", "thozhil nidhi", "gratitude nidhis",
      // Telugu
      "upakara vetanam", "gratuity telugu", "seva nidhi telugu",
      // Gujarati
      "gratuity gujarati", "seva nidhi gujarati",
      // Kannada
      "gratuity kannada", "seva nidhi kannada",
      // Malayalam
      "gratuity malayalam", "seva nidhi malayalam",
    ],
    language_hints: [
      "upardan", "seva nidhi", "sewa labh", "gratuity",
      "anugraha pradan", "upadan marathi", "parisukku",
      "upakara vetanam",
    ],
    answer:
      "Under the Payment of Gratuity Act, 1972, an employee is entitled to gratuity after completing 5 years of continuous service. It is payable on retirement, resignation, superannuation, death, or disablement. Gratuity is calculated as: (Last drawn salary × 15/26 × Number of years of service). The maximum gratuity amount is Rs. 20 lakhs. The employer must pay gratuity within 30 days of it becoming payable.",
    references: ["Payment of Gratuity Act Section 4", "Payment of Gratuity Act Section 7", "Payment of Gratuity Act Section 9"],
  },

  {
    category: "Labour Law",
    question: "What are the legal rules for termination of employment in India?",
    keywords: [
      // English
      "termination", "fired", "dismissed", "retrenchment", "layoff",
      "wrongful termination", "illegal termination", "termination notice",
      "retrenchment compensation", "industrial disputes",
      // Hindi
      "naukri jaana", "job loss", "sacked", "naukri se nikalna",
      "naukri chhodna", "job se barkhast", "naukri gayi",
      "naukri se nikaala", "retrenchment hindi",
      // Bengali
      "chakri jaoa", "bangla termination", "chakri chhede dewa",
      "chhantai", "karmii barkhast",
      // Marathi
      "naukri jaane", "barkhast marathi", "retrenchment marathi",
      // Punjabi
      "naukri jaan", "naukri ton kadhna", "job terminate punjabi",
      // Tamil
      "velaiyil irundu naeekai", "paathai", "thozhil mudithal",
      // Telugu
      "vela naashamu", "velakoriku teesivadam", "naasham telugu",
      // Gujarati
      "nokri jaavvi", "nokri na chhutaa", "termination gujarati",
      // Kannada
      "kelegari", "nokri hogi", "termination kannada",
      // Malayalam
      "thozhil naluvadal", "dismissal malayalam",
      // Urdu
      "naukri chhaana", "mulazmat khatam", "barkhastagi",
    ],
    language_hints: [
      "naukri se nikalna", "naukri chhodna", "job se barkhast", "naukri gayi",
      "chakri jaoa", "naukri jaane", "naukri jaan", "velaiyil irundu",
      "vela naashamu", "nokri jaavvi", "kelegari", "barkhastagi",
    ],
    answer:
      "Termination of employment is governed by the Industrial Disputes Act, 1947. For workmen in industries with 100+ employees, prior government permission is required for retrenchment. A notice period of 30 days (or pay in lieu) must be given. Retrenchment compensation of 15 days' average pay for every completed year of service is mandatory. Wrongful termination can be challenged before the Labour Court.",
    references: ["Industrial Disputes Act Section 25F", "Industrial Disputes Act Section 25G", "Industrial Disputes Act Section 25N"],
  },

  {
    category: "Labour Law",
    question: "What is the minimum wage law in India?",
    keywords: [
      // English
      "minimum wage", "salary", "pay", "wages", "remuneration",
      "low salary", "underpaid", "minimum wages act",
      // Hindi
      "nyuntam vetan", "minimum tankhwah", "kam se kam mazdoori",
      "nyuntam mujuri", "kam mujdoori", "mazdoori ka adhikar",
      // Bengali
      "nyunatam mushakha", "mushakha niyom", "kam mujuri",
      // Marathi
      "kimataan vetan", "nyunatam vetan marathi", "minimum wage marathi",
      // Punjabi
      "minimum tankhwah punjabi", "odo mazuri", "kam tankhwah",
      // Tamil
      "kuzhu chaambalam", "kuzhu saram", "thadangu chambal",
      // Telugu
      "knanishtha vetanam", "minimum vetanam telugu",
      // Gujarati
      "nyunatam vetan gujarati", "ochamaa vetan",
      // Kannada
      "kanishtadhar", "kama vetana",
      // Malayalam
      "ellavum kuranja vetanam", "minimum vetan malayalam",
      // Urdu
      "minimum tankhwah urdu", "mazdoor ka haq",
    ],
    language_hints: [
      "nyuntam vetan", "minimum tankhwah", "kam se kam mazdoori",
      "nyuntam mujuri", "nyunatam mushakha", "kuzhu chaambalam",
      "knanishtha vetanam", "kanishtadhar",
    ],
    answer:
      "The Minimum Wages Act, 1948 requires employers to pay workers not less than the minimum wage fixed by the Central or State Government for scheduled employments. Minimum wages vary by state, industry, and skill category. Failure to pay minimum wages is a criminal offence punishable with imprisonment up to 5 years and/or fine. Workers can file complaints with the Labour Commissioner.",
    references: ["Minimum Wages Act Section 3", "Minimum Wages Act Section 22", "Code on Wages 2019"],
  },

  {
    category: "Labour Law",
    question: "What are the maternity leave rights for women in India?",
    keywords: [
      // English
      "maternity leave", "pregnancy leave", "maternity benefit", "motherhood leave",
      "pregnant employee", "maternity benefit act", "26 weeks leave",
      // Hindi
      "prasooti chhutti", "matritva labh", "garbhavastha chhutti",
      "pregnancy chhutti", "maa banne par chhutti",
      // Bengali
      "prasuti chhuti", "garbhakaaleen chhuti", "matritva chhuti bangla",
      // Marathi
      "prasuti raa marathi", "garbhavastha shutti", "matritva shutti",
      // Punjabi
      "garbavstha chhutti", "prasooti chutti punjabi",
      // Tamil
      "acchai vidumuurai", "garbha vidumuurai", "maternity tamil",
      // Telugu
      "prasava sasrama", "pregnanci vidamu", "maternity telugu",
      // Gujarati
      "prasooti chhuti gujarati", "garbhaavasthi chhuti",
      // Kannada
      "prasoota rजಜe", "prasoota chhutti kannada",
      // Malayalam
      "prasooti ayiraanam", "garba ayiraanam",
      // Urdu
      "zuchgi chhutti", "hamla chhutti",
    ],
    language_hints: [
      "prasooti chhutti", "matritva labh", "garbhavastha chhutti",
      "prasuti chhuti", "prasooti raa marathi", "acchai vidumuurai",
      "prasava sasrama", "prasooti chhuti gujarati", "prasoota raje",
    ],
    answer:
      "Under the Maternity Benefit (Amendment) Act, 2017, women employed in establishments with 10 or more employees are entitled to 26 weeks of paid maternity leave for the first two children (12 weeks for the third child). The employer cannot dismiss or discharge a woman during maternity leave. Nursing breaks of 2 per day until the child is 15 months old are also mandated. Establishments with 50+ employees must provide creche facilities.",
    references: ["Maternity Benefit Act Section 5", "Maternity Benefit Act Section 6", "Maternity Benefit Act Section 11A"],
  },

  // ─── CONSUMER LAW ──────────────────────────────────────────────────────────

  {
    category: "Consumer Law",
    question: "How can I file a consumer complaint in India?",
    keywords: [
      // English
      "consumer complaint", "consumer forum", "defective product", "service deficiency",
      "consumer court", "refund", "bad product", "consumer commission",
      "consumer protection", "product defect",
      // Hindi
      "upbhokta shikaayat", "upbhokta forum", "grahak seva",
      "grahak shikayat", "kharaab product ki shikayat",
      "consumer court hindi", "product waapas karo",
      // Bengali
      "upobhakta shikayet", "upobhakta saja", "bikritu panyo",
      "sebaagata kami",
      // Marathi
      "grahak takrar marathi", "upbhokta court marathi",
      // Punjabi
      "grahak shikayat punjabi", "consumer court punjabi",
      // Tamil
      "niravela paadal", "kadumaiyaana porul", "consumer court tamil",
      // Telugu
      "vupayogadaarudu futiyaadu", "consumer court telugu",
      // Gujarati
      "grihak faaryad gujarati", "consumer court gujarati",
      // Kannada
      "grahaka dasari", "consumer court kannada",
      // Malayalam
      "upabhoktha parati", "consumer court malayalam",
      // Urdu
      "sarfkaar shikayat", "consumer court urdu",
    ],
    language_hints: [
      "upbhokta shikaayat", "upbhokta forum", "grahak seva", "grahak shikayat",
      "upobhakta shikayet", "grahak takrar marathi", "niravela paadal",
      "vupayogadaarudu", "grihak faaryad", "upabhoktha parati",
    ],
    answer:
      "Under the Consumer Protection Act, 2019, a consumer can file a complaint for defective goods, deficiency in services, unfair trade practices, or overcharging. Complaints can be filed at: District Consumer Commission (claims up to Rs. 1 crore), State Consumer Commission (Rs. 1 crore to Rs. 10 crore), or National Consumer Disputes Redressal Commission (above Rs. 10 crore). Complaints can also be filed online at consumerhelpline.gov.in. The complaint must be filed within 2 years of the cause of action.",
    references: ["Consumer Protection Act 2019 Section 34", "Consumer Protection Act 2019 Section 47", "Consumer Protection Act 2019 Section 58"],
  },

  {
    category: "Consumer Law",
    question: "What are the consumer rights under Indian law?",
    keywords: [
      // English
      "consumer rights", "buyer rights", "product warranty", "right to information",
      "customer rights", "shopping rights",
      // Hindi
      "upbhokta adhikar", "grahak ke adhikar", "grahak adhikar",
      "khareedaar ke haq",
      // Bengali
      "upobhaktar adhikaar", "khreetaar adhikar",
      // Marathi
      "grahak hak marathi", "upbhokta adhikar marathi",
      // Punjabi
      "grahak de adhikar", "consumer rights punjabi",
      // Tamil
      "neeraivalar urimai", "kataikkari urimai",
      // Telugu
      "vupayogadaarudu hakku", "consumer rights telugu",
      // Gujarati
      "grihak hakko", "consumer rights gujarati",
      // Kannada
      "grahaka hakku", "consumer rights kannada",
      // Malayalam
      "upabhoktha adhikaram", "consumer rights malayalam",
    ],
    language_hints: [
      "upbhokta adhikar", "grahak ke adhikar", "upobhaktar adhikaar",
      "neeraivalar urimai", "vupayogadaarudu hakku", "grahaka hakku",
    ],
    answer:
      "The Consumer Protection Act, 2019 recognizes six consumer rights: (1) Right to Safety; (2) Right to Information about quality, quantity, and price; (3) Right to Choose; (4) Right to be Heard in consumer forums; (5) Right to Redress for defective goods or services; (6) Right to Consumer Education. The Act also establishes the Central Consumer Protection Authority (CCPA) to regulate and investigate consumer complaints.",
    references: ["Consumer Protection Act 2019 Section 2(9)", "Consumer Protection Act 2019 Section 10"],
  },

  // ─── CONSTITUTIONAL LAW ────────────────────────────────────────────────────

  {
    category: "Constitutional Law",
    question: "What are the fundamental rights guaranteed by the Indian Constitution?",
    keywords: [
      // English
      "fundamental rights", "constitutional rights", "basic rights",
      "civil liberties", "human rights india", "part iii constitution",
      // Hindi
      "maulik adhikar", "samvidhanik adhikar", "bunyadi haq",
      "mulbhut adhikar", "mulbhoot adhikar", "nagrik ke adhikar",
      // Bengali
      "moulika adhikar", "sambidhaan adhikar", "moolabhut odhikar",
      // Marathi
      "moulik adhikar marathi", "samvidhaanik adhikar marathi",
      // Punjabi
      "buniyaadi adhikar", "sanvidhanik adhikar punjabi",
      // Tamil
      "adipadai urimai", "mulai urimai", "constitution urimai",
      // Telugu
      "mulika hakkuluu", "rashtrapathi adhikaraa",
      // Gujarati
      "mulbhut hakko", "samvaidhanik hakko",
      // Kannada
      "moolabhuta hakku", "samvaidhanika hakku",
      // Malayalam
      "moulika adhikaram", "samvidhana adhikaram",
      // Urdu
      "bunyaadi haqooq", "asaasi haqooq",
    ],
    language_hints: [
      "maulik adhikar", "samvidhanik adhikar", "bunyadi haq", "mulbhut adhikar",
      "moulika adhikar", "adipadai urimai", "mulika hakkuluu",
      "mulbhut hakko", "moolabhuta hakku", "moulika adhikaram", "bunyaadi haqooq",
    ],
    answer:
      "Part III of the Indian Constitution (Articles 12–35) guarantees six fundamental rights: (1) Right to Equality (Articles 14–18); (2) Right to Freedom (Articles 19–22) – freedom of speech, movement, profession, and personal liberty; (3) Right against Exploitation (Articles 23–24); (4) Right to Freedom of Religion (Articles 25–28); (5) Cultural and Educational Rights (Articles 29–30); (6) Right to Constitutional Remedies (Article 32).",
    references: ["Constitution Article 12-35", "Constitution Article 14", "Constitution Article 19", "Constitution Article 21", "Constitution Article 32"],
  },

  {
    category: "Constitutional Law",
    question: "What is a writ petition and when can it be filed in India?",
    keywords: [
      // English
      "writ petition", "habeas corpus", "mandamus", "certiorari",
      "quo warranto", "prohibition writ", "writ court",
      // Hindi
      "rit yaachika", "habeas corpus hindi", "writ kya hai",
      "rit dakhil karna",
      // Bengali
      "rit abedan", "habeas corpus bangla",
      // Marathi
      "writ yachika marathi", "habeas corpus marathi",
      // Punjabi
      "writ petition punjabi", "habeas corpus punjabi",
      // Tamil
      "rit manavil", "writ Tamil",
      // Telugu
      "writ petition telugu", "habeas corpus telugu",
      // Gujarati
      "writ petition gujarati",
      // Kannada
      "writ petition kannada",
      // Malayalam
      "writ petition malayalam",
      // Urdu
      "writ petition urdu", "habeas corpus urdu",
    ],
    language_hints: [
      "rit yaachika", "habeas corpus", "mandamus", "writ",
      "rit abedan", "writ yachika marathi", "rit manavil",
    ],
    answer:
      "A writ petition is a legal remedy available under Article 32 (Supreme Court) or Article 226 (High Courts) to enforce fundamental rights. The five types of writs are: (1) Habeas Corpus – to produce a detained person before the court; (2) Mandamus – to compel a public authority to perform its duty; (3) Prohibition – to stop a lower court from exceeding its jurisdiction; (4) Certiorari – to quash an order of a lower court/tribunal; (5) Quo Warranto – to challenge a person's right to hold public office.",
    references: ["Constitution Article 32", "Constitution Article 226"],
  },

  // ─── MOTOR VEHICLE LAW ─────────────────────────────────────────────────────

  {
    category: "Motor Vehicle Law",
    question: "What are the legal steps after a road accident in India?",
    keywords: [
      // English
      "road accident", "car accident", "motor accident", "vehicle collision",
      "accident claim", "hit by car", "mact claim", "accident tribunal",
      // Hindi
      "sadak durghatna", "car accident hindi", "motor durghatna",
      "gaadi ki takkar", "durghatna", "haadsa", "car se takkar",
      "meri car accident ho gayi",
      // Bengali
      "road durghatna", "gari durghatna", "pathakkhore durghatna",
      // Marathi
      "rasta apghat", "vahan apghat", "apghat marathi",
      // Punjabi
      "sadak hadsa", "car hadsa", "road accident punjabi",
      // Tamil
      "sadaimaara vilainthal", "sarak vipadhu", "car thozhil",
      // Telugu
      "road pramadam", "vaahanam takkar", "accident telugu",
      // Gujarati
      "sadak apghat", "vahan apghat gujarati",
      // Kannada
      "raste appatta", "vaahanada appatta",
      // Malayalam
      "road akshamam", "vaahanaa akshamam",
      // Urdu
      "sadak hadsa", "car accident urdu",
    ],
    language_hints: [
      "sadak durghatna", "gaadi ki takkar", "durghatna", "haadsa",
      "road durghatna", "rasta apghat", "sadak hadsa", "sadaimaara vilainthal",
      "road pramadam", "sadak apghat", "raste appatta", "road akshamam",
    ],
    answer:
      "After a road accident in India: (1) Call police (100) and ambulance (108) immediately; (2) An FIR should be registered under Section 279/304A/338 IPC depending on severity; (3) For insurance claims, notify the insurer within the stipulated time; (4) Victims can claim compensation from the Motor Accident Claims Tribunal (MACT) under the Motor Vehicles Act, 1988; (5) In hit-and-run cases, compensation up to Rs. 2 lakh for death is available from the Solatium Fund.",
    references: ["Motor Vehicles Act Section 140", "Motor Vehicles Act Section 163A", "Motor Vehicles Act Section 166", "IPC Section 279"],
  },

  {
    category: "Motor Vehicle Law",
    question: "What are the penalties for drunk driving in India?",
    keywords: [
      // English
      "drunk driving", "DUI", "driving under influence", "alcohol driving",
      "drink and drive", "intoxicated driving",
      // Hindi
      "nashe mein gaadi", "sharaab peeke driving", "nasha karke gadi chalana",
      "daaru peeke gaadi", "drunk driving hindi",
      // Bengali
      "mod kheye gaadi", "nashe driving bangla",
      // Marathi
      "daru pioonu gadi chalvani", "drunk driving marathi",
      // Punjabi
      "sharaab pee ke gaadi", "drunk driving punjabi",
      // Tamil
      "kaLLu kudikkaatum valaithal",
      // Telugu
      "madu thuagi nalupuduvadam",
      // Gujarati
      "daaru pii ne gaadi chalavi",
      // Kannada
      "kallu kudidu caarisindu",
      // Malayalam
      "kuttu kudichu gari odikkuka",
      // Urdu
      "nashe mein gaadi chalana",
    ],
    language_hints: [
      "nashe mein gaadi", "sharaab peeke driving", "nasha karke gadi chalana",
      "mod kheye gaadi", "daru pioonu gadi", "sharaab pee ke gaadi",
      "daaru pii ne gaadi",
    ],
    answer:
      "Under the Motor Vehicles (Amendment) Act, 2019, drunk driving (blood alcohol level above 30 mg per 100 ml of blood) is punishable with: imprisonment up to 6 months or fine up to Rs. 10,000 or both for the first offence; imprisonment up to 2 years or fine up to Rs. 15,000 or both for a second offence. If an accident occurs due to drunk driving, additional charges under IPC Section 304A may apply.",
    references: ["Motor Vehicles Act Section 185", "IPC Section 279", "IPC Section 304A"],
  },

  // ─── REAL ESTATE / RERA ────────────────────────────────────────────────────

  {
    category: "Real Estate Law",
    question: "What are the rights of a home buyer under RERA in India?",
    keywords: [
      // English
      "RERA", "real estate", "home buyer", "flat buyer", "builder",
      "property delay", "builder cheating", "flat delayed",
      "builder complaint", "real estate law", "builder fraud",
      // Hindi
      "griha khariddar", "flat kharidna", "builder complaint hindi",
      "sampatti vivad", "rera", "flat delay ho gaya",
      "builder ne dhoka diya",
      // Bengali
      "flat kena", "builder bangla", "sampatti bilaamba",
      // Marathi
      "flat kharedi", "builder marathi", "rera marathi",
      // Punjabi
      "flat khareeda", "builder complaint punjabi",
      // Tamil
      "flat vaanguthal", "builder tamil", "rera tamil",
      // Telugu
      "flat konnukovadamu", "builder telugu", "rera telugu",
      // Gujarati
      "flat leva", "builder gujarati", "rera gujarati",
      // Kannada
      "flat kharedige", "builder kannada", "rera kannada",
      // Malayalam
      "flat vaanguka", "builder malayalam", "rera malayalam",
      // Urdu
      "flat kharidna urdu", "builder shikayat",
    ],
    language_hints: [
      "griha khariddar", "flat kharidna", "builder complaint", "sampatti vivad",
      "flat kena", "flat kharedi", "flat vaanguthal", "flat konnukovadamu",
      "flat leva", "flat kharedige", "flat vaanguka",
    ],
    answer:
      "The Real Estate (Regulation and Development) Act, 2016 (RERA) protects home buyers. Key rights include: (1) builders must register projects with the state RERA authority; (2) 70% of buyer funds must be kept in an escrow account; (3) buyers can get a refund with interest if the builder delays possession; (4) the builder cannot make changes to the plan without buyer consent; (5) buyers are entitled to all promised amenities. Complaints can be filed on the state RERA portal.",
    references: ["RERA Section 3", "RERA Section 4", "RERA Section 12", "RERA Section 18", "RERA Section 31"],
  },

  // ─── RTI ───────────────────────────────────────────────────────────────────

  {
    category: "Right to Information",
    question: "How can I file an RTI application in India?",
    keywords: [
      // English
      "RTI", "right to information", "government information", "RTI application",
      "public information", "information from government", "file rti",
      // Hindi
      "soochna ka adhikar", "RTI aavedan", "sarkari soochna",
      "rti kaise karein", "government se jaankari",
      // Bengali
      "tathya pawa adhikar", "RTI abedan bangla", "sarkar theke tathya",
      // Marathi
      "mahiti adhikar marathi", "RTI marathi",
      // Punjabi
      "suchna da adhikar", "RTI punjabi",
      // Tamil
      "thagaval urimai", "RTI tamil",
      // Telugu
      "smaachara haqqulu", "RTI telugu",
      // Gujarati
      "mahiti adhikar gujarati", "RTI gujarati",
      // Kannada
      "mahiti adhikar kannada", "RTI kannada",
      // Malayalam
      "viveika adhikaram", "RTI malayalam",
      // Urdu
      "haqq-e-maalumaat", "RTI urdu",
    ],
    language_hints: [
      "soochna ka adhikar", "RTI aavedan", "sarkari soochna",
      "tathya pawa adhikar", "mahiti adhikar", "suchna da adhikar",
      "thagaval urimai", "smaachara haqqulu",
    ],
    answer:
      "Under the Right to Information Act, 2005, any citizen can request information from a public authority. Steps: (1) Write an application to the Public Information Officer (PIO) of the concerned department; (2) Pay a fee of Rs. 10; (3) The PIO must reply within 30 days; (4) If denied, file a first appeal to the Appellate Authority within 30 days; (5) Further appeal can be made to the Central/State Information Commission. RTI can also be filed online at rtionline.gov.in.",
    references: ["RTI Act Section 6", "RTI Act Section 7", "RTI Act Section 19"],
  },

  // ─── CYBER / DIGITAL ───────────────────────────────────────────────────────

  {
    category: "Cyber Law",
    question: "What is the law on online defamation in India?",
    keywords: [
      // English
      "defamation", "online defamation", "social media abuse", "reputation damage",
      "libel", "slander", "false statements online",
      // Hindi
      "manahaani", "badnaami", "jhooth bolna online", "izzat kharab",
      "online badnaam karna", "social media par galat baat",
      // Bengali
      "apavaad", "maan haani bangla", "samman haani bangla",
      // Marathi
      "manahaani marathi", "badnaami marathi",
      // Punjabi
      "badnaami punjabi", "saaakh nuksaan",
      // Tamil
      "izhivu", "nama kettu", "online izhivu",
      // Telugu
      "prabhaavam cheyyadam", "online badnaami telugu",
      // Gujarati
      "apavaad gujarati", "badnaami gujarati",
      // Kannada
      "apakaara", "mannahaani kannada",
      // Malayalam
      "apavadam", "online apavadam",
      // Urdu
      "manahaani urdu", "badnaami urdu", "izzat par hamla",
    ],
    language_hints: [
      "manahaani", "badnaami", "jhooth bolna online", "izzat kharab",
      "apavaad", "izhivu", "apakaara", "apavadam",
    ],
    answer:
      "Defamation in India is both a civil wrong and a criminal offence. Under IPC Sections 499 and 500, criminal defamation is punishable with imprisonment up to 2 years and/or fine. Online defamation through social media platforms is also covered under the IT Act, 2000. A civil suit for damages can be filed in a civil court. For online content, a complaint can be made to the platform or to the cyber crime police.",
    references: ["IPC Section 499", "IPC Section 500", "IT Act Section 79"],
  },

  // ─── INHERITANCE / SUCCESSION ──────────────────────────────────────────────

  {
    category: "Succession Law",
    question: "What are the inheritance rights of a daughter in a Hindu family?",
    keywords: [
      // English
      "daughter inheritance", "property rights", "succession", "Hindu succession",
      "daughter property", "daughter rights", "ancestral property daughter",
      // Hindi
      "beti ka haq", "virasat", "uttaradhikaar", "beti ka hissa",
      "beti", "beti ko sampatti", "ladki ka sampatti adhikar",
      // Bengali
      "meyer sampatti adhikar", "kanya uttaradhikar",
      // Marathi
      "mulichi sampatti", "kanyachi vaarasat",
      // Punjabi
      "dhee da hissa", "dhee di property",
      // Tamil
      "makal sontham", "makal urimai", "penn sontham",
      // Telugu
      "ammayi aastu haqqulu", "kanya uttaradhikaram",
      // Gujarati
      "dikri no hakk", "kanyanaa adhikar",
      // Kannada
      "magala aastat", "kanye hakku",
      // Malayalam
      "makal adhikaram", "sthri uttaradhikaram",
      // Urdu
      "beti ka hissa urdu", "aurat ki virasat",
    ],
    language_hints: [
      "beti ka sampatti adhikar", "virasat", "uttaradhikaar", "beti ka hissa",
      "meyer sampatti", "mulichi sampatti", "dhee da hissa", "makal sontham",
      "ammayi aastu", "dikri no hakk", "magala aastat", "makal adhikaram",
    ],
    answer:
      "After the Hindu Succession (Amendment) Act, 2005, a daughter has equal coparcenary rights as a son in ancestral property, regardless of whether she was born before or after the amendment. This was reaffirmed by the Supreme Court in Vineeta Sharma v. Rakesh Sharma (2020). A daughter has the right to seek partition of ancestral property, become a Karta of the Hindu Undivided Family, and inherit self-acquired property under Class I heirs.",
    references: ["Hindu Succession Act Section 6", "Vineeta Sharma v. Rakesh Sharma (2020) SC", "Hindu Succession Amendment Act 2005"],
  },

  {
    category: "Succession Law",
    question: "How is a will made valid in India?",
    keywords: [
      // English
      "will", "testament", "last will", "legal will", "will registration",
      "testator", "will witness", "will law", "succession act",
      // Hindi
      "vasiyat", "wasiyatnama", "antim icha", "will banao",
      "will kaise banate hain", "will likho",
      // Bengali
      "ichhapatra", "vastuyata bangla", "will bangla",
      // Marathi
      "zapt patra", "vasiyat marathi", "will marathi",
      // Punjabi
      "vasiyat punjabi", "will punjabi",
      // Tamil
      "vaazhkkai kathir", "will tamil",
      // Telugu
      "vasiyatu", "wail telugu",
      // Gujarati
      "vasiyat gujarati", "will gujarati",
      // Kannada
      "vasiyat kannada", "will kannada",
      // Malayalam
      "vasiyat malayalam", "will malayalam",
      // Urdu
      "wasiyyat", "wasiyatnama urdu",
    ],
    language_hints: [
      "vasiyat", "wasiyatnama", "antim icha", "will banao",
      "ichhapatra", "zapt patra", "vaazhkkai kathir", "vasiyatu",
      "wasiyyat",
    ],
    answer:
      "Under the Indian Succession Act, 1925, a valid will must: (1) be in writing; (2) be signed by the testator; (3) be signed or acknowledged in the presence of at least two witnesses; (4) the witnesses must also sign the will in the presence of the testator. A will does not need to be registered, but registration provides stronger legal protection. Muslims can distribute only up to one-third of their estate by will; the rest follows personal law.",
    references: ["Indian Succession Act Section 63", "Indian Succession Act Section 68", "Registration Act Section 18"],
  },

  // ─── NEW TOPICS ────────────────────────────────────────────────────────────

  {
    category: "Criminal Law",
    question: "What is the law on rape and sexual assault in India?",
    keywords: [
      // English
      "rape", "sexual assault", "sexual offence", "molestation", "outrage modesty",
      "pocso", "child sexual abuse", "section 376", "ipc 376",
      // Hindi
      "balatkar", "balaatkar", "youn sosan", "chhedkhani", "youn uttpeedan",
      "dushkarma", "balatkar ki saza",
      // Bengali
      "dharsana", "balatkaar bangla", "jouno bipanno",
      // Marathi
      "balatkar marathi", "balaatkar saza", "youn sosan marathi",
      // Punjabi
      "balatkar punjabi", "youn hinsaa punjabi",
      // Tamil
      "paalaiyam", "paliyal thadai", "rape tamil",
      // Telugu
      "balaaatkaaaram", "yauvana himsaa",
      // Gujarati
      "balatkar gujarati", "youn sosan gujarati",
      // Kannada
      "balatkaara", "lainga daurjanya",
      // Malayalam
      "balatkaaram", "lainggika palapeedam",
      // Urdu
      "zina bil jabr", "balatkar urdu",
    ],
    language_hints: [
      "balatkar", "balaatkar", "youn sosan", "chhedkhani",
      "dharsana", "balatkar marathi", "paalaiyam", "balaaatkaaaram",
      "balatkaara", "balatkaaram", "zina bil jabr",
    ],
    answer:
      "Under Section 376 of the Indian Penal Code (now Bharatiya Nyaya Sanhita Section 64), rape is punishable with rigorous imprisonment of not less than 10 years, which may extend to life imprisonment, and also a fine. Aggravated rape (by police officer, public servant, in cases of gangrape, or on minors) carries a minimum of 20 years up to life imprisonment or death. The POCSO Act, 2012 protects children under 18 from sexual offences. FIR can be filed at any police station; the survivor has the right to free medical treatment and legal aid.",
    references: ["IPC Section 376", "IPC Section 376D", "POCSO Act 2012 Section 4", "CrPC Section 154"],
  },

  {
    category: "Criminal Law",
    question: "What is bail and how can one get bail in India?",
    keywords: [
      // English
      "bail", "anticipatory bail", "regular bail", "bail application",
      "bail conditions", "bail bond", "surety", "section 437", "section 438",
      "bail rejected", "bail granted",
      // Hindi
      "bail kaise milti hai", "anticipatory bail hindi", "bail ki arji",
      "jamaanat", "bail ke liye court mein jaana",
      // Bengali
      "jaminat", "bail bangla", "anticipatory bail bangla",
      // Marathi
      "zamanat marathi", "bail marathi",
      // Punjabi
      "zamanat punjabi", "bail lena punjabi",
      // Tamil
      "paathugappu panam", "bail tamil",
      // Telugu
      "bail telugu", "zamanat telugu",
      // Gujarati
      "zamanat gujarati", "bail gujarati",
      // Kannada
      "zamanat kannada", "bail kannada",
      // Malayalam
      "bail malayalam", "jaaminam",
      // Urdu
      "zamanat urdu", "bail urdu",
    ],
    language_hints: [
      "bail kaise milti hai", "jamaanat", "anticipatory bail",
      "jaminat", "zamanat marathi", "zamanat punjabi", "bail tamil",
      "jaaminam",
    ],
    answer:
      "Bail is a conditional release of an accused person pending trial. Types include: (1) Regular Bail under Section 437/439 CrPC – granted after arrest; (2) Anticipatory Bail under Section 438 CrPC – granted in anticipation of arrest. For bailable offences, bail is a right. For non-bailable offences, it is at the court's discretion. Factors considered include nature of offence, criminal antecedents, and likelihood of fleeing. A bail application can be filed before a Magistrate, Sessions Court, High Court, or Supreme Court.",
    references: ["CrPC Section 436", "CrPC Section 437", "CrPC Section 438", "CrPC Section 439"],
  },

  {
    category: "Family Law",
    question: "What is the legal age of marriage in India and what happens in child marriage?",
    keywords: [
      // English
      "child marriage", "marriage age", "legal age marriage", "underage marriage",
      "prohibition child marriage", "bal vivah", "early marriage",
      // Hindi
      "bal vivah", "bacha vivah", "shadi ki umar", "chota vivah",
      "bal vivah rokna", "kum umar mein shadi",
      // Bengali
      "bal bibah", "kam boyoshe biye", "biye boyos",
      // Marathi
      "bal lagna", "lagna waya", "lahan mulichi lagna",
      // Punjabi
      "bal viaah", "chotti umar viaah",
      // Tamil
      "kolai tirumanam", "thirumanam vayadu",
      // Telugu
      "baalya vivaaham", "vivaha vayassu",
      // Gujarati
      "bal vivah gujarati", "lagnanee umar",
      // Kannada
      "bal vivaha", "maduve vaya",
      // Malayalam
      "bal vivaaham", "vividaham vayassu",
      // Urdu
      "baal shaadi", "shadi ki umar urdu",
    ],
    language_hints: [
      "bal vivah", "bacha vivah", "bal bibah", "bal lagna",
      "bal viaah", "baalya vivaaham", "bal vivaha", "bal vivaaham",
      "baal shaadi",
    ],
    answer:
      "The legal age of marriage is 21 for boys and 18 for girls. The Prohibition of Child Marriage Act, 2006 prohibits child marriage. A child marriage is voidable (can be annulled) at the option of the contracting child. Anyone who performs, conducts, or abets a child marriage can be punished with rigorous imprisonment up to 2 years and/or fine up to Rs. 1 lakh. The Child Marriage Prohibition Officers have the power to prevent child marriages.",
    references: ["Prohibition of Child Marriage Act 2006 Section 3", "Prohibition of Child Marriage Act 2006 Section 9", "Hindu Marriage Act Section 5"],
  },

  {
    category: "Labour Law",
    question: "What are the rules for Provident Fund (PF) in India?",
    keywords: [
      // English
      "provident fund", "PF", "EPF", "EPFO", "employee provident fund",
      "pf withdrawal", "pf balance", "pf claim", "epf withdrawal",
      // Hindi
      "bhavishya nidhi", "pf nikalna", "pf ki jaankari", "epf withdrawal hindi",
      "pf account", "pf ka paisa",
      // Bengali
      "provident fund bangla", "pf nikash bangla",
      // Marathi
      "bhavishya nidhi marathi", "pf marathi",
      // Punjabi
      "pf punjabi", "bhavishya nidhi punjabi",
      // Tamil
      "mudhuvelai nidhi", "pf tamil",
      // Telugu
      "pf telugu", "bhavishya nidhi telugu",
      // Gujarati
      "pf gujarati", "bhavishyanidhi gujarati",
      // Kannada
      "pf kannada", "bhavishya nidhi kannada",
      // Malayalam
      "pf malayalam", "bhavishya nidhi malayalam",
      // Urdu
      "pf urdu", "mahfooz nidhi",
    ],
    language_hints: [
      "bhavishya nidhi", "pf nikalna", "pf ka paisa", "epf withdrawal",
      "mudhuvelai nidhi", "pf nikash",
    ],
    answer:
      "The Employees' Provident Funds and Miscellaneous Provisions Act, 1952 governs PF in India. Both employee and employer contribute 12% of basic salary to EPF. An employee can withdraw PF fully upon retirement (after 58 years) or two months after unemployment. Partial withdrawals are allowed for medical emergencies, home purchase, marriage, or education. PF claims can be filed online through the EPFO member portal (www.epfindia.gov.in). The current EPF interest rate is declared annually by the government.",
    references: ["EPF & MP Act 1952 Section 5", "EPF & MP Act 1952 Section 7D", "EPF Scheme 1952 Paragraph 68"],
  },

  {
    category: "Property Law",
    question: "What is a power of attorney and how is it used in India?",
    keywords: [
      // English
      "power of attorney", "POA", "general power of attorney", "GPA",
      "special power of attorney", "SPA", "agent authority",
      // Hindi
      "mukhtyarnama", "power of attorney hindi", "pratinidhi adhikar",
      "kisi ko adhikar dena",
      // Bengali
      "mukhtyarnama bangla", "power of attorney bangla",
      // Marathi
      "mukhtyarnama marathi", "power of attorney marathi",
      // Punjabi
      "mukhtyarnama punjabi",
      // Tamil
      "paarvaippor pattayam", "power of attorney tamil",
      // Telugu
      "mukhtyarnama telugu", "power of attorney telugu",
      // Gujarati
      "mukhtyarnama gujarati",
      // Kannada
      "mukhtyarnama kannada",
      // Malayalam
      "mukhtyarnama malayalam",
      // Urdu
      "mukhtyarnama", "power of attorney urdu",
    ],
    language_hints: [
      "mukhtyarnama", "power of attorney", "pratinidhi adhikar",
      "paarvaippor pattayam",
    ],
    answer:
      "A Power of Attorney (POA) is a legal document that authorises another person (agent/attorney) to act on your behalf. A General POA grants broad powers; a Special POA is limited to specific acts. For immovable property transactions, a POA must be registered. Under the Registration Act and the Power of Attorney Act, 1882, a POA executed abroad must be notarised and authenticated. A POA becomes void on the death, insanity, or insolvency of the principal. It can be revoked at any time by the principal.",
    references: ["Power of Attorney Act 1882", "Registration Act Section 17", "Transfer of Property Act"],
  },

  {
    category: "Criminal Law",
    question: "What is the law against dowry and dowry harassment in India?",
    keywords: [
      // English
      "dowry", "dowry death", "dowry harassment", "dowry demand",
      "section 498a", "cruelty husband", "in-laws harassment",
      // Hindi
      "dahej", "dahej pratha", "dahej ke liye maar", "dahej ki maang",
      "dahej utpeedan", "sasuraal mein maar",
      // Bengali
      "pankti", "jouno dahej", "dahej dakhal bangla",
      // Marathi
      "varadaakshina", "hunda", "dahej marathi",
      // Punjabi
      "dahej punjabi", "dahej maangna",
      // Tamil
      "varadhatchanai", "thirumana pari paritchai",
      // Telugu
      "vadina", "varavikrayam", "dahej telugu",
      // Gujarati
      "dahej gujarati", "dejo",
      // Kannada
      "varadakshine", "dejo kannada",
      // Malayalam
      "streedhana", "dhanagiram",
      // Urdu
      "dahej urdu", "jahez",
    ],
    language_hints: [
      "dahej", "dahej pratha", "dahej utpeedan", "sasuraal mein maar",
      "varadaakshina", "hunda", "varadhatchanai", "varavikrayam",
      "varadakshine", "streedhana", "jahez",
    ],
    answer:
      "Dowry is prohibited under the Dowry Prohibition Act, 1961. Giving or taking dowry is punishable with imprisonment of at least 5 years and fine of at least Rs. 15,000. Section 498A IPC (cruelty by husband or his relatives) provides imprisonment up to 3 years for mental or physical cruelty for dowry demands. Dowry death (Section 304B IPC) – if a woman dies within 7 years of marriage under suspicious circumstances related to dowry demands – is punishable with minimum 7 years up to life imprisonment. Complaints can be filed at the local police station.",
    references: ["Dowry Prohibition Act 1961 Section 3", "IPC Section 498A", "IPC Section 304B"],
  },

  {
    category: "Consumer Law",
    question: "What are my rights regarding insurance claims in India?",
    keywords: [
      // English
      "insurance claim", "claim rejected", "insurance fraud", "insurance dispute",
      "health insurance", "life insurance", "motor insurance", "claim settlement",
      "irda", "insurance ombudsman",
      // Hindi
      "beema daava", "insurance claim hindi", "insurance ki shikayat",
      "beema rejected", "insurance milna", "beema company ne mana kar diya",
      // Bengali
      "bima daabi bangla", "insurance claim bangla",
      // Marathi
      "vima daava marathi", "insurance claim marathi",
      // Punjabi
      "bima daava punjabi", "insurance claim punjabi",
      // Tamil
      "kaapitu kooral", "insurance claim tamil",
      // Telugu
      "bheema vattudu", "insurance claim telugu",
      // Gujarati
      "vima daavo gujarati", "insurance claim gujarati",
      // Kannada
      "vima daava kannada",
      // Malayalam
      "bheema adhikaram", "insurance claim malayalam",
      // Urdu
      "bima daawa urdu",
    ],
    language_hints: [
      "beema daava", "insurance claim hindi", "beema rejected",
      "bima daabi", "vima daava", "kaapitu kooral", "bheema vattudu",
    ],
    answer:
      "Insurance disputes in India are governed by the Insurance Regulatory and Development Authority of India (IRDAI). If an insurer wrongly rejects your claim, you can: (1) file a complaint with the insurer's grievance cell; (2) approach the Insurance Ombudsman (free and fast) for claims up to Rs. 50 lakhs; (3) file a complaint before the consumer forum; (4) approach IRDAI's IGMS portal (igms.irda.gov.in). Insurers must settle claims within 30 days of receiving all documents, or pay interest on delayed settlement.",
    references: ["Insurance Act 1938 Section 45", "IRDAI (Protection of Policyholders' Interests) Regulations 2017", "Consumer Protection Act 2019"],
  },

  {
    category: "Constitutional Law",
    question: "What is the Right to Education in India?",
    keywords: [
      // English
      "right to education", "RTE", "free education", "compulsory education",
      "school admission", "education rights", "article 21a",
      // Hindi
      "shiksha ka adhikar", "rte", "muft shiksha", "school mein daakhila",
      "bachon ki padhai", "shiksha adhikar",
      // Bengali
      "shiksha adhikar bangla", "bিনামূলে shiksha",
      // Marathi
      "shiksha adhikar marathi", "mukta shiksha",
      // Punjabi
      "shiksha da adhikar", "muft shiksha punjabi",
      // Tamil
      "katchi urimai", "ilaichoru kalvi", "rte tamil",
      // Telugu
      "vidya haqqulu", "rte telugu",
      // Gujarati
      "shikshan adhikar gujarati", "muft shikshan",
      // Kannada
      "shikshana hakku", "rte kannada",
      // Malayalam
      "vidyabhyasa adhikaram", "rte malayalam",
      // Urdu
      "taalim ka haqq", "muft taleem",
    ],
    language_hints: [
      "shiksha ka adhikar", "rte", "muft shiksha", "shiksha adhikar",
      "katchi urimai", "vidya haqqulu", "shikshan adhikar", "taalim ka haqq",
    ],
    answer:
      "Article 21A of the Indian Constitution, inserted by the 86th Amendment Act, 2002, makes education a fundamental right for children between 6 and 14 years. The Right of Children to Free and Compulsory Education (RTE) Act, 2009 operationalises this right. Key provisions include: free and compulsory education in neighbourhood schools; 25% reservation in private unaided schools for economically weaker sections; no detention policy until Class 8; schools must meet specified infrastructure norms.",
    references: ["Constitution Article 21A", "RTE Act 2009 Section 3", "RTE Act 2009 Section 12"],
  },

  {
    category: "Labour Law",
    question: "What are the rules for ESI (Employee State Insurance) in India?",
    keywords: [
      // English
      "esi", "esic", "employee state insurance", "medical benefit employee",
      "esi card", "esi claim", "esi hospital", "esi contribution",
      // Hindi
      "karmachari rajya beema", "esi hindi", "esi ka faayda",
      "esi card kaise banaye",
      // Bengali
      "esi bangla", "karmee rajya bima",
      // Marathi
      "esi marathi", "karmachari rajya vima",
      // Punjabi
      "esi punjabi",
      // Tamil
      "thozhilaar maanil bheema", "esi tamil",
      // Telugu
      "esi telugu", "karmika rashtriya bheema",
      // Gujarati
      "esi gujarati",
      // Kannada
      "esi kannada",
      // Malayalam
      "esi malayalam",
    ],
    language_hints: [
      "karmachari rajya beema", "esi card", "esi ka faayda",
      "thozhilaar maanil bheema", "karmika rashtriya bheema",
    ],
    answer:
      "The Employees' State Insurance Act, 1948 provides health and social security benefits to employees earning up to Rs. 21,000 per month (Rs. 25,000 for persons with disability). Employee contributes 0.75% and employer contributes 3.25% of wages. Benefits include: medical benefit (full medical care for self and family), sickness benefit (70% of wages during illness), maternity benefit, disablement benefit, and dependent benefit. ESI dispensaries and hospitals provide free medical treatment. The ESIC portal (www.esic.in) allows online registration and claim filing.",
    references: ["ESI Act 1948 Section 2", "ESI Act 1948 Section 46", "ESI Act 1948 Section 51A"],
  },

  {
    category: "Criminal Law",
    question: "What is the law on extortion and blackmail in India?",
    keywords: [
      // English
      "extortion", "blackmail", "threatening", "threats", "ransom",
      "money by threat", "intimidation", "coercion", "section 383",
      // Hindi
      "ugsahi", "dhakka", "dhamki dena", "paisa maangna dara ke",
      "blackmail hindi", "dhameeki",
      // Bengali
      "shasthi bangla", "bhoy dekhiye taka", "blackmail bangla",
      // Marathi
      "khanda vsooli", "dhamki dene", "blackmail marathi",
      // Punjabi
      "khadana", "dhamki de ke paisa", "blackmail punjabi",
      // Tamil
      "gasamaagadam", "biruttu", "kannaadidal",
      // Telugu
      "bhayabheethulu", "blackmail telugu",
      // Gujarati
      "dhamki ne paisa maangvu", "blackmail gujarati",
      // Kannada
      "dhamki hake", "blackmail kannada",
      // Malayalam
      "bheeshan kshaama", "blackmail malayalam",
      // Urdu
      "vusoli", "dhamki de ke paisa urdu",
    ],
    language_hints: [
      "ugsahi", "dhakka", "dhamki dena", "blackmail",
      "khanda vsooli", "gasamaagadam", "bhayabheethulu",
    ],
    answer:
      "Extortion is defined under Section 383 IPC as intentionally putting any person in fear of injury to dishonestly induce them to deliver property or sign a document. Extortion is punishable under Section 384 IPC with imprisonment up to 3 years, or fine, or both. If extortion is committed by putting a person in fear of death or grievous hurt, the punishment can extend to 10 years. Blackmail involving digital platforms (sending threatening messages, morphed images) is also covered under IT Act Section 66E and 67. Complaints should be filed at the nearest police station or cyber crime portal.",
    references: ["IPC Section 383", "IPC Section 384", "IPC Section 385", "IT Act Section 66E"],
  },

];

// ─── FALLBACK ──────────────────────────────────────────────────────────────────

export const FALLBACK_RESPONSE =
  "Sorry, I couldn't find a relevant legal answer in my database. Please try rephrasing your question, or consult a qualified lawyer for personalised advice. You can also visit your nearest District Legal Services Authority (DLSA) for free legal aid. | माफ करें, मुझे आपके प्रश्न का उत्तर नहीं मिला। कृपया अपने नजदीकी जिला विधिक सेवा प्राधिकरण (DLSA) से संपर्क करें। | আপনার নিকটতম জেলা আইনি সেবা কর্তৃপক্ষের সাথে যোগাযোগ করুন।";

// ─── HELPERS ───────────────────────────────────────────────────────────────────

/**
 * Normalises a query string for matching:
 * lowercases, removes punctuation, collapses whitespace.
 */
const normalise = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Scores each dataset entry against the query using keyword + word matching.
 * Also checks language_hints for direct native-language matches.
 * Returns the best-matching LegalItem, or null if confidence is too low.
 */
const findBestMatch = (query: string): LegalItem | null => {
  const normQuery = normalise(query);
  const queryWords = new Set(normQuery.split(" ").filter((w) => w.length > 2));

  let bestMatch: LegalItem | null = null;
  let bestScore = 0;

  for (const item of legalDataset) {
    let score = 0;

    // Full keyword match — high weight
    for (const keyword of item.keywords) {
      const lk = normalise(keyword);
      if (normQuery.includes(lk)) {
        score += lk.includes(" ") ? 5 : 3; // multi-word phrases score higher
      }
      // Partial word match on each token
      for (const word of lk.split(" ")) {
        if (word.length > 2 && queryWords.has(word)) {
          score += 1;
        }
      }
    }

    // Language hints — highest weight (exact native phrase match)
    for (const hint of item.language_hints) {
      if (normQuery.includes(normalise(hint))) {
        score += 6;
      }
    }

    // Question word match
    for (const word of normalise(item.question).split(" ")) {
      if (word.length > 3 && queryWords.has(word)) {
        score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestScore >= 1 ? bestMatch : null;
};

/**
 * Returns the answer string for the best-matching dataset entry,
 * or null if no match is found.
 */
export const findLegalAnswer = (query: string): string | null => {
  const match = findBestMatch(query);
  return match ? match.answer : null;
};

/**
 * Returns the category of the best-matching entry.
 */
export const findLegalCategory = (query: string): string | null => {
  const match = findBestMatch(query);
  return match ? match.category : null;
};

/**
 * Returns the references array for the best-matching dataset entry,
 * or an empty array if no match is found.
 */
export const findLegalReferences = (query: string): string[] => {
  const match = findBestMatch(query);
  return match ? match.references : [];
};

/**
 * Returns the full matched LegalItem including question and category,
 * useful for displaying context in the UI.
 */
export const findLegalItem = (query: string): LegalItem | null =>
  findBestMatch(query);
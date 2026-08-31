#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Oxford 3000 & 5000 - Part 4: Letters S - Z (260 words)"""

PART4_WORDS = [
    # S
    ("Sacred", "adjective", "B2", "/ˈseɪ.krɪd/", "sakral / suci / sangat dihormati / keramat",
     "Dihubungkan dengan Tuhan atau hal religius; sangat dihormati dan dilindungi.", "Connected with God or dedicated to a religious purpose; holy and venerated.",
     ["Sacredly", "Sacredness", "Holy"], ["Holy", "Hallowed", "Sanctified", "Divine", "Revered"], ["Profane", "Secular", "Unholy", "Blasphemous"],
     "Ancient monks preserved illuminated sacred manuscripts in the mountain monastery library.",
     "Indigenous tribes consider the volcanic mountain summit a sacred ancestral sanctuary."),

    ("Safeguard", "verb", "B2", "/ˈseɪf.ɡɑːd/", "menjaga keselamatan / melindungi hak cipta/aset",
     "Melindungi seseorang atau sesuatu dari bahaya, kerusakan, atau kerugian.", "To protect someone or something with a safeguard; defend from harm.",
     ["Safeguard", "Safeguarding", "Protect"], ["Protect", "Defend", "Shield", "Secure", "Preserve"], ["Endanger", "Jeopardize", "Imperil", "Harm"],
     "New encryption algorithms were developed to safeguard sensitive electronic medical records.",
     "Marine reserves are established to safeguard endangered coral reef biodiversity from overfishing."),

    ("Sanction", "noun", "B2", "/ˈsæŋk.ʃən/", "sanksi hukuman ekonomi / persetujuan izin resmi",
     "Hukuman ekonomi yang dijatuhkan pada suatu negara; persetujuan atau izin resmi.", "A threatened penalty for disobeying a law; official permission or approval.",
     ["Sanctioned", "Penalty", "Approval"], ["Penalty", "Embargo", "Punishment", "Approval", "Authorization"], ["Reward", "Ban", "Prohibition"],
     "The United Nations Security Council voted to impose economic sanctions to halt illicit weapons trading.",
     "The municipal board granted formal sanction for the heritage building restoration blueprint."),

    ("Satisfactory", "adjective", "B1", "/ˌsæt.ɪsˈfæk.tər.i/", "memuaskan / memenuhi standar layak",
     "Memenuhi harapan atau kebutuhan dengan cukup baik; memadai kualitasnya.", "Fulfilling expectations or needs; acceptable though not outstanding.",
     ["Satisfactorily", "Satisfy", "Acceptable"], ["Acceptable", "Adequate", "Sufficient", "Tolerable", "Decent"], ["Unsatisfactory", "Inadequate", "Defective"],
     "The safety inspection concluded with a satisfactory rating for all airport runway tarmac systems.",
     "Her academic performance in chemistry was satisfactory, though her physics scores were exemplary."),

    ("Scarcity", "noun", "B2", "/ˈskeə.sə.ti/", "kelangkaan sumber daya / kekurangan pasokan",
     "Kondisi kekurangan atau kelangkaan pasokan barang atau kebutuhan pokok.", "The state of being scarce or in short supply; shortage and dearth.",
     ["Scarce", "Scarcely", "Shortage"], ["Shortage", "Dearth", "Paucity", "Lack", "Deficiency"], ["Abundance", "Profusion", "Surplus", "Plenty"],
     "Severe prolonged droughts in the region caused an acute scarcity of clean drinking water.",
     "In basic economics, scarcity drives price appreciation for finite natural resources like rare earth metals."),

    ("Scrutinize", "verb", "C1", "/ˈskruː.tɪ.naɪz/", "memeriksa sangat cermat / meneliti detail saksama",
     "Memeriksa atau mengamati seseorang atau sesuatu dengan sangat teliti dan kritis.", "To examine or inspect closely and thoroughly with critical attention.",
     ["Scrutiny", "Scrutinized", "Inspect"], ["Inspect", "Examine", "Audit", "Investigate", "Probe"], ["Glance at", "Overlook", "Ignore", "Skim"],
     "Financial auditors will scrutinize every corporate expense invoice before authorizing the tax rebate.",
     "Literary scholars scrutinize Shakespearean folios to identify original typesetting variations."),

    ("Seamless", "adjective", "B2", "/ˈsiːm.ləs/", "mulus tanpa hambatan / menyatu rapi tanpa sambungan",
     "Berlangsung sangat lancar tanpa gangguan atau jeda; tanpa keliman jahitan.", "Smooth and continuous, with no apparent gaps, seams, or interruptions.",
     ["Seamlessly", "Smooth", "Continuous"], ["Smooth", "Fluid", "Flawless", "Unified", "Harmonious"], ["Disjointed", "Clunky", "Rough", "Fragmented"],
     "The software update provided a seamless transition to the new cloud storage platform.",
     "The bespoke silk evening gown was crafted with seamless tailoring techniques."),

    ("Significant", "adjective", "B1", "/sɪɡˈnɪf.ɪ.kənt/", "signifikan / sangat penting / bermakna besar",
     "Cukup besar atau penting untuk diperhatikan atau memiliki pengaruh nyata.", "Sufficiently great or important to be worthy of attention; noteworthy.",
     ["Significance", "Significantly", "Important"], ["Important", "Momentous", "Considerable", "Substantial", "Noteworthy"], ["Insignificant", "Trivial", "Negligible", "Minor"],
     "The discovery of penicillin was a significant breakthrough in twentieth-century medical science.",
     "The survey revealed a significant increase in consumer preference for organic food items."),

    ("Simultaneous", "adjective", "B2", "/ˌsɪm.əlˈteɪ.ni.əs/", "serentak / berlangsung bersamaan waktu",
     "Terjadi, dilakukan, atau beroperasi pada saat yang bersamaan persis.", "Occurring, operating, or done at the same time.",
     ["Simultaneously", "Simultaneity", "Concurrent"], ["Concurrent", "Coincident", "Synchronous", "Parallel", "Contemporary"], ["Sequential", "Asynchronous", "Separate"],
     "The broadcast network provided simultaneous translation in six languages during the live global ceremony.",
     "Musicians must develop the skill to execute simultaneous rhythmic patterns with both hands."),

    ("Sophisticated", "adjective", "B2", "/səˈfɪs.tɪ.keɪ.tɪd/", "canggih modern / berkelas tinggi / berpengalaman luas",
     "Memiliki pemahaman budaya dan selera yang tinggi; menggunakan teknologi maju.", "Having great worldly experience and knowledge; highly developed and complex.",
     ["Sophistication", "Sophisticatedly", "Advanced"], ["Advanced", "Complex", "Refined", "Cultured", "State-of-the-art"], ["Naive", "Crude", "Simple", "Primitive"],
     "Modern weather forecasting utilizes sophisticated supercomputer simulation models.",
     "The art museum gala was attended by sophisticated international collectors and connoisseurs."),

    ("Spontaneous", "adjective", "B2", "/spɒnˈteɪ.ni.əs/", "spontan tanpa rencana / timbul alami seketika",
     "Terjadi atau dilakukan sebagai hasil dari dorongan tiba-tiba tanpa perencanaan matang.", "Performed or occurring as a result of a sudden impulse without premeditation.",
     ["Spontaneity", "Spontaneously", "Impulsive"], ["Impulsive", "Unprompted", "Natural", "Impromptu", "Instinctive"], ["Planned", "Premeditated", "Calculated", "Forced"],
     "The audience broke into spontaneous applause as the young violinist hit the final soaring chord.",
     "They made a spontaneous decision to take a weekend road trip to the mountain lakes."),

    ("Stimulate", "verb", "B1", "/ˈstɪm.jə.leɪt/", "merangsang pertumbuhan / memicu semangat belajar",
     "Memicu peningkatan aktivitas atau energi dalam tubuh atau pikiran; mendorong pertumbuhan ekonomi.", "To encourage development of or increased activity in a state or process; animate.",
     ["Stimulation", "Stimulant", "Inspire"], ["Inspire", "Arouse", "Prompt", "Energize", "Invigorate"], ["Dampen", "Depress", "Inhibit", "Discourage"],
     "Interactive science experiments stimulate children's natural curiosity and enthusiasm for learning.",
     "Central banks lower interest rates to stimulate business lending and consumer investment during recessions."),

    ("Substantial", "adjective", "B2", "/səbˈstæn.ʃəl/", "besar jumlahnya / berbobot nyata / kuat kokoh",
     "Berukuran, bernilai, atau penting dalam jumlah besar; terbuat dari bahan kokoh.", "Of considerable importance, size, or worth; strongly built or made.",
     ["Substantially", "Substance", "Significant"], ["Considerable", "Significant", "Substantive", "Ample", "Hefty"], ["Insubstantial", "Negligible", "Slight", "Trivial"],
     "The charity received a substantial endowment donation from an anonymous international benefactor.",
     "The historic medieval castle was built from substantial granite blocks that withstand centuries of storms."),

    ("Subtle", "adjective", "B2", "/ˈsʌt.əl/", "halus tersamar / lembut samar / sukar disadari",
     "Begitu lembut atau tersamar sehingga sulit dianalisis atau diperhatikan secara langsung.", "So delicate or precise as to be difficult to analyze or describe; understated.",
     ["Subtly", "Subtlety", "Understated"], ["Delicate", "Understated", "Nuanced", "Inconspicuous", "Fine"], ["Blatant", "Obvious", "Crude", "Harsh"],
     "The herbal infusion has a subtle flavor of fragrant lemongrass and wild chamomile blossom.",
     "The seasoned diplomat noticed a subtle shift in the tone of the bilateral trade negotiations."),

    ("Sufficient", "adjective", "B1", "/səˈfɪʃ.ənt/", "mencukupi / cukup untuk memenuhi syarat",
     "Cukup dalam kuantitas atau kualitas untuk mencapai tujuan atau kebutuhan tertentu.", "Enough; adequate for the purpose or requirements.",
     ["Sufficiently", "Sufficiency", "Adequate"], ["Adequate", "Enough", "Ample", "Plentiful", "Satisfactory"], ["Insufficient", "Deficient", "Inadequate", "Lacking"],
     "Make sure you pack sufficient drinking water and high-energy snacks for the daylong alpine trek.",
     "The laboratory study provided sufficient empirical evidence to warrant larger clinical human trials."),

    ("Supplement", "noun", "B1", "/ˈsʌp.lɪ.mənt/", "suplemen tambahan / suplemen vitamin / lampiran buku",
     "Sesuatu yang ditambahkan untuk melengkapi atau memperbaiki sesuatu.", "A thing added to something else in order to complete or enhance it; dietary aid.",
     ["Supplementary", "Supplemental", "Addition"], ["Addition", "Extension", "Appendix", "Additive", "Complement"], ["Core", "Base", "Depletion"],
     "Many athletes take daily vitamin D supplements during winter to maintain optimal bone and muscle strength.",
     "The Sunday broadsheet newspaper includes an illustrated literary arts magazine supplement."),

    ("Surpass", "verb", "B2", "/səˈpɑːs/", "melampaui prestasi / melebihi target perkiraan",
     "Menjadi lebih besar, lebih baik, atau lebih maju daripada orang lain atau target.", "To exceed; be greater or better than someone or something else.",
     ["Surpassing", "Outdo", "Excel"], ["Exceed", "Outdo", "Top", "Outstrip", "Eclipse"], ["Fall behind", "Fail", "Underperform"],
     "Box office ticket sales for the animated film managed to surpass all initial studio financial projections.",
     "Her dedication to pediatric nursing will surpass the expectations of any mentor in the hospital ward."),

    ("Sustain", "verb", "B2", "/səˈsteɪn/", "menopang kehidupan / mempertahankan kelangsungan",
     "Memperkuat atau mendukung secara fisik atau mental; memelihara keberlanjutan.", "To strengthen or support physically or mentally; maintain over time.",
     ["Sustainable", "Sustainability", "Maintain"], ["Maintain", "Uphold", "Nourish", "Preserve", "Endure"], ["Collapse", "Abandon", "Deplete", "Destroy"],
     "The underground aquifer has enough fresh water to sustain the desert oasis town for generations.",
     "Emergency rations and portable water filters sustained the stranded mountaineers until rescue crews arrived."),

    # T
    ("Tangible", "adjective", "B2", "/ˈtæn.dʒə.bəl/", "nyata dapat disentuh / konkret berwujud",
     "Dapat disentuh atau diraba secara fisik; jelas dan nyata keberadaannya bukan sekadar teori.", "Perceptible by touch; clear and definite; real rather than abstract.",
     ["Tangibly", "Tangibility", "Concrete"], ["Concrete", "Physical", "Palpable", "Real", "Substantial"], ["Intangible", "Abstract", "Ephemeral", "Illusory"],
     "The new community mentorship initiative produced tangible improvements in high school graduation rates.",
     "The company offered employees tangible year-end rewards including performance bonuses and paid sabbaticals."),

    ("Tedious", "adjective", "B2", "/ˈtiː.di.əs/", "menjemukan / membosankan bertele-tele",
     "Terlalu panjang, lambat, atau monoton sehingga menimbulkan rasa bosan dan lelah.", "Too long, slow, or dull; tiresome or monotonous.",
     ["Tediously", "Tedium", "Monotonous"], ["Monotonous", "Boring", "Tiresome", "Dull", "Wearisome"], ["Exciting", "Fascinating", "Engaging", "Stimulating"],
     "Manually entering handwritten survey receipts into the spreadsheet was a tedious and repetitive task.",
     "Automating routine data entry frees researchers from tedious administrative chores."),

    ("Thrive", "verb", "B1", "/θraɪv/", "tumbuh subur / makmur sejahtera / berkembang pesat",
     "Tumbuh dengan sangat sehat, kuat, dan berhasil; berkembang dengan pesat.", "To grow or develop well or vigorously; flourish and prosper.",
     ["Thriving", "Thriver", "Flourish"], ["Flourish", "Prosper", "Bloom", "Boom", "Succeed"], ["Wither", "Decline", "Stagnate", "Fail"],
     "Desert succulents and cactus varieties thrive in arid gravel soil with plenty of direct sunlight.",
     "Small independent tech startups thrive in innovation hubs that foster collaborative networking."),

    ("Tolerate", "verb", "B1", "/ˈtɒl.ər.eɪt/", "menoleransi / membiarkan bersabar / tahan terhadap zat",
     "Mengizinkan keberadaan sesuatu yang tidak disukai tanpa memprotes; tahan terhadap obat.", "To allow the existence or practice of something without interference; endure.",
     ["Tolerant", "Tolerance", "Endure"], ["Endure", "Bear", "Stand", "Permit", "Accept"], ["Forbid", "Prohibit", "Reject", "Ban"],
     "The company has a strict zero-tolerance code that does not tolerate workplace harassment or discrimination.",
     "Patients with sensitive stomachs usually tolerate buffered vitamin C capsules much better than standard tablets."),

    ("Transform", "verb", "B1", "/trænsˈfɔːm/", "mengubah wujud total / mentransformasi sistem",
     "Membuat perubahan menyeluruh atau dramatis dalam bentuk, penampilan, atau sifat sesuatu.", "To make a thorough or dramatic change in the form, appearance, or character of.",
     ["Transformation", "Transformative", "Alter"], ["Convert", "Alter", "Transmute", "Revolutionize", "Metamorphose"], ["Preserve", "Keep", "Stagnate", "Maintain"],
     "The ambitious urban renewal project helped transform the abandoned harbor district into a lively cultural center.",
     "A caterpillar will transform into a stunning painted lady butterfly through the miraculous process of metamorphosis."),

    ("Transparent", "adjective", "B1", "/trænˈspær.ənt/", "transparan tembus pandang / terbuka jujur",
     "Membiarkan cahaya lewat sehingga benda di belakangnya terlihat jelas; jujur dan terbuka.", "Allowing light to pass through so that objects behind can be distinctly seen; open and honest.",
     ["Transparency", "Transparently", "Clear"], ["Clear", "Lucid", "Crystalline", "Open", "Candid"], ["Opaque", "Murky", "Secretive", "Deceptive"],
     "The laboratory beaker was made from clear transparent borosilicate glass resistant to thermal shock.",
     "Good corporate governance requires transparent accounting disclosures and ethical board oversight."),

    ("Triumph", "noun", "B2", "/ˈtraɪ.ʌmf/", "kemenangan gilang-gemilang / kejayaan agung",
     "Kemenangan atau keberhasilan yang luar biasa besar dan membanggakan.", "A great victory, success, or achievement; the state of being victorious.",
     ["Triumphant", "Triumphantly", "Victory"], ["Victory", "Conquest", "Triumph", "Masterstroke", "Success"], ["Defeat", "Failure", "Disaster", "Loss"],
     "The eradication of smallpox through global vaccination remains one of humanity's greatest medical triumphs.",
     "The underdog hockey team celebrated an unforgettable Olympic gold medal triumph in front of their home fans."),

    # U
    ("Ultimate", "adjective", "B1", "/ˈʌl.tɪ.mət/", "terakhir / puncak pamungkas / paling utama",
     "Berada di akhir suatu proses; yang paling utama, mendasar, atau terbaik.", "Being or happening at the end of a process; final; best achievable of its kind.",
     ["Ultimately", "Ultimatum", "Final"], ["Final", "Eventual", "Supreme", "Paramount", "Consummate"], ["Initial", "Beginning", "First", "Preliminary"],
     "Her ultimate ambition in life is to establish a non-profit marine research and conservation foundation.",
     "The ultimate success of any architectural blueprint depends upon meticulous structural engineering execution."),

    ("Undergo", "verb", "B2", "/ˌʌn.dəˈɡəʊ/", "menjalani proses / mengalami perubahan bedah",
     "Mengalami atau melewati suatu proses perawatan, perubahan, atau ujian yang sulit.", "To experience or be subjected to something, typically a process or change.",
     ["Underwent", "Undergone", "Experience"], ["Experience", "Endure", "Sustain", "Pass through", "Submit to"], ["Avoid", "Escape", "Forego"],
     "Historic brick buildings must undergo mandatory structural seismic retrofitting to ensure earthquake safety.",
     "Astronauts undergo rigorous physical conditioning and simulated spacewalk training before orbital missions."),

    ("Underlying", "adjective", "B2", "/ˌʌn.dəˈlaɪ.ɪŋ/", "mendasar / tersirat di balik permukaan / fundamental",
     "Terletak di bawah permukaan; membentuk fondasi tersembunyi dari suatu fenomena.", "Situated beneath; forming the foundation or basis of something.",
     ["Underlie", "Fundamental", "Basic"], ["Fundamental", "Basic", "Root", "Subterranean", "Inherent"], ["Superficial", "Surface", "Incidental"],
     "Physicians conducted blood chemistry tests to diagnose the underlying cause of the patient's chronic fatigue.",
     "The underlying theme of the classic novel explores the tension between individual ambition and societal duty."),

    ("Undertake", "verb", "B2", "/ˌʌn.dəˈteɪk/", "mengemban tugas / menjalankan proyek besar",
     "Berjanji atau mulai melakukan suatu tugas, penelitian, atau perjalanan besar.", "To commit oneself to and begin an enterprise or task; take on.",
     ["Undertaking", "Undertaken", "Assume"], ["Assume", "Embark on", "Tackle", "Launch", "Execute"], ["Abandon", "Neglect", "Relinquish", "Decline"],
     "The international scientific consortium voted to undertake a decadelong deep-space telescope project.",
     "Young apprentices must undertake intensive hands-on training before earning their professional carpentry certification."),

    ("Unify", "verb", "B2", "/ˈjuː.nɪ.faɪ/", "mempersatukan / menggabungkan jadi satu kesatuan",
     "Menggabungkan hal-hal yang terpisah menjadi satu kesatuan yang utuh dan harmonis.", "To make or become united, uniform, or whole.",
     ["Unification", "Unified", "Consolidate"], ["Consolidate", "Merge", "Integrate", "Fuse", "Harmonize"], ["Divide", "Separate", "Fragment", "Disunite"],
     "Music has an extraordinary cultural power to unify diverse communities across language and geographical borders.",
     "The proposed policy aims to unify national educational standards across both urban and rural school districts."),

    ("Unprecedented", "adjective", "C1", "/ʌnˈpres.ɪ.den.tɪd/", "belum pernah terjadi sebelumnya / luar biasa baru",
     "Belum pernah ada contohnya atau dilakukan sebelumnya dalam sejarah.", "Never done or known before; extraordinary and unprecedented.",
     ["Precedent", "Unexampled", "Unmatched"], ["Unexampled", "Novel", "Groundbreaking", "Incomparable", "Unmatched"], ["Precedented", "Familiar", "Routine", "Common"],
     "The digital era has led to an unprecedented surge in global access to open educational resources.",
     "The meteorology department issued warnings for unprecedented high summer temperatures across the continent."),

    ("Upbeat", "adjective", "B1", "/ˈʌp.biːt/", "ceria optimis / bersemangat positif",
     "Penuh dengan keceriaan, optimisme, dan harapan positif akan masa depan.", "Cheerful; optimistic and enthusiastic in outlook.",
     ["Optimistic", "Cheerful", "Buoyant"], ["Optimistic", "Cheerful", "Buoyant", "Positive", "Hopeful"], ["Pessimistic", "Gloomy", "Downbeat", "Depressed"],
     "Despite the rainy weather, the kindergarten teacher maintained an upbeat, cheerful energy throughout the day.",
     "The economic briefing offered an upbeat assessment of regional consumer spending and job creation."),

    ("Urgent", "adjective", "B1", "/ˈɜː.dʒənt/", "mendesak / membutuhkan penanganan darurat",
     "Menuntut tindakan atau perhatian segera tanpa boleh ditunda lagi.", "Requiring immediate action or attention; acute and pressing.",
     ["Urgently", "Urgency", "Pressing"], ["Pressing", "Critical", "Emergency", "Crucial", "Imperative"], ["Trivial", "Unimportant", "Deferred", "Casual"],
     "Paramedics rushed to provide urgent emergency medical treatment to the injured motorway accident victims.",
     "The municipal environmental board issued an urgent public notice regarding coastal water contamination."),

    ("Utilize", "verb", "B2", "/ˈjuː.təl.aɪz/", "memanfaatkan secara efektif / mendayagunakan sarana",
     "Menggunakan sesuatu secara praktis dan efektif untuk mencapai tujuan tertentu.", "To make practical and effective use of a resource or tool.",
     ["Utilization", "Utility", "Employ"], ["Employ", "Use", "Harness", "Apply", "Exploit"], ["Waste", "Misuse", "Ignore", "Neglect"],
     "Modern eco-friendly architecture seeks to utilize natural cross-ventilation to reduce air conditioning costs.",
     "Students learn how to utilize specialized statistical software packages to analyze survey research datasets."),

    # V
    ("Validate", "verb", "B2", "/ˈvæl.ɪ.deɪt/", "memvalidasi keabsahan / mengesahkan bukti",
     "Membuktikan atau mengonfirmasi bahwa sesuatu itu benar, sah, atau akurat.", "To check or prove the validity or accuracy of something; make legally valid.",
     ["Validation", "Validity", "Verify"], ["Verify", "Authenticate", "Confirm", "Substantiate", "Certify"], ["Invalidate", "Disprove", "Refute", "Nullify"],
     "Clinical researchers conducted double-blind clinical trials to validate the therapeutic efficacy of the new medicine.",
     "The transport ticketing machine will validate your train pass before the automated barrier opens."),

    ("Variable", "noun", "B1", "/ˈveə.ri.ə.bəl/", "variabel peubah / faktor yang dapat berubah",
     "Elemen, fitur, atau faktor yang dapat bervariasi atau diubah dalam eksperimen.", "An element, feature, or factor that is liable to vary or change.",
     ["Vary", "Variation", "Factor"], ["Factor", "Parameter", "Element", "Quantity", "Criterion"], ["Constant", "Invariable"],
     "In laboratory physics experiments, scientists carefully control temperature as an independent variable.",
     "Economic forecasters consider consumer confidence to be a volatile variable when projecting retail sales."),

    ("Versatile", "adjective", "B2", "/ˈvɜː.sə.taɪl/", "serbaguna multifungsi / berbakat banyak bidang",
     "Mampu beradaptasi atau digunakan untuk banyak fungsi dan kegiatan yang berbeda.", "Able to adapt or be adapted to many different functions or activities.",
     ["Versatility", "Adaptable", "Flexible"], ["Adaptable", "Flexible", "Multifunctional", "All-round", "Handy"], ["Rigid", "Limited", "Inflexible", "Specialized"],
     "Cast iron cookware is remarkably versatile, suitable for stovetop searing, baking, and open campfire cooking.",
     "She is a versatile actress who transitions effortlessly between intense dramatic roles and light comedy."),

    ("Viable", "adjective", "B2", "/ˈvaɪ.ə.bəl/", "layak dijalankan / mampu bertahan hidup",
     "Mampu bekerja dengan sukses; mampu berkembang atau bertahan hidup secara mandiri.", "Capable of working successfully; feasible and practical; able to survive.",
     ["Viability", "Feasible", "Workable"], ["Feasible", "Workable", "Practicable", "Sustainable", "Applicable"], ["Unviable", "Impossible", "Impractical", "Futile"],
     "Solar power coupled with battery storage has become an economically viable alternative to fossil fuel generators.",
     "The agricultural research laboratory developed drought-resistant seed varieties viable in semi-arid soils."),

    ("Vibrant", "adjective", "B1", "/ˈvaɪ.brənt/", "penuh semangat hidup / cerah menyala / semarak",
     "Penuh dengan energi, antusiasme, dan kehidupan; warna yang sangat cerah menyala.", "Full of energy and enthusiasm; bright and striking in color.",
     ["Vibrantly", "Vibrancy", "Lively"], ["Lively", "Dynamic", "Energetic", "Vivid", "Radiant"], ["Dull", "Lifeless", "Drab", "Lethargic"],
     "The open-air night market was filled with vibrant food aromas, colorful silk lanterns, and joyful street musicians.",
     "The artist used vibrant strokes of cobalt blue and cadmium yellow to bring the Mediterranean seascape to life."),

    ("Virtual", "adjective", "B1", "/ˈvɜː.tʃu.əl/", "virtual daring / maya / hampir sepenuhnya nyata",
     "Diciptakan oleh perangkat lunak komputer; hampir mendekati kondisi yang sebenarnya.", "Not physically existing as such but made by software to appear to do so; almost practical.",
     ["Virtually", "Virtual reality", "Digital"], ["Digital", "Cyber", "Simulated", "Online", "Practical"], ["Physical", "Tangible", "Actual", "Real"],
     "The university hosted a virtual international academic conference with thousands of remote attendees.",
     "Virtual reality flight simulators enable pilot trainees to master emergency landings in a safe environment."),

    ("Visible", "adjective", "A2", "/ˈvɪz.ə.bəl/", "terlihat kasatmata / tampak jelas di pandangan",
     "Dapat dilihat oleh mata; jelas dan mudah diperhatikan oleh publik.", "Able to be seen; clear and noticeable to the eye or mind.",
     ["Visibility", "Visibly", "Perceptible"], ["Perceptible", "Observable", "Noticeable", "Clear", "Apparent"], ["Invisible", "Hidden", "Imperceptible", "Obscure"],
     "The snowcapped volcanic mountain summit was clearly visible across the bay on a crisp sunny morning.",
     "The company made a visible commitment to sustainability by installing rooftop solar panels on all warehouses."),

    ("Visionary", "noun", "B2", "/ˈvɪʒ.ən.ər.i/", "tokoh visioner / pemikir masa depan berwawasan",
     "Seseorang yang memiliki gagasan orisinal dan maju mengenai masa depan.", "A person with original and creative ideas about what the future will or could be like.",
     ["Vision", "Foresight", "Idealist"], ["Idealist", "Pioneer", "Prophet", "Futurist", "Trailblazer"], ["Pragmatist", "Traditionalist", "Realist"],
     "Steve Jobs was widely celebrated as a design visionary who transformed consumer personal computing and music.",
     "Urban planning visionaries advocate for car-free walkable cities surrounded by green botanical belts."),

    ("Vital", "adjective", "B1", "/ˈvaɪ.təl/", "sangat penting / vital bagi kelangsungan hidup",
     "Sangat penting dan mutlak diperlukan untuk kehidupan atau keberhasilan sesuatu.", "Absolutely necessary or essential; essential to life.",
     ["Vitally", "Vitality", "Essential"], ["Essential", "Crucial", "Critical", "Indispensable", "Key"], ["Minor", "Inessential", "Trivial", "Secondary"],
     "Adequate hydration and restorative sleep are vital components of maintaining a healthy immune system.",
     "Freedom of the independent press is a vital pillar of any flourishing constitutional democracy."),

    ("Vivid", "adjective", "B2", "/ˈvɪv.ɪd/", "sangat jelas / hidup dan tajam / berwarna terang",
     "Menghasilkan gambaran visual yang sangat jelas dan kuat dalam pikiran; warna tajam menyala.", "Producing powerful feelings or strong, clear images in the mind; intensely deep or bright in color.",
     ["Vividly", "Vividness", "Graphic"], ["Graphic", "Lucid", "Vibrant", "Brilliant", "Striking"], ["Dull", "Vague", "Faint", "Muted"],
     "The explorer gave a vivid eyewitness account of his encounters with rare wildlife in the Amazon jungle.",
     "The autumn maple leaves turned vivid shades of scarlet, gold, and burnt orange across the hillside."),

    ("Vulnerable", "adjective", "B2", "/ˈvʌl.nər.ə.bəl/", "rentan terserang / mudah terluka / rapuh",
     "Rentan terhadap bahaya fisik atau emosional; mudah terkena dampak buruk.", "Exposed to the possibility of being attacked or harmed, either physically or emotionally.",
     ["Vulnerability", "Vulnerably", "Defenseless"], ["Susceptible", "Defenseless", "Exposed", "Fragile", "Helpless"], ["Invulnerable", "Protected", "Immune", "Secure"],
     "Coastal communities in low-lying delta riverbeds are especially vulnerable to rising sea level storm surges.",
     "Infants and elderly individuals are the most vulnerable demographics during severe winter influenza outbreaks."),

    # W
    ("Wealthy", "adjective", "A2", "/ˈwel.θi/", "kaya raya / berharta melimpah",
     "Memiliki banyak uang, harta kekayaan, dan aset bernilai tinggi.", "Having a great deal of money, resources, or assets; affluent and rich.",
     ["Wealth", "Wealthiness", "Affluent"], ["Affluent", "Rich", "Prosperous", "Opulent", "Well-off"], ["Poor", "Impoverished", "Destitute", "Needy"],
     "The philanthropic trust was established by a wealthy textile industrialist to support public libraries.",
     "The fertile river delta is home to wealthy agricultural estates that export fine vintage wines."),

    ("Widespread", "adjective", "B2", "/ˈwaɪd.spred/", "meluas di mana-mana / tersebar merata",
     "Tersebar atau ditemukan melintasi area yang sangat luas atau di kalangan banyak orang.", "Found or distributed over a large area or number of people.",
     ["Widespreadness", "Prevalent", "Pervasive"], ["Prevalent", "Pervasive", "Extensive", "Rife", "Universal"], ["Localized", "Rare", "Confined", "Scarce"],
     "The public health initiative achieved widespread public awareness through daily radio broadcasts.",
     "The storm caused widespread electrical power outages across four adjacent regional provinces."),

    ("Wisdom", "noun", "B1", "/ˈwɪz.dəm/", "kebijaksanaan / kearifan budi / hikmah",
     "Kualitas memiliki pengalaman, pengetahuan, dan penilaian yang baik; kearifan.", "The quality of having experience, knowledge, and good judgment; the soundness of an action.",
     ["Wise", "Wisely", "Sagacity"], ["Sagacity", "Prudence", "Discernment", "Insight", "Enlightenment"], ["Folly", "Stupidity", "Foolishness", "Ignorance"],
     "Traditional elders passed down ancient folk wisdom and herbal remedies to younger generations.",
     "True wisdom lies in recognizing the limits of one's own personal knowledge and remaining eager to learn."),

    ("Withdraw", "verb", "B1", "/wɪðˈdrɔː/", "menarik uang dari bank / mundur dari pertempuran",
     "Mengambil uang dari rekening; menarik pasukan militer atau mencabut pernyataan.", "To take money out of an account; remove or retract; pull back troops from a conflict.",
     ["Withdrawal", "Withdrew", "Retract"], ["Retract", "Pull out", "Extract", "Recede", "Retreat"], ["Deposit", "Advance", "Insert", "Invest"],
     "You can use any international automated teller machine to withdraw local currency while traveling.",
     "The military command ordered forces to withdraw to defensive fortified positions along the river border."),

    ("Withstand", "verb", "B2", "/wɪðˈstænd/", "tahan terhadap benturan / bertahan melawan tekanan",
     "Mampu bertahan melawan atau tidak menyerah pada serangan atau cuaca ekstrem.", "To remain undamaged or unaffected by; resist or endure with strength.",
     ["Withstood", "Endure", "Resist"], ["Resist", "Endure", "Survive", "Tolerate", "Weather"], ["Yield", "Succumb", "Collapse", "Surrender"],
     "Modern skyscrapers in Tokyo are engineered to withstand major magnitude eight earthquake shocks.",
     "Tough coastal pine trees have deep root systems that allow them to withstand hurricane gale winds."),

    ("Worthwhile", "adjective", "B1", "/ˌwɜːθˈwaɪl/", "berharga dijalankan / sepadan dengan usaha",
     "Pantas mendapatkan waktu, uang, atau usaha yang dikeluarkan; bernilai tinggi.", "Worth the time, money, or effort spent; of value or importance.",
     ["Worth", "Worthy", "Valuable"], ["Valuable", "Rewarding", "Fruitful", "Profitable", "Beneficial"], ["Pointless", "Futile", "Worthless", "Useless"],
     "Volunteering at the community food bank is a deeply worthwhile and fulfilling weekend experience.",
     "Learning a foreign language requires disciplined daily dedication, but the cultural rewards are immensely worthwhile."),

    # Y & Z
    ("Yield", "verb", "B2", "/jiːld/", "menghasilkan panen/keuntungan / menyerah / memberi jalan lalu lintas",
     "Menghasilkan produk alami atau keuntungan finansial; mengalah memberi hak jalan.", "To produce or provide a natural product or crop; surrender or give way under pressure.",
     ["Yielding", "Produce", "Surrender"], ["Produce", "Generate", "Provide", "Surrender", "Cede"], ["Resist", "Withstand", "Withhold", "Retain"],
     "Organic farming practices can yield bountiful vegetable harvests while preserving soil nutrient health.",
     "Drivers approaching the traffic roundabout must yield the right of way to vehicles already circulating inside."),

    ("Zeal", "noun", "B2", "/ziːl/", "kegigihan penuh semangat / gairah dedikasi berkobar",
     "Semangat, energi, dan antusiasme yang besar dalam mengejar suatu tujuan atau cita-cita.", "Great energy or enthusiasm in pursuit of a cause or an objective; fervor.",
     ["Zealous", "Zealot", "Passion"], ["Passion", "Fervor", "Enthusiasm", "Ardor", "Eagerness"], ["Apathy", "Indifference", "Lethargy", "Disinterest"],
     "The young environmental volunteer campaigned with boundless energy and zeal for urban tree planting.",
     "Her scholarly zeal for Renaissance literature inspired students to read classic epic poetry with genuine joy.")
]

print(f"Loaded {len(PART4_WORDS)} words for Part 4")

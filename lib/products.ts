export type Product = {
  slug: string;
  categoryEn: string;
  categoryAr: string;
  titleEn: string;
  titleAr: string;
  shortEn: string;
  shortAr: string;
  overviewEn: string;
  overviewAr: string;
  featuresEn: string[];
  featuresAr: string[];
  useCasesEn: string[];
  useCasesAr: string[];
  image: string;
  gallery?: string[];
  slider?: string[];
  gradient: string;
};

export const products: Product[] = [
  // {
  //   slug: "interactive-displays",
  //   categoryEn: "Meeting Room Technology",
  //   categoryAr: "تقنيات قاعات الاجتماعات",
  //   titleEn: "Interactive Display Panels",
  //   titleAr: "الشاشات التفاعلية",
  //   shortEn:
  //     "4K interactive touch displays for presentations, collaboration, and hybrid meetings.",
  //   shortAr:
  //     "شاشات لمس تفاعلية بدقة 4K للعروض والاجتماعات التعاونية والاجتماعات الهجينة.",
  //   overviewEn:
  //     "Professional interactive displays that improve meeting productivity with smooth annotation, wireless sharing, and secure enterprise deployment.",
  //   overviewAr:
  //     "شاشات تفاعلية احترافية ترفع إنتاجية الاجتماعات من خلال الكتابة المباشرة والمشاركة اللاسلكية والنشر الآمن داخل المؤسسة.",
  //   featuresEn: [
  //     "4K ultra-HD panels with multi-touch support",
  //     "Wireless screen sharing from laptops and mobiles",
  //     "Built-in whiteboard and annotation tools",
  //     "Compatible with Microsoft Teams and Zoom rooms",
  //   ],
  //   featuresAr: [
  //     "شاشات 4K عالية الدقة مع دعم اللمس المتعدد",
  //     "مشاركة لاسلكية من اللابتوب والجوال",
  //     "سبورة تفاعلية مع أدوات تعليق مباشرة",
  //     "متوافقة مع Microsoft Teams وZoom Rooms",
  //   ],
  //   useCasesEn: [
  //     "Board rooms and executive offices",
  //     "Training halls and classrooms",
  //     "Collaboration spaces in enterprises",
  //   ],
  //   useCasesAr: [
  //     "غرف الاجتماعات والمكاتب التنفيذية",
  //     "قاعات التدريب والفصول التعليمية",
  //     "مساحات التعاون داخل الشركات",
  //   ],
  //   image: "/services/meetingroom/01.webp",
  //   gradient: "from-teal-800 to-charcoal-800",
  // },
  // {
  //   slug: "video-conferencing-kits",
  //   categoryEn: "Communication Systems",
  //   categoryAr: "أنظمة الاتصال",
  //   titleEn: "Video Conferencing Kits",
  //   titleAr: "حزم مؤتمرات الفيديو",
  //   shortEn:
  //     "All-in-one conferencing kits with camera, microphone array, and speaker for clear remote meetings.",
  //   shortAr:
  //     "حزم اجتماعات متكاملة تضم كاميرا وميكروفونات وسماعات لاجتماعات عن بعد بجودة عالية.",
  //   overviewEn:
  //     "Enterprise-ready video conferencing bundles engineered for stable audio, smart framing, and easy integration with your meeting platforms.",
  //   overviewAr:
  //     "حزم مؤتمرات فيديو جاهزة للمؤسسات مع صوت ثابت وتتبع ذكي للصورة وتكامل مباشر مع منصات الاجتماعات.",
  //   featuresEn: [
  //     "AI camera auto-framing and speaker tracking",
  //     "Beamforming microphones with noise suppression",
  //     "USB and network deployment options",
  //     "Centralized device monitoring and updates",
  //   ],
  //   featuresAr: [
  //     "كاميرا ذكية بتأطير تلقائي وتتبع المتحدث",
  //     "ميكروفونات موجهة مع عزل الضوضاء",
  //     "خيارات تركيب عبر USB أو الشبكة",
  //     "إدارة مركزية للأجهزة والتحديثات",
  //   ],
  //   useCasesEn: [
  //     "Hybrid leadership meetings",
  //     "Cross-city project coordination",
  //     "Remote client presentations",
  //   ],
  //   useCasesAr: [
  //     "اجتماعات الإدارة الهجينة",
  //     "تنسيق المشاريع بين المدن",
  //     "عروض العملاء عن بعد",
  //   ],
  //   image: "/services/meetingroom/09.webp",
  //   gradient: "from-charcoal-800 to-teal-800",
  // },
  // {
  //   slug: "queue-kiosks-printers",
  //   categoryEn: "Queue Management",
  //   categoryAr: "إدارة الطوابير",
  //   titleEn: "Queue Kiosks & Ticket Printers",
  //   titleAr: "أجهزة الطوابير وطابعات التذاكر",
  //   shortEn:
  //     "Self-service kiosks and thermal ticket printers for organized visitor flow and faster service.",
  //   shortAr:
  //     "أجهزة خدمة ذاتية وطابعات تذاكر حرارية لتنظيم حركة المراجعين وتسريع تقديم الخدمة.",
  //   overviewEn:
  //     "Reliable queueing hardware designed for high-traffic branches, with bilingual interfaces and seamless integration into central queue software.",
  //   overviewAr:
  //     "أجهزة طوابير موثوقة للفروع عالية الكثافة مع واجهات ثنائية اللغة وتكامل سلس مع أنظمة الإدارة المركزية.",
  //   featuresEn: [
  //     "Durable kiosk touch screens for heavy daily use",
  //     "Fast thermal ticket printing with QR support",
  //     "Arabic and English user interfaces",
  //     "Integrated status displays and call indicators",
  //   ],
  //   featuresAr: [
  //     "شاشات لمس متينة للاستخدام اليومي المكثف",
  //     "طباعة تذاكر حرارية سريعة مع دعم QR",
  //     "واجهات استخدام بالعربية والإنجليزية",
  //     "تكامل مع شاشات الانتظار ولوحات النداء",
  //   ],
  //   useCasesEn: [
  //     "Hospitals and outpatient clinics",
  //     "Government service centers",
  //     "Banking branches and reception areas",
  //   ],
  //   useCasesAr: [
  //     "المستشفيات والعيادات",
  //     "مراكز الخدمات الحكومية",
  //     "فروع البنوك ومناطق الاستقبال",
  //   ],
  //   image: "/services/queuesystem/01.webp",
  //   gradient: "from-teal-700 to-teal-900",
  // },
  // {
  //   slug: "ip-cameras-nvr",
  //   categoryEn: "Security Systems",
  //   categoryAr: "أنظمة الأمن",
  //   titleEn: "IP Cameras & NVR Units",
  //   titleAr: "كاميرات IP وأجهزة التسجيل",
  //   shortEn:
  //     "Surveillance cameras and recording units with remote access, analytics, and 24/7 monitoring.",
  //   shortAr:
  //     "كاميرات مراقبة وأجهزة تسجيل مع مشاهدة عن بعد وتحليلات ذكية ومراقبة مستمرة.",
  //   overviewEn:
  //     "High-performance surveillance products covering indoor and outdoor environments, with scalable storage and secure monitoring workflows.",
  //   overviewAr:
  //     "منتجات مراقبة عالية الأداء تغطي البيئات الداخلية والخارجية مع تخزين قابل للتوسع ومسارات تشغيل آمنة.",
  //   featuresEn: [
  //     "Up to 4K image quality with night vision",
  //     "Multi-channel NVR with secure remote access",
  //     "Motion detection and smart event alerts",
  //     "Scalable storage with backup options",
  //   ],
  //   featuresAr: [
  //     "جودة تصوير حتى 4K مع رؤية ليلية",
  //     "أجهزة تسجيل متعددة القنوات مع وصول آمن عن بعد",
  //     "تحليل حركة وتنبيهات ذكية للأحداث",
  //     "تخزين قابل للتوسع مع خيارات نسخ احتياطي",
  //   ],
  //   useCasesEn: [
  //     "Head offices and branch networks",
  //     "Warehouses and logistics facilities",
  //     "Retail stores and commercial buildings",
  //   ],
  //   useCasesAr: [
  //     "المقار الرئيسية والفروع",
  //     "المستودعات والمرافق اللوجستية",
  //     "المتاجر والمنشآت التجارية",
  //   ],
  //   image: "/services/securitysystem/01.webp",
  //   gradient: "from-charcoal-700 to-teal-900",
  // },
  // {
  //   slug: "network-cabling-racks",
  //   categoryEn: "Infrastructure Products",
  //   categoryAr: "منتجات البنية التحتية",
  //   titleEn: "Network Cabling & Rack Solutions",
  //   titleAr: "حلول الكابلات ورفوف الشبكات",
  //   shortEn:
  //     "Structured cabling and rack components for stable, organized, and future-ready networks.",
  //   shortAr:
  //     "مكونات كابلات منظمة ورفوف شبكات لبنية مستقرة ومنظمة وقابلة للتوسع مستقبلا.",
  //   overviewEn:
  //     "Complete network infrastructure product set including copper and fiber cabling, rack accessories, patch panels, and cable management kits.",
  //   overviewAr:
  //     "مجموعة متكاملة لمنتجات البنية التحتية للشبكات تشمل النحاس والألياف وملحقات الرفوف وباتش بانل وحلول تنظيم الكابلات.",
  //   featuresEn: [
  //     "Cat6/Cat6A and fiber-ready cabling options",
  //     "Rack enclosures with smart airflow design",
  //     "Patch panels and labeling accessories",
  //     "Neat cable routing and maintenance access",
  //   ],
  //   featuresAr: [
  //     "خيارات كابلات Cat6 وCat6A والألياف البصرية",
  //     "رفوف شبكية بتصميم تهوية فعال",
  //     "باتش بانل وملحقات ترميز وتنظيم",
  //     "إدارة مرتبة للمسارات وسهولة الصيانة",
  //   ],
  //   useCasesEn: [
  //     "Corporate IT rooms",
  //     "Data and communications closets",
  //     "Campus and multi-floor buildings",
  //   ],
  //   useCasesAr: [
  //     "غرف تقنية المعلومات في الشركات",
  //     "غرف الاتصالات والشبكات",
  //     "المباني متعددة الطوابق والمجمعات",
  //   ],
  //   image: "/services/infrastructure/network.png",
  //   gradient: "from-teal-600 to-charcoal-900",
  // },
  // {
  //   slug: "smart-home-controllers",
  //   categoryEn: "Automation Products",
  //   categoryAr: "منتجات الأتمتة",
  //   titleEn: "Smart Home Controllers",
  //   titleAr: "وحدات التحكم الذكي",
  //   shortEn:
  //     "Central smart controllers to automate lighting, HVAC, curtains, and security in one platform.",
  //   shortAr:
  //     "وحدات تحكم مركزية لأتمتة الإضاءة والتكييف والستائر والأنظمة الأمنية في منصة واحدة.",
  //   overviewEn:
  //     "Flexible smart control hardware for villas and commercial spaces with app-based control, scheduling, and integration with third-party devices.",
  //   overviewAr:
  //     "عتاد تحكم ذكي مرن للفيلات والمباني التجارية مع تحكم عبر التطبيق والجداول الزمنية والتكامل مع أنظمة أخرى.",
  //   featuresEn: [
  //     "Centralized automation gateway",
  //     "Mobile app and wall panel controls",
  //     "Scene scheduling and energy-saving routines",
  //     "Integrates with lighting and access systems",
  //   ],
  //   featuresAr: [
  //     "بوابة أتمتة مركزية للتحكم الكامل",
  //     "تحكم عبر التطبيق ولوحات الحائط",
  //     "مشاهد زمنية وروتينات لتوفير الطاقة",
  //     "تكامل مع الإضاءة وأنظمة الدخول",
  //   ],
  //   useCasesEn: [
  //     "Luxury villas and apartments",
  //     "Hospitality suites and lounges",
  //     "Executive offices and private floors",
  //   ],
  //   useCasesAr: [
  //     "الفيلات والشقق الفاخرة",
  //     "أجنحة الضيافة وصالات الاستقبال",
  //     "المكاتب التنفيذية والطوابق الخاصة",
  //   ],
  //   image: "/services/smarthome/01.webp",
  //   gradient: "from-charcoal-800 to-teal-700",
  // },
  // Video Conferencing Products
  {
    slug: "triple-ai-4k-video-bar-all-in-one",
    categoryEn: "Conference Cameras",
    categoryAr: "كاميرات المؤتمرات",
    titleEn: "Triple AI 4K Video Bar All In One",
    titleAr:
      "Triple AI 4K Video Bar All In One – كاميرا فيديو متطورة بدقة 4K لمؤتمرات الفيديو",
    shortEn:
      "4K video bar with AI speaker tracking, auto-framing, integrated sound system, and built-in microphones reaching up to 10 meters, designed for medium meeting rooms.",
    shortAr:
      "كاميرا فيديو بار بدقة 4K مزودة بتقنية الذكاء الاصطناعي لتتبع المتحدث والتأطير التلقائي، مع نظام صوتي متكامل وميكروفونات مدمجة بمدى يصل إلى 10 أمتار، لغرف الاجتماعات المتوسطة.",
    overviewEn:
      "An all-in-one video conferencing system combining a 4K ePTZ ultra-HD camera, multi-directional microphones, and a powerful Hi-Fi speaker in a sleek soundbar design for medium meeting rooms. Features AI Speaker Tracking and Auto Framing to keep the speaker centered, providing a natural meeting experience. Smart DSP audio processing with echo and noise cancellation delivers pure, clear sound without complex setups.",
    overviewAr:
      "نظام متكامل للاجتماعات المرئية يجمع بين كاميرا 4K ePTZ فائقة الدقة، ميكروفونات متعددة الاتجاهات، ومكبر صوت Hi-Fi قوي داخل تصميم Soundbar أنيق لغرف الاجتماعات المتوسطة. يتميز بتقنية الذكاء الاصطناعي لتتبع المتحدث والتأطير التلقائي لضمان بقاء المتحدث في منتصف الصورة. بفضل المعالجة الصوتية الذكية DSP وإلغاء الصدى والضوضاء، يوفر الجهاز صوتًا نقيًا وواضحًا.",
    featuresEn: [
      "4K ePTZ camera with 120° wide field of view",
      "AI Auto Framing and Face Tracking",
      "4 built-in microphone array (range up to 5m), plus 4 additional wireless mics (range up to 10m)",
      "Hi-Fi speaker with smart DSP (AEC, Noise Reduction, AGC)",
      "Plug & Play USB connection",
    ],
    featuresAr: [
      "كاميرا 4K ePTZ بزاوية رؤية 120 درجة",
      "تأطير تلقائي وتتبع الوجه بالذكاء الاصطناعي",
      "4 ميكروفونات مدمجة (مدى 5 أمتار) + 4 لاسلكية إضافية (مدى 10 أمتار)",
      "مكبر صوت Hi-Fi مع معالجة صوتية DSP (إلغاء الصدى، تقليل الضوضاء، AGC)",
      "توصيل USB وتشغيل فوري",
    ],
    useCasesEn: [
      "Medium-sized meeting rooms",
      "Executive offices",
      "Collaboration spaces requiring high-quality video and audio",
    ],
    useCasesAr: [
      "غرف الاجتماعات المتوسطة",
      "المكاتب التنفيذية",
      "مساحات العمل الجماعي التي تتطلب فيديو وصوت عالي الجودة",
    ],
    image: "/products/meeting/tb5wkit/main.webp",
    gallery: [
      "/products/meeting/tb5wkit/02.webp",
      "/products/meeting/tb5wkit/03.webp",
      "/products/meeting/tb5wkit/04.webp",
      "/products/meeting/tb5wkit/05.webp",
      "/products/meeting/tb5wkit/06.webp",
      "/products/meeting/tb5wkit/07.webp",
    ],
    slider: [
      "/products/meeting/tb5wkit/slide01.webp",
      "/products/meeting/tb5wkit/slide02.webp",
      "/products/meeting/tb5wkit/slide03.webp",
      "/products/meeting/tb5wkit/slide04.webp",
      "/products/meeting/tb5wkit/slide05.webp",
      "/products/meeting/tb5wkit/slide06.webp",
    ],
    gradient: "from-charcoal-800 to-teal-700",
  },
  {
    slug: "triple-ai-4k-video-bar",
    categoryEn: "Conference Cameras",
    categoryAr: "كاميرات المؤتمرات",
    titleEn: "Triple AI 4K Video Bar",
    titleAr: "Triple AI 4K Video Bar – كاميرا فيديو بار 4K من النقطة الثلاثية",
    shortEn:
      "Next-generation smart 4K video bar with AI speaker tracking, auto framing, and a 4-microphone array capturing audio up to 5 meters. Ideal for medium meeting rooms.",
    shortAr:
      "شريط فيديو ذكي من الجيل الجديد بدقة 4K مع تقنيات الذكاء الاصطناعي، مصمم للغرف متوسطة الحجم. يتميز بتتبع المتحدثين، تأطير تلقائي للوجوه، ومصفوفة ميكروفونات لالتقاط الصوت بمدى يصل إلى 5 أمتار.",
    overviewEn:
      "An all-in-one video conferencing system combining a 4K ultra-HD camera, 4 smart microphones, and a Hi-Fi speaker in one elegant design. Built for medium meeting rooms, it delivers a seamless, immersive experience. AI Speaker Tracking and Auto Framing automatically adjust the camera to keep all participants in frame, focusing on the active speaker. Advanced DSP audio processing ensures clear, noise-free calls with echo cancellation.",
    overviewAr:
      "نظام متكامل للاجتماعات المرئية يجمع كاميرا بدقة 4K، ومصفوفة من 4 ميكروفونات ذكية، ومكبر صوت Hi-Fi. صمم للغرف متوسطة الحجم لتجربة اتصال سلسة. بفضل تقنيات الذكاء الاصطناعي، يتمتع الجهاز بقدرات تتبع صوت المتحدث والتأطير التلقائي. تقوم معالجة الصوت الرقمية (DSP) بإلغاء الصدى وقمع الضوضاء تلقائيًا.",
    featuresEn: [
      "4K ePTZ camera with 120° field of view",
      "AI Auto Framing, Face Tracking, and AI Speaker Tracking",
      "4 built-in microphone array (range up to 5 meters)",
      "20W Hi-Fi speaker with DSP (AEC, Noise Reduction, AGC)",
      "USB Plug & Play, includes 5m cable",
    ],
    featuresAr: [
      "كاميرا 4K ePTZ بزاوية رؤية 120 درجة",
      "تأطير تلقائي، تتبع الوجه، وتتبع صوت المتحدث بالذكاء الاصطناعي",
      "مصفوفة 4 ميكروفونات مدمجة (مدى يصل إلى 5 أمتار)",
      "مكبر صوت Hi-Fi بقوة 20 واط مع معالجة DSP",
      "توصيل USB وتشغيل فوري (كابل 5 أمتار مرفق)",
    ],
    useCasesEn: ["Medium meeting rooms", "Huddle spaces", "Executive offices"],
    useCasesAr: [
      "غرف الاجتماعات المتوسطة",
      "مساحات العمل الجماعي الصغيرة",
      "المكاتب التنفيذية",
    ],
    image: "/products/meeting/tb5kit/main.webp",
    gallery: [
      "/products/meeting/tb5kit/02.webp",
      "/products/meeting/tb5kit/03.webp",
      "/products/meeting/tb5kit/04.webp",
      "/products/meeting/tb5kit/05.webp",
      "/products/meeting/tb5kit/06.webp",
    ],
    slider: [
      "/products/meeting/tb5kit/slide01.webp",
      "/products/meeting/tb5kit/slide02.webp",
      "/products/meeting/tb5kit/slide03.webp",
      "/products/meeting/tb5kit/slide04.webp",
      "/products/meeting/tb5kit/slide05.webp",
      "/products/meeting/tb5kit/slide06.webp",
      "/products/meeting/tb5kit/slide07.webp",
      "/products/meeting/tb5kit/slide08.webp",
      "/products/meeting/tb5kit/slide09.webp",
    ],
    gradient: "from-charcoal-800 to-teal-700",
  },
  {
    slug: "triple-4h-video-bar",
    categoryEn: "Conference Cameras",
    categoryAr: "كاميرات المؤتمرات",
    titleEn: "Triple 4H Video Bar",
    titleAr: "Triple 4H Video Bar – كاميرا الذكاء الاصطناعي من النقطة الثلاثية",
    shortEn:
      "All-in-One 4K video bar for huddle rooms and small meeting spaces. Features two intelligent modes: AI Auto Framing or AI Speaker Tracking, with a 2-microphone array capturing audio up to 7 meters.",
    shortAr:
      "شريط فيديو متكامل بجودة 4K للاجتماعات الفردية وغرف الاجتماعات الصغيرة. يتميز بوضعين ذكيين: التأطير التلقائي أو تتبع المتحدث، مع مصفوفة ميكروفونات لالتقاط الصوت بمدى يصل إلى 7 أمتار.",
    overviewEn:
      "The next-generation video bar combining ultra-clear 4K image and smart audio in one sleek device. Designed as the ideal solution for small spaces. Features two selectable smart modes: AI Auto Framing (to capture all attendees) or AI Speaker Tracking (to focus on the active speaker). Advanced audio algorithms with echo and noise cancellation ensure clear voice transmission. True Plug & Play via USB, compatible with all major conferencing platforms.",
    overviewAr:
      "الجيل الجديد من كاميرات الفيديو بار التي تجمع بين الصورة فائقة الوضوح والصوت الذكي. صمم ليكون الحل الأمثل للمساحات الصغيرة. يتميز بوضعين ذكيين: التأطير التلقائي بالذكاء الاصطناعي لالتقاط جميع الحاضرين، أو تتبع المتحدث لتركيز الكاميرا على المتحدث النشط. يعمل بنظام التشغيل الفوري عبر USB.",
    featuresEn: [
      "4K camera with 94° diagonal field of view",
      "Two AI modes: Auto Framing (Face Tracking) or AI Speaker Tracking",
      "4x digital zoom",
      "Dual built-in microphone array (range up to 7 meters)",
      "Hi-Fi speaker with echo and noise cancellation",
    ],
    featuresAr: [
      "كاميرا 4K بزاوية رؤية قطرية 94 درجة",
      "وضعان للذكاء الاصطناعي: التأطير التلقائي (تتبع الوجه) أو تتبع المتحدث",
      "تكبير رقمي 4x",
      "مصفوفة ميكروفونات مزدوجة (مدى يصل إلى 7 أمتار)",
      "مكبر صوت Hi-Fi مع إلغاء الصدى وتقليل الضوضاء",
    ],
    useCasesEn: ["Huddle rooms", "Small meeting rooms", "Personal workspaces"],
    useCasesAr: [
      "غرف الاجتماعات الفردية (Huddle Rooms)",
      "غرف الاجتماعات الصغيرة",
      "مساحات العمل الشخصية",
    ],
    image: "/products/meeting/seeup4h/main.webp",
    gallery: [
      "/products/meeting/seeup4h/01.webp",
      "/products/meeting/seeup4h/02.webp",
      "/products/meeting/seeup4h/03.webp",
      "/products/meeting/seeup4h/04.webp",
      "/products/meeting/seeup4h/05.webp",
    ],
    slider: [
      "/products/meeting/seeup4h/slide01.webp",
      "/products/meeting/seeup4h/slide02.webp",
      "/products/meeting/seeup4h/slide03.webp",
      "/products/meeting/seeup4h/slide04.webp",
      "/products/meeting/seeup4h/slide05.webp",
      "/products/meeting/seeup4h/slide06.webp",
    ],
    gradient: "from-charcoal-800 to-teal-700",
  },
  {
    slug: "triple-4c-eptz-camera",
    categoryEn: "Conference Cameras",
    categoryAr: "كاميرات المؤتمرات",
    titleEn: "Triple 4C ePTZ Camera",
    titleAr:
      "Triple 4C ePTZ Camera – كاميرا فيديو بار بدقة 4K مع تقنيات الذكاء الاصطناعي المتطورة",
    shortEn:
      "Professional 4K video bar with ePTZ and triple AI technologies: Auto Framing, Face Tracking, and AI Speaker Tracking. Delivers immersive meetings with exceptional image and sound for small to medium rooms.",
    shortAr:
      "كاميرا فيديو بار احترافية بدقة 4K مع تقنية ePTZ وثلاث تقنيات ذكاء اصطناعي: التأطير التلقائي، تتبع الوجه، وتتبع صوت المتحدث. توفر تجربة اجتماعات غامرة للغرف الصغيرة والمتوسطة.",
    overviewEn:
      "An all-in-one device combining the latest image and audio technologies. Features a 4K ePTZ camera with a 94° wide view and 4x digital zoom. Distinguished by its multiple AI technologies working together: Auto Framing, Face Tracking, and AI Speaker Tracking. On the audio side, a dual high-sensitivity microphone array captures 360° sound up to 7 meters, paired with a Hi-Fi speaker with a professional bass reflex tube for rich, realistic sound.",
    overviewAr:
      "جهاز متكامل يجمع بين أحدث تقنيات الصورة والصوت. يتميز بكاميرا 4K بتقنية ePTZ مع زاوية عرض 94 درجة وتكبير رقمي 4x. ما يميزه هو تعدد تقنيات الذكاء الاصطناعي: التأطير التلقائي، تتبع الوجه، وتتبع صوت المتحدث. صوتياً، يتميز بمصفوفة ميكروفونات مزدوجة بزاوية 360 درجة ومدى 7 أمتار، ومكبر صوت Hi-Fi مع أنبوب عاكس لتقليل التشوه وتعزيز الصوت الجهير.",
    featuresEn: [
      "4K ePTZ camera, 8MP sensor, 94° FOV, 4x digital zoom",
      "Triple AI: Auto Framing, Face Tracking, AI Speaker Tracking",
      "Dual omnidirectional microphones (360°, range up to 7m)",
      "Hi-Fi speaker with professional bass reflex tube",
      "3A audio processing (AEC, AGC, ANS)",
    ],
    featuresAr: [
      "كاميرا 4K ePTZ، مستشعر 8 ميجابكسل، زاوية رؤية 94 درجة، تكبير رقمي 4x",
      "ثلاث تقنيات ذكاء اصطناعي: تأطير تلقائي، تتبع الوجه، تتبع المتحدث",
      "ميكروفونين شاملين 360 درجة (مدى يصل إلى 7 أمتار)",
      "مكبر صوت Hi-Fi مع أنبوب عاكس للجهير",
      "معالجة صوت 3A (إلغاء الصدى، AGC، تقليل الضوضاء)",
    ],
    useCasesEn: [
      "Small to medium meeting rooms",
      "Executive offices",
      "Collaboration hubs",
    ],
    useCasesAr: [
      "غرف الاجتماعات الصغيرة والمتوسطة",
      "المكاتب التنفيذية",
      "مراكز التعاون الجماعي",
    ],
    image: "/products/meeting/seeup4c/main.webp",
    gallery: [
      "/products/meeting/seeup4c/02.webp",
      "/products/meeting/seeup4c/03.webp",
      "/products/meeting/seeup4c/04.webp",
    ],
    slider: [
      "/products/meeting/seeup4c/slide01.webp",
      "/products/meeting/seeup4c/slide02.webp",
      "/products/meeting/seeup4c/slide03.webp",
      "/products/meeting/seeup4c/slide04.webp",
      "/products/meeting/seeup4c/slide05.webp",
    ],
    gradient: "from-charcoal-800 to-teal-700",
  },
  {
    slug: "triple-pod-conference-speakerphone",
    categoryEn: "Audio Conferencing",
    categoryAr: "المؤتمرات الصوتية",
    titleEn: "Triple POD Conference Speakerphone",
    titleAr:
      "Triple POD Conference Speakerphone – مكبر صوت ذكي للمؤتمرات بتقنية البلوتوث والتوصيل التسلسلي",
    shortEn:
      "Advanced conference speakerphone with three built-in microphones, expandable with an additional mic. Features a Hi-Fi speaker, 10-hour battery, and Daisy-Chain capability for larger meeting spaces.",
    shortAr:
      "جهاز مؤتمرات صوتي متطور بثلاثة ميكروفونات مدمجة مع إمكانية إضافة ميكروفون إضافي، ومكبر صوت Hi-Fi، وبطارية تدوم 10 ساعات، وإمكانية التوصيل التسلسلي (Daisy-Chain) للمساحات الأكبر.",
    overviewEn:
      "A professional speakerphone designed for small to medium collaborative spaces. Combines three built-in high-sensitivity microphones (with optional external mic) and a Hi-Fi speaker for exceptional audio capture and playback from long distances. Key features include Daisy-Chain to connect multiple POD4 units for larger rooms, advanced 3A audio algorithms (AEC, NR, AGC), and flexible connectivity (wireless or USB cable).",
    overviewAr:
      "جهاز مكبر صوت للمؤتمرات احترافي للمساحات التعاونية الصغيرة والمتوسطة. يجمع بين ثلاث ميكروفونات عالية الحساسية (مع إمكانية إضافة ميكروفون خارجي) ومكبر صوت Hi-Fi. يتميز بالتوصيل التسلسلي (Daisy-Chain) لربط عدة أجهزة، وتقنيات صوت متطورة 3A، ومرونة الاتصال لاسلكياً أو عبر USB.",
    featuresEn: [
      "3 built-in microphones (360°, range 3-5m) + optional external mic (range 6-8m)",
      "Hi-Fi speaker (65mm driver) with vibration-dampening mount",
      "3000mAh battery: up to 10 hours talk time",
      "3A audio processing: AEC, Noise Reduction, AGC",
      "Daisy-Chain cascading for larger rooms, USB & wireless connectivity",
    ],
    featuresAr: [
      "3 ميكروفونات مدمجة (360 درجة، مدى 3-5 م) + ميكروفون خارجي اختياري (مدى 6-8 م)",
      "مكبر صوت Hi-Fi (مشغل 65 مم) مع نظام تعليق مانع للاهتزاز",
      "بطارية 3000 مللي أمبير: حتى 10 ساعات تحدث",
      "معالجة صوت 3A: إلغاء الصدى، تقليل الضوضاء، AGC",
      "توصيل تسلسلي (Daisy-Chain)، اتصال لاسلكي و USB",
    ],
    useCasesEn: [
      "Small to medium meeting rooms",
      "Executive offices",
      "Collaborative workspaces",
    ],
    useCasesAr: [
      "غرف الاجتماعات الصغيرة والمتوسطة",
      "المكاتب التنفيذية",
      "مساحات العمل الجماعية",
    ],
    image: "/products/meeting/triplepod.webp",
    gradient: "from-charcoal-800 to-teal-700",
  },
  {
    slug: "triple-6x-ptz-conference-camera",
    categoryEn: "PTZ Cameras",
    categoryAr: "كاميرات PTZ",
    titleEn: "Triple 6X PTZ Conference Camera",
    titleAr:
      "Triple 6X PTZ Conference Camera – كاميرا مؤتمرات احترافية بتقريب بصري 6X وعدسة مزدوجة",
    shortEn:
      "Professional 4K PTZ camera with dual lens, 6X optical zoom, 120° ultra-wide angle, auto framing, and a motorized privacy cover. Designed for large meeting rooms and advanced conferences.",
    shortAr:
      "كاميرا PTZ احترافية بعدسة مزدوجة ودقة 4K، مع تقريب بصري 6X، وزاوية عرض 120 درجة، وتأطير تلقائي، وغطاء خصوصية آلي. للغرف الكبيرة والمؤتمرات المتطورة.",
    overviewEn:
      "A professional-grade PTZ camera with a dual-lens system combining a panoramic camera for wide coverage and a PTZ camera for zooming and focusing on details. Features 6X true optical zoom, 4K resolution, and precise, silent PTZ movement (350° pan, 180° tilt). Includes a motorized privacy cover that closes automatically, support for up to 255 presets via RS232/RS485, and multiple mounting options (desk, wall, ceiling, tripod).",
    overviewAr:
      "كاميرا PTZ احترافية بنظام عدسة مزدوجة يجمع بين كاميرا بانورامية لتغطية واسعة وكاميرا PTZ للتكبير والتركيز. تتميز بتقريب بصري 6X حقيقي، دقة 4K، وحركة PTZ دقيقة وصامتة (أفقي 350 درجة، رأسي 180 درجة). تشمل غطاء خصوصية آلي، دعم حتى 255 وضعية مسبقة، وخيارات تركيب متعددة.",
    featuresEn: [
      "Dual lens: 4K PTZ with 6X optical zoom + panoramic lens",
      "120° ultra-wide field of view",
      "PTZ: 350° pan, 180° tilt, silent movement",
      "Motorized privacy cover",
      "Auto Framing, 255 presets (via RS232/RS485), USB 3.0 output",
    ],
    featuresAr: [
      "عدسة مزدوجة: كاميرا PTZ بدقة 4K مع تقريب بصري 6X + كاميرا بانورامية",
      "زاوية رؤية فائقة الاتساع 120 درجة",
      "حركة PTZ: 350 درجة أفقياً، 180 درجة رأسياً، حركة صامتة",
      "غطاء خصوصية آلي بمحرك",
      "تأطير تلقائي، 255 وضعية مسبقة (عبر RS232/RS485)، مخرج USB 3.0",
    ],
    useCasesEn: [
      "Large meeting rooms and boardrooms",
      "Lecture halls and auditoriums",
      "High-end video conferencing setups",
    ],
    useCasesAr: [
      "غرف الاجتماعات الكبيرة وقاعات مجالس الإدارة",
      "قاعات المحاضرات",
      "إعدادات مؤتمرات الفيديو المتطورة",
    ],
    image: "/products/meeting/triple6xptz/main.webp",
    gallery: [
      "/products/meeting/triple6xptz/01.webp",
      "/products/meeting/triple6xptz/02.webp",
      "/products/meeting/triple6xptz/03.webp",
      "/products/meeting/triple6xptz/04.webp",
      "/products/meeting/triple6xptz/05.webp",
    ],
    slider: [
      "/products/meeting/triple6xptz/slide01.webp",
      "/products/meeting/triple6xptz/slide02.webp",
      "/products/meeting/triple6xptz/slide03.webp",
      "/products/meeting/triple6xptz/slide04.webp",
      "/products/meeting/triple6xptz/slide05.webp",
    ],
    gradient: "from-charcoal-800 to-teal-700",
  },
  {
    slug: "triple-20x-ai-ptz-conference-camera",
    categoryEn: "PTZ Cameras",
    categoryAr: "كاميرات PTZ",
    titleEn: "Triple 20X AI PTZ Conference Camera",
    titleAr:
      "Triple 20X AI PTZ Conference Camera – كاميرا مؤتمرات احترافية بتقريب بصري 20X وعدسة مزدوجة",
    shortEn:
      "Professional 20X optical zoom PTZ camera with dual lens, AI tracking, auto framing, and motorized privacy cover. Ideal for large venues requiring exceptional detail and range.",
    shortAr:
      "كاميرا PTZ احترافية بتقريب بصري 20X، عدسة مزدوجة، تتبع بالذكاء الاصطناعي، تأطير تلقائي، وغطاء خصوصية آلي. مثالية للقاعات الكبيرة التي تتطلب تفاصيل استثنائية ومدى طويل.",
    overviewEn:
      "A high-end PTZ camera featuring a powerful 20X optical zoom (with up to 8X digital zoom, total 160X) combined with a dual-lens system. Captures 4K ultra-HD video with a 8.4MP sensor. Includes AI-powered Auto Framing, AI Tracking (face/speaker), and a motorized privacy cover. Offers extensive connectivity with 3G-SDI, HDMI, USB 3.0, and IP (PoE) outputs, plus RS232/RS422 control. Supports up to 255 presets.",
    overviewAr:
      "كاميرا PTZ متطورة مزودة بتقريب بصري 20X قوي (مع تقريب رقمي يصل إلى 8X، بإجمالي 160X) ونظام عدسة مزدوجة. تلتقط فيديو بدقة 4K فائقة الوضوح من خلال مستشعر 8.4 ميجابكسل. تتضمن تأطيرًا تلقائيًا وتتبعًا بالذكاء الاصطناعي (وجه/متحدث) وغطاء خصوصية آلي. توفر منافذ 3G-SDI، HDMI، USB 3.0، IP (PoE)، والتحكم عبر RS232/RS422. تدعم 255 وضعية مسبقة.",
    featuresEn: [
      "20X optical zoom + 8X digital zoom (total 160X)",
      "Dual lens: 4K PTZ + panoramic camera",
      "AI Auto Framing, AI Face & Speaker Tracking",
      "Motorized privacy cover",
      "Outputs: 3G-SDI, HDMI, USB 3.0, IP (PoE), RS232/RS422",
    ],
    featuresAr: [
      "تقريب بصري 20X + تقريب رقمي 8X (إجمالي 160X)",
      "عدسة مزدوجة: كاميرا PTZ بدقة 4K + كاميرا بانورامية",
      "تأطير تلقائي بالذكاء الاصطناعي، تتبع الوجه والمتحدث",
      "غطاء خصوصية آلي بمحرك",
      "منافذ: 3G-SDI، HDMI، USB 3.0، IP (PoE)، RS232/RS422",
    ],
    useCasesEn: [
      "Large conference halls and auditoriums",
      "House of worship",
      "Broadcast and live event production",
    ],
    useCasesAr: [
      "قاعات المؤتمرات الكبيرة والمحاضرات",
      "دور العبادة",
      "الإنتاج التلفزيوني والفعاليات الحية",
    ],
    image: "/products/meeting/triple20xptz/main.webp",
    gallery: [
      "/products/meeting/triple20xptz/02.webp",
      "/products/meeting/triple20xptz/03.webp",
      "/products/meeting/triple20xptz/04.webp",
      "/products/meeting/triple20xptz/05.webp",
      "/products/meeting/triple20xptz/06.webp",
      "/products/meeting/triple20xptz/07.webp",
      "/products/meeting/triple20xptz/09.webp",
      "/products/meeting/triple20xptz/010.webp",
    ],
    slider: [
      "/products/meeting/triple20xptz/slide01.webp",
      "/products/meeting/triple20xptz/slide02.webp",
      "/products/meeting/triple20xptz/slide03.webp",
      "/products/meeting/triple20xptz/slide04.webp",
      "/products/meeting/triple20xptz/slide05.webp",
    ],
    gradient: "from-charcoal-800 to-teal-700",
  },
  {
    slug: "triple-12x-usb3-0-hdmi-ip-4k-poe-camera",
    categoryEn: "PTZ Cameras",
    categoryAr: "كاميرات PTZ",
    titleEn: "Triple 12X USB3.0 HDMI IP 4K PoE Camera",
    titleAr:
      "Triple – كاميرا PTZ بدقة 4K مع تقريب بصري 12X ومنافذ USB 3.0 و HDMI و IP و PoE",
    shortEn:
      "Professional 4K PTZ camera with 12X optical zoom, Sony CMOS sensor, multiple interfaces (USB 3.0, HDMI, IP, PoE), and broad compatibility with major conferencing platforms.",
    shortAr:
      "كاميرا PTZ احترافية بدقة 4K مع تقريب بصري 12X، مستشعر Sony CMOS، ومنافذ متعددة (USB 3.0، HDMI، IP، PoE)، وتوافق واسع مع منصات المؤتمرات الرئيسية.",
    overviewEn:
      "The triple is a high-performance 4K Ultra-HD PTZ camera featuring a 12X optical zoom and a Sony 1/2.8-inch CMOS sensor (8.29MP) for crystal-clear images. It offers versatile connectivity with HDMI, USB 3.0 (UVC1.1), and Ethernet (with PoE support). The camera supports simultaneous video output and is controllable via RS232, RS485, and IP (VISCA over IP). It includes advanced features like 2D & 3D noise reduction, H.264/H.265 encoding, and network protocols (RTSP, RTMP, ONVIF, GB28181). Ideal for professional conferencing, education, and live production.",
    overviewAr:
      "كاميرا triple هي كاميرا PTZ عالية الأداء بدقة 4K فائقة الوضوح، مزودة بتقريب بصري 12X ومستشعر Sony CMOS بحجم 1/2.8 بوصة (8.29 ميجابكسل) لتقديم صور فائقة النقاء. توفر مرونة في الاتصال عبر منافذ HDMI و USB 3.0 (UVC1.1) وإيثرنت (مع دعم PoE). تدعم الكاميرا الإخراج المتزامن للفيديو، ويمكن التحكم بها عبر RS232 و RS485 و IP (VISCA over IP). تشمل ميزات متقدمة مثل تقليل الضوضاء ثنائي وثلاثي الأبعاد، وتشفير H.264/H.265، وبروتوكولات الشبكة (RTSP، RTMP، ONVIF، GB28181). مثالية للمؤتمرات الاحترافية والتعليم والإنتاج الحي.",
    featuresEn: [
      '12X optical zoom (f=3.9-46.8mm) with 8.29MP Sony IMX 415 1/2.8" CMOS sensor',
      "4K UHD video output via HDMI (up to 4K@30fps) and USB 3.0 (up to 3840x2160@30fps)",
      "Multiple interfaces: HDMI, USB 3.0 (UVC1.1), Ethernet (PoE IEEE802.3af), RS232, RS485",
      "Supported protocols: VISCA, Pelco-D/P, VISCA over IP, ONVIF, GB28181, RTSP, RTMP",
      "Pan/Tilt: ±175° pan, -90° to +90° tilt, with 2D & 3D noise reduction and auto/manual exposure and focus",
    ],
    featuresAr: [
      "تقريب بصري 12X (بعد بؤري f=3.9-46.8mm) مع مستشعر Sony IMX 415 CMOS بحجم 1/2.8 بوصة ودقة 8.29 ميجابكسل",
      "إخراج فيديو بدقة 4K عبر HDMI (حتى 4K@30fps) و USB 3.0 (حتى 3840x2160@30fps)",
      "منافذ متعددة: HDMI، USB 3.0 (UVC1.1)، إيثرنت (مع دعم PoE)، RS232، RS485",
      "بروتوكولات مدعومة: VISCA، Pelco-D/P، VISCA عبر IP، ONVIF، GB28181، RTSP، RTMP",
      "حركة بانوراما وإمالة: ±175° أفقياً، -90° إلى +90° عمودياً، مع تقليل ضوضاء 2D و 3D، وضبط تلقائي/يدوي للتعريض والتركيز",
    ],
    useCasesEn: [
      "Large conference rooms and boardrooms",
      "Lecture halls and distance learning",
      "Broadcasting and live streaming studios",
      "House of worship and auditoriums",
    ],
    useCasesAr: [
      "غرف الاجتماعات الكبيرة وقاعات مجالس الإدارة",
      "قاعات المحاضرات والتعليم عن بعد",
      "استوديوهات البث والبث المباشر",
      "دور العبادة والقاعات الكبرى",
    ],
    image: "/products/meeting/vloop12x/main.webp",
    slider: [
      "/products/meeting/vloop12x/01.webp",
      "/products/meeting/vloop12x/02.webp",
      "/products/meeting/vloop12x/03.webp",
      "/products/meeting/vloop12x/04.webp",
    ],
    gradient: "from-charcoal-800 to-teal-700",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

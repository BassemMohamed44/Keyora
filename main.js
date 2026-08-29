'use strict';


const CONSTANTS = {
  STORAGE_KEY: 'Keyora',
  STORAGE_VERSION: 2,
  MAX_HISTORY: 200,
  CHARS_PER_WORD: 5,
  TIMER_INTERVAL_MS: 100,
  REQUIRED_ACCURACY_BASE: 90,
  REQUIRED_WPM_BASE: 20,
  XP_BASE_PER_SECOND: 1,
  XP_ACCURACY_BONUS: 1.5,
  XP_STREAK_BONUS: 0.05,
  ADAPTIVE_SAMPLE_SIZE: 10,
  HEATMAP_MAX_ERRORS: 10,
};

const FINGERS = {
  0: { name: { ar: 'إبهام', en: 'Thumb' }, color: '#9B5CF6', cssClass: 'finger-thumb' },
  1: { name: { ar: 'خنصر يسار', en: 'Left Pinky' }, color: '#EF4444', cssClass: 'finger-l-pinky' },
  2: { name: { ar: 'بنصر يسار', en: 'Left Ring' }, color: '#F59E0B', cssClass: 'finger-l-ring' },
  3: { name: { ar: 'وسطى يسار', en: 'Left Middle' }, color: '#22C55E', cssClass: 'finger-l-middle' },
  4: { name: { ar: 'سبابة يسار', en: 'Left Index' }, color: '#06B6D4', cssClass: 'finger-l-index' },
  5: { name: { ar: 'سبابة يمين', en: 'Right Index' }, color: '#06B6D4', cssClass: 'finger-r-index' },
  6: { name: { ar: 'وسطى يمين', en: 'Right Middle' }, color: '#22C55E', cssClass: 'finger-r-middle' },
  7: { name: { ar: 'بنصر يمين', en: 'Right Ring' }, color: '#F59E0B', cssClass: 'finger-r-ring' },
  8: { name: { ar: 'خنصر يمين', en: 'Right Pinky' }, color: '#EF4444', cssClass: 'finger-r-pinky' },
};


const I18N = {
  ar: {
    brand: 'Keyora',
    nav_home: 'الرئيسية', nav_learn: 'تعلّم', nav_test: 'اختبار', nav_code: 'كود',
    nav_adaptive: 'تكيّفي', nav_stats: 'إحصائيات', nav_achievements: 'إنجازات', nav_settings: 'إعدادات',
    hero_title: 'أتقن الكتابة بسرعة ودقة',
    hero_desc: 'منصة تعليمية احترافية لتعلّم الكتابة بالعربية والإنجليزية، مع تحليل متقدم للأخطاء، تدريب تكيّفي، ونظام إنجازات.',
    start_test: 'ابدأ اختبار السرعة', start_learn: 'ابدأ التعلّم', daily_challenge: 'تحدي اليوم',
    your_level: 'مستواك', best_wpm: 'أفضل سرعة', best_acc: 'أفضل دقة', streak: 'السلسلة', total_tests: 'الاختبارات',
    days: 'يوم', tests: 'اختبار',
    f_learn_title: 'تعلّم متدرّج', f_learn_desc: '13 مستوى من الأساسيات إلى الاحتراف.',
    f_test_title: 'اختبارات السرعة', f_test_desc: 'Raw/Adjusted WPM، CPM، ودقة حقيقية.',
    f_code_title: 'كتابة الأكواد', f_code_desc: 'تدرّب على الرموز: {} [] () ; = +',
    f_adaptive_title: 'تدريب تكيّفي', f_adaptive_desc: 'تمارين مخصصة لنقاط ضعفك.',
    f_stats_title: 'إحصائيات مفصّلة', f_stats_desc: 'رسوم بيانية وتحليل عميق للأداء.',
    f_ach_title: 'الإنجازات', f_ach_desc: 'اجمع XP وافتح شارات جديدة.',
    back: 'رجوع', reset: 'إعادة',
    typing_hint: 'ابدأ الكتابة — المؤقت يبدأ تلقائياً.',
    finger_hint: 'ابدأ الكتابة لعرض معلومات الإصبع',
    mode_time: 'وقت', mode_words: 'كلمات', mode_quote: 'اقتباس',
    diff_easy: 'سهل', diff_medium: 'متوسط', diff_hard: 'صعب',
    results_title: 'نتيجة الاختبار', chars_per_min: 'حرف/دقيقة',
    tab_analysis: 'تحليل الأخطاء', tab_heatmap: 'Heatmap', tab_feedback: 'تقييم الأداء',
    problem_keys: 'أكثر المفاتيح إشكالية', weak_fingers: ' أضعف الأصابع',
    keyboard_heatmap: ' خريطة الكيبورد', heatmap_desc: 'الأحمر = أخطاء كثيرة · الأخضر = أداء ممتاز',
    heatmap_low: 'منخفض', heatmap_medium: 'متوسط', heatmap_high: 'مرتفع',
    strengths: 'نقاط القوة', weaknesses: ' نقاط التحسين', suggestions: 'اقتراحات',
    try_again: ' حاول مرة أخرى', practice_weak: ' تدرّب على نقاط الضعف', home: ' الرئيسية',
    back_to_learn: ' العودة لقائمة التعلّم',
    learn_title: ' رحلة التعلّم', learn_desc: '13 مستوى متدرّج — من وضع الأصابع إلى الكتابة الاحترافية.',
    code_title: 'كتابة الأكواد', code_desc: 'تدرّب على الرموز الخاصة التي يستخدمها المبرمجون.', start_code: 'ابدأ التدريب',
    adaptive_title: ' تدريب تكيّفي', adaptive_desc: 'تمارين مخصصة بناءً على تحليل أدائك.',
    weak_analysis: ' تحليل نقاط الضعف', start_adaptive: 'ابدأ تمرين مخصص',
    stats_title: ' الإحصائيات', tab_overview: 'نظرة عامة', tab_charts: 'الرسوم البيانية', tab_history: 'السجل',
    chart_wpm: ' تطور السرعة (WPM)', chart_acc: ' تطور الدقة (Accuracy)', chart_lang: ' العربية vs الإنجليزية',
    history_title: ' سجل الاختبارات', clear_history: 'مسح السجل',
    ach_title: ' الإنجازات', ach_desc: 'اجمع XP وافتح شارات جديدة.', current_level: 'المستوى الحالي', unlocked: 'مفتوحة',
    settings_title: ' الإعدادات', s_general: 'عام', s_lang: 'اللغة', s_lang_desc: 'لغة الواجهة',
    s_sound: 'الأصوات', s_sound_desc: 'صوت عند الضغط', s_caret: 'حركة المؤشر', s_caret_desc: 'تأثيرات بصرية',
    s_data: 'البيانات', s_export: 'تصدير', s_export_desc: 'تنزيل نسخة', s_import: 'استيراد', s_import_desc: 'استعادة نسخة',
    s_reset: 'إعادة تعيين', s_reset_desc: 'حذف كل البيانات', reset_all: 'إعادة تعيين',
    export: 'تصدير', import: 'استيراد', off: 'إيقاف', on: 'تشغيل',
    confirm_clear: 'هل أنت متأكد من مسح السجل؟', confirm_reset: 'هل أنت متأكد؟ سيتم حذف كل بياناتك.',
    no_history: 'لا توجد اختبارات مسجلة بعد.', locked: 'مقفل', complete: 'مكتمل',
    streak_up: ' أحسنت! سلسلة أيامك:', new_best: 'رقم قياسي جديد!',
    daily_done: ' أنجزت تحدي اليوم!', daily_new: ' تحدي جديد في انتظارك!',
    finished: ' انتهى الوقت!', level_completed: ' أكملت المستوى',
    no_data: 'لا توجد بيانات كافية للتحليل. أتمم بعض الاختبارات أولاً.',
    level_names: { 1: 'مبتدئ', 2: 'متوسط', 3: 'متقدم', 4: 'خبير', 5: 'أسطوري' },
    nav_custom: 'مقالي',
    custom_title: 'مقالك الخاص', custom_desc: 'الصق أي نص أو مقال جايبه وتدرّب على الكتابة عليه مباشرة، أو احفظه لاستخدامه لاحقاً.',
    custom_title_placeholder: 'عنوان المقال (اختياري)', custom_text_placeholder: 'الصق نص مقالك هنا لتتعلم الكتابة عليه...',
    custom_save: 'حفظ للاستخدام لاحقاً', custom_start: 'ابدأ الكتابة على هذا النص',
    custom_saved_title: 'المقالات المحفوظة', custom_empty: 'لا توجد مقالات محفوظة بعد. الصق نصاً واحفظه ليظهر هنا.',
    custom_practice: 'تدرّب', custom_delete: 'حذف', custom_chars: 'حرف',
    custom_need_text: 'أضف نصاً أولاً', custom_saved_toast: 'تم حفظ المقال', custom_deleted_toast: 'تم حذف المقال',
    confirm_delete_article: 'هل تريد حذف هذا المقال؟',
    footer_tagline: 'تدرّب. تحسّن. تفوّق.', footer_rights: '© 2026 Keyora — جميع الحقوق محفوظة',
    
  },
  en: {
    brand: 'Keyora',
    nav_home: 'Home', nav_learn: 'Learn', nav_test: 'Test', nav_code: 'Code',
    nav_adaptive: 'Adaptive', nav_stats: 'Stats', nav_achievements: 'Achievements', nav_settings: 'Settings',
    hero_title: 'Master typing with speed & accuracy',
    hero_desc: 'A professional platform for learning Arabic & English typing, with advanced error analysis, adaptive training, and achievements.',
    start_test: ' Start Speed Test', start_learn: ' Start Learning', daily_challenge: ' Daily Challenge',
    your_level: 'Your Level', best_wpm: 'Best Speed', best_acc: 'Best Accuracy', streak: 'Streak', total_tests: 'Tests',
    days: 'days', tests: 'tests',
    f_learn_title: 'Progressive Learning', f_learn_desc: '13 levels from basics to pro.',
    f_test_title: 'Speed Tests', f_test_desc: 'Raw/Adjusted WPM, CPM, real accuracy.',
    f_code_title: 'Code Typing', f_code_desc: 'Practice symbols: {} [] () ; = +',
    f_adaptive_title: 'Adaptive Training', f_adaptive_desc: 'Exercises tailored to your weaknesses.',
    f_stats_title: 'Detailed Stats', f_stats_desc: 'Charts and deep performance analysis.',
    f_ach_title: 'Achievements', f_ach_desc: 'Earn XP and unlock badges.',
    back: 'Back', reset: 'Reset',
    typing_hint: 'Start typing — timer begins automatically.',
    finger_hint: 'Start typing to see finger info',
    mode_time: 'Time', mode_words: 'Words', mode_quote: 'Quote',
    diff_easy: 'Easy', diff_medium: 'Medium', diff_hard: 'Hard',
    results_title: ' Test Result', chars_per_min: 'chars/min',
    tab_analysis: 'Error Analysis', tab_heatmap: 'Heatmap', tab_feedback: 'Feedback',
    problem_keys: ' Most Problematic Keys', weak_fingers: ' Weakest Fingers',
    keyboard_heatmap: ' Keyboard Heatmap', heatmap_desc: 'Red = many errors · Green = excellent',
    heatmap_low: 'Low', heatmap_medium: 'Medium', heatmap_high: 'High',
    strengths: 'Strengths', weaknesses: ' Areas to Improve', suggestions: ' Suggestions',
    try_again: 'Try Again', practice_weak: ' Practice Weak Points', home: ' Home',
    back_to_learn: ' Back to Learning',
    learn_title: 'Learning Journey', learn_desc: '13 progressive levels — from finger placement to pro typing.',
    code_title: ' Code Typing', code_desc: 'Practice special symbols used by programmers.', start_code: 'Start Practice',
    adaptive_title: 'Adaptive Training', adaptive_desc: 'Custom exercises based on your performance analysis.',
    weak_analysis: ' Weakness Analysis', start_adaptive: 'Start Custom Exercise',
    stats_title: 'Statistics', tab_overview: 'Overview', tab_charts: 'Charts', tab_history: 'History',
    chart_wpm: ' Speed Progress (WPM)', chart_acc: ' Accuracy Progress', chart_lang: ' Arabic vs English',
    history_title: 'Test History', clear_history: 'Clear History',
    ach_title: 'Achievements', ach_desc: 'Earn XP and unlock badges.', current_level: 'Current Level', unlocked: 'Unlocked',
    settings_title: 'Settings', s_general: 'General', s_lang: 'Language', s_lang_desc: 'UI language',
    s_sound: 'Sounds', s_sound_desc: 'Play sound on keypress', s_caret: 'Motion', s_caret_desc: 'Visual effects',
    s_data: 'Data', s_export: 'Export', s_export_desc: 'Download backup', s_import: 'Import', s_import_desc: 'Restore backup',
    s_reset: 'Reset', s_reset_desc: 'Delete all data', reset_all: 'Reset',
    export: 'Export', import: 'Import', off: 'Off', on: 'On',
    confirm_clear: 'Clear history?', confirm_reset: 'Delete all data?',
    no_history: 'No tests yet.', locked: 'Locked', complete: 'Complete',
    streak_up: 'Streak:', new_best: 'New personal best!',
    daily_done: "Today's challenge done!", daily_new: 'New daily challenge!',
    finished: "Time's up!", level_completed: 'Level completed',
    no_data: 'Not enough data. Complete some tests first.',
    level_names: { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced', 4: 'Expert', 5: 'Legendary' },
    nav_custom: 'My Article',
    custom_title: 'Your Own Article', custom_desc: 'Paste any text or article you have and practice typing it directly, or save it for later.',
    custom_title_placeholder: 'Article title (optional)', custom_text_placeholder: 'Paste your article text here to practice typing it...',
    custom_save: 'Save for Later', custom_start: 'Start Typing This Text',
    custom_saved_title: 'Saved Articles', custom_empty: 'No saved articles yet. Paste some text and save it to see it here.',
    custom_practice: 'Practice', custom_delete: 'Delete', custom_chars: 'chars',
    custom_need_text: 'Please add some text first', custom_saved_toast: 'Article saved', custom_deleted_toast: 'Article deleted',
    confirm_delete_article: 'Delete this article?',
    footer_tagline: 'Practice. Improve. Master.', footer_rights: '© 2026 Keyora — All rights reserved',
    
  }
};


const TEXTS = {
  ar: {
    easy: ['الشمس تشرق كل صباح','القلم أقوى من السيف','العلم نور والجهل ظلام','الصبر مفتاح الفرج','الوقت من ذهب','العقل السليم في الجسم السليم','من جد وجد','القراءة غذاء العقل','أحب العمل والنظام','الكتاب أفضل صديق'],
    medium: ['تعلم الكتابة بسرعة يحتاج إلى ممارسة يومية وتركيز عالٍ على وضع الأصابع الصحيح على لوحة المفاتيح.','التكنولوجيا غيّرت طريقة تواصلنا وعملنا، وأصبحت مهارة الكتابة السريعة ضرورية في معظم المهن الحديثة.','القراءة المستمرة توسّع الأفق وتثري المفردات، وتساعد على تحسين مهارات الكتابة والتعبير عن الأفكار بوضوح.','النجاح ليس صدفة، بل نتيجة عمل دؤوب وتعلّم مستمر من الأخطاء، وإصرار على تحقيق الأهداف.','البرمجة فن وعلم معاً، تتطلّب تفكيراً منطقياً وقدرة على حل المشكلات، وتفتح أبواباً للإبداع.'],
    hard: ['في عصر التحول الرقمي، أصبحت الكفاءة في استخدام الحاسوب ضرورة لا رفاهية، والكتابة السريعة والدقيقة مهارة أساسية توفّر الوقت والجهد.','تُعدّ اللغة العربية من أغنى لغات العالم وأكثرها تعبيراً، وتتميز بفصاحة تتيح للكاتب رسم الصور بأقل عدد من الكلمات.','الذكاء الاصطناعي تحوّل جذري في طريقة إنتاج المعرفة، ومع ذلك يبقى العنصر البشري صاحب المسؤولية الأخلاقية.'],
  },
  en: {
    easy: ['the sun rises every morning','practice makes perfect daily','time is money so use it well','reading opens many doors','a calm mind solves problems','work hard and stay focused','learn something new each day','small steps lead to big changes','dream big and start today','books are great friends'],
    medium: ['Learning to type quickly requires daily practice and strong focus on proper finger placement on the keyboard.','Technology has changed how we communicate and work, and fast typing is now essential in most modern careers.','Regular reading expands the mind and enriches vocabulary, helping improve writing skills and clear expression.','Success is not an accident but the result of hard work, learning from mistakes, and persistence toward goals.','Programming is both art and science, requiring logical thinking and problem solving.'],
    hard: ['In the era of digital transformation, computer proficiency is a necessity rather than a luxury, and fast, accurate typing is an essential skill that saves time and effort.','Arabic is one of the richest and most expressive languages in the world, containing precise words for every situation, requiring patience and continuous practice.','Artificial intelligence is a radical shift in how knowledge is produced, yet the human element remains the bearer of ethical responsibility.'],
  }
};


const CODE_TEXTS = {
  javascript: [
    'const x = 42;',
    'function add(a, b) { return a + b; }',
    'if (x > 0) { console.log("positive"); }',
    'const arr = [1, 2, 3].map(n => n * 2);',
    'for (let i = 0; i < 10; i++) { sum += i; }',
    'const obj = { name: "Ali", age: 25 };',
  ],
  python: [
    'def add(a, b): return a + b',
    'if x > 0: print("positive")',
    'nums = [1, 2, 3, 4, 5]',
    'for i in range(10): print(i)',
    'data = {"name": "Ali", "age": 25}',
    'result = [x*2 for x in nums if x > 2]',
  ],
  cpp: [
    'int x = 42;',
    'std::cout << "Hello" << std::endl;',
    'for (int i = 0; i < 10; ++i) {}',
    'if (x > 0) { return true; }',
    'std::vector<int> v = {1, 2, 3};',
    'auto f = [](int a) { return a * 2; };',
  ],
  html: [
    '<div class="box">Hello</div>',
    '<a href="https://bassemmohamed.pages.dev/">Link</a>',
    '<ul><li>One</li><li>Two</li></ul>',
    '<input type="text" name="q" />',
    '<img src="pic.png" alt="pic" />',
  ],
  css: [
    '.box { color: red; margin: 10px; }',
    'body { font-family: sans-serif; }',
    '@media (max-width: 768px) { }',
    'a:hover { color: blue; }',
    '#main { display: flex; gap: 10px; }',
  ],
};


const LEVELS = [
  { id:1, key:'home_row', title_ar:'الصف الأوسط', title_en:'Home Row', desc_ar:'ASDF — JKL;', desc_en:'ASDF — JKL;', tag_ar:'أساس', tag_en:'Basics', reqWpm:15, reqAcc:90 },
  { id:2, key:'left_hand', title_ar:'اليد اليسرى', title_en:'Left Hand', desc_ar:'حروف اليد اليسرى', desc_en:'Left hand letters', tag_ar:'يد', tag_en:'Hand', reqWpm:18, reqAcc:90 },
  { id:3, key:'right_hand', title_ar:'اليد اليمنى', title_en:'Right Hand', desc_ar:'حروف اليد اليمنى', desc_en:'Right hand letters', tag_ar:'يد', tag_en:'Hand', reqWpm:18, reqAcc:90 },
  { id:4, key:'top_row', title_ar:'الصف العلوي', title_en:'Top Row', desc_ar:'QWERTY...', desc_en:'QWERTY...', tag_ar:'حروف', tag_en:'Letters', reqWpm:20, reqAcc:88 },
  { id:5, key:'bottom_row', title_ar:'الصف السفلي', title_en:'Bottom Row', desc_ar:'ZXCVBNM', desc_en:'ZXCVBNM', tag_ar:'حروف', tag_en:'Letters', reqWpm:20, reqAcc:88 },
  { id:6, key:'numbers', title_ar:'الأرقام', title_en:'Numbers', desc_ar:'1234567890', desc_en:'1234567890', tag_ar:'أرقام', tag_en:'Numbers', reqWpm:22, reqAcc:85 },
  { id:7, key:'symbols', title_ar:'الرموز', title_en:'Symbols', desc_ar:'!@#$%^&*()', desc_en:'!@#$%^&*()', tag_ar:'رموز', tag_en:'Symbols', reqWpm:20, reqAcc:85 },
  { id:8, key:'words', title_ar:'الكلمات', title_en:'Words', desc_ar:'كلمات شائعة', desc_en:'Common words', tag_ar:'كلمات', tag_en:'Words', reqWpm:25, reqAcc:90 },
  { id:9, key:'sentences', title_ar:'الجمل', title_en:'Sentences', desc_ar:'جمل مع ترقيم', desc_en:'Sentences with punctuation', tag_ar:'جمل', tag_en:'Sentences', reqWpm:28, reqAcc:90 },
  { id:10, key:'arabic_basic', title_ar:'العربية — أساس', title_en:'Arabic Basics', desc_ar:'حروف عربية أساسية', desc_en:'Basic Arabic letters', tag_ar:'عربي', tag_en:'Arabic', reqWpm:15, reqAcc:85 },
  { id:11, key:'arabic_full', title_ar:'العربية — متقدم', title_en:'Arabic Advanced', desc_ar:'جمل عربية كاملة', desc_en:'Full Arabic sentences', tag_ar:'عربي', tag_en:'Arabic', reqWpm:20, reqAcc:85 },
  { id:12, key:'paragraphs', title_ar:'الفقرات', title_en:'Paragraphs', desc_ar:'نصوص طويلة', desc_en:'Long texts', tag_ar:'نصوص', tag_en:'Texts', reqWpm:30, reqAcc:90 },
  { id:13, key:'touch_typing', title_ar:'بدون نظر', title_en:'Touch Typing', desc_ar:'كتابة احترافية', desc_en:'Professional typing', tag_ar:'احترافي', tag_en:'Pro', reqWpm:40, reqAcc:95 },
];

const LEVEL_TEXTS_EN = {
  home_row: ['asdf jkl; asdf jkl;', 'falas salad jed lak', 'ask a lad dad fall'],
  left_hand: ['safe sad face dad', 'grass red fast car', 'shake vast grace'],
  right_hand: ['jump milk hook pink', 'john knows how mom', 'hill look moon'],
  top_row: ['qwerty uiop qwer', 'the quick red fox', 'power rule your web', 'write your quote'],
  bottom_row: ['zxcv bnm zxcv', 'zone mix cab van', 'jump back over zone'],
  numbers: ['1234 5678 90', 'age 25 id 12345', 'call 555 0199 now'],
  symbols: ['hello! how are you?', 'price: $25 (sale)', 'user@domain.com', '50% off!'],
  words: ['the and for are but not you all', 'can had her was one our out', 'because while where which their there'],
  sentences: ['The quick brown fox jumps over the lazy dog.', 'A journey of a thousand miles begins with a single step.'],
  paragraphs: ['Technology has changed the way we live and work. Fast typing is now essential. With regular practice, anyone can improve.'],
  touch_typing: ['The best way to predict the future is to create it. Stay focused, stay curious, and never stop learning.'],
};
const LEVEL_TEXTS_AR = {
  arabic_basic: ['ب ت ث ج ح خ', 'ض ص ث ق ف غ', 'كان يا ما كان في قديم الزمان'],
  arabic_full: ['العلم نور والجهل ظلام، فمن طلب العلا سهر الليالي.', 'الصبر مفتاح الفرج، ومن جدّ وجد، ومن زرع حصد.'],
};


const EN_KEYBOARD = [
  [{k:'`',f:1,s:'~'},{k:'1',f:1,s:'!'},{k:'2',f:2,s:'@'},{k:'3',f:3,s:'#'},{k:'4',f:4,s:'$'},{k:'5',f:4,s:'%'},{k:'6',f:5,s:'^'},{k:'7',f:5,s:'&'},{k:'8',f:6,s:'*'},{k:'9',f:7,s:'('},{k:'0',f:8,s:')'},{k:'-',f:8,s:'_'},{k:'=',f:8,s:'+'}],
  [{k:'Q',f:1},{k:'W',f:2},{k:'E',f:3},{k:'R',f:4},{k:'T',f:4},{k:'Y',f:5},{k:'U',f:5},{k:'I',f:6},{k:'O',f:7},{k:'P',f:8},{k:'[',f:8,s:'{'},{k:']',f:8,s:'}'},{k:'\\',f:8,s:'|'}],
  [{k:'A',f:1},{k:'S',f:2},{k:'D',f:3},{k:'F',f:4,home:1},{k:'G',f:4},{k:'H',f:5},{k:'J',f:5,home:1},{k:'K',f:6},{k:'L',f:7},{k:';',f:8,s:':'},{k:"'",f:8,s:'"'}],
  [{k:'Shift',f:1,wide:1},{k:'Z',f:1},{k:'X',f:2},{k:'C',f:3},{k:'V',f:4},{k:'B',f:4},{k:'N',f:5},{k:'M',f:5},{k:',',f:6,s:'<'},{k:'.',f:7,s:'>'},{k:'/',f:8,s:'?'},{k:'Shift',f:8,wide:1}],
  [{k:'Ctrl',f:1,wide:1},{k:'Alt',f:2,wide:1},{k:' ',f:0,space:1},{k:'Alt',f:7,wide:1},{k:'Ctrl',f:8,wide:1}]
];


const AR_KEYBOARD = [
  [{k:'ذ',f:1,s:'ّ'},{k:'١',f:1,s:'!'},{k:'٢',f:2,s:'@'},{k:'٣',f:3,s:'#'},{k:'٤',f:4,s:'$'},{k:'٥',f:4,s:'%'},{k:'٦',f:5,s:'^'},{k:'٧',f:5,s:'&'},{k:'٨',f:6,s:'*'},{k:'٩',f:7,s:'('},{k:'٠',f:8,s:')'},{k:'-',f:8,s:'-'},{k:'=',f:8,s:'+'}],
  [{k:'ض',f:1,s:'َ'},{k:'ص',f:2,s:'ً'},{k:'ث',f:3,s:'ُ'},{k:'ق',f:4,s:'ٌ'},{k:'ف',f:4,s:'لإ'},{k:'غ',f:5,s:'إ'},{k:'ع',f:5,s:'‘'},{k:'ه',f:6,s:'÷'},{k:'خ',f:7,s:'×'},{k:'ح',f:8,s:'؛'},{k:'ج',f:8,s:'<'},{k:'د',f:8,s:'>'}],
  [{k:'ش',f:1,s:'ِ'},{k:'س',f:2,s:'ٍ'},{k:'ي',f:3,s:']'},{k:'ب',f:4,home:1,s:'['},{k:'ل',f:4,s:'لأ'},{k:'ا',f:5,s:'أ'},{k:'ت',f:5,home:1,s:'ـ'},{k:'ن',f:6,s:'آ'},{k:'م',f:7,s:'/'},{k:'ك',f:8,s:':'},{k:'ط',f:8,s:'"'}],
  [{k:'Shift',f:1,wide:1},{k:'ئ',f:1,s:'~'},{k:'ء',f:2,s:'ْ'},{k:'ؤ',f:3,s:'}'},{k:'ر',f:4,s:'{'},{k:'لا',f:4,s:'لآ'},{k:'ى',f:5,s:'آ'},{k:'ة',f:5,s:"'"},{k:'و',f:6,s:','},{k:'ز',f:7,s:'.'},{k:'ظ',f:8,s:'؟'},{k:'Shift',f:8,wide:1}],
  [{k:'Ctrl',f:1,wide:1},{k:'Alt',f:2,wide:1},{k:' ',f:0,space:1},{k:'Alt',f:7,wide:1},{k:'Ctrl',f:8,wide:1}]
];


const ACHIEVEMENTS = [
  { id:'first_test', icon:'🎯', name_ar:'أول اختبار', name_en:'First Test', desc_ar:'أكمل أول اختبار', desc_en:'Complete your first test', xp:10, check: s => s.history.length >= 1 },
  { id:'perfect', icon:'💎', name_ar:'دقة مثالية', name_en:'Perfect Accuracy', desc_ar:'100% دقة في اختبار', desc_en:'100% accuracy in a test', xp:50, check: s => s.history.some(h => h.accuracy === 100) },
  { id:'wpm_30', icon:'⚡', name_ar:'30 WPM', name_en:'30 WPM', desc_ar:'حقق 30 WPM', desc_en:'Reach 30 WPM', xp:30, check: s => s.bestWpm >= 30 },
  { id:'wpm_50', icon:'🚀', name_ar:'50 WPM', name_en:'50 WPM', desc_ar:'حقق 50 WPM', desc_en:'Reach 50 WPM', xp:60, check: s => s.bestWpm >= 50 },
  { id:'wpm_75', icon:'🔥', name_ar:'75 WPM', name_en:'75 WPM', desc_ar:'حقق 75 WPM', desc_en:'Reach 75 WPM', xp:100, check: s => s.bestWpm >= 75 },
  { id:'wpm_100', icon:'💫', name_ar:'100 WPM', name_en:'100 WPM', desc_ar:'حقق 100 WPM', desc_en:'Reach 100 WPM', xp:200, check: s => s.bestWpm >= 100 },
  { id:'streak_3', icon:'🔥', name_ar:'3 أيام', name_en:'3 Day Streak', desc_ar:'3 أيام متتالية', desc_en:'3 days in a row', xp:30, check: s => s.streak >= 3 },
  { id:'streak_7', icon:'🔥', name_ar:'أسبوع', name_en:'7 Day Streak', desc_ar:'7 أيام متتالية', desc_en:'7 days in a row', xp:70, check: s => s.streak >= 7 },
  { id:'streak_30', icon:'🏆', name_ar:'شهر', name_en:'30 Day Streak', desc_ar:'30 يوم متتالي', desc_en:'30 days in a row', xp:300, check: s => s.streak >= 30 },
  { id:'arabic', icon:'🌙', name_ar:'كاتب عربي', name_en:'Arabic Typist', desc_ar:'10 اختبارات عربية', desc_en:'10 Arabic tests', xp:50, check: s => s.history.filter(h => h.lang === 'ar').length >= 10 },
  { id:'english', icon:'🔤', name_ar:'كاتب إنجليزي', name_en:'English Typist', desc_ar:'10 اختبارات إنجليزية', desc_en:'10 English tests', xp:50, check: s => s.history.filter(h => h.lang === 'en').length >= 10 },
  { id:'polyglot', icon:'🌍', name_ar:'متعدد اللغات', name_en:'Polyglot', desc_ar:'اختبار بكل لغة', desc_en:'Test in both languages', xp:40, check: s => s.history.some(h => h.lang === 'ar') && s.history.some(h => h.lang === 'en') },
  { id:'tests_10', icon:'📝', name_ar:'10 اختبارات', name_en:'10 Tests', desc_ar:'أكمل 10 اختبارات', desc_en:'Complete 10 tests', xp:30, check: s => s.history.length >= 10 },
  { id:'tests_100', icon:'📚', name_ar:'100 اختبار', name_en:'100 Tests', desc_ar:'أكمل 100 اختبار', desc_en:'Complete 100 tests', xp:200, check: s => s.history.length >= 100 },
  { id:'level_5', icon:'⭐', name_ar:'المستوى 5', name_en:'Level 5', desc_ar:'وصلت للمستوى 5', desc_en:'Reach level 5', xp:100, check: s => s.level >= 5 },
  { id:'level_10', icon:'🌟', name_ar:'المستوى 10', name_en:'Level 10', desc_ar:'وصلت للمستوى 10', desc_en:'Reach level 10', xp:200, check: s => s.level >= 10 },
];


const defaultState = {
  version: CONSTANTS.STORAGE_VERSION,
  lang: 'ar',
  history: [],
  bestWpm: 0,
  bestAcc: 0,
  streak: 0,
  longestStreak: 0,
  lastPlayDate: null,
  level: 1,
  xp: 0,
  completedLevels: [],
  unlockedAchievements: [],
  dailyChallengeDate: null,
  dailyChallengeDone: false,
  keyErrorStats: {}, 
  settings: { sound: 'off', motion: 'on' },
  customTexts: [],
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(CONSTANTS.STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
   
    if (!parsed || typeof parsed !== 'object') return structuredClone(defaultState);
    if (parsed.version !== CONSTANTS.STORAGE_VERSION) {
      
      return migrateState(parsed);
    }
    return { ...structuredClone(defaultState), ...parsed };
  } catch (e) {
    console.warn('Storage corrupted, resetting:', e);
    return structuredClone(defaultState);
  }
}

function migrateState(old) {
  
  const migrated = structuredClone(defaultState);
  if (Array.isArray(old.history)) migrated.history = old.history.slice(0, CONSTANTS.MAX_HISTORY);
  if (typeof old.bestWpm === 'number') migrated.bestWpm = old.bestWpm;
  if (typeof old.bestAcc === 'number') migrated.bestAcc = old.bestAcc;
  if (typeof old.streak === 'number') migrated.streak = old.streak;
  if (typeof old.level === 'number') migrated.level = old.level;
  if (typeof old.lang === 'string') migrated.lang = old.lang;
  if (Array.isArray(old.completedLevels)) migrated.completedLevels = old.completedLevels;
  return migrated;
}

function saveState() {
  try {
    localStorage.setItem(CONSTANTS.STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}


const Metrics = {

  rawWpm(totalChars, elapsedSec) {
    if (elapsedSec <= 0) return 0;
    return Math.round((totalChars / CONSTANTS.CHARS_PER_WORD) / (elapsedSec / 60));
  },


  adjustedWpm(totalChars, uncorrectedErrors, elapsedSec) {
    if (elapsedSec <= 0) return 0;
    const minutes = elapsedSec / 60;
    const raw = (totalChars / CONSTANTS.CHARS_PER_WORD) / minutes;
    const penalty = uncorrectedErrors / minutes;
    return Math.max(0, Math.round(raw - penalty));
  },

  cpm(correctChars, elapsedSec) {
    if (elapsedSec <= 0) return 0;
    return Math.round(correctChars / (elapsedSec / 60));
  },

  accuracy(correctChars, totalTyped) {
    if (totalTyped <= 0) return 100;
    return Math.round((correctChars / totalTyped) * 100);
  },

  
  calculateXp(elapsedSec, accuracy, streak) {
    const base = elapsedSec * CONSTANTS.XP_BASE_PER_SECOND;
    const accBonus = accuracy / 100 * CONSTANTS.XP_ACCURACY_BONUS;
    const streakBonus = 1 + (streak * CONSTANTS.XP_STREAK_BONUS);
    return Math.round(base * accBonus * streakBonus);
  },
};


const ErrorTracker = {
  events: [], 

  reset() { this.events = []; },

  record(expected, actual, finger, timestamp) {
    this.events.push({ expected, actual, finger, timestamp, correct: expected === actual });
  },

  recordCorrection() {
    
    if (this.events.length > 0) {
      this.events[this.events.length - 1].corrected = true;
    }
  },

  getProblemKeys() {
    const counts = {};
    this.events.forEach(e => {
      if (!e.correct) {
        const key = e.expected;
        counts[key] = (counts[key] || 0) + 1;
      }
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([key, count]) => ({ key, count }));
  },

  getWeakFingers() {
    const counts = {};
    this.events.forEach(e => {
      if (!e.correct && e.finger != null) {
        counts[e.finger] = (counts[e.finger] || 0) + 1;
      }
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([finger, count]) => ({ finger: parseInt(finger), count }));
  },

  getKeyHeatmap() {
    const map = {}; 
    this.events.forEach(e => {
      const k = e.expected;
      if (!map[k]) map[k] = { errors: 0, correct: 0, total: 0 };
      map[k].total++;
      if (e.correct) map[k].correct++;
      else map[k].errors++;
    });
    return map;
  },
};


const Timer = {
  startTime: null,
  endTime: null,
  duration: 60,
  intervalId: null,
  onTick: null,
  onEnd: null,
  running: false,

  start(duration, onTick, onEnd) {
    this.stop();
    this.duration = duration;
    this.startTime = performance.now();
    this.endTime = this.startTime + duration * 1000;
    this.onTick = onTick;
    this.onEnd = onEnd;
    this.running = true;
    this.intervalId = setInterval(() => this._tick(), CONSTANTS.TIMER_INTERVAL_MS);
  },

  _tick() {
    if (!this.running) return;
    const now = performance.now();
    const elapsed = (now - this.startTime) / 1000;
    const remaining = Math.max(0, this.duration - elapsed);
    if (this.onTick) this.onTick(elapsed, remaining);
    if (remaining <= 0) {
      this.stop();
      if (this.onEnd) this.onEnd();
    }
  },

  stop() {
    this.running = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  },

  getElapsed() {
    if (!this.startTime) return 0;
    return (performance.now() - this.startTime) / 1000;
  },

  isFinished() {
    if (!this.running) return false;
    return performance.now() >= this.endTime;
  },
};


const TypingEngine = {
  
  text: '',
  index: 0,
  mode: 'time', 
  lang: 'ar',
  difficulty: 'medium',
  duration: 60,
  wordCount: 25,

  
  typedHistory: [], 
  totalTyped: 0,
  correctChars: 0,
  mistakes: 0, 
  corrections: 0, 
  started: false,
  finished: false,
  currentLevelId: null,

  init() {
    this.bindUI();
  },

  bindUI() {
    document.getElementById('modeSel').addEventListener('change', e => {
      this.mode = e.target.value;
      this.updateModeUI();
      this.reset();
    });
    document.getElementById('durationSel').addEventListener('change', e => {
      this.duration = parseInt(e.target.value, 10);
      this.reset();
    });
    document.getElementById('diffSel').addEventListener('change', e => {
      this.difficulty = e.target.value;
      this.reset();
    });
    document.getElementById('resetTestBtn').addEventListener('click', () => this.reset());
    document.getElementById('tryAgainBtn').addEventListener('click', () => {
      UI.showPage('test');
      this.reset();
    });
    document.getElementById('practiceWeakBtn').addEventListener('click', () => {
      AdaptiveEngine.startWeakPractice();
    });
    document.getElementById('backToLearnBtn').addEventListener('click', () => {
      UI.showPage('learn');
    });

    document.addEventListener('keydown', e => this.onKeyDown(e));
    document.addEventListener('keyup', e => this.onKeyUp(e));
  },

  updateModeUI() {
    const durSel = document.getElementById('durationSel');
    if (this.mode === 'words') {
      durSel.innerHTML = '<option value="10">10</option><option value="25" selected>25</option><option value="50">50</option><option value="100">100</option>';
    } else {
      durSel.innerHTML = '<option value="15">15s</option><option value="30">30s</option><option value="60" selected>60s</option><option value="120">120s</option><option value="300">300s</option>';
    }
  },

  pickText() {
    if (this.mode === 'quote') {
      const pool = TEXTS[this.lang].hard;
      return pool[Math.floor(Math.random() * pool.length)];
    }
    const pool = TEXTS[this.lang][this.difficulty] || TEXTS[this.lang].medium;
    return pool[Math.floor(Math.random() * pool.length)];
  },

  pickWords(count) {
    const pool = TEXTS[this.lang].easy.concat(TEXTS[this.lang].medium);
    const words = [];
    for (let i = 0; i < count; i++) {
      words.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    return words.join(' ');
  },

  startTest(opts = {}) {
    this.mode = opts.mode || 'time';
    this.lang = opts.lang || state.lang;
    this.difficulty = opts.difficulty || 'medium';
    this.currentLevelId = opts.levelId || null;

    if (opts.text) {
      this.text = opts.text;
      this.duration = opts.duration || parseInt(document.getElementById('durationSel').value, 10) || 60;
    } else if (this.mode === 'words') {
      this.wordCount = opts.wordCount || parseInt(document.getElementById('durationSel').value, 10) || 25;
      this.text = this.pickWords(this.wordCount);
    } else {
      this.duration = opts.duration || parseInt(document.getElementById('durationSel').value, 10) || 60;
      this.text = this.pickText();
    }

    this.reset(true);
    this.updateChips();
    Keyboard.render(this.lang);
    UI.showPage('test');
    document.getElementById('textArea').focus();
  },

  reset(keepText = false) {
    Timer.stop();
    this.index = 0;
    this.typedHistory = [];
    this.totalTyped = 0;
    this.correctChars = 0;
    this.mistakes = 0;
    this.corrections = 0;
    this.started = false;
    this.finished = false;
    ErrorTracker.reset();

    if (!keepText) {
      if (this.mode === 'words') {
        this.text = this.pickWords(this.wordCount);
      } else if (this.mode !== 'custom') {
        this.text = this.pickText();
      }
    }

    UI.renderText(this.text, this.index, this.typedHistory);
    UI.updateLiveStats(0, 0, 0, 100, 0, 0);
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('chipTimeVal').textContent = (this.mode === 'words' || this.mode === 'custom') ? `${this.text.length} chars` : `${this.duration}s`;
    document.getElementById('liveTime').textContent = '0s';
    Keyboard.clearHighlight();
    UI.updateFingerInfo(null);
  },

  startTimer() {
    this.started = true;
    const untimed = this.mode === 'words' || this.mode === 'custom';
    const duration = untimed ? Math.max(600, Math.ceil(this.text.length / 8)) : this.duration;
    Timer.start(duration,
      (elapsed, remaining) => {
        document.getElementById('chipTimeVal').textContent = untimed
          ? `${Math.floor(elapsed)}s`
          : `${Math.ceil(remaining)}s`;
        document.getElementById('liveTime').textContent = `${Math.floor(elapsed)}s`;
        this.updateLive(elapsed);
      },
      () => this.finish()
    );
  },

  updateLive(elapsed) {
    const rawWpm = Metrics.rawWpm(this.totalTyped, elapsed);
    const finalErrors = this.countFinalErrors();
    const adjWpm = Metrics.adjustedWpm(this.totalTyped, finalErrors, elapsed);
    const cpm = Metrics.cpm(this.correctChars, elapsed);
    const acc = Metrics.accuracy(this.correctChars, this.totalTyped);
    UI.updateLiveStats(rawWpm, adjWpm, cpm, acc, this.mistakes, elapsed);
  },

  countFinalErrors() {
    let errors = 0;
    for (let i = 0; i < this.typedHistory.length; i++) {
      if (!this.typedHistory[i].correct) errors++;
    }
    return errors;
  },

  onKeyDown(e) {
    const page = document.querySelector('.page.active');
    if (!page || page.id !== 'page-test') return;
    if (this.finished) { e.preventDefault(); return; }
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    const key = e.key;

   
    if (key === 'Backspace') {
      e.preventDefault();
      if (this.index > 0) {
        this.index--;
        const last = this.typedHistory.pop();
        if (last) {
          this.corrections++;
          if (last.correct) this.correctChars--;
         
        }
        UI.renderText(this.text, this.index, this.typedHistory);
        Keyboard.highlightKey(this.text[this.index]);
        UI.updateFingerInfo(this.text[this.index]);
      }
      return;
    }

   
    if (key.length > 1 && key !== ' ') return;

    e.preventDefault();
    if (this.index >= this.text.length) return;

    if (!this.started) this.startTimer();

    const expected = this.text[this.index];
    const typed = key;
    const finger = Keyboard.getFingerForChar(typed, this.lang);
    const correct = typed === expected;

    this.typedHistory.push({ expected, actual: typed, correct, finger, timestamp: performance.now() });
    this.totalTyped++;
    ErrorTracker.record(expected, typed, finger, performance.now());

    if (correct) {
      this.correctChars++;
    } else {
      this.mistakes++;
    }
    this.index++;

    UI.renderText(this.text, this.index, this.typedHistory);
    this.updateLive(Timer.getElapsed());

    const progress = (this.index / this.text.length) * 100;
    const bar = document.getElementById('progressBar');
    bar.style.width = progress + '%';
    bar.parentElement.setAttribute('aria-valuenow', Math.round(progress));

    Keyboard.highlightKey(this.text[this.index]);
    Keyboard.pressVisual(typed);
    UI.updateFingerInfo(this.text[this.index]);

    if (state.settings.sound === 'on') Audio.playClick();

    
    if (this.index >= this.text.length) {
      this.finish();
    }
  },

  onKeyUp(e) {
    const page = document.querySelector('.page.active');
    if (!page || page.id !== 'page-test') return;
    Keyboard.releaseVisual(e.key);
  },

  finish() {
    if (this.finished) return;
    this.finished = true;
    Timer.stop();

    const elapsed = Timer.getElapsed();
    const finalErrors = this.countFinalErrors();
    const rawWpm = Metrics.rawWpm(this.totalTyped, elapsed);
    const adjWpm = Metrics.adjustedWpm(this.totalTyped, finalErrors, elapsed);
    const cpm = Metrics.cpm(this.correctChars, elapsed);
    const acc = Metrics.accuracy(this.correctChars, this.totalTyped);

    UI.showToast(t('finished'), 'success');

    const record = {
      date: new Date().toISOString(),
      lang: this.lang,
      mode: this.mode,
      difficulty: this.difficulty,
      duration: (this.mode === 'words' || this.mode === 'custom') ? Math.round(elapsed) : this.duration,
      rawWpm,
      wpm: adjWpm,
      cpm,
      accuracy: acc,
      mistakes: this.mistakes,
      corrections: this.corrections,
      finalErrors,
      correct: this.correctChars,
      total: this.totalTyped,
      elapsed: Math.round(elapsed),
      textLength: this.text.length,
      keyErrors: ErrorTracker.getKeyHeatmap(),
    };

    state.history.unshift(record);
    if (state.history.length > CONSTANTS.MAX_HISTORY) {
      state.history = state.history.slice(0, CONSTANTS.MAX_HISTORY);
    }

    let newBest = false;
    if (adjWpm > state.bestWpm) { state.bestWpm = adjWpm; newBest = true; }
    if (acc > state.bestAcc) state.bestAcc = acc;

    const today = new Date().toDateString();
    if (state.lastPlayDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (state.lastPlayDate === yesterday.toDateString()) {
        state.streak++;
      } else if (state.lastPlayDate !== today) {
        state.streak = 1;
      }
      state.lastPlayDate = today;
      if (state.streak > state.longestStreak) state.longestStreak = state.streak;
      UI.showToast(`${t('streak_up')} ${state.streak}`, 'success');
    }

  
    if (!state.dailyChallengeDone && state.dailyChallengeDate === today) {
      state.dailyChallengeDone = true;
      UI.showToast(t('daily_done'), 'success');
    }

    const heatmap = ErrorTracker.getKeyHeatmap();
    Object.entries(heatmap).forEach(([key, data]) => {
      if (!state.keyErrorStats[key]) state.keyErrorStats[key] = { errors: 0, total: 0 };
      state.keyErrorStats[key].errors += data.errors;
      state.keyErrorStats[key].total += data.total;
    });

    let leveledUp = false;
    if (this.mode === 'level' && this.currentLevelId) {
      const lv = LEVELS.find(l => l.id === this.currentLevelId);
      if (lv && adjWpm >= lv.reqWpm && acc >= lv.reqAcc) {
        if (!state.completedLevels.includes(this.currentLevelId)) {
          state.completedLevels.push(this.currentLevelId);
          UI.showToast(`${t('level_completed')} ${this.currentLevelId}`, 'success');
        }
        leveledUp = true;
      }
      this.currentLevelId = null;
    }
    record.leveledUp = leveledUp;

    const newLevel = Math.min(10, 1 + state.completedLevels.length);
    if (newLevel > state.level) state.level = newLevel;

    const xpEarned = Metrics.calculateXp(elapsed, acc, state.streak);
    state.xp += xpEarned;

    const newAchievements = Achievements.checkAll();

    saveState();

    Results.show(record, newBest, xpEarned, newAchievements);
  },

  updateChips() {
    document.getElementById('chipLangVal').textContent = this.lang === 'ar' ? 'العربية' : 'English';
    const diffMap = { easy: t('diff_easy'), medium: t('diff_medium'), hard: t('diff_hard') };
    document.getElementById('chipDiffVal').textContent = diffMap[this.difficulty];
    const modeMap = { time: 'Time', words: 'Words', quote: 'Quote', level: 'Level', practice: 'Free', daily: 'Daily', adaptive: 'Adaptive', code: 'Code', custom: state.lang === 'ar' ? 'مقال' : 'Article' };
    document.getElementById('chipModeVal').textContent = modeMap[this.mode] || this.mode;
  },
};

const Keyboard = {
  currentLayout: null,
  currentLang: 'ar',

  render(lang) {
    this.currentLang = lang;
    this.currentLayout = lang === 'ar' ? AR_KEYBOARD : EN_KEYBOARD;
    const container = document.getElementById('keyboard');
    container.innerHTML = '';
    this.currentLayout.forEach(row => {
      const rowEl = document.createElement('div');
      rowEl.className = 'kb-row';
      row.forEach(key => {
        const k = document.createElement('div');
        k.className = 'key';
        if (key.space) k.classList.add('space');
        if (key.wide) k.classList.add('wide');
        k.dataset.key = key.k;
        k.dataset.finger = key.f;
        const fc = FINGERS[key.f]?.cssClass;
        if (fc) k.classList.add(fc);
        k.textContent = key.k === ' ' ? 'Space' : key.k;
        if (key.s) {
          const sub = document.createElement('span');
          sub.className = 'sub';
          sub.textContent = key.s;
          k.appendChild(sub);
        }
        const dot = document.createElement('span');
        dot.className = 'finger-dot';
        k.appendChild(dot);
        rowEl.appendChild(k);
      });
      container.appendChild(rowEl);
    });
  },

  highlightKey(char) {
    document.querySelectorAll('.key.active').forEach(k => k.classList.remove('active'));
    if (!char) return;
    const target = char === ' ' ? ' ' : char;
    document.querySelectorAll('.key').forEach(k => {
      if (k.dataset.key === target) k.classList.add('active');
    });
  },

  clearHighlight() {
    document.querySelectorAll('.key.active').forEach(k => k.classList.remove('active'));
  },

  pressVisual(key) {
    const target = key === ' ' ? ' ' : key.toUpperCase();
    document.querySelectorAll('.key').forEach(k => {
      if (k.dataset.key === target || k.dataset.key === key) k.classList.add('pressed');
    });
  },

  releaseVisual(key) {
    const target = key === ' ' ? ' ' : key.toUpperCase();
    document.querySelectorAll('.key').forEach(k => {
      if (k.dataset.key === target || k.dataset.key === key) k.classList.remove('pressed');
    });
  },

  getFingerForChar(char, lang) {
    const layout = lang === 'ar' ? AR_KEYBOARD : EN_KEYBOARD;
    const target = char === ' ' ? ' ' : char.toUpperCase();
    for (const row of layout) {
      for (const key of row) {
        if (key.k === target || key.k === char) return key.f;
      }
    }
    return null;
  },

  applyHeatmap(heatmap) {
    document.querySelectorAll('.key').forEach(k => {
      k.classList.remove('heatmap-hot', 'heatmap-warm', 'heatmap-cool');
      const keyChar = k.dataset.key;
      if (!keyChar || keyChar === 'Shift' || keyChar === 'Ctrl' || keyChar === 'Alt') return;
      const data = heatmap[keyChar] || heatmap[keyChar.toLowerCase()] || heatmap[keyChar.toUpperCase()];
      if (!data) return;
      const errorRate = data.errors / Math.max(1, data.total);
      if (data.errors >= 5 || errorRate > 0.5) k.classList.add('heatmap-hot');
      else if (data.errors >= 2 || errorRate > 0.2) k.classList.add('heatmap-warm');
      else if (data.total >= 3 && errorRate < 0.1) k.classList.add('heatmap-cool');
    });
  },
};

const AdaptiveEngine = {
  analyzeWeaknesses() {
    const stats = state.keyErrorStats;
    const entries = Object.entries(stats).filter(([, v]) => v.total >= 3);
    if (entries.length === 0) return null;

    const sorted = entries
      .map(([key, v]) => ({ key, errors: v.errors, total: v.total, rate: v.errors / v.total }))
      .sort((a, b) => b.rate - a.rate)
      .slice(0, 10);

    const fingerErrors = {};
    sorted.forEach(({ key, errors }) => {
      const f = Keyboard.getFingerForChar(key, 'en');
      if (f != null) fingerErrors[f] = (fingerErrors[f] || 0) + errors;
    });
    const weakFingers = Object.entries(fingerErrors)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([f, c]) => ({ finger: parseInt(f), count: c }));

    return { weakKeys: sorted, weakFingers };
  },

  generateText(focusKeys, lang = 'en') {
    const wordsByLang = {
      en: {
        q: ['quick', 'queen', 'quiet', 'quite'],
        w: ['write', 'wrong', 'world', 'water'],
        p: ['power', 'paper', 'place', 'people'],
        z: ['zone', 'zero', 'zeal', 'zest'],
        x: ['box', 'fox', 'mix', 'next'],
        j: ['jump', 'just', 'joy', 'job'],
        default: ['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all']
      },
      ar: {
        'ض': ['ضوء', 'صبح'],
        'ص': ['صبر', 'صباح'],
        'ث': ['ثقة', 'ثمن'],
        'ق': ['قلب', 'قلم'],
        'default': ['العلم', 'الوقت', 'القلم', 'الصبر']
      }
    };
    const pool = wordsByLang[lang] || wordsByLang.en;
    const words = [];
    for (let i = 0; i < 30; i++) {
      const key = focusKeys[Math.floor(Math.random() * focusKeys.length)];
      const list = pool[key] || pool.default;
      words.push(list[Math.floor(Math.random() * list.length)]);
    }
    return words.join(' ');
  },

  startWeakPractice() {
    const analysis = this.analyzeWeaknesses();
    if (!analysis || analysis.weakKeys.length === 0) {
      UI.showToast(t('no_data'), 'error');
      return;
    }
    const focusKeys = analysis.weakKeys.slice(0, 5).map(k => k.key.toLowerCase());
    const text = this.generateText(focusKeys, state.lang);
    TypingEngine.startTest({ text, mode: 'adaptive', lang: state.lang, duration: 60, difficulty: 'medium' });
  },

  renderAnalysis() {
    const container = document.getElementById('adaptiveAnalysis');
    const analysis = this.analyzeWeaknesses();
    if (!analysis) {
      container.innerHTML = `<p class="text-muted">${t('no_data')}</p>`;
      return;
    }
    let html = '<h4 class="mb-8">أكثر الحروف إشكالية:</h4><div class="key-error-list">';
    analysis.weakKeys.slice(0, 5).forEach(({ key, errors, rate }) => {
      const pct = Math.round(rate * 100);
      html += `<div class="key-error-item">
        <div class="key-box">${UI.escapeHtml(key)}</div>
        <div class="bar"><div style="width:${pct}%"></div></div>
        <div class="count">${errors} (${pct}%)</div>
      </div>`;
    });
    html += '</div>';
    if (analysis.weakFingers.length > 0) {
      html += '<h4 class="mt-16 mb-8">أضعف الأصابع:</h4><div class="key-error-list">';
      analysis.weakFingers.forEach(({ finger, count }) => {
        const info = FINGERS[finger];
        const name = info?.name[state.lang] || `Finger ${finger}`;
        html += `<div class="key-error-item">
          <div class="finger-color" style="background:${info?.color || '#888'}"></div>
          <div style="flex:1">${name}</div>
          <div class="count">${count} أخطاء</div>
        </div>`;
      });
      html += '</div>';
    }
    container.innerHTML = html;
  },
};

const Achievements = {
  checkAll() {
    const newlyUnlocked = [];
    ACHIEVEMENTS.forEach(ach => {
      if (!state.unlockedAchievements.includes(ach.id) && ach.check(state)) {
        state.unlockedAchievements.push(ach.id);
        state.xp += ach.xp;
        newlyUnlocked.push(ach);
      }
    });
    return newlyUnlocked;
  },

  render() {
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = '';
    ACHIEVEMENTS.forEach(ach => {
      const unlocked = state.unlockedAchievements.includes(ach.id);
      const card = document.createElement('div');
      card.className = 'achievement ' + (unlocked ? 'unlocked' : 'locked');
      card.innerHTML = `
        <div class="xp">+${ach.xp} XP</div>
        <div class="icon">${ach.icon}</div>
        <h4>${state.lang === 'ar' ? ach.name_ar : ach.name_en}</h4>
        <p>${state.lang === 'ar' ? ach.desc_ar : ach.desc_en}</p>
      `;
      grid.appendChild(card);
    });

    document.getElementById('achLevel').textContent = state.level;
    document.getElementById('achXp').textContent = state.xp;
    const nextLevelXp = state.level * 500;
    document.getElementById('achXpNext').textContent = nextLevelXp;
    const progress = Math.min(100, (state.xp / nextLevelXp) * 100);
    document.getElementById('achXpBar').style.width = progress + '%';
    document.getElementById('achUnlocked').textContent = state.unlockedAchievements.length;
    document.getElementById('achTotal').textContent = ACHIEVEMENTS.length;
  },
};

const Results = {
  lastRecord: null,

  show(record, newBest, xpEarned, newAchievements) {
    this.lastRecord = record;

    document.getElementById('resRawWpm').textContent = record.rawWpm;
    document.getElementById('resWpm').textContent = record.wpm;
    document.getElementById('resCpm').textContent = record.cpm;
    document.getElementById('resAcc').textContent = record.accuracy + '%';
    document.getElementById('resErr').textContent = `${record.mistakes} ${t('mistakes' in I18N.ar ? 'mistakes' : 'errors') || 'mistakes'}`;
    document.getElementById('resTime').textContent = record.elapsed + 's';
    document.getElementById('resDate').textContent = new Date(record.date).toLocaleString(state.lang === 'ar' ? 'ar-EG' : 'en-US');
    document.getElementById('resCorrect').textContent = record.correct;
    document.getElementById('resMistakes').textContent = record.mistakes;
    document.getElementById('resCorrections').textContent = record.corrections;
    document.getElementById('resFinalErrors').textContent = record.finalErrors;
    document.getElementById('resXp').textContent = '+' + xpEarned;

    const prev = state.history[1];
    const delta = prev ? (record.wpm - prev.wpm) : 0;
    const deltaEl = document.getElementById('resWpmDelta');
    if (prev) {
      deltaEl.textContent = (delta >= 0 ? '+' : '') + delta + ' WPM';
      deltaEl.style.color = delta >= 0 ? 'var(--neon)' : 'var(--error)';
    } else {
      deltaEl.textContent = '';
    }
    if (newBest) {
      deltaEl.textContent = (deltaEl.textContent ? deltaEl.textContent + ' — ' : '') + t('new_best');
    }

    this.renderErrorAnalysis();

    Keyboard.applyHeatmap(record.keyErrors || {});
    const heatmapContainer = document.getElementById('heatmapKeyboard');
    heatmapContainer.innerHTML = document.getElementById('keyboard').innerHTML;
    Keyboard.applyHeatmapTo(heatmapContainer, record.keyErrors || {});

    this.renderFeedback(record);

    if (newAchievements.length > 0) {
      setTimeout(() => {
        const names = newAchievements.map(a => state.lang === 'ar' ? a.name_ar : a.name_en).join('، ');
        UI.showToast(`🏆 ${names}`, 'success');
      }, 500);
    }

    UI.showPage('results');

    const backBtn = document.getElementById('backToLearnBtn');
    if (record.mode === 'level') {
      backBtn.classList.remove('hidden');
      LevelSystem.render();
    } else {
      backBtn.classList.add('hidden');
    }
  },

  renderErrorAnalysis() {
    const problemKeys = document.getElementById('problemKeys');
    const weakFingers = document.getElementById('weakFingers');
    problemKeys.innerHTML = '';
    weakFingers.innerHTML = '';

    const keys = ErrorTracker.getProblemKeys();
    if (keys.length === 0) {
      problemKeys.innerHTML = '<p class="text-muted">✨ لا توجد أخطاء!</p>';
    } else {
      const max = keys[0].count;
      keys.forEach(({ key, count }) => {
        const pct = Math.round((count / max) * 100);
        const item = document.createElement('div');
        item.className = 'key-error-item';
        item.innerHTML = `
          <div class="key-box">${UI.escapeHtml(key)}</div>
          <div class="bar"><div style="width:${pct}%"></div></div>
          <div class="count">${count}</div>
        `;
        problemKeys.appendChild(item);
      });
    }

    const fingers = ErrorTracker.getWeakFingers();
    if (fingers.length === 0) {
      weakFingers.innerHTML = '<p class="text-muted">✨ كل الأصابع قوية!</p>';
    } else {
      const max = fingers[0].count;
      fingers.forEach(({ finger, count }) => {
        const info = FINGERS[finger];
        const name = info?.name[state.lang] || `F${finger}`;
        const pct = Math.round((count / max) * 100);
        const item = document.createElement('div');
        item.className = 'key-error-item';
        item.innerHTML = `
          <div class="finger-color" style="background:${info?.color || '#888'}"></div>
          <div style="flex:1">${name}</div>
          <div class="bar"><div style="width:${pct}%"></div></div>
          <div class="count">${count}</div>
        `;
        weakFingers.appendChild(item);
      });
    }
  },

  renderFeedback(record) {
    const strengths = document.getElementById('strengthsList');
    const weaknesses = document.getElementById('weaknessesList');
    const suggestions = document.getElementById('suggestionsList');
    strengths.innerHTML = '';
    weaknesses.innerHTML = '';
    suggestions.innerHTML = '';

    const ar = state.lang === 'ar';

    if (record.accuracy >= 97) UI.addLi(strengths, ar ? 'دقة استثنائية!' : 'Exceptional accuracy!');
    else if (record.accuracy >= 90) UI.addLi(strengths, ar ? 'دقة ممتازة' : 'Excellent accuracy');
    else if (record.accuracy >= 80) UI.addLi(strengths, ar ? 'دقة جيدة' : 'Good accuracy');
    else UI.addLi(weaknesses, ar ? 'الدقة تحتاج تحسين — ركّز على الصحة قبل السرعة' : 'Accuracy needs work — focus on correctness');

    if (record.wpm >= 60) UI.addLi(strengths, ar ? 'سرعة ممتازة' : 'Excellent speed');
    else if (record.wpm >= 35) UI.addLi(strengths, ar ? 'سرعة جيدة' : 'Good speed');
    else UI.addLi(weaknesses, ar ? 'يمكنك زيادة السرعة بالممارسة' : 'Increase speed with practice');

    if (record.mistakes <= 3) UI.addLi(strengths, ar ? 'أخطاء قليلة جداً' : 'Very few mistakes');
    else if (record.mistakes > 15) UI.addLi(weaknesses, ar ? 'عدد الأخطاء مرتفع' : 'High mistake count');

    if (record.corrections < record.mistakes * 0.3) {
      UI.addLi(weaknesses, ar ? 'استخدم Backspace لتصحيح الأخطاء فوراً' : 'Use Backspace to correct mistakes immediately');
    }

    if (record.accuracy < 90) suggestions.appendChild(UI.liItem(ar ? 'خصّص 5 دقائق يومياً لتمارين الدقة.' : 'Spend 5 minutes daily on accuracy drills.'));
    if (record.wpm < 30) suggestions.appendChild(UI.liItem(ar ? 'ركّز على الكتابة الصحيحة أولاً.' : 'Focus on correct typing first.'));
    if (record.mistakes > 15) suggestions.appendChild(UI.liItem(ar ? 'تجنّب النظر إلى الكيبورد.' : 'Avoid looking at the keyboard.'));
    if (record.wpm >= 40 && record.accuracy >= 95) suggestions.appendChild(UI.liItem(ar ? 'جرّب نصوصاً أصعب.' : 'Try harder texts.'));
    if (suggestions.children.length === 0) suggestions.appendChild(UI.liItem(ar ? 'أداء رائع!' : 'Great performance!'));
  },
};

const Statistics = {
  renderOverview() {
    const container = document.getElementById('statsOverview');
    const h = state.history;
    if (h.length === 0) {
      container.innerHTML = `<div class="empty-state"><h4>${t('no_history')}</h4></div>`;
      return;
    }
    const avgWpm = Math.round(h.reduce((s, x) => s + x.wpm, 0) / h.length);
    const avgAcc = Math.round(h.reduce((s, x) => s + x.accuracy, 0) / h.length);
    const totalTime = h.reduce((s, x) => s + x.elapsed, 0);
    const totalChars = h.reduce((s, x) => s + x.total, 0);
    const totalErrors = h.reduce((s, x) => s + x.mistakes, 0);

    const items = [
      { label: 'Best WPM', value: state.bestWpm },
      { label: 'Avg WPM', value: avgWpm },
      { label: 'Best Acc', value: state.bestAcc + '%' },
      { label: 'Avg Acc', value: avgAcc + '%' },
      { label: 'Tests', value: h.length },
      { label: 'Time', value: Math.round(totalTime / 60) + 'm' },
      { label: 'Chars', value: totalChars },
      { label: 'Errors', value: totalErrors },
      { label: 'Streak', value: state.streak },
      { label: 'Longest', value: state.longestStreak },
    ];
    container.innerHTML = items.map(i => `
      <div class="stat-box">
        <div class="label">${i.label}</div>
        <div class="value">${i.value}</div>
      </div>
    `).join('');
  },

  renderCharts() {
    const h = state.history.slice(0, 30).reverse();
    if (h.length < 2) {
      ['chartWpm', 'chartAcc', 'chartLang'].forEach(id => {
        document.getElementById(id).innerHTML = `<text x="300" y="100" text-anchor="middle" fill="#8b8ba7" font-size="14">${t('no_data')}</text>`;
      });
      return;
    }
    this.drawLineChart('chartWpm', h.map(x => x.wpm), 'var(--neon)', 'WPM');
    this.drawLineChart('chartAcc', h.map(x => x.accuracy), 'var(--neon-3)', '%', 0, 100);

    const arTests = h.filter(x => x.lang === 'ar');
    const enTests = h.filter(x => x.lang === 'en');
    const arAvg = arTests.length ? Math.round(arTests.reduce((s, x) => s + x.wpm, 0) / arTests.length) : 0;
    const enAvg = enTests.length ? Math.round(enTests.reduce((s, x) => s + x.wpm, 0) / enTests.length) : 0;
    this.drawBarChart('chartLang', [
      { label: 'AR', value: arAvg, color: 'var(--neon)' },
      { label: 'EN', value: enAvg, color: 'var(--neon-2)' },
    ]);
  },

  drawLineChart(id, data, color, label, min = null, max = null) {
    const svg = document.getElementById(id);
    const W = 600, H = 200, P = 30;
    const minV = min ?? Math.min(...data);
    const maxV = max ?? Math.max(...data);
    const range = maxV - minV || 1;
    const step = (W - P * 2) / Math.max(1, data.length - 1);

    let path = '';
    let area = `M ${P} ${H - P} `;
    data.forEach((v, i) => {
      const x = P + i * step;
      const y = H - P - ((v - minV) / range) * (H - P * 2);
      path += (i === 0 ? 'M' : 'L') + ` ${x} ${y} `;
      area += `L ${x} ${y} `;
    });
    area += `L ${P + (data.length - 1) * step} ${H - P} Z`;

    svg.innerHTML = `
      <defs>
        <linearGradient id="grad-${id}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path d="${area}" fill="url(#grad-${id})"/>
      <path d="${path}" stroke="${color}" stroke-width="2" fill="none"/>
      ${data.map((v, i) => {
        const x = P + i * step;
        const y = H - P - ((v - minV) / range) * (H - P * 2);
        return `<circle cx="${x}" cy="${y}" r="3" fill="${color}"/>`;
      }).join('')}
      <text x="${P}" y="${P - 10}" fill="#8b8ba7" font-size="11">${maxV} ${label}</text>
      <text x="${P}" y="${H - 5}" fill="#8b8ba7" font-size="11">${minV} ${label}</text>
    `;
  },

  drawBarChart(id, data) {
    const svg = document.getElementById(id);
    const W = 600, H = 200, P = 30;
    const maxV = Math.max(...data.map(d => d.value), 1);
    const barW = (W - P * 2) / data.length * 0.6;
    const gap = (W - P * 2) / data.length;

    svg.innerHTML = data.map((d, i) => {
      const x = P + i * gap + (gap - barW) / 2;
      const h = (d.value / maxV) * (H - P * 2);
      const y = H - P - h;
      return `
        <rect x="${x}" y="${y}" width="${barW}" height="${h}" fill="${d.color}" rx="4"/>
        <text x="${x + barW / 2}" y="${y - 5}" text-anchor="middle" fill="${d.color}" font-size="14" font-weight="700">${d.value}</text>
        <text x="${x + barW / 2}" y="${H - 10}" text-anchor="middle" fill="#8b8ba7" font-size="12">${d.label}</text>
      `;
    }).join('');
  },
};

const History = {
  render() {
    const list = document.getElementById('historyList');
    list.innerHTML = '';
    if (state.history.length === 0) {
      list.innerHTML = `<div class="card"><div class="empty-state"><h4>${t('no_history')}</h4></div></div>`;
      return;
    }
    state.history.forEach((h, idx) => {
      const item = document.createElement('div');
      item.className = 'history-item';
      item.tabIndex = 0;
      item.setAttribute('role', 'button');
      const d = new Date(h.date);
      const dateStr = d.toLocaleString(state.lang === 'ar' ? 'ar-EG' : 'en-US', { dateStyle: 'short', timeStyle: 'short' });
      item.innerHTML = `
        <div>
          <div class="mono" style="font-size:13px">${h.lang === 'ar' ? 'العربية' : 'English'} · ${h.mode || 'test'} · ${h.difficulty || ''}</div>
          <div class="date">${dateStr}</div>
        </div>
        <div class="val text-neon">${h.wpm} <small class="text-muted">WPM</small></div>
        <div class="val">${h.rawWpm || 0} <small class="text-muted">Raw</small></div>
        <div class="val">${h.accuracy}%</div>
        <div class="val" style="color:var(--error)">${h.mistakes}</div>
        <div class="val" style="color:var(--warn)">${h.corrections || 0}</div>
      `;
      item.addEventListener('click', () => this.showDetail(idx));
      item.addEventListener('keypress', e => { if (e.key === 'Enter') this.showDetail(idx); });
      list.appendChild(item);
    });
  },

  showDetail(idx) {
    const h = state.history[idx];
    if (!h) return;
    UI.showModal(`
      <h3>📜 ${new Date(h.date).toLocaleString(state.lang === 'ar' ? 'ar-EG' : 'en-US')}</h3>
      <p><strong>Lang:</strong> ${h.lang} · <strong>Mode:</strong> ${h.mode} · <strong>Diff:</strong> ${h.difficulty}</p>
      <div class="stats-summary mt-16">
        <div class="stat-box"><div class="label">Raw WPM</div><div class="value">${h.rawWpm || 0}</div></div>
        <div class="stat-box"><div class="label">Adj WPM</div><div class="value">${h.wpm}</div></div>
        <div class="stat-box"><div class="label">CPM</div><div class="value">${h.cpm}</div></div>
        <div class="stat-box"><div class="label">Accuracy</div><div class="value">${h.accuracy}%</div></div>
        <div class="stat-box"><div class="label">Mistakes</div><div class="value" style="color:var(--error)">${h.mistakes}</div></div>
        <div class="stat-box"><div class="label">Corrections</div><div class="value" style="color:var(--warn)">${h.corrections || 0}</div></div>
        <div class="stat-box"><div class="label">Final Errors</div><div class="value" style="color:var(--error)">${h.finalErrors || 0}</div></div>
        <div class="stat-box"><div class="label">Time</div><div class="value">${h.elapsed}s</div></div>
      </div>
      <div class="actions">
        <button class="btn" onclick="UI.closeModal()">إغلاق</button>
      </div>
    `);
  },
};

const LevelSystem = {
  render() {
    const grid = document.getElementById('levelsGrid');
    grid.innerHTML = '';
    LEVELS.forEach(lv => {
      const prevCompleted = lv.id === 1 || state.completedLevels.includes(lv.id - 1);
      const completed = state.completedLevels.includes(lv.id);
      const unlocked = prevCompleted || completed;

      const card = document.createElement('div');
      card.className = 'level-card' + (unlocked ? '' : ' locked');
      card.tabIndex = unlocked ? 0 : -1;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', (state.lang === 'ar' ? lv.title_ar : lv.title_en) + (unlocked ? '' : ' (locked)'));

      const progress = completed ? 100 : 0;
      card.innerHTML = `
        <div class="num">${String(lv.id).padStart(2, '0')}</div>
        <h4>${state.lang === 'ar' ? lv.title_ar : lv.title_en}</h4>
        <p>${state.lang === 'ar' ? lv.desc_ar : lv.desc_en}</p>
        <span class="tag">${state.lang === 'ar' ? lv.tag_ar : lv.tag_en}</span>
        <div class="mt-8 text-muted" style="font-size:11px">🎯 WPM ≥ ${lv.reqWpm} · Acc ≥ ${lv.reqAcc}%</div>
        ${completed ? `<div class="mt-8 text-neon" style="font-size:12px">✓ ${t('complete')}</div>` : ''}
        ${!unlocked ? `<div class="mt-8 text-muted" style="font-size:12px">🔒 ${t('locked')}</div>` : ''}
        <div class="progress-mini"><div style="width:${progress}%"></div></div>
      `;
      if (unlocked) {
        card.addEventListener('click', () => this.startLevel(lv));
        card.addEventListener('keypress', e => { if (e.key === 'Enter') this.startLevel(lv); });
      }
      grid.appendChild(card);
    });
  },

  startLevel(lv) {
    let text = '';
    const lang = state.lang;
    if (lang === 'en') {
      const pool = LEVEL_TEXTS_EN[lv.key] || LEVEL_TEXTS_EN.words;
      text = pool[Math.floor(Math.random() * pool.length)];
    } else {
      if (lv.key === 'arabic_basic' || lv.key === 'arabic_full') {
        const pool = LEVEL_TEXTS_AR[lv.key];
        text = pool[Math.floor(Math.random() * pool.length)];
      } else {
        const pool = TEXTS.ar.easy;
        text = pool[Math.floor(Math.random() * pool.length)];
      }
    }
    TypingEngine.startTest({ text, lang, duration: 60, difficulty: 'medium', mode: 'level', levelId: lv.id });
  },
};

const DailyChallenge = {
  check() {
    const today = new Date().toDateString();
    if (state.dailyChallengeDate !== today) {
      state.dailyChallengeDate = today;
      state.dailyChallengeDone = false;
      saveState();
      UI.showToast(t('daily_new'), 'success');
    }
  },

  start() {
    const seed = new Date().toDateString();
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) | 0;
    const lang = state.lang;
    const pool = TEXTS[lang].medium.concat(TEXTS[lang].hard);
    const text = pool[Math.abs(hash) % pool.length];
    TypingEngine.startTest({ text, lang, duration: 60, difficulty: 'medium', mode: 'daily' });
  },
};

const CodeMode = {
  start() {
    const lang = document.getElementById('codeLangSel').value;
    const pool = CODE_TEXTS[lang];
    const text = pool[Math.floor(Math.random() * pool.length)];
    TypingEngine.startTest({ text, lang: 'en', duration: 60, difficulty: 'hard', mode: 'code' });
  },
};

const CustomMode = {
  MAX_SAVED: 30,

  detectLang(text) {
    const arabicChars = (text.match(/[\u0600-\u06FF]/g) || []).length;
    const latinChars = (text.match(/[a-zA-Z]/g) || []).length;
    return arabicChars >= latinChars ? 'ar' : 'en';
  },

  getInputText() {
    return document.getElementById('customTextInput').value.trim();
  },

  start(text) {
    const value = (text !== undefined ? text : this.getInputText());
    if (!value) {
      UI.showToast(t('custom_need_text'), 'error');
      return;
    }
    const lang = this.detectLang(value);
    TypingEngine.startTest({ text: value, lang, difficulty: 'medium', mode: 'custom' });
  },

  save() {
    const text = this.getInputText();
    if (!text) {
      UI.showToast(t('custom_need_text'), 'error');
      return;
    }
    const titleInput = document.getElementById('customTitleInput').value.trim();
    const title = titleInput || (state.lang === 'ar' ? 'مقال بدون عنوان' : 'Untitled article');
    state.customTexts.unshift({
      id: `c_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      title,
      text,
      createdAt: new Date().toISOString(),
    });
    if (state.customTexts.length > this.MAX_SAVED) {
      state.customTexts = state.customTexts.slice(0, this.MAX_SAVED);
    }
    saveState();
    document.getElementById('customTitleInput').value = '';
    document.getElementById('customTextInput').value = '';
    document.getElementById('customCharCount').firstChild.textContent = '0 ';
    UI.showToast(t('custom_saved_toast'), 'success');
    this.render();
  },

  delete(id) {
    if (!confirm(t('confirm_delete_article'))) return;
    state.customTexts = state.customTexts.filter(a => a.id !== id);
    saveState();
    UI.showToast(t('custom_deleted_toast'), 'success');
    this.render();
  },

  render() {
    const list = document.getElementById('customList');
    if (!state.customTexts.length) {
      list.innerHTML = `<div class="empty-state"><h4>${t('custom_empty')}</h4></div>`;
      return;
    }
    list.innerHTML = '';
    state.customTexts.forEach(article => {
      const item = document.createElement('div');
      item.className = 'custom-item';
      const date = new Date(article.createdAt);
      item.innerHTML = `
        <div>
          <div class="title">${UI.escapeHtml(article.title)}</div>
          <div class="meta">${article.text.length} ${t('custom_chars')} · ${date.toLocaleDateString()}</div>
        </div>
        <button class="btn primary practice-btn">${t('custom_practice')}</button>
        <button class="btn danger delete-btn">${t('custom_delete')}</button>
      `;
      item.querySelector('.practice-btn').addEventListener('click', () => CustomMode.start(article.text));
      item.querySelector('.delete-btn').addEventListener('click', () => CustomMode.delete(article.id));
      list.appendChild(item);
    });
  },

  init() {
    document.getElementById('customStartBtn').addEventListener('click', () => this.start());
    document.getElementById('customSaveBtn').addEventListener('click', () => this.save());
    document.getElementById('customTextInput').addEventListener('input', e => {
      document.getElementById('customCharCount').firstChild.textContent = `${e.target.value.length} `;
    });
  },
};

const Audio = {
  ctx: null,
  playClick() {
    try {
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = 'square'; o.frequency.value = 800;
      g.gain.value = 0.03;
      o.connect(g); g.connect(this.ctx.destination);
      o.start();
      setTimeout(() => o.stop(), 30);
    } catch (e) {}
  },
};

const UI = {
  showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + id);
    if (target) {
      target.classList.add('active');
      target.classList.add('pop');
      setTimeout(() => target.classList.remove('pop'), 300);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id === 'history' || id === 'stats') {
      History.render();
      Statistics.renderOverview();
      Statistics.renderCharts();
    }
    if (id === 'learn') LevelSystem.render();
    if (id === 'home') this.updateHomeStats();
    if (id === 'achievements') Achievements.render();
    if (id === 'adaptive') AdaptiveEngine.renderAnalysis();
    if (id === 'custom') CustomMode.render();
  },

  updateHomeStats() {
    document.getElementById('statBestWpm').textContent = state.bestWpm;
    document.getElementById('statBestAcc').textContent = state.bestAcc + '%';
    document.getElementById('statStreak').textContent = state.streak;
    document.getElementById('statTotal').textContent = state.history.length;
    document.getElementById('homeLevel').textContent = state.level;
    document.getElementById('homeXp').textContent = state.xp;
    const nextLevelXp = state.level * 500;
    const progress = Math.min(100, (state.xp / nextLevelXp) * 100);
    document.getElementById('homeXpBar').style.width = progress + '%';
  },

  renderText(text, index, history) {
    const area = document.getElementById('textArea');
    area.className = 'text-area ' + (TypingEngine.lang === 'ar' ? 'rtl' : 'ltr');

    const frag = document.createDocumentFragment();
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.className = 'char';
      if (i < index) {
        span.classList.add(history[i]?.correct ? 'correct' : 'wrong');
      } else if (i === index) {
        span.classList.add('current');
      }
      span.textContent = text[i];
      frag.appendChild(span);
    }
    area.innerHTML = '';
    area.appendChild(frag);
  },

  updateLiveStats(rawWpm, adjWpm, cpm, acc, mistakes, elapsed) {
    document.getElementById('liveRawWpm').textContent = rawWpm;
    document.getElementById('liveWpm').textContent = adjWpm;
    document.getElementById('liveCpm').textContent = cpm;
    document.getElementById('liveAcc').textContent = acc + '%';
    document.getElementById('liveErr').textContent = mistakes;
    document.getElementById('liveTime').textContent = Math.floor(elapsed) + 's';
  },

  updateFingerInfo(char) {
    const colorEl = document.getElementById('fingerColor');
    const textEl = document.getElementById('fingerText');
    if (!char) {
      colorEl.style.background = 'transparent';
      textEl.textContent = t('finger_hint');
      return;
    }
    const f = Keyboard.getFingerForChar(char, TypingEngine.lang);
    if (f == null) {
      colorEl.style.background = 'transparent';
      textEl.textContent = `Target: ${char}`;
      return;
    }
    const info = FINGERS[f];
    colorEl.style.background = info.color;
    const fingerName = info.name[state.lang];
    textEl.textContent = `${state.lang === 'ar' ? 'المفتاح' : 'Key'}: ${char} · ${state.lang === 'ar' ? 'الإصبع' : 'Finger'}: ${fingerName}`;
  },

  addLi(ul, text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  },

  liItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  },

  escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },

  showToast(msg, type = '') {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.className = 'toast show ' + type;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
  },

  showModal(html) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop show';
    backdrop.innerHTML = `<div class="modal">${html}</div>`;
    backdrop.addEventListener('click', e => { if (e.target === backdrop) this.closeModal(); });
    document.body.appendChild(backdrop);
  },

  closeModal() {
    const m = document.querySelector('.modal-backdrop');
    if (m) m.remove();
  },

  applyI18N() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = document.documentElement.dir;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      const v = t(k);
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const k = el.getAttribute('data-i18n-placeholder');
      const v = t(k);
      if (v !== undefined) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('#langSwitch button').forEach(b => {
      const active = b.dataset.lang === state.lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active);
    });
    document.getElementById('setLang').value = state.lang;
    this.updateHomeStats();
  },

  applyHeatmapTo(container, heatmap) {
    container.querySelectorAll('.key').forEach(k => {
      k.classList.remove('heatmap-hot', 'heatmap-warm', 'heatmap-cool');
      const keyChar = k.dataset.key;
      if (!keyChar || keyChar === 'Shift' || keyChar === 'Ctrl' || keyChar === 'Alt') return;
      const data = heatmap[keyChar] || heatmap[keyChar.toLowerCase()] || heatmap[keyChar.toUpperCase()];
      if (!data) return;
      const errorRate = data.errors / Math.max(1, data.total);
      if (data.errors >= 5 || errorRate > 0.5) k.classList.add('heatmap-hot');
      else if (data.errors >= 2 || errorRate > 0.2) k.classList.add('heatmap-warm');
      else if (data.total >= 3 && errorRate < 0.1) k.classList.add('heatmap-cool');
    });
  },
};

function t(key) {
  const dict = I18N[state.lang] || I18N.ar;
  return dict[key] ?? key;
}

const Tests = {
  results: [],

  run() {
    this.results = [];
    this.assert('Metrics.rawWpm(100, 60) === 20', Metrics.rawWpm(100, 60) === 20);
    this.assert('Metrics.rawWpm(0, 60) === 0', Metrics.rawWpm(0, 60) === 0);
    this.assert('Metrics.rawWpm(100, 0) === 0', Metrics.rawWpm(100, 0) === 0);
    this.assert('Metrics.cpm(60, 60) === 60', Metrics.cpm(60, 60) === 60);
    this.assert('Metrics.accuracy(90, 100) === 90', Metrics.accuracy(90, 100) === 90);
    this.assert('Metrics.accuracy(0, 0) === 100', Metrics.accuracy(0, 0) === 100);
    this.assert('Metrics.adjustedWpm(100, 10, 60) === 18', Metrics.adjustedWpm(100, 10, 60) === 18);
    this.assert('Metrics.calculateXp(60, 100, 0) > 0', Metrics.calculateXp(60, 100, 0) > 0);

    
    this.assert('State has history array', Array.isArray(state.history));
    this.assert('State has version', state.version === CONSTANTS.STORAGE_VERSION);

   
    ErrorTracker.reset();
    ErrorTracker.record('a', 'a', 4, 0);
    ErrorTracker.record('b', 'x', 5, 1);
    ErrorTracker.record('c', 'c', 3, 2);
    this.assert('ErrorTracker.getProblemKeys length', ErrorTracker.getProblemKeys().length === 1);
    this.assert('ErrorTracker.getProblemKeys[0].key === b', ErrorTracker.getProblemKeys()[0].key === 'b');

    
    const fFinger = Keyboard.getFingerForChar('F', 'en');
    this.assert('F finger === 4 (left index)', fFinger === 4);
    const spaceFinger = Keyboard.getFingerForChar(' ', 'en');
    this.assert('Space finger === 0 (thumb)', spaceFinger === 0);

   
    this.assert('AR_KEYBOARD exists', Array.isArray(AR_KEYBOARD) && AR_KEYBOARD.length > 0);

   
    this.assert('ACHIEVEMENTS is array', Array.isArray(ACHIEVEMENTS) && ACHIEVEMENTS.length > 0);

   
    this.assert('LEVELS count === 13', LEVELS.length === 13);

    this.report();
  },

  assert(name, cond) {
    this.results.push({ name, pass: !!cond });
  },

  report() {
    const pass = this.results.filter(r => r.pass).length;
    const total = this.results.length;
    const failed = this.results.filter(r => !r.pass);
    console.log(`%c✓ Tests: ${pass}/${total} passed`, 'color:#00ffa3;font-weight:bold');
    if (failed.length > 0) {
      console.log('%c✗ Failed:', 'color:#ff4d6d;font-weight:bold');
      failed.forEach(f => console.log('  -', f.name));
    }
    UI.showToast(`Tests: ${pass}/${total} passed ${failed.length === 0 ? '✓' : '✗'}`, failed.length === 0 ? 'success' : 'error');
  },
};

document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-nav');
    if (target === 'test') TypingEngine.startTest({ lang: state.lang });
    UI.showPage(target);
  });
});

document.querySelectorAll('#langSwitch button').forEach(btn => {
  btn.addEventListener('click', () => {
    state.lang = btn.dataset.lang;
    saveState();
    UI.applyI18N();
  });
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const group = tab.parentElement;
    const target = tab.dataset.tab;
    group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const page = tab.closest('.page');
    page.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    const targetEl = page.querySelector('#tab-' + target);
    if (targetEl) targetEl.classList.remove('hidden');
  });
});

document.getElementById('dailyChallengeBtn').addEventListener('click', () => {
  DailyChallenge.check();
  DailyChallenge.start();
});

document.getElementById('startCodeBtn').addEventListener('click', () => CodeMode.start());
document.getElementById('startAdaptiveBtn').addEventListener('click', () => AdaptiveEngine.startWeakPractice());

document.getElementById('clearHistoryBtn').addEventListener('click', () => {
  if (confirm(t('confirm_clear'))) {
    state.history = [];
    saveState();
    History.render();
    Statistics.renderOverview();
    Statistics.renderCharts();
    UI.showToast(state.lang === 'ar' ? 'تم المسح' : 'Cleared', 'success');
  }
});

document.getElementById('setLang').addEventListener('change', e => {
  state.lang = e.target.value;
  saveState();
  UI.applyI18N();
});
document.getElementById('setSound').addEventListener('change', e => {
  state.settings.sound = e.target.value;
  saveState();
});
document.getElementById('setMotion').addEventListener('change', e => {
  state.settings.motion = e.target.value;
  document.body.style.setProperty('--transition', e.target.value === 'off' ? '0ms' : '.25s');
  saveState();
});

document.getElementById('resetAllBtn').addEventListener('click', () => {
  if (confirm(t('confirm_reset'))) {
    localStorage.removeItem(CONSTANTS.STORAGE_KEY);
    state = structuredClone(defaultState);
    saveState();
    UI.applyI18N();
    UI.showPage('home');
    UI.showToast(state.lang === 'ar' ? 'تم' : 'Done', 'success');
  }
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Keyora-backup-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('importBtn').addEventListener('click', () => {
  document.getElementById('importFile').click();
});
document.getElementById('importFile').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data || typeof data !== 'object') throw new Error('Invalid');
      state = { ...structuredClone(defaultState), ...data, version: CONSTANTS.STORAGE_VERSION };
      saveState();
      UI.applyI18N();
      UI.showToast(state.lang === 'ar' ? 'تم الاستيراد' : 'Imported', 'success');
      UI.showPage('home');
    } catch (err) {
      UI.showToast(state.lang === 'ar' ? 'ملف غير صالح' : 'Invalid file', 'error');
    }
  };
  reader.readAsText(file);
});

document.getElementById('runTestsBtn').addEventListener('click', () => Tests.run());


TypingEngine.init();
CustomMode.init();
UI.applyI18N();
DailyChallenge.check();
UI.updateHomeStats();
Keyboard.render(state.lang);

setTimeout(() => {
  UI.showToast(state.lang === 'ar' ? 'مرحباً بك في Keyora!' : 'Welcome to Keyora!', 'success');
}, 400);

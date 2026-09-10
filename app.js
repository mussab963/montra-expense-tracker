const STORAGE_KEY = "montra_app_v5";
const OLD_STORAGE_KEY = "montra_app_v4";
const $ = (id) => document.getElementById(id);
const today = new Date();
const monthKey = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
const currentMonthKey = monthKey(today);

const i18n = {
  ar: {
    overview: "نظرة عامة",
    transactions: "الحركات",
    commitments: "الالتزامات",
    budgets: "الميزانيات",
    goals: "الأهداف",
    analytics: "التحليلات",
    settings: "الإعدادات",
    usageGuide: "دليل الاستخدام",
    localProfile: "بياناتك محفوظة محلياً",
    overviewTitle: "نظرة مالية عامة",
    transactionsTitle: "الحركات المالية",
    commitmentsTitle: "الالتزامات الشهرية",
    budgetsTitle: "الميزانيات",
    goalsTitle: "أهداف الادخار",
    analyticsTitle: "التحليلات",
    addTransaction: "إضافة حركة",
    welcomeBack: "أهلاً بعودتك",
    hello: "مرحباً",
    welcomeText: "خلينا نعرف وين عم تروح مصاريك بدون تعقيد.",
    manageIncome: "الدخل المنتظم",
    startYourWay: "ابدأ بسرعة",
    yourFirstSteps: "خطواتك الأولى",
    starterTitle: "خلّي Montra يفهم نمطك المالي.",
    starterText:
      "ثلاث خطوات بسيطة تكفي حتى تبدأ التحليلات والنصائح تصير مفيدة إلك.",
    guideIncomeShort: "أضف دخلك",
    guideExpenseShort: "سجّل أول مصروف",
    openGuideShort: "افتح الدليل",
    addFirstExpense: "سجّل أول مصروف",
    addIncomeOptional: "أضف دخلك",
    maybeLater: "لاحقاً",
    exchangeRate: "سعر الصرف",
    sypShort: "ل.س",
    save: "حفظ",
    fxHint: "يتم تحديث سعر الدولار تلقائياً من LiraScope.",
    fxSaved: "تم تحديث سعر الصرف",
    fxMissing: "غير متاح",
    fxReady: "مباشر",
    fxUpdating: "جارٍ التحديث",
    fxCached: "آخر سعر محفوظ",
    fxSourceMarket: "سعر السوق",
    fxSourceOfficial: "سعر المصرف المركزي",
    fxSourceFallback: "سعر مرجعي",
    fxUpdated: "آخر تحديث",
    equivalentAmount: "المعادِل",
    equivalentNow: "يعادل الآن",
    refresh: "تحديث",
    regularIncome: "الدخل المنتظم",
    edit: "تعديل",
    noIncome: "لم تحدد دخلك بعد",
    monthlyEquivalent: "المعادل الشهري",
    monthly: "شهري",
    weekly: "أسبوعي",
    everyWeek: "كل أسبوع",
    everyMonth: "كل شهر",
    availableBalance: "المتبقي من دخلك",
    live: "مباشر",
    incomeMinusExpenses: "الدخل المتوقع بعد خصم المصاريف",
    expectedIncome: "الدخل الشهري المتوقع",
    regularPlusExtra: "منتظم + دخل إضافي",
    spentThisMonth: "مصروف هذا الشهر",
    spentThisWeek: "هذا الأسبوع",
    safeDailySpend: "صرف يومي آمن",
    untilMonthEnd: "حتى نهاية الشهر",
    days: "يوم",
    quickAdd: "إضافة سريعة",
    repeatExpenses: "كرر مصروف متكرر بضغطة",
    cashFlow: "التدفق المالي",
    monthActivity: "حركة هذا الشهر",
    income: "دخل",
    expenses: "مصاريف",
    monthForecast: "توقع نهاية الشهر",
    ifYouContinue: "إذا كملت بنفس المعدل",
    forecastGood: "بهالمعدل وضعك مريح مقارنة بدخلك المتوقع.",
    forecastHigh: "بهالمعدل ممكن مصروفك يتجاوز دخلك المتوقع.",
    forecastNoIncome: "أضف دخلك حتى نقارن التوقع بقدرتك الفعلية.",
    recentActivity: "آخر النشاطات",
    latestTransactions: "أحدث الحركات",
    viewAll: "عرض الكل",
    spendingBreakdown: "توزيع المصاريف",
    topCategories: "أعلى التصنيفات",
    spent: "المصروف",
    moneyIdea: "فكرة مالية لليوم",
    source: "المصدر",
    upcomingBills: "التزامات قادمة",
    dontForget: "حتى ما تنسى دفعة",
    manage: "إدارة",
    noUpcoming: "ما عندك التزامات قريبة حالياً.",
    transactionsIntro:
      "سجّل كل عملية شراء أو دخل حتى تشوف الصورة الحقيقية لمصروفك.",
    exportCsv: "تصدير CSV",
    searchTransactions: "ابحث في الحركات...",
    all: "الكل",
    description: "الوصف",
    category: "التصنيف",
    date: "التاريخ",
    type: "النوع",
    originalAmount: "المبلغ الأصلي",
    displayAmount: "المعروض",
    expense: "مصروف",
    amount: "المبلغ",
    currency: "العملة",
    notesOptional: "ملاحظة (اختياري)",
    expensePlaceholder: "مثلاً: قهوة، بنزين، سوبرماركت",
    notesPlaceholder: "أي تفصيل يساعدك تتذكر العملية",
    newMovement: "حركة جديدة",
    saveTransaction: "حفظ الحركة",
    cancel: "إلغاء",
    transactionAdded: "تمت إضافة الحركة",
    transactionDeleted: "تم حذف الحركة",
    noTransactions: "ما في حركات مسجلة بعد.",
    commitmentsIntro:
      "سجّل الإيجار والإنترنت والاشتراكات وأي دفعة بتتكرر كل شهر.",
    addCommitment: "إضافة التزام",
    monthlyCommitments: "التزامات الشهر",
    dueSoon: "مستحق خلال 7 أيام",
    paidThisMonth: "مدفوع هذا الشهر",
    monthlyCommitment: "التزام شهري",
    dueDay: "يوم الاستحقاق من الشهر",
    paid: "مدفوع",
    markPaid: "تسجيل كمدفوع",
    overdue: "متأخر",
    dueIn: "متبقي",
    delete: "حذف",
    noCommitments:
      "ما عندك التزامات شهرية بعد. أضف الأشياء اللي بتدفعها بشكل متكرر.",
    billAdded: "تمت إضافة الالتزام",
    billPaid: "تم تسجيل الالتزام كمصروف مدفوع",
    budgetIntro:
      "الميزانية اختيارية. استخدمها فقط لما يصير عندك حد واضح بدك تلتزم فيه.",
    addBudget: "إضافة ميزانية تصنيف",
    totalBudget: "إجمالي الميزانيات",
    totalSpent: "إجمالي المصروف",
    budgetLeft: "المتبقي",
    categoryBudget: "ميزانية تصنيف",
    setCategoryBudget: "حدد سقفاً لتصنيف واحد",
    limit: "الحد",
    saveBudget: "حفظ الميزانية",
    noBudgets: "ما في ميزانيات للتصنيفات بعد.",
    budgetSaved: "تم حفظ ميزانية التصنيف",
    goalsIntro: "هدف واضح أحسن من ادخار عشوائي. سمّي الهدف وتابع تقدمه.",
    addGoal: "إضافة هدف ادخار",
    goalProgress: "تقدم الأهداف",
    savingWithPurpose: "ادخار لهدف واضح",
    goalHeroText:
      "أضف مبلغاً للهدف كلما ادخرت فعلياً، وMontra يتابع النسبة معك.",
    totalSavedGoals: "المدخر للأهداف",
    savingsGoal: "هدف ادخار",
    createGoal: "إنشاء هدف",
    goalName: "اسم الهدف",
    targetAmount: "المبلغ المستهدف",
    savedSoFar: "المدخر حتى الآن",
    targetDate: "التاريخ المستهدف",
    addSavings: "إضافة ادخار",
    amountToAdd: "المبلغ المراد إضافته",
    addMoney: "إضافة مبلغ",
    remove: "حذف",
    noGoals: "ما عندك أهداف ادخار بعد.",
    goalCreated: "تم إنشاء الهدف",
    savingsAdded: "تمت إضافة مبلغ للهدف",
    noDate: "بدون تاريخ",
    analyticsIntro:
      "مؤشرات بسيطة بتجاوبك: عم تصرف أكتر؟ على شو؟ وهل المعدل عم يتحسن؟",
    avgDailySpend: "متوسط الصرف اليومي",
    currentMonth: "الشهر الحالي",
    largestExpense: "أكبر مصروف",
    topSpendCategory: "أعلى تصنيف بالصرف",
    weekVsLast: "هذا الأسبوع مقابل الماضي",
    dailySpending: "الصرف اليومي",
    spendingTrend: "اتجاه المصروف",
    smartInsights: "ملاحظات ذكية",
    whatNumbersSay: "ماذا تقول أرقامك",
    insightFxTitle: "سعر الصرف ناقص",
    insightFxText:
      "عندك حركات بعملتين. حدد سعر الصرف حتى تصير كل الحسابات دقيقة.",
    insightWeekUpTitle: "مصروفك الأسبوعي ارتفع",
    insightWeekUpText: "قارن مشتريات هذا الأسبوع بالماضي وشوف شو تغيّر.",
    insightWeekDownTitle: "مصروفك الأسبوعي أخف",
    insightWeekDownText: "صرفك خلال آخر 7 أيام أقل من السبعة أيام السابقة.",
    insightTopTitle: "أعلى تصنيف بالصرف",
    insightForecastTitle: "توقع يحتاج انتباه",
    insightForecastText:
      "إذا استمر نفس المعدل، مصروف نهاية الشهر قد يتجاوز دخلك المتوقع.",
    insightHealthyTitle: "عندك هامش جيد",
    insightHealthyText:
      "بعد المصاريف الحالية، ما زال عندك هامش واضح من الدخل المتوقع.",
    insightBillsTitle: "دفعات قريبة",
    insightBillsText:
      "عندك التزامات قريبة، وMontra حاسبها ضمن الصرف اليومي الآمن.",
    insightEmptyTitle: "بلّش سجّل",
    insightEmptyText:
      "بعد عدة مصاريف، رح تبدأ الملاحظات تصير شخصية ومفيدة فعلاً.",
    incomeQuestion: "كيف تقبض دخلك؟",
    incomeAmount: "مبلغ الدخل",
    incomeFrequency: "تكرار الدخل",
    saveChanges: "حفظ التغييرات",
    incomeSaved: "تم حفظ الدخل المنتظم",
    incomeHelpWeekly: "رح نحسب معادل شهري تقريبي باستخدام 52 أسبوع ÷ 12 شهر.",
    incomeHelpMonthly: "هذا الرقم رح يكون أساس المقارنة مع مصروفك خلال الشهر.",
    monthlyBudget: "ميزانية شهرية",
    updateBudget: "حددها فقط إذا بدك",
    budgetLimit: "الحد",
    preferences: "التفضيلات",
    yourName: "اسمك",
    namePlaceholder: "اكتب اسمك",
    theme: "المظهر",
    darkMode: "الوضع الداكن",
    lightMode: "الوضع الفاتح",
    defaultDisplayCurrency: "عملة العرض الأساسية",
    language: "اللغة",
    welcomeToMontra: "أهلاً في Montra",
    welcomeFirstTitle: "خلينا نبدأ باسمك فقط.",
    welcomeFirstText:
      "ما رح نطلب منك ميزانية ولا أرقام ما بتعرفها. سجّل اسمك وادخل، وبعدها Montra بيرشدك خطوة بخطوة.",
    startMontra: "ابدأ مع Montra",
    welcomePrivacy: "اسمك وبياناتك المالية تبقى محفوظة محلياً على جهازك.",
    guideTitle: "أفضل طريقة تبدأ فيها مع Montra",
    guideIntro:
      "ما تحتاج ترتب حياتك المالية قبل استخدام التطبيق. بالعكس: سجّل الواقع كما هو، وMontra يحوله لصورة واضحة تساعدك تاخد قرارات أحسن.",
    guideIncomeTitle: "أدخل دخلك المنتظم",
    guideIncomeText:
      "إذا راتبك أسبوعي أو شهري سجّله بعملته الأصلية. Montra يعرض معادله تلقائياً بالدولار أو الليرة حسب سعر الصرف الحالي.",
    guideIncomeAction: "إضافة الدخل الآن ←",
    guideExpenseTitle: "سجّل المصروف وقت ما يصير",
    guideExpenseText:
      "كل مرة تشتري شي، سجّل المبلغ والتصنيف. ما يهم إذا دفعت USD أو SYP؛ المعادل بالعملة الثانية يظهر تلقائياً.",
    guideExpenseAction: "تسجيل أول مصروف ←",
    guideBillsTitle: "أضف التزاماتك الثابتة",
    guideBillsText:
      "الإيجار، الإنترنت والاشتراكات الشهرية لازم Montra يعرفها حتى يحسب لك الصرف اليومي الآمن بشكل أدق.",
    guideInsightsTitle: "راقب بدل ما تخمّن",
    guideInsightsText:
      "بعد عدة أيام راقب أين يذهب أكبر جزء من دخلك، مقارنة الأسبوع، وتوقع نهاية الشهر. وقتها فقط حط ميزانية للتصنيفات اللي فعلاً تحتاج ضبط.",
    guidePrinciple:
      "أفضل استخدام لـ Montra: سجّل بصدق، راجع أرقامك مرة أو مرتين بالأسبوع، وخلي الميزانية نتيجة لبياناتك — مو رقم عشوائي من أول يوم.",
    closeGuide: "فهمت، خليني أبدأ",
    resetData: "إعادة ضبط كل البيانات",
    resetWarning: "يمسح بيانات Montra المحلية ويبدأ من جديد.",
    reset: "إعادة ضبط",
    settingsSaved: "تم حفظ الإعدادات",
    dataReset: "تمت إعادة ضبط البيانات",
    csvEmpty: "ما في حركات لتصديرها",
    csvDone: "تم تجهيز ملف CSV",
    rateNeeded:
      "تعذر جلب سعر الصرف حالياً. سنعرض المبلغ الأصلي إلى أن يعود الاتصال.",
    friendName: "صديقي",
    displayCurrency: "عملة العرض",
    thisIsEstimate: "تقديري",
    Housing: "السكن",
    Food: "الطعام",
    Transport: "المواصلات",
    Shopping: "التسوق",
    Bills: "الفواتير",
    Health: "الصحة",
    Entertainment: "الترفيه",
    Education: "التعليم",
    Other: "أخرى",
    Salary: "راتب",
    Freelance: "عمل حر",
    Business: "أعمال",
    Investment: "استثمار",
  },
  en: {
    overview: "Overview",
    transactions: "Transactions",
    commitments: "Commitments",
    budgets: "Budgets",
    goals: "Goals",
    analytics: "Analytics",
    settings: "Settings",
    usageGuide: "Usage guide",
    localProfile: "Stored locally in your browser",
    overviewTitle: "Financial overview",
    transactionsTitle: "Transactions",
    commitmentsTitle: "Monthly commitments",
    budgetsTitle: "Budgets",
    goalsTitle: "Savings goals",
    analyticsTitle: "Analytics",
    addTransaction: "Add transaction",
    welcomeBack: "WELCOME BACK",
    hello: "Hello",
    welcomeText:
      "See where your money is going without making finance complicated.",
    manageIncome: "Regular income",
    startYourWay: "START FAST",
    yourFirstSteps: "YOUR FIRST STEPS",
    starterTitle: "Help Montra learn your money pattern.",
    starterText:
      "Three simple steps are enough to make your insights genuinely useful.",
    guideIncomeShort: "Add income",
    guideExpenseShort: "Record first expense",
    openGuideShort: "Open guide",
    addFirstExpense: "Record first expense",
    addIncomeOptional: "Add income",
    maybeLater: "Later",
    exchangeRate: "Exchange rate",
    sypShort: "SYP",
    save: "Save",
    fxHint: "The USD rate updates automatically from LiraScope.",
    fxSaved: "Exchange rate updated",
    fxMissing: "Unavailable",
    fxReady: "Live",
    fxUpdating: "Updating",
    fxCached: "Last saved rate",
    fxSourceMarket: "Market rate",
    fxSourceOfficial: "Central Bank rate",
    fxSourceFallback: "Reference rate",
    fxUpdated: "Last updated",
    equivalentAmount: "Equivalent",
    equivalentNow: "Equivalent now",
    refresh: "Refresh",
    regularIncome: "Regular income",
    edit: "Edit",
    noIncome: "No regular income set yet",
    monthlyEquivalent: "Monthly equivalent",
    monthly: "Monthly",
    weekly: "Weekly",
    everyWeek: "Every week",
    everyMonth: "Every month",
    availableBalance: "Income remaining",
    live: "Live",
    incomeMinusExpenses: "Expected income minus recorded expenses",
    expectedIncome: "Expected monthly income",
    regularPlusExtra: "Regular + extra income",
    spentThisMonth: "Spent this month",
    spentThisWeek: "This week",
    safeDailySpend: "Safe daily spend",
    untilMonthEnd: "Until month end",
    days: "days",
    quickAdd: "Quick add",
    repeatExpenses: "Repeat a frequent expense in one click",
    cashFlow: "Cash flow",
    monthActivity: "This month activity",
    income: "Income",
    expenses: "Expenses",
    monthForecast: "Month-end forecast",
    ifYouContinue: "If you keep this pace",
    forecastGood:
      "At this pace, spending is comfortable relative to expected income.",
    forecastHigh: "At this pace, spending may exceed expected income.",
    forecastNoIncome:
      "Add regular income to compare your forecast with your actual capacity.",
    recentActivity: "Recent activity",
    latestTransactions: "Latest transactions",
    viewAll: "View all",
    spendingBreakdown: "Spending breakdown",
    topCategories: "Top categories",
    spent: "Spent",
    moneyIdea: "Money idea of the day",
    source: "Source",
    upcomingBills: "Upcoming commitments",
    dontForget: "So a payment never surprises you",
    manage: "Manage",
    noUpcoming: "No upcoming commitments right now.",
    transactionsIntro:
      "Record every purchase or income item to see your real spending picture.",
    exportCsv: "Export CSV",
    searchTransactions: "Search transactions...",
    all: "All",
    description: "Description",
    category: "Category",
    date: "Date",
    type: "Type",
    originalAmount: "Original amount",
    displayAmount: "Display amount",
    expense: "Expense",
    amount: "Amount",
    currency: "Currency",
    notesOptional: "Note (optional)",
    expensePlaceholder: "e.g. groceries, gas, coffee",
    notesPlaceholder: "Anything that helps you remember this transaction",
    newMovement: "NEW MOVEMENT",
    saveTransaction: "Save transaction",
    cancel: "Cancel",
    transactionAdded: "Transaction added",
    transactionDeleted: "Transaction deleted",
    noTransactions: "No transactions recorded yet.",
    commitmentsIntro:
      "Track rent, internet, subscriptions and any payment that repeats every month.",
    addCommitment: "Add commitment",
    monthlyCommitments: "Monthly commitments",
    dueSoon: "Due within 7 days",
    paidThisMonth: "Paid this month",
    monthlyCommitment: "MONTHLY COMMITMENT",
    dueDay: "Day of month due",
    paid: "Paid",
    markPaid: "Mark as paid",
    overdue: "Overdue",
    dueIn: "Due in",
    delete: "Delete",
    noCommitments: "No monthly commitments yet. Add payments that repeat.",
    billAdded: "Commitment added",
    billPaid: "Commitment recorded as paid expense",
    budgetIntro:
      "Budgets are optional. Use them only when you know a limit you actually want to follow.",
    addBudget: "Add category budget",
    totalBudget: "Total budgets",
    totalSpent: "Total spent",
    budgetLeft: "Remaining",
    categoryBudget: "CATEGORY BUDGET",
    setCategoryBudget: "Set a limit for one category",
    limit: "Limit",
    saveBudget: "Save budget",
    noBudgets: "No category budgets yet.",
    budgetSaved: "Category budget saved",
    goalsIntro: "A named goal is easier to follow than vague saving.",
    addGoal: "Add savings goal",
    goalProgress: "GOAL PROGRESS",
    savingWithPurpose: "Save with a purpose",
    goalHeroText:
      "Add money to a goal when you actually save it and Montra tracks progress.",
    totalSavedGoals: "Saved toward goals",
    savingsGoal: "SAVINGS GOAL",
    createGoal: "Create goal",
    goalName: "Goal name",
    targetAmount: "Target amount",
    savedSoFar: "Saved so far",
    targetDate: "Target date",
    addSavings: "ADD SAVINGS",
    amountToAdd: "Amount to add",
    addMoney: "Add money",
    remove: "Remove",
    noGoals: "No savings goals yet.",
    goalCreated: "Goal created",
    savingsAdded: "Savings added",
    noDate: "No date",
    analyticsIntro:
      "Simple signals that answer: Are you spending more? On what? Is the trend improving?",
    avgDailySpend: "Average daily spend",
    currentMonth: "Current month",
    largestExpense: "Largest expense",
    topSpendCategory: "Top spend category",
    weekVsLast: "This week vs last",
    dailySpending: "Daily spending",
    spendingTrend: "Spending trend",
    smartInsights: "Smart insights",
    whatNumbersSay: "What your numbers say",
    insightFxTitle: "Exchange rate needed",
    insightFxText:
      "You have transactions in both currencies. Set the exchange rate so totals stay accurate.",
    insightWeekUpTitle: "Weekly spending is up",
    insightWeekUpText:
      "Compare this week with the previous seven days and check what changed.",
    insightWeekDownTitle: "Weekly spending is lighter",
    insightWeekDownText:
      "Your last seven days cost less than the seven days before them.",
    insightTopTitle: "Top spending category",
    insightForecastTitle: "Forecast needs attention",
    insightForecastText:
      "At the current pace, month-end spending may exceed expected income.",
    insightHealthyTitle: "Healthy room left",
    insightHealthyText:
      "After recorded expenses, you still have a clear margin from expected income.",
    insightBillsTitle: "Payments coming up",
    insightBillsText:
      "You have upcoming commitments, and Montra includes them in safe daily spending.",
    insightEmptyTitle: "Start recording",
    insightEmptyText:
      "After a few expenses, these insights become personal and genuinely useful.",
    incomeQuestion: "How do you get paid?",
    incomeAmount: "Income amount",
    incomeFrequency: "Income frequency",
    saveChanges: "Save changes",
    incomeSaved: "Regular income saved",
    incomeHelpWeekly: "Monthly equivalent uses 52 weeks ÷ 12 months.",
    incomeHelpMonthly:
      "This becomes the baseline for comparing monthly spending.",
    monthlyBudget: "Monthly budget",
    updateBudget: "Set it only if useful",
    budgetLimit: "Limit",
    preferences: "PREFERENCES",
    yourName: "Your name (optional)",
    defaultDisplayCurrency: "Default display currency",
    language: "Language",
    resetData: "Reset all data",
    resetWarning: "Clears all local Montra data and starts fresh.",
    reset: "Reset",
    settingsSaved: "Settings saved",
    dataReset: "Data reset",
    csvEmpty: "No transactions to export",
    csvDone: "CSV file prepared",
    rateNeeded:
      "The exchange rate is temporarily unavailable. Original amounts stay visible until the connection returns.",
    friendName: "there",
    displayCurrency: "Display currency",
    thisIsEstimate: "estimate",
    Housing: "Housing",
    Food: "Food",
    Transport: "Transport",
    Shopping: "Shopping",
    Bills: "Bills",
    Health: "Health",
    Entertainment: "Entertainment",
    Education: "Education",
    Other: "Other",
    Salary: "Salary",
    Freelance: "Freelance",
    Business: "Business",
    Investment: "Investment",
  },
};

const categoryMeta = {
  Housing: { icon: "⌂", color: "#73f5a7" },
  Food: { icon: "◒", color: "#f4c76f" },
  Transport: { icon: "↗", color: "#76d8ef" },
  Shopping: { icon: "◇", color: "#a993ff" },
  Bills: { icon: "▤", color: "#ff9d73" },
  Health: { icon: "✚", color: "#ff777f" },
  Entertainment: { icon: "☆", color: "#8ea8ff" },
  Education: { icon: "□", color: "#6edbc4" },
  Other: { icon: "•••", color: "#93a09a" },
  Salary: { icon: "↗", color: "#73f5a7" },
  Freelance: { icon: "✦", color: "#76d8ef" },
  Business: { icon: "◆", color: "#a993ff" },
  Investment: { icon: "⌁", color: "#f4c76f" },
};
const expenseCategories = [
  "Housing",
  "Food",
  "Transport",
  "Shopping",
  "Bills",
  "Health",
  "Entertainment",
  "Education",
  "Other",
];
const incomeCategories = [
  "Salary",
  "Freelance",
  "Business",
  "Investment",
  "Other",
];

const wisdom = [
  {
    author: "Ramit Sethi",
    ar: "خلّي الادخار والالتزامات المهمة سهلة أو تلقائية قدر الإمكان، حتى ما تعتمد كل مرة على قوة الإرادة.",
    en: "Make saving and important money responsibilities as automatic as possible, so good decisions do not rely on daily willpower.",
    url: "https://www.iwillteachyoutoberich.com/",
  },
  {
    author: "Morgan Housel",
    ar: "اترك دائماً هامش أمان. الخطة المالية الجيدة لازم تتحمل المفاجآت، مو تكون ناجحة فقط إذا كل شيء مشي مثالي.",
    en: "Always leave room for error. A good money plan should survive surprises, not work only when everything goes perfectly.",
    url: "https://collabfund.com/blog/the-psychology-of-money/",
  },
  {
    author: "Elizabeth Warren & Amelia Warren Tyagi",
    ar: "قاعدة 50/30/20 نقطة بداية مفيدة، وليست قانوناً. عدّل النسب لتناسب دخلك وظروفك الحقيقية.",
    en: "The 50/30/20 framework is a useful starting point, not a law. Adapt the percentages to your real income and circumstances.",
    url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/youth-financial-education/teach/activities/learning-about-budgets/",
  },
];

const defaults = {
  profile: { name: "", language: "ar", currency: "SYP", theme: "dark" },
  exchangeRate: 0,
  exchangeUpdatedAt: null,
  exchangeSource: "",
  exchangeSourceType: "",
  incomePlan: { amount: 0, currency: "USD", frequency: "monthly" },
  transactions: [],
  categoryBudgets: {},
  goals: [],
  bills: [],
  guideDismissed: false,
  guideSeen: false,
};

let state = loadState();
let activeView = "overview";
let transactionFilter = "all";
let searchTerm = "";

function clone(v) {
  return JSON.parse(JSON.stringify(v));
}
function migrateOld(old) {
  const migrated = clone(defaults);
  migrated.profile.name = old?.profile?.name || "";
  migrated.profile.language = old?.profile?.language || "ar";
  migrated.profile.currency = ["USD", "SYP"].includes(old?.profile?.currency)
    ? old.profile.currency
    : "SYP";
  migrated.profile.theme = ["dark", "light"].includes(old?.profile?.theme)
    ? old.profile.theme
    : "dark";
  if (Number(old?.monthlyIncome) > 0)
    migrated.incomePlan = {
      amount: Number(old.monthlyIncome),
      currency: old?.profile?.currency === "USD" ? "USD" : "SYP",
      frequency: "monthly",
    };
  migrated.transactions = (old?.transactions || []).map((x) => ({
    ...x,
    currency: x.currency || (old?.profile?.currency === "USD" ? "USD" : "SYP"),
    note: x.note || "",
  }));
  migrated.categoryBudgets = Object.fromEntries(
    Object.entries(old?.categoryBudgets || {}).map(([k, v]) => [
      k,
      typeof v === "number"
        ? { amount: v, currency: migrated.profile.currency }
        : v,
    ]),
  );
  migrated.goals = (old?.goals || []).map((g) => ({
    ...g,
    currency: g.currency || migrated.profile.currency,
  }));
  migrated.guideDismissed = !!old?.guideDismissed;
  migrated.guideSeen = !!old?.guideSeen;
  return migrated;
}
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return normalizeState(saved);
    const old = JSON.parse(localStorage.getItem(OLD_STORAGE_KEY));
    if (old) {
      const migrated = migrateOld(old);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
  } catch (e) {}
  return clone(defaults);
}
function normalizeState(saved) {
  const s = {
    ...clone(defaults),
    ...saved,
    profile: { ...defaults.profile, ...(saved.profile || {}) },
    incomePlan: { ...defaults.incomePlan, ...(saved.incomePlan || {}) },
  };
  s.transactions = (s.transactions || []).map((x) => ({
    ...x,
    currency: x.currency || s.profile.currency || "SYP",
    note: x.note || "",
  }));
  s.categoryBudgets = s.categoryBudgets || {};
  s.goals = (s.goals || []).map((g) => ({
    ...g,
    currency: g.currency || s.profile.currency || "SYP",
  }));
  s.bills = (s.bills || []).map((b) => ({
    ...b,
    currency: b.currency || s.profile.currency || "SYP",
    paidMonths: Array.isArray(b.paidMonths) ? b.paidMonths : [],
  }));
  return s;
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function t(key) {
  return i18n[state.profile.language]?.[key] || i18n.ar[key] || key;
}
function escapeHTML(v) {
  return String(v ?? "").replace(
    /[&<>'"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        c
      ],
  );
}
function categoryName(cat) {
  return t(cat) || cat;
}

function primaryCurrency() {
  return Number(state.incomePlan?.amount) > 0 &&
    ["USD", "SYP"].includes(state.incomePlan.currency)
    ? state.incomePlan.currency
    : "SYP";
}
function otherCurrency(currency) {
  return currency === "USD" ? "SYP" : "USD";
}
function convert(amount, from, to = primaryCurrency()) {
  const n = Number(amount) || 0;
  if (from === to) return n;
  const rate = Number(state.exchangeRate) || 0;
  if (!rate) return null;
  if (from === "USD" && to === "SYP") return n * rate;
  if (from === "SYP" && to === "USD") return n / rate;
  return null;
}
function formatMoney(value, currency = primaryCurrency(), compact = false) {
  if (value === null || value === undefined || Number.isNaN(Number(value)))
    return "—";
  const n = Number(value) || 0;
  const locale = state.profile.language === "ar" ? "ar-SY" : "en-US";
  if (currency === "SYP") {
    const formatted = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 0,
      notation: compact ? "compact" : "standard",
    }).format(n);
    return state.profile.language === "ar"
      ? `${formatted} ل.س`
      : `SYP ${formatted}`;
  }
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: compact ? 1 : 2,
    notation: compact ? "compact" : "standard",
  }).format(n);
}
function formatOriginal(amount, currency) {
  return formatMoney(amount, currency, false);
}
function equivalentText(amount, currency, compact = false) {
  const target = otherCurrency(currency);
  const converted = convert(amount, currency, target);
  return converted === null
    ? t("rateNeeded")
    : `≈ ${formatMoney(converted, target, compact)}`;
}
function dualMoneyHTML(amount, currency = primaryCurrency(), compact = false) {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount)))
    return '<span class="money-primary">—</span>';
  const main = formatMoney(amount, currency, compact);
  const target = otherCurrency(currency);
  const converted = convert(amount, currency, target);
  const secondary =
    converted === null
      ? ""
      : `<small class="money-equivalent">≈ ${formatMoney(converted, target, compact)}</small>`;
  return `<span class="money-primary">${main}</span>${secondary}`;
}
function setDualMoney(
  id,
  amount,
  currency = primaryCurrency(),
  compact = false,
) {
  const el = $(id);
  if (el) el.innerHTML = dualMoneyHTML(amount, currency, compact);
}
function sumConverted(items, to = primaryCurrency()) {
  let total = 0,
    missing = false;
  items.forEach((item) => {
    const v = convert(item.amount, item.currency || to, to);
    if (v === null) missing = true;
    else total += v;
  });
  return { total, missing, currency: to };
}
function formatDate(date) {
  if (!date) return "—";
  return new Intl.DateTimeFormat(
    state.profile.language === "ar" ? "ar-SY" : "en-US",
    { month: "short", day: "numeric" },
  ).format(new Date(`${date}T12:00:00`));
}
function isoDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function monthTransactions() {
  return state.transactions.filter((x) =>
    String(x.date || "").startsWith(currentMonthKey),
  );
}
function monthExpenses() {
  return monthTransactions().filter((x) => x.type === "expense");
}
function monthExtraIncome() {
  return monthTransactions().filter((x) => x.type === "income");
}
function monthlyRegularIncomeItem() {
  const plan = state.incomePlan;
  if (!Number(plan.amount)) return null;
  return {
    amount: Number(plan.amount) * (plan.frequency === "weekly" ? 52 / 12 : 1),
    currency: plan.currency,
  };
}
function incomeSummary() {
  const items = [...monthExtraIncome()];
  const regular = monthlyRegularIncomeItem();
  if (regular) items.unshift(regular);
  return sumConverted(items);
}
function expenseSummary() {
  return sumConverted(monthExpenses());
}
function categorySpent(cat) {
  return sumConverted(monthExpenses().filter((x) => x.category === cat));
}
function daysInCurrentMonth() {
  return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
}
function daysLeft() {
  return Math.max(daysInCurrentMonth() - today.getDate() + 1, 1);
}
function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function spendBetween(start, end) {
  return sumConverted(
    state.transactions.filter(
      (x) =>
        x.type === "expense" &&
        new Date(`${x.date}T12:00:00`) >= start &&
        new Date(`${x.date}T12:00:00`) <= end,
    ),
  );
}
function currentWeekSpend() {
  const end = new Date(today);
  const start = new Date(today);
  start.setDate(start.getDate() - 6);
  return spendBetween(
    startOfDay(start),
    new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59),
  );
}
function previousWeekSpend() {
  const end = new Date(today);
  end.setDate(end.getDate() - 7);
  const start = new Date(today);
  start.setDate(start.getDate() - 13);
  return spendBetween(
    startOfDay(start),
    new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59),
  );
}

function billDueDate(bill) {
  const last = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    Math.min(Number(bill.day) || 1, last),
  );
}
function billPaidThisMonth(bill) {
  return (bill.paidMonths || []).includes(currentMonthKey);
}
function unpaidBills() {
  return state.bills.filter((b) => !billPaidThisMonth(b));
}
function unpaidBillsSummary() {
  return sumConverted(unpaidBills());
}
function billDaysUntil(bill) {
  return Math.ceil(
    (startOfDay(billDueDate(bill)) - startOfDay(today)) / 86400000,
  );
}
function dueSoonBills() {
  return unpaidBills().filter((b) => billDaysUntil(b) <= 7);
}

function openModal(id) {
  const el = $(id);
  if (!el) return;
  el.classList.add("open");
  el.setAttribute("aria-hidden", "false");
}
function closeModal(id) {
  const el = $(id);
  if (!el) return;
  el.classList.remove("open");
  el.setAttribute("aria-hidden", "true");
}
function toast(msg) {
  const el = $("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => el.classList.remove("show"), 1900);
}

function applyTheme() {
  const theme = ["dark", "light"].includes(state.profile.theme)
    ? state.profile.theme
    : "dark";
  document.documentElement.dataset.theme = theme;
  const btn = $("themeToggle");
  if (btn) {
    btn.textContent = theme === "dark" ? "☀" : "☾";
    btn.title = theme === "dark" ? t("lightMode") : t("darkMode");
    btn.setAttribute("aria-label", btn.title);
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === "dark" ? "#0b0e11" : "#f4f7f5";
}
function toggleTheme() {
  state.profile.theme = state.profile.theme === "dark" ? "light" : "dark";
  saveState();
  applyTheme();
}

function applyLanguage() {
  const lang = state.profile.language;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document
    .querySelectorAll(".language-pill")
    .forEach((el) => el.classList.toggle("active", el.dataset.lang === lang));
  renderViewTitle();
}
function renderViewTitle() {
  const map = {
    overview: "overviewTitle",
    transactions: "transactionsTitle",
    commitments: "commitmentsTitle",
    budgets: "budgetsTitle",
    goals: "goalsTitle",
    analytics: "analyticsTitle",
  };
  $("viewTitle").textContent = t(map[activeView]);
}
function renderProfile() {
  const name =
    state.profile.name ||
    (state.profile.language === "ar" ? "مستخدم Montra" : "Montra User");
  $("profileName").textContent = name;
  $("welcomeName").textContent = state.profile.name
    ? name.split(/\s+/)[0]
    : t("friendName");
  $("avatarInitials").textContent =
    name
      .split(/\s+/)
      .slice(0, 2)
      .map((x) => x[0] || "")
      .join("")
      .toUpperCase() || "M";
  $("dateLabel").textContent = new Intl.DateTimeFormat(
    state.profile.language === "ar" ? "ar-SY" : "en-US",
    { weekday: "long", month: "long", day: "numeric", year: "numeric" },
  ).format(today);
}
function renderStarter() {
  const card = $("starterCard");
  if (!card) return;
  const hasIncome = Number(state.incomePlan.amount) > 0;
  const hasExpense = state.transactions.some((x) => x.type === "expense");
  const complete = hasIncome && hasExpense;
  card.classList.toggle("is-hidden", complete || state.guideDismissed);
  const a = $("starterIncomeState"),
    b = $("starterExpenseState");
  if (a) {
    a.textContent = hasIncome ? "✓" : "1";
    a.parentElement.classList.toggle("done", hasIncome);
  }
  if (b) {
    b.textContent = hasExpense ? "✓" : "2";
    b.parentElement.classList.toggle("done", hasExpense);
  }
}

function renderFx() {
  const rate = Number(state.exchangeRate) || 0;
  const status = $("fxStatus");
  if (!rate) {
    $("fxRateLive").textContent = state.__fxLoading ? t("fxUpdating") : "—";
    $("fxMeta").textContent = t("rateNeeded");
    if ($("fxAttribution")) $("fxAttribution").hidden = true;
    status.textContent = state.__fxLoading ? t("fxUpdating") : t("fxMissing");
    status.classList.remove("ready");
    $("fxExample").textContent = t("fxHint");
    return;
  }
  $("fxRateLive").textContent = `1 USD = ${formatMoney(rate, "SYP")}`;
  status.textContent = state.__fxLoading ? t("fxUpdating") : t("fxReady");
  status.classList.toggle("ready", !state.__fxLoading);
  const sourceType =
    state.exchangeSourceType === "market"
      ? t("fxSourceMarket")
      : state.exchangeSourceType === "official"
        ? t("fxSourceOfficial")
        : t("fxSourceFallback");
  const updated = state.exchangeUpdatedAt
    ? new Intl.DateTimeFormat(
        state.profile.language === "ar" ? "ar-SY" : "en-US",
        { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" },
      ).format(new Date(state.exchangeUpdatedAt))
    : "—";
  $("fxMeta").textContent =
    `${state.exchangeSource || "LiraScope"} · ${sourceType} · ${t("fxUpdated")} ${updated}`;
  if ($("fxAttribution"))
    $("fxAttribution").hidden = state.exchangeSource !== "ExchangeRate-API";
  $("fxExample").textContent = `100 USD ≈ ${formatMoney(rate * 100, "SYP")}`;
}
async function fetchExchangeRate(force = false) {
  const maxAge = 6 * 60 * 60 * 1000;
  const age = state.exchangeUpdatedAt
    ? Date.now() - new Date(state.exchangeUpdatedAt).getTime()
    : Infinity;
  if (!force && Number(state.exchangeRate) > 0 && age < maxAge) {
    renderFx();
    updateLiveConversions();
    return;
  }
  state.__fxLoading = true;
  renderFx();
  try {
    const res = await fetch(
      "https://lirascope.syria-cloud.sy/api/v1/rates/latest?currencies=USD&lang=en",
      { headers: { Accept: "application/json" }, cache: "no-store" },
    );
    if (!res.ok) throw new Error(`LiraScope ${res.status}`);
    const data = await res.json();
    const pick = (arr) =>
      Array.isArray(arr) ? arr.find((x) => x.currency === "USD") : null;
    const effective = pick(data.effectiveRates),
      market = pick(data.marketRates),
      official = pick(data.cbsRates);
    const chosen = effective || market || official;
    const rate = Number(
      chosen?.mid || (Number(chosen?.buy) + Number(chosen?.sell)) / 2,
    );
    if (!(rate > 0)) throw new Error("Invalid LiraScope rate");
    state.exchangeRate = rate;
    state.exchangeUpdatedAt =
      chosen?.timestampUtc || data.timestampUtc || new Date().toISOString();
    state.exchangeSource = "LiraScope";
    state.exchangeSourceType = effective || market ? "market" : "official";
    saveState();
  } catch (primaryError) {
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD", {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`ER API ${res.status}`);
      const data = await res.json();
      const rate = Number(data?.rates?.SYP);
      if (!(rate > 0)) throw new Error("Invalid fallback rate");
      state.exchangeRate = rate;
      state.exchangeUpdatedAt =
        data.time_last_update_utc || new Date().toISOString();
      state.exchangeSource = "ExchangeRate-API";
      state.exchangeSourceType = "reference";
      saveState();
    } catch (fallbackError) {
      console.warn("Exchange rate unavailable", primaryError, fallbackError);
    }
  } finally {
    state.__fxLoading = false;
    renderAll();
    updateLiveConversions();
  }
}
function renderIncomePlan() {
  const p = state.incomePlan;
  const has = Number(p.amount) > 0;
  $("incomePlanTitle").textContent = has
    ? p.frequency === "weekly"
      ? t("everyWeek")
      : t("everyMonth")
    : t("noIncome");
  if (!has) {
    $("incomePlanOriginal").textContent = "—";
    $("incomePlanEquivalent").textContent = "";
    return;
  }
  $("incomePlanOriginal").innerHTML = dualMoneyHTML(
    Number(p.amount),
    p.currency,
  );
  const monthly = Number(p.amount) * (p.frequency === "weekly" ? 52 / 12 : 1);
  $("incomePlanEquivalent").innerHTML =
    p.frequency === "weekly"
      ? `${t("monthlyEquivalent")}:<br><b>${formatMoney(monthly, p.currency)}</b><br><small>${equivalentText(monthly, p.currency)}</small>`
      : `${t("equivalentNow")}: ${equivalentText(p.amount, p.currency)}`;
}
function renderOverview() {
  const income = incomeSummary(),
    expenses = expenseSummary(),
    week = currentWeekSpend(),
    bills = unpaidBillsSummary();
  const canBalance = !income.missing && !expenses.missing;
  const balance = canBalance ? income.total - expenses.total : null;
  setDualMoney("balanceValue", balance);
  setDualMoney("incomeValue", income.missing ? null : income.total);
  setDualMoney("expenseValue", expenses.missing ? null : expenses.total);
  $("weekExpenseValue").innerHTML = week.missing
    ? "—"
    : dualMoneyHTML(week.total);
  const extra = sumConverted(monthExtraIncome());
  $("incomeExtra").innerHTML = extra.missing
    ? "—"
    : `+${dualMoneyHTML(extra.total)}`;
  const ratio =
    canBalance && income.total > 0
      ? Math.max((balance / income.total) * 100, 0)
      : null;
  $("balanceTrend").textContent = ratio === null ? "—" : `${ratio.toFixed(0)}%`;
  const safe =
    !income.missing && !expenses.missing && !bills.missing && income.total > 0
      ? Math.max((income.total - expenses.total - bills.total) / daysLeft(), 0)
      : null;
  setDualMoney("safeDailyValue", safe);
  $("daysLeftValue").textContent = `${daysLeft()} ${t("days")}`;
  renderFx();
  renderIncomePlan();
  renderStarter();
  renderQuickAdd();
  renderCashflow();
  renderForecast();
  renderRecentTransactions();
  renderCategoryBreakdown();
  renderWisdom();
  renderUpcomingBills();
}
function renderQuickAdd() {
  const panel = $("quickAddPanel"),
    list = $("quickAddList");
  const expenses = state.transactions.filter((x) => x.type === "expense");
  const grouped = new Map();
  expenses.forEach((tx) => {
    const key = `${tx.title}|${tx.category}|${tx.currency}`.toLowerCase();
    const v = grouped.get(key) || { ...tx, count: 0 };
    v.count++;
    if (new Date(tx.date) > new Date(v.date)) Object.assign(v, tx);
    grouped.set(key, v);
  });
  const top = [...grouped.values()]
    .sort((a, b) => b.count - a.count || b.id - a.id)
    .slice(0, 4);
  panel.classList.toggle("is-hidden", top.length === 0);
  list.innerHTML = top
    .map(
      (tx) =>
        `<button class="quick-chip" data-quick-id="${tx.id}"><span>${categoryMeta[tx.category]?.icon || "•"}</span><b>${escapeHTML(tx.title)}</b><small>${formatOriginal(tx.amount, tx.currency)}</small></button>`,
    )
    .join("");
}
function renderCashflow() {
  const chart = $("cashflowChart");
  const values = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = isoDate(d);
    const inc = sumConverted(
      state.transactions.filter((x) => x.date === key && x.type === "income"),
    );
    const exp = sumConverted(
      state.transactions.filter((x) => x.date === key && x.type === "expense"),
    );
    values.push({
      d,
      inc: inc.missing ? 0 : inc.total,
      exp: exp.missing ? 0 : exp.total,
    });
  }
  const max = Math.max(1, ...values.flatMap((v) => [v.inc, v.exp]));
  chart.innerHTML = values
    .map(
      (v) =>
        `<div class="chart-col"><div class="chart-bars"><i class="chart-bar income" style="height:${Math.max((v.inc / max) * 100, 2)}%" title="${formatMoney(v.inc)}"></i><i class="chart-bar expense" style="height:${Math.max((v.exp / max) * 100, 2)}%" title="${formatMoney(v.exp)}"></i></div><small>${new Intl.DateTimeFormat(state.profile.language === "ar" ? "ar-SY" : "en-US", { weekday: "short" }).format(v.d)}</small></div>`,
    )
    .join("");
}
function renderForecast() {
  const exp = expenseSummary(),
    inc = incomeSummary();
  const elapsed = Math.max(today.getDate(), 1);
  const forecast = exp.missing
    ? null
    : (exp.total / elapsed) * daysInCurrentMonth();
  $("forecastValue").textContent = formatMoney(forecast);
  if (forecast === null) {
    $("forecastCopy").textContent = t("rateNeeded");
    $("forecastMeter").style.width = "0%";
    return;
  }
  if (!inc.total || inc.missing) {
    $("forecastCopy").textContent = t("forecastNoIncome");
    $("forecastMeter").style.width = "35%";
    return;
  }
  const pct = Math.min((forecast / inc.total) * 100, 120);
  $("forecastMeter").style.width = `${Math.min(pct, 100)}%`;
  $("forecastMeter").classList.toggle("danger", forecast > inc.total);
  $("forecastCopy").textContent =
    forecast > inc.total ? t("forecastHigh") : t("forecastGood");
}
function transactionRow(tx, compact = false) {
  const meta = categoryMeta[tx.category] || categoryMeta.Other;
  const target = otherCurrency(tx.currency);
  const converted = convert(tx.amount, tx.currency, target);
  const sign = tx.type === "income" ? "+" : "−";
  const original = `${sign}${formatOriginal(tx.amount, tx.currency)}`;
  const equivalent =
    converted === null ? "—" : `${sign}${formatMoney(converted, target)}`;
  if (compact)
    return `<div class="transaction-row"><div class="transaction-name"><span class="category-icon" style="color:${meta.color};background:${meta.color}12">${meta.icon}</span><div><b>${escapeHTML(tx.title)}</b><small>${categoryName(tx.category)} · ${formatDate(tx.date)}</small></div></div><span class="tx-dual-amount ${tx.type === "income" ? "positive" : ""}"><b>${original}</b><small>≈ ${converted === null ? "—" : formatMoney(converted, target)}</small></span></div>`;
  return `<tr><td><div class="transaction-name"><span class="category-icon" style="color:${meta.color};background:${meta.color}12">${meta.icon}</span><div><b>${escapeHTML(tx.title)}</b><small>${escapeHTML(tx.note || "")}</small></div></div></td><td>${categoryName(tx.category)}</td><td>${formatDate(tx.date)}</td><td><span class="transaction-type ${tx.type}">${tx.type === "income" ? t("income") : t("expense")}</span></td><td class="${tx.type === "income" ? "positive" : ""}">${original}</td><td class="equivalent-cell ${tx.type === "income" ? "positive" : ""}">${converted === null ? "—" : `≈ ${equivalent.replace(sign, "")}`}</td><td><button class="delete-btn" data-delete-tx="${tx.id}" title="${t("delete")}">×</button></td></tr>`;
}
function renderRecentTransactions() {
  const items = [...monthTransactions()]
    .sort((a, b) => new Date(b.date) - new Date(a.date) || b.id - a.id)
    .slice(0, 5);
  $("recentTransactions").innerHTML = items.length
    ? items.map((x) => transactionRow(x, true)).join("")
    : `<div class="empty-state">${t("noTransactions")}</div>`;
}
function renderCategoryBreakdown() {
  const grouped = {};
  monthExpenses().forEach((x) => {
    const v = convert(x.amount, x.currency, primaryCurrency());
    if (v !== null) grouped[x.category] = (grouped[x.category] || 0) + v;
  });
  const sorted = Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const total = sorted.reduce((s, x) => s + x[1], 0);
  let cursor = 0;
  const stops = sorted.map(([cat, val]) => {
    const pct = total ? (val / total) * 100 : 0,
      c = categoryMeta[cat]?.color || "#93a09a",
      s = `${c} ${cursor}% ${cursor + pct}%`;
    cursor += pct;
    return s;
  });
  if (cursor < 100) stops.push(`#243037 ${cursor}% 100%`);
  $("categoryDonut").style.background = `conic-gradient(${stops.join(",")})`;
  $("categoryTotal").textContent = formatMoney(total, primaryCurrency(), true);
  $("categoryLegend").innerHTML = sorted.length
    ? sorted
        .map(
          ([cat, val]) =>
            `<div><i style="background:${categoryMeta[cat]?.color || "#93a09a"}"></i><span>${categoryName(cat)}</span><b>${total ? ((val / total) * 100).toFixed(0) : 0}%</b></div>`,
        )
        .join("")
    : `<div class="empty-state">${t("noTransactions")}</div>`;
}
function renderWisdom() {
  const index =
    Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000) %
    wisdom.length;
  const item = wisdom[index];
  $("wisdomText").textContent = item[state.profile.language] || item.en;
  $("wisdomAuthor").textContent = item.author;
  $("wisdomSource").href = item.url;
}
function renderUpcomingBills() {
  const items = unpaidBills()
    .sort((a, b) => billDaysUntil(a) - billDaysUntil(b))
    .slice(0, 4);
  const el = $("upcomingBillsList");
  el.innerHTML = items.length
    ? items
        .map((b) => {
          const d = billDaysUntil(b);
          const label =
            d < 0
              ? t("overdue")
              : d === 0
                ? state.profile.language === "ar"
                  ? "اليوم"
                  : "Today"
                : `${t("dueIn")} ${d} ${t("days")}`;
          return `<div class="upcoming-row"><div><b>${escapeHTML(b.name)}</b><small>${label}</small></div><strong>${formatOriginal(b.amount, b.currency)}</strong></div>`;
        })
        .join("")
    : `<div class="empty-state compact-empty">${t("noUpcoming")}</div>`;
}

function renderTransactions() {
  let items = [...state.transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date) || b.id - a.id,
  );
  if (transactionFilter !== "all")
    items = items.filter((x) => x.type === transactionFilter);
  if (searchTerm)
    items = items.filter((x) =>
      `${x.title} ${x.category} ${x.note || ""} ${categoryName(x.category)}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
  $("transactionTableBody").innerHTML = items.length
    ? items.map((x) => transactionRow(x)).join("")
    : `<tr><td colspan="7"><div class="empty-state">${t("noTransactions")}</div></td></tr>`;
}
function renderBills() {
  const summary = sumConverted(state.bills);
  $("monthlyCommitmentsValue").textContent = summary.missing
    ? "—"
    : formatMoney(summary.total);
  $("dueSoonValue").textContent = dueSoonBills().length;
  $("paidBillsValue").textContent = state.bills.filter((b) =>
    billPaidThisMonth(b),
  ).length;
  $("billGrid").innerHTML = state.bills.length
    ? state.bills
        .slice()
        .sort((a, b) => a.day - b.day)
        .map((b) => {
          const paid = billPaidThisMonth(b),
            days = billDaysUntil(b);
          const status = paid
            ? t("paid")
            : days < 0
              ? t("overdue")
              : `${t("dueIn")} ${Math.max(days, 0)} ${t("days")}`;
          const billTarget = otherCurrency(b.currency),
            converted = convert(b.amount, b.currency, billTarget);
          return `<article class="bill-card ${paid ? "paid" : ""}"><div class="bill-card-head"><div><span class="bill-day">${String(b.day).padStart(2, "0")}</span><div><h3>${escapeHTML(b.name)}</h3><small>${categoryName(b.category)} · ${status}</small></div></div><button class="mini-menu" data-remove-bill="${b.id}">×</button></div><div class="bill-money"><strong>${formatOriginal(b.amount, b.currency)}</strong><span>${converted === null ? "—" : `≈ ${formatMoney(converted, billTarget)}`}</span></div><button class="${paid ? "secondary-btn" : "primary-btn"} bill-pay-btn" data-pay-bill="${b.id}" ${paid ? "disabled" : ""}>${paid ? t("paid") : t("markPaid")}</button></article>`;
        })
        .join("")
    : `<div class="empty-state">${t("noCommitments")}</div>`;
}
function renderBudgets() {
  const entries = Object.entries(state.categoryBudgets);
  let total = 0,
    missing = false;
  entries.forEach(([, b]) => {
    const v = convert(b.amount, b.currency, primaryCurrency());
    if (v === null) missing = true;
    else total += v;
  });
  const spent = expenseSummary();
  $("budgetPageTotal").textContent = missing ? "—" : formatMoney(total);
  $("budgetPageSpent").textContent = spent.missing
    ? "—"
    : formatMoney(spent.total);
  $("budgetPageLeft").textContent =
    missing || spent.missing
      ? "—"
      : formatMoney(Math.max(total - spent.total, 0));
  $("budgetCards").innerHTML = entries.length
    ? entries
        .map(([cat, b]) => {
          const convertedLimit = convert(
            b.amount,
            b.currency,
            primaryCurrency(),
          );
          const sp = categorySpent(cat);
          const pct =
            convertedLimit !== null && !sp.missing && convertedLimit > 0
              ? (sp.total / convertedLimit) * 100
              : 0;
          const meta = categoryMeta[cat] || categoryMeta.Other;
          return `<article class="budget-card"><div class="budget-card-head"><div class="budget-card-title"><span class="category-icon" style="color:${meta.color};background:${meta.color}12">${meta.icon}</span><div><h3>${categoryName(cat)}</h3><small>${formatOriginal(b.amount, b.currency)}</small></div></div><button class="mini-menu" data-remove-budget="${cat}">×</button></div><div class="budget-progress"><i style="width:${Math.min(pct, 100)}%;background:${pct > 100 ? "var(--red)" : meta.color}"></i></div><div class="budget-card-foot"><span>${t("spent")} <strong>${sp.missing ? "—" : formatMoney(sp.total)}</strong></span><span>${pct.toFixed(0)}%</span></div></article>`;
        })
        .join("")
    : `<div class="empty-state">${t("noBudgets")}</div>`;
}
function renderGoals() {
  const savedItems = state.goals.map((g) => ({
      amount: g.saved,
      currency: g.currency,
    })),
    targetItems = state.goals.map((g) => ({
      amount: g.target,
      currency: g.currency,
    }));
  const saved = sumConverted(savedItems),
    target = sumConverted(targetItems);
  $("goalSavedTotal").textContent = saved.missing
    ? "—"
    : formatMoney(saved.total);
  $("goalTargetTotal").textContent = target.missing
    ? "—"
    : `${state.profile.language === "ar" ? "من" : "of"} ${formatMoney(target.total)}`;
  $("goalGrid").innerHTML = state.goals.length
    ? state.goals
        .map((g) => {
          const pct =
            Math.min((Number(g.saved) / Number(g.target)) * 100, 100) || 0;
          return `<article class="goal-card"><div class="goal-card-head"><div><h3>${escapeHTML(g.name)}</h3><small>${g.date ? formatDate(g.date) : t("noDate")} · ${g.currency}</small></div><button class="mini-menu" data-remove-goal="${g.id}">×</button></div><div class="goal-progress"><i style="width:${pct}%"></i></div><div class="goal-card-foot"><span>${formatOriginal(g.saved, g.currency)} / ${formatOriginal(g.target, g.currency)}</span><strong>${pct.toFixed(0)}%</strong></div><div class="goal-actions"><button class="secondary-btn" data-contribute="${g.id}">${t("addMoney")}</button></div></article>`;
        })
        .join("")
    : `<div class="empty-state">${t("noGoals")}</div>`;
}
function renderAnalytics() {
  const expenses = monthExpenses(),
    spent = expenseSummary();
  const avg = spent.missing ? null : spent.total / Math.max(today.getDate(), 1);
  $("avgDailySpend").textContent = formatMoney(avg);
  let largest = null,
    largestDisplay = -1;
  expenses.forEach((x) => {
    const v = convert(x.amount, x.currency, primaryCurrency());
    if (v !== null && v > largestDisplay) {
      largest = x;
      largestDisplay = v;
    }
  });
  $("largestExpense").textContent = largest ? formatMoney(largestDisplay) : "—";
  $("largestExpenseLabel").textContent = largest?.title || "—";
  const grouped = {};
  expenses.forEach((x) => {
    const v = convert(x.amount, x.currency, primaryCurrency());
    if (v !== null) grouped[x.category] = (grouped[x.category] || 0) + v;
  });
  const top = Object.entries(grouped).sort((a, b) => b[1] - a[1])[0];
  $("topCategoryName").textContent = top ? categoryName(top[0]) : "—";
  $("topCategoryAmount").textContent = top ? formatMoney(top[1]) : "—";
  const cw = currentWeekSpend(),
    pw = previousWeekSpend();
  if (cw.missing || pw.missing) {
    $("weekComparison").textContent = "—";
    $("weekComparisonLabel").textContent = t("rateNeeded");
  } else if (pw.total === 0) {
    $("weekComparison").textContent = formatMoney(cw.total);
    $("weekComparisonLabel").textContent = t("spentThisWeek");
  } else {
    const diff = ((cw.total - pw.total) / pw.total) * 100;
    $("weekComparison").textContent =
      `${diff >= 0 ? "+" : ""}${diff.toFixed(0)}%`;
    $("weekComparisonLabel").textContent =
      diff > 0
        ? state.profile.language === "ar"
          ? "أعلى من الأسبوع الماضي"
          : "higher than last week"
        : state.profile.language === "ar"
          ? "أقل من الأسبوع الماضي"
          : "lower than last week";
  }
  renderLineChart();
  renderInsights(top);
}
function renderLineChart() {
  const vals = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = isoDate(d),
      s = sumConverted(
        state.transactions.filter(
          (x) => x.type === "expense" && x.date === key,
        ),
      );
    vals.push({ d, val: s.missing ? 0 : s.total });
  }
  const max = Math.max(1, ...vals.map((x) => x.val));
  const pts = vals
    .map(
      (x, i) => `${(i / (vals.length - 1)) * 100},${95 - (x.val / max) * 80}`,
    )
    .join(" ");
  $("spendingLineChart").innerHTML =
    `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#73f5a7" stop-opacity=".18"/><stop offset="100%" stop-color="#73f5a7" stop-opacity="0"/></linearGradient></defs><line class="grid-line" x1="0" y1="25" x2="100" y2="25"/><line class="grid-line" x1="0" y1="50" x2="100" y2="50"/><line class="grid-line" x1="0" y1="75" x2="100" y2="75"/><path class="area" d="M ${pts.split(" ").join(" L ")} L 100 100 L 0 100 Z"/><path class="line" d="M ${pts.split(" ").join(" L ")}"/></svg>`;
}
function hasMixedCurrencyNeedingRate() {
  const currencies = new Set();
  if (Number(state.incomePlan.amount))
    currencies.add(state.incomePlan.currency);
  state.transactions.forEach((x) => currencies.add(x.currency));
  state.bills.forEach((x) => currencies.add(x.currency));
  return currencies.size > 1 && !Number(state.exchangeRate);
}
function renderInsights(top) {
  const items = [];
  const cw = currentWeekSpend(),
    pw = previousWeekSpend(),
    inc = incomeSummary(),
    exp = expenseSummary();
  if (hasMixedCurrencyNeedingRate())
    items.push(["↔", t("insightFxTitle"), t("insightFxText")]);
  if (!cw.missing && !pw.missing && pw.total > 0) {
    const diff = (cw.total - pw.total) / pw.total;
    if (diff > 0.15)
      items.push(["↗", t("insightWeekUpTitle"), t("insightWeekUpText")]);
    else if (diff < -0.15)
      items.push(["↘", t("insightWeekDownTitle"), t("insightWeekDownText")]);
  }
  if (top)
    items.push([
      "◎",
      t("insightTopTitle"),
      `${categoryName(top[0])}: ${formatMoney(top[1])}`,
    ]);
  if (!inc.missing && !exp.missing && inc.total > 0) {
    const forecast =
      (exp.total / Math.max(today.getDate(), 1)) * daysInCurrentMonth();
    if (forecast > inc.total)
      items.push(["!", t("insightForecastTitle"), t("insightForecastText")]);
    else if (inc.total - exp.total > inc.total * 0.2)
      items.push(["✦", t("insightHealthyTitle"), t("insightHealthyText")]);
  }
  if (dueSoonBills().length)
    items.push(["◷", t("insightBillsTitle"), t("insightBillsText")]);
  if (!items.length)
    items.push(["⌁", t("insightEmptyTitle"), t("insightEmptyText")]);
  $("insightList").innerHTML = items
    .slice(0, 5)
    .map(
      (i) =>
        `<div class="insight-item"><span>${i[0]}</span><div><b>${i[1]}</b><small>${i[2]}</small></div></div>`,
    )
    .join("");
}

function updateCategoryOptions(type) {
  const select = $("transactionCategory");
  select.innerHTML = (type === "income" ? incomeCategories : expenseCategories)
    .map((c) => `<option value="${c}">${categoryName(c)}</option>`)
    .join("");
}
function updateBudgetCategoryOptions() {
  $("categoryBudgetCategory").innerHTML = expenseCategories
    .map((c) => `<option value="${c}">${categoryName(c)}</option>`)
    .join("");
  $("billCategory").innerHTML = expenseCategories
    .map((c) => `<option value="${c}">${categoryName(c)}</option>`)
    .join("");
}
function renderAll() {
  applyLanguage();
  applyTheme();
  renderProfile();
  renderOverview();
  renderTransactions();
  renderBills();
  renderBudgets();
  renderGoals();
  renderAnalytics();
  updateCategoryOptions($("transactionType").value || "expense");
  updateBudgetCategoryOptions();
}
function switchView(view) {
  activeView = view;
  document
    .querySelectorAll(".view")
    .forEach((el) => el.classList.toggle("active", el.id === `view-${view}`));
  document
    .querySelectorAll(".nav-item[data-view]")
    .forEach((el) => el.classList.toggle("active", el.dataset.view === view));
  renderViewTitle();
  $("sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openIncomeModal() {
  const p = state.incomePlan;
  $("incomeInput").value = p.amount || "";
  $("incomeCurrency").value = p.currency || "SYP";
  $("incomeFrequency").value = p.frequency || "monthly";
  updateIncomeHelp();
  openModal("incomeModal");
}
function updateIncomeHelp() {
  const amount = Number($("incomeInput").value) || 0,
    currency = $("incomeCurrency").value,
    frequency = $("incomeFrequency").value;
  $("incomeLiveConversion").innerHTML = amount
    ? `<span>${t("equivalentNow")}</span><strong>${equivalentText(amount, currency)}</strong>`
    : `<span>${t("equivalentNow")}</span><strong>—</strong>`;
  if (!amount) {
    $("incomeEquivalentHelp").textContent =
      frequency === "weekly" ? t("incomeHelpWeekly") : t("incomeHelpMonthly");
    return;
  }
  if (frequency === "weekly") {
    const monthly = (amount * 52) / 12;
    $("incomeEquivalentHelp").innerHTML =
      `${t("monthlyEquivalent")}: <b>${formatMoney(monthly, currency)}</b> · ${equivalentText(monthly, currency)}`;
  } else $("incomeEquivalentHelp").textContent = t("incomeHelpMonthly");
}
function updateTransactionConversion() {
  const amount = Number($("transactionAmount")?.value) || 0,
    currency = $("transactionCurrency")?.value || "SYP";
  if (!$("transactionConversion")) return;
  $("transactionConversion").innerHTML = amount
    ? `<span>${t("equivalentNow")}</span><strong>${equivalentText(amount, currency)}</strong>`
    : `<span>${t("equivalentNow")}</span><strong>—</strong>`;
}
function updateLiveConversions() {
  if ($("incomeLiveConversion")) updateIncomeHelp();
  if ($("transactionConversion")) updateTransactionConversion();
}
function defaultEntryCurrency() {
  return state.transactions.length
    ? state.transactions[state.transactions.length - 1].currency
    : Number(state.incomePlan.amount)
      ? state.incomePlan.currency
      : "SYP";
}
function prepareTransaction(prefill = null) {
  $("transactionForm").reset();
  $("transactionType").value = prefill?.type || "expense";
  document
    .querySelectorAll(".type-toggle button")
    .forEach((b) =>
      b.classList.toggle(
        "active",
        b.dataset.type === $("transactionType").value,
      ),
    );
  updateCategoryOptions($("transactionType").value);
  $("transactionDate").value = isoDate(today);
  $("transactionCurrency").value = prefill?.currency || defaultEntryCurrency();
  if (prefill) {
    $("transactionTitleInput").value = prefill.title || "";
    $("transactionAmount").value = prefill.amount || "";
    $("transactionCategory").value = prefill.category || "Other";
    $("transactionNote").value = prefill.note || "";
  }
  updateTransactionConversion();
  openModal("transactionModal");
  setTimeout(() => $("transactionTitleInput").focus(), 100);
}
function exportCsv() {
  if (!state.transactions.length) {
    toast(t("csvEmpty"));
    return;
  }
  const rows = [
    ["date", "type", "description", "category", "amount", "currency", "note"],
    ...state.transactions.map((x) => [
      x.date,
      x.type,
      x.title,
      x.category,
      x.amount,
      x.currency,
      x.note || "",
    ]),
  ];
  const csv = rows
    .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `montra-transactions-${currentMonthKey}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast(t("csvDone"));
}

$("sideNav").addEventListener("click", (e) => {
  const b = e.target.closest("[data-view]");
  if (b) switchView(b.dataset.view);
});
document
  .querySelectorAll("[data-go]")
  .forEach((b) => b.addEventListener("click", () => switchView(b.dataset.go)));
$("menuBtn").addEventListener("click", () =>
  $("sidebar").classList.toggle("open"),
);
$("languageSwitch").addEventListener("click", (e) => {
  const p = e.target.closest("[data-lang]");
  if (!p) return;
  state.profile.language = p.dataset.lang;
  saveState();
  renderAll();
});
$("themeToggle").addEventListener("click", toggleTheme);
$("refreshFxBtn").addEventListener("click", () => fetchExchangeRate(true));
function openGuide() {
  openModal("guideModal");
}
$("openGuide").addEventListener("click", openGuide);
$("starterGuide").addEventListener("click", openGuide);
$("guideStartIncome").addEventListener("click", () => {
  state.guideSeen = true;
  saveState();
  closeModal("guideModal");
  openIncomeModal();
});
$("guideStartExpense").addEventListener("click", () => {
  state.guideSeen = true;
  saveState();
  closeModal("guideModal");
  prepareTransaction();
});
$("editIncomeBtn").addEventListener("click", openIncomeModal);
$("incomePlanEdit").addEventListener("click", openIncomeModal);
$("starterIncome").addEventListener("click", openIncomeModal);
$("starterExpense").addEventListener("click", () => prepareTransaction());
["incomeInput", "incomeCurrency", "incomeFrequency"].forEach((id) =>
  $(id).addEventListener("input", updateIncomeHelp),
);
["transactionAmount", "transactionCurrency"].forEach((id) =>
  $(id).addEventListener("input", updateTransactionConversion),
);
$("incomeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.incomePlan = {
    amount: Number($("incomeInput").value) || 0,
    currency: $("incomeCurrency").value,
    frequency: $("incomeFrequency").value,
  };
  state.profile.currency = state.incomePlan.currency;
  state.guideDismissed = true;
  saveState();
  renderAll();
  closeModal("incomeModal");
  toast(t("incomeSaved"));
});
$("addTransactionTop").addEventListener("click", () => prepareTransaction());
$("addTransactionPage").addEventListener("click", () => prepareTransaction());
document.querySelectorAll(".type-toggle button").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".type-toggle button")
      .forEach((b) => b.classList.toggle("active", b === btn));
    $("transactionType").value = btn.dataset.type;
    updateCategoryOptions(btn.dataset.type);
  }),
);
$("transactionForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const tx = {
    id: Date.now(),
    title: $("transactionTitleInput").value.trim(),
    amount: Number($("transactionAmount").value),
    currency: $("transactionCurrency").value,
    type: $("transactionType").value,
    category: $("transactionCategory").value,
    date: $("transactionDate").value,
    note: $("transactionNote").value.trim(),
  };
  state.transactions.push(tx);
  state.guideDismissed = true;
  saveState();
  renderAll();
  closeModal("transactionModal");
  toast(t("transactionAdded"));
});
$("quickAddList").addEventListener("click", (e) => {
  const b = e.target.closest("[data-quick-id]");
  if (!b) return;
  const tx = state.transactions.find((x) => String(x.id) === b.dataset.quickId);
  if (tx) prepareTransaction({ ...tx, id: undefined, date: isoDate(today) });
});
$("transactionFilters").addEventListener("click", (e) => {
  const b = e.target.closest("[data-filter]");
  if (!b) return;
  transactionFilter = b.dataset.filter;
  document
    .querySelectorAll("#transactionFilters .filter-btn")
    .forEach((x) => x.classList.toggle("active", x === b));
  renderTransactions();
});
$("transactionSearch").addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderTransactions();
});
$("transactionTableBody").addEventListener("click", (e) => {
  const b = e.target.closest("[data-delete-tx]");
  if (!b) return;
  state.transactions = state.transactions.filter(
    (x) => String(x.id) !== b.dataset.deleteTx,
  );
  saveState();
  renderAll();
  toast(t("transactionDeleted"));
});
$("exportCsvBtn").addEventListener("click", exportCsv);

$("addBillBtn").addEventListener("click", () => {
  $("billForm").reset();
  $("billCurrency").value = defaultEntryCurrency();
  updateBudgetCategoryOptions();
  openModal("billModal");
});
$("billForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.bills.push({
    id: Date.now(),
    name: $("billName").value.trim(),
    amount: Number($("billAmount").value),
    currency: $("billCurrency").value,
    day: Number($("billDay").value),
    category: $("billCategory").value,
    paidMonths: [],
  });
  saveState();
  renderAll();
  closeModal("billModal");
  toast(t("billAdded"));
});
$("billGrid").addEventListener("click", (e) => {
  const remove = e.target.closest("[data-remove-bill]");
  if (remove) {
    state.bills = state.bills.filter(
      (b) => String(b.id) !== remove.dataset.removeBill,
    );
    saveState();
    renderAll();
    return;
  }
  const pay = e.target.closest("[data-pay-bill]");
  if (pay) {
    const bill = state.bills.find((b) => String(b.id) === pay.dataset.payBill);
    if (!bill || billPaidThisMonth(bill)) return;
    bill.paidMonths.push(currentMonthKey);
    state.transactions.push({
      id: Date.now(),
      title: bill.name,
      amount: Number(bill.amount),
      currency: bill.currency,
      type: "expense",
      category: bill.category,
      date: isoDate(today),
      note:
        state.profile.language === "ar" ? "التزام شهري" : "Monthly commitment",
    });
    saveState();
    renderAll();
    toast(t("billPaid"));
  }
});

$("addBudgetBtn").addEventListener("click", () => {
  $("categoryBudgetAmount").value = "";
  $("categoryBudgetCurrency").value = defaultEntryCurrency();
  updateBudgetCategoryOptions();
  openModal("categoryBudgetModal");
});
$("categoryBudgetForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.categoryBudgets[$("categoryBudgetCategory").value] = {
    amount: Number($("categoryBudgetAmount").value),
    currency: $("categoryBudgetCurrency").value,
  };
  saveState();
  renderBudgets();
  closeModal("categoryBudgetModal");
  toast(t("budgetSaved"));
});
$("budgetCards").addEventListener("click", (e) => {
  const b = e.target.closest("[data-remove-budget]");
  if (!b) return;
  delete state.categoryBudgets[b.dataset.removeBudget];
  saveState();
  renderBudgets();
});

$("addGoalBtn").addEventListener("click", () => {
  $("goalForm").reset();
  $("goalSavedInput").value = 0;
  $("goalCurrency").value = defaultEntryCurrency();
  openModal("goalModal");
});
$("goalForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.goals.push({
    id: Date.now(),
    name: $("goalNameInput").value.trim(),
    target: Number($("goalTargetInput").value),
    saved: Number($("goalSavedInput").value) || 0,
    currency: $("goalCurrency").value,
    date: $("goalDateInput").value,
  });
  saveState();
  renderGoals();
  closeModal("goalModal");
  toast(t("goalCreated"));
});
$("goalGrid").addEventListener("click", (e) => {
  const remove = e.target.closest("[data-remove-goal]");
  if (remove) {
    state.goals = state.goals.filter(
      (g) => String(g.id) !== remove.dataset.removeGoal,
    );
    saveState();
    renderGoals();
    return;
  }
  const add = e.target.closest("[data-contribute]");
  if (add) {
    const g = state.goals.find((x) => String(x.id) === add.dataset.contribute);
    if (!g) return;
    $("contributeGoalId").value = g.id;
    $("contributeGoalTitle").textContent = `${g.name} · ${g.currency}`;
    $("contributeAmount").value = "";
    openModal("contributeModal");
  }
});
$("contributeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const g = state.goals.find(
    (x) => String(x.id) === $("contributeGoalId").value,
  );
  if (g)
    g.saved = Math.min(
      Number(g.target),
      Number(g.saved) + Number($("contributeAmount").value),
    );
  saveState();
  renderGoals();
  closeModal("contributeModal");
  toast(t("savingsAdded"));
});

$("welcomeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("welcomeNameInput").value.trim();
  if (!name) return;
  state.profile.name = name;
  saveState();
  renderProfile();
  closeModal("welcomeModal");
  setTimeout(() => {
    openModal("guideModal");
  }, 180);
});

function openSettingsModal() {
  $("settingsName").value = state.profile.name;
  $("settingsLanguage").value = state.profile.language;
  $("settingsTheme").value = state.profile.theme || "dark";
  openModal("settingsModal");
}
$("openSettings").addEventListener("click", openSettingsModal);
$("quickSettings").addEventListener("click", openSettingsModal);
$("settingsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.profile.name = $("settingsName").value.trim();
  state.profile.language = $("settingsLanguage").value;
  state.profile.theme = $("settingsTheme").value;
  saveState();
  renderAll();
  closeModal("settingsModal");
  toast(t("settingsSaved"));
});
$("resetDataBtn").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(OLD_STORAGE_KEY);
  state = clone(defaults);
  closeModal("settingsModal");
  renderAll();
  fetchExchangeRate(true);
  toast(t("dataReset"));
  setTimeout(() => openModal("welcomeModal"), 220);
});

document.querySelectorAll("[data-close]").forEach((b) =>
  b.addEventListener("click", () => {
    const id = b.dataset.close;
    if (id === "guideModal") {
      state.guideSeen = true;
      saveState();
    }
    closeModal(id);
  }),
);
document.querySelectorAll(".modal-backdrop").forEach((m) =>
  m.addEventListener("click", (e) => {
    if (e.target === m && !m.classList.contains("locked-modal")) {
      if (m.id === "guideModal") {
        state.guideSeen = true;
        saveState();
      }
      closeModal(m.id);
    }
  }),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    document
      .querySelectorAll(".modal-backdrop.open:not(.locked-modal)")
      .forEach((m) => {
        if (m.id === "guideModal") {
          state.guideSeen = true;
          saveState();
        }
        closeModal(m.id);
      });
});

renderAll();
fetchExchangeRate();
if (!state.profile.name) {
  setTimeout(() => openModal("welcomeModal"), 120);
} else if (!state.guideSeen) {
  setTimeout(() => openModal("guideModal"), 180);
}

export type Lang = 'ru' | 'en';

export function getLocalePath(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path.replace(/^\/+|\/+$/g, '');
  if (lang === 'en') {
    return clean ? `/en/${clean}` : '/en/';
  }
  return clean ? `/${clean}` : '/';
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'ru' ? 'en' : 'ru';
}

export const TRANSLATIONS = {
  ru: {
    langName: 'Русский',
    switchLangLabel: 'EN',
    switchLangAria: 'Switch to English',
    nav: {
      home: 'Главная',
      changelog: 'Чейнджлог',
      donate: 'Поддержать',
      downloadCta: 'Скачать',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
    },
    seo: {
      homeTitle: 'WorkOn — Бесплатный десктопный трекер рабочего времени',
      homeDesc:
        'Быстрый, локальный и полностью бесплатный тайм-трекер для Windows, macOS и Linux. Хранение в SQLite, без подписок, аккаунтов и рекламы.',
      changelogTitle: 'История версий — WorkOn',
      changelogDesc:
        'Хронология релизов, новых функций и исправлений в бесплатном тайм-трекере WorkOn для Windows, macOS и Linux.',
      donateTitle: 'Поддержать разработку — WorkOn',
      donateDesc:
        'WorkOn распространяется бесплатно и развивается на донаты пользователей. Узнайте, как поддержать проект.',
      notFoundTitle: 'Страница не найдена — WorkOn',
    },
    hero: {
      metaFree: 'Полностью бесплатно',
      metaLocal: 'Локальный SQLite',
      headlineStart: 'Учёт рабочего времени.',
      headlineAccent: 'Без подписок, облаков и шума.',
      subtitle:
        'Лёгкая десктопная утилита для разработчиков и фрилансеров. Один клик или горячая клавиша — и таймер запущен. Все данные остаются строго на вашем диске.',
      primaryCtaDefault: 'Скачать WorkOn',
      primaryCtaWindows: 'Скачать для Windows',
      primaryCtaMac: 'Скачать для macOS',
      primaryCtaLinux: 'Скачать для Linux',
      secondaryCta: 'История версий',
      trustNote: 'Windows 10/11 · macOS 12+ · Linux AppImage · Без регистрации',
    },
    demo: {
      windowTitle: 'WorkOn — Демо',
      statusIdle: 'Готов к работе',
      statusRunning: 'Идёт запись',
      statusPaused: 'Пауза',
      taskLabel: 'Текущая задача',
      taskPlaceholder: 'Над чем вы работаете сейчас?',
      defaultTask: 'Верстка экрана настроек',
      projectsLabel: 'Проект',
      projects: ['Клиентский UI', 'Backend API', 'Ревью кода', 'Личное'],
      start: 'Старт',
      pause: 'Пауза',
      resume: 'Продолжить',
      finish: 'Записать',
      reset: 'Сброс',
      shortcutHint: 'Пробел — старт / пауза (вне поля ввода)',
      todayHeading: 'Сессии за сегодня',
      todayTotalLabel: 'Итого сегодня',
      copyReport: 'Копировать отчёт',
      copiedReport: 'Отчёт скопирован',
      emptySessions: 'Пока нет записанных сессий — запустите таймер выше.',
      sampleSessions: [
        { task: 'Оптимизация запросов SQLite', project: 'Backend API', seconds: 4920 },
        { task: 'Проектирование горячих клавиш', project: 'Клиентский UI', seconds: 2700 },
      ],
    },
    features: {
      heading: 'Сделано как инструмент, а не подписочный сервис',
      subheading:
        'Никакой телеметрии, навязанных аккаунтов и искусственных ограничений. Только скорость нативного приложения и полный контроль над данными.',
      items: [
        {
          index: '01',
          title: '100% локальная база SQLite',
          description:
            'Все проекты, задачи и отчёты хранятся в одном локальном файле на вашем компьютере. Программа работает полностью офлайн и не отправляет данные на сторонние серверы.',
          detailLabel: 'Путь хранения',
          detailValue: '~/WorkOn/tracker.db',
        },
        {
          index: '02',
          title: 'Минимальная нагрузка',
          description:
            'Не съедает батарею и оперативную память — спокойно живёт в системном трее целый рабочий день.',
          metric: '< 40 МБ',
          metricCaption: 'ОЗУ в фоновом режиме',
        },
        {
          index: '03',
          title: 'Управление с клавиатуры',
          description:
            'Мгновенный запуск, пауза и переключение задач из системного трея без переключения окон.',
          shortcuts: [
            { keys: 'Ctrl + Shift + S', label: 'Старт / Пауза' },
            { keys: 'Ctrl + Shift + N', label: 'Новая задача' },
          ],
        },
        {
          index: '04',
          title: 'Честно бесплатно навсегда',
          description:
            'Никаких PRO-тарифов, лимитов на количество проектов, рекламы или водяных знаков. Исходники и релизы открыты на GitHub, а разработка держится исключительно на добровольных донатах.',
          ctaLabel: 'Как поддержать проект',
        },
      ],
    },
    download: {
      heading: 'Скачать WorkOn',
      subheading: 'Выберите сборку под вашу операционную систему. Установка занимает меньше минуты.',
      recommendedTag: 'Ваша ОС',
      allReleasesLink: 'Все релизы и архивы на GitHub',
      windows: {
        name: 'Windows',
        meta: 'Windows 10, 11 · 64-bit',
        primaryBtn: 'Установщик (.exe)',
        secondaryBtn: 'Portable-версия (.zip)',
      },
      macos: {
        name: 'macOS',
        meta: 'macOS 12+ · Apple Silicon и Intel',
        primaryBtn: 'Скачать (.dmg)',
      },
      linux: {
        name: 'Linux',
        meta: 'Ubuntu, Fedora, Arch · x86_64',
        primaryBtn: 'Скачать (.AppImage)',
      },
    },
    faq: {
      heading: 'Частые вопросы и установка',
      subheading:
        'Ответы о приватности, переносе данных и системных предупреждениях при установке бесплатных сборок.',
      items: [
        {
          q: 'Почему Windows SmartScreen показывает предупреждение при запуске .exe?',
          a: 'WorkOn — полностью бесплатный независимый проект без коммерческой EV-подписи кода (такой сертификат стоит сотни долларов в год). Поэтому Windows SmartScreen может показать «Система Windows защитила ваш компьютер». Чтобы установить программу, нажмите «Подробнее» → «Выполнить в любом случае». Все официальные сборки публикуются напрямую в GitHub Releases.',
        },
        {
          q: 'Как открыть WorkOn на macOS, если Gatekeeper блокирует запуск?',
          a: 'Так как сборка пока не нотаризована платным аккаунтом Apple Developer, при первом запуске macOS может сообщить о «неизвестном разработчике». Кликните правой кнопкой мыши по иконке WorkOn в папке «Программы» и выберите «Открыть», либо разрешите запуск в «Системные настройки» → «Конфиденциальность и безопасность» → «Всё равно открыть».',
        },
        {
          q: 'Где хранятся мои данные и как сделать резервную копию?',
          a: 'Вся история проектов и сессий сохраняется локально в одном файле базы данных SQLite на вашем диске. Вы можете в любой момент скопировать этот файл для резервной копии или перенести на другой компьютер — синхронизация с облаком не требуется.',
        },
        {
          q: 'Нужен ли интернет или регистрация для работы?',
          a: 'Нет. WorkOn работает на 100% автономно сразу после установки. В программе нет обязательной регистрации, рекламы, трекеров аналитики и скрытых фоновых запросов.',
        },
        {
          q: 'В чём подвох? Почему программа полностью бесплатная?',
          a: 'Подвоха нет — WorkOn создавался как удобная личная утилита без лишней бюрократии и подписок. Проект распространяется бесплатно и развивается в свободное время благодаря добровольным донатам пользователей.',
        },
      ],
    },
    donateCta: {
      heading: 'WorkOn экономит вам время каждый день?',
      description:
        'У проекта нет инвесторов и платных подписок. Добровольные донаты помогают оплачивать домен, сертификаты подписи сборок и уделять больше времени новым функциям.',
      button: 'Поддержать проект',
    },
    changelog: {
      heading: 'История изменений',
      subheading: 'Хронология релизов, новых возможностей и исправлений в WorkOn.',
      filters: {
        all: 'Все',
        new: 'Новое',
        improve: 'Улучшено',
        fix: 'Исправлено',
      },
      latestLabel: 'Актуальная версия',
      filesLabel: 'Файлы релиза',
      emptyFilter: 'В этом релизе нет записей выбранной категории.',
      viewOnGithub: 'Открыть релизы на GitHub',
    },
    donate: {
      heading: 'Поддержать разработку WorkOn',
      subheading:
        'WorkOn остаётся полностью бесплатным для всех пользователей — без тарифов, ограничений и рекламы. Ваша поддержка напрямую помогает развивать проект.',
      transparencyTitle: 'На что идут пожертвования',
      transparencyItems: [
        'Покупка сертификатов подписи кода (.exe / .dmg), чтобы убрать предупреждения SmartScreen и Gatekeeper',
        'Оплата доменного имени и сопутствующих расходов на инфраструктуру релизов',
        'Время на разработку новых функций, исправление ошибок и поддержку Windows, macOS и Linux',
        'Гарантия того, что WorkOn навсегда останется бесплатным и без рекламы',
      ],
      cisHeading: 'Банковские карты РФ, СБП и СНГ',
      intlHeading: 'Международные карты и PayPal',
      cryptoHeading: 'Криптовалюта',
      copyBtn: 'Копировать',
      copiedBtn: 'Скопировано',
      copyFailedBtn: 'Ошибка',
      thankYou:
        'Спасибо каждому, кто поддерживает WorkOn — донатом, звездой на GitHub или отзывом.',
      starGithub: 'Или просто поставьте звезду на GitHub',
    },
    footer: {
      copyright: 'WorkOn. Бесплатный локальный тайм-трекер.',
      changelog: 'Чейнджлог',
      donate: 'Поддержать',
      github: 'GitHub',
    },
    notFound: {
      code: '404',
      heading: 'Страница не найдена',
      description: 'Похоже, эта ссылка устарела или была введена с опечаткой.',
      backHome: 'Вернуться на главную',
      backHomeEn: 'Go to English home',
    },
  },
  en: {
    langName: 'English',
    switchLangLabel: 'RU',
    switchLangAria: 'Переключить на русский',
    nav: {
      home: 'Home',
      changelog: 'Changelog',
      donate: 'Donate',
      downloadCta: 'Download',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    seo: {
      homeTitle: 'WorkOn — Free Local Desktop Time Tracker',
      homeDesc:
        'Fast, lightweight, and completely free time tracker for Windows, macOS, and Linux. Stored locally in SQLite — no subscriptions, accounts, or ads.',
      changelogTitle: 'Changelog — WorkOn',
      changelogDesc:
        'Release history, new features, and bug fixes for the free desktop time tracker WorkOn on Windows, macOS, and Linux.',
      donateTitle: 'Support Development — WorkOn',
      donateDesc:
        'WorkOn is 100% free and funded solely by user donations. See how you can support ongoing development.',
      notFoundTitle: 'Page Not Found — WorkOn',
    },
    hero: {
      metaFree: 'Completely free',
      metaLocal: 'Local SQLite',
      headlineStart: 'Track your work time.',
      headlineAccent: 'No subscriptions, cloud, or clutter.',
      subtitle:
        'A lightweight desktop utility built for developers and freelancers. Start timing with one click or a global hotkey. Every record stays strictly on your machine.',
      primaryCtaDefault: 'Download WorkOn',
      primaryCtaWindows: 'Download for Windows',
      primaryCtaMac: 'Download for macOS',
      primaryCtaLinux: 'Download for Linux',
      secondaryCta: 'View changelog',
      trustNote: 'Windows 10/11 · macOS 12+ · Linux AppImage · No sign-up',
    },
    demo: {
      windowTitle: 'WorkOn — Interactive Demo',
      statusIdle: 'Ready',
      statusRunning: 'Recording',
      statusPaused: 'Paused',
      taskLabel: 'Current task',
      taskPlaceholder: 'What are you working on?',
      defaultTask: 'Refine settings window layout',
      projectsLabel: 'Project',
      projects: ['Client UI', 'Backend API', 'Code Review', 'Personal'],
      start: 'Start',
      pause: 'Pause',
      resume: 'Resume',
      finish: 'Log',
      reset: 'Reset',
      shortcutHint: 'Press Space to start / pause (outside text input)',
      todayHeading: "Today's sessions",
      todayTotalLabel: 'Today total',
      copyReport: 'Copy report',
      copiedReport: 'Report copied',
      emptySessions: 'No logged sessions yet — start the timer above.',
      sampleSessions: [
        { task: 'Optimize local SQLite queries', project: 'Backend API', seconds: 4920 },
        { task: 'Design global hotkey bindings', project: 'Client UI', seconds: 2700 },
      ],
    },
    features: {
      heading: 'Built like a tool, not a subscription trap',
      subheading:
        'Zero telemetry, zero mandatory accounts, and zero artificial paywalls. Just fast native ergonomics and complete ownership of your data.',
      items: [
        {
          index: '01',
          title: '100% local SQLite storage',
          description:
            'All projects, tasks, and logs live in a single local database file on your disk. WorkOn runs completely offline and never phones home.',
          detailLabel: 'Storage path',
          detailValue: '~/WorkOn/tracker.db',
        },
        {
          index: '02',
          title: 'Minimal footprint',
          description:
            'Respects your battery and RAM — sits quietly in the system tray throughout your entire workday.',
          metric: '< 40 MB',
          metricCaption: 'RAM in background mode',
        },
        {
          index: '03',
          title: 'Keyboard-first workflow',
          description:
            'Start, pause, and switch tasks directly from the system tray without breaking focus.',
          shortcuts: [
            { keys: 'Ctrl + Shift + S', label: 'Start / Pause' },
            { keys: 'Ctrl + Shift + N', label: 'New task' },
          ],
        },
        {
          index: '04',
          title: 'Honestly free forever',
          description:
            'No Pro tiers, no project caps, no ads, and no watermarks. Releases are published openly on GitHub, and development is funded solely by voluntary donations.',
          ctaLabel: 'Support the project',
        },
      ],
    },
    download: {
      heading: 'Download WorkOn',
      subheading: 'Choose the build for your operating system. Ready to run in under a minute.',
      recommendedTag: 'Your OS',
      allReleasesLink: 'Browse all releases on GitHub',
      windows: {
        name: 'Windows',
        meta: 'Windows 10, 11 · 64-bit',
        primaryBtn: 'Installer (.exe)',
        secondaryBtn: 'Portable (.zip)',
      },
      macos: {
        name: 'macOS',
        meta: 'macOS 12+ · Apple Silicon & Intel',
        primaryBtn: 'Download (.dmg)',
      },
      linux: {
        name: 'Linux',
        meta: 'Ubuntu, Fedora, Arch · x86_64',
        primaryBtn: 'Download (.AppImage)',
      },
    },
    faq: {
      heading: 'FAQ & Installation Notes',
      subheading:
        'Answers about privacy, backups, and OS security prompts when installing unsigned freeware builds.',
      items: [
        {
          q: 'Why does Windows SmartScreen warn when opening the .exe installer?',
          a: 'WorkOn is a free independent project without a commercial EV code-signing certificate yet (which costs hundreds of dollars annually). Because of this, SmartScreen may show "Windows protected your PC". Click "More info" → "Run anyway" to proceed. All official builds are published directly on GitHub Releases.',
        },
        {
          q: 'How do I open WorkOn on macOS if Gatekeeper blocks it?',
          a: 'Because builds are not yet notarized with a paid Apple Developer account, macOS may warn about an unidentified developer on first launch. Right-click WorkOn in your Applications folder and select "Open", or approve it under System Settings → Privacy & Security → Open Anyway.',
        },
        {
          q: 'Where is my data stored and how do I back it up?',
          a: 'Your entire project and session history is stored in a single local SQLite file on your machine. You can copy that file at any time for backups or move it to another computer — no cloud account needed.',
        },
        {
          q: 'Does WorkOn require an account or internet connection?',
          a: 'No. WorkOn works 100% offline right out of the box. There is no mandatory sign-up, no advertising, and no background analytics.',
        },
        {
          q: "What's the catch? Why is it completely free?",
          a: 'No catch — WorkOn started as a focused personal utility free from subscription fatigue. It is distributed for free and sustained purely by voluntary user donations.',
        },
      ],
    },
    donateCta: {
      heading: 'Does WorkOn save you time every day?',
      description:
        'There are no investors or paid plans. Voluntary donations fund code-signing certificates, domain costs, and dedicated time for new features.',
      button: 'Support WorkOn',
    },
    changelog: {
      heading: 'Changelog',
      subheading: 'Chronological record of releases, improvements, and bug fixes in WorkOn.',
      filters: {
        all: 'All',
        new: 'New',
        improve: 'Improved',
        fix: 'Fixed',
      },
      latestLabel: 'Current release',
      filesLabel: 'Release files',
      emptyFilter: 'No entries match this category in this release.',
      viewOnGithub: 'View releases on GitHub',
    },
    donate: {
      heading: 'Support WorkOn Development',
      subheading:
        'WorkOn stays 100% free for everyone — no paywalls, limits, or ads. Your contribution directly sustains ongoing releases and improvements.',
      transparencyTitle: 'Where donations go',
      transparencyItems: [
        'Code-signing certificates (.exe / .dmg) to remove Windows SmartScreen and macOS Gatekeeper warnings',
        'Domain registration and release infrastructure upkeep',
        'Development time for new features, bug fixes, and cross-platform testing on Windows, macOS, and Linux',
        'Keeping WorkOn permanently free and ad-free for everyone',
      ],
      cisHeading: 'CIS / Russian Bank Cards & SBP',
      intlHeading: 'International Cards & PayPal',
      cryptoHeading: 'Cryptocurrency',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',
      copyFailedBtn: 'Failed',
      thankYou:
        'Thank you to everyone who supports WorkOn — with a donation, a GitHub star, or helpful feedback.',
      starGithub: 'Or simply leave a star on GitHub',
    },
    footer: {
      copyright: 'WorkOn. Free local desktop time tracker.',
      changelog: 'Changelog',
      donate: 'Donate',
      github: 'GitHub',
    },
    notFound: {
      code: '404',
      heading: 'Page not found',
      description: 'The page you requested may have moved or the URL may contain a typo.',
      backHome: 'Back to Home',
      backHomeEn: 'Go to Russian home',
    },
  },
} as const;

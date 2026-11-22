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
      homeTitle: 'WorkOn — Локальная альтернатива Jira, трекер времени, CRM и счета для ПК',
      homeDesc:
        'Бесплатная offline-first программа на Tauri 2.0 (~15 МБ) для Windows, macOS и Linux: Канбан, Фокус-часы, Гант, Scrum-спринты, Wiki, CRM и мультивалютные счета с экспортом в Excel.',
      changelogTitle: 'История версий — WorkOn',
      changelogDesc:
        'Хронология релизов, новых модулей и исправлений в локальной десктопной платформе WorkOn для Windows, macOS и Linux.',
      donateTitle: 'Поддержать разработку — WorkOn',
      donateDesc:
        'WorkOn распространяется полностью бесплатно без подписок и рекламы. Развитие проекта поддерживается добровольными донатами.',
      notFoundTitle: 'Страница не найдена — WorkOn',
    },
    hero: {
      metaTauri: 'Tauri 2.0 (~15 МБ)',
      metaOffline: '100% Offline-First',
      metaFree: 'Бесплатно · Без подписок',
      headline:
        'Альтернатива Jira, трекер времени, CRM и счета — в одной локальной программе для ПК',
      subtitle:
        '10 настраиваемых модулей в одном быстром окне на Windows, macOS и Linux. Все данные хранятся локально на вашем диске — без облачных аккаунтов, слежки за экраном, телеметрии и ежемесячных тарифов.',
      primaryCtaDefault: 'Скачать для Windows',
      primaryCtaWindows: 'Скачать для Windows',
      primaryCtaMac: 'Скачать для macOS',
      primaryCtaLinux: 'Скачать для Linux',
      secondaryCta: 'Посмотреть возможности',
      trustNote:
        'Windows 10/11 · macOS 12+ · Linux AppImage · Темы Obsidian Dark и Light · Масштаб 70%–150%',
      openFullscreen: 'Открыть в полном размере',
      closeLightbox: 'Закрыть просмотр',
      prevScreen: 'Предыдущий экран',
      nextScreen: 'Следующий экран',
    },
    replaces: {
      heading: 'Заменяет 5+ облачных сервисов одним локальным приложением',
      subheading:
        'Фрилансерам, ИП и небольшим студиям больше не нужно платить за пять отдельных подписок и склеивать данные вручную.',
      colService: 'Вместо чего',
      colInstead: 'Обычно стоит $30–80 / мес',
      colWorkon: 'Внутри WorkOn — 0 ₽ навсегда',
      rows: [
        {
          category: 'Таск-трекер и планирование',
          instead: 'Jira / Linear / Trello',
          workon:
            'Ключи WRK-1, Канбан с WIP-лимитами, таблица с Bulk Actions, Гант с SVG-зависимостями, Scrum-спринты и Burndown',
        },
        {
          category: 'Учёт времени и фокус',
          instead: 'Toggl / Clockify',
          workon:
            'Живой таймер в шапке, Фокус-часы (Pomodoro / TrackTime / FlowTime), умный Idle Detection, почасовой таймлайн 00:00–24:00',
        },
        {
          category: 'База знаний проектов',
          instead: 'Notion / Confluence',
          workon:
            'Встроенный Markdown-редактор с GFM-таблицами, переключением «Редактор / Просмотр» и иерархией папок по проектам',
        },
        {
          category: 'Клиенты и сделки',
          instead: 'Pipedrive / amoCRM',
          workon:
            'CRM с воронкой из 5 этапов, суммой воронки в валютах, Telegram-контактами и привязкой проектов в изолированных воркспейсах',
        },
        {
          category: 'Табели и выставление счетов',
          instead: 'Excel + сервисы инвойсов',
          workon:
            'Мультивалютный биллинг (7 валют), защита от двойного счёта, «Бумажный вид» A4/PDF и настоящий экспорт в Excel (.xlsx)',
        },
      ],
    },
    showcase: {
      heading: 'Все 10 модулей — на реальных экранах программы',
      subheading:
        'Переключайте разделы ниже, чтобы детально изучить возможности и открыть любой скриншот на весь экран.',
      zoomHint: 'Нажмите на скриншот для просмотра в полном размере',
      tabs: [
        {
          id: 'tasks',
          label: 'Канбан, Список и Спринты',
          modulesCount: 'Модули 03 · 04 · 06',
          screenshots: ['kanban', 'sprints'] as const,
          title: 'Управление задачами уровня Jira без тяжеловесности',
          summary:
            'Ключи задач (WRK-2, TP-2, FT-3), типы (Задача / Баг / Фича / Эпик), Story Points, подзадачи с прогресс-барами, комментарии, зависимости и запуск таймера прямо с карточки.',
          blocks: [
            {
              name: 'Канбан-доска',
              points: [
                'Плавное перетаскивание карточек между колонками с настраиваемыми цветами, порядком, WIP-лимитами и финальной колонкой «Готово»',
                'Фильтрация по ключу, типу, приоритету, тегам и просрочке прямо над доской',
                'На карточке видны проект, приоритет, прогресс подзадач, потраченное время или фикс-цена (например 20 000 ₽) и кнопка запуска таймера',
              ],
            },
            {
              name: 'Таблица и Scrum-спринты',
              points: [
                'Компактная таблица задач с сортировкой и нижней панелью Bulk Actions для пакетных правок статуса, приоритета, спринта и тегов',
                'Интерактивный Burndown-график с переключением осей (Часы / Story Points / Задачи) и вертикальной отметкой «Сегодня»',
                'Мастер завершения спринта с переносом незавершённых задач в бэклог или следующий спринт + архив',
              ],
            },
          ],
        },
        {
          id: 'time',
          label: 'Фокус-часы, Таймер и Таймлайн',
          modulesCount: 'Модули 01 · 02',
          screenshots: ['time'] as const,
          title: 'Точный учёт времени без слежки и искусственных лимитов',
          summary:
            'Живой таймер всегда под рукой в верхней панели («Продолжить: задача»), а в модуле «Учёт времени» доступны Фокус-часы с интерактивным циферблатом и почасовой таймлайн.',
          blocks: [
            {
              name: 'Фокус-часы и Idle Detection',
              points: [
                'Режимы TrackTime, FlowTime и Pomodoro: цель задаётся перетягиванием стрелки прямо по циферблату, перерывы логируются отдельно и не попадают в оплачиваемые часы',
                'Умная детекция простоя (Idle Detection): при возвращении к ПК предлагает оставить время, вычесть или вынести в «Обед / Созвон»',
                'Ручной ввод времени без лимитов (хоть 1 ч, хоть 120 ч за недели) с пресетами 1ч / 4ч / 8ч / 24ч / 40ч / 80ч',
              ],
            },
            {
              name: 'Таймлайн 00:00–24:00',
              points: [
                'Интерактивная почасовая сетка в режимах «День» и «Неделя» в духе Google Calendar',
                'Умная раскладка пересекающихся блоков активности и красная линия текущего времени',
                'Создание и редактирование записей кликом прямо по временному слоту',
              ],
            },
          ],
        },
        {
          id: 'gantt',
          label: 'Диаграмма Ганта',
          modulesCount: 'Модуль 05',
          screenshots: ['gantt'] as const,
          title: 'Визуальное планирование сроков и зависимостей',
          summary:
            'Синхронизированная сетка задач и календарной шкалы по дням и месяцам с наглядными связями между задачами и защитой от циклических зависимостей.',
          blocks: [
            {
              name: 'Интерактивная шкала сроков',
              points: [
                'Три масштаба отображения: «Компактно», «Стандарт» и «Подробно», кнопка мгновенного перехода к сегодняшнему дню',
                'Тяните полосу за центр для переноса сроков или за левый/правый край для изменения длительности',
              ],
            },
            {
              name: 'Прогресс и SVG-связи',
              points: [
                'Цветовая кодировка полос по проектам (Разработка WorkOn, Клиентский портал, FinTrack, АвтоСпец) и прогресс внутри полос',
                'Чёткие пунктирные SVG-стрелки зависимостей между связанными задачами и красная линия «Сегодня»',
              ],
            },
          ],
        },
        {
          id: 'finance',
          label: 'Финансы, Счета и Excel',
          modulesCount: 'Модули 08 · 09',
          screenshots: ['finance'] as const,
          title: 'Деньги напрямую привязаны к реальным часам и фикс-задачам',
          summary:
            'На одном экране видны суммы к выставлению, выставленные счета и оплаты клиентов сразу в нескольких валютах — без риска выставить одну работу дважды.',
          blocks: [
            {
              name: 'Мультивалютный биллинг и счета',
              points: [
                'Фильтрация и учёт в 7 валютах: RUB (₽), USD ($), EUR (€), KZT (₸), GBP (£), BYN (Br), USDT (₮)',
                'Индивидуальные часовые ставки по проектам (например 3 000 ₽/ч, 50 $/ч) плюс отдельный блок задач с фиксированной стоимостью и кнопкой «Выставить счёт»',
                'Пресеты реквизитов (ИП, Самозанятый НПД, ООО, SWIFT/IBAN), статусы счёта и переключатель «Бумажный вид» для чистой печати A4/PDF',
              ],
            },
            {
              name: 'Отчёты и настоящий Excel (.xlsx)',
              points: [
                'Чистые табели за сегодня / 7 дней / 30 дней / всё время — перерывы и простой исключаются автоматически',
                'Экспорт в настоящий Excel (.xlsx) с двумя оформленными листами («Табель времени» + «Сводка по проектам»), экспорт отдельного счёта или реестра',
                'Выгрузка в CSV и изолированный режим печати в PDF',
              ],
            },
          ],
        },
        {
          id: 'crm',
          label: 'CRM, Воркспейсы и Wiki',
          modulesCount: 'Модули 07 · 10',
          screenshots: ['crm', 'docs'] as const,
          title: 'Воронка клиентов, изолированные воркспейсы и база знаний',
          summary:
            'Ведите лидов и постоянных клиентов в удобной воронке с Telegram-контактами и храните ТЗ проектов во встроенном Markdown-редакторе.',
          blocks: [
            {
              name: 'CRM и рабочие пространства',
              points: [
                'Воронка из 5 этапов («Новый лид» → «Оценка и ТЗ» → «В работе» → «Постоянный клиент» → «Завершен») и режим «Справочник»',
                'Мультивалютный подсчёт суммы воронки и каждого этапа, кликабельные Telegram-хендлы, телефоны, балансы и привязанные проекты',
                'Переключение изолированных воркспейсов в левом сайдбаре и кнопки «Экспорт / Импорт» резервной копии всегда под рукой',
              ],
            },
            {
              name: 'База знаний / Документы',
              points: [
                'Иерархия папок по проектам (Архитектура и ТЗ, Регламенты, Клиентские требования) и быстрый поиск по документам',
                'Встроенный Markdown-редактор с GFM-таблицами, чек-листами, панелью форматирования и переключением «Редактор / Просмотр»',
              ],
            },
          ],
        },
      ],
    },
    modularity: {
      heading: 'Модульность под ваш рабочий процесс',
      subheading:
        'Не нужен Scrum или CRM? Выключите лишние модули тумблером и расставьте иконки в верхней панели в нужном порядке. Попробуйте настроить панель ниже:',
      previewLabel: 'Активная панель вкладок в шапке WorkOn',
      activeCountSuffix: 'из 10 модулей включено',
      resetBtn: 'Сбросить по умолчанию',
      minWarning: 'Оставьте включённым хотя бы один модуль',
      moveUpAria: 'Переместить левее',
      moveDownAria: 'Переместить правее',
      modules: [
        { id: 'time', name: 'Учёт времени', desc: 'Фокус-часы и Idle Detection' },
        { id: 'timeline', name: 'Таймлайн', desc: 'Почасовая сетка 00:00–24:00' },
        { id: 'kanban', name: 'Канбан', desc: 'Колонки, WIP-лимиты, карточки' },
        { id: 'list', name: 'Список', desc: 'Таблица, фильтры, Bulk Actions' },
        { id: 'gantt', name: 'Гант', desc: 'Сроки и SVG-зависимости' },
        { id: 'sprints', name: 'Бэклог', desc: 'Scrum-спринты и Burndown' },
        { id: 'docs', name: 'Документы', desc: 'Markdown Wiki и GFM-таблицы' },
        { id: 'reports', name: 'Отчёты', desc: 'Табели, Excel (.xlsx) и CSV' },
        { id: 'finance', name: 'Финансы', desc: '7 валют, счета A4/PDF' },
        { id: 'crm', name: 'CRM', desc: 'Воронка, клиенты и балансы' },
      ],
    },
    privacy: {
      heading: 'Приватность, ядро Tauri 2.0 и задел на Self-Hosted',
      subheading:
        'WorkOn создаётся для специалистов, которым нужен полный контроль над инструментами и рабочими данными.',
      cards: [
        {
          index: '01',
          title: '100% локально на диске — без облаков и телеметрии',
          description:
            'Никакой обязательной регистрации, привязки к зарубежным облакам и скрытых скриншотов экрана. Данные хранятся локально (IndexedDB через слой StorageRepository), а полная резервная копия Snapshot v2 (JSON) выгружается и импортируется в один клик прямо из левого сайдбара.',
          metaLeft: 'Резервное копирование',
          metaRight: 'Snapshot v2 (JSON) · Экспорт / Импорт',
        },
        {
          index: '02',
          title: 'Легковесное ядро Tauri 2.0',
          description:
            'Нативный Rust-мост без тяжёлого Electron: вес дистрибутива около 15 МБ, мгновенный запуск, безрамочное окно, масштаб 70%–150% и темы Obsidian Dark и Light.',
          metric: '~15 МБ',
          metricCaption: 'Бинарник Tauri 2.0 · масштаб 70%–150%',
        },
        {
          index: '03',
          title: 'Готовность к Self-Hosted версии для команд',
          description:
            'Слой хранения StorageRepository и формат снимков Snapshot v2 (JSON) изначально спроектированы под будущую self-hosted серверную редакцию для студий и команд. Локальная десктопная версия при этом навсегда останется бесплатной.',
          metaLeft: 'Статус архитектуры',
          metaRight: 'Local-first сейчас · Self-hosted совместимо',
        },
      ],
    },
    download: {
      heading: 'Скачать WorkOn бесплатно',
      subheading:
        'Установите локальную версию под вашу ОС. Никаких триалов, ограничений по проектам и платных тарифов.',
      recommendedTag: 'Ваша ОС',
      allReleasesLink: 'Все релизы и архивы на GitHub',
      windows: {
        name: 'Windows',
        meta: 'Windows 10, 11 · 64-bit (Tauri 2.0)',
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
        'Коротко и по делу: офлайн-работа, перенос базы Snapshot v2, валюты, экспорт и системные предупреждения при установке.',
      items: [
        {
          q: 'Нужен ли интернет или аккаунт для работы в WorkOn?',
          a: 'Нет. Программа полностью offline-first и работает локально на вашем компьютере сразу после установки. В WorkOn нет обязательной регистрации, облачной привязки, рекламы, трекеров телеметрии и скрытых скриншотов экрана.',
        },
        {
          q: 'Как сделать резервную копию и перенести базу на другой компьютер?',
          a: 'Внизу левой панели всегда доступны кнопки «Экспорт» и «Импорт». Они сохраняют и восстанавливают полный снимок Snapshot v2 (JSON) со всеми воркспейсами, проектами, задачами, записями времени, документами, клиентами и счетами.',
        },
        {
          q: 'Какие валюты и форматы экспорта поддерживаются?',
          a: 'В модуле «Финансы» поддерживаются 7 валют: RUB (₽), USD ($), EUR (€), KZT (₸), GBP (£), BYN (Br) и USDT (₮), с почасовыми ставками и задачами с фикс-ценой. Отчёты и счета выгружаются в настоящий Excel (.xlsx — с оформленными листами «Табель времени» и «Сводка по проектам»), CSV и чистый белый A4/PDF через печать.',
        },
        {
          q: 'Почему Windows SmartScreen или macOS Gatekeeper показывают предупреждение при запуске?',
          a: 'WorkOn распространяется бесплатно и пока не подписан дорогостоящим коммерческим EV-сертификатом. В Windows нажмите «Подробнее» → «Выполнить в любом случае». На macOS кликните правой кнопкой по WorkOn в папке «Программы» → «Открыть» (или разрешите запуск в «Системные настройки» → «Конфиденциальность и безопасность»). Все официальные сборки публикуются напрямую в GitHub Releases.',
        },
        {
          q: 'Почему программа полностью бесплатная и на чём она зарабатывает?',
          a: 'В WorkOn нет платных тарифов, урезанных модулей и рекламы. Монетизация строится исключительно на добровольных донатах пользователей, которым программа помогает экономить время и деньги каждый день.',
        },
      ],
    },
    donateCta: {
      heading: 'WorkOn заменил вам платные сервисы?',
      description:
        'У проекта нет инвесторов и подписок. Добровольные донаты помогают оплачивать сертификаты подписи сборок (.exe / .dmg), домен и уделять больше времени развитию новых модулей.',
      button: 'Поддержать проект',
    },
    changelog: {
      heading: 'История изменений',
      subheading: 'Хронология релизов, новых модулей и исправлений в WorkOn.',
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
        'WorkOn распространяется полностью бесплатно — без тарифов, ограничений по проектам и рекламы. Единственная монетизация проекта — добровольные донаты.',
      transparencyTitle: 'На что идут пожертвования',
      transparencyItems: [
        'Покупка сертификатов подписи кода (.exe / .dmg), чтобы убрать предупреждения Windows SmartScreen и macOS Gatekeeper',
        'Оплата доменного имени и сопутствующих расходов на выпуск сборок',
        'Время на разработку новых функций, тестирование на Windows, macOS и Linux и подготовку self-hosted версии',
        'Гарантия того, что локальная версия WorkOn навсегда останется бесплатной и без рекламы',
      ],
      cisHeading: 'Банковские карты РФ, СБП и СНГ',
      intlHeading: 'Международные карты и PayPal',
      cryptoHeading: 'Криптовалюта',
      copyBtn: 'Копировать',
      copiedBtn: 'Скопировано',
      copyFailedBtn: 'Ошибка',
      thankYou:
        'Спасибо каждому, кто поддерживает WorkOn — донатом, звездой на GitHub или обратной связью.',
      starGithub: 'Или просто поставьте звезду на GitHub',
    },
    footer: {
      copyright: 'WorkOn. Бесплатный offline-first инструмент для ПК.',
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
      homeTitle: 'WorkOn — Local Jira Alternative, Time Tracker, CRM & Invoicing for Desktop',
      homeDesc:
        'Free offline-first Tauri 2.0 (~15 MB) desktop app for Windows, macOS, and Linux: Kanban, Focus Clock, Gantt, Scrum sprints, Markdown Wiki, CRM, and multi-currency Excel invoicing.',
      changelogTitle: 'Changelog — WorkOn',
      changelogDesc:
        'Release history, new modules, and fixes for the offline-first WorkOn desktop suite on Windows, macOS, and Linux.',
      donateTitle: 'Support Development — WorkOn',
      donateDesc:
        'WorkOn is 100% free with no subscriptions or ads, sustained purely by voluntary user donations.',
      notFoundTitle: 'Page Not Found — WorkOn',
    },
    hero: {
      metaTauri: 'Tauri 2.0 (~15 MB)',
      metaOffline: '100% Offline-First',
      metaFree: 'Free · No Subscriptions',
      headline:
        'Jira-grade tasks, time tracker, CRM, and invoicing — in one local desktop app',
      subtitle:
        '10 configurable modules inside one fast native window for Windows, macOS, and Linux. Everything stays locally on your disk — no cloud accounts, screen surveillance, telemetry, or monthly fees.',
      primaryCtaDefault: 'Download for Windows',
      primaryCtaWindows: 'Download for Windows',
      primaryCtaMac: 'Download for macOS',
      primaryCtaLinux: 'Download for Linux',
      secondaryCta: 'Explore features',
      trustNote:
        'Windows 10/11 · macOS 12+ · Linux AppImage · Obsidian Dark & Light · 70%–150% UI Scale',
      openFullscreen: 'View full size',
      closeLightbox: 'Close preview',
      prevScreen: 'Previous screen',
      nextScreen: 'Next screen',
    },
    replaces: {
      heading: 'Replaces 5+ cloud subscriptions with one local binary',
      subheading:
        'Freelancers, solo founders, and small studios no longer need to pay for five separate SaaS tools and stitch data together by hand.',
      colService: 'Category',
      colInstead: 'Typically $30–80 / mo',
      colWorkon: 'Inside WorkOn — $0 forever',
      rows: [
        {
          category: 'Task tracking & planning',
          instead: 'Jira / Linear / Trello',
          workon:
            'WRK-1 keys, Kanban with WIP limits, table with Bulk Actions, Gantt with SVG dependencies, Scrum sprints & Burndown',
        },
        {
          category: 'Time tracking & focus',
          instead: 'Toggl / Clockify',
          workon:
            'Live header timer, Focus Clock (Pomodoro / TrackTime / FlowTime), smart Idle Detection, hourly 00:00–24:00 timeline',
        },
        {
          category: 'Project documentation',
          instead: 'Notion / Confluence',
          workon:
            'Built-in Markdown editor with GFM tables, Edit/Preview toggle, and project folder hierarchy',
        },
        {
          category: 'Clients & deals',
          instead: 'Pipedrive / HubSpot',
          workon:
            '5-stage CRM pipeline, multi-currency totals, Telegram handles, and project linking across isolated Workspaces',
        },
        {
          category: 'Timesheets & invoicing',
          instead: 'Excel + invoice tools',
          workon:
            '7-currency billing, double-billing guard, Paper View A4/PDF print, and native multi-sheet Excel (.xlsx) export',
        },
      ],
    },
    showcase: {
      heading: 'All 10 modules — real screens from the app',
      subheading:
        'Switch workflows below to explore the exact capabilities and inspect any screen at full resolution.',
      zoomHint: 'Click any screenshot to inspect full resolution',
      tabs: [
        {
          id: 'tasks',
          label: 'Kanban, List & Sprints',
          modulesCount: 'Modules 03 · 04 · 06',
          screenshots: ['kanban', 'sprints'] as const,
          title: 'Jira-level task control without enterprise bloat',
          summary:
            'Structured issue keys (WRK-2, TP-2, FT-3), types (Task / Bug / Feature / Epic), Story Points, subtask progress bars, comments, dependencies, and 1-click timer launch.',
          blocks: [
            {
              name: 'Kanban Board',
              points: [
                'Smooth pointer drag-and-drop across customizable columns with custom colors, order, WIP limits, and Done column',
                'Instant filters by key, type, priority, tags, and overdue state right above the board',
                'Cards surface project, priority, subtask progress, tracked time or fixed price, and instant Play button',
              ],
            },
            {
              name: 'List View & Scrum Sprints',
              points: [
                'Dense sortable table with bottom Bulk Actions bar to batch-update status, priority, sprint, and tags',
                'Interactive Burndown chart switching between Hours, Story Points, and Tasks with a Today marker',
                'Sprint completion wizard moving unfinished items to backlog or next sprint + sprint archive',
              ],
            },
          ],
        },
        {
          id: 'time',
          label: 'Focus Clock, Timer & Timeline',
          modulesCount: 'Modules 01 · 02',
          screenshots: ['time'] as const,
          title: 'Accurate time logs without surveillance or artificial caps',
          summary:
            'Keep a live timer running from the app header, pace deep work with the interactive Focus Clock dial, and review your day on an hourly grid.',
          blocks: [
            {
              name: 'Focus Clock & Idle Detection',
              points: [
                'TrackTime, FlowTime, and Pomodoro dial: drag the hand around the clock to set targets; breaks are logged separately and excluded from billable hours',
                'Smart Idle Detection prompts you on return to keep, subtract, or split away time into a separate entry',
                'Unlimited manual logging (1h to 120h+ across weeks) with quick 1h / 4h / 8h / 24h / 40h / 80h presets',
              ],
            },
            {
              name: 'Timeline 00:00–24:00',
              points: [
                'Interactive Day and Week hourly calendar grid with overlapping block layout',
                'Current-time red indicator line, smooth scrolling, and click-to-create/edit time slots',
              ],
            },
          ],
        },
        {
          id: 'gantt',
          label: 'Gantt Chart',
          modulesCount: 'Module 05',
          screenshots: ['gantt'] as const,
          title: 'Visual scheduling with real progress and dependencies',
          summary:
            'A synchronized task list and multi-month calendar grid with circular dependency protection lets you spot bottlenecks immediately.',
          blocks: [
            {
              name: 'Interactive Schedule Scale',
              points: [
                'Three zoom levels: Compact, Standard, and Detailed, plus quick jump to Today',
                'Drag task bars by center to reschedule or drag left/right edges to adjust duration',
              ],
            },
            {
              name: 'Progress & SVG Dependencies',
              points: [
                'Color-coded project bars with live completion progress right inside each bar',
                'Crisp dashed SVG dependency arrows linking tasks and a vertical Today marker',
              ],
            },
          ],
        },
        {
          id: 'finance',
          label: 'Finance, Invoices & Excel',
          modulesCount: 'Modules 08 · 09',
          screenshots: ['finance'] as const,
          title: 'Billing tied directly to tracked work and fixed-price tasks',
          summary:
            'See unbilled totals, invoiced amounts, and paid balances across 7 currencies on one dashboard with built-in double-billing protection.',
          blocks: [
            {
              name: 'Multi-Currency Billing & Invoices',
              points: [
                'Supports RUB (₽), USD ($), EUR (€), KZT (₸), GBP (£), BYN (Br), and USDT (₮) across hourly rates and fixed-price tasks',
                'Per-project hourly rate management plus a dedicated Fixed-Price Tasks list with 1-click "Create Invoice"',
                'Legal presets (Sole Prop, LLC, SWIFT/IBAN), invoice lifecycle statuses, and Paper View toggle for white A4/PDF printing',
              ],
            },
            {
              name: 'Reports & Native Excel (.xlsx)',
              points: [
                'Clean work timesheets for Today / 7d / 30d / All Time — breaks and idle intervals excluded automatically',
                'Native Excel (.xlsx) export with two formatted sheets (Timesheet + Project Summary), single-invoice export, or full ledger export',
                'CSV export and isolated print/PDF layout',
              ],
            },
          ],
        },
        {
          id: 'crm',
          label: 'CRM, Workspaces & Wiki',
          modulesCount: 'Modules 07 · 10',
          screenshots: ['crm', 'docs'] as const,
          title: 'Client pipeline, isolated workspaces, and project wiki',
          summary:
            'Track leads and retainers in a 5-stage pipeline with Telegram contacts while keeping Markdown specs organized right beside your tasks.',
          blocks: [
            {
              name: 'CRM & Isolated Workspaces',
              points: [
                '5-stage deal pipeline (New Lead → Scoping → Active → Loyal Client → Archived) plus Directory table view',
                'Multi-currency pipeline totals, clickable Telegram handles, phone numbers, client balances, and linked projects',
                'Instant Workspace switcher plus 1-click Export / Import backup buttons in the left sidebar',
              ],
            },
            {
              name: 'Docs & Project Wiki',
              points: [
                'Folder hierarchy by project with instant document search',
                'Built-in Markdown editor with GFM tables, checklists, formatting toolbar, and Edit/Preview switcher',
              ],
            },
          ],
        },
      ],
    },
    modularity: {
      heading: 'Modular down to every single tab',
      subheading:
        'Do not need Scrum or CRM? Toggle unused modules off and reorder tabs in the top bar to match your workflow. Try configuring it below:',
      previewLabel: 'Active tab bar inside WorkOn header',
      activeCountSuffix: 'of 10 modules enabled',
      resetBtn: 'Reset defaults',
      minWarning: 'Keep at least one module enabled',
      moveUpAria: 'Move earlier',
      moveDownAria: 'Move later',
      modules: [
        { id: 'time', name: 'Time', desc: 'Focus Clock & Idle Detection' },
        { id: 'timeline', name: 'Timeline', desc: 'Hourly 00:00–24:00 grid' },
        { id: 'kanban', name: 'Kanban', desc: 'Columns, WIP limits, cards' },
        { id: 'list', name: 'List', desc: 'Table, filters, Bulk Actions' },
        { id: 'gantt', name: 'Gantt', desc: 'Dates & SVG dependencies' },
        { id: 'sprints', name: 'Backlog', desc: 'Scrum sprints & Burndown' },
        { id: 'docs', name: 'Docs', desc: 'Markdown Wiki & GFM tables' },
        { id: 'reports', name: 'Reports', desc: 'Timesheets, Excel & CSV' },
        { id: 'finance', name: 'Finance', desc: '7 currencies, A4/PDF invoices' },
        { id: 'crm', name: 'CRM', desc: 'Pipeline, clients & balances' },
      ],
    },
    privacy: {
      heading: 'Privacy, Tauri 2.0 speed, and a self-hosted path ahead',
      subheading:
        'Built for professionals who expect full ownership of both their tooling and their business records.',
      cards: [
        {
          index: '01',
          title: '100% local on disk — zero cloud or telemetry',
          description:
            'No mandatory accounts, no cloud lock-in, and zero hidden screen captures. Data stays locally (IndexedDB via StorageRepository), and full Snapshot v2 (JSON) backups export or restore in one click from the sidebar.',
          metaLeft: 'Backup format',
          metaRight: 'Snapshot v2 (JSON) · Export / Import',
        },
        {
          index: '02',
          title: 'Lightweight Tauri 2.0 core',
          description:
            'Native Rust bridge without heavy Electron bloat: ~15 MB desktop binary, instant launch, frameless window, 70%–150% UI scale, and both Obsidian Dark and Light themes.',
          metric: '~15 MB',
          metricCaption: 'Tauri 2.0 binary · 70%–150% UI scale',
        },
        {
          index: '03',
          title: 'Architected for future Self-Hosted teams',
          description:
            'The StorageRepository layer and Snapshot v2 (JSON) format are already designed for an upcoming self-hosted team server edition — while the local desktop app stays free forever.',
          metaLeft: 'Roadmap posture',
          metaRight: 'Local-first today · Self-hosted compatible',
        },
      ],
    },
    download: {
      heading: 'Download WorkOn for free',
      subheading:
        'Install the local desktop build for your OS. No trials, no project caps, and no paid tiers.',
      recommendedTag: 'Your OS',
      allReleasesLink: 'Browse all releases on GitHub',
      windows: {
        name: 'Windows',
        meta: 'Windows 10, 11 · 64-bit (Tauri 2.0)',
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
        'Straight answers on offline usage, Snapshot v2 backups, currencies, exports, and unsigned installer prompts.',
      items: [
        {
          q: 'Does WorkOn require an account or internet connection?',
          a: 'No. WorkOn is 100% offline-first and works locally right after installation. There is no mandatory sign-up, cloud lock-in, advertising, telemetry, or hidden screenshot tracking.',
        },
        {
          q: 'How do I back up or move my database to another computer?',
          a: 'Use the Export and Import buttons at the bottom of the left sidebar anytime. WorkOn saves and restores a complete Snapshot v2 (JSON) archive containing all workspaces, projects, tasks, time entries, docs, clients, and invoices.',
        },
        {
          q: 'Which currencies and export formats are supported?',
          a: 'Finance supports 7 currencies: RUB (₽), USD ($), EUR (€), KZT (₸), GBP (£), BYN (Br), and USDT (₮), for both hourly rates and fixed-price tasks. Reports and invoices export to native Excel (.xlsx with formatted Timesheet + Project Summary sheets), CSV, and clean white A4/PDF print.',
        },
        {
          q: 'Why do Windows SmartScreen or macOS Gatekeeper warn on first launch?',
          a: 'WorkOn is a free independent project without a commercial EV code-signing certificate yet. On Windows, click "More info" → "Run anyway". On macOS, right-click WorkOn in Applications → "Open" (or allow it in System Settings → Privacy & Security). All official builds are published on GitHub Releases.',
        },
        {
          q: "What's the catch? Why is it completely free?",
          a: 'There is no catch — no paywalls, locked modules, or ads. Development is funded solely through voluntary donations from people who find WorkOn genuinely useful.',
        },
      ],
    },
    donateCta: {
      heading: 'Did WorkOn replace your paid tools?',
      description:
        'There are no investors or subscriptions. Voluntary donations help fund code-signing certificates (.exe / .dmg), domain costs, and dedicated development time.',
      button: 'Support WorkOn',
    },
    changelog: {
      heading: 'Changelog',
      subheading: 'Chronological record of releases, new modules, and fixes in WorkOn.',
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
        'WorkOn is 100% free — no paid tiers, project limits, or ads. Voluntary donations are the sole way the project is funded.',
      transparencyTitle: 'Where donations go',
      transparencyItems: [
        'Code-signing certificates (.exe / .dmg) to remove Windows SmartScreen and macOS Gatekeeper warnings',
        'Domain registration and release infrastructure upkeep',
        'Development time for new modules, cross-platform testing, and the upcoming self-hosted server edition',
        'Keeping the local WorkOn desktop app permanently free and ad-free',
      ],
      cisHeading: 'CIS / Russian Bank Cards & SBP',
      intlHeading: 'International Cards & PayPal',
      cryptoHeading: 'Cryptocurrency',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',
      copyFailedBtn: 'Failed',
      thankYou:
        'Thank you to everyone supporting WorkOn — with a donation, a GitHub star, or feedback.',
      starGithub: 'Or simply leave a star on GitHub',
    },
    footer: {
      copyright: 'WorkOn. Free offline-first desktop suite.',
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

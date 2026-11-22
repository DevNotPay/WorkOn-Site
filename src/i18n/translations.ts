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
        'Бесплатная offline-first программа на Tauri для Windows, macOS и Linux: Канбан, Гант, Scrum-спринты, учёт времени, Wiki, CRM и мультивалютные счета с экспортом в Excel.',
      changelogTitle: 'История версий — WorkOn',
      changelogDesc:
        'Хронология релизов, новых модулей и исправлений в локальной десктопной платформе WorkOn для Windows, macOS и Linux.',
      donateTitle: 'Поддержать разработку — WorkOn',
      donateDesc:
        'WorkOn распространяется полностью бесплатно без подписок и рекламы. Развитие проекта поддерживается добровольными донатами.',
      notFoundTitle: 'Страница не найдена — WorkOn',
    },
    hero: {
      metaTauri: 'Tauri Desktop',
      metaOffline: '100% Offline-First',
      metaFree: 'Бесплатно · Без подписок',
      headline:
        'Альтернатива Jira, трекер времени, CRM и счета — в одной локальной программе для ПК',
      subtitle:
        '10 настраиваемых модулей в одном быстром окне на Windows, macOS и Linux. Все данные хранятся на вашем диске — без облачных аккаунтов, слежки за экраном, телеметрии и ежемесячных тарифов.',
      primaryCtaDefault: 'Скачать для Windows',
      primaryCtaWindows: 'Скачать для Windows',
      primaryCtaMac: 'Скачать для macOS',
      primaryCtaLinux: 'Скачать для Linux',
      secondaryCta: 'Посмотреть возможности',
      trustNote: 'Windows 10/11 · macOS 12+ · Linux AppImage · Темы Obsidian Dark и Light · Масштаб 70%–150%',
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
          workon: 'Ключи PROJ-1, Канбан с WIP-лимитами, таблица с Bulk Actions, Гант с зависимостями, Scrum-спринты и Burndown',
        },
        {
          category: 'Учёт времени и фокус',
          instead: 'Toggl / Clockify',
          workon: 'Живой таймер, Фокус-часы (Pomodoro / FlowTime), умный Idle Detection, почасовой таймлайн 00:00–24:00',
        },
        {
          category: 'База знаний проектов',
          instead: 'Notion / Confluence',
          workon: 'Встроенный Markdown-редактор с GFM-таблицами, предпросмотром и иерархией папок по проектам',
        },
        {
          category: 'Клиенты и сделки',
          instead: 'Pipedrive / amoCRM',
          workon: 'CRM с воронкой лидов, контактами (включая Telegram), балансами и привязкой проектов в изолированных воркспейсах',
        },
        {
          category: 'Табели и выставление счетов',
          instead: 'Excel + сервисы инвойсов',
          workon: 'Мультивалютный биллинг (7 валют), защита от двойного счёта, «Бумажный вид» A4/PDF и настоящий экспорт в Excel (.xlsx)',
        },
      ],
    },
    showcase: {
      heading: 'Все 10 модулей — под реальный рабочий процесс',
      subheading:
        'Переключайте сценарии ниже, чтобы посмотреть, как устроены ключевые разделы программы изнутри.',
      tabs: [
        {
          id: 'tasks',
          label: 'Канбан, Список и Спринты',
          modulesCount: 'Модули 03 · 04 · 06',
          title: 'Управление задачами уровня Jira без тяжеловесности',
          summary:
            'Ключи задач (WRK-12), типы (Задача / Баг / Фича / Эпик), Story Points, подзадачи, комментарии, зависимости и быстрый запуск таймера прямо с карточки.',
          blocks: [
            {
              name: 'Канбан-доска',
              points: [
                'Перетаскивание карточек (включая захват за заголовок) и настройка своих колонок, цветов и порядка',
                'WIP-лимиты на колонки и отметка финального статуса «Готово»',
                'Теги в 1 клик из истории воркспейса, флаг блокировки, дедлайн, фикс-цена или накопленное время',
              ],
            },
            {
              name: 'Таблица и массовые действия',
              points: [
                'Компактная таблица с сортировкой и фильтрами по статусу, типу, приоритету, биллингу, спринту, тегу и просрочке',
                'Панель Bulk Actions снизу: пакетная смена статуса, приоритета, типа, спринта, тегов или удаление',
                'Завершение спринта с автопереносом незавершённых задач + архив и Burndown-график',
              ],
            },
          ],
        },
        {
          id: 'time',
          label: 'Таймер, Фокус и Таймлайн',
          modulesCount: 'Модули 01 · 02',
          title: 'Точный учёт времени без слежки и искусственных лимитов',
          summary:
            'Запускайте таймер из шапки или карточки задачи, работайте интервалами в Фокус-часах и проверяйте день на почасовой сетке.',
          blocks: [
            {
              name: 'Учёт времени и Фокус-часы',
              points: [
                'Встроенные режимы Pomodoro, TrackTime и FlowTime с визуальным циферблатом — перерывы логируются отдельно и не попадают в оплачиваемые часы',
                'Умная детекция простоя (Idle Detection): при возвращении к ПК можно оставить время, вычесть или вынести в «Обед / Созвон»',
                'Ручной ввод без ограничений (хоть 1 ч, хоть 120 ч за несколько недель) с быстрыми пресетами 1ч / 4ч / 8ч / 24ч / 40ч / 80ч',
              ],
            },
            {
              name: 'Таймлайн 00:00–24:00',
              points: [
                'Интерактивная почасовая сетка в режимах «День» и «Неделя» в духе Google Calendar',
                'Умная раскладка пересекающихся блоков активности и красная линия текущего времени',
                'Создание и правка записей одним кликом по нужному временному слоту',
              ],
            },
          ],
        },
        {
          id: 'gantt',
          label: 'Диаграмма Ганта',
          modulesCount: 'Модуль 05',
          title: 'Визуальное планирование сроков и зависимостей',
          summary:
            'Синхронизированная сетка задач и календарной шкалы позволяет сразу видеть узкие места и двигать сроки мышью.',
          blocks: [
            {
              name: 'Интерактивная шкала сроков',
              points: [
                'Три масштаба отображения календаря: «Компактно», «Стандарт» и «Подробно»',
                'Сдвиг сроков перетаскиванием всей полосы задачи и точная подгонка длительности за левый или правый край',
              ],
            },
            {
              name: 'Прогресс и связи',
              points: [
                'Отображение фактического прогресса выполнения прямо внутри полосы задачи',
                'Наглядные SVG-стрелки зависимостей между связанными задачами проекта',
              ],
            },
          ],
        },
        {
          id: 'finance',
          label: 'Финансы, Счета и Excel',
          modulesCount: 'Модули 08 · 09',
          title: 'Деньги напрямую привязаны к реальным часам и задачам',
          summary:
            'Выставляйте счета из невыставленных часов и фикс-задач в 7 валютах, не рискуя выставить одну работу дважды.',
          blocks: [
            {
              name: 'Мультивалютный биллинг и счета',
              points: [
                '7 валют: RUB (₽), USD ($), EUR (€), KZT (₸), GBP (£), BYN (Br), USDT (₮) + почасовые ставки и фикс-цена на задачи',
                'Учёт выставленных и невыставленных часов, статусы счёта (Черновик → Отправлен → Оплачен / Отменён)',
                'Пресеты реквизитов (ИП, Самозанятый НПД, ООО/Студия, SWIFT/IBAN) и предпросмотр с переключателем «Бумажный вид» в A4/PDF',
              ],
            },
            {
              name: 'Отчёты и настоящий Excel (.xlsx)',
              points: [
                'Чистые табели за сегодня / 7 дней / 30 дней / всё время — перерывы и простой исключаются автоматически',
                'Экспорт в .xlsx с двумя оформленными листами («Табель времени» + «Сводка по проектам»), экспорт отдельного счёта или реестра',
                'Выгрузка в CSV и изолированный режим печати в PDF без лишних элементов интерфейса',
              ],
            },
          ],
        },
        {
          id: 'crm',
          label: 'CRM, Воркспейсы и Wiki',
          modulesCount: 'Модули 07 · 10',
          title: 'Клиенты, сделки и документация проектов рядом с задачами',
          summary:
            'Разделяйте личные проекты, фриланс и основную работу по изолированным пространствам и держите ТЗ прямо в программе.',
          blocks: [
            {
              name: 'CRM и рабочие пространства',
              points: [
                'База клиентов и воронка лидов, контакты (включая Telegram), заметки, баланс и история расчётов',
                'Привязка и отвязка новых и существующих проектов к клиентам в пару кликов',
                'Несколько изолированных воркспейсов («Фриланс», «Основная работа», «Личное») с мгновенным переключением',
              ],
            },
            {
              name: 'Документы и Вики (Docs)',
              points: [
                'Встроенный Markdown-редактор с поддержкой GFM-таблиц, списков и режима предпросмотра',
                'Иерархия папок по проектам для хранения технических заданий, заметок созвонов и ссылок',
              ],
            },
          ],
        },
      ],
    },
    modularity: {
      heading: 'Модульность под ваш рабочий процесс',
      subheading:
        'Не нужен Scrum или CRM? Выключите лишние модули тумблером и расставьте вкладки в удобном порядке. Попробуйте настроить панель ниже:',
      previewLabel: 'Активная панель вкладок в шапке WorkOn',
      activeCountSuffix: 'из 10 модулей включено',
      resetBtn: 'Сбросить по умолчанию',
      minWarning: 'Оставьте включённым хотя бы один модуль',
      moveUpAria: 'Переместить выше',
      moveDownAria: 'Переместить ниже',
      modules: [
        { id: 'kanban', name: 'Канбан', desc: 'Колонки, WIP-лимиты, карточки' },
        { id: 'list', name: 'Список', desc: 'Таблица, фильтры, Bulk Actions' },
        { id: 'timeline', name: 'Таймлайн', desc: 'Почасовая сетка 00:00–24:00' },
        { id: 'gantt', name: 'Гант', desc: 'Сроки и SVG-зависимости' },
        { id: 'sprints', name: 'Спринты', desc: 'Бэклог, Scrum и Burndown' },
        { id: 'time', name: 'Время', desc: 'Фокус-часы и Idle Detection' },
        { id: 'docs', name: 'Документы', desc: 'Markdown Wiki и GFM-таблицы' },
        { id: 'reports', name: 'Отчёты', desc: 'Табели, Excel (.xlsx) и CSV' },
        { id: 'finance', name: 'Финансы', desc: '7 валют, счета A4/PDF' },
        { id: 'crm', name: 'CRM', desc: 'Клиенты, сделки и балансы' },
      ],
    },
    privacy: {
      heading: 'Приватность, нативная скорость и задел на будущее',
      subheading:
        'WorkOn создаётся для людей, которым нужен полный контроль над инструментами и рабочими данными.',
      cards: [
        {
          index: '01',
          title: '100% локально и приватно',
          description:
            'Никакой обязательной регистрации, привязки к зарубежным облакам, телеметрии и скрытых скриншотов экрана. Вся база лежит на вашем компьютере и в любой момент выгружается или восстанавливается целиком через JSON-бэкап.',
          metaLeft: 'Резервное копирование',
          metaRight: 'Полный экспорт / импорт JSON',
        },
        {
          index: '02',
          title: 'Нативный движок Tauri',
          description:
            'Малый вес дистрибутива, мгновенный запуск без тяжёлого Electron, безрамочное окно, масштабирование интерфейса 70%–150% и две полноценные темы: Obsidian Dark и Light.',
          metric: '70%–150%',
          metricCaption: 'Масштаб интерфейса · Tauri',
        },
        {
          index: '03',
          title: 'Готовность к Self-Hosted версии для команд',
          description:
            'Внутренняя архитектура WorkOn уже спроектирована так, чтобы в будущем развернуть собственную self-hosted серверную версию на инфраструктуре компании. Локальная десктопная версия при этом навсегда останется бесплатной.',
          metaLeft: 'Статус архитектуры',
          metaRight: 'Local-first сейчас · Self-hosted в планах',
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
        meta: 'Windows 10, 11 · 64-bit (Tauri)',
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
        'Коротко и по делу: офлайн-работа, перенос базы, валюты, экспорт и системные предупреждения при установке.',
      items: [
        {
          q: 'Нужен ли интернет или аккаунт для работы в WorkOn?',
          a: 'Нет. Программа полностью offline-first и работает локально на вашем компьютере сразу после установки. В WorkOn нет обязательной регистрации, облачной привязки, рекламы, трекеров телеметрии и скрытых скриншотов экрана.',
        },
        {
          q: 'Как сделать резервную копию и перенести базу на другой компьютер?',
          a: 'В настройках WorkOn встроен полный экспорт и импорт резервной копии базы данных в формате JSON — включая воркспейсы, проекты, задачи, записи времени, документы, клиентов и счета. Достаточно сохранить JSON-файл и импортировать его на новом ПК.',
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
          a: 'В WorkOn нет платных тарифов, урезанных функций и рекламы. Монетизация строится исключительно на добровольных донатах пользователей, которым программа помогает экономить время и деньги каждый день.',
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
        'Free offline-first Tauri desktop app for Windows, macOS, and Linux: Kanban, Gantt, Scrum sprints, time tracking, Markdown Wiki, CRM, and multi-currency Excel invoicing.',
      changelogTitle: 'Changelog — WorkOn',
      changelogDesc:
        'Release history, new modules, and fixes for the offline-first WorkOn desktop suite on Windows, macOS, and Linux.',
      donateTitle: 'Support Development — WorkOn',
      donateDesc:
        'WorkOn is 100% free with no subscriptions or ads, sustained purely by voluntary user donations.',
      notFoundTitle: 'Page Not Found — WorkOn',
    },
    hero: {
      metaTauri: 'Tauri Desktop',
      metaOffline: '100% Offline-First',
      metaFree: 'Free · No Subscriptions',
      headline:
        'Jira-grade tasks, time tracker, CRM, and invoicing — in one local desktop app',
      subtitle:
        '10 configurable modules inside one fast native window for Windows, macOS, and Linux. Everything stays on your local disk — no cloud accounts, screen surveillance, telemetry, or monthly fees.',
      primaryCtaDefault: 'Download for Windows',
      primaryCtaWindows: 'Download for Windows',
      primaryCtaMac: 'Download for macOS',
      primaryCtaLinux: 'Download for Linux',
      secondaryCta: 'Explore features',
      trustNote: 'Windows 10/11 · macOS 12+ · Linux AppImage · Obsidian Dark & Light · 70%–150% UI Scale',
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
          workon: 'PROJ-1 keys, Kanban with WIP limits, table with Bulk Actions, Gantt with SVG dependencies, Scrum sprints & Burndown',
        },
        {
          category: 'Time tracking & focus',
          instead: 'Toggl / Clockify',
          workon: 'Live timer, Focus Clock (Pomodoro / FlowTime), smart Idle Detection, hourly 00:00–24:00 Day/Week timeline',
        },
        {
          category: 'Project documentation',
          instead: 'Notion / Confluence',
          workon: 'Built-in Markdown editor with GFM tables, live preview, and project folder hierarchy',
        },
        {
          category: 'Clients & deals',
          instead: 'Pipedrive / HubSpot',
          workon: 'CRM pipeline, Telegram & client contacts, balances, project linking across isolated Workspaces',
        },
        {
          category: 'Timesheets & invoicing',
          instead: 'Excel + invoice tools',
          workon: '7-currency billing, double-billing guard, Paper View A4/PDF print, and native multi-sheet Excel (.xlsx) export',
        },
      ],
    },
    showcase: {
      heading: 'All 10 modules — engineered for real workflows',
      subheading:
        'Switch between the core scenarios below to inspect what ships inside WorkOn out of the box.',
      tabs: [
        {
          id: 'tasks',
          label: 'Kanban, List & Sprints',
          modulesCount: 'Modules 03 · 04 · 06',
          title: 'Jira-level task control without enterprise bloat',
          summary:
            'Structured issue keys (WRK-12), types (Task / Bug / Feature / Epic), Story Points, subtasks, comments, dependencies, and 1-click timer launch.',
          blocks: [
            {
              name: 'Kanban Board',
              points: [
                'Smooth drag-and-drop across customizable columns with custom names, colors, order, WIP limits, and Done state',
                'Cards surface key, type, priority, tags, subtask progress, due date, fixed price or tracked hours, and instant Play button',
                '1-click tags from workspace history, blocker flag, epic/sprint binding, and activity log',
              ],
            },
            {
              name: 'List View & Scrum Sprints',
              points: [
                'Dense sortable table with filters by status, type, priority, billing model, sprint, tag, and overdue state',
                'Bottom Bulk Actions bar to batch-update status, priority, type, sprint, tags, or delete tasks',
                'Sprint completion wizard moving unfinished items automatically, sprint archive, and Burndown chart',
              ],
            },
          ],
        },
        {
          id: 'time',
          label: 'Timer, Focus & Timeline',
          modulesCount: 'Modules 01 · 02',
          title: 'Accurate time logs without surveillance or artificial caps',
          summary:
            'Run timers from the app header or task card, pace deep work with Focus Clock, and inspect your day on an hourly grid.',
          blocks: [
            {
              name: 'Time Tracking & Focus Clock',
              points: [
                'Built-in Pomodoro, TrackTime, and FlowTime dial — breaks are logged separately and excluded from billable hours',
                'Smart Idle Detection prompts you on return to keep, subtract, or split away time into a separate entry',
                'Unlimited manual logging (1h to 120h+ across weeks) with date picker and quick 1h / 4h / 8h / 24h / 40h / 80h presets',
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
          title: 'Visual scheduling with real progress and dependencies',
          summary:
            'A synchronized task list and calendar scale lets you spot schedule collisions and adjust dates directly.',
          blocks: [
            {
              name: 'Interactive Schedule Scale',
              points: [
                'Three zoom levels: Compact, Standard, and Detailed',
                'Drag task bars across dates or resize left and right edges to adjust duration',
              ],
            },
            {
              name: 'Progress & SVG Dependencies',
              points: [
                'Displays actual completion progress right inside each timeline bar',
                'Renders clear SVG dependency arrows connecting linked tasks',
              ],
            },
          ],
        },
        {
          id: 'finance',
          label: 'Finance, Invoices & Excel',
          modulesCount: 'Modules 08 · 09',
          title: 'Billing tied directly to tracked work and fixed tasks',
          summary:
            'Generate invoices straight from unbilled hours and fixed-price items across 7 currencies with built-in double-billing protection.',
          blocks: [
            {
              name: 'Multi-Currency Billing & Invoices',
              points: [
                'Supports RUB (₽), USD ($), EUR (€), KZT (₸), GBP (£), BYN (Br), and USDT (₮) for hourly rates and fixed-price tasks',
                'Tracks billed vs unbilled hours with invoice lifecycle (Draft → Sent → Paid / Canceled) and legal presets (Sole Prop, LLC, SWIFT/IBAN)',
                'Dark-mode invoice preview with instant Paper View toggle for crisp white A4/PDF printing',
              ],
            },
            {
              name: 'Reports & Native Excel (.xlsx)',
              points: [
                'Clean work timesheets for Today / 7d / 30d / All Time — breaks and idle intervals excluded automatically',
                'Real Excel (.xlsx) export with two formatted sheets (Timesheet + Project Summary), single-invoice export, or full ledger export',
                'CSV export and isolated print/PDF layout',
              ],
            },
          ],
        },
        {
          id: 'crm',
          label: 'CRM, Workspaces & Wiki',
          modulesCount: 'Modules 07 · 10',
          title: 'Clients, deals, and project specs next to your tasks',
          summary:
            'Separate Freelance, Day Job, and Personal work into isolated Workspaces while keeping Markdown specs inside each project.',
          blocks: [
            {
              name: 'CRM & Isolated Workspaces',
              points: [
                'Client directory and lead pipeline with Telegram contacts, notes, balances, and history',
                'Link or unlink new and existing projects to clients at any time',
                'Multiple isolated Workspaces with instant switching from the left sidebar',
              ],
            },
            {
              name: 'Docs & Project Wiki',
              points: [
                'Built-in Markdown editor with GFM tables, checklists, and live preview',
                'Folder hierarchy organized by project for specs, meeting notes, and references',
              ],
            },
          ],
        },
      ],
    },
    modularity: {
      heading: 'Modular down to every single tab',
      subheading:
        'Do not need Scrum or CRM? Toggle unused modules off and reorder tabs to match your workflow. Try configuring the bar below:',
      previewLabel: 'Active tab bar inside WorkOn header',
      activeCountSuffix: 'of 10 modules enabled',
      resetBtn: 'Reset defaults',
      minWarning: 'Keep at least one module enabled',
      moveUpAria: 'Move earlier',
      moveDownAria: 'Move later',
      modules: [
        { id: 'kanban', name: 'Kanban', desc: 'Columns, WIP limits, cards' },
        { id: 'list', name: 'List', desc: 'Table, filters, Bulk Actions' },
        { id: 'timeline', name: 'Timeline', desc: 'Hourly 00:00–24:00 grid' },
        { id: 'gantt', name: 'Gantt', desc: 'Dates & SVG dependencies' },
        { id: 'sprints', name: 'Sprints', desc: 'Backlog, Scrum & Burndown' },
        { id: 'time', name: 'Time', desc: 'Focus Clock & Idle Detection' },
        { id: 'docs', name: 'Docs', desc: 'Markdown Wiki & GFM tables' },
        { id: 'reports', name: 'Reports', desc: 'Timesheets, Excel & CSV' },
        { id: 'finance', name: 'Finance', desc: '7 currencies, A4/PDF invoices' },
        { id: 'crm', name: 'CRM', desc: 'Clients, deals & balances' },
      ],
    },
    privacy: {
      heading: 'Privacy, native Tauri speed, and a self-hosted path ahead',
      subheading:
        'Built for professionals who expect full ownership of both their tooling and their business records.',
      cards: [
        {
          index: '01',
          title: '100% local & private',
          description:
            'No mandatory accounts, no cloud lock-in, zero telemetry, and zero hidden screen captures. Every record lives on your machine and can be exported or restored anytime via full JSON backup.',
          metaLeft: 'Backup format',
          metaRight: 'Full JSON export / import',
        },
        {
          index: '02',
          title: 'Native Tauri engine',
          description:
            'Small binary footprint, instant launch without Electron overhead, frameless desktop window, 70%–150% interface scaling, and both Obsidian Dark and Light themes.',
          metric: '70%–150%',
          metricCaption: 'UI scale range · Tauri',
        },
        {
          index: '03',
          title: 'Architected for future Self-Hosted teams',
          description:
            'Under the hood, WorkOn is already structured to support an upcoming self-hosted server edition for teams and agencies — while the local desktop app stays free forever.',
          metaLeft: 'Roadmap posture',
          metaRight: 'Offline-first today · Self-hosted ready',
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
        meta: 'Windows 10, 11 · 64-bit (Tauri)',
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
        'Straight answers on offline usage, backups, currencies, exports, and unsigned installer prompts.',
      items: [
        {
          q: 'Does WorkOn require an account or internet connection?',
          a: 'No. WorkOn is 100% offline-first and works locally right after installation. There is no mandatory sign-up, cloud lock-in, advertising, telemetry, or hidden screenshot tracking.',
        },
        {
          q: 'How do I back up or move my database to another computer?',
          a: 'WorkOn includes full JSON backup export and import covering all workspaces, projects, tasks, time entries, docs, clients, and invoices. Export one JSON file and import it on your new machine.',
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

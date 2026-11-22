/**
 * Единая конфигурация сайта WorkOn.
 * Обновляйте версию, ссылки на релизы GitHub и реквизиты донатов только в этом файле —
 * изменения автоматически применятся на главной странице, в чейнджлоге, SEO и на странице донатов.
 */

export type ChangeType = 'new' | 'improve' | 'fix';

export interface LocalizedText {
  ru: string;
  en: string;
}

export interface ReleaseChange {
  type: ChangeType;
  text: LocalizedText;
}

export interface ReleaseDownloads {
  windows: string;
  windowsPortable?: string;
  macos: string;
  linux: string;
}

export interface ReleaseItem {
  version: string;
  isoDate: string;
  date: LocalizedText;
  isLatest: boolean;
  description: LocalizedText;
  changes: ReleaseChange[];
  downloads: ReleaseDownloads | null;
}

export interface DonationPlatform {
  id: string;
  name: string;
  url: string;
  region: 'cis' | 'international';
  description: LocalizedText;
}

export interface CryptoWallet {
  id: string;
  network: string;
  address: string;
}

export interface AppScreenshot {
  id: 'kanban' | 'time' | 'gantt' | 'sprints' | 'finance' | 'crm' | 'docs';
  src: string;
  label: LocalizedText;
  caption: LocalizedText;
  alt: LocalizedText;
}

export const SITE_CONFIG = {
  name: 'WorkOn',
  siteUrl: 'https://freeworktracker.pages.dev',
  githubRepo: 'https://github.com/DevNotPay/FreeWorkTracker',
  githubReleasesUrl: 'https://github.com/DevNotPay/FreeWorkTracker/releases',
  githubIssuesUrl: 'https://github.com/DevNotPay/FreeWorkTracker/issues',
  license: 'Freeware · Offline-First',
} as const;

export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    id: 'kanban',
    src: '/assets/aistudio/______________2026-11-22_195545_c7f6572b.png',
    label: { ru: 'Канбан', en: 'Kanban' },
    caption: {
      ru: 'Канбан-доска с колонками, WIP-лимитами, приоритетами, подзадачами, Story Points, фикс-ценами и запуском таймера в 1 клик',
      en: 'Kanban board with custom columns, WIP limits, priorities, subtask progress, Story Points, fixed prices, and 1-click timer start',
    },
    alt: {
      ru: 'Скриншот Канбан-доски WorkOn с задачами, статусами, подзадачами и трекером времени',
      en: 'WorkOn Kanban board screenshot showing columns, tasks, subtask progress, and timer controls',
    },
  },
  {
    id: 'time',
    src: '/assets/aistudio/______________2026-11-22_195557_2bbd0c6b.png',
    label: { ru: 'Фокус-часы', en: 'Focus Clock' },
    caption: {
      ru: 'Фокус-часы (TrackTime / FlowTime / Pomodoro) с интерактивным циферблатом, отдельным учётом перерывов и выбором задачи',
      en: 'Focus Clock (TrackTime / FlowTime / Pomodoro) with interactive circular dial, break tracking, and quick task selector',
    },
    alt: {
      ru: 'Скриншот модуля Учёт времени и Фокус-часы (Pomodoro / FlowTime) в WorkOn',
      en: 'WorkOn Time Tracking and Focus Clock circular Pomodoro dial screenshot',
    },
  },
  {
    id: 'gantt',
    src: '/assets/aistudio/______________2026-11-22_195608_3d170659.png',
    label: { ru: 'Гант', en: 'Gantt' },
    caption: {
      ru: 'Диаграмма Ганта и сроки: синхронизированная сетка задач, масштабы Компактно/Стандарт/Подробно, линия «Сегодня» и SVG-связи зависимостей',
      en: 'Gantt chart & schedule: synchronized task rows, Compact/Standard/Detailed zoom, Today marker, and SVG dependency arrows',
    },
    alt: {
      ru: 'Скриншот Диаграммы Ганта в WorkOn с полосами сроков и пунктирными стрелками зависимостей',
      en: 'WorkOn Gantt chart screenshot with color-coded task bars and dashed SVG dependency arrows',
    },
  },
  {
    id: 'sprints',
    src: '/assets/aistudio/______________2026-11-22_195624_a14ae701.png',
    label: { ru: 'Спринты', en: 'Sprints' },
    caption: {
      ru: 'Бэклог и Scrum-спринты: интерактивный Burndown-график (Часы / Story Points / Задачи), цель спринта и перенос незавершённых задач',
      en: 'Backlog & Scrum sprints: interactive Burndown chart (Hours / Story Points / Tasks), sprint goal, and unfinished task carryover',
    },
    alt: {
      ru: 'Скриншот Бэклога и Спринтов WorkOn с Burndown-графиком',
      en: 'WorkOn Backlog and Scrum Sprints view with Burndown chart screenshot',
    },
  },
  {
    id: 'finance',
    src: '/assets/aistudio/______________2026-11-22_195657_0b35a7e9.png',
    label: { ru: 'Финансы', en: 'Finance' },
    caption: {
      ru: 'Финансы и Счета: 7 валют (RUB, USD, EUR, KZT, GBP, BYN, USDT), ставки по проектам, учёт невыставленных часов и задачи с фикс-ценой',
      en: 'Finance & Invoicing: 7 currencies (RUB, USD, EUR, KZT, GBP, BYN, USDT), project hourly rates, unbilled tracking, and fixed-price tasks',
    },
    alt: {
      ru: 'Скриншот раздела Финансы и Счета в WorkOn с мультивалютными ставками и фикс-задачами',
      en: 'WorkOn Finance and multi-currency invoicing dashboard screenshot',
    },
  },
  {
    id: 'crm',
    src: '/assets/aistudio/______________2026-11-22_195646_aa942329.png',
    label: { ru: 'CRM', en: 'CRM' },
    caption: {
      ru: 'CRM и воронка сделок: 5 этапов от лида до постоянного клиента, сумма воронки по валютам, Telegram-контакты и привязанные проекты',
      en: 'CRM & deal pipeline: 5 stages from new lead to loyal client, multi-currency pipeline total, Telegram handles, and linked projects',
    },
    alt: {
      ru: 'Скриншот CRM и воронки сделок WorkOn с карточками клиентов и контактами Telegram',
      en: 'WorkOn CRM pipeline screenshot with client cards, deal totals, and Telegram handles',
    },
  },
  {
    id: 'docs',
    src: '/assets/aistudio/______________2026-11-22_195635_8eb4767b.png',
    label: { ru: 'Документы', en: 'Docs' },
    caption: {
      ru: 'База знаний и Wiki проектов: иерархия папок, поиск по документам и встроенный Markdown-редактор с режимами «Редактор» и «Просмотр»',
      en: 'Project Knowledge Base & Wiki: folder hierarchy, instant doc search, and built-in Markdown editor with Edit and Preview modes',
    },
    alt: {
      ru: 'Скриншот встроенной базы знаний и Markdown-редактора WorkOn',
      en: 'WorkOn Markdown documentation and project wiki screenshot',
    },
  },
];

const LATEST_DOWNLOAD_BASE =
  'https://github.com/DevNotPay/FreeWorkTracker/releases/latest/download';

/**
 * Список релизов WorkOn.
 * Чтобы добавить новую версию, добавьте объект в начало массива и поставьте isLatest: true.
 */
export const RELEASES: ReleaseItem[] = [
  {
    version: '1.0.0',
    isoDate: '2026-11-03',
    date: {
      ru: '3 ноября 2026',
      en: 'November 3, 2026',
    },
    isLatest: true,
    description: {
      ru: 'Первый стабильный публичный релиз локальной платформы WorkOn на ядре Tauri 2.0 (~15 МБ) со всеми 10 рабочими модулями.',
      en: 'First stable public release of the offline-first Tauri 2.0 desktop workspace (~15 MB) with all 10 configurable modules.',
    },
    changes: [
      {
        type: 'new',
        text: {
          ru: '10 модулей в одном окне: Фокус-часы и учёт времени, Таймлайн, Канбан с WIP-лимитами, Таблица задач с Bulk Actions, Гант с SVG-зависимостями, Scrum-спринты с Burndown, Markdown Wiki, Отчёты, Финансы/Счета и CRM',
          en: '10 modules in one window: Focus Clock & Time Tracking, Timeline, Kanban with WIP limits, List View with Bulk Actions, Gantt with SVG dependencies, Scrum Sprints & Burndown, Markdown Docs, Reports, Finance/Invoicing, and CRM',
        },
      },
      {
        type: 'new',
        text: {
          ru: 'Мультивалютный биллинг (RUB, USD, EUR, KZT, GBP, BYN, USDT), защита от двойного выставления часов, «Бумажный вид» счёта, печать A4/PDF и экспорт в Excel (.xlsx)',
          en: 'Multi-currency billing (RUB, USD, EUR, KZT, GBP, BYN, USDT), unbilled hours protection, Paper View invoice preview, A4/PDF print, and native Excel (.xlsx) export',
        },
      },
      {
        type: 'new',
        text: {
          ru: 'Умная детекция простоя (Idle Detection), Фокус-часы (Pomodoro / TrackTime / FlowTime) с интерактивным циферблатом и ручной ввод времени без лимитов',
          en: 'Smart Idle Detection, Focus Clock (Pomodoro / TrackTime / FlowTime) with interactive circular dial, and unlimited manual time logging',
        },
      },
      {
        type: 'new',
        text: {
          ru: 'Локальная база IndexedDB через слой StorageRepository (готово к self-hosted серверу) и полные резервные копии Snapshot v2 (JSON) в 1 клик из сайдбара',
          en: 'Local IndexedDB storage via StorageRepository (ready for future self-hosted server) and 1-click Snapshot v2 (JSON) full backup export/import from sidebar',
        },
      },
      {
        type: 'improve',
        text: {
          ru: 'Нативное безрамочное окно Tauri 2.0 (~15 МБ), темы Obsidian Dark и Light, масштабирование интерфейса от 70% до 150%',
          en: 'Native frameless Tauri 2.0 shell (~15 MB), Obsidian Dark & Light themes, and interface scaling from 70% to 150%',
        },
      },
    ],
    downloads: {
      windows: `${LATEST_DOWNLOAD_BASE}/WorkOn-Setup.exe`,
      windowsPortable: `${LATEST_DOWNLOAD_BASE}/WorkOn-Portable.zip`,
      macos: `${LATEST_DOWNLOAD_BASE}/WorkOn.dmg`,
      linux: `${LATEST_DOWNLOAD_BASE}/WorkOn.AppImage`,
    },
  },
  {
    version: '0.9.0-beta',
    isoDate: '2026-10-15',
    date: {
      ru: '15 октября 2026',
      en: 'October 15, 2026',
    },
    isLatest: false,
    description: {
      ru: 'Бета-версия для тестирования ядра задач, таймлайна, Ганта и генерации счетов.',
      en: 'Closed beta release for testing the task engine, timeline, Gantt dependencies, and invoice builder.',
    },
    changes: [
      {
        type: 'new',
        text: {
          ru: 'Модульный интерфейс с отключением ненужных разделов и перестановкой вкладок',
          en: 'Modular interface with toggles to hide unused sections and reorder tabs',
        },
      },
      {
        type: 'fix',
        text: {
          ru: 'Корректная работа Idle Detection после выхода системы из сна и блокировки экрана',
          en: 'Reliable Idle Detection behavior after system sleep and screen lock',
        },
      },
      {
        type: 'fix',
        text: {
          ru: 'Точный расчёт пересекающихся слотов на почасовом таймлайне при смене часового пояса',
          en: 'Accurate overlapping block layout on the hourly timeline across timezone switches',
        },
      },
    ],
    downloads: null,
  },
];

export const LATEST_RELEASE = RELEASES.find((r) => r.isLatest) ?? RELEASES[0];

/**
 * Реквизиты и ссылки для поддержки проекта.
 * Замените адреса ниже на свои реальные ссылки перед публикацией.
 */
export const DONATION_PLATFORMS: DonationPlatform[] = [
  {
    id: 'cloudtips',
    name: 'CloudTips (СБП / Карты)',
    url: 'https://pay.cloudtips.ru/p/your-id',
    region: 'cis',
    description: {
      ru: 'Разовый перевод по СБП или банковской картой РФ без регистрации',
      en: 'One-time donation via SBP or Russian bank cards without registration',
    },
  },
  {
    id: 'boosty',
    name: 'Boosty',
    url: 'https://boosty.to/your-username',
    region: 'cis',
    description: {
      ru: 'Ежемесячная поддержка развития проекта или разовый донат',
      en: 'Monthly recurring support or one-time contribution',
    },
  },
  {
    id: 'kofi',
    name: 'Ko-fi',
    url: 'https://ko-fi.com/your-username',
    region: 'international',
    description: {
      ru: 'Поддержка зарубежной картой Visa, Mastercard или PayPal',
      en: 'Support via international Visa, Mastercard, or PayPal',
    },
  },
];

export const CRYPTO_WALLETS: CryptoWallet[] = [
  {
    id: 'usdt-trc20',
    network: 'USDT (TRC-20)',
    address: 'TXxx...ваш_адрес_кошелька...xxx',
  },
  {
    id: 'ton',
    network: 'TON',
    address: 'EQxx...ваш_TON_кошелек...xxx',
  },
];

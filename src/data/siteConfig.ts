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

export const SITE_CONFIG = {
  name: 'WorkOn',
  siteUrl: 'https://freeworktracker.pages.dev',
  githubRepo: 'https://github.com/DevNotPay/FreeWorkTracker',
  githubReleasesUrl: 'https://github.com/DevNotPay/FreeWorkTracker/releases',
  githubIssuesUrl: 'https://github.com/DevNotPay/FreeWorkTracker/issues',
  license: 'Freeware · Offline-First',
} as const;

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
      ru: 'Первый стабильный публичный релиз локальной платформы WorkOn на движке Tauri со всеми 10 рабочими модулями.',
      en: 'First stable public release of the offline-first Tauri desktop workspace WorkOn with all 10 configurable modules.',
    },
    changes: [
      {
        type: 'new',
        text: {
          ru: '10 модулей в одном окне: Время и Фокус-часы, Таймлайн, Канбан с WIP-лимитами, Таблица задач с Bulk Actions, Гант с SVG-зависимостями, Scrum-спринты с Burndown, Wiki/Docs, Отчёты, Финансы/Счета и CRM',
          en: '10 modules in one window: Time & Focus Clock, Timeline, Kanban with WIP limits, List View with Bulk Actions, Gantt with SVG dependencies, Scrum Sprints & Burndown, Markdown Docs, Reports, Finance/Invoicing, and CRM',
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
          ru: 'Умная детекция простоя (Idle Detection), Фокус-часы (Pomodoro / TrackTime / FlowTime) с отдельным учётом перерывов и ручной ввод времени без лимитов',
          en: 'Smart Idle Detection, Focus Clock (Pomodoro / TrackTime / FlowTime) separating breaks from billable hours, and unlimited manual time logging',
        },
      },
      {
        type: 'new',
        text: {
          ru: 'Полностью локальное хранение без аккаунтов и телеметрии, изолированные воркспейсы и полный экспорт/импорт резервной копии базы в JSON',
          en: '100% local offline-first storage with zero accounts or telemetry, isolated workspaces, and full JSON backup export/import',
        },
      },
      {
        type: 'improve',
        text: {
          ru: 'Нативное безрамочное окно на Tauri, темы Obsidian Dark и Light, масштабирование интерфейса от 70% до 150%',
          en: 'Native frameless Tauri desktop shell, Obsidian Dark & Light themes, and interface scaling from 70% to 150%',
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
          ru: 'Модульный сайдбар с отключением ненужных разделов и перестановкой вкладок',
          en: 'Modular sidebar with toggles to hide unused sections and reorder tabs',
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

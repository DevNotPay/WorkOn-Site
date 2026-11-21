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
  license: 'Freeware / Open Source',
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
      ru: 'Первый стабильный публичный релиз локального трекера рабочего времени WorkOn.',
      en: 'First stable public release of the local desktop time tracker WorkOn.',
    },
    changes: [
      {
        type: 'new',
        text: {
          ru: 'Базовый хронометр с быстрым запуском и паузой по глобальному сочетанию клавиш',
          en: 'Core timer with instant start and pause via global keyboard shortcut',
        },
      },
      {
        type: 'new',
        text: {
          ru: 'Группировка задач по проектам и клиентам с итоговыми сводками за день',
          en: 'Task grouping by projects and clients with daily time summaries',
        },
      },
      {
        type: 'new',
        text: {
          ru: 'Локальная база данных SQLite — все записи хранятся строго на вашем устройстве',
          en: 'Local SQLite database — all records remain strictly on your machine',
        },
      },
      {
        type: 'new',
        text: {
          ru: 'Сворачивание в системный трей на Windows, macOS и Linux',
          en: 'System tray integration on Windows, macOS, and Linux',
        },
      },
      {
        type: 'improve',
        text: {
          ru: 'Оптимизация потребления оперативной памяти (< 40 МБ в фоновом режиме)',
          en: 'Optimized memory footprint (< 40 MB RAM in background mode)',
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
      ru: 'Бета-версия для закрытого тестирования основных сценариев учёта времени.',
      en: 'Closed beta release for testing core time-tracking workflows.',
    },
    changes: [
      {
        type: 'new',
        text: {
          ru: 'Начальный интерфейс рабочего окна и структура проектов',
          en: 'Initial desktop window interface and project structure',
        },
      },
      {
        type: 'fix',
        text: {
          ru: 'Исправлена ошибка с засыпанием таймера при блокировке экрана',
          en: 'Fixed timer pausing drift when the system screen locks',
        },
      },
      {
        type: 'fix',
        text: {
          ru: 'Корректный подсчёт длительности сессии при смене часового пояса',
          en: 'Accurate session duration calculation across timezone changes',
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

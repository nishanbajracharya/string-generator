export const defaultLowerCaseSet = 'abcdefghijklmnopqrstuvwxyz';
export const defaultUpperCaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const defaultNumberSet = '0123456789';
export const defaultSymbolSet = '!@#$%^&*()_+-={};:<>,./?~|';
export const defaultLength = 12;

function shuffle(str: string): string {
  return str.split('').sort(() => 0.5 - Math.random()).join('');
}

type Options = {
  length?: number;

  defaults?: boolean;

  number?: boolean; // Not less than 0
  lowerCase?: boolean;
  upperCase?: boolean;
  symbol?: boolean;

  numberSet?: string;
  lowerCaseSet?: string;
  upperCaseSet?: string;
  symbolSet?: string;
};

const defaultOptions = {
  length: defaultLength,

  defaults: true,

  number: true,
  lowerCase: true,
  upperCase: true,
  symbol: true,

  numberSet: '',
  lowerCaseSet: '',
  upperCaseSet: '',
  symbolSet: '',
};

export function generate(options: Options): string;

export default function generate(options?: Options): string {
  options = { ...defaultOptions, ...options };
  let length = options.length === 0 ? 0 : options.length;

  if (!length || length < 0) length = 0;

  let string = '';

  const selectedNumberSet = options.defaults
    ? defaultNumberSet
    : options.numberSet;
  const selectedLowerCaseSet = options.defaults
    ? defaultLowerCaseSet
    : options.lowerCaseSet;
  const selectedUpperCaseSet = options.defaults
    ? defaultUpperCaseSet
    : options.upperCaseSet;
  const selectedSymbolSet = options.defaults
    ? defaultSymbolSet
    : options.symbolSet;

  if (options.number) string += selectedNumberSet;
  if (options.lowerCase) string += selectedLowerCaseSet;
  if (options.upperCase) string += selectedUpperCaseSet;
  if (options.symbol) string += selectedSymbolSet;

  const completeSet = string || defaultLowerCaseSet;

  while (string.length < length) {
    string += completeSet;
  }

  return shuffle(string).substr(0, length);
}

const defaultLowerCaseSet = 'abcdefghijklmnopqrstuvwxyz';
const defaultUpperCaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const defaultNumberSet = '0123456789';
const defaultSymbolSet = '!@#$%^&*()_+-=[]{};:<>,./?~|';

function shuffle(str: string): string {
  const arr = str.split('');

  arr.sort(() => 0.5 - Math.random());

  return arr.join('');
}

type Options = {
  defaults?: boolean;

  number?: boolean;
  lowerCase?: boolean;
  upperCase?: boolean;
  symbol?: boolean;

  numberSet?: string;
  lowerCaseSet?: string;
  upperCaseSet?: string;
  symbolSet?: string;
};

const defaultOptions = {
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

export default function generate(
  length = 12,
  options: Options = defaultOptions
): string {
  options = { ...defaultOptions, ...options };

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

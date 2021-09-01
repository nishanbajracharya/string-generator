import generate, {
  defaultLength,
  defaultLowerCaseSet,
  defaultUpperCaseSet,
  defaultSymbolSet,
  defaultNumberSet,
} from '../index';

const completeSet =
  defaultLowerCaseSet +
  defaultUpperCaseSet +
  defaultNumberSet +
  defaultSymbolSet;

describe('Generate String', () => {
  it('should generate random 12 character string', () => {
    const result = generate();

    expect(typeof result).toEqual('string');
    expect(result).toHaveLength(defaultLength);

    let newString = '';
    for (const character of result) {
      if (completeSet.includes(character)) newString += character;
    }

    expect(newString).toEqual(result);
  });

  it('should generate random 12 character string with empty object as parameter', () => {
    const result = generate({});

    expect(typeof result).toEqual('string');
    expect(result).toHaveLength(defaultLength);

    let newString = '';
    for (const character of result) {
      if (completeSet.includes(character)) newString += character;
    }

    expect(newString).toEqual(result);
  });

  it('should generate random 5 character string', () => {
    const result = generate({
      length: 5,
    });

    expect(typeof result).toEqual('string');
    expect(result).toHaveLength(5);

    let newString = '';
    for (const character of result) {
      if (completeSet.includes(character)) newString += character;
    }

    expect(newString).toEqual(result);
  });

  it('should generate empty string', () => {
    const result = generate({
      length: 0,
    });

    expect(typeof result).toEqual('string');
    expect(result).toHaveLength(0);

    expect(result).toEqual('');
  });

  it('should generate empty string if supplied length is less than 0', () => {
    const result = generate({
      length: -10,
    });

    expect(typeof result).toEqual('string');
    expect(result).toHaveLength(0);

    expect(result).toEqual('');
  });

  it('should generate string with only numbers', () => {
    const result = generate({
      lowerCase: false,
      upperCase: false,
      symbol: false,
    });

    let newString = '';
    for (const character of result) {
      if (defaultNumberSet.includes(character)) newString += character;
      if (
        defaultLowerCaseSet.includes(character) ||
        defaultUpperCaseSet.includes(character) ||
        defaultSymbolSet.includes(character)
      )
        break;
    }

    expect(newString).toEqual(result);
  });

  it('should generate string with only lowercase characters', () => {
    const result = generate({
      number: false,
      upperCase: false,
      symbol: false,
    });

    let newString = '';
    for (const character of result) {
      if (defaultLowerCaseSet.includes(character)) newString += character;
      if (
        defaultNumberSet.includes(character) ||
        defaultUpperCaseSet.includes(character) ||
        defaultSymbolSet.includes(character)
      )
        break;
    }

    expect(newString).toEqual(result);
  });

  it('should generate string with only uppercase characters', () => {
    const result = generate({
      number: false,
      lowerCase: false,
      symbol: false,
    });

    let newString = '';
    for (const character of result) {
      if (defaultUpperCaseSet.includes(character)) newString += character;
      if (
        defaultLowerCaseSet.includes(character) ||
        defaultNumberSet.includes(character) ||
        defaultSymbolSet.includes(character)
      )
        break;
    }

    expect(newString).toEqual(result);
  });

  it('should generate string with only symbols', () => {
    const result = generate({
      number: false,
      lowerCase: false,
      upperCase: false,
    });

    let newString = '';
    for (const character of result) {
      if (defaultSymbolSet.includes(character)) newString += character;
      if (
        defaultLowerCaseSet.includes(character) ||
        defaultUpperCaseSet.includes(character) ||
        defaultNumberSet.includes(character)
      )
        break;
    }

    expect(newString).toEqual(result);
  });

  it('should generate string with only lowercase characters when defaults is false', () => {
    const result = generate({
      defaults: false,
    });

    let newString = '';
    for (const character of result) {
      if (defaultLowerCaseSet.includes(character)) newString += character;
      if (
        defaultSymbolSet.includes(character) ||
        defaultUpperCaseSet.includes(character) ||
        defaultNumberSet.includes(character)
      )
        break;
    }

    expect(newString).toEqual(result);
  });
});

export const mockedApiResponseSuccess = {
  success: true,
  words: ['ad', 'bd', 'cd', 'ae', 'be', 'ce', 'af', 'bf', 'cf'],
}

export const mockedApiResponseError = {
  success: false,
  error: 'Input cannot contain only digits and no 0/1',
}

export const mockedGraphqlGetWordsResponseSuccess = {
  success: true,
  words: ['ad', 'bd', 'cd', 'ae', 'be', 'ce', 'af', 'bf', 'cf'],
  error: null,
}

export const mockedGraphqlGetWordsResponseError = {
  success: false,
  error: 'Input cannot contain only digits and no 0/1',
  words: null,
}

export const mockedGetWordsResponse = [
  'ad',
  'bd',
  'cd',
  'ae',
  'be',
  'ce',
  'af',
  'bf',
  'cf',
]

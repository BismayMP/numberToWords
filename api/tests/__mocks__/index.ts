export const mockedGetWordsResponseFor23 = [
  'ad',
  'ae',
  'af',
  'bd',
  'be',
  'bf',
  'cd',
  'ce',
  'cf',
]
export const mockedGetWordsResponseFor234 = [
  'adg',
  'adh',
  'adi',
  'aeg',
  'aeh',
  'aei',
  'afg',
  'afh',
  'afi',
  'bdg',
  'bdh',
  'bdi',
  'beg',
  'beh',
  'bei',
  'bfg',
  'bfh',
  'bfi',
  'cdg',
  'cdh',
  'cdi',
  'ceg',
  'ceh',
  'cei',
  'cfg',
  'cfh',
  'cfi',
]

export const mockedApiResponseSuccessFor23 = {
  success: true,
  words: mockedGetWordsResponseFor23,
}

export const mockedApiResponseSuccessFor234 = {
  success: true,
  words: mockedGetWordsResponseFor234,
}

export const mockedApiResponseError = {
  success: false,
  error: 'No valid input, you can only use digits expect 0 and 1',
}

export const mockedGraphqlGetWordsResponseSuccessFor23 = {
  success: true,
  words: mockedGetWordsResponseFor23,
  error: null,
}

export const mockedGraphqlGetWordsResponseSuccessFor234 = {
  success: true,
  words: mockedGetWordsResponseFor234,
  error: null,
}

export const mockedGraphqlGetWordsResponseError = {
  success: false,
  error: 'No valid input, you can only use digits expect 0 and 1',
  words: null,
}

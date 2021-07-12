export enum OptionTypes {
  api = 'apiType',
  filter = 'wordsFilter',
  realTime = 'realTime',
}

export type getWordsResponseType = {
    data: {    
        success: boolean,
        words: string[],
        error: string
    }
}
export enum OptionTypes {
  api = 'apiType',
  keyboard = 'keyboard',
  realTime = 'realTime',
}

export type getWordsResponseType = {
    data: {    
        success: boolean,
        words: string[],
        error: string
    }
}
export const getOutdatedRequestDate = (): string =>
  new Date('01.01.1970').toString();

export const getCurrentDate = (): string => new Date(Date.now()).toString();

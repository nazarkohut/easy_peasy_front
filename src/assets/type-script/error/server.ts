export function getServerErrorText(errorValue: any): string {
  if (typeof (errorValue) === 'string') {
    return errorValue
  } else if (typeof (errorValue) === 'object') {
    return errorValue?.[0]
  }
  return String();
}

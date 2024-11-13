export function convertToHalf(str: string | number) {
  return str
    .toString()
    .replace(/[!-~]/g, (halfWidthChar) =>
      String.fromCharCode(halfWidthChar.charCodeAt(0) - 0xfee0),
    )
}

export function convertToFull(str: string | number) {
  return str
    .toString()
    .replace(/[!-~]/g, (fullWidthChar) =>
      String.fromCharCode(fullWidthChar.charCodeAt(0) + 0xfee0),
    )
}

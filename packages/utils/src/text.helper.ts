export class TextHelper {
  static getShortenedText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    }

    return text.slice(0, maxLength) + "...";
  }
}

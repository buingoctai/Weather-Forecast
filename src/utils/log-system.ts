class LogSytem {
  static log(text: string) {
    console.log(text);
  }

  static logError(text: string) {
    console.error(text);
  }

  static logWarning(text: string) {
    console.warn(text);
  }

  static logTrace(text: string) {
    console.trace(text);
  }

  static logTable(data: object) {
    console.table(data);
  }

  static logTimeStart() {
    console.time();
  }

  static logTimeEnd() {
    console.timeEnd();
  }
}

export default LogSytem;

# types

这个目录用于包含项目中所有的自定义类型申明文件。
项目会自动的读取所有本目录`*.d.ts`文件。

可能包括的内容有：
- Windows扩展方法声明
- Vue原型方法声明
- 基础类型扩展方法声明

例如:
```
declare global {
  interface String {
    isNullOrEmpty(this: string): boolean;
    parseTime(pattern: String): String;
  }
  interface Array<T> {
    firstOrDefault(predicate: (item: T) => boolean): T;
    pushAll(arr: Array<T>): void;
  }
  interface Math {
    easeInOutQuad(t: number, b: number, c: number, d: number): Number;
  }
  interface Date {
    format(pattern?: String): String;
  }
  interface Number {
    parseTime(pattern: String): String;
  }

  interface Window {
    WwLogin: Function;
  }
}

export {};

```

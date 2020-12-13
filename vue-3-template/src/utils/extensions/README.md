# extensions

本目录用于放置对于Window、Vue或基础类型等扩展的具体实现。


如：
```
(() => {
  if (!Date.prototype.format)
    Date.prototype.format = function(pattern?: string): string {
      const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}",
        formatObj = {
          y: this.getFullYear(),
          m: this.getMonth() + 1,
          d: this.getDate(),
          h: this.getHours(),
          i: this.getMinutes(),
          s: this.getSeconds(),
          a: this.getDay()
        };
      const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {

        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
          return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        if (result.length > 0 && value < 10) {
          value = "0" + value;
        }
        return value || 0;
      });
      return time_str;
    };
})();

export {};


```

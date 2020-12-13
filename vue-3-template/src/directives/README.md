# directives

本目录用于放置自定义vue指令。
所有指令需要统一通过index.ts导出。

如：
```
import hasRole from './permission/hasRole'
import hasPermi from './permission/hasPermi'
import Vue from 'vue'

const install = function(vue:typeof Vue) {
  vue.directive("hasRole", hasRole);
  vue.directive("hasPermi", hasPermi);
}

export default install

```

# hooks

本目录用于放置所有自定义实现的hooks。
应该根据功能进行模块化管理。

例如：
```
const TodoSymbol = Symbol();
type TodoContext = {
    get: () => Todo[];
    add: (content: string) => void;
    remove: (index: number) => void;
};

export const useTodoProvider = (): void => {
    const store = useStore();
    const get = () => store.getters.todos,
        add = (content: string) => store.commit("ADD", content),
        remove = (index: number) => {
            console.info("form injection");
            store.commit("REMOVE", index);
        };

    provide(TodoSymbol, {
        get,
        add,
        remove
    });
};

export const useTodoInject = (): TodoContext => {
    const context = inject<TodoContext>(TodoSymbol);

    if (!context) {
        throw new Error("must use provider before use inject");
    }
    return context;
};


```

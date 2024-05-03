---
sidebar_position: 41
---

# 아이템 41 any 의 진화를 이해하기

```ts
function range(start: number, limit: number) {
  const out = [];

  for (let i = start; i < limit; i++) {
    out.push(i);
    // 'number' 형식의 인수는 'never' 형식의 매개 변수에 할당될 수 없습니다.
  }

  return out;
}

function makeSquares(start: number, limit: number) {
  const out = [];

  range(start, limit).forEach(i => {
    out.push(i * i);
    // 'number' 형식의 인수는 'never' 형식의 매개 변수에 할당될 수 없습니다.
  });

  return out;
}
```

## 요약

- 일반적인 타입은 정제되기만 하는 반면, 암시적 any 와 any[] 타입은 진화할 수 있다. 이러한 동작이 발생하는 코드를 인지하고 이해할 수 있어야 한다.
- any 를 진화시키는 방식보다 명시적 타입 구문을 사용하는 것이 안전한 타입을 유지하는 방법이다.

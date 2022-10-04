---
sidebar_position: 6
---

# 6장 객체

**객체**란 프로퍼티의 순서 없는 집합이며 각 프로퍼티에는 이름과 값이 있습니다.

<br />

## 6.1 객체 소개

객체는 동적이기 때문에 일반적으로 프로퍼티를 추가하거나 삭제할 수 있지만, 정적인 객체를 흉내 낼 수도 있고 정적 타입을 사용하는 언어의 구조 역시 사용할 수 있습니다.

문자열, 숫자, 심벌, `true`, `false`, `null`, `undefined`가 아닌 값은 전부 객체입니다. 또한 문자열, 숫자, 불은 객체가 아니지만 불변인 객체처럼 행동 할 수도 있습니다.

**프로퍼티 속성**

- **이름**: 빈 문자열과 심벌을 포함해 어떤 문자열이든 쓸 수 있지만, 같은 이름의 프로퍼티는 존재할 수 없습니다.
- **값**: 타입을 가리지 않는 자바스크립트 값이며 `게터(getter)`나 `세터(setter)`, 또는 둘 다가 될 수도 있습니다.
- **쓰기 가능(writable)**: 프로퍼티에 값을 설정할 수 있는지 없는지를 나타냅니다.
- **열거 가능(enumerable)**: `for/in` 루프에 프로퍼티 이름을 반환할지 안 할 지를 나타냅니다.
- **변경 가능(configurable)**: 프로퍼티를 삭제할 수 있는지 없는지, 속성을 바꿀 수 있는지 없는지를 나타냅니다.

자바스크립트 내장 객체의 프로퍼티 중 상당수는 읽기 전용이기나 얼기 불가이거나 변경 불가입니다. 직접 만드는 객체의 프로퍼티는 기본적으로 쓰기 가능, 열거 가능, 변경 가능입니다.

<br />

## 6.2 객체 생성

### 6.2.1 객체 리터럴

객체를 생성하는 가장 쉬운 방법입니다.

- **프로퍼티 이름**: 자바스크립트 식별자 또는 문자열 리터럴이고, 빈 문자열도 허용합니다.
- **프로퍼티 값**: 자바스크립트 표현식이면 무엇이든 가능합니다.

```js
// 프로퍼티가 없는 객체
let empty = {};
// 숫자 프로퍼티 두 개
let point = { x: 0, y: 0 };
// 좀 더 복잡한 값
let p2 = { x: point.x, y: point.y + 1 };
// 아래 프로퍼티 이름에는 스페이스와 하이픈이 들어 있으므로 문자열 리터럴을 썼습니다.
let book = {
  'main title': 'JavaScript',
  'sub-title': 'The Definitive Guide',
  // for는 예약어이지만 따옴표를 쓰지 않았습니다.
  for: 'all audiences',
  // 이 프로퍼티의 값은 객체입니다.
  author: {
    firstname: 'David',
    surname: 'Flanagan',
  },
};
```

객체 리터럴을 평가할 때마다 새 객체가 만들어집니다. 각 프로퍼티의 값 역시 리터럴을 평가할 때마다 평가됩니다. 따라서 객체 리터럴 자체가 바뀌지 않더라도 반복적으로 호출되는 함수나 루프 바디 안에 있다면 새 객체를 여러 개 만들 수 있으며, 이 객체들의 프로퍼티 값 역시 매번 달라질 수 있습니다.

### 6.2.2 new

새 객체를 생성하고 초기화합니다. `new` 키워드 뒤에는 반드시 함수 호출이 있어야 합니다. 이런 형태로 사용하는 함수를 생성자라고 부르고, 새로 생성된 객체를 초기화하는 목적으로 사용합니다.

**자바스크립트의 내장 타입 생성자**

```js
let o = new Object(); // 빈 객체를 만듭니다. {}와 같습니다.
let a = new Array(); // 빈 배열을 만듭니다. []와 같습니다.
let d = new Date(); // 현재 시간을 나타내는 Date 객체를 만듭니다.
let r = new Map(); // 키와 값을 연결하는 Map 객체를 만듭니다.
```

### 6.2.3 프로토타입

객체 거의 대부분은 자신과 연결된 두 번째 객체를 갖습니다.

- **첫 번째 객체**: 프로토타입에서 프로퍼티를 상속
- **두 번째 객체**: 프로토타입

**객체 리터럴 프로토타입**

- 모두 같은 프로토타입 객체를 갖습니다. 그리고 이 프로토타입 객체는 `Object.prototype`이라는 코드로 참조할 수 있습니다.

**`new` 키워드와 생성자**

- 생성자 함수의 `prototype` 프로퍼티 값을 자신의 프로토타입으로 사용합니다.
- `new Object()`로 생성한 객체는 `{}`로 생성한 객체와 마찬가지로 `Object.prototype`에서 상속합니다.

**`Object.prototype`**

프로토타입이 없는 객체 중 하나입니다. 다른 프로토타입 객체는 일반적인 객체이며 역시 프로토타입이 있습니다. 내장 생성자 대부분에 `Object.prototype`에서 상속하는 프로토타입이 있습니다.

- ex) `Date.prototype`은 `Object.prototype`에서 프로퍼티를 상속하므로 `new Date()`로 생성한 `Date` 객체는 `Date.prototype`과 `Object.prototype` 양쪽에서 프로토타입을 상속합니다.

이렇게 이어지는 프로토타입 객체 사이의 연결을 **프로토타입 체인**이라고 부릅니다.

### 6.2.4 Object.create()

첫 번째 인자를 프로토타입 삼아 새 객체를 생성합니다.

```js
let o1 = Object.create({ x: 1, y: 2 }); // o1은 x와 y 프로퍼티를 상속합니다.
o1.x + o1.y; // => 3
```

인자로 `null`을 전달해 프로토타입이 없는 객체를 생성할 수도 있지만, 이렇게 생성된 객체는 아무것도 상속하지 않으며 `toString()`과 같은 기본 메서드조차 없습니다.

```js
let o2 = Object.create(null); // o2는 프로퍼티나 메서드를 상속하지 않습니다.
```

`{}`나 `new Object()`가 반환하는 것처럼 일반적인 빈 객체를 만들고 싶을 때는 다음와 같이 `Object.prototype`을 전달합니다.

```js
let o3 = Object.create(Object.prototype); // o3는 {}나 new Object()와 같습니다.
```

`Object.create()` 사용하는 목적 중 하나는 서드 파티 라이브러리에서 객체를 변경하는 사고를 막는 것입니다.

```js
let o = { x: "don't change this value" };
library.function(Object.create(o)); // 의도치 않은 변경에 대한 방어
```

<br />

## 6.3 프로퍼티 검색과 설정

### 6.3.1 연관 배열인 객체

> **연관 배열**
>
> 문자열을 인덱스로 사용하는 배열입니다.

해시(hash), 맵(map), 딕셔너리(dictionary)라고 부르기도 합니다. 자바스크립트 객체는 연관 배열입니다.

**점 연산자**

- 점 연산자를 사용해 객체 프로퍼티에 접근할 때 프로퍼티 이름은 식별자로 표현됩니다. 식별자는 반드시 문자 그대로 프로그램에 입력해야 합니다. 식별자는 데이터 타입이 아니므로 프로그램에서 조작할 수 없습니다.

**대괄호 연산자**

- 대괄호 연산자로 객체 프로퍼티에 접근할 때는 프로퍼티 이름을 문자열로 표현합니다. 문자열은 데이터 타입이므로 프로그램이 실행되는 동안 새로 생성할 수도 있고 조작할 수도 있습니다.

```js
let addr = '';
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + '\n';
}
```

`ES6` 이후에는 이런 상황에서 일반 객체를 쓰기보다 `Map` 클래스를 쓰면 더 좋을 때가 많습니다.

### 6.3.2 상속

```js
let o = {}; // o는 Object.prototype에서 객체 메서드를 상속합니다.
o.x = 1; // 이제 자체 프로퍼티 x가 생겼습니다.
let p = Object.create(o); // p는 o와 Object.prototype에서 프로퍼티를 상속합니다.
p.y = 2; // 자체 프로퍼티 y가 생겼습니다.
let q = Object.create(p); // q는 p, o, Object.prototype에서 프로퍼티를 상속하며
q.z = 3; // 자체 프로퍼티 z가 생겼습니다.
let f = q.toString(); // toString은 Object.prototype에서 상속했습니다.
q.x + q.y; // => 3; x와 y는 o와 p에서 상속했습니다.
```

프로퍼티 할당은 프로토타입 체인을 검색해 할당이 허용되는지 확인합니다. 할당이 허용된다면 항상 원래 객체에 프로퍼티를 생성하거나 설정할 뿐, 프로토타입 체인에 존재하는 객체는 절대 수정하지 않습니다.

```js
let unitcircle = { r: 1 }; // 상속할 객체
let c = Object.create(unitcircle); // c는 프로퍼티 r을 상속합니다.
c.x = 1;
c.y = 1; // c에 자체 프로퍼티 두 개를 정의합니다.
c.r = 2; // c가 상속한 프로퍼티를 덮어 씁니다.
unitcircle.r; // => 1: 프로토타입은 영향받지 않습니다.
```

프로퍼티 할당은 실패하거나, 원래 객체에 프로퍼티를 생성 또는 설정한다는 규칙에는 한 가지 예외가 있습니다. `o`가 `x` 프로퍼티를 상속하고 그 프로퍼티가 세터 메서드가 있는 접근자 프로퍼티라면 `o`에 `x` 프로퍼티를 새로 만드는 대신 세터 메서드를 호출합니다. 하지만 이 세터 메서드는 객체 `o`에 호출되는 것이지 해당 프로퍼티를 정의한 프로토타입 객체에 호출되는 것이 아니므로, 세터 메서드가 프로퍼티를 변경하더라도 `o`에 변화가 있을 뿐 프로토타입 체인은 변하지 않습니다.

### 6.3.3 프로퍼티 접근 에러

존재하지 않는 프로퍼티를 검색하는 것은 에러가 아닙니다.

```js
book.subtitle; // => undefined: 프로퍼티가 존재하지 않습니다.
```

하지만 존재하지 않는 객체의 프로퍼티를 검색하려 하는 것은 에러입니다.

```js
let len = book.subtitle.length; // TypeError: undefined에는 length 프로퍼티가 없습니다.
```

객체 `o`에 프로퍼티 `p`를 설정하려는 시도는 다음과 같은 상황에 실패합니다.

- `o`에 자체 프로퍼티 `p`가 있고 읽기 전용일 때: 읽기 전용 프로퍼티의 값은 바꿀 수 없습니다.
- `o`에 상속된 프로퍼티 `p`가 있고 읽기 전용일 때: 상속된 읽기 전용 프로퍼티를 같은 이름의 자체 프로퍼티로 가릴 수 없습니다.
- `o`에 자체 프로퍼티 `p`가 없으며 세터 메서드로 프로퍼티 `p`를 상속하지 않고 `o`의 확장 가능 속성이 `false`일 때: `p`는 `o`에 존재하지 않고 호출 할 세터 메서드도 없으므로 `p`를 `o`에 추가해야 하지만, `o`는 확장 불가이므로 새 프로퍼티를 정의할 수 없습니다.

<br />

## 6.4 프로퍼티 삭제

> `delete` 연산자
>
> 객체에서 프로퍼티를 삭제합니다.

피연산자는 프로퍼티 접근 표현식이어야 합니다. 값을 삭제하는 것이 아니라 프로퍼티 자체를 삭제합니다. 상속된 프로퍼티를 삭제하려면 해당 프로퍼티를 정의한 프로토타입 객체에서 삭제해야 합니다. 이렇게 하면 프로토타입을 상속한 객체 전체에 영향을 미칩니다.

`delete` 표현식은 삭제에 성공했을 때, 또는 존재하지 않는 프로퍼티 삭제를 시도하는 등 효과가 없었을 때 `true`로 평가됩니다.

```js
let o = { x: 1 }; // o에는 자체 프로퍼티 x가 있고 toString을 상속합니다.
delete o.x; // => true: 프로퍼티 x를 삭제합니다.
delete o.x; // => true: x가 존재하지 않지만 true입니다.
delete o.toString; // => true: 자체 프로퍼티가 아니지만 true입니다.
delete 1; // => true: 의미 없지만 true입니다.
```

변경 가능 속성이 `false` 인 프로퍼티는 제거하지 않습니다. 내장 객체의 일부 프로퍼티, 변수 선언이나 함수 선언으로 생성된 전역 객체의 프로퍼티는 변경 불가입니다.

```js
// 다음은 일반 모드의 결과이며 스트릭트 모드에서는 모두 TypeError를 일으킵니다.
delete Object.prototype; // => false: 프로퍼티가 변경 불가입니다.
var x = 1; // 전역 변수를 선언합니다.
delete globalThis.x; // => false: 이 프로퍼티는 삭제할 수 없습니다.
function f() {} // 전역 함수를 선언합니다.
delete globalThis.f; // => false: 이 프로퍼티 역시 삭제할 수 없습니다.
```

<br />

## 6.5 프로퍼티 테스트

자바스크립트 객체는 프로퍼티 집합으로 볼 수 있으며, 주어진 이름을 가진 프로퍼티가 객체에 존재하는지 확인해야 할 때가 있습니다. 이 경우 `in` 연산자, `hasOwnProperty()`, `propertyIsEnumerable()` 메서드를 사용하거나 프로퍼티를 검색하면 됩니다.

**`in` 연산자**

```js
let o = { x: 1 };
'x' in o; // => true: o에는 자체 프로퍼티 x가 있습니다.
'y' in o; // => false: o에는 프로퍼티 y가 없습니다.
'toString' in o; // => true: o는 toString을 상속합니다.
```

- `in` 연산자 대신 프로퍼티를 검색하고 `!==`을 써서 `undefined`가 아님을 확인하는 경우도 많습니다.

```js
let o = { x: 1 };
o.x !== undefined; // => true: o에는 프로퍼티 x가 있습니다.
o.y !== undefined; // => false: o에는 프로퍼티 y가 없습니다.
o.toString !== undefined; // => true: o는 toString을 상속합니다.
```

- `in`은 존재하지 않는 프로퍼티와, 존재하지만 값이 `undefined` 인 프로퍼티를 구분할 수 있습니다.

```js
let o = { x: undefined }; // 프로퍼티에 직접 undefined를 할당합니다.
o.x !== undefined; // => false: 프로퍼티가 존재하지만 정의되지 않았습니다.
o.y !== undefined; // => false: 프로퍼티가 존재하지도 않습니다.
'x' in o; // => true: 프로퍼티가 존재합니다.
'y' in o; // => false: 프로퍼티가 존재하지 않습니다.
delete o.x; // 프로퍼티 x를 삭제합니다.
'x' in o; // => false: 이제는 존재하지 않습니다.
```

**`hasOwnProperty()`**

```js
let o = { x: 1 };
o.hasOwnProperty('x'); // => true: o에는 자체 프로퍼티 x가 있습니다.
o.hasOwnProperty('y'); // => false: o에는 프로퍼티 y가 없습니다.
o.hasOwnProperty('toString'); // => false: toString은 상속된 프로퍼티입니다.
```

**`propertyIsEnumerable()`**

```js
let o = { x: 1 };
o.propertylsEnumerable('x'); // => true: o에는 열거 가능 프로퍼티 x가 있습니다.
o.propertylsEnumerable('toString'); // => false: 자체 프로퍼티가 아닙니다.
Object.prototype.propertylsEnumerable('toString'); // => false: 열거 불가입니다.
```

<br />

## 6.6 프로퍼티 열거

`for/in` 루프를 사용하는 것보다는 객체의 프로퍼티 이름을 배열에 저장해서 `for/of` 루프를 사용하는 것이 더 쉬울 때가 많습니다.

- `Object.keys()` 객체의 열거 가능한 자체 프로퍼티 이름을 배열로 반환합니다. 열거 불가 프로퍼티, 상속된 프로퍼티, 이름이 심벌인 프로퍼티는 내보내지 않습니다.
- `Object.getOwnPropertyNames()`는 `Object.keys()`와 비슷하지만, 이름이 문자열이기만 하면 열거 불가인 자체 프로퍼티 이름도 배열로 반환합니다.
- `Object.getOwnPropertySymbols()`는 열거 가능 여부를 따지지 않고 이름이 심벌인 자체 프로퍼티를 배열로 반환합니다.
- `Reflect.ownKeys()` 열거 가능 여부를 따지지 않고, 문자열인지 심벌인지 구분하지 않고 자체 프로퍼티 이름은 전부 배열로 반환합니다.

### 6.6.1 프로퍼티 열거 순서

- 이름이 음이 아닌 정수인 문자열 프로퍼티가 첫 번째로 나열되며 작은 수에서 큰 수 순으로 열거됩니다. 따라서 배열 및 배열 비슷한 객체의 프로퍼티도 순서 대로 열거됩니다.
- 배열 인덱스와 비슷한 프로퍼티를 모두 열거한 다음에는 음수나 부동 소수점 숫자처럼 보이는 프로퍼티를 포함해 이름이 문자열인 프로퍼티를 열거합니다. 이 프로퍼티는 객체에 추가된 순서대로 열거됩니다. 객체 리터럴로 정의된 프로퍼티는 리터럴에 쓰인 순서를 따릅니다.
- 이름이 심벌인 프로퍼티를 객체에 추가된 순서대로 열거합니다.

**`for/in`**

`for/in` 루프의 열거 순서는 이 열거 함수만큼 정확하게 정의되어 있지는 않지만, 대부분의 실행 환경에서 자체 프로퍼티를 앞서 설명한 순서대로 열거하고 프로토타입 체인을 따라 올라가면서 각 프로토타입 객체에 대해 열거 가능한 프로퍼티를 같은 순서로 열거합니다.

<br />

## 6.7 객체 확장

**`Object.assign()`**

인자로 두 개 이상의 객체를 받습니다. 첫 번째 인자는 수정 해서 반환할 대상 객체이지만, 두 번째 또는 그 이후의 인자는 소스 객체이므로 수정하지 않습니다.

소스 객체에 게터 메서드가 있거나 대상 객체에 세터 메서드가 있다면 복사 도중에 이들이 호출되긴 하지만 메서드 자체를 복사하지는 않습니다.

프로퍼티를 객체에서 다른 객체로 복사하는 이유 중 하나는 소스 객체에 기본 값을 정의해 두고 대상 객체에 그런 이름이 존재하지 않는다면 복사해서 쓰려는 목적입니다.

<br />

## 6.8 객체 직렬화

객체를 문자열로 변환하는 작업입니다. 이 문자열은 나중에 다시 객체로 되돌릴 수 있습니다.

```js
let o = { x: 1, y: { z: [false, null, ''] } }; // 테스트 객체를 정의합니다.
let s = JSON.stringify(o); // s == '{"x": 1,"y": {"z": [false, null, ""]}}'
let p = JSON.parse(s); // p == {x: 1, y: {z: [false, null, ""]}}
```

`NaN`, `Infinity`, `-Infinity`는 `null`로 직렬화 됩니다.

`Date` 객체는 ISO 형식 날짜 문자열로 직렬화되지만 `JSON.parse()`는 이 문자열을 그대로 문자열로 둘 뿐 `Date` 객체로 복원하지는 않습니다.

`함수`, `RegExp`, `Error` `객체`, `undefined` 값은 직렬화하거나 복원할 수 없습니다.

`JSON.stringify()`는 열거 가능한 자체 프로퍼티만 직렬화합니다. 프로퍼티 값을 직렬화할 수 없다면 해당 프로퍼티는 결과 문자열에서 생략됩니다. `JSON.stringify()`와 `JSON.parse()`는 모두 직렬화와 복원 방법을 지정하는 두 번째 인자를 선택 사항으로 받을 수 있습니다. 이 인자에는 직렬화에 포함할 프로퍼티 리스트, 직렬화에 사용할 값 등을 지정할 수 있습니다.

<br />

## 6.9 객체 메서드

### 6.9.1 toString() 메서드

> **`toString()`**
>
> 호출한 객체의 값을 나타내는 문자열을 반환합니다.

기본 메서드에서 유용한 정보를 제공하지 않으므로 여러 클래스에서 자신만의 `toString()`을 정의하곤 합니다.

```js
let point = {
	x: 1,
	y：2,
	toString: function() { return `(${this.x}, ${this.y})`; }
};
String(point)   // => "(1, 2)": 문자열로 변환할 때 toString()을 호출합니다.
```

### 6.9.2 toLocaleString() 메서드

> **`toLocaleString()`**
>
> 지역에 맞는 문자열 표현을 반환합니다.

배열 요소를 변활할 때 `toString()` 메서드가 아니라 `toLocaleString()` 메서드를 호출한다는 점이 다릅니다.

```js
let point = {
	x: 1000,
	: 2000,
	toString: function() { return `(${this.x}, ${this.y})`; },
	toLocaleString: function() {
		return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
	}
};
point.toString()         // => "(1000, 2000)"
point.toLocaleString()   // => "(1,000, 2,000)": 천 단위 구분자가 있습니다.
```

### 6.9.3 valueOf() 메서드

> **`valueOf()`**
>
> 객체를 문자열이 아닌 다른 기본 타입, 보통은 숫자로 변환하려 할 때 호출합니다.

기본 값을 예상하는 곳에 객체를 사용하면 자동으로 이 메서드를 호출합니다.

```js
let point = {
	x : 3,
	y： 4,
	valueOf: function() { return Math.hypot(this.x, this.y); }
};
Number(point)   // => 5: 숫자로 변환할 때 valueOf()가 호출됩니다.
point > 4       // => true
point > 5       // => false
point < 6       // => true
```

### 6.9.4 toJSON() 메서드

> **`toJSON()`**
>
> `Object.prototype`에 `toJSON()` 메서드가 정의된 것은 아니지만, `JSON.stringify()` 메서드는 직렬화할 객체에서 `toJSON()` 메서드를 검색합니다.

직렬화할 객체에 이런 메서드가 존재한다면 해당 메서드를 호출해 반환 값을 직렬화합니다.

```js
let point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toJSON: function () {
    return this.toString();
  },
};
JSON.stringify([point]); // => '["(1, 2)"]'
```

<br />

## 6.10 확장된 객체 리터럴 문법

### 6.10.1 단축 프로퍼티

```js
let x = 1,
  y = 2;
let o = {
  x: x,
  y: y,
};
```

```js
let x = 1,
  y = 2;
let o = { x, y };
o.x + o.y; // => 3
```

### 6.10.2 계산된 프로퍼티 이름

```js
const PROPERTY_NAME = 'pl';
function computePropertyName() {
  return 'p' + 2;
}
let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;
```

```js
const PROPERTY_NAME = 'pl';
function computePropertyName() {
  return 'p' + 2;
}
let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2,
};
p.pl + p.p2; // => 3
```

프로퍼티 이름을 직접 입력하기보다는 계산된 프로퍼티 문법을 써서 라이브러리에서 정의하는 프로퍼티 이름 상수를 쓰는 편이 더 안전합니다.

### 6.10.3 프로퍼티 이름인 심벌

프로퍼티 이름에 문자열이나 심벌을 쓸 수 있습니다. 심벌을 변수나 상수에 할당하면 계산된 프로퍼티 문법을 통해 그 심벌을 프로퍼티 이름으로 쓸 수 있습니다.

```js
const extension = Symbol("my extension symbol");
let o = {
	[extension]: { /* 이 객체에 확장 데이터를 저장합니다. */ }
}；
o[extension].x = 0; // o의 다른 프로퍼티와 충돌하지 않습니다.
```

심벌의 목적은 보안이 아니라 자바스크립트 객체가 사용할 수 있는 안전한 확장 메커니즘을 정의하는 것입니다.

서드 파티 코드에서 가져온 객체에 프로퍼티를 추가하고 싶지만, 추가한 프로퍼티가 이미 존재하는 프로퍼티와 충돌하지 않는다고 확신할 수 없을 때 프로퍼티 이름에 심벌을 사용하면 안전합니다.

### 6.10.4 분해 연산자

`ES2018` 이후에는 객체 리터럴 안에서 분해 연산자 `...`를 사용해 기존 객체의 프로퍼티를 새 객체에 복사할 수 있습니다.

```js
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height; // => 175
```

분해되는 객체와 프로퍼티를 받는 객체 둘 다 같은 이름의 프로퍼티를 갖는다면 해당 프로퍼티의 값은 마지막에 오는 값이 됩니다.

```js
let o = { x: 1 };
let p = { x: 0, ...o };
p.x; // => 1: 객체 o의 값이 초깃값을 덮어 씁니다.
let q = { ...o, x: 2 };
q.x; // => 2: 2라는 값이 o의 기존 값을 덮어 씁니다.
```

### 6.10.5 단축 메서드

```js
let square = {
	area: function() { return this.side * this.side; },
	side: 10
}；
square.area()   // => 100
```

```js
let square = {
	area() { return this.side * this.side; },
	side: 10
}；
square.area()   // => 100
```

`area` 같은 일반적인 자바스크립트 식별자 외에도 문자열 리터럴, 계산된 프로퍼티 이름, 심벌 역시 사용할 수 있습니다.

### 6.10.6 프로퍼티 게터와 세터

접근자 메서드 `게터(getter)`와 `세터(setter)`를 갖는 접근자 프로퍼티(accessor property) 역시 지원합니다.

프로그램이 접근자 프로퍼티의 값을 검색하면 자바스크립트는 인자 없이 게터 메서드를 호출합니다. 이 메서드의 반환 값이 프로퍼티 접근 표현식의 값입니다.

```js
let o = {
	// 일반적인 데이터 프로퍼티
	dataProp: value,
	// 함수의 쌍으로 정의된 접근자 프로퍼티
	get accessorProp() { return this.dataProp; },
	set accessorProp(value) { this.dataProp = value; }
}；
```

<br />

## 6.11 요약

- 열거 가능, 자체 프로퍼티 같은 기본 객체 용어
- `ES6` 이후에 추가된 새 기능을 포함한 객체 리터럴 문법
- 객체의 프로퍼티를 읽고, 쓰고, 삭제하고, 열거하고, 확인하는 방법
- 자바스크립트에서 프로토타입 기반 상속이 동작하는 방법, `Object.create()`를 통해 다른 객체를 상속하는 객체를 만드는 방법
- `Object.assign()`을 통해 다른 객체로 프로퍼티를 복사하는 방법

기본 값이 아닌 자바스크립트 값은 모두 객체입니다. 배열과 함수 역시 객체입니다.

<br />

<hr />

JavaScript: The Definitive Guide, Seventh Edition, by David Flanagan (O'Really). Copyright 2020 David Flanagan, 978-1-491-95202-3

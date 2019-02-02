# Component には名前をつけよう

React のコンポーネントには 2 つの書き方がある。Class と Function だ。
`Hooks` も登場してきて、Class Component の出番は少なくなってくるだろう。

Function Component を Export する時どう書くだろう。

```jsx
export default function() {
  return (
    <View>
      <Text>{foo.bar}</Text>
    </View>
  )
}
```

```jsx
function FooBar() {
  return (
    <View>
      <Text>{foo.bar}</Text>
    </View>
  )
}

export default FooBar
```

```jsx
const FooBar = () => (
  <View>
    <Text>{foo.bar}</Text>
  </View>
)

export default FooBar
```

`eslint-preset-airbnb`準拠で書いている場合、

React 上でエラーが表示される時、StackTrace 上で Unknown と表示されてしまう。

[画像例]

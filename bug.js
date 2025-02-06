```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}
```

This code is a simple Next.js page that renders some text. However, if you try to run this code with Next.js 15 and you have not configured your app properly, you might encounter unexpected errors or warnings.

For instance, if you're missing the `app` directory or haven't adjusted your `next.config.js` appropriately, the behavior might be inconsistent or cause unexpected rendering issues.
Here's a simple React functional component that implements a click counter using TypeScript:

```tsx
import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>You have clicked the button {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ClickCounter;
```

This component uses the `useState` hook to manage the click count state. The `handleClick` function is called when the button is clicked, and it updates the `count` state using the `setCount` function.

The component renders a heading, a paragraph displaying the current click count, and a button that increments the count when clicked.
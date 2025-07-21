Great! Here's a **one-page DOM manipulation project** that encourages deep use of DOM **nodes**, **element properties**, **attributes**, **events**, and **methods**. The challenge is called:

---

## 🔧 **"Smart To-Do List Manager" (DOM Mastery Challenge)**

### 🧠 Features You Must Implement:

This is more than a basic to-do list. It will test your **entire DOM knowledge**, including:

---

### ✅ Functional Requirements:

1. **Add Task** (with priority, date, and category)
2. **Edit Task** (inline or via popup)
3. **Delete Task**
4. **Mark as Done / Undone**
5. **Drag and Drop to reorder tasks**
6. **Live Filter/Search tasks**
7. **Theme toggle (Dark/Light)**
8. **DOM Inspector**: Clicking a task shows a panel displaying its:

   - `nodeName`
   - `nodeType`
   - `parentNode`
   - `childNodes.length`
   - `attributes`

---

### 🔍 DOM Concepts to Apply:

You **must use or demonstrate** the following:

- `document.createElement()`
- `appendChild()` / `insertBefore()` / `removeChild()`
- `classList.add/remove/toggle/contains`
- `setAttribute()` / `getAttribute()` / `hasAttribute()` / `removeAttribute()`
- `querySelector()` / `getElementById()` / `getElementsByClassName()` / `getElementsByTagName()`
- `textContent` / `innerText` / `innerHTML`
- `cloneNode(true/false)`
- `nodeType`, `nodeName`, `nodeValue`
- `parentNode`, `childNodes`, `nextSibling`, `previousSibling`
- `event.target`, `event.currentTarget`, `preventDefault()`, `stopPropagation()`
- `addEventListener()` for multiple events (click, input, keypress, drag & drop)
- Optional: `MutationObserver` (to observe live DOM changes)

---

### 🧱 Starter HTML Template

You may begin with this structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Smart To-Do List</title>
    <style>
      body {
        font-family: sans-serif;
        margin: 2rem;
      }
      .done {
        text-decoration: line-through;
        color: gray;
      }
      .task {
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: 1px solid #ccc;
      }
      .high {
        border-left: 5px solid red;
      }
      .medium {
        border-left: 5px solid orange;
      }
      .low {
        border-left: 5px solid green;
      }
      .dark {
        background: #222;
        color: #eee;
      }
      .light {
        background: #fff;
        color: #000;
      }
    </style>
  </head>
  <body class="light">
    <h2>Smart To-Do List Manager</h2>

    <label>Task: <input id="taskInput" type="text" /></label>
    <label
      >Priority:
      <select id="prioritySelect">
        <option value="low">Low</option>
        <option value="medium" selected>Medium</option>
        <option value="high">High</option>
      </select>
    </label>
    <label>Category: <input id="categoryInput" type="text" /></label>
    <label>Due Date: <input id="dateInput" type="date" /></label>
    <button id="addBtn">Add Task</button>

    <input type="text" id="searchInput" placeholder="Search tasks..." />

    <button id="toggleTheme">Toggle Theme</button>

    <ul id="taskList"></ul>

    <div id="inspector">
      <h4>DOM Inspector</h4>
      <pre id="nodeDetails">Click a task to inspect</pre>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

---

### 💻 What You’ll Do in `script.js`:

- Create DOM elements dynamically using `createElement`
- Set priority styles based on selection
- Attach event listeners: `click`, `input`, `drag`, `drop`, etc.
- Update DOM content (`textContent`, `innerHTML`)
- Use `cloneNode` to duplicate tasks
- Access node properties like `nodeType`, `nodeName`, `parentNode`, etc.
- Manage attributes with `getAttribute`, `setAttribute`, etc.
- Dynamically update theme (using `classList.toggle`)
- Bonus: Use `MutationObserver` to log changes to the task list.

---

### 🧪 Bonus Challenges:

- Save tasks to `localStorage` and reload on refresh
- Animate task addition/removal
- Add context menu for editing/deleting tasks
- Add "Undo" for deletions using a stack (array of deleted nodes)

---

Would you like me to generate a starter `script.js` file to go with this?

# Breadcrumbs Navigation

Breadcrumbs Navigation for React App. With this Package, you can use Breadcrumbs Navigation very easily. There is no need for server response it can work on the client side.

## Installation

Install Breadcrumbs with npm

```bash
  npm i breadcrumbs-nav
```

## Usage/Examples

```javascript
import Breadcrumbs from "breadcrumbs-nav";

function App() {
  return <Breadcrumbs />;
}

export default App;
```

## Demo

| Default                                                                | Home Icon Change                                                       | Seperator Icon Change                                                  |
| :--------------------------------------------------------------------- | :--------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| ![](https://img001.prntscr.com/file/img001/90FhkjRXT16snd0F6NOSLA.png) | ![](https://img001.prntscr.com/file/img001/38rRv2ECQBeytAWehQD0Gg.png) | ![](https://img001.prntscr.com/file/img001/1oCLQKuASPK_V7guYRlPQg.png) |

## API Reference

#### Import Package

```javascript
import Breadcrumbs from "breadcrumbs-nav";
```

#### Add Component

```javascript
<Breadcrumbs />
```

#### Change Home Icon

Here you can add icon component, For example here used react-icons component. If you want can use custom icon or text

```javascript
import { FaHome } from "react-icons/fa";

<Breadcrumbs homeIcon={<FaHome />} />;
```

#### Change Separator Icon

Here you can add icon component, For example here used react-icons component. If you want can use custom icon or text

```javascript
import { IoChevronForward } from "react-icons/io5";

<Breadcrumbs separatorIcon={<IoChevronForward />} />;
```

#### Add Addtiononal CSS Class

Two diffrent CSS class props available here, you can change style by addting class name in this props. Examaple in below-

```javascript
<Breadcrumbs className="py-1" classNameText="pl-2" />
```

| Parameter       | Type     | Description                                                                   |
| :-------------- | :------- | :---------------------------------------------------------------------------- |
| `className`     | `string` | You can add class for main Breadcrumbs div. Ex- color, font-style etc.        |
| `classNameText` | `string` | You can add class for bread text. Ex- font-style, color, padding etc.         |
| `homeIcon`      | `string` | **Default Home icon**, but you change it by text or icon component.           |
| `separatorIcon` | `string` | **Default ChevronForward icon**, but you change it by text or icon component. |

## 🚀 About Me

I'm a MERN stack developer...

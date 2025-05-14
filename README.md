# React Skills Icons

A flexible React component library for displaying programming and technology skill icons, built on top of [react-icons](https://react-icons.github.io/react-icons/).

## Features

- 100+ technology and skill icons
- Based on react-icons library
- Support for custom icons
- Customizable size and colors
- Optional labels
- TypeScript support
- Built-in Tailwind CSS support

## Installation

```bash
npm install react-skills-icons 
```

## Usage

```jsx
import { SkillIcon } from 'react-skills-icons';
import { FaCode } from 'react-icons/fa';

// Basic usage
<SkillIcon name="react" />

// With custom size
<SkillIcon name="javascript" size={32} />

// With custom color
<SkillIcon name="typescript" color="#3178C6" />

// With custom icon from react-icons
```bash
npm install react-icons
```
import { FaCode } from 'react-icons/fa';
<SkillIcon name="custom" customIcon={FaCode} />

// With label
<SkillIcon name="python" showLabel={true} />

// With custom label styling
<SkillIcon 
  name="nodejs" 
  showLabel={true}
  textSize="lg"
  labelClassName="font-bold"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | The name of the icon to display |
| size | number | 24 | Size of the icon in pixels |
| color | string | - | Color of the icon (hex, rgb, etc.) |
| customIcon | IconType | - | Custom react-icons component |
| showLabel | boolean | true | Whether to show the icon label |
| labelClassName | string | - | Additional classes for the label |
| className | string | - | Additional classes for the icon wrapper |
| textSize | 'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' | 'xs' | Size of the label text |

## Custom Icons

The library is built on top of react-icons, which means you can:
1. Use any icon from the react-icons library as a custom icon
2. Maintain consistency with the built-in icons
3. Get the same styling and customization options

Example with custom icon:
```jsx
import { FaCode } from 'react-icons/fa';

// Use a custom icon from react-icons
<SkillIcon 
  name="custom-skill" 
  customIcon={FaCode}
  size={32}
  color="#ff0000"
  showLabel={true}
/>
```

## Available Icons

The library includes icons for popular technologies including:

- Programming Languages (JavaScript, TypeScript, Python, etc.)
- Frontend Frameworks (React, Vue, Angular, etc.)
- Backend Technologies (Node.js, Django, etc.)
- Databases (PostgreSQL, MongoDB, etc.)
- Cloud Services (AWS, Azure, GCP, etc.)
- And many more!

For a complete list of available icons, check out our [Storybook documentation](https://galkremer1.github.io/react-skills-icons).

## Documentation

For full documentation and interactive examples, visit our [Storybook documentation](https://galkremer1.github.io/react-skills-icons).

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run Storybook
npm run storybook

# Build the library
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Gal Kremer](https://github.com/galkremer1)

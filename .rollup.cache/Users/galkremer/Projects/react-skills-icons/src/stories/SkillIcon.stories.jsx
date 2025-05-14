import React from 'react';
import { SkillIcon } from '../components/SkillIcon';
import { iconMappings } from '../constants/iconMappings';
var meta = {
    title: 'Components/SkillIcon',
    component: SkillIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: iconMappings.map(function (icon) { return icon.name; }),
            description: 'The name of the icon to display',
        },
        size: {
            control: { type: 'number', min: 16, max: 128, step: 8 },
            description: 'Size of the icon in pixels',
        },
        color: {
            control: 'color',
            description: 'Color of the icon',
        },
    },
};
export default meta;
// Base story with default props
export var Default = {
    args: {
        name: 'react',
        size: 24,
    },
};
// Story showcasing different sizes
export var Sizes = {
    render: function () { return (<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <SkillIcon name="react" size={16}/>
      <SkillIcon name="react" size={24}/>
      <SkillIcon name="react" size={32}/>
      <SkillIcon name="react" size={48}/>
    </div>); },
};
// Story showcasing different colors
export var Colors = {
    args: {
        name: "rust",
        size: 22,
        color: "blue"
    },
    render: function () { return (<div style={{ display: 'flex', gap: '1rem' }}>
      <SkillIcon name="react" color="#61DAFB"/>
      <SkillIcon name="react" color="#FF4785"/>
      <SkillIcon name="react" color="#1EA7FD"/>
    </div>); }
};
// Grid of all available icons
export var AllIcons = {
    args: {
        name: "postgresql"
    },
    render: function () { return (<div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '1rem',
            padding: '1rem',
        }}>
      {iconMappings.map(function (icon) { return (<div key={icon.name} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1rem',
                border: '1px solid #eee',
                borderRadius: '8px',
            }}>
          <SkillIcon name={icon.name} size={32}/>
          <span style={{
                marginTop: '0.5rem',
                fontSize: '12px',
                textAlign: 'center',
            }}>
            {icon.name}
          </span>
        </div>); })}
    </div>); }
};
//# sourceMappingURL=SkillIcon.stories.jsx.map
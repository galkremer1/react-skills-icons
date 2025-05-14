import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SkillIcon } from '../components/SkillIcon';
import { iconMappings } from '../constants/iconMappings';

const meta: Meta<typeof SkillIcon> = {
  title: 'Components/SkillIcon',
  component: SkillIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    skill: {
      control: 'select',
      options: iconMappings.map((icon) => icon.skill),
    },
    size: { control: 'number' },
    color: { control: 'color' },
    showLabel: { control: 'boolean' },
    customLabel: { control: 'text' },
    labelClassName: {
      table: {
        disable: true
      }
    },
    textSize: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
    },
    className: {
      table: {
        disable: true
      }
    },
    customIcon: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof SkillIcon>;

// Base story with default props
export const Default: Story = {
  args: {
    skill: "react",
    size: 32,
    showLabel: true
  }
};

// Story showcasing different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <SkillIcon skill="react" size={16} />
      <SkillIcon skill="react" size={24} />
      <SkillIcon skill="react" size={32} />
      <SkillIcon skill="react" size={48} />
    </div>
  ),
};

// Story showcasing different colors
export const Colors: Story = {
  args: {
    skill: "rust",
    size: 22,
    color: "blue"
  },

  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <SkillIcon skill="react" color="#61DAFB" />
      <SkillIcon skill="react" color="#FF4785" />
      <SkillIcon skill="react" color="#1EA7FD" />
    </div>
  )
};

// Grid of all available icons
export const AllIcons: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true, disable: true },
  },
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: '1rem',
      padding: '1rem',
      width: '100%',
      maxWidth: '600px',
    }}>
      {iconMappings.map((icon) => (
        <div
          key={icon.skill}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            border: '1px solid #eee',
            borderRadius: '8px',
            backgroundColor: '#fff',
          }}
        >
          <SkillIcon skill={icon.skill} size={32} />
        </div>
      ))}
    </div>
  )
};

// Story showcasing custom label
export const WithCustomLabel: Story = {
  args: {
    skill: "typescript",
    size: 32,
    showLabel: true,
    customLabel: "TypeScript Language",
    textSize: "lg"
  }
};
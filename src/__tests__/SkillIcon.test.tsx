import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkillIcon } from '../components/SkillIcon';
import { FaCode } from 'react-icons/fa';

const ICON_SKILL = 'JavaScript';
const ICON_SKILL_TEST_ID = ICON_SKILL.toLowerCase();

describe('SkillIcon', () => {
  it('renders with default icon', () => {
    render(<SkillIcon skill={ICON_SKILL} />);
    const wrapper = screen.getByTestId(`skill-icon-${ICON_SKILL_TEST_ID}`);
    expect(wrapper).toBeInTheDocument();
  });

  it('renders with custom icon', () => {
    render(<SkillIcon skill="custom" customIcon={FaCode} />);
    const wrapper = screen.getByTestId('skill-icon-custom');
    expect(wrapper).toBeInTheDocument();
  });

  it('applies custom size', () => {
    render(<SkillIcon skill={ICON_SKILL} size={48} />);
    const icon = screen.getByTestId(`skill-icon-${ICON_SKILL_TEST_ID}`).querySelector('svg');
    expect(icon).toHaveAttribute('width', '48');
    expect(icon).toHaveAttribute('height', '48');
  });

  it('applies custom color', () => {
    const targetColor = '#FF0000';
    render(<SkillIcon skill={ICON_SKILL} color={targetColor} />);
    const icon = screen.getByTestId(`skill-icon-${ICON_SKILL_TEST_ID}`).querySelector('svg');
    expect(icon).toHaveStyle({ color: targetColor });
  });

  it('shows label when showLabel is true', () => {
    render(<SkillIcon skill={ICON_SKILL} showLabel={true} />);
    const label = screen.getByText(ICON_SKILL);
    expect(label).toBeInTheDocument();
  });

  it('hides label when showLabel is false', () => {
    render(<SkillIcon skill={ICON_SKILL} showLabel={false} />);
    const label = screen.queryByText(ICON_SKILL);
    expect(label).not.toBeInTheDocument();
  });

  it('applies custom label className', () => {
    render(<SkillIcon skill={ICON_SKILL} labelClassName="test-class" />);
    const label = screen.getByText(ICON_SKILL);
    expect(label).toHaveClass('test-class');
  });

  it('applies custom text size', () => {
    render(<SkillIcon skill={ICON_SKILL} textSize="2xl" />);
    const label = screen.getByText(ICON_SKILL);
    expect(label).toHaveClass('text-2xl');
  });

  it('displays custom label when provided', () => {
    const customLabel = 'Custom JavaScript';
    render(<SkillIcon skill={ICON_SKILL} customLabel={customLabel} showLabel={true} />);
    const label = screen.getByText(customLabel);
    expect(label).toBeInTheDocument();
  });

  it('prefers custom label over default name', () => {
    const customLabel = 'Custom Label';
    render(<SkillIcon skill={ICON_SKILL} customLabel={customLabel} showLabel={true} />);
    expect(screen.queryByText(ICON_SKILL)).not.toBeInTheDocument();
    expect(screen.getByText(customLabel)).toBeInTheDocument();
  });

  it('ignores custom label when showLabel is false', () => {
    const customLabel = 'Custom Label';
    render(<SkillIcon skill={ICON_SKILL} customLabel={customLabel} showLabel={false} />);
    expect(screen.queryByText(customLabel)).not.toBeInTheDocument();
  });
});
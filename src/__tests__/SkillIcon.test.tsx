import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkillIcon } from '../components/SkillIcon';
import { FaCode } from 'react-icons/fa';

const TEST_ICON_NAME = 'javascript';

describe('SkillIcon', () => {
  it('renders with default icon', () => {
    render(<SkillIcon name={TEST_ICON_NAME} />);
    const wrapper = screen.getByTestId(`skill-icon-${TEST_ICON_NAME}`);
    expect(wrapper).toBeInTheDocument();
  });

  it('renders with custom icon', () => {
    render(<SkillIcon name="custom" customIcon={FaCode} />);
    const wrapper = screen.getByTestId('skill-icon-custom');
    expect(wrapper).toBeInTheDocument();
  });

  it('applies custom size', () => {
    render(<SkillIcon name={TEST_ICON_NAME} size={48} />);
    const icon = screen.getByTestId(`skill-icon-${TEST_ICON_NAME}`).querySelector('svg');
    expect(icon).toHaveAttribute('width', '48');
    expect(icon).toHaveAttribute('height', '48');
  });

  it('applies custom color', () => {
    const targetColor = '#FF0000';
    render(<SkillIcon name={TEST_ICON_NAME} color={targetColor} />);
    const icon = screen.getByTestId(`skill-icon-${TEST_ICON_NAME}`).querySelector('svg');
    expect(icon).toHaveStyle({ color: targetColor });
  });

  it('shows label when showLabel is true', () => {
    render(<SkillIcon name={TEST_ICON_NAME} showLabel={true} />);
    const label = screen.getByText(TEST_ICON_NAME);
    expect(label).toBeInTheDocument();
  });

  it('hides label when showLabel is false', () => {
    render(<SkillIcon name={TEST_ICON_NAME} showLabel={false} />);
    const label = screen.queryByText(TEST_ICON_NAME);
    expect(label).not.toBeInTheDocument();
  });

  it('applies custom label className', () => {
    render(<SkillIcon name={TEST_ICON_NAME} labelClassName="test-class" />);
    const label = screen.getByText(TEST_ICON_NAME);
    expect(label).toHaveClass('test-class');
  });

  it('applies custom text size', () => {
    render(<SkillIcon name={TEST_ICON_NAME} textSize="2xl" />);
    const label = screen.getByText(TEST_ICON_NAME);
    expect(label).toHaveClass('text-2xl');
  });

  it('displays custom label when provided', () => {
    const customLabel = 'Custom JavaScript';
    render(<SkillIcon name={TEST_ICON_NAME} customLabel={customLabel} showLabel={true} />);
    const label = screen.getByText(customLabel);
    expect(label).toBeInTheDocument();
  });

  it('prefers custom label over default name', () => {
    const customLabel = 'Custom Label';
    render(<SkillIcon name={TEST_ICON_NAME} customLabel={customLabel} showLabel={true} />);
    expect(screen.queryByText(TEST_ICON_NAME)).not.toBeInTheDocument();
    expect(screen.getByText(customLabel)).toBeInTheDocument();
  });

  it('ignores custom label when showLabel is false', () => {
    const customLabel = 'Custom Label';
    render(<SkillIcon name={TEST_ICON_NAME} customLabel={customLabel} showLabel={false} />);
    expect(screen.queryByText(customLabel)).not.toBeInTheDocument();
  });
});
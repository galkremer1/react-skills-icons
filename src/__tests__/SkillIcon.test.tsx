import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkillIcon } from '../components/SkillIcon';
import { FaCode } from 'react-icons/fa';

const TEST_ICON_NAME = 'javascript';

describe('SkillIcon', () => {
  it('renders with default icon', () => {
    render(<SkillIcon name={TEST_ICON_NAME} />);
    expect(screen.getByTitle(TEST_ICON_NAME)).toBeInTheDocument();
  });

  it('renders with custom icon', () => {
    render(<SkillIcon name="custom" customIcon={FaCode} />);
    expect(screen.getByTitle('custom')).toBeInTheDocument();
  });

  it('applies custom size', () => {
    render(<SkillIcon name={TEST_ICON_NAME} size={48} />);
    const svgElement = screen.getByRole('img', { name: TEST_ICON_NAME });
    expect(svgElement).toHaveAttribute('width', '48');
    expect(svgElement).toHaveAttribute('height', '48');
  });

  it('applies custom color', () => {
    const targetColor = '#FF0000';
    render(<SkillIcon name={TEST_ICON_NAME} color={targetColor} />);
    const svgElement = screen.getByRole('img', { name: TEST_ICON_NAME });
    expect(svgElement).toHaveAttribute('color', targetColor);
  });
});
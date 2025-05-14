import { iconMappings, getIconBySkill } from '../constants/iconMappings';

describe('Icon Mappings', () => {
  test('all mappings have required properties', () => {
    iconMappings.forEach(mapping => {
      expect(mapping).toHaveProperty('skill');
      expect(mapping).toHaveProperty('aliases');
      expect(mapping).toHaveProperty('title');
      expect(mapping).toHaveProperty('icon');
      expect(mapping).toHaveProperty('category');
      expect(mapping.icon).toBeDefined();
      expect(typeof mapping.skill).toBe('string');
      expect(typeof mapping.category).toBe('string');
    });
  });

  test('no duplicate names in mappings', () => {
    const names = iconMappings.map(mapping => mapping.skill);
    const uniqueNames = new Set(names);
    expect(names.length).toBe(uniqueNames.size);
  });

  test('all categories are valid', () => {
    const validCategories = ['programming', 'framework', 'database', 'cloud', 'tool', 'platform'];
    iconMappings.forEach(mapping => {
      expect(validCategories).toContain(mapping.category);
    });
  });
});

describe('getIconBySkill', () => {
  test('returns correct icon for exact name match', () => {
    const result = getIconBySkill('javascript');
    expect(result).toBeDefined();
    expect(result?.skill).toBe('javascript');
    expect(result?.title).toBe('JavaScript');
    expect(result?.icon).toBeDefined();
  });

  test('returns correct icon for alias match', () => {
    const result = getIconBySkill('js');
    expect(result).toBeDefined();
    expect(result?.skill).toBe('javascript');
    expect(result?.icon).toBeDefined();
  });

  test('returns undefined for non-existent icon', () => {
    const result = getIconBySkill('nonexistent');
    expect(result).toBeUndefined();
  });

  test('is case insensitive', () => {
    const result = getIconBySkill('JAVASCRIPT');
    expect(result).toBeDefined();
    expect(result?.skill).toBe('javascript');
  });

  test('handles alternative versions correctly', () => {
    const result = getIconBySkill('javascript1');
    expect(result).toBeDefined();
    expect(result?.skill).toBe('javascript1');
    expect(result?.icon).toBeDefined();
  });
});
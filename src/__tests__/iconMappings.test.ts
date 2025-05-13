import { iconMappings, getIconByName } from '../constants/iconMappings';

describe('Icon Mappings', () => {
  test('all mappings have required properties', () => {
    iconMappings.forEach(mapping => {
      expect(mapping).toHaveProperty('name');
      expect(mapping).toHaveProperty('icon');
      expect(mapping).toHaveProperty('category');
      expect(mapping.icon).toBeDefined();
      expect(typeof mapping.name).toBe('string');
      expect(typeof mapping.category).toBe('string');
    });
  });

  test('no duplicate names in mappings', () => {
    const names = iconMappings.map(mapping => mapping.name);
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

describe('getIconByName', () => {
  test('returns correct icon for exact name match', () => {
    const result = getIconByName('javascript');
    expect(result).toBeDefined();
    expect(result?.name).toBe('javascript');
    expect(result?.icon).toBeDefined();
  });

  test('returns correct icon for alias match', () => {
    const result = getIconByName('js');
    expect(result).toBeDefined();
    expect(result?.name).toBe('javascript');
    expect(result?.icon).toBeDefined();
  });

  test('returns undefined for non-existent icon', () => {
    const result = getIconByName('nonexistent');
    expect(result).toBeUndefined();
  });

  test('is case insensitive', () => {
    const result = getIconByName('JAVASCRIPT');
    expect(result).toBeDefined();
    expect(result?.name).toBe('javascript');
  });

  test('handles alternative versions correctly', () => {
    const result = getIconByName('javascript1');
    expect(result).toBeDefined();
    expect(result?.name).toBe('javascript1');
    expect(result?.icon).toBeDefined();
  });
});
import { SearchParams } from '@/types/common';
import { createUrl, formatUrlParams } from '@/utils/format-url-params';

describe('format url functions', () => {
  const searchParams: SearchParams = {
    a: 1,
    b: 2,
    c: 3,
  };

  test('formatUrlParams() should work', () => {
    const expectedValue = '&a=1&b=2&c=3';

    expect(formatUrlParams(searchParams)).toBe(expectedValue);
  });

  test('createUrl() should work', () => {
    const baseUrl = 'http://example.com';
    const expectedValue = `http://example.com?&a=1&b=2&c=3`;

    expect(createUrl(baseUrl, searchParams)).toBe(expectedValue);
  });
});

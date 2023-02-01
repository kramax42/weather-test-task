import { getOutdatedRequestDate } from '@/utils/get-date';
import { isCacheRequestOutdated } from '@/utils/is-cache-outdated';

describe('Request cache function', () => {
  test('isCacheRequestOutdated() should work for outdated request', () => {
    const outdatedCacheTime = getOutdatedRequestDate();
    expect(isCacheRequestOutdated(outdatedCacheTime)).toBe(true);
  });

  test('isCacheRequestOutdated() should work for not outdated request', () => {
    const outdatedCacheTime = Date.now().toString();
    expect(isCacheRequestOutdated(outdatedCacheTime)).toBe(false);
  });
});

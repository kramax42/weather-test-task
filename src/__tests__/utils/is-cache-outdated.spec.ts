import { getOutdatedRequestDate } from '@/utils/get-date';
import { isCacheRequestOutdated } from '@/utils/is-cache-outdated';

describe('Request cache function', () => {
  test('isCacheRequestOutdated() should work', () => {
    const outdatedCacheTime = getOutdatedRequestDate();
    expect(isCacheRequestOutdated(outdatedCacheTime)).toBe(true);
  });
});

import { getUrl } from "../url";


describe("url", () => {
  it('should return a string', () => {

    const url = getUrl(new Date());

    expect(url).toBeDefined();
    expect(typeof url).toBe('string');
  })
});
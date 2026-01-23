import { describe, it, expect } from 'vitest';
import { members } from '$lib/data/members';

describe('Members data', () => {
  it('should have 4 members', () => {
    expect(members).toHaveLength(4);
  });

  it('should have all expected members', () => {
    const names = members.map((m) => m.name);
    expect(names).toEqual(['Angela', 'Benjamin', 'Frida', 'Luna']);
  });
});

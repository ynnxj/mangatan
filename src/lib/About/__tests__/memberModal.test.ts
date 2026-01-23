import { describe, it, expect, beforeEach } from 'vitest';

describe('Test member modal logic', () => {
  let selectedMember: string | null = null;

  const openMember = (name: string) => {
      selectedMember = name;
    },
    closeMember = () => {
      selectedMember = null;
    };

  // Reset before each test
  beforeEach(() => {
    selectedMember = null;
  });

  it('should open and close member Angela modal', () => {
    openMember('Angela');
    expect(selectedMember).toBe('Angela');

    closeMember();
    expect(selectedMember).toBeNull();
  });

  it('should open different members', () => {
    const members = ['Angela', 'Benjamin', 'Frida', 'Luna'];

    members.forEach((member) => {
      openMember(member);
      expect(selectedMember).toBe(member);
      closeMember();
    });
  });
});

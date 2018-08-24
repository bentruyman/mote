import { Command } from './command';
import {
  UnknownGetterError,
  UnknownRangeError,
  UnknownSetterError
} from './errors';

describe('Command', () => {
  describe('#invoke', () => {
    /**
     * The Command object doesn't actually "invoke" anything. Rather, it
     * determines whether or not an "API value" can be translated into a known
     * valid command to the receiver. "API value" refers to the values that get
     * translated from more human-friendly terms like 'phono' to 'PHONO'
     * (usually just translating lowercase to uppercase).
     */
    describe('with valid commands', () => {
      let command: Command;

      beforeAll(() => {
        command = new Command('ABC', [
          { type: 'getter', description: 'getter' },
          { type: 'setter', label: 'foo', value: 'FOO', description: 'foo' },
          { type: 'setter', label: 'bar', value: 'BAR', description: 'bar' },
          { type: 'range', min: 0, max: 10, description: 'range' }
        ]);
      });

      it('creates a valid setter command', () => {
        expect(command.invoke('foo')).toBe('ABCFOO');
        expect(command.invoke('bar')).toBe('ABCBAR');
      });

      it('creates a valid getter command', () => {
        expect(command.invoke()).toBe('ABC?');
      });

      it('creates a valid range command', () => {
        expect(command.invoke(9)).toBe('ABC09');
        expect(command.invoke(10)).toBe('ABC10');
      });
    });
  });

  describe('with invalid commands', () => {
    let command: Command;

    beforeAll(() => {
      command = new Command('ABC', [
        { type: 'setter', label: 'foo', value: 'FOO', description: 'foo' }
      ]);
    });

    it('throws an exception for an unknown setter command', () => {
      expect(() => command.invoke('bar')).toThrow(UnknownSetterError);
    });

    it('throws an exception for an unset getter command', () => {
      expect(() => command.invoke()).toThrow(UnknownGetterError);
    });

    it('throws an exception for an unknown range command', () => {
      expect(() => command.invoke(0)).toThrow(UnknownRangeError);
    });
  });

  describe('validating parameters', () => {
    it('ensures no more than one getter parameter exists', () => {

    });

    it('ensures no duplicate setter parameters exist', () => {

    });

    it('ensures no more than one ranged parameter exists', () => {

    });
  });
});

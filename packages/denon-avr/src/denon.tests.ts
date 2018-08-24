import { Command } from './command';
import { Denon } from './denon';
import {
  UnknownGetterError,
  UnknownRangeError,
  UnknownSetterError
} from './errors';

function makeWriteMockedClient (): Denon {
  const denon = new Denon('host', 1234);

  denon.write = jest.fn();

  return denon;
}

describe('Denon', () => {
  describe('basic functionality', () => {
    it('executes a getter command', () => {
      const denon = makeWriteMockedClient();

      const command = new Command('FOO', [
        { type: 'getter' }
      ]);

      denon.invokeCommand(command);

      expect(denon.write).toHaveBeenCalledWith('FOO?');
    });

    it('executes a setter command', () => {
      const denon = makeWriteMockedClient();

      const command = new Command('FOO', [
        { type: 'setter', label: 'bar', value: 'BAR' }
      ]);

      denon.invokeCommand(command, 'bar');

      expect(denon.write).toHaveBeenCalledWith('FOOBAR');
    });

    it('executes a range command', () => {
      const denon = makeWriteMockedClient();

      const command = new Command('FOO', [
        { type: 'range', min: 0, max: 10 }
      ]);

      denon.invokeCommand(command, 10);

      expect(denon.write).toHaveBeenCalledWith('FOO10');
    });

    it('throws an exception if a getter is invoked when none exists', () => {
      const denon = makeWriteMockedClient();

      const command = new Command('FOO', [
        { type: 'setter', label: 'bar', value: 'BAR' }
      ]);

      expect(() => {
        denon.invokeCommand(command);
      }).toThrow(UnknownGetterError);
    });

    it('throws an exception if an invalid setter command was sent', () => {
      const denon = makeWriteMockedClient();

      const command = new Command('FOO', [
        { type: 'getter' }
      ]);

      expect(() => {
        denon.invokeCommand(command, 'baz');
      }).toThrow(UnknownSetterError);
    });

    it('throws an exception if a number was provided but no range command exists', () => {
      const denon = makeWriteMockedClient();

      const command = new Command('FOO', [
        { type: 'getter' }
      ]);

      expect(() => {
        denon.invokeCommand(command, 10);
      }).toThrow(UnknownRangeError);
    });
  });

  describe('real commands', () => {
    it('executes a "switch input" command', () => {
      const denon = makeWriteMockedClient();

      denon.input('ipod');

      expect(denon.write).toHaveBeenCalledWith('SIIPOD');
    });

    it('executes a "master volume" command', () => {
      const denon = makeWriteMockedClient();

      denon.masterVolume(5);

      expect(denon.write).toHaveBeenCalledWith('MV05');
    });

    it('executes a "power" command', () => {
      const denon = makeWriteMockedClient();

      denon.power('on');

      expect(denon.write).toHaveBeenCalledWith('PWON');
    });
  });
});

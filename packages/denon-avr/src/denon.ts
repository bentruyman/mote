import { Command } from './command';
import { Connection } from './connection';
import InputCommand from './commands/input';
import MasterVolumeCommand from './commands/masterVolume';
import PowerCommand from './commands/power';

type CommandParameter = number | string;

export class Denon extends Connection {
  /**
   * Creates an instance of the Denon client
   */
  static createClient (host: string, port?: number): Denon {
    return new Denon(host, port);
  }

  /**
   * Invokes a given command with an optional parameter. This will send the
   * string message to the Denon telnet server, resolving either nothing or a
   * return value if a getter was invoked.
   */
  invokeCommand (command: Command, param?: CommandParameter) {
    const message = command.invoke(param);

    this.write(message);
  }

  /**
   * Executes an input switch command
   */
  input (param?: CommandParameter) {
    return this.invokeCommand(InputCommand, param);
  }

  /**
   * Executes an master volume command
   */
  masterVolume (param?: CommandParameter) {
    return this.invokeCommand(MasterVolumeCommand, param);
  }

  /**
   * Executes an power state command
   */
  power (param?: CommandParameter) {
    return this.invokeCommand(PowerCommand, param);
  }
}

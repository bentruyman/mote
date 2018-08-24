import { Command } from '../command';

export default new Command('PW', [
  { type: 'getter', description: 'gets current power status' },
  { type: 'setter', label: 'on', value: 'ON', description: 'turns power on' },
  { type: 'setter', label: 'standby', value: 'STANDBY', description: 'go to standby mode' }
]);

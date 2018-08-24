import { Command } from '../command';

export default new Command('MV', [
  { type: 'getter', description: 'gets current volume status' },
  { type: 'range', min: 0, max: 99, description: 'turns volume to specific value' },
  { type: 'setter', label: 'up', value: 'UP', description: 'turns volume one step up' },
  { type: 'setter', label: 'down', value: 'DOWN', description: 'turns volume one step down' }
]);

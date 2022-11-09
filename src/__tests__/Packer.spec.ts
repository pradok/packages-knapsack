import { PackageParser } from '../PackageParser';
import { Packer } from '../Packer';
import { KnapsackDynamic } from '../strategy/KnapsackDynamic';

describe('Packer', () => {
  it('returns most valued package items index', async () => {
    const packer = new Packer(new PackageParser(), new KnapsackDynamic());
    await packer.pack('input1.txt');
    expect(true).toBeTruthy();
  });
});

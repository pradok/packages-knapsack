import { PackageParser } from '../PackageParser';
import { Packer } from '../Packer';
import { KnapsackDynamic } from '../strategy/KnapsackDynamic';

describe('Packer', () => {
  it('returns most valued package items index', async () => {
    const packer = new Packer(new PackageParser(), new KnapsackDynamic());
    const packageIndexes = await packer.pack('input1.txt');
    expect(packageIndexes).toEqual('4\n-\n2,7\n8,9\n');
  });
});

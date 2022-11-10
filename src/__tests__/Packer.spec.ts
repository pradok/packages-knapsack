import { PackageParser } from '../PackageParser';
import { Packer } from '../Packer';
import { KnapsackDynamic } from '../strategy/KnapsackDynamic';
import { validateLine } from '../utils/packageValidator';

describe('Packer', () => {
  it('returns most valued package items index', async () => {
    const packer = new Packer(new PackageParser(), new KnapsackDynamic(), {
      validateLine: validateLine,
    });
    const packageIndexes = await packer.pack('input1.txt');
    expect(packageIndexes).toEqual('4\n-\n2,7\n8,9\n');
  });

  it('returns no valued package items index due to one of the validations not met', async () => {
    const packer = new Packer(new PackageParser(), new KnapsackDynamic(), {
      validateLine: validateLine,
    });
    const packageIndexes = await packer.pack('input2.txt');
    expect(packageIndexes).toEqual('-\n-\n');
  });
});

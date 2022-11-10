import { PackageParser } from './PackageParser';
import { Packer } from './Packer';
import { KnapsackDynamic } from './strategy/KnapsackDynamic';
import { validateLine } from './utils/packageValidator';

export const packer = new Packer(new PackageParser(), new KnapsackDynamic(), {
  validateLine: validateLine,
});

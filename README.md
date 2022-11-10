# Package items the Knapsack way. 

This library has been built using Knapsack Dynamic programming approach.

### Key technologies
- Typescript
- Jest for tests

### Assumptions

- Weights are in kg and converted by the KnapsackDynamic class to lowest unit of grams.
- Input files need to be in `files` folder of this root project.

### Todo further improvements (due to time constraints)

- Better error handling including validation errors.

## Run tests
Run all the test scenarios as per `*.spec.ts` files
#### `npm run test`

Runs the `jest` tests once.

## Validation criteria
If anyone of the following are not met, package indexes won't be returned and instead will return `-` in string.

1. Max weight that a package can take is ≤ 100
2. There might be up to 15 items you need to choose from
3. Max weight and cost of an item is ≤ 100

## Usage scenario
(only a guide if this was packaged as npm otherwise import the packer from index.ts if this project was in its own folder called packer)

```ts
import {packer} from 'packer'
// input1.txt need to be in files folder in root folder of this library.
packer
  .pack('input1.txt')
  .then((packages) => console.log(packages))
  .catch((error) => console.error(error);
```




# stencil-ds-angular-template

⚠️ This project has been archived. ⚠️

This project is no longer actively maintained.

Please see the [Stencil documentation for using the Angular Framework Wrapper](https://stenciljs.com/docs/angular) for instructions as to how to use [`@stencil/angular-output-target`](https://www.npmjs.com/package/@stencil/angular-output-target)

--- 

This is an example repo of building plugins.

## Step 1.

- Update the `package.json` to have the correct package name for this repo.
- Replace `component-library` under `dependencies` with your core stencil package name.

## Step 2.

- Build your core stencil package.

## Step 3.

- Update `src/component-library-module.ts`.
  - You will need to import all of your components from `./directives/proxies`. Currently the file states `DemoComponent` as the only import. This will be replaced with the entire list.
  -  Then update the `DECLARATIONS` const array to also list out all of the component names. It also currently contains `DemoComponent` as the only item, but this will need to be replaced with the entire list.

## Step 4.

- Run build on this package.

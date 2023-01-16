import { create } from '@storybook/theming';
const brandPrimary = '#0a3355';

export default create({
  base: 'light',
  brandTitle: 'Volo Components',
  brandUrl: 'https://volosports.com',
  brandImage: 'https://rivall-public.s3.us-west-1.amazonaws.com/logos/organization-logos/default.webp',
  brandTarget: '_self',
  base: 'light',
  colorPrimary: brandPrimary,
  colorSecondary: brandPrimary,
  appBorderRadius: 4,
  fontCode: 'monospace',
  textColor: 'black',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});

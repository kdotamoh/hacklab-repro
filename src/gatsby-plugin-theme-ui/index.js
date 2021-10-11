const constants = {
  // typography
  display1: 'display1',
  display2: 'display2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subHeading: 'subHeading',
  paragraph1: 'paragraph1',
  paragraph2: 'paragraph2',
  caption: 'caption',
  overline: 'overline',

  // color
  focused: 'focused',
  surface: 'surface',
  border: 'border',
  main: 'main',
  hover: 'hover',
  pressed: 'pressed',
}

const hacklabColors = {
  primary: {
    [constants.focused]: '#610B70', // 25
    [constants.surface]: '#FCEFFF', // 50
    [constants.border]: '#AD3AC2', // 200
    [constants.main]: '#610B70', // 500
    [constants.hover]: '#3D0047', // 700
    [constants.pressed]: '#2D0134', // 900
  },
  danger: {
    [constants.surface]: '#FEF2F2', // 50
    [constants.border]: '#FECACA', // 200
    [constants.main]: '#EF4444', // 500
    [constants.hover]: '#B91C1C', // 700
    [constants.pressed]: '#7F1D1D', // 900
  },
  success: {
    [constants.surface]: '#F0FDF4', // 50
    [constants.border]: '#BBF7D0', // 200
    [constants.main]: '#22C55E', // 500
    [constants.hover]: '#15803D', // 700
    [constants.pressed]: '#14532D', // 900
  },
  warning: {
    [constants.surface]: '#FEFCE8', // 50
    [constants.border]: '#FEF08A', // 200
    [constants.main]: '#EAB308', // 500
    [constants.hover]: '#A16207', // 700
    [constants.pressed]: '#713F12', // 900
  },
  information: {
    [constants.surface]: '#EFF6FF', // 50
    [constants.border]: '#BFDBFE', // 200
    [constants.main]: '#3B82F6', // 500
    [constants.hover]: '#1D4ED8', // 700
    [constants.pressed]: '#1E3A8A', // 900
  },
  neutral: {
    white: '#ffffff', // 25
    backgroundHover: '#F9FAFB', // 50
    backgroundPressed: '#F3F4F6', // 100
    border: '#E5E7EB', // 200
    icondDisabled: '#D1D5DB', // 300
    textDisabled: '#9CA3AF', // 400
    textPlaceholder: '#6B7280', // 500
    textCaption: '#4B5563', // 600
    textInactive: '#374151', // 700
    textBody: '#1F2937', // 800
    textBodyDark: '#111827', // 900
    textActive: '#0A0A0A', // 1000
    black: '#000000', // 1100
  },
}

const breakpoints = ['30rem', '48rem', '56rem']
const theme = {
  breakpoints,
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  fonts: {
    body: 'Gotham',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
  },
  fontSizes: {
    [constants.display1]: '4.5rem',
    [constants.display2]: '4rem',
    [constants.h1]: '3rem',
    [constants.h2]: '2rem',
    [constants.h3]: '1.5rem',
    [constants.h4]: '1.25rem',
    [constants.subHeading]: '1.125rem',
    [constants.paragraph1]: '1rem',
    [constants.paragraph2]: '0.875rem',
    [constants.caption]: '0.75rem',
    [constants.overline]: '0.625rem',
  },
  lineHeights: {
    [constants.display1]: '5rem',
    [constants.display2]: '4.5rem',
    [constants.h1]: '3.5rem',
    [constants.h2]: '2.5rem',
    [constants.h3]: '2rem',
    [constants.h4]: '1.75rem',
    [constants.subHeading]: '1.625rem',
    [constants.paragraph1]: '1.5rem',
    [constants.paragraph2]: '1.375rem',
    [constants.caption]: '1.25rem',
    [constants.overline]: '1.125rem',
  },
  colors: {
    ...hacklabColors,

    // required by theme-ui spec
    text: hacklabColors.neutral.textActive,
    background: hacklabColors.neutral.white,
    primary: hacklabColors.primary.main,
    secondary: '',
    accent: '',
    highlight: '',
    muted: '',
  },
  radii: {
    sm: 4,
    md: 8,
    xl: 32,
  },
  space: {
    gapDefault: '1.5rem',
  },
  sizes: {
    container: '82%',
  },

  // Buttons
  buttons: {
    primary: {
      borderRadius: 'sm',
      fontWeight: 'medium',
    },
    large: {
      borderRadius: 'md',
    },
    rounded: {
      color: 'neutral.black',
      borderRadius: 'xl',
      bg: 'neutral.white',
      fontSize: 'caption',
      fontWeight: 'medium',
      px: '1rem',
      py: '.25rem',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'regular',
      color: 'text',
      p: {
        fontSize: [constants.paragraph1, constants.paragraph1, constants.h4],
      },
    },
  },
}

export default theme

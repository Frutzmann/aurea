export const theme = {
  colors: {
    background: 'var(--background-off-white)',
    primary: 'var(--primary-gold)',
    text: {
      primary: 'var(--text-black)',
      secondary: 'var(--text-secondary)',
    },
    border: 'var(--border-color)',
  },
  typography: {
    fontFamily: {
      heading: 'Bitter, serif',
      body: 'Montserrat, sans-serif',
    },
    fontSize: {
      h1: '3.5rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.75rem',
      h5: '1.5rem',
      body: '1.1rem',
    },
  },
  spacing: {
    section: '6rem',
    container: '2rem',
  },
  shadows: {
    card: 'var(--shadow-card)',
    button: 'var(--shadow-button)',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
  borderRadius: {
    default: '2px',
    button: '1px',
  },
};

export const styles = {
  pageContainer: {
    bgcolor: theme.colors.background,
    minHeight: '100vh',
    py: 6,
  },
  sectionTitle: {
    fontFamily: theme.typography.fontFamily.heading,
    color: theme.colors.primary,
    fontWeight: 600,
    mb: 4,
  },
  bodyText: {
    fontFamily: theme.typography.fontFamily.body,
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.body,
    lineHeight: 1.8,
  },
  card: {
    p: 6,
    bgcolor: 'white',
    borderRadius: theme.borderRadius.default,
    boxShadow: theme.shadows.card,
    border: `1px solid ${theme.colors.border}`,
  },
  button: {
    bgcolor: theme.colors.primary,
    color: 'white',
    fontFamily: theme.typography.fontFamily.body,
    fontWeight: 600,
    px: 4,
    py: 1.5,
    borderRadius: theme.borderRadius.button,
    boxShadow: theme.shadows.button,
    '&:hover': {
      bgcolor: '#b89b3f',
      boxShadow: '0 6px 16px rgba(206, 176, 78, 0.4)',
    },
  },
}; 
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export const BlogContainer = styled(Stack)(({ theme }) => ({
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(0.75),
    paddingRight: theme.spacing(0.75),
    minWidth: 300,
    [theme.breakpoints.up('md')]: {
        gap: theme.spacing(3.1),
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

export const CardLink = styled(Link)({
    textDecoration: 'none',
    display: 'block',
    width: '100%',
});

export const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    minHeight: 520,
    minWidth: 300,
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(160deg, rgba(19, 24, 34, 0.92) 0%, rgba(28, 36, 48, 0.9) 100%)'
        : 'linear-gradient(160deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 250, 252, 0.95) 100%)',
    borderRadius: theme.spacing(2),
    border: theme.palette.mode === 'dark'
        ? '1px solid rgba(255, 255, 255, 0.08)'
        : '1px solid rgba(15, 23, 42, 0.08)',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 28px 72px rgba(0, 0, 0, 0.4)',
        borderColor: theme.palette.mode === 'dark'
            ? 'rgba(148, 163, 184, 0.35)'
            : 'rgba(15, 23, 42, 0.18)',
    },
}));

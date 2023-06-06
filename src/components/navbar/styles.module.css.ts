import { style } from "@vanilla-extract/css";

export const NavBarContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1rem',
  height: '4rem',
  width: '100%',
  backgroundColor: '#f48b01',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  zIndex: 100,
  position: 'sticky',
  top: 0,
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      height: 'auto',
      padding: '1rem 0',
    },
  },
});
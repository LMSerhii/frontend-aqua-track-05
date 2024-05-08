import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

export const WaterProgressBar = () => {
  //check window width and depends styles on that
  let windowWidth = window.innerWidth;

  const height = windowWidth > 767 ? 8 : 8;
  const borderLinearProgressBottom = windowWidth > 767 ? -10 : -5;
  const boxBottom = windowWidth > 767 ? -20 : -10;
  const textMargin = windowWidth > 767 ? '8px' : '0px';

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: height,
    borderRadius: 10,
    bottom: borderLinearProgressBottom,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#F0EFF4',
      BorderLinearProgressBottom: -5,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 1,
      backgroundColor: '#9BE1A0',
    },
  }));

  return (
    <>
      <Typography
        variant="body2"
        fontSize="14px"
        fontWeight="700"
        marginTop={textMargin}
      >
        Today
      </Typography>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={30} />
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          bottom: boxBottom,
        }}
      >
        <Typography variant="body2" fontSize="12px" color="#2F2F2F99">
          0%
        </Typography>
        <Typography variant="body2" fontSize="12px" color="#2F2F2F99">
          50%
        </Typography>
        <Typography variant="body2" fontSize="12px" color="#2F2F2F99">
          100%
        </Typography>
      </Box>
    </>
  );
};

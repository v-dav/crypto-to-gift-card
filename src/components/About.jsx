import { Link } from 'react-router-dom';
import { Container, Typography, Paper, Box, Chip, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(4),
	marginTop: theme.spacing(4),
	marginBottom: theme.spacing(4),
	borderRadius: '16px',
	background: 'rgba(255, 255, 255, 0.8)', // Glass-like background
	backdropFilter: 'blur(10px)', // Apply blur for glassmorphism effect
	boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)', // Soft shadow for elevation
	border: '1px solid rgba(255, 255, 255, 0.2)',
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(2),
	},
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
	marginTop: theme.spacing(3),
	marginBottom: theme.spacing(2),
	color: '#2c3e50', // Darker color for contrast
	fontWeight: 'bold',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.5rem',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(1),
	},
}));

const ChipContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.spacing(1),
	marginBottom: theme.spacing(2),
	[theme.breakpoints.down('sm')]: {
		justifyContent: 'center',
	},
}));

const AuthorSection = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: theme.spacing(4),
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		marginTop: theme.spacing(2),
	},
}));

const LargeIconButton = styled(IconButton)(({ theme }) => ({
	width: '64px',
	height: '64px',
	backgroundColor: '#2c3e50', // Dark background for contrast
	color: '#fff',
	'&:hover': {
		backgroundColor: '#34495e', // Slightly lighter on hover
	},
	'& .MuiSvgIcon-root': {
		fontSize: '40px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '48px',
		height: '48px',
		'& .MuiSvgIcon-root': {
			fontSize: '32px',
		},
	},
}));

function About() {
	return (
		<Container maxWidth="md">
			<StyledPaper elevation={3}>
				<Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}>
					Crypto-to-Gift Card Converter
				</Typography>
				<Typography variant="subtitle1" paragraph sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
					A project idea with an objective to align with Bitrefill's mission and tech stack. Designed to demonstrate skills, interest, and understanding of Bitrefill's goals, tech stack, and core business while showing consideration for the company's visual identity and ability to create cohesive UI.
				</Typography>

				<SectionTitle variant="h4">Features</SectionTitle>
				<Typography component="ul" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
					<li>Users can select a cryptocurrency and enter an amount</li>
					<li>Users search available gift cards by name</li>
					<li>Info tooltips next to crypto inputs for new users</li>
					<li>The app converts the USD amount to selected crypto amount in real-time</li>
					<li>Based on the USD value, it suggests gift cards that the user could purchase</li>
					<li>User can see all gift cards and be redirected to the Bitrefill website</li>
				</Typography>

				<SectionTitle variant="h4">Stack</SectionTitle>
				<ChipContainer>
					<Chip label="React" />
					<Chip label="Vite" />
					<Chip label="CoinGecko API" />
					<Chip label="JSON" />
				</ChipContainer>
				<Typography component="ul" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
					<li>A Single-page application created with React</li>
					<li>Using a CoinGecko public API for cryptocurrency prices (free tier limits API calls to 5-15/min)</li>
					<li>And a JSON file storing a mock list of gift cards</li>
				</Typography>

				<SectionTitle variant="h4">Design</SectionTitle>
				<Typography component="ul" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
					<li>Bitrefill website style and color palette</li>
					<li>Dark/Light theme toggle</li>
					<li>Links to real gift cards</li>
					<li>Clean responsive interface for mobile and desktop</li>
					<li>Loading states for API calls</li>
					<li>Aims to be clean, user-friendly, and aligned with modern web design principles</li>
				</Typography>

				<SectionTitle variant="h4">About Bitrefill</SectionTitle>
				<Typography paragraph sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
					Bitrefill is a prominent player in the crypto-e-commerce space, facilitating the purchase of goods and services using cryptocurrency.
				</Typography>

				<SectionTitle variant="h6">Mission</SectionTitle>
				<Typography paragraph sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
					To promote a circular crypto-economy, allowing users to bypass traditional banking systems and live entirely on crypto. The company is committed to making cryptocurrency a viable alternative to fiat currency.
				</Typography>

				<SectionTitle variant="h6">Platform</SectionTitle>
				<Typography paragraph sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
					Bitrefill's platform supports various digital services like mobile top-ups, gift cards, and more, with a focus on making crypto practical for everyday use.
				</Typography>

				<SectionTitle variant="h4">Author</SectionTitle>
				<Typography paragraph sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>Vladimir Davidov</Typography>
				<AuthorSection>
					<LargeIconButton
						aria-label="github"
						color="primary"
						component="a"
						href="https://github.com/v-dav"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon />
					</LargeIconButton>
				</AuthorSection>

				<Box mt={4} display="flex" justifyContent="center">
					<Button variant="contained" color="primary" component={Link} to="/" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
						Back to Home
					</Button>
				</Box>
			</StyledPaper>
		</Container>
	);
}

export default About;

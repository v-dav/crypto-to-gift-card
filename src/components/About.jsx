import { Link } from 'react-router-dom';
import { Container, Typography, Paper, Box, Chip, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';


const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(4),
	marginTop: theme.spacing(4),
	marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
	marginTop: theme.spacing(3),
	marginBottom: theme.spacing(2),
}));

const ChipContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.spacing(1),
	marginBottom: theme.spacing(2),
}));

const AuthorSection = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: theme.spacing(4),
}));

const LargeIconButton = styled(IconButton)(({ theme }) => ({
	width: '64px',
	height: '64px',
	'& .MuiSvgIcon-root': {
		fontSize: '40px',
	},
}));

function About() {
	return (
		<Container maxWidth="md">
			<StyledPaper elevation={3}>
				<Typography variant="h3" gutterBottom>
					Crypto-to-Gift Card Converter
				</Typography>
				<Typography variant="subtitle1" paragraph>
					A project idea with an objective to align with Bitrefill's mission and tech stack. Designed to demonstrate skills, interest, and understanding of Bitrefill's goals, tech stack, and core business while showing consideration for the company's visual identity and ability to create cohesive UI.
				</Typography>

				<SectionTitle variant="h4">Features</SectionTitle>
				<Typography component="ul">
					<li>Users can select a cryptocurrency and enter an amount</li>
					<li>Users search available gift cards by name</li>
					<li>The app converts the USD amount to selected crypto amount in real-time</li>
					<li>Based on the USD value, it suggests gift cards that the user could purchase</li>
					<li>User can see all gift cards and be redirected to the Bitrefill wesbsite</li>
				</Typography>


				<SectionTitle variant="h4">Stack</SectionTitle>
				<ChipContainer>
					<Chip label="React" />
					<Chip label="Vite" />
					<Chip label="CoinGecko API" />
					<Chip label="JSON" />
				</ChipContainer>
				<Typography component="ul">
					<li>A Single-page application created with React</li>
					<li>Using a CoinGecko public API for cryptocurrency prices</li>
					<li>And a JSON file storing a mock list of gift cards</li>
				</Typography>

				<SectionTitle variant="h4">Design</SectionTitle>
				<Typography component="ul">
					<li>Bitrefill website style and color palette</li>
					<li>Dark/Light theme toggle</li>
					<li>Links to real gift cards</li>
					<li>Clean responsive interface for mobile and desktop</li>
					<li>Loading states for API calls</li>
					<li>Aims to be clean, user-friendly, and aligned with modern web design principles</li>
				</Typography>

				<SectionTitle variant="h4">About Bitrefill</SectionTitle>
				<Typography paragraph>
					Bitrefill is a prominent player in the crypto-e-commerce space, facilitating the purchase of goods and services using cryptocurrency.
				</Typography>

				<SectionTitle variant="h6">Mission</SectionTitle>
				<Typography paragraph>
					To promote a circular crypto-economy, allowing users to bypass traditional banking systems and live entirely on crypto. The company is committed to making cryptocurrency a viable alternative to fiat currency.
				</Typography>

				<SectionTitle variant="h6">Platform</SectionTitle>
				<Typography paragraph>
					Bitrefill's platform supports various digital services like mobile top-ups, gift cards, and more, with a focus on making crypto practical for everyday use.
				</Typography>

				<SectionTitle variant="h4">Author</SectionTitle>
				<Typography paragraph>Vladimir Davidov - Full Stack Software Engineer</Typography>
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
					<Button variant="contained" color="primary" component={Link} to="/">
						Back to Home
					</Button>
				</Box>
			</StyledPaper>
		</Container>
	);
}

export default About;

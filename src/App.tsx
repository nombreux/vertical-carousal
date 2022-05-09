import { useState } from 'react';
import './App.css';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import data from './data';


const ContentFrame = styled.div({
	width: '80vw',
	height: '80vh',
	background: 'seagreen',
	transform: 'translate(10vw,10vh)',
	borderRadius: '5px',
	overflow: 'hidden',


})

const ContentFlex = styled.div({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'flex-end',
	marginLeft: '30%',
	overscrollBehaviorY:'contain',
	'::-webkit-scrollbar': {
		display: 'none',
		marginTop:'-6000px'
		
	},




})

const ImageFrame = styled.div({
	width: '60%',
	height: '100%'
})

const ImageContainer = styled.img({
	objectFit: 'cover',
	aspectRatio: '3/4',
	maxHeight: window.innerWidth * 7 / 5,
	maxWidth: window.innerHeight * 5 / 7,
	// marginLeft: '30%',
	marginTop: '-50px'
})

const Description = styled.div({
	display: 'flex',
	flexDirection: 'column',
	height: '80vh',
	justifyContent: 'space-between',
	textAlign: 'right'


})

const Frame = ({ title, description, imageSrc,translateY,frameIndex }: {
	title?: string,
	description?: string,
	imageSrc?: string,
	frameIndex:number,
	translateY: string | number 
}) => {

	if ((window.innerHeight * 0.9) * (frameIndex - 1) >= translateY) {
		
	}
	else {
		translateY=(window.innerHeight * 0.9) * (frameIndex - 1)
	}	

	return (
		<div className={css({
			transform:`translateY(-${translateY}px)`
		})}>
			<ContentFlex>
				<Description>
					<h1 className={css({
						marginTop: `${40 * frameIndex}px`,
						marginRight:'10px'
						
					})}>
						{title}
					</h1>
					<h3 className={css({
						background: 'seagreen',
						height: '10vh',
						width:'20vw',
						paddingTop: '20px',
						paddingBottom: `60px`,
						marginRight: '10px',
						
					})}>
						{description}
					</h3>
				</Description>
				<ImageFrame>
					<ImageContainer src={imageSrc} alt='' />
				</ImageFrame>
			</ContentFlex>
		</div>
	)
}



function VerticalCarousal() {
	const [scrollY, setScrollY] = useState(1);

	return (
		<div className={css({
			overscrollBehaviorY:'contain'
		})} >
			<ContentFrame onWheel={(e) => {
				setScrollY(Math.floor(scrollY + e.deltaY))				
			}}>

				{
					data.map((item, idx) => {
						return (
							
							<Frame
								key={idx}
								frameIndex={1+idx}
								translateY={1*scrollY}
								description={item.details}
								imageSrc={item.image}
								title={item.title}
							/>
						)
					})
				}

			</ContentFrame>

			<div className={css({
				margin:'50px'
			})}>

			</div>

		</div>


	);
}


const App = () => {
	return (
		
		<div>
			<div className={css({
				display: 'inline-flex',
				flexDirection: 'row',
				justifyContent: 'center',
				fontSize: '4em',
				width: '100%',
				fontFamily: 'monospace',
				fontWeight:'900'
				
			})}>
				Welcome
			</div>

			<VerticalCarousal />
			
			<div className={css({
				margin:'100px'
			})}>

			</div>

			<div className={css({
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: '50px',
				paddingTop:'50px'
			})}>
				<div>

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>

			</div>
		</div>
	)
}




export default App;

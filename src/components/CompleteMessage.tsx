import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const CompleteMessage = () => {
	return (
		<Box>
			<div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
				<Img src="../img/complete1.png"></Img>
				<TextBox>
					<h1 style={{ padding: "2rem" }}> Thanks for making work a better place! 🎉 </h1>
					<p>
						A little kindness and encouragement can go a long way in boosting someone's confidence and motivation! So, let's strive to make our peer reviews a highlight of the sprint with encouraging feedback. After all, we're all in this together and a positive work environment benefits us all.
					</p>
				</TextBox>
				<div style={{ display: "flex", justifyContent: "space-around", padding: "3rem" }}>
					
                    <Link href={'/inbox'} passHref>
                        <ButtonBox style={{ backgroundColor: "transparent", border: "1px solid white", marginRight: "2rem" }}>
                            View my messages
                        </ButtonBox>
                    </Link>
					<Link href={'/'} passHref>
						<ButtonBox style={{ backgroundColor: "#FF6624" }}>
							Complete
						</ButtonBox>
					</Link>
				</div>
			</div>
		</Box>
	)
}

const Box = styled.div`
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    width: 100%;
	padding: 2.5rem;
    justify-content: center;
    align-items: center;
	color: white;

	@media screen and (max-width: 650px) {
		width: 50%;
	}
`

const TextBox = styled.div`
    display:flex;
    flex-direction: column;
    width: 50em;
    overflow-wrap: break-word;
    text-align: center;
`

const Img = styled.img`
	width: 200px;
    margin: 20px;
`;

const ButtonBox = styled.button`
    color: white;
    font-size: 1em;
    width: 15rem;
    padding: 1em;
    border-radius: 5px;
`

export default CompleteMessage
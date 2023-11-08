import { Card, CardBody, defineCssVars, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props{
    game:Game
}
function GameCard({game}:Props){
    return(
    <Card width={300} borderRadius={10} overflow="hidden">
        <Image src={game.background_image}/>
        <CardBody>
            <Heading>{game.name}</Heading>
        </CardBody>
    </Card>
    )
}
export default GameCard
import { SimpleGrid } from '@chakra-ui/react'
import CardForButton from './CardForButton'
import SodoNameliai from "../assets/menu-photos/sodo-nameliai.webp"
import LaukoBaldai from "../assets/menu-photos/Lauko-baldai.webp"
import Pavesine from "../assets/menu-photos/pavesinė.webp"
import SunsBudos from "../assets/menu-photos/suns-budos.webp"
import ZaidimuNameliai from "../assets/menu-photos/zaidimu-namelaiai.webp"
import Supynes from '../assets/menu-photos/supynės.webp'

const MenuButtons = () => {
    return (
        <SimpleGrid columns={2} gap="10px" px={4}>
            <CardForButton href="/sodo-nameliai" imageSrc={SodoNameliai} title={"Sodo Namelaiai"} />
            <CardForButton href="/lauko-baldai" imageSrc={LaukoBaldai} title={"Lauko Baldai"} />
            <CardForButton href="/pavesines" imageSrc={Pavesine} title={"Pavėsinės"} />
            <CardForButton href="/suns-budos" imageSrc={SunsBudos} title={"Šuns būdos"} />
            <CardForButton href="/zaidimu-nameliai" imageSrc={ZaidimuNameliai} title={"Žaidimų nameliai"} />
            <CardForButton href="/supynes" imageSrc={Supynes} title={"Supynės"} />

        </SimpleGrid>
    )
}

export default MenuButtons
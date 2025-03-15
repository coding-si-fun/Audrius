import { VStack, Text, Box } from "@chakra-ui/react"
import NavBar from "./NavBar"
import { Heading } from "@chakra-ui/react"

const ApieMus = () => {
    return (
        <>
            <NavBar category={"Audrius: +37063599672"} />
            <VStack>

                <Heading size="3xl" letterSpacing="wide">Apie mus</Heading>
                <Box p={4}>
                    <Text>
                        <b>AMG – Audriaus Medienos Gaminiai</b>
                        <br /><br />
                        Turėdami daugiau nei <b>25 metų patirtį medžio apdirbime</b>, <b>AMG – Audriaus Medienos Gaminiai</b> kuria aukštos kokybės <b>sodo namelius, pavėsines, lauko baldus, vaikų žaidimų namelius, sūpynes ir kitus medinius gaminius</b>.
                        <br /><br />
                        Mūsų meistriškai pagaminti <b>mediniai gaminiai</b> yra sukurti taip, kad suteiktų jūsų lauko erdvei <b>jaukumo, patvarumo ir natūralaus grožio</b>. Kiekvienas projektas yra kruopščiai išpildytas, atsižvelgiant į klientų pageidavimus ir aukščiausius kokybės standartus.
                        <br /><br />
                        🔹 <b>Mūsų gaminiai:</b>
                        <br />
                        ✔ <b>Sodo nameliai</b> – patogūs, ilgaamžiai, tinkantys poilsiui ar sandėliavimui
                        <br />
                        ✔ <b>Pavėsinės</b> – stilingas lauko akcentas jūsų kiemui
                        <br />
                        ✔ <b>Lauko baldai</b> – natūralūs, tvirti ir pritaikyti įvairiam orui
                        <br />
                        ✔ <b>Vaikų žaidimų nameliai</b> – smagūs, saugūs ir ilgaamžiai
                        <br />
                        ✔ <b>Sūpynės</b> – įvairaus dizaino, tinkančios tiek vaikams, tiek suaugusiems
                        <br />
                        ✔ <b>Kiti mediniai gaminiai</b> – individualūs sprendimai pagal jūsų poreikius
                        <br /><br />
                        🎯 <b>Kodėl rinktis mus?</b>
                        <br />
                        ✅ <b>Daugiau nei 25 metų patirtis</b>
                        <br />
                        ✅ <b>Aukščiausia kokybė</b> ir meistriškas dizainas
                        <br />
                        ✅ <b>Ilgaamžiškos ir tvirtos medžiagos</b>
                        <br />
                        ✅ <b>Individualūs sprendimai</b> pagal jūsų poreikius
                        <br /><br />
                        📞 <b>Susisiekite su AMG – Audriaus Medienos Gaminiai jau šiandien!</b>
                    </Text>

                </Box>
                <Box>
                    <Text fontSize="lg" lineHeight="1.6" mt={4}>
                        <strong>Kontaktai:</strong>
                        <br />
                        <strong>Email:</strong> <a href="mailto:audriusgecas4@gmail.com">audriusgecas4@gmail.com</a>
                        <br />
                        <strong>Telefonas:</strong> <a href="tel:+37063599672">+370 635 99 672</a>
                    </Text>

                </Box>
            </VStack>
        </>

    )
}

export default ApieMus
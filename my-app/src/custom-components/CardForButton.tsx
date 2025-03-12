import { Card, Image, Text, Link, Box } from "@chakra-ui/react";

interface Props {
    href: string;
    imageSrc: string;
    title: string;
}
// CustomCard component accepting `href` as a prop
const CardForButton = ({ href, imageSrc, title }: Props) => {
    return (
        <Link href={href} _hover={{ textDecoration: 'none' }}>
            <Card.Root
                maxW="sm"
                overflow="hidden"
                borderRadius="2xl"
                boxShadow="sm"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.05)' }}

            >
                <Box
                >
                    <Image
                        src={imageSrc}
                        alt={title}
                        loading="lazy"
                    />
                </Box>
                <Card.Body p="12px">
                    <Text textAlign="center" fontSize="14px" fontWeight="bold">
                        {title}
                    </Text>
                </Card.Body>
            </Card.Root>
        </Link>
    );
};

export default CardForButton;

import { Box, Center, Heading, Image, ListItem, OrderedList, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Confetti } from "./Confetti";
import logo from "./img/home.svg";
import { Question } from "./Question";

function App() {
    // TODO: Does not work in local because of homepage settings...
    const audio = new Audio("./music/christmas.mp3");
    audio.play();

    return (
        <Box>
            <Box pt={8}>
                <Stack>
                    <Center>
                        <Box maxW="sm">
                            <Image src={logo} alt="Future Home" />
                        </Box>
                    </Center>
                    <Center>
                        <Heading size="2xl" pt={4}>
                            Ta fête dans notre nouvelle maison? (presque!)
                        </Heading>
                    </Center>
                    <Center>
                        <Box maxW="2xl" pt={6}>
                            <Stack spacing={2}>
                                <Text fontSize="xl">
                                    Bienvenu à ta chasse au trésor virtuelle annuelle! Cette année je t'invite à faire
                                    un rally virtuel à travers notre prochain quartier pour trouves les indices.
                                </Text>
                            </Stack>
                        </Box>
                    </Center>
                    <Center pt={4}>
                        <Stack spacing={4}>
                            <Text fontSize="xl">Voici les règles pour cette année:</Text>
                            <OrderedList>
                                <ListItem>Assure toi d'avoir installer le programme 7-Zip.</ListItem>
                                <ListItem>Trouve le fichier "Trésor.7z" dans notre dropbox de couple.</ListItem>
                                <ListItem>Trouve la réponse à chaque question.</ListItem>
                                <ListItem>
                                    Respecte la convention de PascalCase pour transformer les mots des réponses.(i.e:
                                    Old fashioned =&gt; OldFashioned)
                                </ListItem>
                                <ListItem>Combine chaque réponse PascalCase avec un "_" (i.e: 1_2_[...]_9_10)</ListItem>
                                <ListItem>Utilise ce mot de passe pour ouvrir le fichier .7z</ListItem>
                                <ListItem>Réclame ton cadeau</ListItem>
                            </OrderedList>
                        </Stack>
                    </Center>
                    <Center pt={6}>
                        <Stack spacing={4}>
                            <Question text="1) Quel film serais tu aller voir au cinéma le plus proche au moment où les photo google map ont été prit? (titre en francais)" />
                            <Question text="2) Adresse du premier restaurant franchisé qui a ouvert à Deux-Montagnes?" />
                            <Question text="3) Quel est le nombre en minutes de parcours depuis la gare centrale par le REM pour se rendre à celle de Deux-Montagnes?" />
                            <Question text="4) Quel jour est ramassé le composte?" />
                            <Question text="5) Distance (en mètre arrondis au centaine) entre la future maison et la SAQ la plus proche?" />
                            <Question text="6)Combien de minute en vélo entre Signé Crème et la future maison?" />
                            <Question text="7) Nom du restaurant de sushi qui parrait peut rivaliser le Sushi Ville?" />
                            <Question text="8) Temps à pied (en minutes) pour se rendre à la plus proche boulangerie (qu'on espère au moins Tier 2)?" />
                            <Question text="9) Temps à pied (en minutes) pour se rendre au restaurant déjeuner le plus proche?" />
                            <Question text="10) Combien de place de parking y a t-il à côté du Noire&Blanche?" />
                        </Stack>
                    </Center>
                </Stack>
            </Box>
            <Confetti />
        </Box>
    );
}

export default App;

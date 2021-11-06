import { Box } from "@chakra-ui/react";

interface QuestionProps {
    text: string;
}

export const Question = ({ text }: QuestionProps) => {
    return (
        <Box bg="tomato" padding={4}>
            {text}
        </Box>
    );
};

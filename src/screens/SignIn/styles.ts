import { StyleSheet } from "react-native"; //objeto com as regras de estilização
import { theme } from "../../global/styles/theme";

//a sintaxe é um pouco diferente do css
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 300,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 25,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 8,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        marginBottom: 16,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
    }

});
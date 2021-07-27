import { StyleSheet } from "react-native"; //objeto com as regras de estilização
import { theme } from "../../global/styles/theme";

//a sintaxe é um pouco diferente do css
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
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
        fontSize: 20,
        marginBottom: 8,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 12,
        marginBottom: 16,
        textAlign: 'center',
    }

});
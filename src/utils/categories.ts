//Arquivo criado para definir as categorias que a aplicação vai ter
//Para trabalhar com svg, tem que instalar uma biblioteca.  expo install react-native-svg
//Também temos que instalar uma biblioteca para trabalharmos o svg como componente. yarn add -D react-native-svg-transformer
import RankedSvg from '../assets/ranked.svg';
import DuelSvg from '../assets/duel.svg';
import FunSvg from '../assets/fun.svg';
import TrainigSvg from '../assets/training.svg';

export const categories = [
    {
        id: '1',
        title: 'Ranqueada',
        icon: RankedSvg
    },
    {
        id: '2',
        title: 'Duelo 1x1',
        icon: DuelSvg
    },
    {
        id: '3',
        title: 'Diversão',
        icon: FunSvg
    },
    {
        id: '4',
        title: 'DiveTreinorsão',
        icon: TrainigSvg
    },
]
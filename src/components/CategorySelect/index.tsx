import React from 'react';
import { styles } from './styles';
import { ScrollView} from 'react-native';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = {
    categorySelected: String
    setCategory: (categoryId: String) => void //tipagem de função que não retorna nada
}

const CategorySelect = ({ categorySelected, setCategory }: Props) => {
    return (
        <>
            <ScrollView 
                horizontal 
                style={styles.container}
                showsHorizontalScrollIndicator={false /*para ocultar a barra de rolagem*/}
                contentContainerStyle={{ paddingRight: 40 }}
            >
                
                {
                    categories.map(category => (
                        <Category 
                        //sempre tenha uma key quando for percorrer uma lista
                            key={category.id}
                            title={category.title}
                            // icon={category.icon}
                            checked={category.id === categorySelected}
                            onPress={() => setCategory(category.id)}
                        />
                    ))
                }
            </ScrollView>
        </>
    )
}

export { CategorySelect };
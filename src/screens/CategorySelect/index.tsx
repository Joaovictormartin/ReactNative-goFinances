import React from 'react';
import { FlatList } from 'react-native';

import { categories } from '../../utils/categories';

import { Button } from '../../components/Forms/Button';

import { 
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

interface Category {
  key: string;
  name: string;
  icon?: string;
  color?: string;
}

interface Props {
  category: Category;
  setCategory: any;
  closeSelectCategory: () => void;
}

export function CategorySelect({ 
  category, 
  setCategory, 
  closeSelectCategory 
} : Props) {

  function handleCategorySelect(item: Category) {
    setCategory({
      key: item.key,
      name: item.name,
      icon: item.icon,
      color: item.color,
    })
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => <Separator/>}
        renderItem={({ item }) => (
          <Category 
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />

      <Footer>
        <Button 
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  )
}


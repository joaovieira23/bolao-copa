import { Center, Text, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons';

import Logo from '../assets/logo.svg';
import { Button } from '../components/Button';

export function SignIn() {
    return (
      <Center flex={1} bgColor="gray.900">
        <Logo  width={212} height={40} />
        <Button 
          title='ENTRAR COM GOOGLE'
          type='SECONDARY'
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        />
      </Center>
    )
}
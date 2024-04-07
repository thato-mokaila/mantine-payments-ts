'use client';
import {
    Anchor,
    Button,
    Center,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title
} from '@mantine/core';
import {useRouter} from 'next/navigation'
import classes from './Authentication.module.css';

export function Authentication() {
    const router = useRouter();

    function authenticate () : void {
      router.push('/dashboard', { scroll: false })
    }
    
    return (
      <Center maw={'100%'} h={'80vh'} bg="var(--mantine-color-gray-light)">
        <Container size={420} my={40}>
          <Title ta="center" className={classes.title}>
            Welcome back!
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Do not have an account yet?{' '}
            <Anchor size="sm" component="button">
              Create account
            </Anchor>
          </Text>
    
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Group justify="space-between" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" onClick={authenticate}>Sign in</Button>
          </Paper>
        </Container>
      </Center>
    );
  }
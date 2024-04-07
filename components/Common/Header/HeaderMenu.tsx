'use client'
import {Box, Button, Group} from '@mantine/core';
import {MantineLogo} from '@mantinex/mantine-logo';
import classes from './HeaderMenu.module.css';
import Link from 'next/link';
import {useRouter} from 'next/navigation'

export function HeaderMenu() {
  const router = useRouter();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/dashboard" className={classes.link}>
              Dashboard
            </Link>
            <Link href="/payments" className={classes.link}>
              Payments
            </Link>
            <Link href="/reservations" className={classes.link}>
              Reservations
            </Link>
            <Link href="/jobs" className={classes.link}>
              Jobs
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <Button onClick={() => {}}>Filters</Button>
            <Button onClick={() => router.push('/', { scroll: false })}>Logout</Button>
          </Group>

        </Group>
      </header>
    </Box>
  );
}
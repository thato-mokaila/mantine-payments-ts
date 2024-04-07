import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal, IconLayoutDashboard, IconCreditCardPay, IconReceipt2, IconDeviceMobileCheck,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import {useRouter, usePathname} from 'next/navigation';
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

const data = [
    { link: '/dashboard', label: 'Dashboard', icon: IconLayoutDashboard },
    { link: '/payments', label: 'Payments', icon: IconCreditCardPay },
    { link: '/reservations', label: 'Reservations', icon: IconReceipt2 },
    { link: '/jobs', label: 'Jobs', icon: IconDeviceMobileCheck },
];

export function NavbarMinimal() {
    const router = useRouter();
    const pathname = usePathname();
    const [active, setActive] = useState(2);

    const links = data.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={pathname === link.link}
            onClick={() => {
                setActive(index)
                router.push(link.link, { scroll: false })
            }}
        />
    ));

    return (
        <nav className={classes.navbar}>
            <Center>
                <MantineLogo type="mark" size={30} />
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={10}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={0}>
                <NavbarLink icon={IconLogout} label="Logout" onClick={() => router.push('/', { scroll: false })} />
            </Stack>
        </nav>
    );
}